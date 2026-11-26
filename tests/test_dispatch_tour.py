import json
from itertools import pairwise
from pathlib import Path
from shutil import copyfile

import pytest
import relate
from fastapi.testclient import TestClient

from moonmail import server
from moonmail.depot import Scenario
from moonmail.episode import episode_steps, run_episode
from moonmail.mail_episode import mail_steps
from moonmail.mail_store import READY
from moonmail.recordings import recording
from moonmail.yard import YardRun, seed_yard, yard_layout


def test_film_revalidates_and_supports_player_range_requests(tmp_path, monkeypatch):
    film = tmp_path / "moonmail-demo.mp4"
    monkeypatch.setattr(server, "ROOT", tmp_path)
    url = "/api/film"
    film.write_bytes(b"first cut")
    with TestClient(server.app) as client:
        head = client.head(url)
        assert head.status_code == 200 and not head.content
        assert head.headers["cache-control"] == "no-cache"
        replacement = tmp_path / "new.mp4"
        replacement.write_bytes(b"revised film")
        replacement.replace(film)
        clip = client.get(
            url, headers={"Range": "bytes=0-6", "If-None-Match": head.headers["etag"]}
        )
        assert clip.status_code == 206 and clip.content == b"revised"
        assert clip.headers["content-range"] == "bytes 0-6/12"
        assert head.headers["etag"] != clip.headers["etag"]


def test_recorded_timeline_and_inspection_read_the_persistent_store(tmp_path, monkeypatch):
    source = server.ROOT / "viewer/public/episodes"
    folder = tmp_path / "viewer/public/episodes"
    folder.mkdir(parents=True)
    for extension in ("json", "rl"):
        copyfile(source / f"post.{extension}", folder / f"post.{extension}")
    motion = json.loads((folder / "post.json").read_text())
    assert "events" not in motion
    with relate.connect(str(folder / "post.rl")) as db:
        original = db.execute(
            "MATCH (e:Event {kind:'order'}) RETURN e.id AS id, e.data AS data"
        ).fetchall()[0]
        event = json.loads(original["data"])
        event["title"] = "Order read from the copied Relate store"
        db.execute("MATCH (e:Event {id:$id}) SET e.data=$data",
                   {"id": original["id"], "data": json.dumps(event)})

    monkeypatch.setattr(server, "ROOT", tmp_path)
    with TestClient(server.app) as client:
        episode = client.get("/api/recordings/post").json()
        assert episode["events"][0]["title"] == event["title"]
        assert episode["frames"] == motion["frames"]
        inspection = client.get("/api/recordings/post/evidence/fault").json()
        assert inspection["database"] == "post.rl" and "MATCH" in inspection["query"]
        assert {(r["effect"], r["action"]) for r in inspection["rows"]} == {
            ("INVALIDATES", "1/load"), ("BLOCKS", "1/depart")
        }


def test_interrupted_dispatch_cleans_its_unfinished_store(tmp_path, monkeypatch):
    scenario = Scenario(mission="mail", service_kit="driver")
    steps = episode_steps(scenario, tmp_path)
    assert next(steps)["type"] == "init"
    next(steps)
    steps.close()
    assert list(tmp_path.iterdir()) == []

    def unavailable(_settings):
        raise RuntimeError("Model connection lost")

    monkeypatch.setattr("moonmail.mail_agent.azure_transport", unavailable)
    with pytest.raises(RuntimeError, match="connection lost"):
        run_episode(scenario, tmp_path, "azure")
    assert list(tmp_path.iterdir()) == []


def test_bundled_probe_shows_the_rejected_attempt_and_its_actual_retry():
    folder = Path(__file__).resolve().parents[1] / "viewer" / "public" / "episodes"
    episode = recording(folder, "post-probe")
    rejection = next(e for e in episode["events"] if e["kind"] == "rejected")
    feedback = rejection["feedback"]["counterexample"]
    assert feedback == "repair has no eligible body in the graph"
    retry = next(
        e
        for e in episode["events"]
        if e["kind"] == "proposal" and e["seq"] > rejection["seq"]
    )
    assert any(s["op"] == "hoist" for s in retry["proposal"]["steps"])
    assert rejection["planGraph"]["revision"] == retry["planGraph"]["revision"] == 1
    with relate.connect(str(folder / "post-probe.rl"), read_only=True) as db:
        attempts = db.execute(
            "MATCH (a:ProposalAttempt {revision:2}) "
            "RETURN a.outcome AS verdict, a.feedback AS feedback, a.proposal AS draft"
        ).fetchall()
    assert any(
        a["verdict"] == "rejected" and a["feedback"] == feedback for a in attempts
    )
    assert any(
        a["verdict"] == "accepted" and json.loads(a["draft"]) == retry["proposal"]
        for a in attempts
    )


