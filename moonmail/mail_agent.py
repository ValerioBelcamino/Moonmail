"""Let the dispatcher author a typed partial order and correct a rejected proposal."""

import json

from .agent import azure_transport
from .mail_planning import InvalidPlan, local_plan, verify


MAX_PROPOSALS = 4


class ProposalBudgetExceeded(RuntimeError):
    pass


class ModelProtocolError(RuntimeError):
    pass


def exhaust(generator):
    while True:
        try:
            next(generator)
        except StopIteration as end:
            return end.value


def propose(world, retained, controller, env_file, log_attempt):
    return exhaust(proposal_steps(world, retained, controller, env_file, log_attempt))


def check_proposal(raw, world, retained):
    if raw == {"steps": []}:
        if local_plan(world, retained)["steps"]:
            raise InvalidPlan("A feasible plan exists.")
        return None
    return verify(raw, world, retained)


def planning_context(world, retained):
    context = {
        "goal": world.goal,
        "terminal": world.terminal,
        "world": world.facts,
        "current_holder": world.holder,
        "destination": world.destination,
        "retained": retained,
        "instrument_interfaces": world.interfaces,
        "operators": {
            op: {
                "requires": s.needs,
                "establishes": s.sets,
                "effort": s.effort,
                "eligible_and_approach": world.options[op],
            }
            for op, s in world.contracts.items()
        },
    }
    if world.order_manifest:
        context["orders"] = world.order_manifest
    return context


def function_tool(name, description, props):
    return {
        "type": "function",
        "name": name,
        "description": description,
        "strict": True,
        "parameters": {
            "type": "object",
            "properties": props,
            "required": list(props),
            "additionalProperties": False,
        },
    }


def proposal_tool(ops, actors):
    step = {
        "type": "object",
        "properties": {
            "op": {"type": "string", "enum": ops},
            "after": {"type": "array", "items": {"type": "string", "enum": ops}},
            "actor": {
                "type": "string",
                "enum": [
                    "auto",
                    *sorted(actors),
                ],
            },
        },
        "required": ["op", "after", "actor"],
        "additionalProperties": False,
    }
    return function_tool(
        "propose_dag",
        "Submit the remaining action DAG for solver validation. Empty steps requests a verified hold.",
        {"steps": {"type": "array", "items": step}},
    )


def planner_instructions(world):
    task = (
        "Plan the registered-mail train departure."
        if world.terminal == "depart"
        else "Plan the requested registered-mail goal."
    )
    return (
        task
        + " Read the graph. Author the remaining action DAG from its operator contracts. Use each needed operation once. To satisfy a false precondition, select an operation that establishes its exact value and name it in after. Independent branches stay independent. Include only direct causal links. Already true facts need no supplying step. Preserve pending retained nodes. Prefer low combined handling and travel effort; consider repair versus hoist. Delegate body binding using actor=auto. A rejected proposal gets a solver counterexample; use it to correct your plan. If there is no solution, submit an empty steps array."
    )


def proposal_steps(
    world, retained, controller, env_file, log_attempt, *, context=None, transport=None
):
    trace = []
    if context is None:
        context = planning_context(world, retained)
    if controller == "deterministic":
        yield "read", context
        raw = local_plan(world, retained)
        yield "proposal", raw
        verified = check_proposal(raw, world, retained)
        log_attempt(raw, "accepted" if verified else "hold", "")
        return raw, verified, trace
    respond = transport if transport is not None else azure_transport(env_file)

    read = function_tool(
        "read_dispatch_graph",
        "Read the dispatch state, operator contracts and fleet information for planning.",
        {},
    )
    submit = proposal_tool(
        list(world.contracts), {r for opts in world.options.values() for r in opts}
    )
    messages = [
        {
            "role": "developer",
            "content": planner_instructions(world),
        },
        {
            "role": "user",
            "content": world.goal,
        },
    ]
    for i in range(MAX_PROPOSALS + 1):
        name = "read_dispatch_graph" if not i else "propose_dag"
        data = respond(messages, [read if not i else submit])
        calls = [c for c in data["output"] if c["type"] == "function_call"]
        if len(calls) != 1 or calls[0]["name"] != name:
            raise ModelProtocolError("The model returned an unexpected planning tool.")
        call = calls[0]
        try:
            raw = json.loads(call["arguments"])
        except (ValueError, TypeError) as error:
            raise ModelProtocolError(
                "The model returned incomplete tool arguments."
            ) from error
        messages.extend(data["output"])
        if i:
            yield "proposal", raw
            try:
                verified = check_proposal(raw, world, retained)
            except InvalidPlan as error:
                result = {"accepted": False, "counterexample": str(error)}
                log_attempt(raw, "rejected", str(error))
                yield "rejected", result
            else:
                result = {
                    "accepted": True,
                    "bindings": verified.actors if verified else {},
                }
                trace.append(
                    {
                        "tool": name,
                        "usage": data["usage"]["total_tokens"],
                        "arguments": raw,
                        "result": result,
                    }
                )
                log_attempt(raw, "accepted" if verified else "hold", "")
                return raw, verified, trace
        else:
            result = context
            yield "read", context
        trace.append(
            {
                "tool": name,
                "usage": data["usage"]["total_tokens"],
                "arguments": raw,
                "result": result,
            }
        )
        messages.append(
            {
                "type": "function_call_output",
                "call_id": call["call_id"],
                "output": json.dumps(result),
            }
        )
    raise ProposalBudgetExceeded(
        "The dispatcher exhausted its plan correction attempts"
    )
