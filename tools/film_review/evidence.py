"""Read the recorded graph relationships shown in the competition film."""

import argparse
import json
from pathlib import Path

import relate

from moonmail.recordings import events_from_store

EPISODES = Path(__file__).resolve().parents[2] / "viewer/public/episodes"


def first(db, query):
    return db.execute(query).fetchall()[0]


def collect():
    with relate.connect(str(EPISODES / "post.rl"), read_only=True) as db:
        post_events = events_from_store(db)
        body_rows = db.execute("""
            MATCH (r:Robot)-[:INSTANCE_OF]->(b:Embodiment)-[:HAS_SKILL]->(s:Skill)
            WHERE r.id IN ['Jack','Patch']
            RETURN r.id AS robot, b.id AS body, b.reach AS reach, s.id AS skill
            ORDER BY robot, skill
        """).fetchall()
        crew = {}
        for row in body_rows:
            person = crew.setdefault(
                row["robot"], {"body": row["body"], "reach": row["reach"], "skills": []}
            )
            person["skills"].append(row["skill"])
        tool = first(
            db,
            """
            MATCH (r:Robot {id:'Jack'})-[:MOUNTS]->(i:Tool)-[:PROVIDES]->(s:Skill {id:'Fork'}),
                  (r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(s)
            RETURN i.id AS name, s.id AS skill, coalesce(s.label,'Lift a tray') AS label
        """,
        )
        station = first(
            db, "MATCH (:Order)-[:DELIVER_TO]->(d:Station) RETURN d.cm AS sill"
        )
        shared_scan = first(
            db,
            """
            MATCH (:Robot {id:'Jack'})-[:INSTANCE_OF]->()-[:HAS_SKILL]->(s:Skill)
                  <-[:HAS_SKILL]-()<-[:INSTANCE_OF]-(:Robot {id:'Patch'}),
                  (w:Waybill)-[:AT_DESK]->(d:Desk)-[:ACCEPTS]->(s)
            RETURN s.id AS skill, d.id AS desk, w.id AS slip
        """,
        )
        instrument = first(
            db,
            """
            MATCH (:Robot {id:'Patch'})-[:MOUNTS]->(i:Instrument)-[:FITS]->(port:Interface)
            RETURN i.id AS name, port.id AS port
        """,
        )
        hatch = first(db, "MATCH (g:Passage {id:'Hatch'}) RETURN g.id AS name")
        read = json.loads(
            first(
                db,
                """
            MATCH (e:Event {kind:'read'}) RETURN e.data AS data ORDER BY e.tick LIMIT 1
        """,
            )["data"]
        )["modelInput"]
        order = json.loads(
            first(db, "MATCH (e:Event {kind:'order'}) RETURN e.data AS data")["data"]
        )
        steps = json.loads(
            first(
                db,
                """
            MATCH (p:ProposalAttempt {revision:1}) RETURN p.proposal AS proposal
        """,
            )["proposal"]
        )["steps"]
        blocked = first(
            db,
            """
            MATCH (f:Event {kind:'fork fault'})-[:INVALIDATES]->(l:Action),
                  (f)-[:BLOCKS]->(d:Action)-[:DEPENDS_ON]->(l)
            RETURN f.tick AS tick, l.op AS load, d.op AS downstream
        """,
        )
        revision = first(
            db,
            """
            MATCH (v:PlanRevision {rev:2})-[:INCLUDES]->(l:Action {op:'load'})
                  -[:DEPENDS_ON]->(r:Action {op:'repair'})-[:ASSIGNED_TO]->(mechanic),
                  (v)-[:REVISES]->(prior)-[:INCLUDES]->(s:Action {op:'manifest'})<-[:INCLUDES]-(v)
            RETURN mechanic.id AS mechanic, s.uid AS kept_signature
        """,
        )
        actions = db.execute("""
            MATCH (:PlanRevision {rev:1})-[:INCLUDES]->(a:Action)
            RETURN a.op AS op, a.label AS label ORDER BY op
        """).fetchall()
    with relate.connect(str(EPISODES / "yard.rl"), read_only=True) as db:
        count = first(
            db,
            """
            MATCH (:PlanRevision {rev:1})-[:INCLUDES]->(a:Action) RETURN count(a) AS n
        """,
        )["n"]
        first_start = first(
            db,
            "MATCH (e:Event {kind:'assignment'}) RETURN e.tick AS tick ORDER BY tick LIMIT 1",
        )["tick"]
        first_jobs = db.execute(
            """
            MATCH (e:Event {kind:'assignment', tick:$tick})-[:STARTS]->(a:Action)-[:ASSIGNED_TO]->(r)
            RETURN a.uid AS uid, a.op AS op, r.id AS actor ORDER BY op
            """,
            {"tick": first_start},
        ).fetchall()
        final_plan = json.loads(
            first(
                db,
                "MATCH (e:Event {kind:'delivered'}) RETURN e.data AS data",
            )["data"]
        )["planGraph"]
    post, yard = (
        json.loads((EPISODES / (name + ".json")).read_text(encoding="utf-8"))
        for name in ("post", "yard")
    )
    return dict(
        crew=crew,
        tool=tool,
        shared_scan=shared_scan,
        instrument=instrument,
        hatch=hatch["name"],
        sill=station["sill"],
        load_guard=read["operators"]["load"]["requires"]["forks"],
        world=read["world"],
        holder=read["current_holder"],
        order=order["proof"]["rows"][0],
        candidates={
            op: list(read["operators"][op]["eligible_and_approach"])
            for op in ("load", "manifest")
        },
        proposal=steps,
        dispatch=dict(
            actions=actions,
            fault=blocked,
            revision=revision,
            complete={
                q["op"]: q["tick"] for q in post_events if q["kind"] == "completed"
            },
            custody=[
                {"tick": f["tick"], "holder": f["holder"]}
                for i, f in enumerate(post["frames"])
                if i == 0 or f["holder"] != post["frames"][i - 1]["holder"]
            ],
        ),
        layout=post["layout"],
        yard=yard["layout"],
        scale=dict(
            actions=count,
            orders=len(yard["layout"]["yard"]["orders"]),
            robots=len(yard["layout"]["starts"]),
            tick=first_start,
            running=first_jobs,
            final_plan=final_plan,
        ),
    )


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    args.output.write_text(json.dumps(collect(), indent=2))