def test_stream_publishes_the_draft_before_it_can_be_executed(tmp_path):
    scene = Scenario(mission="mail", service_kit="driver", fork_fault=True)
    packets = list(mail_steps(scene, tmp_path, "deterministic", None))
    phases = [e for p in packets for e in p.get("events", [])]
    events = [e for e in phases if e["kind"] in ("read", "proposal", "decision")]
    assert [e["kind"] for e in events] == ["read", "proposal", "decision"] * 2
    for index in (0, 3):
        read, draft, commit = events[index : index + 3]
        revision = index // 3 + 1
        assert read["tick"] < draft["tick"] < commit["tick"]
        assert read["modelInput"]["goal"]
        assert read["planGraph"] == draft["planGraph"]
        assert draft["planGraph"]["revision"] == revision - 1
        assert commit["planGraph"]["revision"] == revision
        assert commit["proposal"] == draft["proposal"]
        assert not any(
            draft in p.get("events", []) and commit in p["events"] for p in packets
        )
    second = events[3]["modelInput"]
    assert second["world"]["forks"] == "offline"
    assert set(second["retained"]) == {"manifest"}
    assert list(second["operators"]["repair"]["eligible_and_approach"]) == ["Patch"]


@pytest.mark.parametrize(
    "kit, recovery", [("driver", "47/repair"), ("probe", "47/hoist")]
)
def test_junction_shares_one_departure_and_preserves_the_other_orders(
    tmp_path, kit, recovery
):
    scene = Scenario(mission="yard", service_kit=kit, fork_fault=True)
    episode = run_episode(scene, tmp_path)
    assert episode["outcome"] == "delivered"
    events, frames = episode["events"], episode["frames"]
    reads = [e["modelInput"] for e in events if e["kind"] == "read"]
    assert {d["address"] for d in reads[0]["orders"].values()} == {
        "Northport",
        "Eastbank",
        "Westmere",
    }
    assert set(reads[1]["retained"]) == {"52/load", "68/load"}
    assert reads[1]["orders"]["47"]["holder"] == "Skim"
    fault = next(e for e in events if e["kind"] == "fork fault")
    assert {(r["uid"], r["effect"]) for r in fault["proof"]["rows"]} == {
        ("1/47/load", "INVALIDATES"),
        ("1/depart", "BLOCKS"),
    }
    first, second = [e["planGraph"] for e in events if e["kind"] == "decision"]
    nodes = {n["op"]: n["uid"] for n in second["nodes"]}
    assert len(first["nodes"]) == 16
    assert nodes[recovery] == "2/" + recovery
    assert len({n["uid"] for n in first["nodes"]} & set(nodes.values())) == 14
    assert {
        edge["source"] for edge in second["edges"] if edge["target"] == nodes["depart"]
    } == {
        nodes[op]
        for op in (
            "47/manifest",
            "52/manifest",
            "68/manifest",
            "52/load",
            "68/load",
            "47/load" if kit == "driver" else "47/hoist",
        )
    }
    waves = [e for e in events if e["kind"] == "assignment"]
    assert max(len(e["active"]) for e in waves) == 5
    for wave in waves:
        actors = [
            n["actor"] for n in wave["planGraph"]["nodes"] if n["state"] == "running"
        ]
        assert len(set(actors)) == len(actors)
    for frame in frames:
        assert len({tuple(pos) for pos in frame["robots"].values()}) == 9
        if frame["signal"] == "green":
            for o in episode["layout"]["yard"]["orders"]:
                cargo = frame["cargoByBag"][o["id"]]
                assert (cargo["holder"], cargo["manifest"]) == (o["coach"], "signed")
    for a, b in pairwise(frames):
        for who, (x, z) in a["robots"].items():
            nx, nz = b["robots"][who]
            assert abs(x - nx) + abs(z - nz) <= 1
    with relate.connect(
        str(tmp_path / episode["id"] / "episode.rl"), read_only=True
    ) as db:
        bound = db.execute("""MATCH (:PlanRevision {rev:2})-[:INCLUDES]->(a:Action)-[:FOR_ORDER]->(o:Order)
                           RETURN a.uid AS uid,o.id AS bag""").fetchall()
        assert {r["uid"] for r in bound} == set(nodes.values()) - {nodes["depart"]}
        raw = db.execute(
            "MATCH (e:Event {kind:'read'}) RETURN e.data AS d ORDER BY e.tick"
        ).fetchall()
        assert [json.loads(r["d"])["modelInput"] for r in raw] == reads


