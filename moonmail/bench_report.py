"""Render the same saved trials as a GitHub report, a terminal comparison and a CSV."""

import csv
import json
import shutil
import textwrap
from collections import Counter
from itertools import zip_longest
from statistics import median

from .bench import PUBLISHED, load_json, repetitions_by_case

NAMES = {
    "flat": "Full-state baseline",
    "relate": "Moonmail with Relate",
    "local": "Local reference",
}
JOBS = {
    "collect": "pick up",
    "stage": "hand off",
    "cross": "cross hatch",
    "manifest": "sign",
    "load": "load coach",
    "repair": "repair carriage",
    "hoist": "use station hoist",
    "depart": "release train",
    "confirm_delivery": "confirm delivery",
}


def clean(value):
    return str(value).replace("|", "\\|").replace("\n", " ")


def table(headers, data):
    return "\n".join(
        [
            "| " + " | ".join(map(clean, headers)) + " |",
            "| " + " | ".join("---" for _ in headers) + " |",
            *["| " + " | ".join(map(clean, row)) + " |" for row in data],
        ]
    )


def proposed_jobs(attempt):
    draft = attempt.get("proposal")
    if not isinstance(draft, dict) or not isinstance(draft.get("steps"), list):
        return "No complete DAG"
    if not draft["steps"]:
        return "Hold the train"
    counts = Counter(
        str(s.get("op", "?")).split("/")[-1]
        for s in draft["steps"]
        if isinstance(s, dict)
    )
    return ", ".join(
        (f"{num} × " if num > 1 else "") + JOBS.get(op, op)
        for op, num in counts.items()
    )


