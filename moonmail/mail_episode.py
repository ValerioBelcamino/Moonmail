"""Execute and stream a registered-mail DAG against a private Relate store."""

import json
import os
import shutil
import tempfile
from pathlib import Path
from uuid import uuid4

import relate

from .depot import layout, transaction
from .inspection import HANDLING, LIFTS, REPAIRS
from .mail_agent import exhaust, proposal_steps
from .mail_planning import OPS
from .mail_store import (
    ACTION_GUARDS,
    ADDRESS,
    EDGES,
    IMPACT,
    NODES,
    READY,
    SCANNERS,
    access_signature,
    invalidate,
    persist_plan,
    refresh,
    seed_mail,
    snapshot,
    violations,
)
from .planning import path_to

# One body occupies the aisle at a time. Ready work on the moving bag has priority.
ORDER = ["collect", "stage", "cross", "manifest", "repair", "load", "hoist", "depart"]


class NoRoute(ValueError):
    pass


class MailRun:
    def __init__(self, db, scene, controller, env_file):
        self.db, self.scene, self.controller, self.env_file = (
            db,
            scene,
            controller,
            env_file,
        )
        self.rev = 0
        self.events = []
        self.frames = []
        self.positions = {r: tuple(p) for r, p in scene["starts"].items()}
        self.world = self.read_world()
        self.holder = self.world.holder
        self.shutter = (
            False
            if scene.get("yard")
            else db.execute(
                "MATCH (g:Passage {id:'Shutter'}) RETURN g.open AS v"
            ).fetchall()[0]["v"]
        )
        self.frame()

    def frame(self, motion=None):
        self.frames.append(
            {
                "tick": len(self.frames),
                "robots": {k: list(v) for k, v in self.positions.items()},
                "holder": self.holder,
                "shutter": self.shutter,
                "fork_online": self.world.facts["forks"] == "online",
                "manifest": self.world.facts["manifest"],
                "signal": self.world.facts["signal"],
                **({"motion": motion} if motion else {}),
            }
        )

    def event(
        self,
        kind,
        title,
        reason,
        actors=(),
        query=None,
        params=None,
        mutate=None,
        **info,
    ):
        seq = len(self.events)
        tick = len(self.frames) - 1
        db = self.db
        db.execute(
            "CREATE (:Event {id:$id,tick:$tick,kind:$kind})",
            {"id": seq, "tick": tick, "kind": kind},
        )
        if mutate:
            mutate(seq)
        graph = snapshot(db, self.rev)
        world = self.world
        sql = query or NODES
        bindings = params if params is not None else {"rev": self.rev}
        rows = db.execute(sql, bindings).fetchall()
        proof = {
            "query": sql,
            "bindings": bindings,
            "rows": rows,
            "nodes": list(rows[0]) if rows else [],
            "links": [],
            "holder": world.holder,
            "state": dict(world.facts),
        }
        data = {
            "seq": seq,
            "tick": tick,
            "kind": kind,
            "title": title,
            "reason": reason,
            "actors": list(actors),
            "planGraph": graph,
            "proof": proof,
            **info,
        }
        db.execute(
            """MATCH (e:Event {id:$seq}),(bag:Parcel) CREATE (e)-[:CONCERNS]->(bag) SET e.data=$data""",
            {"seq": seq, "data": json.dumps(data, separators=(",", ":"))},
        )
        if self.rev:
            db.execute(
                "MATCH (e:Event {id:$seq}),(v:PlanRevision {rev:$rev}) CREATE (e)-[:AT_REVISION]->(v)",
                {"seq": seq, "rev": self.rev},
            )
        self.events.append(data)

    def read_world(self):
        return refresh(self.db, self.scene)

    def plan(self):
        return exhaust(self.plan_steps())

    def plan_steps(self):
        self.world = self.read_world()
        before = snapshot(self.db, self.rev)
        retained = {
            r["op"]: {"actor": r["actor"], "after": []}
            for r in before["nodes"]
            if r["state"] == "pending"
        }
        pending = {
            r["uid"]: r["op"] for r in before["nodes"] if r["state"] == "pending"
        }
        for edge in before["edges"]:
            if edge["source"] in pending and edge["target"] in pending:
                retained[pending[edge["target"]]]["after"].append(
                    pending[edge["source"]]
                )
        attempt = self.rev + 1

        def log(raw, outcome, error):
            self.db.execute(
                "CREATE (:ProposalAttempt {revision:$rev,author:$who,proposal:$raw,outcome:$outcome,feedback:$feedback})",
                {
                    "rev": attempt,
                    "who": self.controller,
                    "raw": json.dumps(raw),
                    "outcome": outcome,
                    "feedback": error,
                },
            )

        stages = proposal_steps(
            self.world, retained, self.controller, self.env_file, log
        )
        while True:
            try:
                kind, payload = next(stages)
            except StopIteration as end:
                raw, solution, trace = end.value
                break
            with transaction(self.db):
                self.frame()
                if kind == "read":
                    self.event(
                        "read",
                        "The dispatcher reads the station",
                        "The current facts, eligible bodies and goal enter the dispatcher.",
                        query="MATCH (f:WorldFact) RETURN f.id AS fact,f.value AS value ORDER BY fact",
                        params={},
                        modelInput=payload,
                        targetRevision=attempt,
                    )
                elif kind == "proposal":
                    self.event(
                        "proposal",
                        "The dispatcher emits a DAG",
                        "Arrows are the proposed prerequisites. Z3 now checks the draft.",
                        proposal=payload,
                        targetRevision=attempt,
                    )
                else:
                    self.event(
                        "rejected",
                        "The validator returns the draft",
                        payload["counterexample"],
                        feedback=payload,
                        targetRevision=attempt,
                    )
            yield kind
        with transaction(self.db):
            self.frame()
            if solution is None:
                self.event(
                    "hold",
                    "Hold the train",
                    "The train stays at the junction. The graph records custody for each open order."
                    if self.scene.get("yard")
                    else f"No verified continuation reaches a loaded coach and a signed waybill. The bag stays with {self.holder}.",
                    tools=trace,
                )
                return False
            self.rev = attempt
            persist_plan(
                self.db, self.rev, raw, solution, self.controller, self.world.contracts
            )
            if before["revision"]:
                cause = next(e for e in reversed(self.events) if e.get("issues"))
                self.db.execute(
                    "MATCH (v:PlanRevision {rev:$rev}),(e:Event {id:$event}) CREATE (v)-[:RESPONDS_TO]->(e)",
                    {"rev": self.rev, "event": cause["seq"]},
                )
            self.db.execute(
                """MATCH (p:ProposalAttempt {revision:$rev}),(v:PlanRevision {rev:$rev})
                  CREATE (p)-[:CONSIDERED_FOR]->(v)""",
                {"rev": self.rev},
            )
            if self.scene.get("yard"):
                title = (
                    "Authorize the yard dispatch"
                    if self.rev == 1
                    else "Revise the affected branch"
                )
                reason = "Z3 verified the assignments. All three loading and signing branches meet at the same departure signal."
            elif self.rev == 1:
                title = "Two jobs before departure"
                reason = "The dispatcher proposes the branches. Z3 matches jobs to bodies. Relate releases each action when its prerequisites are complete."
            elif "repair" in solution.steps:
                title = "Insert a repair before loading"
                title_actor = solution.actors["repair"]
                reason = f"{title_actor} has a driver that fits the collar. The new load waits for the repair. The existing waybill assignment survives."
            else:
                title = (
                    "Send the bag by mail lift"
                    if "hoist" in solution.steps
                    else "Authorize the remaining work"
                )
                if "hoist" in solution.steps:
                    reason = f"The mail lift feeds {self.world.destination}. It can unload the courier while the forks are offline."
                else:
                    reason = "The revised dependencies reconnect the remaining work to the completed actions."
            self.event(
                "decision",
                title,
                reason,
                query=EDGES,
                params={"rev": self.rev},
                proposal=raw,
                tools=trace,
                solver="Z3",
                retained=list(retained),
                service_interfaces=self.world.interfaces,
                new=[p for p in solution.steps if p not in retained],
                controller=self.controller,
                bindings=solution.actors,
            )
        return True

    def check(self, title="A required fact changed"):
        self.world = self.read_world()
        self.holder = self.world.holder
        issues = violations(self.db, self.rev)
        if not issues:
            return False
        kind = (
            "fork fault" if any(r["fact"] == "forks" for r in issues) else "violation"
        )
        if kind == "fork fault":
            title = "Jack’s fork collar slips"
        reason = (
            "The load needs working forks. Departure depends on that load."
            + (
                " Jack can still scan the waybill."
                if "Jack"
                in self.world.options.get(
                    "manifest", self.world.options.get("47/manifest", {})
                )
                else ""
            )
            if kind == "fork fault"
            else " • ".join(
                f"{r['op']} needs {r['fact']}={r['expected']}, observed {r['actual']}"
                for r in issues
            )
        )
        if self.scene.get("yard") and kind == "fork fault":
            reason = "Bag 47’s load requires working forks. The shared departure waits for that load. The other two loading branches keep their assignments."
        self.frame()
        self.event(
            kind,
            title,
            reason,
            ["Jack"] if kind == "fork fault" else [],
            mutate=lambda seq: invalidate(self.db, self.rev, issues, seq),
            query=IMPACT,
            params={"event": len(self.events)},
            issues=issues,
        )
        return True

    def observe(self, kind):
        with transaction(self.db):
            if kind == "forks":
                self.db.execute(
                    "MATCH (t:Tool {id:'Fork carriage'}) SET t.online=false"
                )
            elif kind == "hatch":
                self.db.execute("MATCH (g:Passage {id:'Hatch'}) SET g.open=false")
            elif kind == "address":
                self.db.execute(
                    "MATCH (:Station)-[s:SERVES]->(:Route {id:'Northport'}) DELETE s"
                )
            return self.check(
                {
                    "hatch": "The service hatch closes",
                    "address": "The coach loses its route assignment",
                }.get(kind, "A tool went offline")
            )

    def commands(self, op, actor):
        db = self.db
        scene = self.scene
        pos = dict(self.positions)
        result = []
        gates = {r: set() for r in pos}
        for (
            r
        ) in db.execute("""MATCH (r:Robot)-[:INSTANCE_OF]->(b),(g:Passage {open:true})
                WHERE b.cm<=g.cm RETURN r.id AS actor,g.id AS gate""").fetchall():
            gates[r["actor"]].add(r["gate"])

        def route(r, to):
            return path_to(
                scene, pos[r], to, {p for n, p in pos.items() if n != r}, gates[r]
            )

        def move(r, to):
            path = route(r, to)
            if path is None:
                raise NoRoute(f"{r} cannot reach {tuple(to)}")
            if path:
                result.append(("move", r, path, len(path)))
                pos[r] = tuple(to)

        def act(kind, r, to, ticks=2):
            result.append((kind, r, to, ticks))

        left, right = scene["berths"]
        if op == "collect":
            move(actor, scene["shelf"])
            act("pick", actor, actor)
        elif op == "stage":
            r = db.execute(
                """MATCH (:PlanRevision {rev:$rev})-[:INCLUDES]->(:Action {op:'cross',status:'pending'})-[:ASSIGNED_TO]->(r)
                          RETURN r.id AS actor""",
                {"rev": self.rev},
            ).fetchall()[0]["actor"]
            move(actor, left[0])
            move(r, left[1])
            act("transfer", actor, r)
        elif op == "cross":
            if self.holder != actor:
                raise NoRoute("The bound courier lacks custody")
            move(actor, scene["gates"]["Hatch"])
            move(actor, right[0])
        elif op == "manifest":
            desk = next(r for r in self.world.scans if r["actor"] == actor)
            move(actor, [desk["x"], desk["z"]])
            act("scan", actor, "Waybill 47", 3)
        elif op == "repair":
            patient = next(
                r["patient"]
                for r in db.execute(REPAIRS).fetchall()
                if r["actor"] == actor
            )
            x, z = pos[patient]
            ports = [(x - 1, z), (x + 1, z), (x, z - 1), (x, z + 1)]
            ports = [
                (len(p), cell)
                for cell in ports
                if (p := route(actor, cell)) is not None
            ]
            if not ports:
                raise NoRoute("The service wrist cannot reach the collar")
            move(actor, min(ports)[1])
            act("repair", actor, patient, 4)
        elif op == "load":
            move(self.holder, right[0])
            move(actor, right[1])
            act("transfer", actor, actor)
            move(actor, scene["socket"])
            act("place", actor, self.world.destination, 3)
        elif op == "hoist":
            move(actor, scene["lift"])
            act("dock", actor, "Mail lift", 2)
            act("feed", actor, self.world.destination, 14)
        else:
            act("depart", actor, "Night Mail", 1)
        return result

    def execute(self, row):
        uid, op = row["uid"], row["op"]
        actor = self.db.execute(
            "MATCH (:Action {uid:$uid})-[:ASSIGNED_TO]->(r) RETURN r.id AS actor",
            {"uid": uid},
        ).fetchall()[0]["actor"]
        # Preflight every primitive before publishing a move or changing custody.
        try:
            commands = self.commands(op, actor)
        except NoRoute as e:
            with transaction(self.db):
                self.db.execute(
                    "MERGE (f:AccessBlock {op:$op,actor:$actor}) SET f.reason=$reason,f.at=$at",
                    {
                        "op": op,
                        "actor": actor,
                        "reason": str(e),
                        "at": access_signature(self.db, self.scene),
                    },
                )
                self.check(str(e))
            return False
        labels = {
            "collect": (
                "The high shelf needs a gripper",
                f"{actor} can reach the 110 cm shelf and grip the bag’s tray.",
            ),
            "stage": (
                "Load the low courier",
                "The picker places the bag on a passive deck. Custody changes once.",
            ),
            "cross": (
                "Through the service hatch",
                f"The loaded deck fits the hatch. {actor} carries Bag 47 into the platform zone.",
            ),
            "manifest": (
                "Sign the waybill",
                f"{actor} can still scan the route card at the post desk.",
            ),
            "repair": (
                "Reseat the collar",
                f"{actor} brings its mounted hex driver to the disabled carriage.",
            ),
            "load": (
                "Into the postal coach",
                f"{actor} unloads the courier and raises Bag 47 into {self.world.destination}.",
            ),
            "hoist": (
                "Unload through the mail lift",
                f"{actor} docks with the lift connected to {self.world.destination}.",
            ),
            "depart": (
                "Clear the departure signal",
                "The bag is aboard and the waybill is signed. The interlocking releases the train.",
            ),
        }
        with transaction(self.db):
            changed = self.db.execute(
                """MATCH (a:Action {uid:$uid,status:'pending'})
               WHERE NOT EXISTS {MATCH (a)-[:DEPENDS_ON]->(p:Action) WHERE p.status<>'done'}
               SET a.status='running' RETURN a.uid AS uid""",
                {"uid": uid},
            ).fetchall()
            if not changed:
                raise RuntimeError("Action is not ready in the stored revision")
            query, params = {
                "collect": (HANDLING, {"actor": actor, "station": "Shelf"}),
                "manifest": (SCANNERS, {}),
                "repair": (REPAIRS, {}),
                "hoist": (LIFTS, {}),
            }.get(op, (ACTION_GUARDS, {"uid": uid}))
            self.frame()
            self.event(
                "assignment",
                *labels[op],
                actors=[actor] if actor in self.positions else [],
                op=op,
                uid=uid,
                query=query,
                params=params,
                mutate=lambda seq: self.db.execute(
                    "MATCH (e:Event {id:$seq}),(a:Action {uid:$uid}) CREATE (e)-[:STARTS]->(a)",
                    {"seq": seq, "uid": uid},
                ),
            )
        yield True
        with transaction(self.db):
            # The episode has one writer. A fresh read also guards observations made between packets.
            self.world = self.read_world()
            mismatches = self.db.execute(
                """MATCH (a:Action {uid:$uid})-[g:REQUIRES]->(f:WorldFact)
                WHERE g.expected<>f.value RETURN f.id AS fact""",
                {"uid": uid},
            ).fetchall()
            if mismatches:
                self.db.execute(
                    "MATCH (a:Action {uid:$uid}) SET a.status='pending'", {"uid": uid}
                )
                self.check()
                return False
            for kind, body, target, ticks in commands:
                motion = {
                    "kind": kind,
                    "actor": body,
                    "from": self.holder,
                    "to": body if kind == "move" else target,
                    "start": len(self.frames) - 1,
                    "end": len(self.frames) - 1 + ticks,
                }
                for i in range(ticks):
                    if kind == "move":
                        self.positions[body] = tuple(target[i])
                    if i == ticks - 1 and kind in (
                        "pick",
                        "transfer",
                        "place",
                        "dock",
                        "feed",
                    ):
                        moved = self.db.execute(
                            """MATCH (a:Action {uid:$uid}),(bag:Parcel)-[old:HELD_BY]->(h {id:$old}),(n {id:$new})
                            DELETE old CREATE (bag)-[:HELD_BY]->(n),
                            (a)-[:TRANSFERRED]->(c:CustodyChange {tick:$tick})-[:FROM]->(h),(c)-[:TO]->(n)
                            RETURN n.id AS holder""",
                            {
                                "uid": uid,
                                "tick": len(self.frames),
                                "old": self.holder,
                                "new": target,
                            },
                        ).fetchall()
                        if moved != [{"holder": target}]:
                            raise RuntimeError("Cargo transfer lost its unique holder")
                        self.holder = target
                    self.frame(motion if body in self.positions else None)
            for who, (x, z) in self.positions.items():
                self.db.execute(
                    """MATCH (r:Robot {id:$who})-[old:IN_ZONE]->(z),(n:Zone {id:$zone})
                    DELETE old CREATE (r)-[:IN_ZONE]->(n) SET r.x=$x,r.z=$z""",
                    {
                        "who": who,
                        "x": x,
                        "z": z,
                        "zone": "Platform" if x > self.scene["wall"] else "Sorting",
                    },
                )
            for key, val in OPS[op].sets.items():
                statement = {
                    "cargo": "MATCH (p:Parcel)-[:HELD_BY]->(h) SET p.stage=$val,p.stage_holder=h.id",
                    "manifest": "MATCH (p:Waybill) SET p.status=$val",
                    "forks": "MATCH (p:Tool {id:'Fork carriage'}) SET p.online=true",
                    "signal": "MATCH (p:Train) SET p.signal=$val",
                }[key]
                self.db.execute(statement, {"val": val} if "$val" in statement else {})
            self.world = self.read_world()
            if self.world.holder != self.holder or any(
                self.world.facts[k] != v for k, v in OPS[op].sets.items()
            ):
                raise RuntimeError("Committed effects differ from the action")
            self.frames[-1].update(
                fork_online=self.world.facts["forks"] == "online",
                signal=self.world.facts["signal"],
                manifest=self.world.facts["manifest"],
            )
            self.db.execute(
                "MATCH (a:Action {uid:$uid}) SET a.status='done',a.finished=$tick,a.primitives=$commands",
                {
                    "uid": uid,
                    "tick": len(self.frames) - 1,
                    "commands": json.dumps(commands),
                },
            )
            self.event(
                "completed",
                OPS[op].label + " complete",
                labels[op][1],
                op=op,
                uid=uid,
                mutate=lambda seq: self.db.execute(
                    "MATCH (e:Event {id:$seq}),(a:Action {uid:$uid}) CREATE (e)-[:COMPLETES]->(a)",
                    {"seq": seq, "uid": uid},
                ),
            )
        return True


