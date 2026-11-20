import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// Bake the transform and colour of rigid parts into a single draw. Articulated
// groups, maps, lamps and any part a caller animates keep their own identity.
export function batchSolids(
  parent: T.Object3D,
  moving: (T.Object3D | undefined)[] = [],
) {
  const parts = parent.children.filter(
    (o): o is T.Mesh<T.BufferGeometry, T.MeshStandardMaterial> =>
      o instanceof T.Mesh &&
      o.visible &&
      !o.children.length &&
      !moving.includes(o) &&
      o.material instanceof T.MeshStandardMaterial &&
      !o.material.map &&
      !o.material.vertexColors &&
      o.material.emissive.getHex() === 0,
  );
  if (parts.length < 2) return;
  const pieces = parts.map((mesh) => {
    const g = mesh.geometry.index
      ? mesh.geometry.toNonIndexed()
      : mesh.geometry.clone();
    mesh.updateMatrix();
    g.applyMatrix4(mesh.matrix);
    for (const k of Object.keys(g.attributes))
      if (k !== "position" && k !== "normal") g.deleteAttribute(k);
    const rgb = new Float32Array(g.getAttribute("position").count * 3);
    for (let i = 0; i < rgb.length; i += 3) mesh.material.color.toArray(rgb, i);
    g.setAttribute("color", new T.BufferAttribute(rgb, 3));
    return g;
  });
  const geometry = mergeGeometries(pieces)!;
  const material = new T.MeshLambertMaterial({
    vertexColors: true,
  });
  const batch = new T.Mesh(geometry, material);
  batch.castShadow = true;
  batch.receiveShadow = true;
  parent.add(batch);
  for (const part of parts) {
    parent.remove(part);
    part.geometry.dispose();
    part.material.dispose();
  }
  for (const geometry of pieces) geometry.dispose();
}

export function excludeFromBakedShadows(object: T.Object3D) {
  object.traverse((o) => {
    o.castShadow = false;
  });
}

// Two rings share one mesh. The vertex alpha fades the outer ring into the floor.
export function contactShadow(
  parent: T.Object3D,
  width: number,
  length: number,
  y = 0.016,
) {
  const positions = [0, y, 0],
    colors = [0.06, 0.09, 0.08, 0.4],
    indices: number[] = [];
  const sides = 24;
  for (const [r, alpha] of [
    [0.64, 0.29],
    [1, 0],
  ]) {
    for (let i = 0; i < sides; i++) {
      const a = (2 * Math.PI * i) / sides;
      positions.push(width * r * Math.sin(a), y, length * r * Math.cos(a));
      colors.push(0.06, 0.09, 0.08, alpha);
    }
  }
  for (let i = 0; i < sides; i++) {
    const a = 1 + i,
      b = 1 + ((i + 1) % sides);
    indices.push(0, a, b, a, a + sides, b + sides, a, b + sides, b);
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(colors, 4));
  g.setIndex(indices);
  const mesh = new T.Mesh(
    g,
    new T.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      toneMapped: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      forceSinglePass: true,
    }),
  );
  parent.add(mesh);
}

export function drawingScale(w: number, h: number) {
  // Supersample fine metalwork at 1× and preserve native HiDPI detail. Bound
  // the framebuffer on very large displays, including after a monitor change.
  return Math.min(
    Math.max(1.65, window.devicePixelRatio || 1),
    3,
    Math.sqrt(8_300_000 / (w * h)),
  );
}

export function observeCanvasSize(host: HTMLElement, resize: () => void) {
  new ResizeObserver(resize).observe(host);
  function trackDensity() {
    window
      .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
      .addEventListener(
        "change",
        () => {
          resize();
          trackDensity();
        },
        { once: true },
      );
  }
  trackDensity();
}
