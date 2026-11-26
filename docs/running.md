# Run and explore Moonmail

Clone or download the public repository and open a terminal in the extracted project directory.

## Start the station

| Launcher | Command | Where new runs live |
| --- | --- | --- |
| Docker Engine or Docker Desktop with Compose 2.24+ | `docker compose up --build` | Named volume `dispatches` mounted at `/app/runs` |
| uv | `uv run --locked -m moonmail` | `runs/<id>/` in the checkout |

The first launch downloads dependencies. Both launchers serve the built frontend, approved film and recorded databases. Open the station at **http://127.0.0.1:8041/**. Ctrl+C stops the foreground server. With Docker, `docker compose down` removes the container and keeps the named volume. Use **Query graph → Download the embedded graph** to export a recording or a finished live run. [Install Docker](https://docs.docker.com/get-started/get-docker/) · [Install uv](https://docs.astral.sh/uv/getting-started/installation/)

## Replay a model decision

1. **Play tour** follows a saved LLM dispatch. **Next event** or the timeline lets you choose a decision. **Quick guide** reopens the walkthrough.
2. **Robot bodies** shows a selected robot’s chassis, skills and equipment. Select Jack and compare the carriage before and after the collar slip. **Dispatch graph** returns to the plan.
3. **Query graph** pauses the viewer. Choose a question and expand **Show Cypher and parameters**. World facts and action status come from the last graph commit at or before the playhead. Candidate rows come from the most recent planning read. Capabilities describe the chassis. The dispatch still checks the current equipment, job and preconditions. During a live run the backend can continue while you inspect an earlier step.
4. **Write Cypher on the completed run** accepts your own read-only `MATCH … RETURN` query. Its example binds `$tick` to the playhead. The file includes the full execution history, so use a tick predicate when asking historical questions.
5. Under the results, the event evidence includes the input, the proposed DAG and any validator feedback. The saved database includes the full run. [Jump to Jack’s fault](http://127.0.0.1:8041/?reel=post&at=fault) · [Jump to the probe rejection](http://127.0.0.1:8041/?reel=post-probe&at=rejected)

## Run a different fleet

Open **Run options**. The top row opens three actual recorded LLM runs. The form below starts a new database and simulation. **Local planner** computes a deterministic proposal. **LLM orchestrator** uses your own deployment. Both use the same Relate state, validator and executor.

Choose **Custom fleet** for one to three orders. Each active bay has room for one picker and one low courier. Counts fill bays in order of bag 47, 52, then 68. Up to three platform forklifts and two mechanics can serve the active bays. Each bay is paired with a carriage for direct loading. Bay 47 also connects to the station lift. Platform robots with scanning capability can sign. The tool selector equips the mechanics.

| Try this change | What to inspect |
| --- | --- |
| Two orders, two pickers, two couriers, one forklift, one mechanic with a driver. Choose **Lift collar slips**. | Both loads use Jack’s carriage. Inspect the fault, then the new dependencies on one compatible repair. |
| Keep two orders but select one courier and **Clear run**. | Bag 52 has no low courier in its bay. The graph shows the missing candidate and the train stays at red. |
| Select the **One order** preset. Run the collar slip with a driver, then a probe. | The tool changes the feasible recovery. The two bundled recordings also show how the LLM handled this comparison. |

The map seed (0–9999) repeats starting positions. In the small depot it selects a shelf position and Skim’s starting tile. In the yard it selects one of two shelf positions per active bay. Different seeds can produce the same layout. **Hatch closes** and **Coach route withdrawn** create lasting holds when Bag 47 cannot reach a serving coach. [A held departure in the viewer](route-withdrawn.webp)

## Connect your own LLM

Copy [.env.example](../.env.example) to `.env.local` alongside `compose.yaml`. Set `MOONMAIL_AZURE_ENDPOINT` to your Azure OpenAI resource endpoint, `MOONMAIL_AZURE_API_KEY` to its key and `MOONMAIL_AZURE_MODEL` to the deployment name. The deployment must support the Responses API, tool calling and low reasoning effort. The local server reads these settings. Both Git and the Docker build context exclude the private file. [Microsoft’s endpoint guide](https://learn.microsoft.com/en-us/azure/ai-studio/ai-services/concepts/endpoints)

Restart with **`docker compose up`** or **`uv run --locked --env-file .env.local -m moonmail`**. In **Run options → Planner** choose **LLM orchestrator**, configure the fleet and start the run. The new proposals and retries use your deployment.

## Inspect or develop from the terminal

- Bundled stores are `viewer/public/episodes/post.rl`, `post-probe.rl` and `yard.rl`. Their JSON companions provide layout and motion. Run `uv run --locked python tools/inspect_dispatch.py` to query the recorded decisions directly.
- A terminal-only experiment uses `uv run --locked -m moonmail run --mission mail --seed 7 --service-kit probe --fault forks`. It prints the outcome and the path of the new store. For the two-bay shared-forklift experiment, use `uv run --locked -m moonmail run --fleet 2 2 2 1 1 --service-kit driver --fault forks`.
- Rebuild the frontend with Node 22.12+ or 24, `npm --prefix viewer ci`, then `npm --prefix viewer run build`. Run the Python suite with `uv run --locked pytest -q`. [Graph schema and queries](architecture.md) · [Film sources](../tools/film_review/README.md)

The [editable slides](presentation.html) open offline with the arrow keys. After installing Chromium for Playwright, `uv run --script tools/export_presentation.py` rebuilds the PDF and the paced README preview. [Playwright browser setup](https://playwright.dev/python/docs/browsers)
