import gzip
import json

import pytest
import relate

from moonmail.bench import load_json, run_case, run_trial, saved_request
from moonmail.bench_cases import (
    CASES,
    COURIERS,
    prepare,
    receipt,
    rows,
)


@pytest.mark.parametrize(
    "name,operation",
    [
        ("repair-collar", "47/repair"),
        ("hold-collar", None),
        ("use-hoist", "47/hoist"),
        ("missing-courier", None),
        ("load-one-bag", "confirm_delivery"),
        ("six-orders", "depart"),
    ],
)
def test_keyless_trial_commits_expected_state_and_decision(tmp_path, name, operation):
    run_case((name, tmp_path, False, 1, None))
    folder = tmp_path / name
    result = load_json(folder / "local-1.json")
    assert result["correct"]
    with relate.connect(str(folder / "decision.rl"), read_only=True) as db:
        initial = receipt(db)
        if name == "missing-courier":
            assert any(
                r["bag"] == "68" and r["courier"] is None for r in rows(db, COURIERS)
            )
    final = tmp_path / "final.rl"
    final.write_bytes(gzip.decompress((folder / "local-1.rl.gz").read_bytes()))
    with relate.connect(str(final), read_only=True) as db:
        assert receipt(db) == result["final"]
        if name == "use-hoist":
            shared = rows(
                db,
                """MATCH (:PlanRevision {rev:1})-[:INCLUDES]->(a:Action {op:'47/manifest'})
                <-[:INCLUDES]-(:PlanRevision {rev:2}) RETURN a.uid AS id""",
            )
            assert shared == [{"id": "1/47/manifest"}]
    if operation is None:
        assert result["status"] == "hold" and result["final"] == initial
    else:
        assert operation in [e["op"] for e in result["execution"]]
    if name == "load-one-bag":
        assert result["final"]["signal"] == "red"
        assert [
            b["bag"] for b in result["final"]["bags"] if b["stage"] == "aboard"
        ] == ["52"]
    if name == "six-orders":
        assert len(result["execution"]) == 31


def test_both_input_modes_get_the_same_checker_and_replayable_feedback():
    case = CASES["use-hoist"]
    for mode in ("flat", "relate"):
        with relate.connect(":memory:") as db:
            meta, inputs = prepare(db, case)
            assert inputs["flat"]["world"] == inputs["relate"]["world"]
            assert (
                "eligible_and_approach" not in inputs["flat"]["operators"]["47/repair"]
            )
            assert (
                inputs["relate"]["operators"]["47/repair"]["eligible_and_approach"]
                == {}
            )
            recorded = []

            def respond(messages, tools):
                recorded.append(json.loads(json.dumps(messages)))
                name = tools[0]["name"]
                if name == "read_dispatch_graph":
                    raw = {}
                elif len(recorded) == 2:
                    raw = {"steps": []}
                else:
                    raw = {
                        "steps": [
                            {"op": "47/manifest", "actor": "auto", "after": []},
                            {"op": "47/hoist", "actor": "auto", "after": []},
                            {
                                "op": "depart",
                                "actor": "auto",
                                "after": ["47/manifest", "47/hoist"],
                            },
                        ]
                    }
                return {
                    "output": [
                        {
                            "type": "function_call",
                            "call_id": str(len(recorded)),
                            "name": name,
                            "arguments": json.dumps(raw),
                        }
                    ],
                    "usage": {"total_tokens": 8},
                    "model": "test",
                    "status": "completed",
                }

            trace = run_trial(db, case, meta, inputs[mode], mode, 1, respond)
            assert trace["correct"] and not trace["first_correct"]
            assert [r["verdict"] for r in trace["attempts"]] == ["rejected", "accepted"]
            assert trace["tokens"] == 24
            assert [r["tool"] for r in trace["requests"]] == [
                "read_dispatch_graph",
                "propose_dag",
                "propose_dag",
            ]
            assert recorded[0][0]["content"] == meta["instructions"]
            assert json.loads(recorded[1][-1]["output"]) == inputs[mode]
            assert "feasible" in json.loads(recorded[2][-1]["output"])["counterexample"]
            for attempt in range(3):
                assert saved_request(trace, attempt)["input"] == recorded[attempt]


