"""Concurrent postal orders and a configurable fleet sharing one train and one Relate store."""

import random
from dataclasses import dataclass, field

from .depot import BODIES, YardFleet, describe_lifting_skill, fork_state, transaction
from .mail_episode import MailRun, NoRoute
from .mail_planning import OPS, Operator, World
from .mail_store import ACTION_GUARDS, access_signature, materialize
from .planning import distance, path_to

ADDRESSES = """MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:ADDRESSED_TO]->(route:Route)
       <-[:SERVES]-(coach:Station)<-[:DELIVER_TO]-(o),(w:Waybill)-[:COVERS]->(p),
       (o)-[:ON_TRAIN]->(t:Train)-[:HAS_COACH]->(coach)
       RETURN o.id AS order,p.id AS bag,route.id AS route,coach.id AS coach,w.id AS bill ORDER BY bag"""
CARGO = """MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:HELD_BY]->(h),(w:Waybill)-[:COVERS]->(p),
       (o)-[:DELIVER_TO]->(c),(o)-[:VIA]->(g)
       OPTIONAL MATCH (o)-[:LOADS_WITH]->(t:Tool)<-[:MOUNTS]-(:Robot)
       RETURN o.id AS id,p.stage AS stage,p.cm AS cm,h.id AS holder,w.status AS manifest,
       c.id AS coach,g.open AS open,g.cm AS opening,t.id AS tool,t.online AS online ORDER BY id"""
CAPABILITIES = """MATCH (r:Robot)-[:SERVICES]->(o:Order),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s),
       (o)-[:REQUESTS]->(p:Parcel)-[:USES]->(tray:Tray),(o)-[:AT_SHELF]->(shelf),(o)-[:DELIVER_TO]->(coach)
       RETURN o.id AS bag,r.id AS actor,s.id AS skill,b.reach AS reach,b.cm AS height,b.deck AS deck,
       shelf.cm AS shelf,coach.cm AS sill,r.x AS x,r.z AS z"""
FORKS = """MATCH (r:Robot)-[:MOUNTS]->(tool:Tool)<-[:LOADS_WITH]-(o:Order),
       (tool)-[:PROVIDES]->(:Skill {id:'Fork'})<-[:HAS_SKILL]-(:Embodiment)<-[:INSTANCE_OF]-(r)
       RETURN r.id AS actor, o.id AS bag"""
REPAIR = """MATCH (r:Robot)-[:MOUNTS]->(i:Instrument)-[:FITS]->(port:Interface),
       (r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(:Skill {id:'Service wrist'}),
       (t:Tool)<-[:MOUNTS]-(p:Robot),(t)-[:USES_PORT]->(need:Interface)
       RETURN r.id AS robot,i.id AS instrument,port.id AS fits,need.id AS needs,t.id AS tool,p.id AS patient"""
LIFTS = """MATCH (l:LoadingLift)-[:FEEDS]->(c:Station)<-[:DELIVER_TO]-(o:Order),
       (o)-[:REQUESTS]->(:Parcel)-[:USES]->(t:Tray)<-[:ACCEPTS]-(l),
       (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(s)<-[:DOCKS_WITH]-(l)
       RETURN o.id AS bag,r.id AS actor,l.id AS lift"""


