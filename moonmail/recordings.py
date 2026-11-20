"""Replay graph events and inspect relationships in a persistent Relate store."""

import json
from pathlib import Path
from typing import Literal

import relate

Recording = Literal["post", "post-probe", "yard"]
Question = Literal["tools", "fault", "departure"]

QUERIES = {
    "tools": """MATCH (r:Robot)-[:MOUNTS]->(tool)
RETURN r.id AS robot, tool.id AS mounted ORDER BY robot""",
    "fault": """MATCH (e:Event)-[impact]->(a:Action)
WHERE type(impact) IN ['INVALIDATES', 'BLOCKS']
RETURN e.tick AS tick, type(impact) AS effect, a.uid AS action
ORDER BY tick, action""",
    "departure": """MATCH (v:PlanRevision) WITH max(v.rev) AS latest
MATCH (v:PlanRevision)-[:INCLUDES]->(d:Action {op:'depart'})
      -[:DEPENDS_ON]->(p:Action)-[:ASSIGNED_TO]->(r)
WHERE v.rev = latest
RETURN p.op AS prerequisite, r.id AS assigned_to ORDER BY prerequisite""",
}


def events_from_store(db):
    rows = db.execute("MATCH (e:Event) RETURN e.data AS data ORDER BY e.id").fetchall()
    return [json.loads(row["data"]) for row in rows]


def recording(folder: Path, name: Recording):
    motion = json.loads((folder / f"{name}.json").read_text(encoding="utf-8"))
    with relate.connect(str(folder / f"{name}.rl"), read_only=True) as db:
        return {**motion, "events": events_from_store(db)}


def inspect_store(path: Path, question: Question):
    query = QUERIES[question]
    with relate.connect(str(path), read_only=True) as db:
        return {
            "database": path.name,
            "query": query,
            "rows": db.execute(query).fetchall(),
        }
