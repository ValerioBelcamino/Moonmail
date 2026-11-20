# Moonmail

**A railway dispatch agent that reads a fleet’s abilities from Relate, proposes a plan, and repairs it when the world changes.**

## What it does

Four robots must deliver a mailbag and sign its slip before a train can leave. Only one robot has the chassis and working carriage needed to lift the tray. Two robots can sign. When that carriage slips, the dispatcher needs to know which work is blocked and which assignment it can keep.

Moonmail stores the depot, robot bodies, tools, capabilities and execution history in one embedded Relate file per run. The language model reads these relationships and proposes actions with actors and dependencies. A validator checks them against the graph-derived constraints. The executor queries ready work and commits its effects. When a precondition changes, the next graph read gives the model a precise repair problem. A fleet operator can trace why a particular robot got a job, and why one breakdown delays the train while other work can continue.

## What to look for

In the film, the fault blocks loading and delays departure. Jack’s signature survives. The same action node belongs to both plan revisions. In the larger depot, five jobs start together and six conditions converge on a single train release. The interactive demo adds a controlled comparison. Changing just the mechanic’s tool makes a different recovery feasible. [Competition film](../moonmail-demo.mp4) · [Presentation](presentation.pdf)

## Try it

From the downloaded project, `uv run --locked -m moonmail` starts the station. Use **Play tour** for the worked example or **Inspect graph data** to run a query against the included store. Three persistent `.rl` databases ship in `viewer/public/episodes`. New local runs create their own files. [Setup and data](../README.md) · [Graph queries and evidence](architecture.md)

## What we built with

Relate’s embedded Python API, Cypher traversals and transactions power plan storage, readiness and fault impact. An Azure Responses model generated the bundled proposals. Z3 checks assignments and causal support. FastAPI and Three.js serve the interactive simulation. Blender, Skia and FFmpeg made the film from recorded motion and graph events. We used Google Gemini TTS for narration, ImageGen for the backdrop and Codex for assistance with code, tests, writing and editing. The score is generated from the project’s own composition. [Film production](../tools/film_review/README.md)

The design draws on our earlier graph-planning and robot-simulation experiments. The railway delivery scenario, embodiment and action graphs, recorded dispatches and film were built for this entry.
