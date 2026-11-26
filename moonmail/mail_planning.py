"""Bounded, causal action proposals for the registered-mail service."""

from dataclasses import dataclass, field
from graphlib import CycleError, TopologicalSorter
from itertools import combinations, product

import z3


@dataclass(frozen=True)
class Operator:
    label: str
    needs: dict
    sets: dict
    effort: int


OPS = {
    "collect": Operator("Collect bag", {"cargo": "shelf"}, {"cargo": "picked"}, 2),
    "stage": Operator("Load courier", {"cargo": "picked"}, {"cargo": "staged"}, 2),
    "cross": Operator(
        "Cross hatch",
        {"cargo": "staged", "hatch": "open", "clearance": "fits"},
        {"cargo": "platform"},
        2,
    ),
    "manifest": Operator(
        "Sign waybill",
        {"manifest": "unsigned", "address": "matched"},
        {"manifest": "signed"},
        2,
    ),
    "repair": Operator(
        "Reseat collar",
        {"forks": "offline", "interface": "fits"},
        {"forks": "online"},
        4,
    ),
    "load": Operator(
        "Load coach",
        {"cargo": "platform", "forks": "online", "address": "matched"},
        {"cargo": "aboard"},
        4,
    ),
    "hoist": Operator(
        "Use mail lift",
        {"cargo": "platform", "lift": "connected", "address": "matched"},
        {"cargo": "aboard"},
        16,
    ),
    "depart": Operator(
        "Release train",
        {
            "cargo": "aboard",
            "manifest": "signed",
            "address": "matched",
            "signal": "red",
        },
        {"signal": "green"},
        1,
    ),
}


class InvalidPlan(ValueError):
    """A rejected proposal can be sent back to its author as a counterexample."""


@dataclass
class World:
    facts: dict
    options: dict  # op -> {eligible actor: estimated approach distance}
    holder: str
    destination: str
    scans: list
    interfaces: list

    contracts: dict = field(default_factory=lambda: OPS)
    bag_holders: dict = field(default_factory=dict)
    goal: str = (
        "Load Bag 47 into its addressed coach, sign its waybill and release the train."
    )

    order_manifest: dict = field(default_factory=dict)
    terminal: str = "depart"

    def orders(self):
        return self.bag_holders or {"": self.holder}


def scoped(order, name):
    return f"{order}/{name}" if order else name


@dataclass
class Verified:
    steps: dict
    actors: dict
    cost: int


def ancestors(deps, order):
    upstream = {}
    for op in order:
        upstream[op] = set(deps[op])
        for parent in deps[op]:
            upstream[op].update(upstream[parent])
    return upstream


