import asyncio
import json
import os
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from typing import Literal
from uuid import UUID

import relate
from fastapi import FastAPI, HTTPException, Query
from fastapi.responses import FileResponse, RedirectResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from .depot import Scenario
from .episode import episode_steps, run_episode
from .recordings import (
    Question,
    Recording,
    inspect_store,
    live_checkpoint_lock,
    query_completed_store,
    recording,
)

ROOT = Path(__file__).resolve().parent.parent
app = FastAPI(title="Moonmail")


@app.api_route("/api/film", methods=["GET", "HEAD"])
def narrated_film():
    return FileResponse(
        ROOT / "moonmail-demo.mp4",
        media_type="video/mp4",
        headers={"Cache-Control": "no-cache"},
    )


def live_controllers():
    file = os.environ.get("MOONMAIL_LIVE_AZURE_ENV_FILE")
    configured = (file and Path(file).is_file()) or all(
        os.environ.get("MOONMAIL_AZURE_" + k) for k in ("ENDPOINT", "API_KEY", "MODEL")
    )
    return ["deterministic", "azure"] if configured else ["deterministic"]


@app.get("/api/live")
def live_options():
    return {"controllers": live_controllers()}


def playback_ticks(packet):
    """Keep the graph event and its physical frame together on the live wire."""
    if packet["type"] != "update" or len(packet["frames"]) < 2:
        yield packet
        return
    by_tick = {}
    for key in ("frames", "events"):
        for item in packet[key]:
            tick = item["tick"]
            if tick not in by_tick:
                by_tick[tick] = {"type": "update", "frames": [], "events": []}
            by_tick[tick][key].append(item)
    for tick in sorted(by_tick):
        yield by_tick[tick]


@app.post("/api/live")
async def live(
    scenario: Scenario,
    controller: Literal["deterministic", "azure"] = "deterministic",
    pace: float = Query(0.48, ge=0, le=2),
):
    if controller not in live_controllers():
        raise HTTPException(503, "Azure is not configured for this server")

    async def stream():
        # A Relate connection and all of its transactions stay on one thread.
        worker = ThreadPoolExecutor(max_workers=1)
        steps = episode_steps(
            scenario,
            ROOT / "runs",
            controller,
            os.environ.get("MOONMAIL_LIVE_AZURE_ENV_FILE"),
            live_inspection=True,
        )
        loop = asyncio.get_running_loop()
        try:
            while (
                packet := await loop.run_in_executor(worker, next, steps, None)
            ) is not None:
                for moment in playback_ticks(packet):
                    yield json.dumps(moment, separators=(",", ":")) + "\n"
                    if pace and moment.get("frames"):
                        await asyncio.sleep(pace * len(moment["frames"]))
                if packet["type"] == "complete":
                    break
        except (ValueError, RuntimeError) as exc:
            yield json.dumps({"type": "error", "message": str(exc)}) + "\n"
        finally:
            worker.submit(steps.close)
            worker.shutdown(wait=False)

    return StreamingResponse(
        stream(),
        media_type="application/x-ndjson",
        headers={"Cache-Control": "no-store", "X-Accel-Buffering": "no"},
    )


@app.post("/api/episodes")
def simulate(scenario: Scenario):
    return run_episode(scenario, ROOT / "runs")


@app.get("/api/recordings/{name}")
def saved_recording(name: Recording):
    return recording(ROOT / "viewer/public/episodes", name)


@app.get("/api/recordings/{name}/evidence/{question}")
def saved_evidence(
    name: Recording, question: Question, tick: int | None = Query(None, ge=0)
):
    return inspect_store(ROOT / "viewer/public/episodes" / f"{name}.rl", question, tick)


@app.get("/api/episodes/{run_id}/evidence/{question}")
def run_evidence(
    run_id: UUID, question: Question, tick: int | None = Query(None, ge=0)
):
    folder = ROOT / "runs"
    live = folder / f".live-{run_id.hex}.rl"
    with live_checkpoint_lock:
        if live.is_file():
            return inspect_store(live, question, tick)
    final = folder / run_id.hex / "episode.rl"
    if final.is_file():
        return inspect_store(final, question, tick)
    raise HTTPException(404, "Episode does not exist")


class GraphQuery(BaseModel):
    statement: str = Field(min_length=1, max_length=4000)
    tick: int = Field(ge=0)


def execute_inspection(path: Path, request: GraphQuery):
    if not path.is_file():
        raise HTTPException(404, "The completed graph is not available")
    try:
        return query_completed_store(path, request.statement, request.tick)
    except (ValueError, relate.Error) as exc:
        raise HTTPException(400, str(exc)) from exc


@app.post("/api/recordings/{name}/query")
def query_recording(name: Recording, request: GraphQuery):
    return execute_inspection(ROOT / "viewer/public/episodes" / f"{name}.rl", request)


@app.post("/api/episodes/{run_id}/query")
def query_episode(run_id: UUID, request: GraphQuery):
    return execute_inspection(ROOT / "runs" / run_id.hex / "episode.rl", request)


@app.get("/presentation.pdf")
def presentation():
    return FileResponse(ROOT / "docs/presentation.pdf", media_type="application/pdf")


@app.get("/review/opening.mp4", include_in_schema=False)
def opening_excerpt():
    return RedirectResponse("/review/film.html#t=0")


@app.get("/review/fleet-reveal.mp4", include_in_schema=False)
def fleet_excerpt():
    return RedirectResponse("/review/film.html#t=102.8")


@app.get("/api/episodes/{run_id}/graph")
def graph(run_id: UUID):
    path = ROOT / "runs" / run_id.hex / "episode.rl"
    if not path.is_file():
        raise HTTPException(404, "Episode does not exist")
    return FileResponse(
        path, media_type="application/octet-stream", filename="moonmail.rl"
    )


class ViewerFiles(StaticFiles):
    async def get_response(self, path, scope):
        response = await super().get_response(path, scope)
        if path in (".", "") or path.endswith(
            (".html", ".rl", ".json", ".vtt", ".mp4")
        ):
            response.headers["Cache-Control"] = "no-cache"
        return response


for directory in ("episodes", "art", "review"):
    app.mount(
        "/" + directory,
        ViewerFiles(directory=ROOT / "viewer/public" / directory),
        name=directory,
    )

if (ROOT / "viewer/dist/index.html").is_file():
    app.mount("/", ViewerFiles(directory=ROOT / "viewer/dist", html=True), name="depot")