def terminal_table(headers, data):
    width = shutil.get_terminal_size(fallback=(110, 24)).columns
    label = min(26, max(12, width // 4))
    value = max(12, (width - label - 3 * (len(headers) - 1)) // (len(headers) - 1))
    widths = [label] + [value] * (len(headers) - 1)
    lines = []
    for i, row in enumerate([headers, *data]):
        cells = [textwrap.wrap(str(item), w) or [""] for item, w in zip(row, widths)]
        for line in zip_longest(*cells, fillvalue=""):
            lines.append("   ".join(v.ljust(w) for v, w in zip(line, widths)).rstrip())
        if i == 0:
            lines.append("   ".join("─" * w for w in widths))
    return "\n".join(lines)


def final_state(trace):
    state = trace["final"]
    bags = state["bags"]
    aboard = [
        b["bag"] for b in bags if b["stage"] == "aboard" and b["holder"] == b["coach"]
    ]
    signed = sum(b["waybill"] == "signed" for b in bags)
    cargo = f"{len(aboard)}/{len(bags)} aboard"
    if 0 < len(aboard) < len(bags):
        cargo += " (" + ", ".join(aboard) + ")"
    return f"Signal {state['signal']} · {cargo} · {signed}/{len(bags)} signed"


def mode_traces(folder, mode, count, decision_hash):
    paths = [folder / f"{mode}-{i}.json" for i in range(1, count + 1)]
    if set(paths) != set(folder.glob(f"{mode}-[0-9]*.json")):
        raise ValueError(
            f"Recorded {mode} trials do not match the schedule for {folder.name}."
        )
    traces = [load_json(path) for path in paths]
    for i, trace in enumerate(traces, 1):
        if (trace["case"], trace["mode"], trace["trial"], trace["decision_sha256"]) != (
            folder.name,
            mode,
            i,
            decision_hash,
        ):
            raise ValueError(f"Mismatched trial in {folder.name}/{mode}-{i}.json.")
    return traces


def load_waits_for(proposal, op):
    steps = proposal.get("steps") if isinstance(proposal, dict) else None
    if not isinstance(steps, list):
        return "No complete DAG"
    if not steps:
        return "Hold requested"
    for step in steps:
        if not isinstance(step, dict) or step.get("op") != op:
            continue
        parents = step.get("after")
        if not isinstance(parents, list):
            return "Missing prerequisite list"
        names = []
        for parent in parents:
            bag, _, kind = str(parent).rpartition("/")
            name = JOBS.get(kind, kind)
            names.append(f"{name} (Bag {bag})" if bag else name)
        return ", ".join(names) or "Ready now"
    return "Load omitted"


def case_table(folder, meta, modes, trial, links):
    traces = [
        load_json(folder / f"{mode}-{1 if mode == 'local' else trial}.json")
        for mode in modes
    ]
    data = []
    # A platform bag with a retained load can be loaded by its healthy forklift.
    retained_load = next(
        (
            f"{bag['bag']}/load"
            for bag in meta["initial"]["bags"]
            if bag["stage"] == "platform" and f"{bag['bag']}/load" in meta["retained"]
        ),
        None,
    )
    for i in range(max(len(t["attempts"]) for t in traces)):
        drafts, decisions, dependencies = [], [], []
        for t in traces:
            if i >= len(t["attempts"]):
                drafts.append("—")
                decisions.append("—")
                dependencies.append("—")
                continue
            a = t["attempts"][i]
            drafts.append(proposed_jobs(a))
            if retained_load:
                dependencies.append(load_waits_for(a.get("proposal"), retained_load))
            decisions.append(
                {
                    "accepted": "Accepted",
                    "hold": "Confirmed hold",
                    "rejected": "Rejected",
                }[a["verdict"]]
                + (". " + a["feedback"] if a["feedback"] else "")
            )
        data.append([f"Draft {i + 1}", *drafts])
        if retained_load:
            data.append(
                [f"Bag {retained_load.split('/')[0]} load waits for", *dependencies]
            )
        data.append(["Validator", *decisions])
    if any(t.get("transport_errors") or t.get("error") for t in traces):
        data.append(
            [
                "Error",
                *[
                    t.get("error")
                    or ", ".join(e["error"] for e in t.get("transport_errors", []))
                    or "—"
                    for t in traces
                ],
            ]
        )
    if any(
        t["case"].startswith("midrun-")
        or t["case"] in ("repair-collar", "hold-collar", "use-hoist", "scanner-chassis")
        for t in traces
    ):
        bindings = []
        for t in traces:
            picked = [
                e["actor"] + " · " + JOBS[e["op"].split("/")[-1]]
                for e in t["execution"]
                if e["op"] in ("47/repair", "47/hoist", "47/manifest")
            ]
            bindings.append(", ".join(picked) or "—")
        data.append(["Executed assignments for Bag 47", *bindings])
    data.append(["Final facts", *[final_state(t) for t in traces]])
    data.append(
        [
            "Expected outcome reached",
            *["Yes" if t["correct"] else "No · " + t["status"] for t in traces],
        ]
    )
    if any(t["mode"] != "local" for t in traces):
        data.append(
            [
                "Total tokens",
                *[f"{t['tokens']:,}" if t["mode"] != "local" else "—" for t in traces],
            ]
        )
        data.append(
            [
                "Model time / validator time",
                *[
                    f"{t['model_ms'] / 1000:.2f} s / {t['validation_ms']:.0f} ms"
                    for t in traces
                ],
            ]
        )
    if links:
        data.append(
            [
                "Evidence",
                *[
                    f"[Raw trace]({t['mode']}-{t['trial']}.json) · [Final Relate file, gzip]({t['mode']}-{t['trial']}.rl.gz)"
                    for t in traces
                ],
            ]
        )
    render = table if links else terminal_table
    return render(["Decision", *[NAMES[m] for m in modes]], data)


def case_page(folder, suite, meta):
    f = meta["fixture"]
    parts = [
        f"# {f['title']}",
        meta["goal"],
        f"{f['orders']} {'order' if f['orders'] == 1 else 'orders'} · {meta['robots']} robots · {meta['chassis']} body types in use · {meta['candidate_pairs']} eligible action–actor pairs.",
        "The expected outcome is "
        + (
            "a plan reaching the goal."
            if f["feasible"]
            else "a verified hold with the signal red."
        ),
    ]
    if f["fault"]:
        parts.append(
            "Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. "
            + (
                "Patch carries a hex driver. "
                if f["kit"] == "driver"
                else "Patch carries an inspection probe. "
            )
            + (
                "The station hoist connects to Bag 47’s coach."
                if f["lift"]
                else "The station hoist is disconnected."
            )
        )
    if f.get("mixed_progress"):
        proof = {item["question"]: item["rows"] for item in meta["evidence"]}
        carriages = proof["Loading carriages at the checkpoint"]
        affected = [
            r["uid"].split("/", 1)[1]
            for r in proof["Fault impact on the prior plan"]
            if r["effect"] == "INVALIDATES"
        ]
        parts.extend(
            [
                "## The checkpoint",
                table(
                    ["Bag", "Cargo", "Waybill", "Assigned forklift", "Carriage"],
                    [
                        [
                            r["bag"],
                            r["stage"],
                            r["waybill"],
                            r["forklift"],
                            "online" if r["online"] else "offline",
                        ]
                        for r in carriages
                    ],
                ),
                "The fault invalidates "
                + ", ".join(f"`{op}`" for op in affected)
                + f" and blocks the shared departure. {len(meta['retained'])} pending actions keep their assignments and surviving dependencies.",
            ]
        )
    modes = suite["modes"]
    if modes:
        parts.extend(
            [
                "## The paired decisions",
                "Each row compares independent model calls on the same saved world. "
                "Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.",
            ]
        )
        for i in range(1, repetitions_by_case(suite)[f["id"]] + 1):
            parts.extend(
                [f"### Trial {i}", case_table(folder, meta, modes, i, links=True)]
            )
    parts.extend(
        [
            "## What the planners could see",
            "[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)",
        ]
    )
    for proof in meta["evidence"]:
        records = proof["rows"]
        detail = [
            "<details>",
            f"<summary>{proof['question']} ({len(records)} rows)</summary>",
            "",
            "```cypher",
            proof["cypher"],
            "```",
            "",
        ]
        if proof["params"]:
            detail.extend(["Parameters · `" + json.dumps(proof["params"]) + "`", ""])
        if records:
            cols = list(records[0])
            detail.append(
                table(
                    cols,
                    [
                        [r[c] if r[c] is not None else "None" for c in cols]
                        for r in records
                    ],
                )
            )
        else:
            detail.append("The query returned no matching rows.")
        detail.extend(["", "</details>"])
        parts.append("\n".join(detail))
    parts.extend(
        [
            "## Keyless reference",
            case_table(folder, meta, ["local"], 1, links=True),
            "[All cases](../README.md)",
        ]
    )
    return "\n\n".join(parts) + "\n"


def paired_results(suite, records, model_names):
    samples = {
        mode: [r for r in records if r["mode"] == mode] for mode in suite["modes"]
    }
    names = [NAMES[mode] for mode in samples]
    budget = suite["max_proposals"]
    labels = [
        "Correct first draft",
        f"Correct within {budget} drafts",
        "Extra drafts",
        "Total model tokens",
        "Median time in model calls per trial",
    ]
    columns, progress = [], []
    first, tokens, median_model_ms = {}, {}, {}
    for mode, trials in samples.items():
        n = len(trials)
        first[mode] = sum(t["first_correct"] for t in trials)
        final = sum(t["correct"] for t in trials)
        tokens[mode] = sum(t["tokens"] for t in trials)
        median_model_ms[mode] = median(t["model_ms"] for t in trials)
        columns.append(
            [
                f"{first[mode]}/{n} ({first[mode] / n:.1%})",
                f"{final}/{n} ({final / n:.1%})",
                sum(max(0, t["attempts"] - 1) for t in trials),
                f"{tokens[mode]:,}",
                f"{median_model_ms[mode] / 1000:.2f} s",
            ]
        )
        progress.append(
            [
                NAMES[mode],
                *[
                    f"{sum(t['correct'] and t['attempts'] <= limit for t in trials)}/{n}"
                    for limit in range(1, budget + 1)
                ],
            ]
        )
    n = len(samples["relate"])
    model = ", ".join(sorted(model_names)) or "no completed model response"
    parts = [
        f"{len(suite['cases'])} dispatch checkpoints · {n} trials per input · {model}. "
        "Each pair starts from the same saved Relate database and uses the station’s planner, Z3 validator and symbolic executor.",
    ]
    difference = first["relate"] - first["flat"]
    headline = "Both inputs produced the same number of correct first drafts."
    if difference:
        direction = "more" if difference > 0 else "fewer"
        headline = f"Moonmail produced **{abs(difference)} {direction} correct first drafts** than the full-state baseline."
    if tokens["flat"] and tokens["relate"] != tokens["flat"]:
        change = (tokens["relate"] - tokens["flat"]) / tokens["flat"]
        direction = "fewer" if change < 0 else "more"
        headline += f" It used **{abs(change):.1%} {direction} model tokens** across all trials, including corrections."
    # A transport failure can leave a trial with only part of its model time.
    if all(median_model_ms.values()) and not any(
        r["transport_errors"] for r in records
    ):
        change = (
            median_model_ms["relate"] - median_model_ms["flat"]
        ) / median_model_ms["flat"]
        if change:
            direction = "lower" if change < 0 else "higher"
            headline += f" Median time spent in model calls per trial was **{abs(change):.1%} {direction}**."
    parts.extend(
        [
            headline,
            table(["Metric", *names], zip(labels, *columns)),
            "Moonmail reads eligible robots and surviving assignments directly from Relate. "
            "The baseline receives the entities, relationships and rules from which it can derive them. "
            "Both get the same goal, action contracts, tool schema and validator feedback. "
            "A correct decision reaches the requested goal or correctly holds an infeasible dispatch.",
        ]
    )
    outcomes = []
    for expected, label in (
        ("goal", "Feasible delivery goal"),
        ("hold", "Required hold"),
    ):
        row = [label]
        for trials in samples.values():
            group = [t for t in trials if t["expected"] == expected]
            if group:
                row.append(
                    f"{sum(t['first_correct'] for t in group)}/{len(group)} → {sum(t['correct'] for t in group)}/{len(group)}"
                )
        if len(row) > 1:
            outcomes.append(row)
    parts.extend(
        [
            "## Deliveries and holds",
            "Each cell shows correct first drafts → correct final outcomes. A rejected draft receives the validator’s reason.",
            table(["Expected outcome", *names], outcomes),
            "<details>\n<summary>Success after each draft and collection details</summary>\n",
            table(
                ["Input", *[f"By draft {i}" for i in range(1, budget + 1)]], progress
            ),
        ]
    )
    histogram = Counter(repetitions_by_case(suite).values())
    schedule = " and ".join(
        f"{count} {'case' if count == 1 else 'cases'} × {reps} {'trial' if reps == 1 else 'trials'}"
        for reps, count in sorted(histogram.items())
    )
    parts.append(
        f"The schedule per input was {schedule}. Every trial has equal weight. "
        "The local reference runs once per checkpoint and is counted separately. "
        "Token totals include all reported input and output tokens. For each trial we sum the elapsed time of "
        "the initial read request and all proposal requests that returned a response, including retries. "
        "The table reports the median of those totals for each input. The timer runs only while the dispatcher calls the model service."
    )
    if suite.get("collections"):
        parts.append(
            "The recorded trials were collected in two batches on the same deployment. [Collection settings](suite.json)"
        )
    parts.append("</details>")
    return parts


def write_reports(root):
    suite = load_json(root / "suite.json")
    modes = suite["modes"]
    schedule = repetitions_by_case(suite)
    records, by_case, model_names = [], [], set()
    for case in suite["cases"]:
        folder = root / case
        meta = load_json(folder / "case.json")
        row = [
            f"[{meta['fixture']['title']}]({case}/README.md)",
            f"{meta['fixture']['orders']} / {meta['robots']} / {meta['chassis']}",
        ]
        for mode in [*modes, "local"]:
            trials = mode_traces(
                folder, mode, 1 if mode == "local" else schedule[case], meta["sha256"]
            )
            first = sum(t["first_correct"] for t in trials)
            final = sum(t["correct"] for t in trials)
            if mode == "local":
                row.append(
                    "Correct hold"
                    if trials[0]["status"] == "hold" and final
                    else ("Goal reached" if final else "Failed")
                )
            else:
                row.append(f"{first}/{len(trials)} → {final}/{len(trials)}")
            for t in trials:
                models = sorted({a["model"] for a in t["requests"] if a.get("model")})
                model_names.update(models)
                records.append(
                    {
                        "case": case,
                        "orders": meta["fixture"]["orders"],
                        "robots": meta["robots"],
                        "chassis": meta["chassis"],
                        "eligible_pairs": meta["candidate_pairs"],
                        "mode": mode,
                        "trial": t["trial"],
                        "model": ", ".join(models),
                        "first_correct": int(t["first_correct"]),
                        "correct": int(t["correct"]),
                        "status": t["status"],
                        "expected": t["expected"],
                        "attempts": len(t["attempts"]),
                        "tokens": t["tokens"],
                        "input_tokens": sum(
                            a.get("usage", {}).get("input_tokens", 0)
                            for a in t["requests"]
                        ),
                        "output_tokens": sum(
                            a.get("usage", {}).get("output_tokens", 0)
                            for a in t["requests"]
                        ),
                        "model_ms": t["model_ms"],
                        "validation_ms": t["validation_ms"],
                        "transport_errors": sum("error" in r for r in t["requests"]),
                        "trace": f"{case}/{mode}-{t['trial']}.json",
                        "decision_sha256": meta["sha256"],
                    }
                )
        by_case.append(row)
        (folder / "README.md").write_text(
            case_page(folder, suite, meta), encoding="utf-8"
        )
    with (root / "scores.csv").open("w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=list(records[0]), lineterminator="\n")
        writer.writeheader()
        writer.writerows(records)
    parts = ["# Moonmail planning benchmark"]
    if modes:
        parts.extend(paired_results(suite, records, model_names))
    else:
        parts.append(
            f"{len(suite['cases'])} checkpoints executed with Moonmail’s keyless local planner."
        )
    if "midrun-6-shared-driver" in suite["cases"]:
        case = "midrun-6-shared-driver"
        link = f"{case}/README.md"
        if modes:
            link += f"#trial-{min(4, schedule[case])}"
        parts.extend(
            [
                "## Inspect a dispatch",
                "Jack’s broken carriage blocks three loads. Bag 74 has already crossed the hatch, "
                "and Fern’s carriage still works. The saved graph keeps Fern’s assignment ready to run. "
                "Follow the **Bag 74 load waits for** row to see whether each draft preserves that fact. "
                f"[Six-bag repair]({link})",
            ]
        )
    headers = [
        "Case",
        "Bags / robots / chassis types",
        *[NAMES[m] for m in modes],
        "Local reference",
    ]
    parts.extend(
        [
            "## Results by case",
            "Each arrow shows how many trials were correct on the first draft and how many were correct within the full budget. Select a case to see every proposal, validator reply and final graph."
            if modes
            else "Each row links to the initial world and the reference planner’s decision.",
            table(headers, by_case),
            "[Download per-trial scores](scores.csv) · [Suite settings](suite.json)",
        ]
    )
    if root.resolve() == PUBLISHED.resolve():
        parts.append("[Run or inspect the benchmark](../README.md)")
    (root / "README.md").write_text("\n\n".join(parts) + "\n", encoding="utf-8")
