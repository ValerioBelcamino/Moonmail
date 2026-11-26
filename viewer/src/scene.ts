import * as T from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { deskWorktop, StationDrive, type DrivePose } from "./drive";
import {
  batchSolids,
  contactShadow,
  drawingScale,
  excludeFromBakedShadows,
  observeCanvasSize,
} from "./rendering";
import type { Cell, Episode, Motion, Robot } from "./types";
const brass = 0xc09756,
  metal = 0x405854,
  dark = 0x182e32,
  ivory = 0xf0deb0;
export const colors = {
  Wick: 0xf3a044,
  Skim: 0x72c9a6,
  Jack: 0x609ed0,
  Patch: 0x69b7b1,
};
const up = new T.Vector3(0, 1, 0);
const ease = (x: number, lo = 0, hi = 1) => T.MathUtils.smoothstep(x, lo, hi);

function part(
  parent: T.Object3D,
  geo: T.BufferGeometry,
  color: number,
  x: number,
  y: number,
  z: number,
  glow = false,
) {
  const mat = new T.MeshStandardMaterial({
    color,
    roughness: 0.62,
    metalness: 0.16,
    emissive: glow ? color : 0,
    emissiveIntensity: glow ? 0.6 : 0,
  });
  const mesh = new T.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
function box(
  p: T.Object3D,
  w: number,
  h: number,
  d: number,
  c: number,
  x: number,
  y: number,
  z: number,
  r = 0,
) {
  return part(
    p,
    r && (r >= 0.016 || Math.min(w, h, d) > 0.065)
      ? new RoundedBoxGeometry(
          w,
          h,
          d,
          r < 0.055 ? 1 : 2,
          Math.min(r, h / 2, w / 2, d / 2),
        )
      : new T.BoxGeometry(w, h, d),
    c,
    x,
    y,
    z,
  );
}
function cylinder(
  p: T.Object3D,
  r: number,
  h: number,
  c: number,
  x: number,
  y: number,
  z: number,
) {
  return part(p, new T.CylinderGeometry(r, r, h, 24), c, x, y, z);
}
// Slatted shipping crates sit entirely inside the occupied grid cell.
function shippingCrate(
  parent: T.Object3D,
  x: number,
  z: number,
  w: number,
  h: number,
  d: number,
) {
  const wood = 0xbd925e,
    edge = 0xe0bb83,
    strap = 0x62736b;
  box(parent, w, h, d, wood, x, h / 2, z, 0.035);
  for (const side of [-1, 1]) {
    const face = z + (side * d) / 2;
    for (const u of [-0.32, 0.32]) {
      box(parent, 0.055, h * 0.97, 0.019, strap, x + u * w, h / 2, face);
    }
    for (const v of [0.11, 0.87])
      box(parent, w - 0.012, h * 0.12, 0.028, edge, x, v * h, face);
    const brace = box(parent, w * 0.81, h * 0.076, 0.016, edge, x, h / 2, face);
    brace.rotation.z = side * Math.atan2(h * 0.59, w * 0.79);
  }
  for (const u of [-0.32, 0.32])
    box(parent, 0.056, 0.016, d, strap, x + u * w, h + 0.003, z);
  const seal = box(
    parent,
    0.125,
    0.105,
    0.016,
    ivory,
    x + 0.09,
    h * 0.63,
    z + d / 2 + 0.018,
    0.006,
  );
  seal.rotation.z = -0.1;
}
function sign(
  p: T.Object3D,
  txt: string,
  w: number,
  h: number,
  x: number,
  y: number,
  z: number,
  bg = "#244841",
  fg = "#ffe8aa",
) {
  const c = document.createElement("canvas");
  c.width = 768;
  c.height = Math.round((768 * h) / w);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, c.width - 12, c.height - 12);
  ctx.fillStyle = fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font =
    "bold " +
    Math.round(Math.min(c.height * 0.61, c.width / (txt.length * 0.65))) +
    "px sans-serif";
  ctx.fillText(txt, c.width / 2, c.height * 0.53);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  const mesh = new T.Mesh(
    new T.PlaneGeometry(w, h),
    new T.MeshBasicMaterial({ map: tex, side: T.DoubleSide }),
  );
  mesh.position.set(x, y, z);
  p.add(mesh);
  return mesh;
}

// The links solve a two-joint pose for a symbolic contact point at each movie tick.
class Arm {
  private shoulder: T.Vector3;
  private links: T.Group[] = [];
  private joints: T.Mesh[] = [];
  private hand = new T.Group();
  private fingers: T.Mesh[] = [];
  private bit = new T.Group();
  private upper: number;
  private lower: number;
  constructor(
    private body: T.Group,
    service: boolean,
    probe: boolean,
  ) {
    this.shoulder = service
      ? new T.Vector3(0.36, 0.5, 0.12)
      : new T.Vector3(0.34, 0.71, 0.03);
    this.upper = service ? 0.63 : 0.91;
    this.lower = service ? 0.61 : 0.84;
    const assembly = new T.Group();
    body.add(assembly);
    const color = service ? colors.Patch : colors.Wick;
    for (const [i, length] of [this.upper, this.lower].entries()) {
      const link = new T.Group();
      box(
        link,
        i ? 0.095 : 0.14,
        length,
        0.14,
        i ? ivory : color,
        0,
        0,
        0,
        0.045,
      );
      box(link, 0.042, length * 0.65, 0.043, brass, 0.074, 0, 0, 0.012);
      batchSolids(link);
      assembly.add(link);
      this.links.push(link);
    }
    for (let i = 0; i < 3; i++) {
      const joint = part(
        assembly,
        new T.SphereGeometry(i === 2 ? 0.079 : 0.115, 18, 12),
        i === 1 ? brass : metal,
        0,
        0,
        0,
      );
      if (i < 2) {
        const cap = cylinder(
          joint,
          i === 0 ? 0.061 : 0.071,
          0.032,
          brass,
          i === 0 ? 0.095 : 0.102,
          0,
          0,
        );
        cap.rotation.z = Math.PI / 2;
      }
      this.joints.push(joint);
    }
    assembly.add(this.hand);
    if (service) {
      box(this.hand, 0.17, 0.17, 0.28, color, 0, 0, -0.18, 0.05);
      this.hand.add(this.bit);
      const chuck = cylinder(this.bit, 0.082, 0.12, metal, 0, 0, -0.085);
      chuck.rotation.x = Math.PI / 2;
      const tip = part(
        this.bit,
        new T.CylinderGeometry(
          probe ? 0.018 : 0.043,
          probe ? 0.026 : 0.043,
          0.12,
          6,
        ),
        probe ? 0x73edce : brass,
        0,
        0,
        -0.057,
      );
      tip.rotation.x = Math.PI / 2;
      box(this.bit, 0.026, 0.023, 0.08, ivory, 0.046, 0.012, -0.06);
    } else {
      box(this.hand, 0.37, 0.095, 0.12, metal, 0, 0.045, -0.15, 0.025);
      for (const side of [-1, 1]) {
        const finger = box(
          this.hand,
          0.052,
          0.09,
          0.27,
          ivory,
          side * 0.21,
          0.033,
          -0.013,
          0.015,
        );
        box(
          finger,
          0.069,
          0.038,
          0.082,
          dark,
          -side * 0.013,
          -0.035,
          0.075,
          0.01,
        );
        this.fingers.push(finger);
      }
    }
    this.pose(this.shoulder.clone().add(new T.Vector3(0.12, 0.11, 0.48)), 1, 0);
  }
  pose(goal: T.Vector3, opening: number, turns: number) {
    const delta = goal.clone().sub(this.shoulder),
      horizontal = Math.hypot(delta.x, delta.z);
    const dist = T.MathUtils.clamp(
      delta.length(),
      Math.abs(this.upper - this.lower) + 0.001,
      this.upper + this.lower - 0.001,
    );
    const dir = delta.clone().normalize(),
      end = this.shoulder.clone().addScaledVector(dir, dist);
    const along =
      (this.upper * this.upper - this.lower * this.lower + dist * dist) /
      (2 * dist);
    const bend = Math.sqrt(
      Math.max(0, this.upper * this.upper - along * along),
    );
    let normal =
      horizontal > 0.001
        ? new T.Vector3(
            (-dir.y * delta.x) / horizontal,
            horizontal / delta.length(),
            (-dir.y * delta.z) / horizontal,
          )
        : new T.Vector3(1, 0, 0);
    // Bias the elbow outboard so the forearm folds beside the cabin.
    const outer = new T.Vector3(0.78, 0.85, -0.08);
    outer.addScaledVector(dir, -outer.dot(dir));
    if (outer.lengthSq() > 0.08) normal = outer.normalize();
    const elbow = this.shoulder
      .clone()
      .addScaledVector(dir, along)
      .addScaledVector(normal, bend);
    const points = [this.shoulder, elbow, end];
    this.links.forEach((link, i) => {
      link.position.copy(points[i]).lerp(points[i + 1], 0.5);
      link.quaternion.setFromUnitVectors(
        up,
        points[i + 1].clone().sub(points[i]).normalize(),
      );
    });
    this.joints.forEach((joint, i) => joint.position.copy(points[i]));
    this.hand.position.copy(end);
    this.hand.rotation.y = Math.atan2(delta.x, delta.z);
    this.fingers.forEach(
      (finger, i) =>
        (finger.position.x = (i ? 1 : -1) * (0.256 + 0.075 * opening)),
    );
    this.bit.rotation.z = turns;
    return this.body.localToWorld(end.clone());
  }
}

interface Wheel {
  spin: T.Group;
  side: number;
  radius: number;
}
function runningWheel(
  body: T.Object3D,
  x: number,
  z: number,
  radius: number,
  side: number,
  width = 0.12,
): Wheel {
  // The tyre and hub are fixed on a horizontal axle; only its parent spins.
  const spin = new T.Group();
  spin.position.set(x, radius, z);
  body.add(spin);
  const tire = cylinder(spin, radius, width, dark, 0, 0, 0);
  tire.rotation.z = Math.PI / 2;
  const ox = side * (width / 2 + 0.003);
  const rim = cylinder(spin, radius * 0.73, 0.012, 0x677b7b, ox, 0, 0);
  rim.rotation.z = Math.PI / 2;
  const hub = cylinder(
    spin,
    radius * 0.41,
    0.021,
    brass,
    ox + side * 0.008,
    0,
    0,
  );
  hub.rotation.z = Math.PI / 2;
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3;
    const spoke = box(
      spin,
      0.011,
      radius * 0.38,
      radius * 0.115,
      ivory,
      ox + side * 0.012,
      Math.cos(a) * radius * 0.51,
      Math.sin(a) * radius * 0.51,
    );
    spoke.rotation.x = a;
  }
  batchSolids(spin);
  return { spin, side, radius };
}
function placeMachine(rig: Machine, pose: DrivePose, floor: number) {
  rig.body.position.set(pose.x, floor, pose.z);
  rig.body.rotation.y = pose.yaw;
  const scale = rig.body.scale.x;
  for (const wheel of rig.wheels) {
    const forward =
      pose.distance / scale - wheel.spin.position.x * (pose.yaw - 0.22);
    wheel.spin.rotation.x = forward / wheel.radius;
  }
  rig.body.updateMatrixWorld(true);
}
function rescueLights(rig: Machine, at: number, called: boolean) {
  for (const [i, lamp] of (rig.beacons ?? []).entries()) {
    const intensity = called
      ? 0.4 + 0.95 * (0.5 + 0.5 * Math.sin(at * 3.2 + i * Math.PI))
      : 0.14;
    (lamp.material as T.MeshStandardMaterial).emissiveIntensity = intensity;
  }
}
function railWheels(
  coach: T.Group,
  alongX: boolean,
  stations: number[],
  radius: number,
  halfGauge: number,
) {
  const bogies = new T.Group();
  bogies.rotation.y = alongX ? Math.PI / 2 : 0;
  coach.add(bogies);
  return stations.flatMap((z) =>
    [-1, 1].map((side) =>
      runningWheel(bogies, side * halfGauge, z, radius, side, 0.095),
    ),
  );
}

