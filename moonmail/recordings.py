"""Replay graph events and inspect relationships in a persistent Relate store."""

import json
import re
from pathlib import Path
from threading import Lock
from typing import Literal

import relate

# Windows requires readers to close the current checkpoint before it can be replaced.
live_checkpoint_lock = Lock()

Recording = Literal["post", "post-probe", "yard"]
Question = Literal[
    "bodies", "tools", "facts", "actions", "candidates", "custody", "fault", "departure"
]

BODIES = """MATCH (r:Robot)-[:INSTANCE_OF]->(b:Embodiment)-[:HAS_SKILL]->(s:Skill)
RETURN r.id AS robot, b.id AS body, b.reach AS reach_cm, b.cm AS height_cm,
       s.id AS skill ORDER BY robot, skill"""
MOUNTS = """MATCH (r:Robot)-[:MOUNTS]->(t)
OPTIONAL MATCH (t)-[:PROVIDES]->(s:Skill)
OPTIONAL MATCH (t)-[:FITS]->(i:Interface)
RETURN r.id AS robot, t.id AS mounted, s.id AS provides, i.id AS fits ORDER BY robot"""
LAST_EVENT = """MATCH (e:Event) WHERE e.tick <= $tick
RETURN e.data AS data ORDER BY e.tick DESC, e.id DESC LIMIT 1"""
LAST_READ = LAST_EVENT.replace("e.tick <= $tick", "e.tick <= $tick AND e.kind = 'read'")

QUERIES = {
    "bodies": BODIES,
    "facts": LAST_EVENT,
    "actions": LAST_EVENT,
    "candidates": LAST_READ,
    "custody": """MATCH (a:Action)-[:TRANSFERRED]->(c:CustodyChange)-[:TO]->(h)
WHERE c.tick <= $tick
OPTIONAL MATCH (a)-[:FOR_ORDER]->(:Order)-[:REQUESTS]->(p:Parcel)
RETURN c.tick AS step, coalesce(p.id, 'Bag 47') AS parcel, h.id AS holder
ORDER BY step DESC, parcel""",
    "tools": """MATCH (r:Robot)-[:MOUNTS]->(tool)
RETURN r.id AS robot, tool.id AS mounted ORDER BY robot""",
    "fault": """MATCH (e:Event)-[impact]->(a:Action)
WHERE e.tick <= $tick AND type(impact) IN ['INVALIDATES', 'BLOCKS']
RETURN e.tick AS tick, type(impact) AS effect, a.uid AS action
ORDER BY tick, action""",
    "departure": """MATCH (e:Event)-[:AT_REVISION]->(v:PlanRevision)
WHERE e.tick <= $tick WITH max(v.rev) AS latest
MATCH (v:PlanRevision)-[:INCLUDES]->(d:Action {op:'depart'})
      -[:DEPENDS_ON]->(p:Action)-[:ASSIGNED_TO]->(r)
WHERE v.rev = latest
RETURN p.op AS prerequisite, r.id AS assigned_to ORDER BY prerequisite""",
}


def fleet_graph(db):
    return {
        "skills": db.execute(BODIES).fetchall(),
        "mounts": db.execute(MOUNTS).fetchall(),
    }


def events_from_store(db):
    rows = db.execute("MATCH (e:Event) RETURN e.data AS data ORDER BY e.id").fetchall()
    return [json.loads(row["data"]) for row in rows]


def recording(folder: Path, name: Recording):
    motion = json.loads((folder / f"{name}.json").read_text(encoding="utf-8"))
    with relate.connect(str(folder / f"{name}.rl"), read_only=True) as db:
        return {
            **motion,
            "events": events_from_store(db),
            "fleetGraph": fleet_graph(db),
        }


def inspect_store(path: Path, question: Question, tick: int | None = None):
    query = QUERIES[question]
    with relate.connect(str(path), read_only=True) as db:
        bindings = (
            {"tick": tick if tick is not None else 2**31 - 1}
            if "$tick" in query
            else {}
        )
        rows = db.execute(query, bindings).fetchall()
    event_tick = None
    if question in {"facts", "actions", "candidates"} and rows:
        event = json.loads(rows[0]["data"])
        event_tick = event["tick"]
        if question == "facts":
            rows = [
                {"fact": k, "value": v}
                for k, v in sorted(event["proof"]["state"].items())
            ]
        elif question == "actions":
            rows = [
                {"action": n["uid"], "actor": n["actor"], "status": n["state"]}
                for n in event["planGraph"]["nodes"]
            ]
        else:
            context = event["modelInput"]
            rows = []
            for op, spec in context["operators"].items():
                guards = [
                    f"{key}={value} (now {context['world'].get(key)})"
                    for key, value in spec["requires"].items()
                    if context["world"].get(key) != value
                ]
                rows.append(
                    {
                        "operation": op,
                        "candidates": ", ".join(sorted(spec["eligible_and_approach"]))
                        or "None",
                        "unmet_at_read": ", ".join(guards) or "All guards met",
                    }
                )
    return {
        "database": "episode.rl" if path.name.startswith(".live-") else path.name,
        "query": query,
        "bindings": bindings,
        "event_tick": event_tick,
        "rows": rows,
    }


def query_completed_store(path: Path, statement: str, tick: int):
    statement = statement.strip().removesuffix(";").strip()
    # Check clauses outside quoted values and identifiers. The engine enforces read-only access.
    code = re.sub(
        r"""'(?:\\.|''|[^'\\])*'|"(?:\\.|""|[^"\\])*"|`(?:``|[^`])*`|//[^\n]*|/\*[\s\S]*?\*/""",
        " ",
        statement,
    )
    if (
        not re.match(r"\s*(?:OPTIONAL\s+)?MATCH\b", code, re.IGNORECASE)
        or ";" in code
        or not re.search(r"\bRETURN\b", code, re.IGNORECASE)
        or re.search(
            r"\b(?:CALL|USE|CREATE|MERGE|DELETE|SET|REMOVE|DROP|FOREACH|LOAD\s+CSV)\b",
            code,
            re.IGNORECASE,
        )
    ):
        raise ValueError("Enter one read-only MATCH query with a RETURN clause.")
    with relate.connect(str(path), read_only=True) as db:
        rows = db.execute(statement, {"tick": tick}).fetchmany(101)
    return {"rows": [row.to_dict() for row in rows[:100]], "truncated": len(rows) > 100}