def test_provider_failure_cannot_score_as_a_correct_hold():
    case = CASES["hold-collar"]

    def unavailable(messages, tools):
        raise RuntimeError("Model service unavailable")

    with relate.connect(":memory:") as db:
        meta, inputs = prepare(db, case)
        trace = run_trial(db, case, meta, inputs["relate"], "relate", 1, unavailable)
    assert trace["status"] == "provider_error" and trace["attempts"] == []
    assert not trace["first_correct"] and not trace["correct"]


@pytest.mark.parametrize(
    "case_id",
    [
        "use-hoist",
        "midrun-3-shared-driver",
        "midrun-6-single-probe",
        "midrun-6-shared-probe",
    ],
)
def test_relate_arm_sends_the_same_requests_as_the_station_at_the_same_checkpoint(
    monkeypatch, tmp_path, case_id
):
    import shutil

    from moonmail.bench_cases import make_scene, read_world
    from moonmail.mail_agent import exhaust
    from moonmail.mail_planning import local_plan
    from moonmail.yard import YardRun

    case = CASES[case_id]
    initial = tmp_path / "decision.rl"
    with relate.connect(str(initial)) as db:
        meta, inputs = prepare(db, case)
        solution = local_plan(read_world(db, case, make_scene(case)), meta["retained"])
    requests = []

    def respond(messages, tools):
        requests.append(json.loads(json.dumps([messages, tools])))
        name = tools[0]["name"]
        if name == "read_dispatch_graph":
            raw = {}
        elif len(requests) == 2:
            raw = {"steps": [{"op": "depart", "actor": "auto", "after": []}]}
        else:
            raw = solution
        return {
            "output": [
                {
                    "type": "function_call",
                    "name": name,
                    "call_id": str(len(requests)),
                    "arguments": json.dumps(raw),
                }
            ],
            "usage": {"total_tokens": 1},
            "model": "test",
        }

    monkeypatch.setattr("moonmail.mail_agent.azure_transport", lambda _: respond)
    station_file = tmp_path / "station.rl"
    shutil.copyfile(initial, station_file)
    with relate.connect(str(station_file)) as db:
        station = YardRun(db, make_scene(case), "azure", None)
        station.rev = 1
        impact = rows(
            db, "MATCH (:Event {id:1})-[:VIOLATES]->(f:WorldFact) RETURN f.id AS fact"
        )
        station.events = [{"seq": 0}, {"seq": 1, "issues": impact}]
        station.positions.update(
            {
                r["id"]: (r["x"], r["z"])
                for r in rows(db, "MATCH (r:Robot) RETURN r.id AS id,r.x AS x,r.z AS z")
            }
        )
        assert exhaust(station.plan_steps()) == case.feasible
    station_requests = requests.copy()
    requests.clear()
    with relate.connect(str(initial)) as db:
        trace = run_trial(db, case, meta, inputs["relate"], "relate", 1, respond)
    assert trace["correct"] and not trace["first_correct"]
    assert requests == station_requests


def test_resume_preserves_completed_trials_and_finishes_missing_cases(tmp_path):
    from argparse import Namespace
    from moonmail.bench import run_suite

    args = Namespace(
        case=["one-order", "missing-courier"],
        mode="local",
        repeats=3,
        jobs=1,
        output=tmp_path,
        env_file=None,
        resume=False,
    )
    run_suite(args)
    complete = tmp_path / "one-order" / "local-1.json"
    saved = complete.stat().st_mtime_ns
    missing = tmp_path / "missing-courier" / "local-1.json"
    missing.unlink()
    args.resume = True
    run_suite(args)
    assert complete.stat().st_mtime_ns == saved
    assert load_json(missing)["status"] == "hold"


