import type { FleetGraph, Frame } from "./types";

const ns = "http://www.w3.org/2000/svg";

function element(tag: string, attributes: Record<string, string | number>) {
  const item = document.createElementNS(ns, tag);
  for (const [name, value] of Object.entries(attributes))
    item.setAttribute(name, String(value));
  return item;
}

function label(x: number, y: number, value: string, cls = "") {
  const item = element("text", { x, y, class: cls, "text-anchor": "middle" });
  item.textContent = value;
  return item;
}

export function drawEmbodiment(graph: FleetGraph, who: string, frame: Frame) {
  const rows = graph.skills.filter((r) => r.robot === who);
  const mount = graph.mounts.find((r) => r.robot === who);
  const svg = element("svg", {
    viewBox: "0 0 570 194",
    role: "img",
    "aria-label": who + " and its embodiment, skills and mounted equipment",
  });
  if (!rows.length) return { svg, note: "This roster has no robots." };
  const online = who !== "Jack" || frame.fork_online !== false;
  const wire = (path: string, tone = "") =>
    svg.append(element("path", { d: path, class: "body-edge " + tone }));
  function card(
    x: number,
    y: number,
    w: number,
    title: string,
    sub = "",
    tone = "",
  ) {
    svg.append(
      element("rect", {
        x,
        y,
        width: w,
        height: sub ? 40 : 28,
        rx: 5,
        class: "body-node " + tone,
      }),
    );
    svg.append(label(x + w / 2, y + (sub ? 16 : 18), title, "body-title"));
    if (sub) svg.append(label(x + w / 2, y + 31, sub, "body-sub"));
  }
  const body = rows[0];
  const skills = rows
    .map((r) => r.skill)
    .sort(
      (a, b) =>
        Number(a === mount?.provides) - Number(b === mount?.provides) ||
        a.localeCompare(b),
    );
  const traits = skills.map((skill, i) => ({ skill, y: 10 + i * 36 }));
  wire("M88 89 H113 V42 H197");
  svg.append(label(151, 34, "INSTANCE_OF", "body-rel"));
  const last = traits[traits.length - 1].y + 14;
  wire(`M331 42 H403 M403 24 V${Math.max(42, last)}`);
  svg.append(label(365, 33, "HAS_SKILL", "body-rel"));
  for (const { skill, y } of traits) {
    wire(`M403 ${y + 14} H437`);
    card(437, y, 122, skill === "Fork" ? "Lift a tray" : skill);
  }
  card(4, 69, 84, who, "Robot", "actor");
  card(
    197,
    22,
    134,
    body.body === "Lift" ? "Forklift chassis" : body.body,
    "Embodiment",
    "chassis",
  );
  if (mount) {
    wire("M88 89 H113 V151 H197");
    svg.append(label(151, 143, "MOUNTS", "body-rel"));
    const name = mount.mounted.replace(/ \([^)]*\)$/, "");
    card(
      197,
      131,
      134,
      name,
      mount.provides ? (online ? "Online" : "Offline") : "Instrument",
      online ? "tool" : "offline",
    );
    if (mount.provides) {
      const target = traits.find((r) => r.skill === mount.provides);
      if (target) {
        wire(
          `M331 151 H419 V${target.y + 21} H437`,
          online ? "supply" : "lost",
        );
        svg.append(label(372, 143, "PROVIDES", "body-rel"));
      }
    } else if (mount.fits) {
      wire("M331 151 H437", "supply");
      svg.append(label(382, 143, "FITS", "body-rel"));
      card(437, 131, 122, mount.fits, "Interface");
    }
  }
  let note =
    "Chassis height " +
    body.height_cm +
    " cm · Reach " +
    body.reach_cm +
    " cm.";
  if (mount?.provides)
    note += online
      ? " Loading needs both the chassis skill and a working carriage."
      : " The carriage is offline. The chassis still supports scanning.";
  if (mount?.fits) note += " The tool must fit the collar for a repair.";
  if (body.body === "Courier")
    note += " Crossing also depends on the loaded deck fitting through the hatch.";
  if (body.body === "Picker")
    note += " Pickup checks this arm’s reach against the shelf height.";
  return { svg, note };
}
