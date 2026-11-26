"""Decision fixtures and symbolic action effects for the Moonmail planning benchmark."""

from dataclasses import asdict, dataclass
from graphlib import TopologicalSorter
from time import perf_counter

from .depot import transaction
from .mail_agent import planner_instructions, planning_context
from .mail_planning import Operator, local_plan, verify
from .mail_store import (
    IMPACT,
    invalidate,
    materialize,
    persist_plan,
    retained_assignments,
    snapshot,
    violations,
)
from .yard import (
    ADDRESSES,
    LIFTS,
    REPAIR,
    YARD_BAYS,
    build_yard,
    contracts_for,
    read_yard_world,
    seed_yard_graph,
)


@dataclass(frozen=True)
class Case:
    id: str
    title: str
    orders: int = 3
    forklifts: int = 1
    mechanics: int = 1
    scanner: bool = False
    missing_courier: bool = False
    platform: bool = False
    signed: bool = False
    load_only: bool = False
    fault: bool = False
    kit: str = "driver"
    lift: bool = True
    feasible: bool = True
    mixed_progress: bool = False
    shared_carriage: bool = False

    @property
    def repetitions(self):
        return 4 if self.mixed_progress else 3


def recovery_checkpoints():
    # Both forklifts stay in each yard. LOADS_WITH decides which loads the fault affects.
    for orders in (3, 6):
        for shared in (False, True):
            for kit in ("driver", "probe"):
                scope = "shared" if shared else "single"
                carriage = "shared carriage" if shared else "carriage for Bag 47 alone"
                tool = "hex driver" if kit == "driver" else "inspection probe"
                yield Case(
                    f"midrun-{orders}-{scope}-{kit}",
                    f"{orders} orders · {carriage} · {tool}",
                    orders=orders,
                    forklifts=2,
                    fault=True,
                    mixed_progress=True,
                    shared_carriage=shared,
                    kit=kit,
                    feasible=not (shared and kit == "probe"),
                )


CASES = {
    case.id: case
    for case in (
        Case("one-order", "One bag for one train", orders=1),
        Case("three-orders", "Three bags for one train"),
        Case("six-orders", "Six bags for one train", orders=6),
        Case(
            "larger-fleet",
            "Three bags with two extra forklifts and one extra mechanic",
            forklifts=3,
            mechanics=2,
        ),
        Case(
            "scanner-chassis",
            "Add a fifth chassis type at the signing desk",
            scanner=True,
        ),
        Case(
            "missing-courier",
            "Remove the courier serving the last bay",
            missing_courier=True,
            feasible=False,
        ),
        Case("bag-on-platform", "Bag 47 starts across the hatch", platform=True),
        Case("waybill-signed", "Bag 47 starts with a signed waybill", signed=True),
        Case(
            "load-one-bag", "Load only Bag 52 and keep the signal red", load_only=True
        ),
        Case(
            "repair-collar",
            "Carriage fault with a compatible driver",
            orders=1,
            fault=True,
            lift=False,
        ),
        Case(
            "hold-collar",
            "Carriage fault with a probe and no station lift",
            orders=1,
            fault=True,
            kit="probe",
            lift=False,
            feasible=False,
        ),
        Case(
            "use-hoist",
            "Carriage fault with a probe and a connected station lift",
            orders=1,
            fault=True,
            kit="probe",
        ),
        *recovery_checkpoints(),
    )
}


RULES = [
    "Each order names its shelf, passage, addressed coach, tray and designated loading carriage. A matching route is served by that coach on the same train.",
    "Pick up and hand off require a robot serving the order with Grip and reach at least the shelf height. The same picker performs both.",
    "Crossing requires a serving robot with Passive deck. Both chassis height and deck height plus parcel height must fit the hatch.",
    "Signing requires Scan on a serving robot on the platform (x greater than the wall).",
    "Loading requires the serving robot to mount the order's carriage, both chassis and carriage to support Fork, and reach at least the coach sill. The carriage must be online at execution.",
    "Repair requires Service wrist and a mounted instrument whose FITS port equals the offline carriage's USES_PORT. The repair here applies to Jack's carriage.",
    "The station hoist must feed the order's coach, accept its tray, and dock with a skill of the serving courier holding that bag.",
    "Approach cost is the Manhattan distance to the job's tile. For repair it is distance to the patient minus one, floored at zero. The signal box performs terminal checks.",
    "Invalidate a pending job with an unsupported guard or ineligible assigned actor, then its dependents. Preserve other pending actors and dependencies between remaining pending jobs.",
]

