import json
from copy import deepcopy

import pytest
import relate
from fastapi.testclient import TestClient

from moonmail import server
from moonmail.depot import Scenario, layout, read_facts
from moonmail.episode import run_episode
from moonmail.mail_agent import propose
from moonmail.mail_episode import MailRun
from moonmail.mail_planning import InvalidPlan, local_plan, verify
from moonmail.mail_store import READY, refresh, seed_mail


@pytest.fixture
def station(tmp_path):
    scene = layout(7, "driver")
    with relate.connect(str(tmp_path / "station.rl")) as db:
        seed_mail(db, scene, 18, True)
        yield db, scene


@pytest.mark.parametrize("archived", [False, True])
def test_lifting_requires_a_working_mounted_carriage(station, archived):
    db, scene = station
    if archived:
        db.execute("MATCH (s:Skill {id:'Fork'}) SET s.requires_tool=null,s.label=null")

    def check(state, candidate, can_lift):
        world = refresh(db, scene)
        facts = read_facts(db)
        assert facts.robots["Jack"]["body"] == "Lift"
        assert ("Fork" in facts.skills["Jack"]) == can_lift
        assert world.facts["forks"] == state
        assert ("Jack" in world.options["load"]) == candidate
        assert {"Jack", "Patch"} <= world.options["manifest"].keys()
        bindings = verify(local_plan(world, {}), world, {}).actors
        loading_steps = {
            op: actor
            for op, actor in bindings.items()
            if op in ("repair", "load", "hoist")
        }
        expected_steps = {
            "online": {"load": "Jack"},
            "offline": {"repair": "Patch", "load": "Jack"},
            "unmounted": {"hoist": "Skim"},
        }
        assert loading_steps == expected_steps[state]

    check("online", True, True)
    db.execute("MATCH (t:Tool {id:'Fork carriage'}) SET t.online=false")
    check("offline", True, False)
    db.execute("MATCH (:Robot {id:'Jack'})-[m:MOUNTS]->(:Tool) DELETE m")
    db.execute("MATCH (t:Tool {id:'Fork carriage'}) SET t.online=true")
    check("unmounted", False, False)
    db.execute(
        "MATCH (r:Robot {id:'Jack'}),(t:Tool {id:'Fork carriage'}) CREATE (r)-[:MOUNTS]->(t)"
    )
    check("online", True, True)
    db.execute("MATCH (t:Tool {id:'Fork carriage'}) DETACH DELETE t")
    check("unmounted", False, False)


@pytest.mark.parametrize(
    "clause",
    [
        "MATCH (:Embodiment {id:'Lift'})-[edge:HAS_SKILL]->(:Skill {id:'Fork'})",
        "MATCH (:Tool {id:'Fork carriage'})-[edge:PROVIDES]->(:Skill {id:'Fork'})",
    ],
)
def test_both_skill_paths_are_required_even_when_the_tool_is_online(station, clause):
    db, scene = station
    db.execute(clause + " DELETE edge")
    world = refresh(db, scene)
    assert world.facts["forks"] == "online"
    assert world.options["load"] == {}
    assert "Fork" not in read_facts(db).skills["Jack"]
    assert {"Jack", "Patch"} <= world.options["manifest"].keys()


def test_action_contracts_and_corrections(station, monkeypatch):
    db, scene = station
    world = refresh(db, scene)
    good = local_plan(world, {})
    verified = verify(good, world)
    assert verified.actors["collect"] == "Wick"
    assert verified.actors["cross"] == "Skim"
    assert set(verified.steps["depart"]) == {"load", "manifest"}
    assert verified.steps["manifest"] == []
    unsupported = {"steps": [{"op": "depart", "actor": "auto", "after": []}]}
    with pytest.raises(InvalidPlan, match="no causal predecessor"):
        verify(unsupported, world)
    cycle = deepcopy(good)
    next(s for s in cycle["steps"] if s["op"] == "collect")["after"] = ["depart"]
    with pytest.raises(InvalidPlan, match="cycle"):
        verify(cycle, world)
    unqualified = deepcopy(good)
    next(s for s in unqualified["steps"] if s["op"] == "cross")["actor"] = "Wick"
    with pytest.raises(InvalidPlan, match="Wick cannot perform cross"):
        verify(unqualified, world)

    # The transport is stubbed here to force a rejection, then an actual correction.
    replies = iter([{}, unsupported, good])

    def respond(messages, tools):
        args = next(replies)
        if args == good:
            assert "no causal predecessor" in messages[-1]["output"]
        return {
            "output": [
                {
                    "type": "function_call",
                    "name": tools[0]["name"],
                    "call_id": "test",
                    "arguments": json.dumps(args),
                }
            ],
            "usage": {"total_tokens": 1},
        }

    monkeypatch.setattr("moonmail.mail_agent.azure_transport", lambda _: respond)
    log = []
    raw, accepted, trace = propose(world, {}, "azure", None, lambda *a: log.append(a))
    assert raw == good and accepted.steps == verified.steps
    assert [entry[1] for entry in log] == ["rejected", "accepted"]
    assert [t["tool"] for t in trace] == [
        "read_dispatch_graph",
        "propose_dag",
        "propose_dag",
    ]


