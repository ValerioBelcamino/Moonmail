import type { DepotEvent } from "./types";

function svg<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {},
) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
}
function label(x: number, y: number, value: string, cls = "") {
  const el = svg("text", { x, y, class: cls });
  el.textContent = value;
  return el;
}
// Fixed places on the drawing keep the viewer's mental map when a revision replaces a node.
const positions: Record<string, [number, number]> = {
  collect: [65, 29],
  stage: [212, 29],
  cross: [359, 29],
  repair: [65, 100],
  load: [212, 100],
  hoist: [212, 100],
  manifest: [65, 171],
  depart: [359, 171],
};
export function planDrawing(e: DepotEvent) {
  const graph = e.planGraph!;
  const locations = new Map<string, [number, number]>();
  const placed = new Set<string>();
  let history = 0;
  function historyCell(): [number, number] {
    const index = history++;
    return [65 + (index % 3) * 147, 242 + Math.floor(index / 3) * 71];
  }
  for (const n of [...graph.nodes].sort(
    (a, b) => parseInt(b.uid) - parseInt(a.uid),
  )) {
    const cell = positions[n.op],
      key = cell.join(",");
    locations.set(n.uid, placed.has(key) ? historyCell() : cell);
    placed.add(key);
  }
  const failed = e.issues?.find((i) => i.fact === "forks");
  const guardPosition =
    failed && placed.has(positions.repair.join(","))
      ? historyCell()
      : positions.repair;
  const drawing = svg("svg", {
    viewBox: "0 0 424 " + (206 + Math.ceil(history / 3) * 71),
    role: "img",
    "aria-label": "Committed action dependencies, revision " + graph.revision,
  });
  const defs = svg("defs");
  drawing.append(defs);
  for (const [k, c] of [
    ["normal", "#92aaa3"],
    ["done", "#9bd0b7"],
    ["stale", "#ff9c87"],
    ["added", "#f4be72"],
  ]) {
    const marker = svg("marker", {
      id: "arrow-" + k,
      viewBox: "0 0 9 9",
      refX: 8,
      refY: 4.5,
      markerWidth: 4,
      markerHeight: 4,
      orient: "auto",
    });
    marker.append(svg("path", { d: "M0 0L9 4.5L0 9z", fill: c }));
    defs.append(marker);
  }
  const byId = new Map(graph.nodes.map((n) => [n.uid, n]));
  for (const edge of graph.edges) {
    const a = byId.get(edge.source),
      b = byId.get(edge.target);
    if (!a || !b) continue;
    const [x, y] = locations.get(a.uid)!,
      [u, v] = locations.get(b.uid)!;
    let d: string;
    if (y === v) {
      d = "M" + (x + 59) + " " + y + " H" + (u - 61);
    } else {
      const direction = Math.sign(v - y);
      const sy = y + direction * 21,
        ey = v - direction * 22,
        mid = (sy + ey) / 2;
      d =
        "M" +
        x +
        " " +
        sy +
        " C" +
        x +
        " " +
        mid +
        " " +
        u +
        " " +
        mid +
        " " +
        u +
        " " +
        ey;
    }
    const state =
      b.state === "stale" && a.state === "stale"
        ? "stale"
        : a.state === "done"
          ? "done"
          : e.new?.includes(b.op) && graph.revision > 1
            ? "added"
            : "normal";
    drawing.append(
      svg("path", {
        d,
        class: "g-edge " + state,
        "marker-end": "url(#arrow-" + state + ")",
      }),
    );
  }
  if (failed) {
    const target = byId.get(failed.uid);
    if (target) {
      const [tx, ty] = locations.get(target.uid)!,
        [x, y] = guardPosition;
      drawing.append(
        svg("path", {
          d:
            y === ty
              ? "M" + (x + 59) + " " + y + " H" + (tx - 61)
              : "M" +
                (x + 59) +
                " " +
                y +
                " Q" +
                tx +
                " " +
                y +
                " " +
                tx +
                " " +
                (ty + 22),
          class: "g-edge stale",
          "marker-end": "url(#arrow-stale)",
        }),
      );
      const g = svg("g", { class: "g-node guard" });
      g.append(
        svg("rect", {
          class: "plate",
          x: x - 58,
          y: y - 20,
          width: 116,
          height: 40,
          rx: 6,
        }),
        label(x - 48, y - 1, "Fork carriage"),
        label(x - 48, y + 13, failed.expected + " → " + failed.actual, "who"),
      );
      drawing.append(g);
    }
  }
  for (const n of graph.nodes) {
    const [x, y] = locations.get(n.uid)!,
      added = graph.revision > 1 && e.new?.includes(n.op);
    const g = svg("g", {
      class: "g-node " + n.state + (added ? " added" : ""),
      "data-op": n.op,
      "data-uid": n.uid,
      "data-state": n.state,
    });
    g.append(
      svg("rect", {
        class: "plate",
        x: x - 58,
        y: y - 20,
        width: 116,
        height: 40,
        rx: 6,
      }),
      label(
        x - 53,
        y - 1,
        n.state === "done"
          ? "✓"
          : n.state === "stale"
            ? "×"
            : n.state === "running"
              ? "▸"
              : "·",
        "state-icon",
      ),
      label(
        x - 40,
        y - 1,
        n.op === "stage"
          ? "Hand off bag"
          : n.op === "repair"
            ? "Repair fork"
            : n.label,
      ),
      label(x - 40, y + 13, n.actor, "who"),
    );
    const title = svg("title");
    title.textContent = n.uid + " · " + n.actor + " · " + n.state;
    g.append(title);
    drawing.append(g);
  }
  return drawing;
}
export function routeDrawing(e: DepotEvent) {
  const r = e.proof?.rows[0];
  if (!r) return document.createTextNode("No matching coach for this waybill.");
  const graph = svg("svg", {
    viewBox: "0 0 425 77",
    role: "img",
    "aria-label": r.bag + " addressed to " + r.route + ", served by " + r.coach,
  });
  const names = [r.bag, r.route, r.coach],
    xs = [42, 214, 384];
  xs.forEach((x, i) => {
    if (i) {
      graph.append(
        svg("path", {
          d: "M" + (xs[i - 1] + 36) + " 32 H" + (x - 38),
          class: "g-edge done",
        }),
      );
      const t = label(
        (x + xs[i - 1]) / 2,
        22,
        i === 1 ? "ADDRESSED_TO →" : "← SERVES",
        "g-legend",
      );
      t.setAttribute("text-anchor", "middle");
      graph.append(t);
    }
    const g = svg("g", { class: "g-node done" });
    g.append(
      svg("rect", {
        class: "plate",
        x: x - 37,
        y: 31,
        width: 74,
        height: 30,
        rx: 5,
      }),
    );
    const t = label(x, 51, String(names[i]));
    t.setAttribute("text-anchor", "middle");
    g.append(t);
    graph.append(g);
  });
  return graph;
}
