"""The depot layout and embedded episode graph."""

import random
from contextlib import contextmanager
from dataclasses import dataclass
from typing import Literal

from pydantic import BaseModel, Field

from .inspection import LIFTS, REPAIRS


class Scenario(BaseModel):
    mail_fault: Literal["forks", "hatch", "address"] | None = None
    mission: Literal["mail", "yard"] = "mail"
    jam: bool = True
    parcel_cm: int = Field(18, ge=1, le=60)
    seed: int = Field(7, ge=0, le=9999)
    service_kit: Literal["off", "driver", "probe"] = "off"
    fork_fault: bool = False


def layout(seed, service_kit="off"):
    rng = random.Random(seed)
    rack_x = rng.choice([1, 2, 3])
    return {
        "width": 13,
        "depth": 7,
        "wall": 6,
        "gates": {"Shutter": [6, 2], "Hatch": [6, 5]},
        "shelf": [rack_x, 1],
        "socket": [11, 2],
        "lift": [11, 5],
        "baggage": [8, 3],
        "obstacles": [[rack_x, 0], [11, 1], [2, 3], [9, 1]],
        "berths": [[[4, 5], [5, 5]], [[7, 5], [8, 5]]],
        "starts": {
            "Wick": [1, 4],
            "Skim": [rng.choice([3, 4]), 4],
            "Jack": [9, 4],
            **({"Patch": [10, 6]} if service_kit != "off" else {}),
        },
        "service_kit": service_kit,
    }


BODIES = [
    ("Wick", "Picker", 92, 60, 125, ["Carry", "Grip"]),
    ("Skim", "Courier", 14, 12, 12, ["Carry", "Passive deck", "Scan"]),
    ("Jack", "Lift", 64, 40, 85, ["Carry", "Fork", "Scan"]),
    ("Patch", "Service crawler", 59, 0, 82, ["Service wrist", "Scan"]),
]

LIFT_SKILL_LABEL = "Lift a tray"


def describe_lifting_skill(db):
    # Fork is the stable skill ID used by the recorded runs.
    db.execute(
        "MATCH (s:Skill {id:'Fork'}) SET s.label=$label,s.requires_tool=true",
        {"label": LIFT_SKILL_LABEL},
    )


def fork_state(tool, online):
    if tool is None:
        return "unmounted"
    return "online" if online else "offline"


@contextmanager
def transaction(db):
    db.autocommit = False
    try:
        yield
        db.commit()
    except BaseException:
        db.rollback()
        raise
    finally:
        db.autocommit = True


def seed_graph(db, scene, height):
    with transaction(db):
        db.execute(
            """CREATE (a:Zone {id:'Sorting'}), (b:Zone {id:'Platform'}),
            (g:Passage {id:'Shutter', cm:120, open:true}),
            (h:Passage {id:'Hatch', cm:36, open:true}),
            (a)-[:EXIT]->(g)-[:ENTERS]->(b), (a)-[:EXIT]->(h)-[:ENTERS]->(b),
            (s:Station {id:'Shelf', cm:110})-[:IN_ZONE]->(a),
            (t:Station {id:'Coach B', cm:75})-[:IN_ZONE]->(b),
            (p:Parcel {id:'Bag 47', cm:$height, stage:'shelf', stage_holder:'Shelf'})-[:HELD_BY]->(s),
            (o:Order {id:'Registered post'})-[:REQUESTS]->(p), (o)-[:DELIVER_TO]->(t),
            (m:Tray {id:'Mail tray'})<-[:USES]-(p),
            (m)-[:HANDLED_WITH]->(:Skill {id:'Grip'}),
            (m)-[:HANDLED_WITH]->(:Skill {id:'Fork'}),
            (m)-[:RESTS_ON]->(:Skill {id:'Passive deck'}),
            (:Skill {id:'Carry'}), (:Skill {id:'Scan'})""",
            {"height": height},
        )
        db.execute(
            """MATCH (s:Station {id:'Coach B'}), (tray:Tray), (deck:Skill {id:'Passive deck'})
            CREATE (l:LoadingLift {id:'Mail lift', x:$x, z:$z, cycle:16})-[:FEEDS]->(s),
            (l)-[:ACCEPTS]->(tray), (l)-[:DOCKS_WITH]->(deck),
            (other:LoadingLift {id:'Baggage chute',x:$bx,z:$bz,cycle:4})
                -[:FEEDS]->(:Station {id:'Coach A'}),
            (other)-[:ACCEPTS]->(tray), (other)-[:DOCKS_WITH]->(deck)""",
            {
                "x": scene["lift"][0],
                "z": scene["lift"][1],
                "bx": scene["baggage"][0],
                "bz": scene["baggage"][1],
            },
        )
        for name, body, cm, deck, reach, skills in BODIES:
            if name not in scene["starts"]:
                continue
            x, z = scene["starts"][name]
            zone = "Sorting" if x < scene["wall"] else "Platform"
            db.execute(
                """MATCH (z:Zone {id:$zone}) CREATE
                (r:Robot {id:$name, x:$x, z:$z})-[:INSTANCE_OF]->
                (b:Embodiment {id:$body, cm:$cm, deck:$deck, reach:$reach}),
                (r)-[:IN_ZONE]->(z)""",
                dict(
                    name=name,
                    body=body,
                    cm=cm,
                    deck=deck,
                    reach=reach,
                    x=x,
                    z=z,
                    zone=zone,
                ),
            )
            for skill in skills:
                db.execute("MERGE (:Skill {id:$skill})", {"skill": skill})
                db.execute(
                    """MATCH (b:Embodiment {id:$body}), (s:Skill {id:$skill})
                    CREATE (b)-[:HAS_SKILL]->(s)""",
                    {"skill": skill, "body": body},
                )

        describe_lifting_skill(db)
        db.execute("""MATCH (r:Robot {id:'Jack'}), (s:Skill {id:'Fork'})
            CREATE (r)-[:MOUNTS]->(:Tool {id:'Fork carriage',online:true})-[:PROVIDES]->(s)""")
        if "Patch" in scene["starts"]:
            # Only the instrument mounted on the service wrist differs between these fixtures.
            driver = scene["service_kit"] == "driver"
            db.execute("""MATCH (r:Robot {id:'Patch'}), (w:Skill {id:'Service wrist'}),
                (t:Tool {id:'Fork carriage'})
                SET t.port_cm=53
                CREATE (op:Operation {id:'Reseat collar',ticks:4})-[:REQUIRES]->(w),
                (t)-[:RESTORED_BY]->(op)-[:USES_PORT]->(hex:Interface {id:'Hex collar'}),
                (driver:Instrument {id:'Hex driver',online:true})-[:FITS]->(hex),
                (probe:Instrument {id:'Inspection probe',online:true})-[:FITS]->(:Interface {id:'Test socket'})""")
            db.execute(
                """MATCH (r:Robot {id:'Patch'}), (i:Instrument {id:$instrument})
                CREATE (r)-[:MOUNTS]->(i)""",
                {"instrument": "Hex driver" if driver else "Inspection probe"},
            )


