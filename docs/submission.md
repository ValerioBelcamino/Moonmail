# Moonmail

**A railway dispatch agent that reads a fleet’s abilities from Relate, proposes a plan, and repairs it when the world changes.**

## What it does

Four robots must deliver a mailbag and sign its slip before a train can leave. Only one robot has the chassis and working carriage needed to lift the tray. Two robots can sign. When that carriage slips, the dispatcher needs to know which work is blocked and which assignment it can keep.

Moonmail stores the depot, robot bodies, tools, capabilities and execution history in one embedded Relate file per run. The language model reads these relationships and proposes actions with actors and dependencies. A validator checks them against the graph-derived constraints. The executor queries ready work and commits its effects. When a precondition changes, the next graph read gives the model a precise repair problem. A fleet operator can trace why a particular robot got a job, and why one breakdown delays the train while other work can continue.

## What to look for

In the film, the fault blocks loading and delays departure. Jack’s signature survives. The same action node belongs to both plan revisions. In the larger depot, five jobs start together and six conditions converge on a single train release. The interactive demo adds a controlled comparison. Changing just the mechanic’s tool makes a different recovery feasible.

## Try it

From the downloaded project, `uv run --locked -m moonmail` starts the station. Use **Play tour** for the worked example or **Inspect graph data** to run a query against the included store. Three persistent `.rl` databases ship in `viewer/public/episodes`. New local runs create their own files.

## What we built with

Relate’s embedded Python API, Cypher traversals and transactions power plan storage, readiness and fault impact. An Azure Responses model generated the bundled proposals. Z3 checks assignments and causal support. FastAPI and Three.js serve the interactive simulation. Blender, Skia and FFmpeg made the film from recorded motion and graph events. We used Google Gemini TTS for narration, ImageGen for the backdrop and Codex for assistance with code, tests, writing and editing. The score is generated from the project’s own composition.

The design draws on our earlier graph-planning and robot-simulation experiments. The railway delivery scenario, embodiment and action graphs, recorded dispatches and film were built for this entry.

## Publishing the entry

Use the title, short pitch and sections above for the Devpost description. The submission form also needs the public repository and demo URLs.

- Publish the repository on GitHub, add the required topic `relate` and keep it public through the winner announcement. The organizers also recommend `relate-neo4j-hackathon`. [Submission checklist](https://relate.devpost.com/#requirements)
- Upload the 1:59.4 film and check its link in a signed-out browser. Section 4 allows a film of up to two minutes or a working demo link. [Film](../moonmail-demo.mp4) · [English captions](moonmail.en.srt) · [Official rules](https://relate.devpost.com/rules)
- The two-robot capability graph and the larger dispatch make complementary gallery images. The slides are available for a longer walkthrough. [Robot capabilities](embodiment-frame.webp) · [Final action graph](fleet-action-graph.webp) · [Presentation](presentation.pdf)