EXTRA_BAYS = [
    ("74", "Southgate", "Pax", "Kite"),
    ("81", "Longford", "Lark", "Zip"),
    ("96", "Ashfield", "Elm", "Puck"),
]

NODES = """MATCH (n) WHERE n.id IS NOT NULL AND NOT n:WorldFact AND NOT n:Event
RETURN labels(n)[0] AS kind, properties(n) AS attributes ORDER BY kind,n.id"""
LINKS = """MATCH (a)-[r]->(b) WHERE a.id IS NOT NULL AND b.id IS NOT NULL
AND NOT a:Event AND NOT b:WorldFact RETURN a.id AS source,type(r) AS relation,b.id AS target
ORDER BY source,relation,target"""
RECEIPT = """MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:HELD_BY]->(h),
(o)-[:DELIVER_TO]->(c:Station),(w:Waybill)-[:COVERS]->(p)
RETURN o.id AS bag,p.stage AS stage,h.id AS holder,c.id AS coach,w.status AS waybill ORDER BY bag"""
COURIERS = """MATCH (o:Order)-[:VIA]->(g:Passage),(o)-[:REQUESTS]->(p:Parcel)
OPTIONAL MATCH (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Passive deck'})
WHERE b.cm<=g.cm AND b.deck+p.cm<=g.cm
RETURN o.id AS bag,g.id AS hatch,r.id AS courier ORDER BY bag,courier"""
SCANNERS = """MATCH (r:Robot)-[:SERVICES]->(o:Order),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Scan'})
WHERE r.x>12 RETURN o.id AS bag,r.id AS robot,b.id AS chassis ORDER BY bag,robot"""
ORDER_CARRIAGES = """MATCH (o:Order)-[:LOADS_WITH]->(t:Tool)<-[:MOUNTS]-(r:Robot),
    (o)-[:REQUESTS]->(p:Parcel)<-[:COVERS]-(w:Waybill)
    RETURN o.id AS bag,p.stage AS stage,w.status AS waybill,r.id AS forklift,t.online AS online ORDER BY bag"""


def rows(db, statement, params=None):
    return [dict(row) for row in db.execute(statement, params or {}).fetchall()]


def make_scene(case):
    bays = (YARD_BAYS + EXTRA_BAYS)[: case.orders]
    scene = build_yard(
        7,
        case.kit,
        bays,
        case.orders,
        case.orders - int(case.missing_courier),
        case.forklifts,
        case.mechanics,
    )
    if case.shared_carriage:
        for staged in scene["yard"]["orders"][1::3]:
            staged["loader"] = "Jack"
    return scene


def checkpoint_prefix(case, orders):
    if not case.mixed_progress:
        return ["47/collect", "47/stage", "47/cross"]
    actions = (
        ("collect", "stage", "cross"),
        ("collect", "stage", "manifest"),
        ("collect", "stage", "cross", "load"),
    )
    return [
        f"{bag}/{op}" for index, bag in enumerate(orders) for op in actions[index % 3]
    ]


def read_world(db, case, scene):
    orders = {o["id"]: o for o in scene["yard"]["orders"]}
    positions = {
        r["id"]: (r["x"], r["z"])
        for r in rows(db, "MATCH (r:Robot) RETURN r.id AS id,r.x AS x,r.z AS z")
    }
    world = read_yard_world(db, scene, orders, positions, contracts_for(orders))
    if case.load_only:
        del world.contracts["depart"], world.options["depart"]
        world.terminal = "confirm_delivery"
        world.goal = "Get Bag 52 aboard its addressed coach. Confirm delivery and leave the train at red. Other bags and signatures are outside this goal."
        world.contracts[world.terminal] = Operator(
            "Confirm Bag 52 aboard", {"52/cargo": "aboard"}, {}, 0
        )
        world.options[world.terminal] = {"Signal box": 0}
        materialize(db, world)
    return world


