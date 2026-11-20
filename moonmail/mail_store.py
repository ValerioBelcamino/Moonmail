"""The mail mission's world model, plan revisions, and point-in-time graph queries."""

import json

from .depot import fork_state, seed_graph, transaction
from .inspection import LIFTS, REPAIRS, SERVICE_INTERFACES
from .mail_planning import OPS, World
from .planning import distance

ADDRESS = """MATCH (train:Train)-[:HAS_COACH]->(coach:Station)-[:SERVES]->(route:Route)
        <-[:ADDRESSED_TO]-(bag:Parcel)<-[:REQUESTS]-(o:Order)-[:ON_TRAIN]->(train),
        (waybill:Waybill)-[:COVERS]->(bag),(o)-[:DELIVER_TO]->(coach)
RETURN bag.id AS bag,route.id AS route,coach.id AS coach,train.id AS train,waybill.id AS bill"""

NODES = """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(a:Action)-[:ASSIGNED_TO]->(r)
RETURN a.uid AS uid,a.op AS op,a.label AS label,a.status AS state,r.id AS actor ORDER BY uid"""
EDGES = """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(a:Action)-[:DEPENDS_ON]->(p:Action)
RETURN p.uid AS source,a.uid AS target ORDER BY source,target"""
ACTION_GUARDS = """MATCH (a:Action {uid:$uid})-[g:REQUIRES]->(f:WorldFact)
RETURN a.label AS action,f.id AS fact,g.expected AS required,f.value AS observed ORDER BY fact"""
SCANNERS = """MATCH (r:Robot)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)<-[:ACCEPTS]-(d:Desk)<-[:AT_DESK]-(w:Waybill),
             (r)-[:IN_ZONE]->(z)<-[:IN_ZONE]-(d)
        RETURN r.id AS actor,b.id AS body,s.id AS skill,d.id AS desk,w.id AS bill,d.x AS x,d.z AS z ORDER BY actor"""
GUARDS = """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(a:Action)-[g:REQUIRES]->(f:WorldFact)
WHERE a.status='pending' AND g.expected<>f.value
RETURN a.uid AS uid,a.op AS op,f.id AS fact,g.expected AS expected,f.value AS actual"""
PRODUCERS = """MATCH (a:Action {uid:$uid})-[:DEPENDS_ON*1..]->(p:Action)-[e:ESTABLISHES]->(f:WorldFact {id:$fact})
WHERE p.status='pending' AND e.value=$expected RETURN p.uid AS producer"""
DESCENDANTS = """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(a:Action)-[:DEPENDS_ON*1..]->(root:Action {uid:$uid})
WHERE a.status='pending' RETURN DISTINCT a.uid AS uid"""
READY = """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(a:Action {status:'pending'})
WHERE NOT EXISTS { MATCH (a)-[:DEPENDS_ON]->(p:Action) WHERE p.status <> 'done' }
RETURN a.uid AS uid,a.op AS op"""
IMPACT = """MATCH (e:Event {id:$event})-[k]->(a:Action)
WHERE type(k)='INVALIDATES' OR type(k)='BLOCKS'
RETURN type(k) AS effect,a.uid AS uid,a.label AS action ORDER BY effect,uid"""


def seed_mail(db, scene, height, shutter_jam):
    seed_graph(db, scene, height)
    with transaction(db):
        db.execute(
            """MATCH (o:Order),(p:Parcel),(destination:Station {id:'Coach B'}),(other:Station {id:'Coach A'}),(g:Passage {id:'Shutter'})
            SET g.open=$open
            CREATE (train:Train {id:'Night Mail',signal:'red'})-[:HAS_COACH]->(destination),
            (train)-[:HAS_COACH]->(other),(o)-[:ON_TRAIN]->(train),
            (p)-[:ADDRESSED_TO]->(north:Route {id:'Northport'})<-[:SERVES]-(destination),
            (other)-[:SERVES]->(:Route {id:'Eastbank'}),
            (:Waybill {id:'Waybill 47',status:'unsigned'})-[:COVERS]->(p),
            (:Interlocking {id:'Signal box'})-[:CONTROLS]->(train)""",
            {"open": not shutter_jam},
        )
        db.execute("""MATCH (b:Waybill),(s:Skill {id:'Scan'}),(z:Zone {id:'Platform'})
            CREATE (b)-[:AT_DESK]->(d:Desk {id:'Post desk',x:9,z:3})-[:IN_ZONE]->(z),(d)-[:ACCEPTS]->(s)""")