def yard_layout(scenario):
    rng = random.Random(scenario.seed)
    fleet = scenario.fleet or YardFleet(mechanics=int(scenario.service_kit != "off"))
    loaders = [("Jack", [17, 2]), ("Fern", [17, 7]), ("Ash", [17, 11])][
        : fleet.forklifts
    ]
    mechanics = [("Patch", [20, 4]), ("Dot", [21, 9])][: fleet.mechanics]
    orders, starts, bodies = [], {}, {}
    for i, (bag, route, picker, courier) in enumerate(
        [
            ("47", "Northport", "Wick", "Skim"),
            ("52", "Eastbank", "Pip", "Dash"),
            ("68", "Westmere", "Rue", "Moss"),
        ][: fleet.orders]
    ):
        z = 2 + i * 4
        orders.append(
            {
                "id": bag,
                "route": route,
                "coach": "Coach " + "ABC"[i],
                "row": z,
                "shelf": [2 + rng.randrange(2), z],
                "handoff": [8, z],
                "deck": [9, z],
                "hatch": [12, z],
                "berth": [15, z],
                "unload": [16, z],
                "desk": [19, z + 1],
                "door": [23, z],
                "lift": [22, z + 1],
                "picker": picker,
                "courier": courier,
                "loader": loaders[min(i, len(loaders) - 1)][0] if loaders else None,
            }
        )
        if i < fleet.pickers:
            starts[picker], bodies[picker] = [2, z + 1], "Wick"
        if i < fleet.couriers:
            starts[courier], bodies[courier] = [7, 13 if i == 2 else z + 1], "Skim"
    for name, cell in loaders:
        starts[name], bodies[name] = cell, "Jack"
    for name, cell in mechanics:
        starts[name], bodies[name] = cell, "Patch"
    return {
        "width": 26,
        "depth": 14,
        "wall": 12,
        "gates": {o["id"]: o["hatch"] for o in orders},
        "obstacles": [[5, o["row"] - 1] for o in orders] + [[20, 0], [20, 12]],
        "starts": starts,
        "service_kit": scenario.service_kit,
        "yard": {"orders": orders, "bodies": bodies},
    }


def seed_yard(db, scene, scenario):
    fleet = {r[0]: r for r in BODIES}
    with transaction(db):
        db.execute("""CREATE (:Train {id:'Junction Mail',signal:'red'}),(:Interlocking {id:'Signal box'}),
            (:Zone {id:'Platform'}),(:Zone {id:'Sorting'}),(:Tray {id:'Mail tray'})""")
        for typ, body, cm, deck, reach, skills in BODIES:
            db.execute(
                "CREATE (:Embodiment {id:$body,cm:$cm,deck:$deck,reach:$reach})",
                {"body": body, "cm": cm, "deck": deck, "reach": reach},
            )
            for skill in skills:
                db.execute("MERGE (:Skill {id:$s})", {"s": skill})
                db.execute(
                    "MATCH (b:Embodiment {id:$b}),(s:Skill {id:$s}) CREATE (b)-[:HAS_SKILL]->(s)",
                    {"b": body, "s": skill},
                )
        describe_lifting_skill(db)
        for name, (x, z) in scene["starts"].items():
            db.execute(
                """MATCH (b:Embodiment {id:$body}),(zone:Zone {id:$zone})
              CREATE (r:Robot {id:$id,x:$x,z:$z})-[:INSTANCE_OF]->(b),(r)-[:IN_ZONE]->(zone)""",
                {
                    "body": fleet[scene["yard"]["bodies"][name]][1],
                    "id": name,
                    "x": x,
                    "z": z,
                    "zone": "Sorting" if x < 12 else "Platform",
                },
            )
        types = scene["yard"]["bodies"]
        forklifts = [name for name, body in types.items() if body == "Jack"]
        mechanics = [name for name, body in types.items() if body == "Patch"]
        for robot in forklifts:
            db.execute(
                """MATCH (r:Robot {id:$r}),(s:Skill {id:'Fork'}) MERGE (i:Interface {id:'Hex collar'})
                       CREATE (r)-[:MOUNTS]->(t:Tool {id:$t,online:true})-[:PROVIDES]->(s),(t)-[:USES_PORT]->(i)""",
                {"r": robot, "t": robot + " forks"},
            )
        for robot in mechanics if scenario.service_kit != "off" else []:
            driver = scenario.service_kit == "driver"
            db.execute(
                """MATCH (r:Robot {id:$robot}) MERGE (p:Interface {id:$port})
                CREATE (r)-[:MOUNTS]->(:Instrument {id:$tool})-[:FITS]->(p)""",
                {
                    "robot": robot,
                    "port": "Hex collar" if driver else "Test socket",
                    "tool": ("Hex driver" if driver else "Inspection probe")
                    + ("" if robot == "Patch" else " (" + robot + ")"),
                },
            )
        for o in scene["yard"]["orders"]:
            bag = o["id"]
            loader = o["loader"]
            db.execute(
                """MATCH (t:Train),(tray:Tray)
               CREATE (o:Order {id:$id})-[:REQUESTS]->(p:Parcel {id:$bag,stage:'shelf',cm:$cm})-[:HELD_BY]->(s:Station {id:$shelf,cm:110}),
               (o)-[:ON_TRAIN]->(t),(o)-[:AT_SHELF]->(s),(o)-[:VIA]->(:Passage {id:$hatch,open:true,cm:36}),
               (p)-[:USES]->(tray),(t)-[:HAS_COACH]->(c:Station {id:$coach,cm:75}),
               (o)-[:DELIVER_TO]->(c),(c)-[:SERVES]->(d:Route {id:$route})<-[:ADDRESSED_TO]-(p),
               (:Waybill {id:$bill,status:'unsigned'})-[:COVERS]->(p)""",
                {
                    "id": bag,
                    "bag": "Bag " + bag,
                    "cm": scenario.parcel_cm,
                    "shelf": "Shelf " + bag,
                    "hatch": "Hatch " + bag,
                    "coach": o["coach"],
                    "route": o["route"],
                    "bill": "Waybill " + bag,
                },
            )
            if loader:
                db.execute(
                    """MATCH (o:Order {id:$bag}),(f:Tool {id:$tool})
                    CREATE (o)-[:LOADS_WITH]->(f)""",
                    {"bag": bag, "tool": loader + " forks"},
                )
            platform = forklifts if scenario.fleet else [loader]
            for actor in [o["picker"], o["courier"], *platform, *mechanics]:
                db.execute(
                    "MATCH (r:Robot {id:$actor}),(o:Order {id:$bag}) CREATE (r)-[:SERVICES]->(o)",
                    {"actor": actor, "bag": bag},
                )
            if bag == "47":
                db.execute(
                    """MATCH (c:Station {id:$coach}),(t:Tray),(s:Skill {id:'Passive deck'})
                    CREATE (l:LoadingLift {id:'Mail lift'})-[:FEEDS]->(c),(l)-[:ACCEPTS]->(t),(l)-[:DOCKS_WITH]->(s)""",
                    {"coach": o["coach"]},
                )


