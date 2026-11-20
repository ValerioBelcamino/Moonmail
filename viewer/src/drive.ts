import type { Cell, Episode, Frame, YardOrder } from "./types";
import { MathUtils } from "three";

interface Sample {
  x: number;
  z: number;
  yaw: number;
  distance: number;
}
export interface DrivePose extends Sample {}
const turn = (a: number, b: number) =>
  Math.atan2(Math.sin(b - a), Math.cos(b - a));
const bearing = (p: Cell, q: Cell) => Math.atan2(q[0] - p[0], q[1] - p[1]);
const cell = (frame: Frame, id: string) =>
  (frame.robots as Record<string, Cell>)[id];

// The desk cell is where the scanner parks. The worktop sits beside the aisle.
export function deskWorktop([x, z]: Cell, yardRow?: number): Cell {
  if (yardRow === undefined) return [x, z - 0.91];
  return yardRow === 2 ? [x, z + 1] : [x + 1.05, z];
}

// Bake only the newly received ticks. A seek and a live arrival use the same wheel phase.
export class StationDrive {
  private tracks = new Map<string, Sample[]>();
  private length = 0;
  private eventIndex = -1;
  constructor(private ep: Episode) {
    for (const id of Object.keys(ep.layout.starts)) this.tracks.set(id, []);
  }
  private parkingPoint(id: string, i: number, last?: Sample): Cell {
    const frame = this.ep.frames[i],
      p = cell(frame, id);
    if (id !== "Patch" || !last) return p;
    const jack = cell(frame, "Jack"),
      dx = p[0] - jack[0],
      dz = p[1] - jack[1];
    if (Math.abs(dx) + Math.abs(dz) !== 1) return p;
    // Leave room to turn both chassis while the driver reaches into the collar.
    if (frame.fork_online === false)
      return [p[0] + 0.16 * dx, p[1] + 0.16 * dz];
    const old = cell(this.ep.frames[i - 1], id);
    return old[0] === p[0] && old[1] === p[1] ? [last.x, last.z] : p;
  }
  private duringHandling(
    id: string,
    frame: Frame,
    order: YardOrder | undefined,
    op: string,
    actor: string,
  ) {
    const l = this.ep.layout,
      p = cell(frame, id),
      to = (q: Cell) => bearing(p, q);
    const m = frame.motion;
    if (order) {
      if (op === "repair") {
        if (id === "Jack") return to(cell(frame, actor)) - 0.65;
        if (id === actor) return to(cell(frame, "Jack"));
      }
      if (id !== actor) return;
      if (op === "collect") return to([order.shelf[0], order.row - 1.04]);
      if (op === "stage") return to(cell(frame, order.courier));
      if (op === "manifest") return to(deskWorktop(order.desk, order.row));
      if (op === "load")
        return frame.cargoByBag?.[order.id].holder === id ||
          p[0] > order.unload[0] + 1
          ? Math.PI / 2
          : to(cell(frame, order.courier));
      return;
    }
    if (!m || m.kind === "move") return;
    if (m.kind === "repair" && id === m.to)
      return to(cell(frame, m.actor)) - 0.65;
    if (id !== m.actor) return;
    if (m.kind === "pick") return to([l.shelf[0], 0]);
    if (m.kind === "place") return to([l.socket[0], l.socket[1] - 0.8]);
    if (m.kind === "scan" && l.desk) return to(deskWorktop(l.desk));
    if (m.kind === "transfer" || m.kind === "repair") {
      const other = cell(frame, m.from === id ? m.to : m.from);
      if (m.kind === "repair") return to(cell(frame, m.to));
      if (other) return to(other);
    }
    return;
  }
  private extend() {
    const { frames, events, layout } = this.ep;
    for (; this.length < frames.length; this.length++) {
      const i = this.length,
        f = frames[i];
      while (
        this.eventIndex + 1 < events.length &&
        events[this.eventIndex + 1].tick <= (i === 0 ? 0 : i - 1)
      )
        this.eventIndex++;
      const jobs = layout.yard
        ? (events[this.eventIndex]?.planGraph?.nodes.filter(
            (n) => n.state === "running",
          ) ?? [])
        : [];
      for (const [id, track] of this.tracks) {
        const last = track[i - 1],
          [x, z] = this.parkingPoint(id, i, last);
        if (!last) {
          track.push({ x, z, yaw: 0.22, distance: 0 });
          continue;
        }
        const dx = x - last.x,
          dz = z - last.z,
          meters = Math.hypot(dx, dz);
        const job = jobs.find(
          (n) => n.actor === id || (id === "Jack" && n.op.endsWith("/repair")),
        );
        const [bag, op] = job?.op.split("/") ?? [],
          order = layout.yard?.orders.find((o) => o.id === bag);
        const goal = meters
          ? Math.atan2(dx, dz)
          : this.duringHandling(id, f, order, op, job?.actor ?? "");
        track.push({
          x,
          z,
          distance: last.distance + meters,
          yaw: last.yaw + (goal === undefined ? 0 : turn(last.yaw, goal)),
        });
      }
    }
  }
  sample(id: string, at: number): DrivePose {
    this.extend();
    const track = this.tracks.get(id)!,
      i = Math.min(Math.floor(at), track.length - 1);
    const a = track[i],
      b = track[i + 1] ?? a,
      t = Math.min(1, at - i);
    const angle = b.yaw - a.yaw,
      move = b.distance > a.distance,
      pivot = move ? Math.min(0.42, Math.abs(angle) * 0.16) : 0,
      r = MathUtils.clamp((t - pivot) / (1 - pivot), 0, 1),
      prev = track[i - 1],
      next = track[i + 2],
      continues = (u: Sample, v: Sample) =>
        v.x - u.x === b.x - a.x && v.z - u.z === b.z - a.z,
      start = move && pivot < 0.01 && prev && continues(prev, a) ? 1 : 0,
      end = move && next && continues(b, next) ? 1 : 0,
      f =
        r * r * (3 - 2 * r) +
        start * r * (1 - r) * (1 - r) -
        end * r * r * (1 - r),
      yaw = a.yaw + angle * MathUtils.smoothstep(t, 0, pivot || 0.72);
    return {
      x: MathUtils.lerp(a.x, b.x, f),
      z: MathUtils.lerp(a.z, b.z, f),
      yaw,
      distance: MathUtils.lerp(a.distance, b.distance, f),
    };
  }
}
