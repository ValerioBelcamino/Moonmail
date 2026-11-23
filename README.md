# Moonmail

Which robot can do each job, and what happens when one breaks? Moonmail gives a language-model orchestrator a railway depot in Relate. Four robots must move a mailbag from a shelf through a low hatch, load it onto the addressed coach, and sign its delivery slip before the train can leave.

[Watch the film · 1 min 59.4 s](moonmail-demo.mp4) · [Presentation (PDF)](docs/presentation.pdf) · [Architecture and worked queries](docs/architecture.md)

[![A tour of the depot, its robot capabilities, the repair, and the three-delivery action graph.](docs/station-tour.webp)](moonmail-demo.mp4)

## Run the depot

Download and extract the repository or clone it. In the project directory, run the command below. It uses the included Python 3.11 pin and dependency lock. The first launch downloads the Python dependencies. The built viewer and three model-generated runs ship with the project. Playback, graph inspection and new local runs work without credentials. [Install uv](https://docs.astral.sh/uv/getting-started/installation/)

```bash
uv run --locked -m moonmail
```

Open **[the station](http://127.0.0.1:8041/)**. It starts paused with Bag 47 on the shelf. The animated depot sits beside the graph. The first tour replays a real LLM run from `post.rl`. The same browser screen also runs fresh experiments.

| What you want to see | What to select | Who proposes the actions? |
| --- | --- | --- |
| The LLM decisions behind the demo | **Play tour**, or **Run options → Choose a recorded run** | The original LLM. Three saved runs include its actual proposals and the validator’s responses. Playback needs no key. |
| A fresh experiment with your settings | **Run options → Local planner → Start live run** | A deterministic planner computes a plan from the new graph. Relate, the validator, the robots and any recovery all run locally without a key. |
| Fresh LLM decisions for your settings | **Run options → LLM orchestrator → Start live run** | Your Azure OpenAI deployment reads the graph and proposes actions for this run. [Connect your own LLM](#connect-your-own-llm) |

- **Play tour** follows the delivery. **Next event** steps through the graph read, the model’s proposed action graph and the validator’s decision. At the fault, loading loses its prerequisite. Jack can still sign while Patch repairs the carriage. [Jump to the fault](http://127.0.0.1:8041/?reel=post&at=fault)
- **Inspect graph data** runs Cypher against the saved database. Choose **Actions affected by a fault** to see the load and departure action IDs. Below the query results, the inspector also shows the evidence recorded at the selected step. [Open the repair decision](http://127.0.0.1:8041/?reel=post&at=replan)
- **Three orders** opens the larger depot. Three pickups and two signatures start together across nine robots. In its final 17-action plan, all three loads and all three signatures lead to one train release. [See the five starts](http://127.0.0.1:8041/?reel=yard&at=4) · [Final graph](docs/fleet-action-graph.webp)

## How Moonmail uses Relate

Moonmail embeds **one persistent Relate database per run**. That file preserves the world, accepted revisions, model attempts and execution history together. A judge can copy it, reopen it read-only and follow the same action across a repair.

1. **Read.** The orchestrator queries the goal, parcel custody, destination, robot bodies, mounted tools and accepted skills. Jack’s chassis and working carriage qualify him to lift. Both Jack and Patch have the scanner skill accepted by the signing desk.
2. **Propose and validate.** The model proposes a directed acyclic graph of actions with actors and prerequisites. The validator checks available skills, actor assignments, custody and causal support using the action contracts and Z3. The service stores an accepted plan as a revision in Relate.
3. **Execute and revise.** The executor queries ready actions, checks current guards and writes effects back to the graph. After a collar slip, the orchestrator reads the changed facts. The replacement plan keeps the original signature node and adds a compatible repair before loading. [Graph queries](moonmail/mail_store.py) · [Validator](moonmail/mail_planning.py) · [Orchestrator tool loop](moonmail/mail_agent.py)

## Try a different decision

Open **Run options** and choose a fleet preset (**one order / four robots** or **three orders / nine robots**), Patch’s tool (**hex driver** or **inspection probe**) and one condition (**clear run**, **lift collar slips**, **hatch closes** or **coach route withdrawn**). These give 16 combinations for each map seed. Seeds from 0 to 9999 vary shelf positions and, in the smaller depot, the courier’s start within the selected layout.

Press **Start live run**. The robots move in the browser as the graph shows the planner’s input, proposed actions and dependencies, validated assignments, and any changes after a fault. Pause or use **Next event** to follow individual decisions. **Inspect graph data** shows the selected event’s query, returned rows, proposal and available validation feedback. When the run finishes, you can also query or download its saved Relate database.

Try **one order**, **seed 7** and **lift collar slips** twice with the local planner. With the **hex driver**, Patch repairs the collar and Jack loads the bag. With the **inspection probe**, the repair has no eligible robot and Skim uses the station lift. To see how the LLM handled the same problem, open the recorded probe run. It first proposed the unsupported repair, received the validator’s explanation, then submitted the station lift plan. [Open the recorded rejection](http://127.0.0.1:8041/?reel=post-probe&at=rejected)

For a terminal-only experiment, the optional `run` subcommand prints the outcome and the path to the new database.

```bash
uv run --locked -m moonmail run --mission mail --seed 7 --service-kit driver --fault forks
uv run --locked -m moonmail run --mission yard --seed 11 --service-kit probe --fault forks
```

## Where the graph lives

| Run | Persistent Relate store |
| --- | --- |
| One delivery with the hex driver, as filmed | [post.rl](viewer/public/episodes/post.rl) |
| Same depot with an inspection probe | [post-probe.rl](viewer/public/episodes/post-probe.rl) |
| Three deliveries and nine robots | [yard.rl](viewer/public/episodes/yard.rl) |
| Fresh run | `runs/<id>/episode.rl` and `episode.json` |

The JSON beside each bundled store supplies the layout, run metadata and motion frames. The `.rl` supplies the timeline, node identities, assignments and dependencies. To print the recorded model decisions and departure prerequisites directly from the three stores, run `uv run --locked python tools/inspect_dispatch.py`.

## Connect your own LLM

1. Use an Azure OpenAI deployment that supports the Responses API, function calling and low reasoning effort. In the project folder, copy [.env.example](.env.example) to `.env.local`. Fill in `MOONMAIL_AZURE_ENDPOINT` with the resource endpoint, `MOONMAIL_AZURE_API_KEY` with its key, and `MOONMAIL_AZURE_MODEL` with your **deployment name**. The local server reads these values. Git ignores `.env.local`. [Microsoft’s endpoint and deployment guide](https://learn.microsoft.com/en-us/azure/ai-studio/ai-services/concepts/endpoints)
2. If the station is running, stop it with Ctrl+C. Start it from the project folder with the command below. It works in a shell or PowerShell. [How uv loads an environment file](https://docs.astral.sh/uv/concepts/configuration-files/#environment-variable-files)

   ```bash
   uv run --locked --env-file .env.local -m moonmail
   ```

3. Open the station, then **Run options → Planner → LLM orchestrator**. Choose the setup and press **Start live run**. The requests use your deployment. While watching a proposal or rejection, open **Inspect graph data → Orchestrator input, proposal and feedback** to see what the model received and submitted. Fresh drafts and retries can vary.

For a terminal-only LLM run, use `uv run --locked --env-file .env.local -m moonmail run --controller azure --service-kit probe --fault forks`. A server that already sets `MOONMAIL_LIVE_AZURE_ENV_FILE` can continue to point it at a private configuration file.

## Frontend development

The frontend source is in `viewer/src`. To rebuild it, use Node 22.12+ or Node 24 and run `npm --prefix viewer ci` followed by `npm --prefix viewer run build`. The built bundle in `viewer/dist` serves immediately on a fresh checkout. Run `uv run --locked pytest -q` for the Python suite.

## Tools and credits

Relate runs Cypher queries and transactions in the Python process. Z3 checks plans, FastAPI serves the store and Three.js renders the interactive station. The robot world is symbolic. The film replays recorded trajectories, articulated joints and graph events in Blender with Skia graphics and FFmpeg editing. Google Gemini 3.8 Flash TTS supplies the Sulafat narration. The team generated the quiet piano score in code and used ImageGen for the station backdrop. Codex assisted with implementation, tests, writing and editing. [Film sources](tools/film_review/README.md) · [Original score](tools/film_score.py) · [Frontend dependency notice](viewer/dist/THIRD-PARTY-LICENSES.md) · [Submission description](docs/submission.md)

The [editable presentation](docs/presentation.html) opens locally beside the images in `docs/`. Use the arrow keys to present it or print to PDF in landscape with background graphics enabled.