def mail_steps(scenario, root: Path, controller, env_file):
    root.mkdir(exist_ok=True, parents=True)
    run_id = uuid4().hex
    folder = Path(tempfile.mkdtemp(prefix=".building-", dir=root))
    try:
        from .yard import YardRun, seed_yard, yard_layout

        yard = scenario.mission == "yard"
        scene = (
            yard_layout(scenario)
            if yard
            else layout(scenario.seed, scenario.service_kit)
        )
        if not yard:
            # The mail platform has an outer service aisle beyond the sorting hall.
            scene.update(width=14, depth=8)
            if "Patch" in scene["starts"]:
                scene["starts"]["Patch"] = [10, 7]
        scene["desk"] = [9, 3]
        scene["destination"] = "Coach B"
        with relate.connect(str(folder / "episode.rl")) as db:
            if yard:
                seed_yard(db, scene, scenario)
                run = YardRun(db, scene, controller, env_file)
            else:
                seed_mail(db, scene, scenario.parcel_cm, scenario.jam)
                run = MailRun(db, scene, controller, env_file)
            crew = "Four" if len(run.positions) == 4 else "Three"
            run.event(
                "order",
                "Three orders. One departure." if yard else "The Northport night post",
                run.world.goal
                if yard
                else f"{crew} robots share one order. Bag 47 must reach the coach serving Northport, and the train needs a signed waybill before it can leave.",
                query=run.address_query if yard else ADDRESS,
                params={},
            )
            sent_e = sent_f = 0

            def delta():
                nonlocal sent_e, sent_f
                data = {"events": run.events[sent_e:], "frames": run.frames[sent_f:]}
                sent_e = len(run.events)
                sent_f = len(run.frames)
                return data

            header = {
                "version": 1,
                "id": run_id,
                "layout": scene,
                "scenario": scenario.model_dump(),
                "controller": controller,
            }
            yield {"type": "init", **header, **delta()}
            fault = scenario.mail_fault or ("forks" if scenario.fork_fault else None)
            replan = True
            while run.world.facts["signal"] != "green":
                if replan:
                    yield {"type": "thinking", "tick": len(run.frames) - 1}
                    planning = run.plan_steps()
                    while True:
                        try:
                            next(planning)
                        except StopIteration as end:
                            feasible = end.value
                            break
                        yield {"type": "update", **delta()}
                    yield {"type": "update", **delta()}
                    if not feasible:
                        break
                with transaction(db):
                    replan = run.check()
                if replan:
                    yield {"type": "update", **delta()}
                    continue
                ready = db.execute(READY, {"rev": run.rev}).fetchall()
                if not ready:
                    raise RuntimeError("Verified plan has no ready action")
                if yard:
                    execution = run.execute_wave(ready)
                else:
                    action = min(ready, key=lambda a: ORDER.index(a["op"]))
                    execution = run.execute(action)
                try:
                    while True:
                        next(execution)
                        yield {"type": "update", **delta()}
                except StopIteration as end:
                    replan = not end.value
                yield {"type": "update", **delta()}
                if (
                    fault
                    and not replan
                    and (
                        ("47/" + ("stage" if fault == "hatch" else "cross"))
                        in run.last_wave
                        if yard
                        else action["op"] == ("stage" if fault == "hatch" else "cross")
                    )
                ):
                    replan = run.observe(fault)
                    fault = None
                    yield {"type": "update", **delta()}
            outcome = "delivered" if run.world.facts["signal"] == "green" else "blocked"
            if outcome == "delivered":
                for _ in range(7):
                    run.frame()
                run.event(
                    "delivered",
                    "The junction train departs" if yard else "The night post departs",
                    "Three bags are aboard their addressed coaches. Three waybills are signed. The shared signal is green."
                    if yard
                    else "Bag 47 is aboard Coach B. Waybill 47 is signed. Both branches are complete.",
                )
            episode = {
                **header,
                "outcome": outcome,
                "frames": run.frames,
                "events": run.events,
            }
            last = delta()
            db.flush()
        (folder / "episode.json").write_text(
            json.dumps(episode, separators=(",", ":")) + "\n"
        )
        os.rename(folder, root / run_id)
    except BaseException:
        shutil.rmtree(folder, ignore_errors=True)
        raise
    yield {"type": "update", **last}
    yield {"type": "complete", "episode": episode}