@pytest.mark.parametrize(
    "kit,recovery,middle",
    [("driver", "repair", "Jack"), ("probe", "hoist", "Mail lift")],
)
def test_revision_and_transactional_custody(tmp_path, kit, recovery, middle):
    e = run_episode(
        Scenario(mission="mail", service_kit=kit, fork_fault=True), tmp_path
    )
    assert e["outcome"] == "delivered"
    plans = [x for x in e["events"] if x["kind"] == "decision"]
    fault = next(x for x in e["events"] if x["kind"] == "fork fault")
    assert {r["uid"]: r["effect"] for r in fault["proof"]["rows"]} == {
        "1/load": "INVALIDATES",
        "1/depart": "BLOCKS",
    }
    old = {n["uid"]: n["state"] for n in fault["planGraph"]["nodes"]}
    assert old["1/manifest"] == "pending"
    assert {uid for uid, state in old.items() if state == "done"} == {
        "1/collect",
        "1/stage",
        "1/cross",
    }
    new = {n["op"]: n["uid"] for n in plans[1]["planGraph"]["nodes"]}
    assert new["manifest"] == "1/manifest" and new[recovery] == "2/" + recovery
    edges = {(r["source"], r["target"]) for r in plans[1]["planGraph"]["edges"]}
    load = new["load" if kit == "driver" else "hoist"]
    assert {("1/cross", load), (load, "2/depart"), ("1/manifest", "2/depart")} <= edges
    if kit == "driver":
        assert ("2/repair", load) in edges
    assert [
        (x["op"], x["actors"])
        for x in e["events"]
        if x.get("uid") == "1/manifest" and x["kind"] == "assignment"
    ] == [("manifest", ["Jack"])]
    final = e["frames"][-1]
    assert (
        final["holder"] == "Coach B"
        and final["manifest"] == "signed"
        and final["signal"] == "green"
    )
    assert (
        next(f["tick"] for f in e["frames"] if f["signal"] == "green") < final["tick"]
    )
    assert all(
        f["holder"] != "Coach A"
        and len({tuple(p) for p in f["robots"].values()}) == len(f["robots"])
        for f in e["frames"]
    )
    with relate.connect(str(tmp_path / e["id"] / "episode.rl"), read_only=True) as db:
        history = db.execute(
            "MATCH (c:CustodyChange)-[:TO]->(n) RETURN n.id AS holder ORDER BY c.tick"
        ).fetchall()
        assert [r["holder"] for r in history] == ["Wick", "Skim", middle, "Coach B"]
        event = db.execute(
            "MATCH (:PlanRevision {rev:2})-[:RESPONDS_TO]->(e) RETURN e.data AS snapshot"
        ).fetchall()[0]
        assert json.loads(event["snapshot"])["planGraph"] == fault["planGraph"]
        assert (
            json.loads(
                db.execute(
                    "MATCH (r:PlanRevision {rev:1}) RETURN r.proposal AS raw"
                ).fetchall()[0]["raw"]
            )
            == plans[0]["proposal"]
        )


@pytest.mark.parametrize(
    "observation,guard", [("address", "address"), ("hatch", "hatch")]
)
def test_unsatisfied_world_precondition_holds_train(tmp_path, observation, guard):
    e = run_episode(
        Scenario(mission="mail", service_kit="driver", mail_fault=observation), tmp_path
    )
    fail = next(x for x in e["events"] if x["kind"] == "violation")
    assert guard in {issue["fact"] for issue in fail["issues"]}
    assert e["outcome"] == "blocked" and e["events"][-1]["kind"] == "hold"
    assert all(f["signal"] == "red" for f in e["frames"])
    assert e["frames"][-1]["holder"] == "Skim"


