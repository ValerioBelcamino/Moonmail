# Moonmail

**A railway dispatch agent that reads a fleet’s abilities from Relate, proposes a plan, and repairs it when the world changes.**

## What it does

Four robots must deliver a mailbag and sign its slip before a train can leave. Only one robot has the chassis and working carriage needed to lift the tray. Two robots can sign. When that carriage slips, the dispatcher needs to know which work is blocked and which assignment it can keep.

Moonmail stores the depot, robot bodies, tools and execution history in one embedded Relate file per run. The language model plans ahead to the delivery goal, proposing the remaining jobs and their dependencies together. A validator checks the draft and the yard sends out compatible jobs in parallel. If a tool fails, the graph tells the model which work is affected and which assignments still hold. A fleet operator can inspect the revised plan and trace each change back to the fault.

## What to look for

In the film, the fault blocks loading and delays departure. Jack’s signature survives. The same action node belongs to both plan revisions. In the larger depot, five jobs start together and six conditions converge on a single train release. The interactive demo adds a controlled comparison. Changing just the mechanic’s tool makes a different recovery feasible.

Across 20 checkpoints, the same model produced 52 correct first drafts in 68 trials with Moonmail’s graph read, compared with 33 from the full-state prompt. Moonmail used **55.3% fewer tokens**. Median time spent in model calls, including retries, fell **21.6%**, from 10.09 to 7.91 seconds per trial. With the same validator and four-draft budget, final scores were 68/68 and 65/68. In one six-bag dispatch, the graph showed that Fern could load Bag 74 while Jack’s carriage awaited repair. [Benchmark results](../benchmarks/results/README.md) · [Paired repair decisions](../benchmarks/results/midrun-6-shared-driver/README.md#trial-4)

## Try it

From the downloaded project, `docker compose up --build` or `uv run --locked -m moonmail` starts the browser station at `http://127.0.0.1:8041/`. **Play** replays recorded decisions. **Quick guide** points to the controls as you use them. **Robot bodies** traces chassis, tools and skills. In **Run options → Custom fleet**, judges can change the active orders and the number of robots of each type, then watch a fresh simulation beside its action graph. The local planner needs no key. Judges can also connect their own Azure OpenAI deployment for fresh LLM proposals. **Query graph** pauses at a selected step and queries the evidence available then. The three bundled runs and each new experiment have their own persistent Relate file.

## What we built with

Relate’s embedded Python API, Cypher traversals and transactions power plan storage, readiness and fault impact. An Azure Responses model generated the bundled proposals. Z3 checks assignments and causal support. FastAPI and Three.js serve the interactive simulation. Blender, Skia and FFmpeg made the film from recorded motion and graph events. Google Gemini TTS provided the narration and ImageGen provided the backdrop. AI assistance also supported implementation, testing and editing. The score is generated from the project’s own composition.

The design draws on our earlier graph-planning and robot-simulation experiments. The railway delivery scenario, embodiment and action graphs, recorded dispatches and film were built for this entry.

## Publishing the entry

Use the title, short pitch and sections above for the Devpost description. The project is published on [GitHub](https://github.com/ValerioBelcamino/Moonmail). Use its public URL and the approved demo URL in the submission form.

- Add the required GitHub topic `relate` and keep the repository public and tagged through the winner announcement. The organizers also recommend `relate-neo4j-hackathon`. [Submission checklist](https://relate.devpost.com/#requirements)
- Upload the 1:59.4 film and check its link in a signed-out browser. Section 4 allows a film of up to two minutes or a working demo link. [Film](../moonmail-demo.mp4) · [English captions](moonmail.en.srt) · [Official rules](https://relate.devpost.com/rules)
- Use the depot portrait for the project thumbnail. The two-robot capability graph and larger dispatch make complementary gallery images. [Depot portrait](depot.webp) · [Robot capabilities](embodiment-frame.webp) · [Final action graph](fleet-action-graph.webp) · [Architecture slides](presentation.pdf)