def access_signature(db, scene):
    positions = db.execute(
        "MATCH (r:Robot) RETURN r.id AS id,r.x AS x,r.z AS z ORDER BY id"
    ).fetchall()
    gates = db.execute(
        "MATCH (g:Passage) RETURN g.id AS id,g.open AS open,g.cm AS cm ORDER BY id"
    ).fetchall()
    return json.dumps(
        [positions, gates, scene["obstacles"]], sort_keys=True, separators=(",", ":")
    )


def world_state(db, scene):
    address = db.execute(ADDRESS).fetchall()
    state = db.execute("""MATCH (p:Parcel),(w:Waybill),
              (g:Passage {id:'Hatch'}),(train:Train)
        OPTIONAL MATCH (:Robot)-[:MOUNTS]->(t:Tool {id:'Fork carriage'})
        RETURN p.stage AS cargo,p.stage_holder AS recorded_holder,p.cm AS cm,t.id AS carriage,t.online AS online,w.status AS manifest,
               g.open AS open,g.cm AS opening,train.signal AS signal""").fetchall()[0]
    holders = db.execute(
        "MATCH (:Parcel)-[:HELD_BY]->(h) RETURN h.id AS holder"
    ).fetchall()
    state["holder"] = holders[0]["holder"] if len(holders) == 1 else "unknown"
    positions = {
        r["id"]: (r["x"], r["z"])
        for r in db.execute(
            "MATCH (r:Robot) RETURN r.id AS id,r.x AS x,r.z AS z"
        ).fetchall()
    }

    def options(rows, cell):
        return {r["actor"]: distance(positions[r["actor"]], cell) for r in rows}

    pick = db.execute("""MATCH (r:Robot)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)<-[:HANDLED_WITH]-(tray:Tray)<-[:USES]-(:Parcel),
             (b)-[:HAS_SKILL]->(:Skill {id:'Carry'}),(shelf:Station {id:'Shelf'})
        WHERE b.reach>=shelf.cm RETURN DISTINCT r.id AS actor""").fetchall()
    decks = db.execute("""MATCH (r:Robot)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)<-[:RESTS_ON]-(:Tray)<-[:USES]-(:Parcel),
             (b)-[:HAS_SKILL]->(:Skill {id:'Carry'})
        RETURN DISTINCT r.id AS actor,b.cm AS body,b.deck AS deck""").fetchall()
    fitting = [
        r for r in decks if max(r["body"], r["deck"] + state["cm"]) <= state["opening"]
    ]
    loaders = db.execute("""MATCH (r:Robot)-[:IN_ZONE]->(:Zone {id:'Platform'}),
             (r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)<-[:PROVIDES]-(t:Tool)<-[:MOUNTS]-(r),
             (s)<-[:HANDLED_WITH]-(:Tray),(:Order)-[:DELIVER_TO]->(dest:Station)
        WHERE b.reach>=dest.cm RETURN DISTINCT r.id AS actor""").fetchall()
    scans = db.execute(SCANNERS).fetchall()
    lifts = db.execute(LIFTS).fetchall()
    destination = address[0]["coach"] if len(address) == 1 else ""
    lifts = [r for r in lifts if r["station"] == destination]
    repairs = db.execute(REPAIRS).fetchall()
    interfaces = db.execute(SERVICE_INTERFACES).fetchall()
    choices = {
        "collect": options(pick, scene["shelf"]),
        "stage": options(pick, scene["berths"][0][0]),
        "cross": options(fitting, scene["berths"][0][1]),
        "load": options(loaders, scene["berths"][1][1]),
        "manifest": {
            r["actor"]: distance(positions[r["actor"]], (r["x"], r["z"])) for r in scans
        },
        "repair": {
            r["actor"]: max(
                0, distance(positions[r["actor"]], positions[r["patient"]]) - 1
            )
            for r in repairs
        },
        "hoist": {
            r["robot"]: distance(positions[r["robot"]], (r["x"], r["z"])) for r in lifts
        },
        "depart": {"Signal box": 0},
    }
    signature = access_signature(db, scene)
    for block in db.execute(
        "MATCH (b:AccessBlock {at:$signature}) RETURN b.op AS op,b.actor AS actor",
        {"signature": signature},
    ).fetchall():
        choices[block["op"]].pop(block["actor"], None)
    # Phase and custody must agree, including the loaded courier's actual side of the wall.
    owner, phase = state["holder"], state["cargo"]
    consistent = {
        "shelf": owner == "Shelf",
        "picked": owner in positions,
        "staged": owner in positions and positions[owner][0] < scene["wall"],
        "platform": owner in positions and positions[owner][0] > scene["wall"],
        "aboard": owner == destination,
    }
    if owner != state["recorded_holder"] or not consistent.get(phase, False):
        state["cargo"] = "custody mismatch"
    facts = {
        "cargo": state["cargo"],
        "manifest": state["manifest"],
        "signal": state["signal"],
        "forks": fork_state(state["carriage"], state["online"]),
        "hatch": "open" if state["open"] else "closed",
        "clearance": "fits" if fitting else "too tall",
        "address": "matched" if destination else "unresolved",
        "interface": "fits" if repairs else "unavailable",
        "lift": "connected" if lifts else "disconnected",
    }
    return World(facts, choices, state["holder"], destination, scans, interfaces)


