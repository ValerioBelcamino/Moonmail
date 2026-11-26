# Run and inspect the Moonmail planning benchmark

The benchmark asks whether an LLM makes better dispatch decisions when Relate computes which robots can act and which assignments survive a fault. The report covers all 20 checkpoints, including each rejected draft, confirmed hold and final train state. It opens directly on GitHub or in a checkout. [Results and paired traces](results/README.md)

## What changes between the two inputs?

| Planner input | What the LLM receives |
| --- | --- |
| Moonmail with Relate | Current facts, robot candidates and approach costs for each action. After a fault, the graph read also identifies the pending assignments and dependencies to preserve. |
| Full-state baseline | Current facts, physical entities and relationships, chassis and equipment, service areas, coordinates, eligibility rules, and the plan before the observation. The model can derive candidates and surviving assignments from these records. |

Both start from private copies of the same Relate file. The model uses the station’s `read_dispatch_graph` and `propose_dag` tools to choose actions and dependencies. It can nominate an actor or delegate assignment to Z3. The goal, action contracts, model settings, validator feedback and four-draft budget are identical. The symbolic executor applies accepted actions, and a separate read checks the final cargo, signatures and signal. [Station LLM loop](../moonmail/mail_agent.py) · [Validator](../moonmail/mail_planning.py)

## What do the cases test?

| Change | Decision the model must make |
| --- | --- |
| One, three or six orders | Build a plan of up to 31 actions with independent loading and signing branches. |
| Extra robots, a scanner chassis, or a missing courier | Assign a capable body in the right service area or hold the train. |
| Different starting facts or goal | Skip completed work. One goal asks only for Bag 52 aboard and the signal still red. |
| A broken carriage | Repair it with a compatible driver, use a connected hoist or hold if neither route works. |
| A fault partway through three or six orders | Preserve completed and unaffected work. Vary which bags share Jack’s carriage and whether Patch’s tool can repair it. |

A **correct first draft** reaches the requested goal or correctly holds an infeasible dispatch before receiving feedback. **Final success** allows up to four proposals. An exhausted budget, execution failure or provider error counts as a failed trial. Token totals include all reported input and output tokens, including corrections.

The recorded benchmark uses one deployment and 68 trials per input. We collected twelve cases with three repetitions each and eight mid-delivery cases with four each. Both inputs received the same number of trials for every case. Totals weight each trial equally. A deterministic reference runs once per case and is scored separately. [Collection settings and per-case schedule](results/suite.json) · [Per-trial CSV](results/scores.csv)

## Inspect a decision without an API key

In the six-bag repair, Jack’s broken carriage blocks three loads. Fern’s carriage still works, and Bag 74 is ready for Fern to load. In trial 4 the baseline made Fern wait for Jack’s repair in every draft. Moonmail kept Fern’s assignment independent and released the train on its second draft. The paired trace shows the proposed prerequisites, the validator’s replies and the final signal. [Read trial 4](results/midrun-6-shared-driver/README.md#trial-4)

```bash
uv run --locked -m moonmail bench inspect midrun-6-shared-driver --trial 4
uv run --locked -m moonmail bench inspect midrun-6-shared-driver --why
```

The first command compares the two planners. The second executes the fault-impact and equipment queries on the saved database. Add `--mode relate --trial 4 --attempt 2 --input` to an inspect command to see the exact messages and tool schema for that proposal. Running `bench inspect` on its own prints the full report. Each case also links to its decision-time database and the compressed final Relate file for every trial.

With Docker, build once with `docker compose build station`. The image includes the recorded evidence.

```bash
docker compose run --rm station /app/.venv/bin/python -m moonmail bench inspect midrun-6-shared-driver --trial 4
```

## Reproduce the benchmark

Connect your own model in `.env.local`, then run the full 20-case comparison. The default repetition schedule matches the published results. [Deployment setup](../docs/running.md#connect-your-own-llm)

```bash
uv run --locked -m moonmail bench run --mode paired --jobs 3 --env-file .env.local
```

For the keyless reference, run `uv run --locked -m moonmail bench run --mode local`. Either mode accepts `--case CASE` to select a checkpoint and the paired mode accepts `--repeats N` to override its repetition count. Each invocation writes a new report under `runs/bench/`. Use `bench inspect --results PATH` to read it or `bench run --resume --output PATH --env-file .env.local` to finish an interrupted run with its original settings.
