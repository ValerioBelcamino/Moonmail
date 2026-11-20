import type { DepotEvent, Episode, Frame, PlanGraph } from "./types";
import { planDrawing } from "./planGraph";

const ns = "http://www.w3.org/2000/svg";
function node(tag: string, attrs: Record<string, string | number> = {}) {
  const n = document.createElementNS(ns, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  return n;
}
function text(x: number, y: number, value: string, cls: string) {
  const t = node("text", { x, y, class: cls });
  t.textContent = value;
  return t;
}
function canvas(h: number, title: string) {
  return node("svg", {
    viewBox: "0 0 524 " + h,
    role: "img",
    "aria-label": title,
  });
}
function box(
  g: Element,
  x: number,
  y: number,
  w: number,
  title: string,
  sub: string,
  kind: string,
  op = "",
) {
  const group = node("g", { class: "g-node " + kind, "data-op": op });
  group.append(
    node("rect", { class: "plate", x, y, width: w, height: 42, rx: 7 }),
    text(x + 10, y + 18, title, "label"),
    text(x + 10, y + 33, sub, "who"),
  );
  g.append(group);
  return group;
}
function line(g: Element, d: string, cls = "") {
  g.append(node("path", { d, class: "g-edge " + cls }));
}
const words: Record<string, string> = {
  collect: "Pick",
  stage: "Handoff",
  cross: "Hatch",
  load: "Load",
  manifest: "Sign",
  repair: "Repair",
  hoist: "Hoist",
  depart: "Release train",
};

function draft(e: DepotEvent): PlanGraph {
  const steps = e.proposal?.steps ?? [];
  return {
    revision: e.targetRevision ?? 1,
    nodes: steps.map((s) => ({
      uid: "draft/" + s.op,
      op: s.op,
      label:
        (
          {
            collect: "Collect bag",
            stage: "Hand off bag",
            cross: "Cross hatch",
            manifest: "Sign waybill",
            repair: "Reseat collar",
            load: "Load coach",
            hoist: "Use mail lift",
            depart: "Release train",
          } as Record<string, string>
        )[s.op] ??
        words[s.op.split("/").at(-1)!] ??
        s.op,
      state: "proposed",
      actor: s.actor === "auto" ? "Unassigned" : s.actor,
    })),
    edges: steps.flatMap((s) =>
      s.after.map((p) => ({ source: "draft/" + p, target: "draft/" + s.op })),
    ),
  };
}

function worldDrawing(e: DepotEvent, ep: Episode, f: Frame) {
  const wide = ep.layout.yard,
    init = ep.events[0],
    rows = init.proof?.rows ?? [];
  const g = canvas(wide ? 204 : 194, "State read from the station graph");
  const ctx = e.modelInput;
  if (ctx && (e.targetRevision ?? 1) > 1) {
    const fault = ep.events
      .filter((v) => v.seq < e.seq && v.issues?.length)
      .at(-1)?.issues?.[0];
    const repair = ctx.operators[wide ? "47/repair" : "repair"],
      names = Object.keys(repair?.eligible_and_approach ?? {}),
      instrument =
        ctx.instrument_interfaces.find((v) => v.patient === "Jack") ??
        ctx.instrument_interfaces[0];
    const pending = Object.entries(ctx.retained);
    const label =
      fault?.fact === "forks" ? "Jack’s forks" : (fault?.fact ?? "Observation");
    line(g, "M153 53 H195 M333 53 H375 M84 73 V131 H99 M254 131 H294", "done");
    box(
      g,
      8,
      30,
      147,
      label,
      String(fault?.actual ?? "Updated"),
      "stale",
      "observation",
    );
    box(g, 197, 30, 138, "Station state", "Graph read", "read", "state");
    box(g, 375, 30, 141, "Active goal", "Release train", "read", "goal");
    if (fault?.fact === "forks" && instrument) {
      box(
        g,
        12,
        110,
        218,
        instrument.robot + " · " + instrument.instrument,
        "Mechanic’s mounted tool",
        "read",
        "tool",
      );
      const fits = names.includes(instrument.robot);
      box(
        g,
        295,
        110,
        214,
        fits ? "Fits the fork collar" : "Cannot repair this fork",
        fits ? "Repair is possible" : "Another way to load is needed",
        fits ? "done" : "stale",
        "fit",
      );
    } else {
      box(
        g,
        115,
        110,
        290,
        pending.length + " pending jobs kept",
        "These assignments can still run",
        "done",
        "retained",
      );
    }
    return g;
  }
  if (ctx && !wide) {
    const choices = (op: string) =>
      Object.keys(ctx.operators[op]?.eligible_and_approach ?? {}).join(", ") ||
      "None";
    line(
      g,
      "M155 43 H197 M335 43 H375 M263 65 V115 M155 136 H197 M335 136 H375",
      "done",
    );
    box(g, 7, 22, 148, ctx.current_holder, "Current holder", "done", "holder");
    box(g, 197, 22, 138, "Bag 47", "Mail to deliver", "read", "bag");
    box(g, 375, 22, 141, ctx.destination, "Destination", "read", "goal");
    box(
      g,
      7,
      115,
      148,
      choices("collect"),
      "Arm reaches shelf",
      "read",
      "pick",
    );
    box(
      g,
      197,
      115,
      138,
      "Robot abilities",
      "Jobs their bodies can do",
      "read",
      "capabilities",
    );
    box(
      g,
      375,
      115,
      141,
      choices("cross"),
      "Fits with the bag",
      "read",
      "cross",
    );
    return g;
  }
  if (wide) {
    for (const [i, o] of wide.orders.entries()) {
      const y = 8 + i * 63;
      const row = rows.find((r) => r.order === o.id),
        order = ctx?.orders?.[o.id];
      line(g, `M140 ${y + 20} H194 M331 ${y + 20} H383`, "done");
      box(
        g,
        6,
        y,
        136,
        "Bag " + o.id,
        order?.holder ?? f.cargoByBag?.[o.id].holder ?? "",
        "done",
      );
      box(g, 196, y, 134, "Delivery route", "From the bag’s address", "read");
      box(
        g,
        385,
        y,
        132,
        String(order?.coach ?? row?.coach ?? "Unresolved"),
        "Destination",
        "read",
      );
    }
    return g;
  }
  const r = rows[0];
  if (!r) return g;
  line(g, "M140 70 H196 M327 70 H383 M263 91 V139", "done");
  box(g, 6, 50, 134, String(f.holder), "Current holder", "done", "holder");
  box(g, 196, 50, 132, String(r.bag), "Mail to deliver", "read", "bag");
  box(g, 383, 50, 136, "Delivery route", "Bag’s address", "read", "address");
  box(
    g,
    193,
    137,
    138,
    String(r.bill),
    f.manifest ?? "unsigned",
    "read",
    "bill",
  );
  box(g, 382, 137, 137, String(r.coach), "Destination", "read", "goal");
  line(g, "M453 91 V137", "done");
  g.append(
    text(145, 61, "holds", "edge-label"),
    text(332, 61, "sent to", "edge-label"),
    text(267, 120, "covers", "edge-label"),
    text(457, 120, "serves", "edge-label"),
  );
  if (e.kind === "read") g.setAttribute("class", "reading");
  return g;
}

function yardDrawing(graph: PlanGraph, ep: Episode, e: DepotEvent) {
  const orders = ep.layout.yard!.orders;
  const columns: Record<string, number> = {
    collect: 0, stage: 1, manifest: 1, cross: 2, repair: 2,
    load: 3, hoist: 3, depart: 4,
  };
  const widths = [64, 64, 64, 64, 90];
  const columnGap = 18, padding = 7;
  const roles = getComputedStyle(document.documentElement);
  const measurer = document.createElement("canvas").getContext("2d")!;
  const titleFont = "600 12px " + roles.getPropertyValue("--sans").trim();
  const actorFont = "10px " + roles.getPropertyValue("--mono").trim();
  function labelWidth(title: string, actor: string) {
    measurer.font = titleFont;
    // Reserve the widest status prefix even before the action starts.
    const nameWidth = Math.max(...["✓ ", "× ", "▸ "].map(
      (prefix) => measurer.measureText(prefix + title).width,
    ));
    measurer.font = actorFont;
    return Math.ceil(Math.max(nameWidth, measurer.measureText(actor).width)) + 2 * padding;
  }
  const xy = new Map<string, [number, number, number]>();
  for (const n of graph.nodes) {
    const op = n.op.split("/").at(-1)!;
    const column = columns[op] ?? 2;
    widths[column] = Math.max(widths[column], labelWidth(words[op] ?? op, n.actor));
  }
  const positions = [39];
  for (let i = 1; i < widths.length; i++) {
    positions.push(positions[i - 1] + widths[i - 1] + columnGap);
  }
  const g = canvas(274, "Three order branches and a shared departure");
  g.setAttribute("viewBox", `0 0 ${positions[4] + widths[4] + 8} 274`);
  for (const n of graph.nodes) {
    const [bag, action] = n.op.split("/");
    const op = action ?? bag, column = columns[op] ?? 2;
    const row = Math.max(0, orders.findIndex((order) => order.id === bag));
    const y = op === "depart" ? 116 : 17 + row * 85 + (op === "manifest" || op === "repair" ? 36 : 0);
    xy.set(n.uid, [positions[column], y, widths[column]]);
  }
  const defs = node("defs");
  const marker = node("marker", {
    id: "yard-arrow",
    viewBox: "0 0 8 8",
    refX: 7,
    refY: 4,
    markerWidth: 3.8,
    markerHeight: 3.8,
    orient: "auto",
  });
  marker.append(node("path", { d: "M0 0L8 4L0 8z", fill: "context-stroke" }));
  defs.append(marker);
  g.append(defs);
  const byId = new Map(graph.nodes.map((n) => [n.uid, n]));
  for (const edge of graph.edges) {
    const a = xy.get(edge.source),
      b = xy.get(edge.target);
    if (!a || !b) continue;
    const src = byId.get(edge.source)!,
      target = byId.get(edge.target)!;
    const yy = a[1] + 12,
      ey = b[1] + 12,
      start = a[0] + a[2],
      end = b[0] - 3,
      mid = end - (target.op === "depart" ? 18 : 6);
    const fromSign = src.op.endsWith("/manifest") && target.op === "depart";
    const path = fromSign
      ? `M${start} ${yy} v16 H${mid - 10} V${ey} H${end}`
      : `M${start} ${yy} H${mid} V${ey} H${end}`;
    line(
      g,
      path,
      src.state === "stale" && target.state === "stale"
        ? "stale"
        : src.state === "done"
          ? "done"
          : target.state === "running"
            ? "added"
            : "",
    );
    g.lastElementChild!.setAttribute("marker-end", "url(#yard-arrow)");
  }
  orders.forEach((o, i) => g.append(text(4, 33 + i * 85, o.id, "lane-id")));
  for (const n of graph.nodes) {
    const [x, y, width] = xy.get(n.uid)!,
      op = n.op.split("/").at(-1)!,
      added = graph.revision > 1 && e.new?.includes(n.op);
    const a = node("g", {
      class: "g-node " + n.state + (added ? " added" : ""),
      "data-op": n.op,
      "data-state": n.state,
      "data-uid": n.uid,
    });
    a.append(
      node("rect", {
        class: "plate",
        x,
        y,
        width,
        height: 31,
        rx: 5,
      }),
      text(
        x + padding,
        y + 13,
        (n.state === "done"
          ? "✓ "
          : n.state === "stale"
            ? "× "
            : n.state === "running"
              ? "▸ "
              : "") + (words[op] ?? op),
        "yard-label",
      ),
      text(x + padding, y + 25, n.actor, "yard-who"),
    );
    const title = node("title");
    title.textContent = n.uid + " · " + n.actor + " · " + n.state;
    a.append(title);
    g.append(a);
  }
  return g;
}
export function dispatchDrawing(ep: Episode, e: DepotEvent, f: Frame) {
  const rejected = e.kind === "rejected";
  const proposal =
    e.kind === "proposal"
      ? e
      : rejected
        ? ep.events.filter((v) => v.seq < e.seq && v.kind === "proposal").at(-1)
        : undefined;
  const graph = proposal ? draft(proposal) : e.planGraph;
  const proposed = !!proposal;
  if (e.kind === "read") return worldDrawing(e, ep, f);
  if (!graph?.nodes.length) {
    if (proposed) {
      const empty = canvas(120, "Empty proposal");
      empty.append(text(16, 65, "Hold requested", "label"));
      return empty;
    }
    return worldDrawing(e, ep, f);
  }
  const drawing = ep.layout.yard
    ? yardDrawing(graph, ep, e)
    : planDrawing({ ...e, planGraph: graph });
  if (proposed) {
    drawing.classList.add("draft-graph");
    drawing.setAttribute(
      "aria-label",
      (rejected
        ? "Returned draft for revision "
        : "Orchestrator proposal for revision ") + proposal.targetRevision,
    );
  }
  const rejectedInput = rejected
    ? ep.events.filter((v) => v.seq < e.seq && v.kind === "read").at(-1)
        ?.modelInput
    : undefined;
  for (const el of drawing.querySelectorAll("[data-op]")) {
    const op = el.getAttribute("data-op");
    const contract = rejectedInput?.operators[op ?? ""];
    if (contract && Object.keys(contract.eligible_and_approach).length === 0)
      el.classList.add("rejected-node");
    if (e.retained?.includes(op ?? "")) el.classList.add("retained");
    if (e.issues?.some((i) => i.uid === el.getAttribute("data-uid")))
      el.classList.add("direct-fault");
    if (
      e.kind === "completed" &&
      (e.uid === el.getAttribute("data-uid") ||
        e.active?.includes(el.getAttribute("data-uid") ?? ""))
    )
      el.classList.add("just-done");
  }
  return drawing;
}