def refresh(db, scene):
    world = world_state(db, scene)
    return materialize(db, world)


def materialize(db, world):
    values = dict(world.facts)
    # Previously bound bodies must acquire a negative fact when a capability disappears.
    known = db.execute("MATCH (f:WorldFact) RETURN f.id AS id").fetchall()
    for key in [r["id"] for r in known if r["id"].startswith("can/")]:
        values[key] = "no"
    for op, options in world.options.items():
        for who in options:
            values[f"can/{op}/{who}"] = "yes"
    for key, value in values.items():
        db.execute(
            "MERGE (f:WorldFact {id:$key}) SET f.value=$value",
            {"key": key, "value": value},
        )
    return world


def snapshot(db, rev):
    nodes = db.execute(NODES, {"rev": rev}).fetchall()
    edges = db.execute(EDGES, {"rev": rev}).fetchall()
    return {"revision": rev, "nodes": nodes, "edges": edges}


def invalidate(db, rev, issues, event):
    roots = {row["uid"] for row in issues}
    all_stale = set(roots)
    for uid in roots:
        all_stale.update(
            r["uid"]
            for r in db.execute(DESCENDANTS, {"rev": rev, "uid": uid}).fetchall()
        )
    for uid in sorted(all_stale):
        rel = "INVALIDATES" if uid in roots else "BLOCKS"
        db.execute(
            f"""MATCH (e:Event {{id:$event}}),(a:Action {{uid:$uid}})
            CREATE (e)-[:{rel}]->(a) SET a.status='stale'""",
            {"event": event, "uid": uid},
        )
    for issue in issues:
        db.execute(
            """MATCH (e:Event {id:$event}),(f:WorldFact {id:$fact})
            CREATE (e)-[:VIOLATES {expected:$expected,actual:$actual}]->(f)""",
            {**{k: issue[k] for k in ("fact", "expected", "actual")}, "event": event},
        )


