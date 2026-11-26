import type { DepotEvent, Episode } from "./types";

interface SceneLink {
  target: string;
  caption: string;
  selector: string;
  alert?: boolean;
}

const role: Record<string, string> = {
  Wick: "picker",
  Skim: "courier",
  Jack: "forklift",
  Patch: "mechanic",
};

export function eventLink(
  ep: Episode,
  e: DepotEvent,
  p: number,
): SceneLink | undefined {
  const yard = ep.layout.yard;
  const op = (name: string) => `[data-op="${name}"]`;
  const orderOp = (name: string) =>
    op(yard && name !== "depart" ? "47/" + name : name);
  const link = (
    target: string,
    caption: string,
    selector: string,
    alert = false,
  ) => ({ target, caption, selector, alert });
  const instrument =
    ep.scenario.service_kit === "probe" ? "inspection probe" : "hex driver";
  if (e.kind === "order" && !yard) {
    if (p < 0.42) return link("Bag", "Bag on the shelf", op("bag"));
    if (p < 0.72) return link("Socket", "Destination coach", op("goal"));
    return link("Waybill", "Delivery slip", op("bill"));
  }
  if (e.kind === "read") {
    if (e.targetRevision === 1 && !yard)
      return p < 0.34
        ? link("Bag", "Current holder", op("holder"))
        : p < 0.69
          ? link("Wick", "Wick · long arm", op("pick"))
          : link("Skim", "Skim · low courier", op("cross"));
    if (
      e.targetRevision === 2 &&
      e.modelInput?.world.forks === "offline" &&
      e.modelInput?.operators[yard ? "47/repair" : "repair"] &&
      ep.layout.starts.Patch
    )
      return link(
        "Patch",
        "Patch · " + instrument,
        op("tool"),
        instrument === "inspection probe",
      );
  }
  if (e.kind === "fork fault") {
    if (p < 0.53)
      return link(
        "Fork",
        "Jack · broken fork",
        yard ? orderOp("load") : ".guard",
        true,
      );
    if (p < 0.78) return link("Fork", "Loading blocked", orderOp("load"), true);
    if (p < 0.95) return link("Fork", "Departure waits", op("depart"), true);
    return link("Jack", "Scanner still works", orderOp("manifest"));
  }
  if (
    e.kind === "rejected" &&
    ep.layout.starts.Patch && e.feedback?.counterexample.toLowerCase().includes("repair has no eligible body")
  )
    return link("Patch", "Tool cannot repair", orderOp("repair"), true);
  if (e.kind === "decision" || e.kind === "proposal") {
    const revised = (e.targetRevision ?? e.planGraph?.revision ?? 1) > 1;
    const ops = e.proposal?.steps.map((s) => s.op) ?? e.new ?? [];
    if (revised && ops.some((o) => o.endsWith("repair"))) {
      const actor = e.bindings?.[yard ? "47/repair" : "repair"] ?? e.proposal?.steps.find(s => s.op.endsWith("repair"))?.actor;
      if (actor && actor !== "auto" && actor in ep.layout.starts)
        return link(actor, actor + " · " + instrument, orderOp("repair"));
    }
    if (revised && ops.some((o) => o.endsWith("hoist")))
      return link("Mail lift", "Station lift", orderOp("hoist"));
    if (!revised && !yard)
      return p < 0.4
        ? link("Wick", "Wick · pickup", op("collect"))
        : p < 0.73
          ? link("Waybill", "Independent signature", op("manifest"))
          : link("Socket", "Both jobs must finish", op("depart"));
  }
  const running = e.planGraph?.nodes.filter((n) => n.state === "running") ?? [];
  const current = e.op
    ? e.planGraph?.nodes.find((n) => n.op === e.op)
    : running[0];
  if (current) {
    const action = current.op.split("/").at(-1);
    if (action === "depart")
      return link("Socket", "Train released", op(current.op));
    if (
      action === "stage" &&
      (e.kind === "completed" ||
        (!yard && ep.frames[Math.floor(e.tick)].holder === "Skim"))
    )
      return link("Skim", "Skim holds the bag", op(current.op));
    if (action === "hoist")
      return link("Mail lift", "Station lift", op(current.op));
    if (current.actor && current.actor in (yard?.bodies ?? ep.layout.starts))
      return link(
        current.actor,
        current.actor +
          " · " +
          (role[yard?.bodies[current.actor] ?? current.actor] ?? current.label),
        op(current.op),
      );
  }
  if (e.kind === "hold")
    return link("Socket", "Train held", op("depart"), true);
  if (e.kind === "delivered")
    return link("Socket", "Train released", op("depart"));
}

const ns = "http://www.w3.org/2000/svg";
export function markNode(
  drawing: HTMLElement,
  selector?: string,
  alert = false,
) {
  for (const old of drawing.querySelectorAll(".paired"))
    old.classList.remove("paired", "attention");
  drawing.querySelector(".paired-mark")?.remove();
  if (!selector) return false;
  const group = drawing.querySelector(selector);
  const plate = group?.querySelector<SVGRectElement>("rect.plate");
  if (!group || !plate) return false;
  group.classList.add("paired");
  if (alert) group.classList.add("attention");
  const pin = document.createElementNS(ns, "g");
  pin.setAttribute("class", "paired-mark");
  pin.setAttribute(
    "transform",
    `translate(${plate.x.baseVal.value + plate.width.baseVal.value - 4} ${plate.y.baseVal.value + 2})`,
  );
  pin.setAttribute("aria-hidden", "true");
  const ring = document.createElementNS(ns, "circle");
  ring.setAttribute("r", "7");
  const sign = document.createElementNS(ns, alert ? "text" : "circle");
  if (alert) {
    sign.setAttribute("y", "3.5");
    sign.setAttribute("text-anchor", "middle");
    sign.textContent = "!";
  } else sign.setAttribute("r", "2.5");
  pin.append(ring, sign);
  group.append(pin);
  return true;
}