interface Machine {
  body: T.Group;
  arm?: Arm;
  mast?: T.Group;
  fork?: T.Group;
  collar?: T.Mesh;
  collarRing?: T.Mesh;
  light?: T.Mesh;
  beacons?: T.Mesh[];
  wheels: Wheel[];
}

function character(id: Robot, probe: boolean): Machine {
  const body = new T.Group(),
    color = colors[id],
    wheels: Wheel[] = [];
  const rig: Machine = { body, wheels };
  const low = id === "Skim",
    service = id === "Patch",
    lift = id === "Jack";
  const wheelSize = low ? 0.097 : service ? 0.14 : 0.16;
  box(
    body,
    low ? 0.81 : 0.76,
    low ? 0.14 : 0.26,
    service ? 0.78 : 0.83,
    color,
    0,
    low ? 0.134 : 0.29,
    0,
    0.09,
  );
  box(
    body,
    low ? 0.75 : 0.71,
    0.052,
    0.76,
    metal,
    0,
    low ? 0.085 : 0.18,
    0,
    0.024,
  );
  for (const side of [-1, 1])
    for (const z of [-0.25, 0.245])
      wheels.push(runningWheel(body, side * 0.374, z, wheelSize, side));
  // Recessed bumper with two marker lamps around the front face.
  box(
    body,
    low ? 0.65 : 0.66,
    0.056,
    0.072,
    metal,
    0,
    low ? 0.09 : 0.235,
    low ? 0.416 : 0.407,
    0.017,
  );
  for (const side of [-1, 1]) {
    box(
      body,
      0.07,
      0.031,
      0.021,
      0xffd899,
      side * 0.26,
      low ? 0.096 : 0.241,
      low ? 0.455 : 0.447,
      0.007,
    );
    if (!low)
      box(body, 0.037, 0.075, 0.21, ivory, side * 0.373, 0.335, -0.16, 0.01);
  }
  let faceY = 0.14,
    faceZ = 0.421;
  if (id === "Wick") {
    cylinder(body, 0.16, 0.5, metal, -0.08, 0.62, -0.14);
    for (const y of [0.49, 0.62, 0.75])
      cylinder(body, 0.168, 0.046, brass, -0.08, y, -0.14);
    cylinder(body, 0.095, 0.44, ivory, -0.08, 0.91, -0.14);
    box(body, 0.61, 0.39, 0.48, color, -0.07, 1.15, -0.11, 0.115);
    box(body, 0.56, 0.054, 0.46, ivory, -0.07, 1.36, -0.11, 0.024);
    cylinder(body, 0.025, 0.16, brass, -0.26, 1.43, -0.22);
    part(
      body,
      new T.SphereGeometry(0.046, 12, 10),
      ivory,
      -0.26,
      1.53,
      -0.22,
      true,
    );
    box(body, 0.43, 0.145, 0.17, metal, 0.13, 0.695, 0.015, 0.035);
    box(body, 0.23, 0.09, 0.133, brass, 0.19, 0.776, 0.015, 0.025);
    rig.arm = new Arm(body, false, false);
    faceY = 1.15;
    faceZ = 0.139;
  } else if (lift) {
    box(body, 0.62, 0.47, 0.49, color, 0, 0.57, -0.13, 0.105);
    box(body, 0.62, 0.065, 0.49, ivory, 0, 0.807, -0.13, 0.026);
    const mast = new T.Group(),
      fork = new T.Group();
    mast.position.set(0, 0.23, 0.32);
    body.add(mast);
    for (const side of [-1, 1]) {
      box(mast, 0.086, 0.9, 0.105, brass, side * 0.255, 0.41, 0, 0.023);
      box(mast, 0.036, 0.72, 0.042, ivory, side * 0.255, 0.4, 0.072, 0.01);
      box(fork, 0.102, 0.057, 0.53, metal, side * 0.185, 0, 0.19, 0.018);
      box(fork, 0.104, 0.059, 0.093, ivory, side * 0.185, 0, 0.415, 0.014);
    }
    box(mast, 0.58, 0.085, 0.11, metal, 0, 0.84, 0, 0.022);
    const collarRing = part(
      mast,
      new T.CylinderGeometry(0.117, 0.117, 0.045, 20),
      0xa85833,
      0.27,
      0.21,
      0.072,
    );
    collarRing.rotation.x = Math.PI / 2;
    rig.collarRing = collarRing;
    box(fork, 0.52, 0.12, 0.11, metal, 0, 0.046, -0.005, 0.02);
    mast.add(fork);
    rig.collar = part(
      mast,
      new T.CylinderGeometry(0.077, 0.077, 0.07, 6),
      0xffcb73,
      0.27,
      0.21,
      0.104,
    );
    rig.collar.rotation.x = Math.PI / 2;
    rig.mast = mast;
    rig.fork = fork;
    cylinder(body, 0.083, 0.09, brass, -0.21, 0.86, -0.16);
    rig.light = part(
      body,
      new T.SphereGeometry(0.077, 14, 12),
      0xff6649,
      -0.21,
      0.93,
      -0.16,
      true,
    );
    faceY = 0.61;
    faceZ = 0.125;
  } else if (service) {
    // A cream service van, with a mint belt line, rear doors and outboard tool mount.
    box(body, 0.66, 0.44, 0.64, 0xe9e5ce, -0.035, 0.55, -0.095, 0.095);
    box(body, 0.68, 0.075, 0.68, 0xf5eed6, -0.035, 0.79, -0.1, 0.035);
    box(body, 0.69, 0.08, 0.72, 0x438d8a, -0.035, 0.4, -0.065, 0.026);
    box(body, 0.6, 0.15, 0.2, 0xd8e4d9, -0.035, 0.455, 0.245, 0.065);
    box(body, 0.55, 0.17, 0.045, 0x526f74, -0.035, 0.645, 0.227, 0.045);
    for (const side of [-1, 1]) {
      const x = -0.035 + side * 0.336;
      box(body, 0.018, 0.14, 0.19, 0x47676c, x, 0.65, 0.087, 0.012);
      const medallion = cylinder(
        body,
        0.125,
        0.022,
        0x327674,
        x,
        0.594,
        -0.185,
      );
      medallion.rotation.z = Math.PI / 2;
      box(
        body,
        0.015,
        0.15,
        0.043,
        0xffedc7,
        x + side * 0.02,
        0.594,
        -0.185,
        0.006,
      );
      box(
        body,
        0.016,
        0.043,
        0.15,
        0xffedc7,
        x + side * 0.022,
        0.594,
        -0.185,
        0.006,
      );
      box(body, 0.08, 0.039, 0.065, 0xf6b664, side * 0.244, 0.49, 0.338, 0.009);
      box(body, 0.005, 0.23, 0.025, 0x829998, x, 0.595, -0.035);
    }
    for (const x of [-0.17, 0.1]) {
      box(body, 0.24, 0.28, 0.024, 0xc7d3c9, x, 0.55, -0.417, 0.02);
      box(body, 0.15, 0.084, 0.026, 0x4e696c, x, 0.618, -0.435, 0.009);
    }
    box(body, 0.4, 0.095, 0.021, 0x34777c, -0.035, 0.475, -0.445, 0.007);
    for (const x of [-0.19, -0.09, 0.01, 0.11]) {
      const stripe = box(
        body,
        0.032,
        0.075,
        0.009,
        0xf8d795,
        x,
        0.475,
        -0.459,
        0.003,
      );
      stripe.rotation.z = -0.55;
    }
    box(body, 0.125, 0.036, 0.016, 0x358889, -0.17, 0.558, -0.447, 0.003);
    box(body, 0.037, 0.125, 0.017, 0x358889, -0.17, 0.558, -0.449, 0.003);
    box(body, 0.44, 0.04, 0.125, metal, -0.035, 0.844, -0.045, 0.018);
    rig.beacons = [0x65dce8, 0xffad56].map((c, i) =>
      part(
        body,
        new RoundedBoxGeometry(0.15, 0.077, 0.1, 2, 0.025),
        c,
        -0.168 + i * 0.268,
        0.896,
        -0.045,
        true,
      ),
    );
    for (const z of [-0.33, -0.28, -0.23])
      box(body, 0.23, 0.014, 0.017, metal, -0.045, 0.835, z);
    rig.arm = new Arm(body, true, probe);
    faceY = 0.597;
    faceZ = 0.242;
  } else {
    box(body, 0.64, 0.045, 0.6, metal, 0, 0.222, -0.02, 0.018);
    for (const side of [-1, 1]) {
      box(body, 0.047, 0.037, 0.56, brass, side * 0.303, 0.248, -0.018, 0.012);
      box(
        body,
        0.061,
        0.065,
        0.16,
        0x438478,
        side * 0.346,
        0.201,
        -0.235,
        0.014,
      );
    }
    for (const z of [-0.17, 0, 0.17])
      box(body, 0.52, 0.012, 0.034, 0x79918b, 0, 0.25, z, 0.004);
  }
  const cx = id === "Wick" ? -0.07 : service ? -0.035 : 0;
  box(
    body,
    low ? 0.47 : 0.45,
    low ? 0.11 : 0.193,
    0.044,
    dark,
    cx,
    faceY,
    faceZ,
    0.04,
  );
  for (const side of [-1, 1]) {
    const eye = part(
      body,
      new T.SphereGeometry(low ? 0.037 : 0.048, 14, 10),
      0xffefbe,
      cx + side * 0.114,
      faceY,
      faceZ + 0.021,
      true,
    );
    eye.scale.set(0.82, 1, 0.61);
  }
  if (id === "Wick") {
    for (const z of [-0.28, -0.195, -0.11])
      box(body, 0.018, 0.035, 0.046, metal, -0.371, 1.14, z, 0.004);
    box(body, 0.29, 0.026, 0.055, brass, -0.07, 1.258, 0.146, 0.009);
  }
  if (lift) {
    for (const side of [-1, 1]) {
      box(
        body,
        0.045,
        0.27,
        0.095,
        0x304655,
        side * 0.277,
        0.54,
        -0.315,
        0.012,
      );
      box(
        body,
        0.075,
        0.055,
        0.075,
        0xffdc87,
        side * 0.23,
        0.785,
        0.127,
        0.013,
      );
    }
  }
  if (!low) {
    box(
      body,
      0.08,
      0.017,
      0.013,
      0xa7baab,
      cx,
      faceY - 0.06,
      faceZ + 0.025,
      0.006,
    );
  }
  // An enamel visor, inset bumper and two-tone panels give each body a readable silhouette.
  if (id === "Wick") {
    box(body, 0.55, 0.036, 0.15, color, -0.07, 1.276, 0.114, 0.017);
    for (const side of [-1, 1]) {
      const ear = cylinder(
        body,
        0.108,
        0.044,
        metal,
        -0.07 + side * 0.3,
        1.13,
        -0.096,
      );
      ear.rotation.z = Math.PI / 2;
      const hub = cylinder(
        body,
        0.071,
        0.012,
        brass,
        -0.07 + side * 0.326,
        1.13,
        -0.096,
      );
      hub.rotation.z = Math.PI / 2;
    }
  } else if (lift) {
    box(body, 0.58, 0.042, 0.37, 0x83a6a9, 0, 0.795, -0.075, 0.017);
    for (const side of [-1, 1]) {
      box(body, 0.08, 0.025, 0.39, ivory, side * 0.3, 0.405, 0.03, 0.009);
      for (const z of [-0.17, -0.085, 0]) {
        const slash = box(
          body,
          0.01,
          0.083,
          0.042,
          0xffc66b,
          side * 0.382,
          0.305,
          z,
        );
        slash.rotation.x = -0.5;
      }
    }
  } else if (service) {
    for (const side of [-1, 1]) {
      box(
        body,
        0.014,
        0.022,
        0.55,
        0xf0ac62,
        -0.035 + side * 0.345,
        0.445,
        -0.065,
        0.005,
      );
      const dome = part(
        body,
        new T.SphereGeometry(0.061, 16, 10),
        side < 0 ? 0x7fe7ed : 0xffb85c,
        -0.035 + side * 0.134,
        0.921,
        -0.045,
      );
      dome.scale.set(1.05, 0.58, 0.69);
    }
  } else {
    for (const side of [-1, 1]) {
      box(
        body,
        0.049,
        0.047,
        0.49,
        0xc8dcc8,
        side * 0.343,
        0.221,
        -0.008,
        0.018,
      );
      for (const z of [-0.08, 0, 0.08])
        box(body, 0.014, 0.016, 0.036, 0x385b57, side * 0.371, 0.223, z);
    }
  }
  for (const side of [-1, 1]) {
    const trim = box(
      body,
      0.036,
      low ? 0.018 : 0.03,
      0.015,
      0x8bbec3,
      cx + side * (low ? 0.2 : 0.19),
      faceY,
      faceZ + 0.025,
      0.006,
    );
    trim.rotation.z = side * 0.2;
  }
  batchSolids(body, [rig.light, ...(rig.beacons ?? [])]);
  if (rig.fork) batchSolids(rig.fork);
  if (rig.mast) batchSolids(rig.mast, [rig.collar, rig.collarRing]);
  excludeFromBakedShadows(body);
  contactShadow(body, 0.58, 0.62);
  return rig;
}

