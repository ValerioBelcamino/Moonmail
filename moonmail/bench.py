"""Run paired headless planning trials or inspect the published evidence offline."""

import gzip
import hashlib
import json
import os
import shutil
import tempfile
import time
from concurrent.futures import ProcessPoolExecutor
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4

import relate

from .agent import azure_transport
from .bench_cases import (
    CASES,
    execute,
    make_scene,
    meets_goal,
    prepare,
    read_world,
    receipt,
    rows,
)
from .depot import transaction
from .mail_agent import (
    MAX_PROPOSALS,
    ModelProtocolError,
    ProposalBudgetExceeded,
    proposal_steps,
)
from .mail_store import persist_plan, retained_assignments, snapshot

PUBLISHED = Path(__file__).resolve().parents[1] / "benchmarks" / "results"
PROTOCOL = 3


def save_json(path, data):
    with tempfile.NamedTemporaryFile(
        "w", dir=path.parent, encoding="utf-8", delete=False
    ) as tmp:
        staged = Path(tmp.name)
        try:
            json.dump(data, tmp, ensure_ascii=False, indent=2, allow_nan=False)
            tmp.write("\n")
        except BaseException:
            tmp.close()
            staged.unlink(missing_ok=True)
            raise
    staged.replace(path)


@contextmanager
def suite_lock(destination):
    # OS locks are released even if a paid run is interrupted. Keep lock files
    # outside the publishable artifacts and use the same name for each destination.
    digest = hashlib.sha256(os.fsencode(destination.resolve())).hexdigest()
    lock = Path(tempfile.gettempdir()) / f"moonmail-bench-{digest}.lock"
    with lock.open("a+b") as handle:
        try:
            if os.name == "nt":
                import msvcrt

                if handle.tell() == 0:
                    handle.write(b"0")
                    handle.flush()
                handle.seek(0)
                msvcrt.locking(handle.fileno(), msvcrt.LK_NBLCK, 1)
            else:
                import fcntl

                fcntl.flock(handle, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError as error:
            raise ValueError(f"A run is already writing to {destination}.") from error
        yield


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def repetitions_by_case(suite):
    if "repetitions_by_case" in suite:
        return suite["repetitions_by_case"]
    # Earlier recordings used a uniform count and the same per-trial format.
    return dict.fromkeys(suite["cases"], suite["repeats"])


class TransportFailure(RuntimeError):
    pass


def request_history(messages):
    # Provider-private reasoning content is never part of the exported evidence.
    return [
        {key: msg[key] for key in ("type", "id") if key in msg}
        if msg.get("type") == "reasoning"
        else msg.copy()
        for msg in messages
    ]


def run_trial(db, case, meta, context, mode, trial, respond=None):
    scene = make_scene(case)
    world = read_world(db, case, scene)
    retained = retained_assignments(snapshot(db, meta["revision"] - 1))
    if retained != meta["retained"]:
        raise ValueError("The surviving assignments differ from the captured decision.")
    trace = {
        "case": case.id,
        "trial": trial,
        "mode": mode,
        "expected": "goal" if case.feasible else "hold",
        "options": getattr(respond, "options", {}),
        "history": [],
        "schemas": {},
        "requests": [],
        "attempts": [],
        "execution": [],
    }
    attempts = trace["attempts"]
    start_validation = 0

    def observe_call(messages, tools):
        name = tools[0]["name"]
        history = request_history(messages)
        if history[: len(trace["history"])] != trace["history"]:
            raise ValueError(
                "The saved requests no longer share an append-only tool conversation."
            )
        trace["history"] = history
        trace["schemas"][name] = tools[0]
        request = {"tool": name, "history_length": len(history)}
        trace["requests"].append(request)
        start = time.perf_counter()
        try:
            data = respond(messages, tools)
        except RuntimeError as error:
            request["error"] = str(error)
            raise TransportFailure(str(error)) from error
        finally:
            request["ms"] = round(1000 * (time.perf_counter() - start))
        request.update(
            model=data.get("model"),
            usage=data.get("usage", {}),
            response_status=data.get("status"),
        )
        calls = [item for item in data["output"] if item["type"] == "function_call"]
        request["arguments"] = calls[0].get("arguments", "") if len(calls) == 1 else ""
        return data

    def log_attempt(raw, verdict, feedback):
        row = attempts[-1]
        row.update(
            verdict=verdict,
            feedback=feedback,
            validation_ms=round(1000 * (time.perf_counter() - start_validation), 2),
        )
        db.execute(
            """CREATE (:ProposalAttempt {revision:$rev,author:$author,attempt:$i,
            proposal:$raw,outcome:$outcome,feedback:$feedback})""",
            {
                "rev": meta["revision"],
                "author": mode,
                "i": len(attempts),
                "raw": row["arguments"],
                "outcome": verdict,
                "feedback": feedback,
            },
        )

    planner = proposal_steps(
        world,
        retained,
        "deterministic" if mode == "local" else "azure",
        None,
        log_attempt,
        context=context if mode == "flat" else None,
        transport=observe_call if mode != "local" else None,
    )
    solution = None
    try:
        while True:
            event, value = next(planner)
            if event == "read" and mode != "local" and value != context:
                raise ValueError(
                    "The station's actual planning read differs from the saved model input."
                )
            if event == "proposal":
                request = trace["requests"][-1] if trace["requests"] else {}
                attempts.append(
                    {
                        "arguments": request.get("arguments", json.dumps(value)),
                        "proposal": value,
                        "model": request.get("model"),
                        "usage": request.get("usage", {}),
                    }
                )
                start_validation = time.perf_counter()
    except StopIteration as complete:
        raw, solution, _ = complete.value
        trace["status"] = "accepted" if solution else "hold"
    except ProposalBudgetExceeded:
        trace["status"] = "exhausted"
    except ModelProtocolError as error:
        trace.update(status="protocol_error", error=str(error))
    except TransportFailure as error:
        trace.update(status="provider_error", error=str(error))

    if solution is not None:
        attempts[-1].update(bindings=solution.actors, effort=solution.cost)
        with transaction(db):
            ids = persist_plan(
                db, meta["revision"], raw, solution, mode, world.contracts
            )
        try:
            with transaction(db):
                trace["execution"] = execute(
                    db,
                    world,
                    {o["id"]: o for o in scene["yard"]["orders"]},
                    solution,
                    ids,
                )
        except ValueError as error:
            trace.update(status="execution_error", error=str(error))
        else:
            trace["status"] = "executed"
    trace["final"] = receipt(db)
    goal = meets_goal(case, trace["final"])
    trace["correct"] = (trace["status"] == "executed" and case.feasible and goal) or (
        trace["status"] == "hold"
        and not case.feasible
        and not goal
        and trace["final"]["signal"] == "red"
    )
    trace["first_correct"] = bool(
        attempts and attempts[0]["verdict"] != "rejected" and trace["correct"]
    )
    trace["tokens"] = sum(
        r.get("usage", {}).get("total_tokens", 0) for r in trace["requests"]
    )
    trace["model_ms"] = sum(r["ms"] for r in trace["requests"] if "error" not in r)
    trace["validation_ms"] = round(sum(a["validation_ms"] for a in attempts), 2)
    return trace


def saved_request(trace, attempt):
    calls = trace["requests"]
    matches = [
        call
        for call in calls
        if call["tool"] == ("read_dispatch_graph" if attempt == 0 else "propose_dag")
    ]
    i = max(0, attempt - 1)
    if attempt < 0 or i >= len(matches):
        raise ValueError(f"Request {attempt} is outside this saved tool conversation.")
    call = matches[i]
    return {
        "mode": trace["mode"],
        "model": call.get("model"),
        **trace["options"],
        "input": trace["history"][: call["history_length"]],
        "tools": [trace["schemas"][call["tool"]]],
    }


def run_case(job):
    case_id, destination, paired, repeats, env_file = job
    case = CASES[case_id]
    folder = Path(destination) / case_id
    decision = folder / "decision.rl"
    if folder.exists():
        meta = load_json(folder / "case.json")
        if hashlib.sha256(decision.read_bytes()).hexdigest() != meta["sha256"]:
            raise ValueError(f"The starting database changed for {case_id}.")
        contexts = {
            mode: load_json(folder / f"{mode}-input.json")
            for mode in ("flat", "relate")
        }
    else:
        with tempfile.TemporaryDirectory(dir=destination) as tmp:
            ready = Path(tmp) / "fixture"
            ready.mkdir()
            with relate.connect(str(ready / "decision.rl")) as db:
                meta, contexts = prepare(db, case)
            meta["sha256"] = hashlib.sha256(
                (ready / "decision.rl").read_bytes()
            ).hexdigest()
            save_json(ready / "case.json", meta)
            for mode, context in contexts.items():
                save_json(ready / f"{mode}-input.json", context)
            ready.rename(folder)
    respond = azure_transport(env_file) if paired else None
    sequence = [("local", 1)]
    if paired:
        for trial in range(1, repeats + 1):
            # Alternate both case and repetition order to distribute warm caches and load.
            modes = ["flat", "relate"]
            if (list(CASES).index(case_id) + trial) % 2 == 0:
                modes.reverse()
            sequence.extend((mode, trial) for mode in modes)
    for mode, trial in sequence:
        name = f"{mode}-{trial}"
        record = folder / f"{name}.json"
        archive = folder / f"{name}.rl.gz"
        if record.exists():
            if (
                not archive.is_file()
                or load_json(record)["decision_sha256"] != meta["sha256"]
            ):
                raise ValueError(f"Incomplete or mismatched saved trial at {record}.")
            continue
        with tempfile.TemporaryDirectory(dir=folder) as scratch:
            working = Path(scratch) / "dispatch.rl"
            shutil.copyfile(decision, working)
            with relate.connect(str(working)) as db:
                trace = run_trial(
                    db,
                    case,
                    meta,
                    contexts.get(mode),
                    mode,
                    trial,
                    respond if mode != "local" else None,
                )
            trace["decision_sha256"] = meta["sha256"]
            with (
                working.open("rb") as src,
                (Path(scratch) / "final.gz").open("wb") as dest,
            ):
                with gzip.GzipFile(filename="", fileobj=dest, mode="wb", mtime=0) as gz:
                    shutil.copyfileobj(src, gz)
            (Path(scratch) / "final.gz").replace(archive)
            save_json(record, trace)
        print(
            f"{case_id} {name}: {trace['status']} ({len(trace['attempts'])} proposals)",
            flush=True,
        )
    return case_id


def run_suite(args):
    if args.resume and args.output is None:
        raise ValueError(
            "Supply the existing results directory with --output when resuming."
        )
    dest = args.output or (Path("runs") / "bench" / str(uuid4()))
    dest.mkdir(parents=True, exist_ok=True)
    with suite_lock(dest):
        run_locked(args, dest)


def run_locked(args, dest):
    if args.resume:
        suite = load_json(dest / "suite.json")
        if (
            suite["format"] not in (2, PROTOCOL)
            or suite["max_proposals"] != MAX_PROPOSALS
        ):
            raise ValueError("The saved suite uses a different benchmark protocol.")
        cases, paired = suite["cases"], bool(suite["modes"])
        repetitions = repetitions_by_case(suite)
    else:
        cases = list(dict.fromkeys(args.case or CASES))
        paired = args.mode == "paired"
        repetitions = (
            {
                case: args.repeats
                if args.repeats is not None
                else CASES[case].repetitions
                for case in cases
            }
            if paired
            else dict.fromkeys(cases, 0)
        )
    if args.jobs < 1 or (paired and min(repetitions.values()) < 1):
        raise ValueError("Repeats and jobs must be positive.")
    if paired:
        config_digest = azure_transport(args.env_file).config_digest
        if args.resume and suite.get("model_config_sha256") != config_digest:
            raise ValueError(
                "Use the deployment and model settings from the original suite when resuming."
            )
    else:
        config_digest = None
    if not args.resume:
        if any(dest.iterdir()):
            raise ValueError(
                f"Choose an empty directory or use --resume --output {dest}."
            )
        save_json(
            dest / "suite.json",
            {
                "format": PROTOCOL,
                "started_utc": datetime.now(timezone.utc).isoformat(),
                "cases": cases,
                "modes": ["relate", "flat"] if paired else [],
                "repetitions_by_case": repetitions,
                "max_proposals": MAX_PROPOSALS,
                "planner": "moonmail.mail_agent.proposal_steps",
                "seed": 7,
                "jobs": args.jobs,
                "model_config_sha256": config_digest,
            },
        )
    jobs = [
        (case_id, str(dest), paired, repetitions[case_id], args.env_file)
        for case_id in cases
    ]
    if args.jobs == 1:
        for job in jobs:
            run_case(job)
    else:
        with ProcessPoolExecutor(max_workers=min(args.jobs, len(jobs))) as pool:
            list(pool.map(run_case, jobs))
    from .bench_report import write_reports

    write_reports(dest)
    print("Open", dest / "README.md")


def inspect(args):
    from .bench_report import case_table

    root = args.results
    suite = load_json(root / "suite.json")
    if not args.case:
        print((root / "README.md").read_text())
        return
    if args.case not in suite["cases"]:
        raise ValueError(f"Choose a recorded case from {', '.join(suite['cases'])}.")
    folder = root / args.case
    meta = load_json(folder / "case.json")
    limit = 1 if args.mode == "local" else max(1, repetitions_by_case(suite)[args.case])
    if not 1 <= args.trial <= limit:
        raise ValueError(f"Choose a trial from 1 to {limit} for {args.case}.")
    if args.input:
        if args.mode == "local" or not suite["modes"]:
            raise ValueError("Choose a recorded LLM mode to inspect model input.")
        modes = [args.mode] if args.mode else suite["modes"]
        items = []
        for mode in modes:
            trace = load_json(folder / f"{mode}-{args.trial}.json")
            items.append(saved_request(trace, args.attempt))
        print(json.dumps(items, ensure_ascii=False, indent=2))
    elif args.why:
        decision = folder / "decision.rl"
        if hashlib.sha256(decision.read_bytes()).hexdigest() != meta["sha256"]:
            raise ValueError("The decision database differs from the recorded input.")
        with relate.connect(str(decision), read_only=True) as db:
            for proof in meta["evidence"]:
                print(
                    proof["question"],
                    "\n" + proof["cypher"],
                    "\nParameters",
                    proof["params"],
                )
                print(
                    json.dumps(
                        rows(db, proof["cypher"], proof["params"]),
                        ensure_ascii=False,
                        indent=2,
                    )
                )
    else:
        print(meta["fixture"]["title"] + "\n" + meta["goal"] + "\n")
        modes = [args.mode] if args.mode else suite["modes"] or ["local"]
        for mode in modes:
            if mode != "local" and mode not in suite["modes"]:
                raise ValueError(f"No {mode} trials were recorded here.")
        print(case_table(folder, meta, modes, args.trial, links=False))


def add_cli(commands):
    parser = commands.add_parser(
        "bench", help="Read published planning trials or run a headless comparison"
    )
    sub = parser.add_subparsers(dest="bench_action", required=True)
    show = sub.add_parser(
        "inspect", help="Read saved results without a model or simulation"
    )
    show.add_argument("case", nargs="?")
    show.add_argument("--results", type=Path, default=PUBLISHED)
    show.add_argument("--trial", type=int, default=1)
    show.add_argument("--attempt", type=int, default=1)
    display = show.add_mutually_exclusive_group()
    display.add_argument(
        "--input",
        action="store_true",
        help="Print a captured request and tool schema (attempt 0 is the graph read)",
    )
    display.add_argument(
        "--why",
        action="store_true",
        help="Run the evidence queries on the saved decision database",
    )
    display.add_argument(
        "--compare",
        action="store_true",
        help="Show paired decisions side by side (default)",
    )
    show.add_argument("--mode", choices=["flat", "relate", "local"])
    show.set_defaults(bench_func=inspect)
    run = sub.add_parser("run", help="Generate new symbolic trials")
    run.add_argument(
        "--case",
        choices=CASES,
        action="append",
        help="Run selected cases (default: all 20)",
    )
    run.add_argument(
        "--mode",
        choices=["local", "paired"],
        default="local",
        help="Keyless reference or both real LLM input modes plus reference",
    )
    run.add_argument(
        "--repeats",
        type=int,
        help="Override the recorded three or four repetitions per case and LLM input",
    )
    run.add_argument(
        "--jobs", type=int, default=1, help="Number of cases to run concurrently"
    )
    run.add_argument(
        "--env-file", type=Path, help="Private deployment settings for paired trials"
    )
    run.add_argument("--output", type=Path, help="Empty directory for new evidence")
    run.add_argument(
        "--resume",
        action="store_true",
        help="Complete a saved suite using its original cases and repetitions",
    )
    run.set_defaults(bench_func=run_suite)