@pytest.mark.parametrize("observation", ["hatch", "address"])
def test_junction_holds_all_coaches_with_incomplete_goal(tmp_path, observation):
    e = run_episode(
        Scenario(mission="yard", service_kit="driver", mail_fault=observation), tmp_path
    )
    assert e["outcome"] == "blocked" and e["events"][-1]["kind"] == "hold"
    assert all(f["signal"] == "red" for f in e["frames"])
    assert e["frames"][-1]["cargoByBag"]["47"]["holder"] == "Skim"


def test_unreachable_junction_wave_becomes_a_graph_observation(tmp_path):
    settings = Scenario(mission="yard", service_kit="driver")
    scene = yard_layout(settings)
    with relate.connect(str(tmp_path / "blocked-yard.rl")) as db:
        seed_yard(db, scene, settings)
        run = YardRun(db, scene, "deterministic", None)
        assert run.plan()
        ready = db.execute(READY, {"rev": run.rev}).fetchall()
        scene["obstacles"].extend(
            o[key] for o in scene["yard"]["orders"] for key in ("shelf", "desk")
        )
        list(run.execute_wave(ready))
        assert run.events[-1]["kind"] == "violation"
        assert all(i["fact"].startswith("can/") for i in run.events[-1]["issues"])
        assert not run.plan()


@pytest.mark.parametrize(
    ("reconfigure", "status"),
    [
        ("MATCH (:Robot {id:'Jack'})-[m:MOUNTS]->(:Tool) DELETE m", "unmounted"),
        (
            ("MATCH (t:Tool {id:'Jack forks'})-[p:PROVIDES]->(:Skill {id:'Fork'}), "
             "(s:Skill {id:'Scan'}) DELETE p CREATE (t)-[:PROVIDES]->(s)"),
            "online",
        ),
    ],
)
def test_loading_requires_the_matching_carriage_for_each_order(
    tmp_path, reconfigure, status
):
    settings = Scenario(mission="yard", service_kit="driver")
    scene = yard_layout(settings)
    with relate.connect(str(tmp_path / "detached.rl")) as db:
        seed_yard(db, scene, settings)
        run = YardRun(db, scene, "deterministic", None)
        db.execute(reconfigure)
        world = run.read_world()
        assert world.facts["forks"] == status
        assert world.options["47/load"] == {}
        assert "Jack" in world.options["47/manifest"]
        assert world.facts["Fern/forks"] == "online"
        for bag in ("52", "68"):
            assert set(world.options[f"{bag}/load"]) == {"Fern"}


def test_playhead_queries_exclude_future_reads_faults_and_assignments():
    with TestClient(server.app) as client:
        def rows(question, tick):
            response = client.get(f"/api/recordings/post/evidence/{question}", params={"tick": tick})
            response.raise_for_status()
            return response.json()

        assert rows("actions", 2)["rows"] == []
        assert rows("departure", 2)["rows"] == []
        assert len(rows("departure", 3)["rows"]) == 2
        assert rows("fault", 25)["rows"] == []
        assert {r["effect"] for r in rows("fault", 26)["rows"]} == {"BLOCKS", "INVALIDATES"}
        assert rows("candidates", 26)["event_tick"] == 1
        assert rows("candidates", 27)["event_tick"] == 27
        assert rows("custody", 21)["rows"][0]["holder"] == "Wick"
        assert rows("custody", 22)["rows"][0]["holder"] == "Skim"
        before = {r["fact"]: r["value"] for r in rows("facts", 25)["rows"]}
        after = {r["fact"]: r["value"] for r in rows("facts", 26)["rows"]}
        assert (before["forks"], after["forks"]) == ("online", "offline")
        bodies = client.get("/api/recordings/post-probe").json()["fleetGraph"]
        assert {"robot": "Patch", "mounted": "Inspection probe", "provides": None, "fits": "Test socket"} in bodies["mounts"]