def move_bag(db, bag, stage, holder):
    db.execute(
        """MATCH (:Order {id:$bag})-[:REQUESTS]->(p:Parcel)-[old:HELD_BY]->(),
        (h {id:$holder}) WHERE h:Robot OR h:Station
        DELETE old SET p.stage=$stage CREATE (p)-[:HELD_BY]->(h)""",
        {"bag": bag, "holder": holder, "stage": stage},
    )


def place_courier(db, order):
    db.execute(
        """MATCH (r:Robot {id:$robot})-[old:IN_ZONE]->(),(z:Zone {id:'Platform'})
        DELETE old SET r.x=$x,r.z=$z CREATE (r)-[:IN_ZONE]->(z)""",
        {"robot": order["courier"], "x": order["berth"][0], "z": order["berth"][1]},
    )


def execute(db, world, orders, verified, ids, sequence=None):
    """Apply one admitted DAG in topological order, checking its live guards at each step."""
    sequence = (
        list(TopologicalSorter(verified.steps).static_order())
        if sequence is None
        else sequence
    )
    events = []
    for tick, op in enumerate(sequence, 1):
        uid = ids[op]
        guards = rows(
            db,
            """MATCH (a:Action {uid:$uid})-[g:REQUIRES]->(f:WorldFact)
            WHERE g.expected<>f.value RETURN f.id AS fact""",
            {"uid": uid},
        )
        unfinished = rows(
            db,
            """MATCH (:Action {uid:$uid})-[:DEPENDS_ON]->(p:Action)
            WHERE p.status<>'done' RETURN p.uid AS predecessor""",
            {"uid": uid},
        )
        if guards or unfinished:
            raise ValueError(
                f"{op} has unsatisfied guards or predecessors: {guards or unfinished}"
            )
        bag, _, kind = op.rpartition("/")
        actor = verified.actors[op]
        if bag:
            order = orders[bag]
            holder = {
                "collect": actor,
                "stage": order["courier"],
                "cross": actor,
                "load": order["coach"],
                "hoist": order["coach"],
            }.get(kind)
            if holder is not None:
                move_bag(db, bag, world.contracts[op].sets[f"{bag}/cargo"], holder)
            if kind == "cross":
                place_courier(db, order)
            elif kind == "manifest":
                db.execute(
                    "MATCH (:Order {id:$bag})-[:REQUESTS]->(p)<-[:COVERS]-(w:Waybill) SET w.status='signed'",
                    {"bag": bag},
                )
            elif kind == "repair":
                db.execute(
                    "MATCH (:Order {id:$bag})-[:LOADS_WITH]->(t:Tool) SET t.online=true",
                    {"bag": bag},
                )
        elif op == "depart":
            db.execute("MATCH (t:Train) SET t.signal='green'")
        db.execute(
            """MATCH (:Action {uid:$uid})-[e:ESTABLISHES]->(f:WorldFact) SET f.value=e.value""",
            {"uid": uid},
        )
        db.execute(
            "MATCH (a:Action {uid:$uid}) SET a.status='done',a.finished=$tick",
            {"uid": uid, "tick": tick},
        )
        events.append({"op": op, "actor": actor, "effects": world.contracts[op].sets})
    return events


def receipt(db):
    return {
        "signal": rows(db, "MATCH (t:Train) RETURN t.signal AS signal")[0]["signal"],
        "bags": rows(db, RECEIPT),
    }


def meets_goal(case, state):
    def aboard(bag):
        return bag["stage"] == "aboard" and bag["holder"] == bag["coach"]

    if case.load_only:
        return state["signal"] == "red" and any(
            b["bag"] == "52" and aboard(b) for b in state["bags"]
        )
    return (
        state["signal"] == "green"
        and len(state["bags"]) == case.orders
        and all(aboard(b) and b["waybill"] == "signed" for b in state["bags"])
    )