def test_guard_change_between_dispatch_and_commit(station):
    db, scene = station
    run = MailRun(db, scene, "deterministic", None)
    assert run.plan()
    ready = {r["op"]: r for r in db.execute(READY, {"rev": 1}).fetchall()}
    assert set(ready) == {"collect", "manifest"}
    execution = run.execute(ready["manifest"])
    next(execution)
    before = deepcopy(run.positions)
    db.execute(
        "MATCH (:Robot {id:'Jack'})-[:INSTANCE_OF]->(:Embodiment)-[s:HAS_SKILL]->(:Skill {id:'Scan'}) DELETE s"
    )
    with pytest.raises(StopIteration) as stop:
        next(execution)
    assert (
        stop.value.value is False
        and run.positions == before
        and run.world.facts["manifest"] == "unsigned"
    )
    assert {r["uid"] for r in run.events[-1]["proof"]["rows"]} == {
        "1/manifest",
        "1/depart",
    }
    assert run.plan()
    rebound = {r["op"]: r for r in run.events[-1]["planGraph"]["nodes"]}
    assert (
        rebound["manifest"]["actor"] == "Patch"
        and rebound["manifest"]["uid"] == "2/manifest"
    )
    assert rebound["load"]["uid"] == "1/load"


def test_no_grid_route_invalidates_the_bound_action(station):
    db, scene = station
    run = MailRun(db, scene, "deterministic", None)
    assert run.plan()
    scene["obstacles"].extend([[0, 4], [2, 4], [1, 3], [1, 5]])
    before = deepcopy(run.positions)
    assert not list(run.execute({"uid": "1/collect", "op": "collect"}))
    assert run.positions == before and run.holder == "Shelf"
    assert run.events[-1]["issues"][0]["fact"] == "can/collect/Wick"
    assert not run.plan()


def test_stream_already_contains_running_graph_before_completion(tmp_path, monkeypatch):
    monkeypatch.setattr(server, "ROOT", tmp_path)
    client = TestClient(server.app)
    response = client.post(
        "/api/live?pace=0",
        json={"mission": "mail", "service_kit": "probe", "mail_fault": "forks"},
    )
    packets = [json.loads(row) for row in response.iter_lines()]
    assert packets[0]["type"] == "init" and packets[-1]["type"] == "complete"
    e = packets[-1]["episode"]
    assert e["events"] == [event for p in packets[:-1] for event in p.get("events", [])]
    assert e["frames"] == [f for p in packets[:-1] for f in p.get("frames", [])]
    for packet in packets:
        if packet["type"] == "update" and packet["frames"]:
            assert len(packet["frames"]) == 1
            assert all(
                e["tick"] == packet["frames"][0]["tick"] for e in packet["events"]
            )
    action = next(
        p
        for p in packets
        if any(ev["kind"] == "assignment" for ev in p.get("events", []))
    )
    assert any(
        n["state"] == "running" for n in action["events"][0]["planGraph"]["nodes"]
    )
    url = "/api/episodes/" + e["id"]
    assert client.get(url + "/graph").status_code == 200
    inspection = client.get(url + "/evidence/departure").json()
    assert inspection["database"] == "episode.rl"
    assert {r["prerequisite"] for r in inspection["rows"]} == {"hoist", "manifest"}


def test_withdrawn_signature_after_loading_can_be_earned_again(station):
    db, scene = station
    run = MailRun(db, scene, "deterministic", None)
    assert run.plan()
    for op in ("collect", "stage", "cross", "manifest", "load"):
        ready = {r["op"]: r for r in db.execute(READY, {"rev": 1}).fetchall()}
        list(run.execute(ready[op]))
    assert run.holder == "Coach B" and run.world.facts["manifest"] == "signed"
    db.execute("MATCH (w:Waybill) SET w.status='unsigned'")
    assert run.check() and run.plan()
    nodes = {n["uid"]: n["state"] for n in run.events[-1]["planGraph"]["nodes"]}
    assert nodes["1/manifest"] == "done" and nodes["2/manifest"] == "pending"
    edges = run.events[-1]["planGraph"]["edges"]
    assert {"source": "2/manifest", "target": "2/depart"} in edges
    assert {"source": "1/load", "target": "2/depart"} in edges
    for expected in ("2/manifest", "2/depart"):
        ready = db.execute(READY, {"rev": 2}).fetchall()
        assert [r["uid"] for r in ready] == [expected]
        list(run.execute(ready[0]))
    assert run.holder == "Coach B" and run.world.facts["signal"] == "green"