function postbag(bag: T.Group, cm: number, id = "47") {
  const cloth = part(
    bag,
    new T.LatheGeometry(
      [
        new T.Vector2(0.12, 0.025),
        new T.Vector2(0.222, 0.055),
        new T.Vector2(0.24, 0.18),
        new T.Vector2(0.205, 0.3),
        new T.Vector2(0.109, 0.39),
        new T.Vector2(0.09, 0.424),
        new T.Vector2(0.134, 0.479),
        new T.Vector2(0.086, 0.48),
      ],
      36,
    ),
    0xd8493c,
    0,
    0,
    0,
  );
  cloth.scale.set(1.02, cm / 18, 0.78);
  for (const side of [-1, 1]) {
    const seam = part(
      bag,
      new T.TorusGeometry(0.222, 0.007, 5, 24),
      0xf7a077,
      0,
      (0.191 * cm) / 18,
      0,
    );
    seam.rotation.y = side * 0.72;
    seam.scale.set(0.87, (0.79 * cm) / 18, 1);
  }
  const knot = part(
    bag,
    new T.TorusGeometry(0.101, 0.02, 8, 24),
    brass,
    0,
    (0.402 * cm) / 18,
    0,
  );
  knot.rotation.x = Math.PI / 2;
  knot.scale.y = 0.82;
  box(
    bag,
    0.103,
    0.14,
    0.028,
    ivory,
    0.09,
    (0.3 * cm) / 18,
    0.155,
    0.009,
  ).rotation.z = -0.22;
  const badge = sign(
    bag,
    id,
    0.125,
    0.103,
    0,
    (0.19 * cm) / 18,
    0.188,
    "#e7d6a6",
    "#713924",
  );
  badge.rotation.z = 0.06;
  box(bag, 0.46, 0.036, 0.4, metal, 0, 0.004, 0, 0.025);
  batchSolids(bag);
  excludeFromBakedShadows(bag);
}

function liftAndSet(
  src: T.Vector3,
  dest: T.Vector3,
  t: number,
  clearance: number,
) {
  const top = Math.max(src.y, dest.y) + clearance;
  const p = src.clone().lerp(dest, ease(t, 0.23, 0.72));
  p.y =
    t < 0.45
      ? T.MathUtils.lerp(src.y, top, ease(t, 0, 0.26))
      : T.MathUtils.lerp(top, dest.y, ease(t, 0.72, 1));
  return p;
}
function traySeat(rig: Machine, body: Robot) {
  const p =
    body === "Wick"
      ? new T.Vector3(0.4, 0.75, 0.49)
      : body === "Jack"
        ? new T.Vector3(0, 0.36, 0.56)
        : new T.Vector3(0, 0.27, -0.015);
  return rig.body.localToWorld(p);
}
function setForkTray(rig: Machine, world: T.Vector3) {
  const p = rig.mast!.worldToLocal(world.clone());
  rig.fork!.position.set(
    0,
    Math.max(-0.07, p.y - 0.046),
    T.MathUtils.clamp(p.z - 0.215, -0.25, 0.57),
  );
}
function serviceFault(
  jack: Machine,
  at: number,
  faultAt: number | undefined,
  online: boolean,
  repair: number,
) {
  const age = faultAt === undefined ? 0 : Math.max(0, at - faultAt);
  const lean =
    online || faultAt === undefined
      ? 0
      : (0.13 + 0.87 * ease(age, 0, 0.52)) * (1 - ease(repair, 0.42, 0.94));
  jack.mast!.rotation.z =
    lean *
    (-0.63 +
      (age < 0.55
        ? 0.065 * Math.sin(age * 15) * (1 - ease(age, 0.18, 0.55))
        : 0));
  jack.mast!.rotation.x = lean * 0.08;
  const rim = jack.collarRing!.material as T.MeshStandardMaterial;
  const rimColor =
    faultAt === undefined ? 0xa85833 : online ? 0x65c7a4 : 0xf28250;
  rim.color.setHex(rimColor);
  rim.emissive.setHex(faultAt === undefined ? 0 : rimColor);
  rim.emissiveIntensity = online ? 0.33 : 0.46;
  jack.light!.visible = !online;
  jack.light!.scale.setScalar(1.04);
  jack.body.updateMatrixWorld(true);
}

