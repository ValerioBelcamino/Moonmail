"""Let the dispatcher author a typed partial order and correct a rejected proposal."""

import json

from .agent import azure_transport
from .mail_planning import InvalidPlan, local_plan, verify


def exhaust(generator):
    while True:
        try:
            next(generator)
        except StopIteration as end:
            return end.value


def propose(world, retained, controller, env_file, log_attempt):
    return exhaust(proposal_steps(world, retained, controller, env_file, log_attempt))


def proposal_steps(world, retained, controller, env_file, log_attempt):
    trace = []

    def check(raw):
        if raw == {"steps": []}:
            if local_plan(world, retained)["steps"]:
                raise InvalidPlan("A feasible departure exists.")
            return None
        return verify(raw, world, retained)

    context = {
        "goal": world.goal,
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
    if controller == "deterministic":
        yield "read", context
        raw = local_plan(world, retained)
        yield "proposal", raw
        verified = check(raw)
        log_attempt(raw, "accepted" if verified else "hold", "")
        return raw, verified, trace
    respond = azure_transport(env_file)

    def tool(name, description, props):
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

    read = tool(
        "read_dispatch_graph",
        "Read graph state, retained actions, operator contracts and eligible bodies.",
        {},
    )
    ops = list(world.contracts)
    step = {
        "type": "object",
        "properties": {
            "op": {"type": "string", "enum": ops},
            "after": {"type": "array", "items": {"type": "string", "enum": ops}},
            "actor": {
                "type": "string",
                "enum": [
                    "auto",
                    *sorted({r for opts in world.options.values() for r in opts}),
                ],
            },
        },
        "required": ["op", "after", "actor"],
        "additionalProperties": False,
    }
    submit = tool(
        "propose_dag",
        "Submit the remaining action DAG for solver validation. Empty steps requests a verified hold.",
        {"steps": {"type": "array", "items": step}},
    )
    messages = [
        {
            "role": "developer",
            "content": "Plan the registered-mail train departure. Read the graph. Author the remaining action DAG from its operator contracts. Use each needed operation once. To satisfy a false precondition, select an operation that establishes its exact value and name it in after. Independent branches stay independent. Include only direct causal links. Already true facts need no supplying step. Preserve pending retained nodes. Prefer low combined handling and travel effort; consider repair versus hoist. Delegate body binding using actor=auto. A rejected proposal gets a solver counterexample; use it to correct your plan. If there is no solution, submit an empty steps array.",
        },
        {
            "role": "user",
            "content": world.goal,
        },
    ]
    for i in range(5):
        name = "read_dispatch_graph" if not i else "propose_dag"
        data = respond(messages, [read if not i else submit])
        calls = [c for c in data["output"] if c["type"] == "function_call"]
        if len(calls) != 1 or calls[0]["name"] != name:
            raise RuntimeError("Azure returned an unexpected planning tool")
        call = calls[0]
        raw = json.loads(call["arguments"])
        messages.extend(data["output"])
        if i:
            yield "proposal", raw
            try:
                verified = check(raw)
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
    raise RuntimeError("The dispatcher exhausted its plan correction attempts")