def fact_id(bag, key, loader):
    if key == "signal" or key == "interface":
        return key
    if key == "forks":
        return "forks" if loader in ("Jack", None) else loader + "/forks"
    return f"{bag}/{key}"


def contracts_for(orders):
    result = {}
    join = {"signal": "red"}
    for bag in orders:
        for op, spec in OPS.items():
            if op == "depart":
                join.update(
                    {
                        fact_id(bag, k, orders[bag]["loader"]): v
                        for k, v in spec.needs.items()
                    }
                )
                continue
            if op == "repair" and bag != "47":
                continue
            result[f"{bag}/{op}"] = Operator(
                spec.label,
                {
                    fact_id(bag, k, orders[bag]["loader"]): v
                    for k, v in spec.needs.items()
                },
                {
                    fact_id(bag, k, orders[bag]["loader"]): v
                    for k, v in spec.sets.items()
                },
                spec.effort,
            )
    result["depart"] = Operator("Release train", join, {"signal": "green"}, 1)
    return result


@dataclass
class Journey:
    row: dict
    actor: str
    cells: dict = field(default_factory=dict)
    transfers: dict = field(default_factory=dict)
    duration: int = 0


class YardRun(MailRun):
    address_query = ADDRESSES

    def __init__(self, db, scene, controller, env_file):
        self.orders = {o["id"]: o for o in scene["yard"]["orders"]}
        self.contracts = contracts_for(self.orders)
        self.last_wave = []
        self.custody = {}
        super().__init__(db, scene, controller, env_file)

    def read_world(self):
        db = self.db
        data = {r["id"]: r for r in db.execute(CARGO).fetchall()}
        self.custody = {k: r["holder"] for k, r in data.items()}
        interfaces = db.execute(REPAIR).fetchall()
        connected = {(r["bag"], r["actor"]) for r in db.execute(LIFTS).fetchall()}
        matched = {r["order"]: r for r in db.execute(ADDRESSES).fetchall()}
        loadable = {(r["bag"], r["actor"]) for r in db.execute(FORKS).fetchall()}
        facts = {
            "signal": db.execute("MATCH (t:Train) RETURN t.signal AS v").fetchall()[0][
                "v"
            ]
        }
        options = {op: {} for op in self.contracts}
        options["depart"] = {"Signal box": 0}
        candidates = db.execute(CAPABILITIES).fetchall()
        carrying = {
            r["bag"]
            for r in db.execute(
                """MATCH (a:Action {status:'running'})-[:FOR_ORDER]->(o:Order)
               RETURN o.id AS bag,a.op AS op"""
            ).fetchall()
            if r["op"].split("/")[-1] in {"collect", "stage", "cross", "load", "hoist"}
        }

        for bag, r in data.items():
            o = self.orders[bag]
            fit = any(
                x["bag"] == bag
                and x["skill"] == "Passive deck"
                and max(x["height"], x["deck"] + r["cm"]) <= r["opening"]
                for x in candidates
            )
            stage, owner = r["stage"], r["holder"]
            owners = {
                "shelf": "Shelf " + bag,
                "picked": o["picker"],
                "staged": o["courier"],
                "platform": o["courier"],
                "aboard": r["coach"],
            }
            on_platform = (
                stage != "platform"
                or self.positions.get(owner, (-1, 0))[0] > self.scene["wall"]
            )
            consistent = owners.get(stage) == owner and on_platform
            vals = {
                "cargo": stage if bag in carrying or consistent else "custody mismatch",
                "manifest": r["manifest"],
                "forks": fork_state(r["tool"], r["online"]),
                "hatch": "open" if r["open"] else "closed",
                "address": "matched" if bag in matched else "unresolved",
                "clearance": "fits" if fit else "too tall",
                "lift": "connected"
                if any(b == bag for b, _ in connected)
                else "disconnected",
            }
            facts.update({fact_id(bag, k, o["loader"]): v for k, v in vals.items()})
            for c in candidates:
                if c["bag"] != bag:
                    continue
                who = c["actor"]
                skill = c["skill"]
                pos = (c["x"], c["z"])

                locations = {}

                if skill == "Grip" and c["reach"] >= c["shelf"]:
                    locations["collect"] = o["shelf"]
                    locations["stage"] = o["handoff"]
                if (
                    skill == "Passive deck"
                    and max(c["height"], c["deck"] + r["cm"]) <= r["opening"]
                ):
                    locations["cross"] = o["deck"]
                if (
                    skill == "Fork"
                    and (bag, who) in loadable
                    and c["reach"] >= c["sill"]
                ):
                    locations["load"] = o["unload"]
                if skill == "Scan" and pos[0] > self.scene["wall"]:
                    locations["manifest"] = o["desk"]
                if (bag, who) in connected:
                    locations["hoist"] = o["lift"]
                for op, cell in locations.items():
                    options[f"{bag}/{op}"][who] = distance(pos, cell)
        compatible = [
            r
            for r in interfaces
            if r["tool"] == data["47"]["tool"] and r["fits"] == r["needs"]
        ]
        facts["interface"] = (
            "fits" if compatible and not data["47"]["online"] else "unavailable"
        )
        if facts["interface"] == "fits":
            options["47/repair"] = {
                r["robot"]: max(
                    0,
                    distance(self.positions[r["robot"]], self.positions[r["patient"]])
                    - 1,
                )
                for r in compatible
            }
        for block in db.execute(
            "MATCH (b:AccessBlock {at:$at}) RETURN b.op AS op,b.actor AS actor",
            {"at": access_signature(db, self.scene)},
        ).fetchall():
            options[block["op"]].pop(block["actor"], None)
        world = World(
            facts,
            options,
            self.custody["47"],
            "Junction Mail",
            [],
            interfaces,
            self.contracts,
            dict(self.custody),
            "Deliver "
            + ", ".join("Bag " + b for b in data)
            + " to the addressed coaches and sign every waybill before releasing one train.",
            {
                bag: {
                    "holder": row["holder"],
                    "coach": row["coach"],
                    "address": matched.get(bag, {}).get("route", "unresolved"),
                    "waybill": row["manifest"],
                }
                for bag, row in data.items()
            },
        )
        return materialize(db, world)

    def frame(self, motion=None):
        f = self.world.facts
        self.frames.append(
            {
                "tick": len(self.frames),
                "robots": {k: list(v) for k, v in self.positions.items()},
                "holder": self.custody["47"],
                "cargoByBag": {
                    b: {
                        "holder": self.custody[b],
                        "stage": f[f"{b}/cargo"],
                        "manifest": f[f"{b}/manifest"],
                    }
                    for b in self.orders
                },
                "shutter": False,
                "manifest": f["47/manifest"],
                "signal": f["signal"],
                "fork_online": f["forks"] == "online",
            }
        )

    def observe(self, kind):
        with transaction(self.db):
            if kind == "forks":
                self.db.execute("MATCH (t:Tool {id:'Jack forks'}) SET t.online=false")
            elif kind == "hatch":
                self.db.execute("MATCH (g:Passage {id:'Hatch 47'}) SET g.open=false")
            else:
                self.db.execute(
                    "MATCH (:Station)-[r:SERVES]->(:Route {id:'Northport'}) DELETE r"
                )
            return self.check("A junction prerequisite changed")

    def journey(self, row, actor, reserved):
        j = Journey(row, actor)
        if row["op"] == "depart":
            j.duration = 1
            return j
        bag, op = row["op"].split("/")
        o = self.orders[bag]
        pos = dict(self.positions)

        def walk(who, target):
            here = pos[who]
            if here in reserved:
                raise NoRoute("Reserved body")
            # Each lane remains open on its own side. Only its qualified courier uses the hatch.
            gates = (
                {bag}
                if who == o["courier"] and self.world.facts[bag + "/hatch"] == "open"
                else set()
            )
            blocked = {v for k, v in pos.items() if k != who} | reserved
            path = path_to(self.scene, here, target, blocked, gates)
            if path is None:
                raise NoRoute("Reserved aisle")
            cells = j.cells.setdefault(who, [here] * (j.duration + 1))
            cells.extend([here] * (j.duration + 1 - len(cells)))
            cells.extend(path)
            j.duration += len(path)
            pos[who] = tuple(target)

        def wait(ticks, holder=None):
            j.duration += ticks
            if holder:
                j.transfers[j.duration] = holder

        if op == "collect":
            walk(actor, o["shelf"])
            wait(2, actor)
        elif op == "stage":
            walk(actor, o["handoff"])
            walk(o["courier"], o["deck"])
            wait(2, o["courier"])
        elif op == "cross":
            walk(actor, o["hatch"])
            walk(actor, o["berth"])
            wait(1)
        elif op == "manifest":
            walk(actor, o["desk"])
            wait(2)
        elif op == "repair":
            x, z = pos["Jack"]
            walk("Jack", (x, z))
            for target in [(x, z + 1), (x + 1, z), (x, z - 1), (x - 1, z)]:
                try:
                    walk(actor, target)
                    break
                except NoRoute:
                    continue
            else:
                raise NoRoute("Collar unreachable")
            wait(4)
        elif op == "load":
            courier = self.custody[bag]
            walk(courier, o["berth"])
            walk(actor, o["unload"])
            wait(2, actor)
            walk(actor, o["door"])
            wait(2, o["coach"])
        elif op == "hoist":
            walk(actor, o["lift"])
            wait(2, "Mail lift")
            wait(14, o["coach"])
        return j

    def execute_wave(self, ready):
        ranks = {
            op: i
            for i, op in enumerate(
                (
                    "collect",
                    "stage",
                    "cross",
                    "repair",
                    "load",
                    "hoist",
                    "manifest",
                    "depart",
                )
            )
        }
        reserved = set()
        jobs = []
        inaccessible = []
        for row in sorted(
            ready, key=lambda r: (ranks[r["op"].split("/")[-1]], r["op"])
        ):
            actor = self.db.execute(
                "MATCH (:Action {uid:$id})-[:ASSIGNED_TO]->(r) RETURN r.id AS who",
                {"id": row["uid"]},
            ).fetchall()[0]["who"]
            try:
                j = self.journey(row, actor, reserved)
            except NoRoute as exc:
                inaccessible.append((row["op"], actor, str(exc)))
                continue
            reserved.update(cell for cells in j.cells.values() for cell in cells)
            jobs.append(j)
        if not jobs:
            with transaction(self.db):
                signature = access_signature(self.db, self.scene)
                for op, actor, reason in inaccessible:
                    self.db.execute(
                        "MERGE (b:AccessBlock {op:$op,actor:$actor}) SET b.at=$at,b.reason=$reason",
                        {"op": op, "actor": actor, "at": signature, "reason": reason},
                    )
                self.check("The junction approach is blocked")
            return False
        self.last_wave = [j.row["op"] for j in jobs]
        ids = [j.row["uid"] for j in jobs]
        with transaction(self.db):
            for uid in ids:
                self.db.execute(
                    "MATCH (a:Action {uid:$id}) SET a.status='running'", {"id": uid}
                )
            self.frame()
            self.event(
                "assignment",
                "Dispatch the next jobs",
                "The executor reserves each participating robot and its route for this wave.",
                [j.actor for j in jobs],
                active=ids,
                op=self.last_wave[0],
                query=ACTION_GUARDS,
                params={"uid": ids[0]},
                mutate=lambda seq: self.db.execute(
                    "MATCH (e:Event {id:$seq}),(a:Action) WHERE a.uid IN $ids CREATE (e)-[:STARTS]->(a)",
                    {"seq": seq, "ids": ids},
                ),
            )
        yield True
        with transaction(self.db):
            self.world = self.read_world()
            if self.db.execute(
                """MATCH (a:Action)-[r:REQUIRES]->(f:WorldFact) WHERE a.uid IN $ids AND r.expected<>f.value RETURN a.uid""",
                {"ids": ids},
            ).fetchall():
                self.db.execute(
                    "MATCH (a:Action) WHERE a.uid IN $ids SET a.status='pending'",
                    {"ids": ids},
                )
                self.check()
                return False
            for i in range(1, max(j.duration for j in jobs) + 1):
                finished = []
                for j in jobs:
                    for who, cells in j.cells.items():
                        if i < len(cells):
                            self.positions[who] = cells[i]
                    if i in j.transfers:
                        bag = j.row["op"].split("/")[0]
                        new = j.transfers[i]
                        self.db.execute(
                            """MATCH (:Order {id:$bag})-[:REQUESTS]->(p)-[r:HELD_BY]->(old),(n {id:$new}),(a:Action {uid:$uid})
                        DELETE r CREATE (p)-[:HELD_BY]->(n),(a)-[:TRANSFERRED]->(c:CustodyChange {tick:$tick})-[:FROM]->(old),(c)-[:TO]->(n)""",
                            {
                                "bag": bag,
                                "new": new,
                                "uid": j.row["uid"],
                                "tick": len(self.frames),
                            },
                        )
                        self.custody[bag] = new
                    if i == j.duration:
                        finished.append(j)
                for j in finished:
                    for key, value in self.contracts[j.row["op"]].sets.items():
                        if key == "signal":
                            self.db.execute(
                                "MATCH (t:Train) SET t.signal=$v", {"v": value}
                            )
                        elif key == "forks":
                            self.db.execute(
                                "MATCH (t:Tool {id:'Jack forks'}) SET t.online=true"
                            )
                        else:
                            bag, fact = key.split("/")
                            if fact == "manifest":
                                self.db.execute(
                                    "MATCH (:Order {id:$b})-[:REQUESTS]->(p)<-[:COVERS]-(w:Waybill) SET w.status=$v",
                                    {"b": bag, "v": value},
                                )
                            elif fact == "cargo":
                                self.db.execute(
                                    "MATCH (:Order {id:$b})-[:REQUESTS]->(p) SET p.stage=$v",
                                    {"b": bag, "v": value},
                                )
                    self.db.execute(
                        "MATCH (a:Action {uid:$id}) SET a.status='done',a.finished=$t",
                        {"id": j.row["uid"], "t": len(self.frames)},
                    )
                if finished:
                    for who, (x, z) in self.positions.items():
                        self.db.execute(
                            """MATCH (r:Robot {id:$id})-[s:IN_ZONE]->(:Zone),(n:Zone {id:$zone})
                        DELETE s CREATE (r)-[:IN_ZONE]->(n) SET r.x=$x,r.z=$z""",
                            {
                                "id": who,
                                "x": x,
                                "z": z,
                                "zone": "Sorting" if x < 12 else "Platform",
                            },
                        )
                    self.world = self.read_world()
                self.frame()
                if finished:
                    done = [j.row["uid"] for j in finished]
                    self.event(
                        "completed",
                        "Work committed",
                        "Completed actions publish their effects to the station graph.",
                        active=done,
                        mutate=lambda seq, done=done: self.db.execute(
                            "MATCH (e:Event {id:$seq}),(a:Action) WHERE a.uid IN $ids CREATE (e)-[:COMPLETES]->(a)",
                            {"seq": seq, "ids": done},
                        ),
                    )
        return True