def prepare(db, case):
    scene = make_scene(case)
    orders = {o["id"]: o for o in scene["yard"]["orders"]}
    seed_yard_graph(db, scene, case.kit, 18, True)
    prior = {"revision": 0, "nodes": [], "edges": []}
    with transaction(db):
        if case.scanner:
            db.execute("""MATCH (z:Zone {id:'Platform'}),(s:Skill {id:'Scan'})
                CREATE (r:Robot {id:'Ink',x:19,z:3})-[:IN_ZONE]->(z),
                (r)-[:INSTANCE_OF]->(:Embodiment {id:'Scanner cart',cm:28,deck:0,reach:35})-[:HAS_SKILL]->(s)""")
            db.execute(
                "MATCH (r:Robot {id:'Ink'}),(o:Order) CREATE (r)-[:SERVICES]->(o)"
            )
        if not case.lift:
            db.execute("MATCH (:LoadingLift)-[e:FEEDS]->() DELETE e")
        if case.platform:
            place_courier(db, orders["47"])
            move_bag(db, "47", "platform", orders["47"]["courier"])
        if case.signed:
            db.execute("MATCH (w:Waybill {id:'Waybill 47'}) SET w.status='signed'")
        if case.fault:
            before = read_world(db, case, scene)
            prefix_plan = local_plan(before, {})
            checked = verify(prefix_plan, before)
            ids = persist_plan(db, 1, prefix_plan, checked, "fixture", before.contracts)
            execute(db, before, orders, checked, ids, checkpoint_prefix(case, orders))
            prior = snapshot(db, 1)
            db.execute("MATCH (t:Tool {id:'Jack forks'}) SET t.online=false")
            db.execute(
                "CREATE (:Event {id:1,kind:'fork fault',title:'Jack’s carriage went offline after the crossing'})"
            )
        started = perf_counter()
        world = read_world(db, case, scene)
        if case.fault:
            invalidate(db, 1, violations(db, 1), 1)
        state_ms = round((perf_counter() - started) * 1000, 2)
        started = perf_counter()
        retained = retained_assignments(snapshot(db, prior["revision"]))
    graph_input = planning_context(world, retained)
    graph_ms = round((perf_counter() - started) * 1000, 2)
    started = perf_counter()
    flat_input = {
        "goal": world.goal,
        "terminal": world.terminal,
        "world": world.facts,
        "operators": {
            k: {n: v for n, v in op.items() if n != "eligible_and_approach"}
            for k, op in graph_input["operators"].items()
        },
        "nodes": rows(db, NODES),
        "relationships": [
            [r["source"], r["relation"], r["target"]] for r in rows(db, LINKS)
        ],
        "wall_x": scene["wall"],
        "job_locations": list(orders.values()),
        "rules": RULES,
        "plan_before_observation": prior,
        "observation": "Jack's carriage went offline after the crossing."
        if case.fault
        else None,
    }
    flat_ms = round((perf_counter() - started) * 1000, 2)
    roster = [
        r["attributes"]["id"]
        for r in flat_input["nodes"]
        if r["kind"] in ("Robot", "Interlocking")
    ]
    queries = [
        ("Delivery routes", ADDRESSES, {}),
        ("Couriers fitting each hatch", COURIERS, {}),
    ]
    if case.scanner or case.id == "larger-fleet":
        queries.append(("Robots eligible to sign", SCANNERS, {}))
    if case.fault:
        queries = [
            ("Instrument and carriage interfaces", REPAIR, {}),
            ("Connected hoist", LIFTS, {}),
            ("Fault impact on the prior plan", IMPACT, {"event": 1}),
        ]
    if case.mixed_progress:
        queries.insert(0, ("Loading carriages at the checkpoint", ORDER_CARRIAGES, {}))
    if case.platform or case.signed or case.load_only:
        queries.append(("Parcel custody and waybills", RECEIPT, {}))
    evidence = [
        {"question": name, "cypher": q, "params": p, "rows": rows(db, q, p)}
        for name, q, p in queries
    ]
    return {
        "fixture": asdict(case),
        "goal": world.goal,
        "retained": retained,
        "revision": prior["revision"] + 1,
        "robots": len(roster) - 1,
        "chassis": len(
            {r["target"] for r in rows(db, LINKS) if r["relation"] == "INSTANCE_OF"}
        ),
        "candidate_pairs": sum(map(len, world.options.values())),
        "initial": receipt(db),
        "instructions": planner_instructions(world),
        "preparation_ms": {
            "shared_state": state_ms,
            "relate_projection": graph_ms,
            "flat_projection": flat_ms,
        },
        "evidence": evidence,
    }, {"flat": flat_input, "relate": graph_input}
