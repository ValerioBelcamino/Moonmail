import type { Episode } from "./types";
import { drawingScale, observeCanvasSize } from "./rendering";

// An offline floor plan for browsers where a WebGL context is unavailable.
export class FloorPlan {
  private canvas = document.createElement("canvas");
  private ep?: Episode;
  private tick = 0;
  private focused: string[] = [];
  constructor(host: HTMLElement) {
    host.replaceChildren(this.canvas);
    this.canvas.style.width = this.canvas.style.height = "100%";
    observeCanvasSize(host, () => this.draw(this.tick));
  }
  load(e: Episode) {
    this.ep = e;
    this.draw(0);
  }
  composition(_review: boolean) {}
  view(_top: boolean) {
    this.draw(this.tick);
  }
  focus(entities: string[]) {
    this.focused = entities;
  }
  anchor(name: string) {
    const e = this.ep;
    if (!e) return undefined;
    const f = e.frames[Math.floor(this.tick)],
      l = e.layout,
      o = l.yard?.orders[0];
    const where: Record<string, readonly number[] | undefined> = {
      ...f.robots,
      ...l.gates,
      Fork: f.robots.Jack,
      Shelf: l.shelf,
      Waybill: o?.desk ?? l.desk,
      Socket: o?.door ?? l.socket,
      "Mail lift": o?.lift ?? l.lift,
    };
    if (name === "Bag") name = f.holder === l.destination ? "Socket" : f.holder;
    const cell = where[name];
    if (!cell) return undefined;
    const w = this.canvas.clientWidth,
      h = this.canvas.clientHeight;
    const k = Math.min(w / (l.width + 1), h / (l.depth + 1));
    return {
      x: 0.5 + ((cell[0] + 0.5 - l.width / 2) * k) / w,
      y: 0.5 + ((cell[1] + 0.5 - l.depth / 2) * k) / h,
    };
  }
  draw(t: number) {
    this.tick = t;
    const e = this.ep;
    if (!e) return;
    const c = this.canvas,
      ctx = c.getContext("2d")!,
      w = c.clientWidth,
      h = c.clientHeight;
    if (!w || !h) return;
    const dpr = drawingScale(w, h);
    const pixelsWide = Math.round(w * dpr),
      pixelsTall = Math.round(h * dpr);
    if (c.width !== pixelsWide || c.height !== pixelsTall) {
      c.width = pixelsWide;
      c.height = pixelsTall;
    }
    ctx.setTransform(c.width / w, 0, 0, c.height / h, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const { width, depth, wall, yard } = e.layout;
    const k = Math.min(w / (width + 1), h / (depth + 1)),
      ox = (w - k * width) / 2,
      oz = (h - k * depth) / 2;
    const frame = e.frames[Math.floor(t)];
    ctx.translate(ox, oz);
    ctx.scale(k, k);
    const tile = (x: number, z: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x + 0.025, z + 0.025, 0.95, 0.95);
    };
    for (let x = 0; x < width; x++)
      for (let z = 0; z < depth; z++)
        tile(x, z, x === wall ? "#718270" : x < wall ? "#c3c7a7" : "#d6c9a4");
    if (yard) {
      for (const order of yard.orders) {
        tile(...order.hatch, "#78b9a3");
        tile(...order.shelf, "#a67147");
        tile(...order.desk, "#6298a4");
        tile(...order.door, "#d7b375");
        ctx.fillStyle = frame.signal === "green" ? "#8ed9ae" : "#345864";
        ctx.fillRect(order.door[0] + 1.1, order.row - 1, 0.85, 3);
      }
    } else {
      tile(6, 2, frame.shutter ? "#d6c9a4" : "#a67147");
      tile(6, 5, "#78b9a3");
    }
    if (e.layout.lift) tile(...e.layout.lift, "#72b69d");
    if (e.layout.baggage) tile(...e.layout.baggage, "#ad9670");
    for (const p of e.layout.obstacles) tile(...p, "#91764f");
    for (const name of this.focused) {
      const position = {
        ...frame.robots,
        ...e.layout.gates,
        Socket: e.layout.socket,
        ...(e.layout.lift ? { "Mail lift": e.layout.lift } : {}),
      }[name];
      if (position) {
        ctx.strokeStyle = "#ffde82";
        ctx.lineWidth = 0.09;
        ctx.strokeRect(position[0] + 0.04, position[1] + 0.04, 0.92, 0.92);
      }
    }
    ctx.textAlign = "center";
    ctx.font = ".42px sans-serif";
    for (const [id, pos] of Object.entries(frame.robots)) {
      ctx.fillStyle =
        {
          Wick: "#f5a04c",
          Skim: "#78c79f",
          Jack: "#73b0df",
          Patch: "#b699d7",
        }[yard?.bodies[id] ?? id] ?? "#afd6c0";
      ctx.beginPath();
      ctx.arc(pos[0] + 0.5, pos[1] + 0.5, 0.44, 0, Math.PI * 2);
      ctx.fill();
      if (id === "Jack" && frame.fork_online === false) {
        ctx.strokeStyle = "#b3311a";
        ctx.lineWidth = 0.08;
        ctx.beginPath();
        for (const offset of [0.17, 0.39]) {
          ctx.moveTo(pos[0] + offset, pos[1] + 0.28);
          ctx.lineTo(pos[0] + offset + 0.2, pos[1] - 0.03);
        }
        ctx.stroke();
      }
      if (
        frame.motion?.actor === id &&
        ["pick", "place", "repair", "transfer"].includes(frame.motion.kind)
      ) {
        ctx.strokeStyle = id === "Patch" ? "#a26dd2" : "#b77432";
        ctx.lineWidth = 0.1;
        ctx.beginPath();
        ctx.moveTo(pos[0] + 0.57, pos[1] + 0.43);
        ctx.lineTo(pos[0] + 0.76, pos[1] + 0.2);
        ctx.lineTo(pos[0] + 0.66, pos[1] - 0.04);
        ctx.stroke();
      }
      ctx.fillStyle = "#14342a";
      ctx.fillText(id[0], pos[0] + 0.5, pos[1] + 0.64);
    }
    if (yard) {
      ctx.fillStyle = "#573716";
      ctx.font = "bold .48px sans-serif";
      for (const order of yard.orders) {
        const owner = frame.cargoByBag?.[order.id]?.holder;
        const cell =
          owner === order.coach
            ? order.door
            : owner === "Mail lift"
              ? order.lift
              : (Object.entries(frame.robots).find(
                  ([id]) => id === owner,
                )?.[1] ?? order.shelf);
        ctx.fillStyle = "#ffdd85";
        ctx.fillRect(cell[0] + 0.47, cell[1] - 0.09, 0.63, 0.48);
        ctx.fillStyle = "#573716";
        ctx.fillText(order.id, cell[0] + 0.78, cell[1] + 0.32);
      }
      return;
    }
    const p =
      frame.holder === "Mail lift" && e.layout.lift
        ? e.layout.lift
        : frame.holder === "Shelf"
          ? e.layout.shelf
          : frame.holder === "Socket" || frame.holder === e.layout.destination
            ? e.layout.socket
            : frame.robots[frame.holder as keyof typeof frame.robots];
    if (!p) return;
    ctx.fillStyle = "#ffdc77";
    ctx.font = ".68px Georgia";
    ctx.fillText(
      e.scenario.mission === "mail" ? "✉" : "☾",
      p[0] + 0.8,
      p[1] + 0.3,
    );
  }
}