def verify(proposal, world, retained=None):
    """Require causal support in every allowed topological execution. Bind eligible bodies."""
    retained = retained or {}
    raw = proposal.get("steps") if isinstance(proposal, dict) else None
    if not isinstance(raw, list) or not 1 <= len(raw) <= len(world.contracts):
        raise InvalidPlan(f"Submit one to {len(world.contracts)} remaining operations.")
    deps, nominations = {}, {}
    for item in raw:
        if (
            not isinstance(item, dict)
            or not isinstance(item.get("op"), str)
            or item["op"] not in world.contracts
        ):
            raise InvalidPlan("Unknown operation.")
        op = item["op"]
        parents = item.get("after")
        actor = item.get("actor")
        if (
            op in deps
            or not isinstance(parents, list)
            or any(not isinstance(p, str) for p in parents)
            or len(set(parents)) != len(parents)
            or not isinstance(actor, str)
        ):
            raise InvalidPlan(f"Invalid or duplicate step {op}.")
        deps[op] = parents
        nominations[op] = actor
    if world.terminal not in deps or set(retained) - deps.keys():
        raise InvalidPlan(
            f"Include {world.terminal} and retain the unaffected pending work."
        )
    for op, parents in deps.items():
        if set(parents) - deps.keys():
            raise InvalidPlan(f"{op} names a predecessor outside this proposal.")
    try:
        order = list(TopologicalSorter(deps).static_order())
    except CycleError as e:
        raise InvalidPlan("The proposed dependency edges contain a cycle.") from e
    above = ancestors(deps, order)
    if above[world.terminal] != set(deps) - {world.terminal}:
        raise InvalidPlan(
            f"Every proposed operation must contribute to {world.terminal}."
        )

    ctx = z3.Context()
    solver = z3.Solver(ctx=ctx)
    constraints = []
    descriptions = {}

    def require(expr, why):
        tag = "c" + str(len(constraints))
        descriptions[tag] = why
        if isinstance(expr, bool):
            expr = z3.BoolVal(expr, ctx=ctx)
        solver.assert_and_track(expr, z3.Bool(tag, ctx=ctx))
        constraints.append(expr)

    roster = sorted({r for options in world.options.values() for r in options})
    ranks = {op: z3.Int("rank_" + op, ctx=ctx) for op in deps}
    bots = {op: z3.Int("body_" + op, ctx=ctx) for op in deps}
    costs = []
    for op in order:
        spec = world.contracts[op]
        eligible = world.options[op]
        if op in retained and set(deps[op]) != set(retained[op]["after"]):
            raise InvalidPlan(f"Preserve the existing predecessors of {op}.")
        for parent in deps[op]:
            require(ranks[parent] < ranks[op], f"{parent} must precede {op}")
            if not any(
                spec.needs.get(k) == v for k, v in world.contracts[parent].sets.items()
            ):
                raise InvalidPlan(
                    f"{parent} supplies no precondition of {op}. Keep the branches independent."
                )
        ids = [roster.index(a) for a in eligible]
        require(
            z3.Or(*[bots[op] == i for i in ids]) if ids else False,
            f"{op} has no eligible body in the graph",
        )
        for actor in [nominations[op], retained.get(op, {}).get("actor", "auto")]:
            if actor != "auto":
                require(
                    bots[op] == roster.index(actor) if actor in roster else False,
                    f"{actor} cannot perform {op}",
                )
        for key, expected in spec.needs.items():
            writers = [p for p in above[op] if key in world.contracts[p].sets]
            if writers:
                witnesses = [
                    z3.And(
                        *(
                            [z3.BoolVal(True, ctx=ctx)]
                            + [ranks[p] >= ranks[w] for w in writers]
                        )
                    )
                    for p in writers
                    if world.contracts[p].sets[key] == expected
                ]
                supported = z3.Or(*witnesses) if witnesses else False
            else:
                supported = world.facts.get(key) == expected
            require(
                supported,
                f"{op} requires {key}={expected}; no causal predecessor establishes it",
            )
        for actor, dist in eligible.items():
            costs.append(z3.If(bots[op] == roster.index(actor), dist + spec.effort, 0))
    for a, b in combinations(deps, 2):
        if a in above[b] or b in above[a]:
            continue
        x, y = world.contracts[a], world.contracts[b]
        conflict = (
            set(x.sets) & (y.needs.keys() | y.sets.keys())
            or set(y.sets) & x.needs.keys()
        )
        require(
            not conflict,
            f"{a} and {b} access the same changing fact without an ordering",
        )
    for order_id, holder in world.orders().items():
        for predecessor, successor in (
            ("collect", "stage"),
            ("cross", "hoist"),
            ("stage", "cross"),
        ):
            first, second = scoped(order_id, predecessor), scoped(order_id, successor)
            if second not in bots:
                continue
            if first not in bots:
                require(
                    bots[second] == roster.index(holder) if holder in roster else False,
                    f"{second} must use the current holder",
                )
            elif successor != "cross":
                require(
                    bots[first] == bots[second],
                    f"{first} and {second} must keep the same body",
                )
    if solver.check() != z3.sat:
        raise InvalidPlan(" • ".join(descriptions[str(k)] for k in solver.unsat_core()))
    opt = z3.Optimize(ctx=ctx)
    opt.add(*constraints)
    total = z3.Sum(costs)
    opt.minimize(total)
    for op in sorted(bots):
        opt.minimize(bots[op])
    if opt.check() != z3.sat:
        raise InvalidPlan("No consistent actor assignment.")
    model = opt.model()
    return Verified(
        deps,
        {op: roster[model.eval(v).as_long()] for op, v in bots.items()},
        model.eval(total).as_long(),
    )


def _goal_proposal(world, disabled):
    graph = {}

    def visit(op, trail):
        if op in graph:
            return True
        if op in trail or not world.options[op]:
            return False
        parents = []
        for key, value in world.contracts[op].needs.items():
            if world.facts.get(key) == value:
                continue
            producers = [
                p
                for p, spec in world.contracts.items()
                if spec.sets.get(key) == value and p not in disabled
            ]
            for producer in producers:
                if visit(producer, trail | {op}):
                    parents.append(producer)
                    break
            else:
                return False
        graph[op] = parents
        return True

    if not visit(world.terminal, set()):
        return None
    return {
        "steps": [
            {"op": op, "actor": "auto", "after": parents}
            for op, parents in graph.items()
        ]
    }


def local_plan(world, retained):
    """Regress the terminal goal over the operator effects, including both loading modes."""
    choices = []
    alternatives = []
    for bag in world.orders():
        load, hoist = scoped(bag, "load"), scoped(bag, "hoist")
        # The search disables one loading mode. A mode with no candidates can
        # already be discarded without branching over it a second time.
        if not world.options.get(hoist):
            alternatives.append((hoist,))
        elif not world.options.get(load):
            alternatives.append((load,))
        else:
            alternatives.append((load, hoist))
    for disabled in product(*alternatives):
        raw = _goal_proposal(world, set(disabled))
        if raw:
            try:
                choices.append((verify(raw, world, retained).cost, raw))
            except InvalidPlan:
                pass
    return min(choices, key=lambda pair: pair[0])[1] if choices else {"steps": []}