def violations(db, rev):
    return [
        r
        for r in db.execute(GUARDS, {"rev": rev}).fetchall()
        if not db.execute(
            PRODUCERS, {k: r[k] for k in ("uid", "fact", "expected")}
        ).fetchall()
    ]


def persist_plan(db, rev, raw, verified, author, contracts=OPS):
    previous = snapshot(db, rev - 1)
    keep = {r["op"]: r for r in previous["nodes"] if r["state"] == "pending"}
    completed = {r["uid"] for r in previous["nodes"] if r["state"] == "done"}
    db.execute(
        "CREATE (:PlanRevision {rev:$rev,author:$author,proposal:$raw,solver:'Z3'})",
        {"rev": rev, "author": author, "raw": json.dumps(raw, separators=(",", ":"))},
    )
    if rev > 1:
        db.execute(
            "MATCH (n:PlanRevision {rev:$rev}),(p:PlanRevision {rev:$prior}) CREATE (n)-[:REVISES]->(p)",
            {"rev": rev, "prior": rev - 1},
        )
    ids = {op: r["uid"] for op, r in keep.items()}
    for op, actor in verified.actors.items():
        if op in ids:
            continue
        uid = f"{rev}/{op}"
        ids[op] = uid
        db.execute(
            """MATCH (r {id:$actor}) WHERE r:Robot OR r:Interlocking
              CREATE (:Action {uid:$uid,op:$op,label:$label,status:'pending'})-[:ASSIGNED_TO]->(r)""",
            {"uid": uid, "op": op, "actor": actor, "label": contracts[op].label},
        )
        if "/" in op:
            db.execute(
                "MATCH (a:Action {uid:$uid}),(o:Order {id:$bag}) CREATE (a)-[:FOR_ORDER]->(o)",
                {"uid": uid, "bag": op.split("/", 1)[0]},
            )
        for key, expected in {
            **contracts[op].needs,
            f"can/{op}/{actor}": "yes",
        }.items():
            db.execute(
                """MATCH (a:Action {uid:$uid}),(f:WorldFact {id:$key})
                   CREATE (a)-[:REQUIRES {expected:$expected}]->(f)""",
                {"uid": uid, "key": key, "expected": expected},
            )
        for key, val in contracts[op].sets.items():
            db.execute(
                """MATCH (a:Action {uid:$uid}),(f:WorldFact {id:$key})
                   CREATE (a)-[:ESTABLISHES {value:$val}]->(f)""",
                {"uid": uid, "key": key, "val": val},
            )
    # A completed action stays in the history even if a later observation undoes
    # its effect and the dispatcher needs a new instance of the same operation.
    for uid in sorted(completed | set(ids.values())):
        db.execute(
            "MATCH (v:PlanRevision {rev:$rev}),(a:Action {uid:$uid}) CREATE (v)-[:INCLUDES]->(a)",
            {"rev": rev, "uid": uid},
        )
    for op, parents in verified.steps.items():
        if op in keep:
            continue
        links = {ids[p] for p in parents}
        # A fact supplied by the completed prefix needs a boundary edge. Facts
        # established inside the new suffix already have their causal edges.
        for key, value in contracts[op].needs.items():
            if any(contracts[p].sets.get(key) == value for p in parents):
                continue
            matches = db.execute(
                """MATCH (a:Action {status:'done'})-[e:ESTABLISHES]->(f:WorldFact {id:$key})
                WHERE f.value=$value RETURN a.uid AS uid,e.value AS established ORDER BY a.finished DESC LIMIT 1""",
                {"key": key, "value": value},
            ).fetchall()
            if matches and matches[0]["established"] == value:
                links.add(matches[0]["uid"])
        for uid in sorted(links):
            db.execute(
                "MATCH (a:Action {uid:$a}),(p:Action {uid:$p}) CREATE (a)-[:DEPENDS_ON]->(p)",
                {"a": ids[op], "p": uid},
            )
    return ids