// The wide camera uses the same articulated bodies as the close-up station.
class JunctionMiniature {
  private robots = new Map<string, Machine>();
  private bags = new Map<string, T.Group>();
  private coaches = new T.Group();
  private drive: StationDrive;
  private rail: Wheel[] = [];
  private light: T.Mesh<T.BufferGeometry, T.MeshStandardMaterial>;
  private rings = new Map<string, T.Mesh>();
  private labels = new Map<string, HTMLElement>();
  constructor(
    root: T.Group,
    private ep: Episode,
    host: HTMLElement,
  ) {
    this.drive = new StationDrive(ep);
    const yard = ep.layout.yard!,
      w = ep.layout.width,
      d = ep.layout.depth;
    const mx = (w - 1) / 2,
      mz = (d - 1) / 2;
    box(root, w + 1.12, 0.43, d + 1.12, 0x715c45, mx, -0.29, mz, 0.15);
    box(root, w + 0.87, 0.1, d + 0.85, brass, mx, -0.12, mz);
    box(root, w, 0.12, d, 0x586d6b, mx, -0.055, mz);
    const hues = [0x5f8b7d, 0x6f8993, 0x9f8264];
    for (const [i, o] of yard.orders.entries()) {
      const z = o.row,
        color = hues[i];
      box(root, w - 0.1, 0.032, 3.8, i % 2 ? 0x76817c : 0x6d7974, mx, 0.017, z);
      box(root, 20, 0.025, 0.07, color, 12, 0.052, z);
      for (const x of [1, 4, 7, 10, 13, 16, 19, 22])
        box(root, 0.055, 0.024, 3.8, 0x52635f, x, 0.042, z);
      for (const dz of [-1.4, 1.4]) {
        box(root, 0.28, 0.74, 1.8, metal, 12, 0.39, z + dz, 0.05);
        box(root, 0.33, 0.06, 1.8, brass, 12, 0.77, z + dz);
      }
      box(root, 0.34, 0.13, 1.18, color, 12, 0.91, z);
      const sx = o.shelf[0];
      box(root, 1.64, 0.12, 0.69, brass, sx, 1.18, z - 1.04);
      for (const dx of [-0.77, 0.77])
        for (const dz of [-0.4, 0.4])
          box(
            root,
            0.12,
            1.17,
            0.12,
            metal,
            sx + dx,
            0.57,
            z - 1.04 + dz * 0.71,
          );
      box(root, 1.3, 0.55, 0.65, 0x8b6946, sx, 0.32, z - 1.04, 0.04);
      const [workX, workZ] = deskWorktop(o.desk, o.row);
      box(root, 0.69, 0.62, 0.52, metal, workX, 0.32, workZ, 0.045);
      box(root, 0.65, 0.06, 0.45, ivory, workX, 0.65, workZ, 0.02);
      box(root, 2.3, 0.07, 1, color, 15.5, 0.06, z);
      box(root, 0.34, 0.43, 0.48, metal, 23.85, 0.24, z, 0.04);
      for (const dz of [-0.25, 0.25])
        box(root, 0.83, 0.09, 0.045, brass, 23.94, 0.625, z + dz);
      for (let dx = 0; dx < 0.8; dx += 0.15) {
        const roller = cylinder(root, 0.045, 0.48, metal, 23.57 + dx, 0.645, z);
        roller.rotation.x = Math.PI / 2;
      }
      if (o.id === "47") {
        box(root, 0.82, 0.12, 0.79, 0x4f8d81, o.lift[0], 0.1, o.lift[1], 0.035);
        for (const dz of [-0.24, 0, 0.24])
          box(root, 0.63, 0.03, 0.045, brass, o.lift[0], 0.175, o.lift[1] + dz);
      }
      const coach = new T.Group();
      coach.position.set(24.55, 0.08, z);
      this.coaches.add(coach);
      box(coach, 1.37, 0.12, 3.48, brass, 0, 0.545, 0, 0.04);
      box(coach, 0.1, 0.96, 3.48, 0x315867, 0.63, 0.98, 0, 0.04);
      for (const side of [-1, 1]) {
        box(coach, 1.36, 0.96, 1.16, 0x315867, 0, 0.98, side * 1.16, 0.065);
        box(coach, 1.45, 0.16, 1.27, metal, 0, 1.49, side * 1.18, 0.055);
        box(coach, 0.055, 0.9, 0.065, brass, -0.66, 0.97, side * 0.6, 0.012);
      }
      box(coach, 0.5, 0.14, 1.19, metal, 0.47, 1.48, 0, 0.04);
      for (const az of [-1.25, -0.67, 0.65, 1.23])
        box(coach, 0.04, 0.4, 0.39, 0xe6c785, -0.68, 1.02, az, 0.03);
      this.rail.push(...railWheels(coach, false, [-1.22, 1.22], 0.215, 0.44));
      batchSolids(coach);
      excludeFromBakedShadows(coach);
      contactShadow(coach, 0.88, 1.88, -0.045);
      const bag = new T.Group();
      postbag(bag, ep.scenario.parcel_cm, o.id);
      root.add(bag);
      this.bags.set(o.id, bag);
      const label = sign(
        root,
        o.coach.toUpperCase() + "   /   BAG " + o.id,
        3.13,
        0.4,
        21.7,
        1.03,
        z - 1.28,
      );
      label.rotation.y = -0.38;
    }
    root.add(this.coaches);
    for (const x of [24.1, 24.95])
      box(root, 0.13, 0.1, 23, metal, x, -0.01, 10);
    for (let z = -1; z < 21; z += 0.55)
      box(root, 1.45, 0.1, 0.16, 0x554a39, 24.52, -0.085, z);
    for (const [x, z] of ep.layout.obstacles)
      shippingCrate(root, x, z, 0.9, 0.64, 0.88);
    for (const [name, type] of Object.entries(yard.bodies)) {
      const rig = character(type, ep.scenario.service_kit === "probe");
      rig.body.scale.setScalar(0.92);
      root.add(rig.body);
      this.robots.set(name, rig);
      const ring = new T.Mesh(
        new T.RingGeometry(0.63, 0.77, 28),
        new T.MeshBasicMaterial({ color: 0xf1c373, side: T.DoubleSide }),
      );
      ring.rotation.x = -Math.PI / 2;
      root.add(ring);
      this.rings.set(name, ring);
      const label = document.createElement("span");
      label.className =
        "body-label junction-label working " + type.toLowerCase();
      label.hidden = true;
      host.append(label);
      this.labels.set(name, label);
    }
    cylinder(root, 0.09, 2.0, metal, 23.8, 1, 11.85);
    this.light = part(
      root,
      new T.SphereGeometry(0.21, 12, 8),
      0xeb9277,
      23.8,
      2.12,
      11.85,
      true,
    );
    batchSolids(root, [this.light]);
  }
  anchor(name: string) {
    const site = this.robots.get(name);
    if (site) return site.body.position.clone().add(new T.Vector3(0, 0.62, 0));
    const order = this.ep.layout.yard!.orders[0];
    if (name === "Socket")
      return new T.Vector3(order.door[0], 0.92, order.door[1]);
    if (name === "Waybill")
      return new T.Vector3(order.desk[0], 0.58, order.desk[1]);
    if (name === "Mail lift")
      return new T.Vector3(order.lift[0], 0.45, order.lift[1]);
    return undefined;
  }
  dispose() {
    for (const label of this.labels.values()) label.remove();
  }
  draw(at: number, camera: T.OrthographicCamera, ratio: number, top: boolean) {
    const ep = this.ep,
      a = ep.frames[Math.floor(at)],
      yard = ep.layout.yard!;
    const history = ep.events.filter((e) => e.tick <= at),
      event = history.at(-1);
    const jobs =
      event?.planGraph?.nodes.filter((n) => n.state === "running") ?? [];
    const active = new Map(jobs.map((n) => [n.actor, n.op.split("/")[0]]));
    const pickerTargets = new Map<string, { at: T.Vector3; open: number }>();
    const forkTargets = new Map<string, T.Vector3>();
    for (const [id, rig] of this.robots) {
      placeMachine(rig, this.drive.sample(id, at), 0.058);
      const ring = this.rings.get(id)!;
      ring.visible = active.has(id);
      ring.position.set(rig.body.position.x, 0.092, rig.body.position.z);
      if (rig.fork)
        forkTargets.set(
          id,
          rig.body.localToWorld(new T.Vector3(0, 0.27, 0.41)),
        );
    }
    const release = ep.frames.find((fr) => fr.signal === "green")?.tick;
    const since = release === undefined ? 0 : Math.max(0, at - release);
    this.coaches.position.z = 7.8 * ease(since, 0.6, 6.6);
    for (const wheel of this.rail)
      wheel.spin.rotation.x = this.coaches.position.z / wheel.radius;
    this.light.material.color.setHex(
      a.signal === "green" ? 0x80e1ae : 0xef886c,
    );
    this.light.material.emissive.copy(this.light.material.color);

    // Each station animation starts when the recorded actors reach their work cells.
    const local = (id: string, p: T.Vector3) =>
      this.robots.get(id)!.body.localToWorld(p);
    const cell = (i: number, id: string) =>
      (ep.frames[i].robots as Record<string, Cell>)[id];
    function progress(
      uid: string,
      ticks: number,
      arrived: (i: number) => boolean,
    ) {
      const start = history
        .filter((e) => e.kind === "assignment" && e.active?.includes(uid))
        .at(-1)?.tick;
      if (start === undefined) return 0;
      let i = Math.floor(at);
      if (!arrived(i)) return 0;
      while (i > start && arrived(i - 1)) i--;
      return T.MathUtils.clamp((at - i) / ticks, 0, 1);
    }
    const atCell = (i: number, who: string, target: Cell) => {
      const c = cell(i, who);
      return c[0] === target[0] && c[1] === target[1];
    };
    for (const order of yard.orders) {
      const bag = this.bags.get(order.id)!,
        owner = a.cargoByBag![order.id].holder;
      const shelf = new T.Vector3(order.shelf[0], 1.256, order.row - 0.82),
        onboard = new T.Vector3(
          24.57,
          0.7,
          order.row + this.coaches.position.z,
        ),
        bridge = new T.Vector3(23.86, 0.7, order.row);
      const seat = (id: string) =>
        traySeat(this.robots.get(id)!, yard.bodies[id]);
      const lift = new T.Vector3(order.lift[0], 0.29, order.lift[1]);
      let location = this.robots.has(owner)
        ? seat(owner)
        : owner === order.coach
          ? onboard
          : owner === "Mail lift"
            ? lift
            : shelf;
      const picker = order.picker,
        rest = this.robots.has(picker) ? local(picker, new T.Vector3(0.54, 0.74, 0.34)) : shelf;
      let hand = owner === picker ? location : rest,
        open = owner === picker ? 0 : 1;
      if (yard.bodies[owner] === "Jack") forkTargets.set(owner, location);
      for (const job of jobs.filter((n) => n.op.startsWith(order.id + "/"))) {
        const op = job.op.split("/")[1],
          who = job.actor;
        if (op === "collect") {
          const p = progress(job.uid, 2, (i) => atCell(i, who, order.shelf));
          hand = rest.clone().lerp(shelf, ease(p, 0, 0.34));
          open = 1 - ease(p, 0.32, 0.45);
          if (p > 0.45)
            hand = location = liftAndSet(
              shelf,
              seat(who),
              ease(p, 0.45, 1),
              0.16,
            );
        } else if (op === "stage") {
          const p = progress(
            job.uid,
            2,
            (i) =>
              atCell(i, picker, order.handoff) &&
              atCell(i, order.courier, order.deck),
          );
          location = liftAndSet(
            seat(picker),
            seat(order.courier),
            ease(p, 0, 0.72),
            0.15,
          );
          hand = location.clone().lerp(rest, ease(p, 0.79, 1));
          open = ease(p, 0.7, 0.79);
        } else if (op === "load") {
          if (owner === order.courier) {
            const p = progress(
              job.uid,
              2,
              (i) =>
                atCell(i, who, order.unload) &&
                atCell(i, order.courier, order.berth),
            );
            const tray = seat(who),
              src = seat(order.courier);
            const forks =
              p < 0.38
                ? tray.clone().lerp(src, ease(p, 0, 0.37))
                : liftAndSet(src, tray, ease(p, 0.38, 1), 0.06);
            forkTargets.set(who, forks);
            location = p < 0.38 ? src : forks;
          } else if (owner === who) {
            const p = progress(job.uid, 2, (i) => atCell(i, who, order.door));
            const forks = liftAndSet(seat(who), bridge, ease(p, 0, 0.65), 0.06);
            location =
              p > 0.65
                ? bridge.clone().lerp(onboard, ease(p, 0.65, 0.95))
                : forks.clone();
            forkTargets.set(who, forks.lerp(seat(who), ease(p, 0.74, 1)));
          }
        } else if (op === "hoist" && owner === "Mail lift") {
          const p = progress(
            job.uid,
            14,
            (i) => ep.frames[i].cargoByBag![order.id].holder === "Mail lift",
          );
          location = liftAndSet(lift, onboard, p, 0.1);
        }
      }
      if (this.robots.has(picker)) pickerTargets.set(picker, { at: hand, open });
      bag.position.copy(location);
    }
    for (const [id, p] of pickerTargets) {
      const rig = this.robots.get(id)!;
      rig.arm!.pose(rig.body.worldToLocal(p.at.clone()), p.open, 0);
    }
    const repair = jobs.find((n) => n.op.endsWith("/repair"));
    const jack = this.robots.get("Jack"),
      patch = this.robots.get(repair?.actor ?? "Patch");
    const repairProgress = repair
      ? progress(repair.uid, 4, (i) => {
          const p = cell(i, repair.actor),
            j = cell(i, "Jack");
          return Math.abs(p[0] - j[0]) + Math.abs(p[1] - j[1]) === 1;
        })
      : 0;
    const fault = history.find((e) => e.kind === "fork fault");
    if (jack) serviceFault(
      jack,
      at,
      fault?.tick,
      a.fork_online !== false,
      repairProgress,
    );
    for (const [id, point] of forkTargets)
      setForkTray(this.robots.get(id)!, point);
    if (patch && jack) {
      const rest = new T.Vector3(0.58, 0.73, 0.38);
      const contact = patch.body.worldToLocal(
        jack.collar!.getWorldPosition(new T.Vector3()),
      );
      rest.lerp(
        contact,
        ease(repairProgress, 0, 0.22) * (1 - ease(repairProgress, 0.84, 1)),
      );
      patch.arm!.pose(rest, 0, Math.PI * 14 * repairProgress);
      rescueLights(patch, at, !!fault && a.fork_online === false);
    }
    const w = ep.layout.width,
      d = ep.layout.depth;
    const aim = new T.Vector3((w - 1) / 2, 0, (d - 1) / 2);
    camera.position
      .copy(aim)
      .add(top ? new T.Vector3(0, 32, 0.01) : new T.Vector3(-3, 22, 25));
    camera.lookAt(aim);
    const h = Math.max(d * 0.84, (w + 1.4) / ratio);
    Object.assign(camera, {
      left: (-h * ratio) / 2,
      right: (h * ratio) / 2,
      top: h / 2,
      bottom: -h / 2,
      near: 0.05,
      far: 110,
    });
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    for (const [id, label] of this.labels) {
      const fault = id === "Jack" && a.fork_online === false && !active.has(id);
      label.hidden = !active.has(id) && !fault;
      if (label.hidden) continue;
      const screen = this.robots
        .get(id)!
        .body.position.clone()
        .add(new T.Vector3(0, 1.72, 0))
        .project(camera);
      label.style.left = (screen.x + 1) * 50 + "%";
      label.style.top = (1 - screen.y) * 50 + "%";
      const caption = id + " · " + (fault ? "forks" : active.get(id));
      if (label.textContent !== caption) label.textContent = caption;
      label.classList.toggle("broken", fault);
    }
  }
}