def test_live_checkpoint_is_queryable_before_completion_and_cleaned_on_cancel(tmp_path, monkeypatch):
    monkeypatch.setattr(server, "ROOT", tmp_path)
    scenario = Scenario(service_kit="driver", mail_fault="forks")
    steps = episode_steps(scenario, tmp_path / "runs", live_inspection=True)
    try:
        header = next(steps)
        url = "/api/episodes/" + header["id"]
        with TestClient(server.app) as client:
            assert client.get(url + "/evidence/bodies?tick=0").json()["rows"]
            assert client.get(url + "/graph").status_code == 404
            for packet in steps:
                if any(e["kind"] == "decision" for e in packet.get("events", [])):
                    break
            assert len(client.get(url + "/evidence/actions?tick=3").json()["rows"]) == 6
            assert client.get(url + "/evidence/actions?tick=0").json()["rows"] == []
    finally:
        steps.close()
    assert list((tmp_path / "runs").iterdir()) == []


@pytest.mark.parametrize("couriers, expected", [(1, "blocked"), (2, "delivered")])
def test_custom_yard_changes_candidates_and_shared_fork_impact(tmp_path, couriers, expected):
    scenario = Scenario(mission="yard", fleet={"orders": 2, "pickers": 2, "couriers": couriers,
                        "forklifts": 1, "mechanics": 1}, service_kit="driver", mail_fault="forks")
    ep = run_episode(scenario, tmp_path)
    assert ep["outcome"] == expected
    assert len(ep["layout"]["starts"]) == 4 + couriers
    roster = {row["robot"] for row in ep["fleetGraph"]["skills"]}
    assert roster == set(ep["layout"]["starts"])
    with relate.connect(str(tmp_path / ep["id"] / "episode.rl"), read_only=True) as db:
        pairs = db.execute("""MATCH (o:Order)-[:LOADS_WITH]->(:Tool)<-[:MOUNTS]-(r:Robot)
                              RETURN o.id AS bag,r.id AS loader ORDER BY bag""").fetchall()
        assert pairs == [{"bag": "47", "loader": "Jack"}, {"bag": "52", "loader": "Jack"}]
    if couriers == 1:
        read = next(e for e in ep["events"] if e["kind"] == "read")["modelInput"]
        assert not read["operators"]["52/cross"]["eligible_and_approach"]
        assert "Bag 52" in ep["events"][-1]["reason"]
        assert ep["frames"][-1]["signal"] == "red"
    else:
        fault = next(e for e in ep["events"] if e["kind"] == "fork fault")
        assert {r["uid"] for r in fault["proof"]["rows"]} == {"1/47/load", "1/52/load", "1/depart"}
        assert ep["frames"][-1]["signal"] == "green"


def test_completed_cypher_console_binds_the_playhead_and_preserves_readonly_store(tmp_path, monkeypatch):
    folder = tmp_path / "viewer/public/episodes"
    folder.mkdir(parents=True)
    db = folder / "post.rl"
    copyfile(server.ROOT / "viewer/public/episodes/post.rl", db)
    monkeypatch.setattr(server, "ROOT", tmp_path)
    original = db.read_bytes()
    with TestClient(server.app) as client:
        uri = "/api/recordings/post/query"
        q = "MATCH (e:Event) WHERE e.tick <= $tick RETURN e.tick AS step ORDER BY step DESC LIMIT 1"
        assert client.post(uri, json={"statement": q, "tick": 25}).json()["rows"] == [{"step": 25}]
        read = "MATCH (a:Action) WHERE a.op='load' RETURN a"
        assert client.post(uri, json={"statement": read, "tick": 0}).json()["rows"][0]["a"]["labels"] == ["Action"]
        assert client.post(uri, json={"statement": "MATCH (a) DELETE a RETURN a", "tick": 0}).status_code == 400
        assert client.post(uri, json={"statement": "MATCH (a) RETURN a; MATCH (b) RETURN b", "tick": 0}).status_code == 400
    assert db.read_bytes() == original
