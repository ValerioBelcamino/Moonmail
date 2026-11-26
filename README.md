# Moonmail

**Moonmail is a multi-robot dispatch simulator built on Relate, Neo4j’s embedded graph database.** A single LLM turns a delivery goal into a plan for robots with different bodies and tools. It reads the graph to find eligible robots and proposes who does each job and what must finish first. The executor records progress alongside the accepted plan in that same graph, so the orchestrator can see which assignments still hold when conditions change.

The setting is a railway mail depot. Each bag must reach the coach serving its destination, and its delivery slip must be signed before the train leaves. A picker can reach a high shelf, a low courier fits through the service hatch, and a forklift can lift the tray into the coach. A robot with a scanner can sign independently of loading. The 3D depot animates grid moves and symbolic handoffs beside the graph, so you can pause at a decision and inspect the facts behind it.

[Watch the film · 1 min 59 s](moonmail-demo.mp4) · [Run the station](#run-it) · [Architecture slides (PDF)](docs/presentation.pdf) · [Repository guide](#repository-guide)

Across 68 paired dispatch trials, Moonmail produced **52 correct first drafts** versus **33** when the same model received the full depot state. With validator feedback, Moonmail reached the expected outcome in **68/68** trials versus **65/68** and used **55.3% fewer model tokens** overall. [Planning benchmark and recorded decisions](benchmarks/results/README.md)

## From a goal to an executable plan

The LLM proposes a directed acyclic graph (DAG) of actions and their prerequisites. It can nominate robots or leave assignments open. The validator checks eligibility with Z3 and verifies that each precondition holds now or follows from a declared predecessor. A rejected draft returns to the model with the failed check.

```mermaid
---
config:
  flowchart:
    padding: 8
    nodeSpacing: 32
    rankSpacing: 32
---
flowchart TB
    accTitle: The dispatch loop
    accDescr: Relate supplies planning context to the LLM. The validator checks the proposed action graph and records the accepted revision. The executor reads ready actions and writes their effects back to Relate.
    store[(Relate)] -->|Goal and candidates| model[LLM orchestrator]
    model -->|Draft DAG| validator[Validator + Z3]
    validator -.->|Failed check| model
    validator -->|Accepted revision| store
    store -->|Ready actions| executor[Executor]
    executor -->|Updated facts| store
    classDef memory fill:#21443e,stroke:#83b7a6,color:#f1f8f1
    classDef component fill:#f1efe4,stroke:#829a93,color:#203739
    class model,validator,executor component
    class store memory
```

The executor queries the accepted revision for ready jobs and records their effects, such as a parcel changing hands. If a required fact changes, the dispatcher follows dependencies to the affected work. A revised plan can link to an existing action, preserving its assignment and status. [Compare two recoveries from the same fault](docs/architecture.md#a-decision-you-can-reproduce)

<details>
<summary>See one recorded dispatch move through the loop</summary>

[![Animated walkthrough showing the graph read, model proposal, validation and revised dispatch.](docs/station-tour.webp)](docs/presentation.pdf)

</details>

## What makes a robot eligible?

The fleet graph exists before the first plan. An **embodiment** records a robot body’s height, reach and supported skills. For a lift, the query matches the chassis and a mounted carriage to the same skill on the same robot. The accepted load action links to that robot and requires the carriage to be online when it runs. [Embodiment queries](docs/architecture.md#how-a-body-becomes-a-planning-choice) · [Full graph schema](docs/graph-schema.md)

```mermaid
---
config:
  flowchart:
    padding: 8
    nodeSpacing: 32
    rankSpacing: 32
---
flowchart TB
    accTitle: How an assigned action connects to the fleet and current state
    accDescr: An action is assigned to a robot and requires world facts. The robot has a chassis and can mount a tool. For a tool-dependent skill, both paths reach the same skill.
    action[Action] -->|ASSIGNED_TO| robot[Robot]
    action -->|REQUIRES| fact[World fact]
    robot -->|INSTANCE_OF| body[Embodiment]
    robot -->|MOUNTS| tool[Tool]
    body -->|HAS_SKILL| skill[Skill]
    tool -->|PROVIDES| skill
    classDef connected fill:#21443e,stroke:#83b7a6,color:#f1f8f1
    classDef entity fill:#f1efe4,stroke:#829a93,color:#203739
    class action,body,tool,fact entity
    class robot,skill connected
```

## Run it

From a clone or the extracted project ZIP, run either command. [Download ZIP](https://github.com/ValerioBelcamino/Moonmail/archive/refs/heads/main.zip)

| Docker Compose | Python via uv |
| --- | --- |
| `docker compose up --build` | `uv run --locked -m moonmail` |

**[Open the guided station](http://127.0.0.1:8041/?guide=1).** Replay three recorded LLM dispatches or run a different fleet with the keyless local planner. For fresh LLM decisions, connect your own deployment. [Experiments and LLM setup](docs/running.md)

## Repository guide

| To explore | Open |
| --- | --- |
| Inspect a decision in the database | [Worked example and Cypher](docs/architecture.md) · [Three recorded Relate files](viewer/public/episodes/) |
| Compare the same LLM with two ways of reading the world | [Paired decisions and scores](benchmarks/results/README.md) · [Benchmark design and reproduction](benchmarks/README.md) |
| Follow the implementation | [LLM tools](moonmail/mail_agent.py) · [Plan validation](moonmail/mail_planning.py) · [Relate queries](moonmail/mail_store.py) · [3D viewer](viewer/src/) |
| Review the competition materials | [Submission brief](docs/submission.md) · [English captions](docs/moonmail.en.srt) · [How the film was made](tools/film_review/README.md) |