export class Depot {
  private junction?: JunctionMiniature;
  private drive?: StationDrive;
  private rail: Wheel[] = [];
  private liftRail?: T.Group;
  private readonly scene = new T.Scene();
  private readonly root = new T.Group();
  private readonly camera = new T.OrthographicCamera();
  private readonly renderer: T.WebGLRenderer;
  private sun = new T.DirectionalLight(0xffe3b7, 2.05);
  private rigs = {} as Partial<Record<Robot, Machine>>;
  private names: Robot[] = [];
  private labels = new Map<Robot, HTMLElement>();
  private at = 0;
  private mailbag = new T.Group();
  private shutter = new T.Group();
  private gateLamp?: T.Mesh<T.BufferGeometry, T.MeshStandardMaterial>;
  private windows: T.Mesh[] = [];
  private markers = new Map<string, T.Mesh>();
  private ep?: Episode;
  private top = false;
  private review = false;
  composition(review: boolean) {
    this.review = review;
  }
  private ratio = 1;
  private motionScale = 1;
  private lateFrames = 0;
  private socket = new T.Vector3();
  private train?: T.Group;
  private door?: T.Group;
  private scanLine?: T.Mesh;
  private signature?: T.Group;
  private scanLamp?: T.Mesh<T.BufferGeometry, T.MeshStandardMaterial>;
  private signalLamp?: T.Mesh<T.BufferGeometry, T.MeshStandardMaterial>;
  constructor(private host: HTMLElement) {
    this.renderer = new T.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = T.BasicShadowMap;
    this.renderer.setClearColor(0x192d2b, 0);
    this.renderer.outputColorSpace = T.SRGBColorSpace;
    this.renderer.toneMapping = T.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    host.append(this.renderer.domElement);
    this.renderer.domElement.setAttribute(
      "aria-label",
      "Animated postal depot and robot crew",
    );
    this.scene.add(this.root);
    this.scene.add(new T.HemisphereLight(0xdceeff, 0x91988e, 1.74));
    const rimLight = new T.DirectionalLight(0xaedeea, 0.76);
    rimLight.position.set(3, 6, -8);
    this.scene.add(rimLight);
    const sun = this.sun;
    sun.position.set(0, 12, 8);
    sun.target.position.set(6, 0, 3);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, {
      left: -12,
      right: 12,
      top: 12,
      bottom: -12,
      far: 40,
    });
    sun.shadow.normalBias = 0.025;
    this.scene.add(sun, sun.target);
    observeCanvasSize(host, () => this.resize());
  }
  // Only count frames that actually drew moving geometry. A still explanation
  // should keep its native detail, even after a slow trip across the floor.
  noteMovingFrame(milliseconds: number) {
    this.lateFrames = milliseconds > 48 ? this.lateFrames + 1 : 0;
    if (this.lateFrames < 5 || this.motionScale <= 0.55) return;
    this.lateFrames = 0;
    this.motionScale = Math.max(0.55, this.motionScale * 0.76);
    this.resize();
  }
  restoreDetail() {
    this.lateFrames = 0;
    if (this.motionScale === 1) return;
    this.motionScale = 1;
    this.resize();
  }
  private resize() {
    const { width: w, height: h } = this.host.getBoundingClientRect();
    if (!w || !h) return;
    const full = drawingScale(w, h);
    const scale = Math.min(full, Math.max(1, full * this.motionScale));
    this.renderer.setDrawingBufferSize(w, h, scale);
    this.ratio = w / h;
    if (this.ep) this.draw(this.at);
  }
  view(top: boolean) {
    this.top = top;
    this.draw(this.at);
  }
  anchor(name: string) {
    let point = this.junction?.anchor(name === "Fork" ? "Jack" : name);
    if (!this.junction) {
      const rig = this.rigs[name as Robot];
      if (rig)
        point = rig.body.position
          .clone()
          .add(
            new T.Vector3(
              0,
              name === "Wick" ? 1.06 : name === "Skim" ? 0.24 : 0.64,
              0,
            ),
          );
      else if (name === "Bag")
        point = this.mailbag.position.clone().add(new T.Vector3(0, 0.32, 0));
      else if (name === "Fork" && this.rigs.Jack?.collar)
        point = this.rigs.Jack.collar.getWorldPosition(new T.Vector3());
      else {
        const marker = this.markers.get(name);
        if (marker)
          point = marker.position
            .clone()
            .add(new T.Vector3(0, name === "Waybill" ? 0.53 : 0.19, 0));
      }
    }
    if (!point) return undefined;
    point.project(this.camera);
    return { x: (point.x + 1) / 2, y: (1 - point.y) / 2 };
  }
  focus(entities: string[]) {
    for (const [name, marker] of this.markers)
      marker.visible = entities.includes(name);
  }
  load(ep: Episode) {
    this.ep = ep;
    this.drive = new StationDrive(ep);
    this.at = 0;
    this.rail = [];
    this.liftRail = undefined;
    this.train = undefined;
    this.door = undefined;
    this.scanLamp = undefined;
    this.scanLine = undefined;
    this.signature = undefined;
    this.signalLamp = undefined;
    this.names = Object.keys(ep.layout.starts) as Robot[];
    this.rigs = {};
    for (const label of this.labels.values()) label.remove();
    this.labels.clear();
    this.root.traverse((o) => {
      if (o instanceof T.Mesh) {
        o.geometry.dispose();
        for (const m of [o.material].flat()) {
          m.map?.dispose();
          m.dispose();
        }
      }
    });
    this.root.clear();
    this.windows = [];
    this.markers.clear();
    this.shutter = new T.Group();
    const r = this.root,
      l = ep.layout;
    const cx = (l.width - 1) / 2,
      cz = (l.depth - 1) / 2;
    this.sun.position.set(cx - 6, 14, cz + 6);
    this.sun.target.position.set(cx, 0, cz);
    const span = Math.max(l.width * 0.64, l.depth * 0.8);
    Object.assign(this.sun.shadow.camera, {
      left: -span,
      right: span,
      top: span,
      bottom: -span,
    });
    this.sun.shadow.camera.updateProjectionMatrix();
    this.renderer.shadowMap.needsUpdate = true;
    this.junction?.dispose();
    this.junction = undefined;
    if (l.yard) {
      this.junction = new JunctionMiniature(r, ep, this.host);
      this.draw(0);
      this.resize();
      return;
    }
    box(
      r,
      l.width + 1.05,
      0.4,
      l.depth + 1.84,
      0x6f573c,
      cx,
      -0.31,
      cz - 0.45,
      0.12,
    );
    box(
      r,
      l.width + 0.87,
      0.12,
      l.depth + 1.68,
      brass,
      cx,
      -0.16,
      cz - 0.45,
      0.055,
    );
    for (let x = 0; x < l.width; x++)
      for (let z = 0; z < l.depth; z++) {
        const light = (x + z) % 2;
        box(
          r,
          0.99,
          0.12,
          0.99,
          x < 6 ? (light ? 0x56706c : 0x526868) : light ? 0x948573 : 0x9c8d7b,
          x,
          -0.065,
          z,
        );
      }
    if (l.depth > 7) {
      // Painted markings define the maintenance siding on the new outer lane.
      for (const x of [9.47, 10.53])
        box(r, 0.035, 0.014, 0.95, 0xcaaf78, x, 0.007, 7);
      box(r, 1.09, 0.014, 0.035, 0xcaaf78, 10, 0.007, 7.45);
    }
    // Tracks and the midnight postal carriage across the rear of the platform.
    const trackEnd = 26;
    for (const z of [-1, -0.53])
      box(
        r,
        trackEnd + 0.5,
        0.065,
        0.07,
        metal,
        (trackEnd - 0.5) / 2,
        -0.02,
        z,
      );
    for (let x = 0; x <= trackEnd - 0.5; x += 0.52)
      box(r, 0.14, 0.08, 0.85, 0x4b473c, x, -0.08, -0.78);
    {
      // The line leaves the platform on an iron trestle. Its deck sits directly
      // under the sleepers so the coach remains on rails through the final shot.
      const span = trackEnd - 12.5,
        middle = 12.5 + span / 2;
      for (const z of [-1.11, -0.42]) {
        box(r, span, 0.19, 0.09, metal, middle, -0.22, z);
        box(r, span, 0.05, 0.14, 0x998459, middle, -0.33, z);
      }
      for (let x = 13; x < trackEnd; x += 2.08) {
        box(r, 0.27, 0.21, 1.0, metal, x, -0.4, -0.77);
        for (const z of [-1.04, -0.49]) {
          box(r, 0.17, 0.8, 0.18, 0x42565a, x, -0.83, z);
          const brace = box(r, 1.18, 0.1, 0.1, 0x627474, x + 0.53, -0.68, z);
          brace.rotation.z = 0.46;
        }
        box(r, 0.43, 0.23, 0.96, 0x6b6554, x, -1.25, -0.77, 0.04);
      }
    }
    const train = new T.Group();
    train.position.set(9.65, 0, -0.73);
    r.add(train);
    this.train = train;
    this.rail = railWheels(train, true, [-2, -1.4, 1.4, 2], 0.215, 0.34);
    {
      box(train, 3.45, 1.13, 1.02, 0x234a54, -0.93, 0.88, 0, 0.11);
      box(train, 0.81, 1.13, 1.02, 0x234a54, 2.23, 0.88, 0, 0.1);
      box(train, 1.07, 1.11, 0.12, 0x17282d, 1.32, 0.87, -0.44);
      box(train, 5.19, 0.13, 1.04, 0x30383b, 0, 0.39, 0.01, 0.035);
      box(train, 1.14, 0.1, 0.95, 0xb9a276, 1.33, 0.74, 0.05, 0.02);
      for (const x of [0.8, 1.84]) {
        box(train, 0.06, 0.88, 0.07, brass, x, 0.94, 0.48, 0.015);
        box(train, 0.18, 0.26, 0.27, 0x926040, x + 0.11, 0.88, -0.15, 0.016);
      }
      this.door = new T.Group();
      this.door.position.set(0.23, 0.97, 0.55);
      train.add(this.door);
      box(this.door, 1.04, 0.92, 0.07, 0x35616a, 0, 0, 0, 0.035);
      for (const y of [-0.34, 0.34])
        box(this.door, 0.97, 0.025, 0.081, brass, 0, y, 0.011);
      sign(this.door, "POST", 0.52, 0.19, 0, 0.08, 0.045, "#254850", "#f2d59d");
      box(train, 5.42, 0.055, 1.14, brass, 0, 1.39, 0, 0.021);
      for (const x of [-1.95, -0.95, 0.05]) {
        box(train, 0.41, 0.068, 0.47, metal, x, 1.58, -0.04, 0.033);
      }
      sign(
        train,
        "MAIL  ·  COACH B",
        1.2,
        0.18,
        1.34,
        1.38,
        0.571,
        "#3e3931",
        "#f7da9b",
      );
    }
    box(train, 5.42, 0.23, 1.11, 0x233a40, 0, 1.41, 0, 0.11);
    box(train, 5.22, 0.065, 0.055, brass, 0, 0.65, 0.514);
    const coachSide = 0.51;
    const windowCenters = [-1.88, -1.23, -0.58];
    for (const [i, x] of windowCenters.entries()) {
      // The bezel meets the coach side. The pane sits proud of the bezel so the
      // three visible faces have distinct depths throughout the camera move.
      box(
        train, 0.54, 0.375, 0.045, 0x29454a,
        x, 1.04, coachSide + 0.015, 0.026,
      );
      const pane = box(
        train, 0.46, 0.295, 0.02, 0x426363,
        x, 1.04, coachSide + 0.044, 0.009,
      );
      pane.name = `Coach_window_${i + 1}`;
      this.windows.push(pane);
    }
    sign(train, "M O O N M A I L", 2.35, 0.23, 0, 0.49, 0.515);
    for (const x of [-2.34, 2.34]) {
      box(train, 0.33, 0.77, 0.025, 0x263d43, x, 0.88, 0.516, 0.035);
      box(train, 0.21, 0.21, 0.032, brass, x, 1.06, 0.529, 0.03);
      box(train, 0.05, 0.04, 0.04, ivory, x + 0.08, 0.79, 0.54);
    }
    for (const x of [7.1, 12.35]) {
      cylinder(r, 0.135, 0.14, dark, x, 0.07, 0.28);
      cylinder(r, 0.046, 1.7, metal, x, 0.88, 0.28);
      cylinder(r, 0.12, 0.1, brass, x, 1.73, 0.28);
      part(
        r,
        new T.SphereGeometry(0.13, 16, 12),
        0xffcd78,
        x,
        1.88,
        0.28,
        true,
      );
      part(r, new T.ConeGeometry(0.19, 0.13, 16), metal, x, 2.02, 0.28);
    }
    const stationBoard = sign(
      r,
      "NIGHT MAIL   •   PLATFORM 1",
      2.6,
      0.32,
      9.7,
      1.9,
      -0.52,
    );
    for (const x of [8.55, 10.85]) {
      {
        cylinder(
          r,
          0.048,
          stationBoard.position.y,
          metal,
          x,
          stationBoard.position.y / 2,
          -1.42,
        );
        box(r, 0.08, 0.1, 0.96, metal, x, stationBoard.position.y, -0.98);
        box(r, 0.23, 0.13, 0.23, brass, x, 0.015, -1.42, 0.02);
      }
    }
    // Riveted body panels and lit carriage ends also read in close shots of the platform.
    for (const x of [-2.51, -1.6, -0.8, 0, 0.8, 1.6, 2.51]) {
      box(train, 0.021, 0.83, 0.035, 0x486463, x, 0.89, 0.5);
      for (const y of [0.56, 1.25])
        part(train, new T.SphereGeometry(0.024, 8, 6), brass, x, y, 0.524);
    }
    for (const x of [-2.48, 2.48]) {
      const rim = cylinder(train, 0.085, 0.045, brass, x, 0.57, 0.52);
      rim.rotation.x = Math.PI / 2;
      part(
        train,
        new T.SphereGeometry(0.055, 12, 8),
        0xffc879,
        x,
        0.57,
        0.551,
        true,
      );
    }
    // Boundary wall has a tall freight shutter and a low service arch.
    for (let z = 0; z < l.depth; z++) {
      if (z === 2 || z === 5) continue;
      box(r, 0.27, 0.83, 0.99, metal, 6, 0.41, z, 0.03);
      box(r, 0.32, 0.055, 0.99, brass, 6, 0.85, z);
    }
    for (const z of [1.49, 2.51])
      box(r, 0.34, 1.89, 0.12, brass, 6, 0.945, z, 0.025);
    box(r, 0.37, 0.16, 1.15, dark, 6, 1.91, 2);
    box(r, 0.1, 0.17, 0.36, dark, 6.19, 1.92, 2, 0.025);
    this.gateLamp = part(
      r,
      new T.SphereGeometry(0.087, 14, 10),
      0x7be4a8,
      6.253,
      1.93,
      2,
      true,
    );
    for (const z of [1.49, 2.51])
      for (let n = 0; n < 4; n++)
        box(r, 0.348, 0.072, 0.129, dark, 6, 0.17 + n * 0.19, z, 0.008);
    this.shutter.position.set(6, 0, 2);
    r.add(this.shutter);
    for (let i = 0; i < 10; i++)
      box(
        this.shutter,
        0.19,
        0.17,
        1.0,
        i % 2 ? 0x8c7561 : 0xa1896f,
        0,
        0.1 + i * 0.18,
        0,
      );
    for (const z of [4.48, 5.52]) box(r, 0.4, 0.76, 0.1, 0x56ad99, 6, 0.38, z);
    box(r, 0.42, 0.12, 1.13, 0x64b6a1, 6, 0.82, 5);
    // Rack and warehouse props occupy the blocked cells.
    const rack = l.shelf[0];
    for (const x of [rack - 0.45, rack + 0.45])
      for (const z of [-0.38, 0.34])
        box(r, 0.065, 1.66, 0.065, metal, x, 0.83, z);
    for (const y of [0.32, 0.82, 1.43])
      box(r, 1.09, 0.09, 0.85, brass, rack, y, 0);
    for (const x of [-0.25, 0.18])
      for (const y of [0.51, 1.01])
        box(r, 0.31, 0.3, 0.35, 0xb58e60, rack + x, y, 0, 0.025);
    for (const [x, z] of l.obstacles.slice(2))
      shippingCrate(r, x, z, 0.76, 0.6, 0.7);
    const [sx, sz] = l.socket;
    box(r, 0.89, 0.87, 0.64, metal, sx, 0.435, sz - 0.8, 0.065);
    box(r, 0.94, 0.06, 0.69, brass, sx, 0.9, sz - 0.8);

    {
      // The bridge rolls the tray from fork reach into the open coach.
      for (const x of [sx - 0.22, sx + 0.22])
        box(r, 0.055, 0.09, 1.42, brass, x, 0.91, 0.48, 0.015);
      for (let z = -0.14; z < 1.22; z += 0.19) {
        const roll = cylinder(r, 0.045, 0.48, metal, sx, 0.9, z);
        roll.rotation.z = Math.PI / 2;
      }
      const [deskX, deskZ] = deskWorktop(l.desk ?? [9, 3]);
      box(r, 0.72, 0.69, 0.4, 0x374e51, deskX, 0.345, deskZ, 0.045);
      box(r, 0.78, 0.065, 0.47, brass, deskX, 0.72, deskZ, 0.025);
      box(r, 0.31, 0.04, 0.27, ivory, deskX, 0.78, deskZ, 0.01);
      this.scanLine = box(
        r,
        0.235,
        0.008,
        0.025,
        0xa6f6d1,
        deskX,
        0.806,
        deskZ,
        0.003,
      );
      (this.scanLine.material as T.MeshStandardMaterial).emissive.setHex(
        0x60dba6,
      );
      this.signature = new T.Group();
      this.signature.position.set(deskX, 0.806, deskZ);
      r.add(this.signature);
      box(this.signature, 0.13, 0.005, 0.011, 0x38635c, -0.012, 0, -0.025);
      box(this.signature, 0.085, 0.005, 0.011, 0x38635c, -0.034, 0, 0.004);
      const signature = box(
        this.signature,
        0.064,
        0.005,
        0.013,
        0x347c65,
        0.054,
        0.001,
        0.04,
      );
      signature.rotation.y = -0.38;
      sign(r, "WAYBILLS", 0.55, 0.13, deskX, 0.55, deskZ + 0.206);
      this.scanLamp = part(
        r,
        new T.SphereGeometry(0.062, 12, 10),
        0xaab69b,
        deskX + 0.27,
        0.82,
        deskZ + 0.02,
        true,
      );
      cylinder(r, 0.064, 1.6, metal, 12.16, 0.81, 1.22);
      box(r, 0.33, 0.47, 0.21, 0x232e33, 12.16, 1.58, 1.22, 0.08);
      this.signalLamp = part(
        r,
        new T.SphereGeometry(0.103, 16, 12),
        0xee7956,
        12.16,
        1.6,
        1.35,
        true,
      );
      for (const z of [1.5, 4.5]) {
        box(r, 2.36, 0.031, 0.08, ivory, 9.35, 0.013, z, 0.012);
        for (const x of [8.35, 9.05, 9.75, 10.45])
          box(r, 0.14, 0.04, 0.16, brass, x, 0.017, z, 0.012);
      }
      for (const x of [1, 3.8, 8, 12])
        for (const z of [6.35, -0.45])
          cylinder(r, 0.057, 0.025, brass, x, 0.018, z);
    }
    this.socket.set(sx, 0.95, sz - 0.8);
    for (const group of l.berths)
      for (const [x, z] of group) {
        for (const offset of [-0.4, 0.4])
          box(r, 0.05, 0.012, 0.78, 0xdfbd70, x + offset, 0.006, z);
      }
    sign(r, "SORTING HALL", 2.38, 0.29, 2.25, 0.33, l.depth - 0.26);
    sign(r, "PLATFORM  01", 2.38, 0.29, 9.6, 0.33, l.depth - 0.26);
    this.mailbag = new T.Group();
    postbag(this.mailbag, ep.scenario.parcel_cm);
    r.add(this.mailbag);
    for (const name of this.names) {
      const rig = character(name, ep.scenario.service_kit === "probe");
      rig.body.scale.setScalar(0.94);
      this.rigs[name] = rig;
      r.add(rig.body);
      if (name === "Wick") {
        box(rig.body, 0.68, 0.065, 0.36, 0x354952, -0.07, 1.385, -0.03, 0.03);
        box(rig.body, 0.56, 0.1, 0.35, 0x466571, -0.07, 1.431, -0.1, 0.042);
        box(rig.body, 0.085, 0.045, 0.025, brass, -0.07, 1.43, 0.09, 0.01);
      }
      if (name === "Jack")
        for (const side of [-1, 1]) {
          box(
            rig.body,
            0.035,
            0.07,
            0.23,
            ivory,
            side * 0.38,
            0.295,
            -0.17,
            0.012,
          );
        }
      const tag = document.createElement("span");
      tag.className = "body-label " + name.toLowerCase();
      tag.textContent = name;
      this.host.append(tag);
      this.labels.set(name, tag);
    }
    if (l.lift) {
      for (const [i, cell] of [l.lift, l.baggage].entries()) {
        if (!cell) continue;
        const [x, z] = cell,
          shade = i ? 0x9b825f : 0x51a994;
        box(r, 0.88, 0.12, 0.83, shade, x, 0.05, z, 0.045);
        for (let n = 0; n < 5; n++)
          box(r, 0.72, 0.03, 0.045, brass, x, 0.12, z - 0.29 + n * 0.14);
        sign(r, i ? "BAGGAGE" : "MAIL LIFT", 0.92, 0.2, x, 0.27, z + 0.42);
      }
      const [x, z] = l.lift;
      // The telescoping bridge is stowed while the aisle is in use.
      this.liftRail = new T.Group();
      this.liftRail.position.set(x, 0, z - 0.42);
      r.add(this.liftRail);
      for (const dx of [-0.14, 0.14])
        box(this.liftRail, 0.048, 0.065, 3.07, brass, dx, 0.92, -1.53);
    }
    for (const [name, cell] of Object.entries({
      ...l.gates,
      ...l.starts,
      Shelf: [l.shelf[0], 0],
      Waybill: l.desk ? deskWorktop(l.desk) : l.socket,
      Socket: l.socket,
      ...(l.lift ? { "Mail lift": l.lift } : {}),
    })) {
      const marker = new T.Mesh(
        new T.RingGeometry(0.49, 0.56, 40),
        new T.MeshBasicMaterial({ color: 0xffdc7a, side: T.DoubleSide }),
      );
      marker.rotation.x = -Math.PI / 2;
      marker.position.set(cell[0], name === "Shelf" ? 1.49 : 0.024, cell[1]);
      marker.visible = false;
      this.markers.set(name, marker);
      r.add(marker);
    }
    batchSolids(train, this.windows);
    excludeFromBakedShadows(train);
    contactShadow(train, 2.82, 0.7, 0.008);
    batchSolids(this.shutter);
    excludeFromBakedShadows(this.shutter);
    if (this.liftRail) excludeFromBakedShadows(this.liftRail);
    if (this.signature) excludeFromBakedShadows(this.signature);
    if (this.scanLine) excludeFromBakedShadows(this.scanLine);
    excludeFromBakedShadows(this.mailbag);
    batchSolids(r, [
      this.gateLamp,
      this.signalLamp,
      this.scanLamp,
      this.scanLine,
    ]);
    this.draw(0);
    this.resize();
  }
  private cameraShot(at: number, motion: Motion | undefined) {
    const ep = this.ep!,
      layout = ep.layout;
    const ordinary = new T.Vector3(4.8, 8.6, 14.3),
      shelfSide = new T.Vector3(-7.5, 5.3, 7.5),
      serviceSide = new T.Vector3(-5.8, 7.3, 13);
    const beside =
      ep.scenario.mission === "mail" &&
      this.review &&
      this.host.clientWidth > 780;
    const usableRatio = this.ratio * (beside ? 0.64 : 1);
    const wide = {
      aim: new T.Vector3(
        (layout.width - 1) / 2,
        0.3,
        (layout.depth - 1) / 2 - 0.4,
      ),
      span: Math.max(
        layout.depth * 0.86,
        ((layout.width + 1.05) * 0.95 + (layout.depth + 1.84) * 0.318 + 0.18) /
          usableRatio,
      ),
      names: this.names,
      angle: ordinary,
    };
    const pose = (
      tick: number,
      ids: Robot[],
      span: number,
      loc?: Cell,
      angle = ordinary,
    ) => {
      const f = Math.min(ep.frames.length - 1, Math.max(0, tick)),
        frame = ep.frames[Math.floor(f)],
        next = ep.frames[Math.ceil(f)],
        alpha = ease(f % 1);
      const aim = new T.Vector3(0, 0.53, 0);
      if (loc) aim.set(loc[0], 0.65, loc[1]);
      else if (ids.length) {
        for (const id of ids) {
          const cell = frame.robots[id]!;
          const to = next.robots[id]!;
          aim.x += T.MathUtils.lerp(cell[0], to[0], alpha) / ids.length;
          aim.z += T.MathUtils.lerp(cell[1], to[1], alpha) / ids.length;
        }
      }
      return {
        aim,
        span: Math.max(span, (span * 1.32) / usableRatio),
        names: ids,
        angle,
      };
    };
    const shot = (event: Episode["events"][number], tick: number) => {
      const m = event.motion;
      if (event.kind === "jam")
        return pose(tick, [], 4.7, layout.gates.Shutter);
      if (
        event.kind === "fork fault" ||
        (["read", "proposal"].includes(event.kind) &&
          (event.targetRevision ?? 0) > 1 &&
          ep.events.some((e) => e.kind === "fork fault" && e.tick < event.tick))
      )
        return pose(tick, ["Jack"], 3.12, undefined, serviceSide);
      if (
        event.kind === "repair" ||
        m?.kind === "repair" ||
        (event.choices?.some((c) => c.repair) &&
          event.title.includes("repairs"))
      )
        return pose(tick, ["Patch", "Jack"], 3.05, undefined, serviceSide);
      if (m?.kind === "move")
        return pose(
          tick,
          [m.actor],
          4.5,
          layout.gates[String(event.proof?.rows[0]?.gate ?? "Hatch")],
        );
      if (m?.kind === "pick" || event.kind === "pick")
        return pose(
          tick,
          [m?.actor ?? event.actors[0]],
          3.25,
          [layout.shelf[0], 0.64],
          shelfSide,
        );
      if (
        m?.kind === "place" ||
        event.kind === "place" ||
        event.kind === "delivered" ||
        event.kind === "feed"
      )
        return pose(tick, event.actors, 3.7, layout.socket);
      if (
        event.kind === "dock" ||
        (event.choices?.some((c) => c.via) && event.title.includes("lift"))
      )
        return pose(tick, ["Skim"], 5.6, layout.lift);
      if (m?.kind === "transfer" || event.kind === "transfer")
        return pose(tick, event.actors, 3.9);
      if (event.kind === "decision" && event.actors.length === 1)
        return pose(
          tick,
          event.actors,
          4.8,
          undefined,
          event.actors[0] === "Wick" ? shelfSide : ordinary,
        );
      return wide;
    };
    const events = ep.events.filter(
      (e) => e.tick <= at && e.kind !== "move" && e.kind !== "order",
    );
    const last = events.at(-1),
      prev = events.at(-2);
    let target = last ? shot(last, at) : wide;
    const from = prev && last ? shot(prev, last.tick) : wide;
    const mix = last
      ? last.kind === "fork fault"
        ? 1
        : ease(at - last.tick, 0, 1.15)
      : 1;
    let blend = mix;
    if (ep.scenario.mission === "mail") {
      const e = ep.events
        .filter((e) => e.kind !== "completed" && e.tick <= at)
        .at(-1);
      if (e?.kind === "read" && e.targetRevision === 1) {
        target = pose(
          at,
          ["Wick", "Skim"],
          3.95,
          undefined,
          new T.Vector3(4.8, 4.9, 11),
        );
        const closer = ease(at - e.tick, 0.18, 0.43);
        target.aim.lerp(wide.aim, 1 - closer);
        target.angle.lerp(wide.angle, 1 - closer);
        target.span = T.MathUtils.lerp(wide.span, target.span, closer);
      } else if (e?.kind === "assignment") {
        const op = e.op,
          actor = e.actors[0];
        if (op === "collect")
          target = pose(at, [actor], 3.9, [layout.shelf[0], 1.2], shelfSide);
        else if (op === "stage") target = pose(at, ["Wick", "Skim"], 4.4);
        else if (op === "cross")
          target = pose(at, ["Skim"], 4.2, layout.gates.Hatch);
        else if (op === "manifest")
          target = pose(at, [actor], 4.1, layout.desk, serviceSide);
        else if (op === "repair")
          target = pose(
            at,
            [actor, "Jack"],
            3.24,
            undefined,
            new T.Vector3(-11.8, 5.9, 3.2),
          );
        else if (op === "load" && motion?.kind === "place")
          target = pose(
            at,
            [],
            4.1,
            [layout.socket[0], layout.socket[1] - 0.85],
            new T.Vector3(-6.5, 5.0, 9),
          );
        else if (op === "load" && motion?.kind === "transfer")
          target = pose(
            at,
            ["Skim", actor],
            3.5,
            undefined,
            new T.Vector3(-4.6, 4.1, 9),
          );
        else if (op === "load" || op === "hoist")
          target = pose(at, [actor], 5.6, undefined, serviceSide);
        else {
          const release = ep.frames.find((f) => f.signal === "green")?.tick;
          const travel = release === undefined ? 0 : ease(at - release, 1.4, 6);
          target = pose(at, [], 7, [10 + 4.5 * travel, 1]);
        }
      } else if (e?.kind === "fork fault")
        target = pose(
          at,
          ["Jack"],
          3.55,
          undefined,
          new T.Vector3(5.2, 5.8, 12),
        );
      else if (
        (e &&
          ["read", "proposal", "rejected"].includes(e.kind) &&
          (e.targetRevision ?? 0) > 1 &&
          ep.events.some((v) => v.kind === "fork fault" && v.tick < e.tick)) ||
        (e?.kind === "decision" && (e.planGraph?.revision ?? 0) > 1)
      )
        target = pose(
          at,
          ["Jack", ...(ep.layout.starts.Patch ? ["Patch" as Robot] : [])],
          4.9,
          undefined,
          serviceSide,
        );
      else if (e?.kind === "delivered") target = pose(at, [], 8.6, [14.5, 1]);
      else target = wide;
      blend = 1;
    }
    const aim = from.aim.clone().lerp(target.aim, blend);
    let height = T.MathUtils.lerp(from.span, target.span, blend);
    let active = target.names;
    if (this.top) {
      aim.copy(wide.aim);
      height = Math.max(
        layout.depth + 0.68,
        (layout.width + 0.94) / this.ratio,
      );
      active = this.names;
    }
    // A steady three-quarter view keeps depth and the end effector in the same shot.
    this.camera.position
      .copy(aim)
      .add(
        this.top
          ? new T.Vector3(0, 25, 0.012)
          : from.angle.clone().lerp(target.angle, blend),
      );
    this.camera.lookAt(aim);
    Object.assign(this.camera, {
      left: -height * this.ratio * (beside ? 0.692 : 0.5),
      right: height * this.ratio * (beside ? 0.308 : 0.5),
      top: height / 2,
      bottom: -height / 2,
      near: 0.05,
      far: 85,
    });
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    for (const [name, label] of this.labels) {
      const rig = this.rigs[name]!;
      const pos = rig.body.position
        .clone()
        .add(
          new T.Vector3(
            0,
            name === "Wick" ? 1.75 : name === "Skim" ? 0.94 : 1.22,
            0,
          ),
        )
        .project(this.camera);
      const x = (pos.x + 1) * 50,
        y = (1 - pos.y) * 50;
      label.hidden =
        !active.includes(name) || x < 4 || x > 96 || y < 7 || y > 92;
      label.style.left = x + "%";
      label.style.top = y + "%";
      label.classList.toggle("working", motion?.actor === name);
    }
  }

  draw(t: number) {
    if (!this.ep?.frames.length) return;
    if (this.junction) {
      this.at = T.MathUtils.clamp(t, 0, this.ep.frames.length - 1);
      this.junction.draw(this.at, this.camera, this.ratio, this.top);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    const ep = this.ep,
      { frames, layout } = ep,
      at = T.MathUtils.clamp(t, 0, frames.length - 1);
    this.at = at;
    const i = Math.floor(at),
      a = frames[i],
      b = frames[Math.min(i + 1, frames.length - 1)],
      mix = ease(at - i);
    let m = [b.motion, a.motion].find((v) => v && v.start <= at && v.end > at);
    if (!m)
      m = ep.events.find((e) => e.motion && e.motion.start === at)?.motion;
    // Earlier downloadable episodes contain custody events, without explicit motion spans.
    if (!m && !ep.scenario.service_kit) {
      const e = ep.events.find(
        (e) =>
          ["pick", "place", "transfer"].includes(e.kind) &&
          at >= e.tick - 2 &&
          at < e.tick,
      );
      if (e)
        m = {
          kind: e.kind,
          actor: e.actors[0],
          from: frames[e.tick - 2].holder,
          to: frames[e.tick].holder,
          start: e.tick - 2,
          end: e.tick,
        };
    }
    const progress = m
      ? T.MathUtils.clamp((at - m.start) / (m.end - m.start), 0, 1)
      : 0;
    const shelf = new T.Vector3(layout.shelf[0], 1.5, 0.08);
    for (const name of this.names) {
      const rig = this.rigs[name]!,
        g = rig.body;
      placeMachine(rig, this.drive!.sample(name, at), 0);
      this.markers.get(name)?.position.set(g.position.x, 0.024, g.position.z);
    }

    const jack = this.rigs.Jack!,
      fault = ep.events.find((e) => e.kind === "fork fault" && e.tick <= at);
    const repairProgress = m?.kind === "repair" ? progress : 0;
    serviceFault(
      jack,
      at,
      fault?.tick,
      a.fork_online !== false,
      repairProgress,
    );
    const release = frames.find((f) => f.signal === "green")?.tick;
    const since = release === undefined ? 0 : Math.max(0, at - release);
    const roll = 6.8 * ease(since, 1.4, 6);
    if (this.liftRail) {
      const deploying =
        m?.kind === "dock"
          ? ease(progress, 0.25, 1)
          : a.holder === "Mail lift"
            ? 1
            : 0;
      this.liftRail.visible = deploying > 0.001;
      this.liftRail.scale.z = Math.max(0.001, deploying);
    }
    if (this.train) this.train.position.x = 9.65 + roll;
    for (const wheel of this.rail) wheel.spin.rotation.x = roll / wheel.radius;
    if (this.door) this.door.position.x = 0.23 + 1.11 * ease(since, 0, 1.4);
    if (this.signalLamp) {
      const c = a.signal === "green" ? 0x70e4ad : 0xf07d67;
      this.signalLamp.material.color.setHex(c);
      this.signalLamp.material.emissive.setHex(c);
    }
    if (this.scanLine && layout.desk) {
      this.scanLine.visible = m?.kind === "scan";
      this.scanLine.position.z =
        deskWorktop(layout.desk)[1] -
        0.095 +
        0.19 * (0.5 - 0.5 * Math.cos(progress * Math.PI * 4));
    }
    if (this.signature) this.signature.visible = a.manifest === "signed";
    if (this.scanLamp) {
      const c =
        a.manifest === "signed"
          ? 0x81dda9
          : m?.kind === "scan"
            ? 0xffda74
            : 0x9aaea2;
      this.scanLamp.material.emissive.setHex(c);
      this.scanLamp.scale.setScalar(
        m?.kind === "scan" ? 1.15 + 0.3 * Math.sin(progress * 24) : 1,
      );
    }
    const onboard = new T.Vector3(
      layout.socket[0] + roll,
      0.81,
      -0.32 - 0.38 * ease(since, 0, 0.8),
    );
    const carry = (owner: string) => {
      if (owner === "Shelf") return shelf.clone();
      if (owner === layout.destination) return onboard.clone();
      if (owner === "Socket") return this.socket.clone();
      if (owner === "Mail lift" && layout.lift) {
        const begin = frames.find((f) => f.holder === "Mail lift")?.tick ?? at;
        const end =
          frames.find(
            (f) =>
              f.tick > begin &&
              (f.holder === "Socket" || f.holder === layout.destination),
          )?.tick ?? begin + 15;
        const p = T.MathUtils.clamp((at - begin) / (end - begin), 0, 1);
        const v = new T.Vector3(
          layout.lift[0],
          0.27 + 0.7 * ease(p, 0, 0.32),
          layout.lift[1],
        );
        return v.lerp(onboard, ease(p, 0.32, 1));
      }
      return traySeat(this.rigs[owner as Robot]!, owner as Robot);
    };
    let parcel = carry(a.holder).lerp(carry(b.holder), mix);
    const wick = this.rigs.Wick!,
      idle = carry("Wick");
    const resting = wick.body.localToWorld(new T.Vector3(0.54, 0.74, 0.34));
    let handGoal = (a.holder === "Wick" ? idle : resting).clone(),
      open = a.holder === "Wick" ? 0 : 1;
    let forkTray =
      a.holder === "Jack"
        ? carry("Jack")
        : jack.body.localToWorld(new T.Vector3(0, 0.27, 0.41));
    if (m?.kind === "pick" && m.actor === "Wick") {
      if (progress < 0.44) {
        handGoal = resting.clone().lerp(shelf, ease(progress, 0, 0.4));
        parcel = shelf.clone();
        open = 1 - ease(progress, 0.34, 0.44);
      } else {
        const p = ease(progress, 0.44, 0.96);
        handGoal = liftAndSet(shelf, idle, p, 0.16);
        parcel = handGoal.clone();
        open = 0;
      }
    } else if (m && (m.kind === "transfer" || m.kind === "place")) {
      const src = carry(m.from),
        dest = carry(m.to);
      if (m.actor === "Wick") {
        const p = ease(progress, 0, 0.65);
        parcel = liftAndSet(src, dest, p, 0.17);
        handGoal = parcel.clone().lerp(resting, ease(progress, 0.73, 1));
        open = ease(progress, 0.62, 0.76);
      } else if (m.to === "Jack") {
        forkTray = forkTray.lerp(src, ease(progress, 0, 0.36));
        if (progress >= 0.37) {
          const p = ease(progress, 0.37, 0.96);
          forkTray = src.clone().lerp(dest, p);
          forkTray.y += Math.sin(p * Math.PI) * 0.09;
          parcel = forkTray.clone();
        } else parcel = src;
      } else if (m.actor === "Jack") {
        const dock = this.socket;
        forkTray = liftAndSet(src, dock, ease(progress, 0, 0.62), 0.07);
        parcel = forkTray.clone();
        if (progress > 0.62)
          parcel = dock.clone().lerp(dest, ease(progress, 0.62, 0.93));
        if (progress > 0.7)
          forkTray = dock
            .clone()
            .lerp(carry("Jack"), ease(progress, 0.7, 0.99));
      }
    }
    wick.arm!.pose(wick.body.worldToLocal(handGoal.clone()), open, 0);
    setForkTray(jack, forkTray);
    jack.collar!.rotation.set(Math.PI / 2, 0, 0);
    jack.collar!.rotateY(m?.kind === "repair" ? progress * Math.PI * 5 : 0);
    jack.body.updateMatrixWorld(true);
    const patch = this.rigs.Patch;
    if (patch) {
      const rest = new T.Vector3(0.58, 0.73, 0.38);
      rescueLights(patch, at, !!fault && a.fork_online === false);
      if (m?.kind === "repair") {
        const contact = jack.collar!.getWorldPosition(new T.Vector3());
        const target = patch.body.worldToLocal(contact);
        const engaged = ease(progress, 0, 0.16) * (1 - ease(progress, 0.87, 1));
        rest.lerp(target, engaged);
        patch.arm!.pose(rest, 0, Math.PI * 16 * progress);
      } else patch.arm!.pose(rest, 0, 0);
    }
    this.mailbag.position.copy(parcel);
    this.shutter.scale.y = T.MathUtils.lerp(
      a.shutter ? 0.085 : 1,
      b.shutter ? 0.085 : 1,
      mix,
    );
    this.shutter.position.y = 1.83 * (1 - this.shutter.scale.y);
    if (this.gateLamp) {
      const shade = a.shutter ? 0x82dbba : 0xfa7756;
      this.gateLamp.material.color.setHex(shade);
      this.gateLamp.material.emissive.setHex(shade);
    }
    for (const mesh of this.windows) {
      const mat = mesh.material as T.MeshStandardMaterial;
      mat.color.setHex(
        a.holder === "Socket" || a.holder === layout.destination
          ? 0xffda89
          : 0x497572,
      );
      mat.emissive.setHex(
        a.holder === "Socket" || a.holder === layout.destination
          ? 0xf4a944
          : 0x0d201d,
      );
    }
    this.cameraShot(at, m);
    this.renderer.render(this.scene, this.camera);
  }
}