@pytest.mark.parametrize("orders", [3, 6])
@pytest.mark.parametrize("scope", ["single", "shared"])
@pytest.mark.parametrize("kit", ["driver", "probe"])
def test_midrun_fault_follows_actual_carriages_and_preserves_independent_work(
    tmp_path, orders, scope, kit
):
    from moonmail.bench_cases import ORDER_CARRIAGES

    name = f"midrun-{orders}-{scope}-{kit}"
    run_case((name, tmp_path, False, 1, None))
    folder = tmp_path / name
    with relate.connect(str(folder / "decision.rl"), read_only=True) as db:
        equipment = rows(db, ORDER_CARRIAGES)
        impact = rows(
            db,
            "MATCH (:Event {id:1})-[e]->(a:Action) RETURN type(e) AS effect,a.op AS op",
        )
    assert [(r["stage"], r["waybill"]) for r in equipment] == [
        ("platform", "unsigned"),
        ("staged", "signed"),
        ("aboard", "unsigned"),
    ] * (orders // 3)
    affected = {"47/load"}
    if scope == "shared":
        affected.add("52/load")
        if orders == 6:
            affected.add("81/load")
    assert {r["op"] for r in impact if r["effect"] == "INVALIDATES"} == affected
    assert {r["op"] for r in impact if r["effect"] == "BLOCKS"} == {"depart"}
    assert {r["bag"] + "/load" for r in equipment if not r["online"]} == affected
    meta = load_json(folder / "case.json")
    assert "68/manifest" in meta["retained"] and not affected.intersection(
        meta["retained"]
    )
    assert "52/manifest" not in meta["retained"]
    initial = load_json(folder / "relate-input.json")["operators"]
    assert set(initial["47/hoist"]["eligible_and_approach"]) == {"Skim"}
    assert not initial["52/hoist"]["eligible_and_approach"]
    assert bool(initial["47/repair"]["eligible_and_approach"]) == (kit == "driver")
    trial = load_json(folder / "local-1.json")
    assert trial["correct"]
    assert trial["status"] == (
        "hold" if (scope, kit) == ("shared", "probe") else "executed"
    )


@pytest.mark.parametrize("override", [None, 1])
def test_one_run_schedules_all_published_checkpoints_and_resumes_the_same_counts(
    tmp_path, monkeypatch, override
):
    from argparse import Namespace
    from types import SimpleNamespace
    from moonmail import bench, bench_report

    jobs = []
    monkeypatch.setattr(
        bench, "azure_transport", lambda _: SimpleNamespace(config_digest="test")
    )
    monkeypatch.setattr(bench, "run_case", jobs.append)
    monkeypatch.setattr(bench_report, "write_reports", lambda _: None)
    args = Namespace(
        case=None,
        mode="paired",
        repeats=override,
        jobs=1,
        output=tmp_path,
        env_file=None,
        resume=False,
    )
    bench.run_suite(args)
    expected = bench.repetitions_by_case(load_json(bench.PUBLISHED / "suite.json"))
    assert len(expected) == 20 and sum(expected.values()) == 68
    if override is not None:
        expected = dict.fromkeys(expected, override)
    assert {case: count for case, _, _, count, _ in jobs} == expected
    assert bench.repetitions_by_case(load_json(tmp_path / "suite.json")) == expected
    original_jobs = jobs.copy()
    jobs.clear()
    args.resume, args.repeats = True, 9
    bench.run_suite(args)
    assert jobs == original_jobs


def test_inspect_handles_mixed_trial_counts_in_one_report(capsys):
    from argparse import Namespace
    from moonmail.bench import PUBLISHED, inspect

    args = Namespace(
        case="midrun-6-shared-driver",
        results=PUBLISHED,
        mode=None,
        trial=4,
        input=False,
        why=False,
    )
    inspect(args)
    text = capsys.readouterr().out
    assert (
        "Bag 74 load waits for" in text and "Ready now" in text and "exhausted" in text
    )
    args.case = "six-orders"
    with pytest.raises(ValueError, match="1 to 3"):
        inspect(args)