@dataclass
class Facts:
    robots: dict
    gates: list
    clearance: dict
    skills: dict
    manipulators: set
    receivers: set
    lifts: list
    failed: list
    repairs: list
    height: int
    source: int
    target: int
    holder: str


def read_facts(db):
    robots = {
        r["id"]: r
        for r in db.execute("""MATCH (r:Robot)-[:INSTANCE_OF]->(b)
        RETURN r.id AS id, r.x AS x, r.z AS z, b.cm AS cm, b.deck AS deck,
        b.reach AS reach, b.id AS body ORDER BY id""").fetchall()
    }
    mounted = db.execute("""MATCH (r:Robot)-[:MOUNTS]->(t:Tool)-[:PROVIDES]->(s:Skill)
        RETURN r.id AS robot,s.id AS skill,t.id AS tool,t.online AS online""").fetchall()
    working = {(r["robot"], r["skill"]) for r in mounted if r["online"]}
    failed = [
        {key: r[key] for key in ("robot", "skill", "tool")}
        for r in mounted
        if r["online"] is False
    ]
    skills = {r: set() for r in robots}
    for row in db.execute("""MATCH (r:Robot)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(s:Skill)
        RETURN r.id AS id,s.id AS skill,s.requires_tool AS needs_tool""").fetchall():
        # Archived graphs predate requires_tool. Their tool-backed lifting skill
        # keeps the same meaning even when the carriage has been removed.
        needs_tool = (
            row["needs_tool"]
            if row["needs_tool"] is not None
            else row["skill"] == "Fork"
        )
        if not needs_tool or (row["id"], row["skill"]) in working:
            skills[row["id"]].add(row["skill"])

    def handlers(edge):
        return {
            r["id"]
            for r in db.execute(f"""MATCH (r:Robot)-[:INSTANCE_OF]->()
            -[:HAS_SKILL]->(s:Skill)<-[:{edge}]-(:Tray)<-[:USES]-(:Parcel)
            RETURN DISTINCT r.id AS id, s.id AS skill""").fetchall()
            if r["skill"] in skills[r["id"]]
        }

    gates = db.execute("""MATCH (:Zone)-[:EXIT]->(g:Passage)-[:ENTERS]->(:Zone)
        RETURN g.id AS id, g.cm AS cm, g.open AS open ORDER BY cm""").fetchall()
    clearance = {r: {False: set(), True: set()} for r in robots}
    for loaded in (False, True):
        for row in db.execute(
            """MATCH (r:Robot)-[:INSTANCE_OF]->(b), (p:Parcel),
            (:Zone)-[:EXIT]->(g:Passage)-[:ENTERS]->(:Zone)
            WHERE g.open = true AND b.cm <= g.cm AND
            ($loaded = false OR b.deck + p.cm <= g.cm)
            RETURN r.id AS robot, g.id AS gate""",
            {"loaded": loaded},
        ).fetchall():
            clearance[row["robot"]][loaded].add(row["gate"])
    state = db.execute("""MATCH (o:Order)-[:REQUESTS]->(p)-[:HELD_BY]->(h),
        (o)-[:DELIVER_TO]->(t), (s:Station {id:'Shelf'})
        RETURN h.id AS holder, p.cm AS height, t.cm AS target, s.cm AS source""").fetchall()
    if len(state) != 1:
        raise RuntimeError("Expected one owner and one destination")
    return Facts(
        robots,
        gates,
        clearance,
        skills,
        handlers("HANDLED_WITH"),
        handlers("RESTS_ON"),
        [
            row
            for row in db.execute(LIFTS).fetchall()
            if row["skill"] in skills[row["robot"]]
        ],
        failed,
        db.execute(REPAIRS).fetchall(),
        **state[0],
    )
