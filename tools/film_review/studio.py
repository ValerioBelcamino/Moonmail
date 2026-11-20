"""Build the two adjoining depot miniatures and photograph them with continuous cameras in Blender.

Run with Blender --background --factory-startup --python studio.py -- WORK_DIRECTORY SHOT [frames].
SHOT is opening, dispatch or travel. An optional comma-separated list makes proof stills.
Use --range FIRST LAST to render a disjoint part of a shot on a second worker.
"""

import json
import math
import os
import sys
from pathlib import Path
from array import array
from bisect import bisect_right

import bpy
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Quaternion, Vector

ROOT, SHOT, *opts = sys.argv[sys.argv.index("--") + 1 :]
ROOT = Path(ROOT)
cuts = json.loads(Path(__file__).with_name("cuts.json").read_text(encoding="utf-8"))
FPS = cuts["fps"]
LAST = cuts[SHOT]["frames"]
W, H = (900, 1080) if SHOT == "opening" else (1920, 1080)
evidence = json.loads((ROOT / "evidence.json").read_text(encoding="utf-8"))
motion = json.loads((ROOT / "assets/drive.json").read_text(encoding="utf-8"))
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.name = "Mail railway"
scene.render.engine = "BLENDER_WORKBENCH"
scene.render.resolution_x, scene.render.resolution_y = W, H
scene.render.resolution_percentage = 100
scene.render.fps = FPS
scene.frame_start, scene.frame_end = 1, LAST
scene.render.image_settings.file_format = "JPEG"
scene.render.image_settings.quality = 96
scene.display.render_aa = "FXAA"
sh = scene.display.shading
sh.light = "STUDIO"
sh.studio_light = "paint.sl"
sh.color_type = "VERTEX"
sh.show_shadows = True
sh.shadow_intensity = 0.30
sh.show_cavity = True
sh.cavity_type = "WORLD"
sh.cavity_ridge_factor = 0.40
sh.cavity_valley_factor = 0.74
sh.show_specular_highlight = True
sh.background_type = "WORLD"
scene.world = bpy.data.worlds.new("Studio air")
scene.world.color = (0.04, 0.077, 0.082)
scene.display.light_direction = (0.38, 0.58, 0.71)
scene.view_settings.view_transform = "Standard"
scene.view_settings.look = "None"

PALETTE = {
    "wood": "8b5c42",
    "wood_light": "bd9160",
    "wood_dark": "664539",
    "brass": "e1ad65",
    "satin": "af8154",
    "umber": "5c5144",
    "green": "33766d",
    "enamel": "25494a",
    "dark": "27393b",
    "ink": "283c40",
    "mint": "a7c4ac",
    "ivory": "f5e6c6",
    "paper": "fff2cf",
    "red": "a74d43",
    "rubber": "333c3b",
    "blue": "526e7e",
    "teal": "639d95",
    "tangerine": "d47f51",
    "gold": "efbb70",
    "ground": "53666a",
    "track": "839899",
    "tile0": "a6ad98",
    "tile1": "a3aa96",
    "tile2": "aab19e",
    "tile3": "a1a995",
    "tile4": "a7ad98",
    "letter": "e2d1ab",
}


def srgb(x):
    x = int(x, 16) / 255
    return x / 12.92 if x < 0.04045 else ((x + 0.055) / 1.055) ** 2.4


def rgba(code):
    return tuple(srgb(code[i : i + 2]) for i in (0, 2, 4)) + (1.0,)


def tint(mesh, color):
    attr = mesh.color_attributes.new(name="Paint", type="BYTE_COLOR", domain="POINT")
    attr.data.foreach_set("color", list(color) * len(mesh.vertices))
    mesh.color_attributes.active_color = attr
    mesh.color_attributes.render_color_index = mesh.color_attributes.find(attr.name)


# Keep stationary geometry in one mesh. The camera can show both complete grounds at once.
verts, polys, paint = [], [], []


def solid(v, faces, material):
    first = len(verts)
    verts.extend(v)
    paint.extend([rgba(PALETTE.get(material, material))] * len(v))
    polys.extend([tuple(first + i for i in face) for face in faces])


def block(x, y, z, w, d, h, col, bevel=0.032, turn=0):
    # Four octagonal rings give even the smallest bevel a real catching edge.
    a, b, c = w / 2, d / 2, h / 2
    r = min(bevel, a * 0.42, b * 0.42, c * 0.45)
    ring = [
        (a - r, b),
        (-a + r, b),
        (-a, b - r),
        (-a, -b + r),
        (-a + r, -b),
        (a - r, -b),
        (a, -b + r),
        (a, b - r),
    ]
    cc, ss = math.cos(turn), math.sin(turn)
    points = []
    for dz, inset in [(-c, r), (-c + r, 0), (c - r, 0), (c, r)]:
        for xx, yy in ring:
            xx, yy = xx * (1 - inset / a), yy * (1 - inset / b)
            points.append((x + cc * xx - ss * yy, y + ss * xx + cc * yy, z + dz))
    faces = [tuple(reversed(range(8))), tuple(range(24, 32))]
    for row in (0, 8, 16):
        for i in range(8):
            j = (i + 1) % 8
            faces.append((row + i, row + j, row + 8 + j, row + 8 + i))
    solid(points, faces, col)


def disk(x, y, z, r, h, col, n=18):
    faces = [tuple(reversed(range(n))), tuple(range(n, 2 * n))]
    for i in range(n):
        j = (i + 1) % n
        faces.append((i, j, n + j, n + i))
    solid(
        [
            (
                x + r * math.cos(2 * math.pi * i / n),
                y + r * math.sin(2 * math.pi * i / n),
                z + zz,
            )
            for zz in (-h / 2, h / 2)
            for i in range(n)
        ],
        faces,
        col,
    )


def beam(p, q, width, col):
    a, b = Vector(p), Vector(q)
    forward = (b - a).normalized()
    cross = forward.cross(Vector((0, 0, 1)))
    if cross.length < 0.1:
        cross = Vector((1, 0, 0))
    cross.normalize()
    up = forward.cross(cross).normalized()
    v = [
        tuple(end + width * (cross * u + up * w) / 2)
        for end in (a, b)
        for u, w in [(-1, -1), (1, -1), (1, 1), (-1, 1)]
    ]
    solid(
        v,
        [
            (3, 2, 1, 0),
            (4, 5, 6, 7),
            (0, 1, 5, 4),
            (1, 2, 6, 5),
            (2, 3, 7, 6),
            (3, 0, 4, 7),
        ],
        col,
    )


def floor_text(title, x, y, z, height, turn=0):
    # Enamel floor lettering, flattened into the static scenery.
    curve = bpy.data.curves.new("Platform stencil", "FONT")
    curve.body = title
    curve.align_x = "CENTER"
    curve.align_y = "CENTER"
    curve.size = height
    o = bpy.data.objects.new(title, curve)
    scene.collection.objects.link(o)
    o.location = (x, y, z)
    o.rotation_euler.z = turn
    mesh = bpy.data.meshes.new_from_object(
        o.evaluated_get(bpy.context.evaluated_depsgraph_get())
    )
    tint(mesh, rgba(PALETTE["letter"]))
    fixed = bpy.data.objects.new(title + " · stencil", mesh)
    scene.collection.objects.link(fixed)
    fixed.location = o.location
    fixed.rotation_euler = o.rotation_euler
    bpy.data.objects.remove(o, do_unlink=True)


def plinth(x, y, w, d):
    block(x, y, -0.66, w + 0.32, d + 0.32, 0.29, "wood_dark", 0.09)
    block(x, y, -0.42, w + 0.43, d + 0.43, 0.37, "wood", 0.09)
    block(x, y, -0.27, w + 0.46, d + 0.46, 0.045, "brass", 0.022)
    block(x, y, -0.15, w + 0.14, d + 0.14, 0.21, "enamel", 0.06)
    block(x, y, -0.054, w, d, 0.094, "tile3", 0.032)
    for a in range(round(w)):
        for b in range(round(d)):
            block(
                x - w / 2 + (a + 0.5) * w / round(w),
                y - d / 2 + (b + 0.5) * d / round(d),
                -0.013,
                w / round(w) - 0.014,
                d / round(d) - 0.014,
                0.029,
                "tile" + str((a * 13 + b * 11 + a * b) % 5),
                0.007,
            )


def track(x1, x2, y):
    block((x1 + x2) / 2, y, -0.11, x2 - x1, 1.46, 0.16, "umber", 0.028)
    for i in range(math.ceil((x2 - x1) / 0.40)):
        x = x1 + (i + 0.5) * 0.40
        block(x, y, -0.022, 0.15, 1.23, 0.12, "wood_dark", 0.022)
        for dy in (-0.34, 0.34):
            block(x, y + dy, 0.041, 0.17, 0.24, 0.04, "satin", 0.012)
    for dy in (-0.34, 0.34):
        block((x1 + x2) / 2, y + dy, 0.072, x2 - x1, 0.07, 0.09, "track", 0.015)


def crate(x, y, z, size=0.68):
    block(x, y, z + size * 0.46, size, size * 0.83, size * 0.92, "wood_light", 0.046)
    for dy in [-0.42, 0.42]:
        for dz in [0.12, 0.78]:
            block(
                x,
                y + size * dy,
                z + size * dz,
                size * 1.02,
                0.034,
                size * 0.13,
                "satin",
                0.015,
            )
    for dx in [-0.33, 0.33]:
        block(
            x + dx * size,
            y,
            z + size * 0.926,
            0.036,
            size * 0.87,
            0.028,
            "enamel",
            0.009,
        )
        block(
            x + dx * size,
            y - size * 0.425,
            z + size * 0.47,
            0.036,
            0.029,
            size * 0.90,
            "enamel",
            0.009,
        )
    block(
        x + 0.05,
        y - size * 0.445,
        z + size * 0.58,
        size * 0.21,
        0.022,
        size * 0.13,
        "ivory",
        0.004,
    )


def shelf(x, y, wide=False):
    # Open fronts keep the bag visible even in the low opening shot.
    for dx in (-0.79, 0.79):
        for dy in (-0.31, 0.31):
            block(x + dx, y + dy, 0.60, 0.081, 0.081, 1.20, "enamel", 0.014)
            block(x + dx, y + dy, 0.05, 0.15, 0.15, 0.08, "brass", 0.016)
    top = 1.146 if wide else 1.10
    for h in (0.16, top):
        block(x, y, h, 1.76, 0.80, 0.09, "brass", 0.023)
        block(x, y, h + 0.045, 1.67, 0.71, 0.05, "wood_light", 0.018)
    crate(x - 0.29, y, 0.21, 0.62)
    crate(x + 0.38, y + 0.025, 0.21, 0.47)
    block(x, y + 0.36, top + 0.17, 1.71, 0.065, 0.18, "enamel", 0.025)
    block(x + 0.54, y, top + 0.27, 0.38, 0.32, 0.34, "wood_light", 0.025)


def desk(x, y):
    block(x, y, 0.35, 0.78, 0.58, 0.70, "green", 0.047)
    block(x, y, 0.69, 0.90, 0.68, 0.095, "wood_light", 0.031)
    block(x - 0.105, y - 0.05, 0.751, 0.34, 0.24, 0.021, "paper", 0.003, turn=0.12)
    block(x - 0.105, y - 0.09, 0.765, 0.18, 0.016, 0.008, "blue", 0.002, turn=0.12)
    for z in (0.25, 0.45):
        block(x, y - 0.298, z, 0.44, 0.021, 0.16, "enamel", 0.012)
        block(x, y - 0.315, z + 0.02, 0.14, 0.031, 0.024, "brass", 0.005)


def shelter(x, y):
    for dx in (-1.0, 1.0):
        block(x + dx, y, 1.04, 0.15, 0.15, 2.08, "green", 0.02)
        block(x + dx, y, 0.14, 0.26, 0.26, 0.28, "satin", 0.027)
    block(x, y, 2.14, 2.28, 0.34, 0.16, "wood_light", 0.03)
    block(x, y + 0.05, 2.23, 2.49, 0.57, 0.08, "enamel", 0.022)
    for dx in (-0.84, -0.44, -0.04, 0.36, 0.76):
        block(x + dx, y - 0.24, 2.27, 0.11, 0.07, 0.043, "brass", 0.008)


def light_post(x, y):
    disk(x, y, 0.085, 0.17, 0.17, "enamel")
    disk(x, y, 1.02, 0.054, 1.89, "enamel", 14)
    disk(x, y, 1.96, 0.13, 0.085, "brass")
    disk(x, y, 2.10, 0.12, 0.22, "paper")
    disk(x, y, 2.23, 0.18, 0.065, "green")


def portal(x):
    for y in (-0.66, 2.32):
        block(x, y, 1.39, 0.28, 0.29, 2.78, "enamel", 0.04)
        block(x, y, 0.27, 0.41, 0.39, 0.48, "satin", 0.04)
        for h in (0.7, 2.20):
            block(x, y, h, 0.32, 0.32, 0.105, "brass", 0.017)
    for h in (2.60, 3.06):
        block(x, 0.83, h, 0.24, 3.37, 0.14, "green", 0.026)
    for i in range(6):
        y = -0.71 + i * 0.51
        beam(
            (x - 0.055, y, 2.68 if i % 2 == 0 else 2.99),
            (x - 0.055, y + 0.51, 2.99 if i % 2 == 0 else 2.68),
            0.07,
            "brass",
        )
    for y in (-0.65, 2.32):
        disk(x, y, 3.23, 0.11, 0.22, "gold")


def big_xy(cell):
    return (42 - cell[1], 27.7 - cell[0])


block(21, 8, -1.29, 400, 400, 0.60, "ground", 0.04)
plinth(6.43, -3.17, 14.1, 9.2)
plinth(35.45, 15.0, 15.6, 26.1)
# The bridge, its sleepers and the train continue through both sets in one coordinate frame.
block(23, 0.83, -0.43, 19.25, 2.56, 0.50, "enamel", 0.08)
for y in (-0.49, 2.16):
    block(23, y, -0.42, 19.28, 0.12, 0.42, "wood_light", 0.03)
    block(23, y, -0.24, 19.3, 0.105, 0.05, "brass", 0.012)
for x in (14.8, 18.7, 23.2, 27.6):
    for y in (-0.05, 1.74):
        block(x, y, -0.74, 0.55, 0.49, 0.48, "wood", 0.05)
track(-0.6, 46.4, 0.82)
portal(19.2)
layout = evidence["layout"]
sx, sy = layout["shelf"]
sx, sy = sx, 1 - sy
shelf(sx, sy)
desk(layout["desk"][0], -layout["desk"][1] + 0.82)
for xyz in [
    (4.2, -0.42, 0, 0.68),
    (4.87, -0.35, 0, 0.53),
    (0.12, -2.0, 0, 0.71),
    (12.38, -2.55, 0, 0.70),
]:
    crate(*xyz)
for x in (1.1, 5.25, 10.3):
    light_post(x, 1.14)
# Two passages in the divider follow the actual wall and gate coordinates.
for y, d in [(-0.33, 1.19), (-3.50, 1.05), (-6.58, 1.44)]:
    block(6, y, 0.41, 0.29, d, 0.82, "green", 0.055)
    block(6, y, 0.85, 0.33, d + 0.055, 0.075, "brass", 0.022)
for name, (x, z) in layout["gates"].items():
    for dy in (-0.72, 0.72):
        block(x, -z + dy, 0.53, 0.32, 0.22, 1.05, "enamel", 0.04)
    block(x, -z, 1.04, 0.32, 1.62, 0.13, "green", 0.03)
for x, y in [(4.55, -5), (7.55, -5), (11, -5)]:
    block(x, y, 0.027, 1.69, 0.93, 0.049, "teal", 0.022)
    for a in (-0.60, 0.60):
        block(x + a, y, 0.054, 0.065, 0.78, 0.016, "ivory", 0.005)
for x in (1.2, 3.1, 4.95, 7.1, 8.9, 10.8, 12.4):
    block(x, -5.95, 0.014, 0.57, 0.048, 0.016, "ivory", 0.005)
floor_text("MAIL  /  47", 3.3, -3.22, 0.009, 0.35)
floor_text("LOADING", 10, -6.2, 0.01, 0.27)
shelter(11.2, -0.40)
yard = evidence["yard"]["yard"]
track(27.8, 43.1, 3.15)
for i, order in enumerate(yard["orders"]):
    x, y = big_xy(order["shelf"])
    shelf_x = x + 1.04
    first = len(verts)
    shelf(shelf_x, y, wide=True)
    # Along this floor grid X runs down the length of the bench. Keep the rack
    # and its crates to one side of the robot's actual pickup cell.
    for j in range(first, len(verts)):
        xx, yy, zz = verts[j]
        verts[j] = (shelf_x + yy - y, y - (xx - shelf_x), zz)
    dx, dz = order["desk"]
    work_cell = (dx, dz + 1) if order["row"] == 2 else (dx + 1.05, dz)
    desk(*big_xy(work_cell))
    lane_color = ("green", "blue", "tangerine")[i]
    x, y = big_xy(order["handoff"])
    block(x, y, 0.018, 1.79, 1.78, 0.04, lane_color, 0.018)
    for off in [-0.68, 0.68]:
        block(x + off, y, 0.047, 0.067, 1.57, 0.018, "ivory", 0.005)
    px, py = big_xy(order["hatch"])
    for off in (-1.48, 1.48):
        block(px + off, py, 0.58, 1.69, 0.34, 1.16, "enamel", 0.045)
        block(px + off, py, 1.17, 1.73, 0.39, 0.08, "brass", 0.02)
    block(px, py, 1.28, 1.61, 0.34, 0.13, lane_color, 0.025)
    for k in range(7):
        block(px - 1.20, 7.7 + k * 2.4, 0.016, 0.063, 0.73, 0.023, lane_color, 0.009)
    floor_text(order["id"], px, py + 2.2, 0.014, 0.90)
    x, y = big_xy(order["door"])
    shelter(x, y + 0.55)
    light_post(x + 1.69, y + 0.41)
    for px, py in [(x - 1.17, 22.4), (x - 0.86, 23.15)]:
        crate(px, py, 0, 0.57)
floor_text("PARCEL  POST", 35.6, 27.25, 0.02, 0.58)
for x, y in [(28.15, 9.7), (42.9, 9.7), (28.15, 22.9), (42.9, 22.9)]:
    light_post(x, y)

# A small postal building sits behind the platform, clear of the through rails.
block(2.65, 3.81, -0.42, 7.60, 3.85, 0.77, "wood", 0.12)
block(2.65, 3.85, 1.10, 6.92, 3.04, 2.24, "ivory", 0.08)
block(2.65, 3.85, 0.30, 6.96, 3.07, 0.60, "green", 0.045)
block(2.65, 3.79, 2.29, 7.22, 3.38, 0.20, "brass", 0.045)
for i in range(8):
    dx = -0.6 + i * 0.91
    block(dx, 2.31, 1.39, 0.62, 0.10, 0.94, "enamel", 0.04)
    for off in (-0.12, 0.12):
        block(dx + off, 2.248, 1.40, 0.19, 0.037, 0.73, "wood_light", 0.025)
    block(dx, 2.221, 1.38, 0.56, 0.024, 0.045, "green", 0.008)
    block(dx, 2.24, 0.89, 0.72, 0.19, 0.09, "satin", 0.02)
for i in range(11):
    yy = 2.08 + i * 0.35
    high = 0.42 * (1 - abs(yy - 3.83) / 1.75)
    block(2.65, yy, 2.40 + high, 7.38, 0.44, 0.11, "green", 0.024)
block(4.93, 4.41, 2.78, 0.37, 0.43, 1.02, "wood", 0.026)
block(4.93, 4.41, 3.31, 0.49, 0.55, 0.11, "enamel", 0.024)
block(19.25, 3.65, -0.41, 4.35, 2.23, 0.72, "wood", 0.08)
for i in range(3):
    crate(18.08 + i * 0.84, 3.92, 0.0, 0.76)
crate(18.93, 3.93, 0.72, 0.54)
light_post(20.78, 3.20)
static = bpy.data.meshes.new("Joined painted scenery")
static.from_pydata(verts, [], polys)
static.update()
attr = static.color_attributes.new(name="Enamel", type="BYTE_COLOR", domain="POINT")
attr.data.foreach_set("color", array("f", (q for color in paint for q in color)))
static.color_attributes.active_color = attr
fixed = bpy.data.objects.new("Depot, bridge and three sorting lanes", static)
scene.collection.objects.link(fixed)


def import_model(name):
    existing = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=str(ROOT / "assets" / (name + ".glb")))
    objs = set(bpy.data.objects) - existing
    root = next(o for o in objs if o.parent not in objs)
    for o in objs:
        if o.type != "MESH":
            continue
        mesh = o.data
        if len(mesh.color_attributes):
            mesh.color_attributes.active_color = mesh.color_attributes[0]
            continue
        mat = mesh.materials[0] if mesh.materials else None
        bsdf = (
            mat.node_tree.nodes.get("Principled BSDF")
            if mat and mat.use_nodes
            else None
        )
        color = (
            tuple(bsdf.inputs["Base Color"].default_value)
            if bsdf
            else (0.7, 0.7, 0.6, 1)
        )
        tint(mesh, color)
    return root


def clone(root, name):
    def copy(o, parent):
        new = o.copy()
        scene.collection.objects.link(new)
        if parent:
            new.parent = parent
        for child in list(o.children):
            copy(child, new)
        return new

    result = copy(root, None)
    result.name = name
    return result


def locate(o, x, y, z, angle=0, scale=1):
    o.location = (x, y, z)
    o.rotation_mode = "XYZ"
    o.rotation_euler = (0, 0, angle)
    o.scale = (scale,) * 3


models = {
    name: import_model(name)
    for name in ("Jack", "Wick", "Skim", "Patch", "Mailbag", "Coach")
}
for name, (x, z) in layout["starts"].items():
    locate(models[name], x, -z, 0.013, -0.22 if name == "Jack" else 0.20, 1)
if SHOT in ("opening", "dispatch"):
    # Their recorded starting cells are three rows apart. The cross-aisle view puts
    # them side by side. Turn the parked bodies toward the lens for identification.
    models["Jack"].rotation_euler.z = -0.94
    models["Patch"].rotation_euler.z = -1.24
bag_xy = (sx - 0.28, sy - 0.05)
locate(models["Mailbag"], *bag_xy, 1.18, -0.20, 1.02)
bags = {}
for i, order in enumerate(yard["orders"]):
    bx, by = big_xy(order["shelf"])
    obj = clone(models["Mailbag"], "Order " + order["id"])
    locate(obj, bx + 0.82, by, 1.216, 0.14, 1)
    bags[order["id"]] = obj
    cx, cy = big_xy([24.55, order["row"]])
    locate(clone(models["Coach"], order["coach"]), cx, cy, 0.119, 0, 0.67)
coach = models["Coach"]
locate(coach, 9.65, 0.82, 0.12)
wheels = [o for o in coach.children_recursive if "Coach_wheel_" in o.name]
fork = next(
    o for o in models["Jack"].children_recursive if o.name.startswith("Jack_forks")
)
fork_start = fork.location.copy()
fleet = {
    k: clone(models[typ], k + " on sorting floor") for k, typ in yard["bodies"].items()
}
rolling = {
    k: [o for o in root.children_recursive if "_wheel_" in o.name]
    for k, root in fleet.items()
}
arms = {
    name: {
        o.name.split(".")[0].removeprefix("Wick_"): o
        for o in root.children_recursive
        if o.name.startswith("Wick_")
    }
    for name, root in fleet.items()
    if yard["bodies"][name] == "Wick"
}
# GLTF expresses the model's wheel rotations in local X after the coordinate conversion.
for o in wheels + [o for ws in rolling.values() for o in ws]:
    o.rotation_mode = "XYZ"
cam_data = bpy.data.cameras.new("Dolly camera")
cam = bpy.data.objects.new("Dolly camera", cam_data)
scene.collection.objects.link(cam)
cam_data.sensor_fit = "HORIZONTAL"
cam_data.clip_end = 400
scene.camera = cam
anchors = {}


def smooth(t, start, end):
    u = min(1, max(0, (t - start) / (end - start)))
    return u * u * u * (u * (u * 6 - 15) + 10)


def interp(a, b, t):
    return Vector(a).lerp(Vector(b), t)


def cubic(a, b, c, d, t):
    return interp(
        interp(interp(a, b, t), interp(b, c, t), t),
        interp(interp(b, c, t), interp(c, d, t), t),
        t,
    )


DOLLY = (14.60, 19.45)
RAISE_FORKS = (26.85, 28.41)
LOWER_FORKS = (34.05, 35.41)
opening_ranges = [(1, 1)] + [
    (math.floor(start * FPS) + 2, math.ceil(end * FPS) + 1)
    for start, end in (DOLLY, RAISE_FORKS, LOWER_FORKS)
]


def opening_plate(frame):
    held = 1
    for start, end in opening_ranges:
        if frame < start:
            return held
        if frame <= end:
            return frame
        held = end
    return held


if SHOT in ("dispatch", "travel"):
    post_motion = json.loads((ROOT / "assets/post-motion.json").read_text())
    timeline = cuts["dispatch"]["clock"]
    clock_times, clock_ticks = zip(*timeline)
    rates = [(b - a) / (v - u) for (u, a), (v, b) in zip(timeline, timeline[1:])]
    slopes = (
        [0]
        + [2 * a * b / (a + b) if a * b else 0 for a, b in zip(rates, rates[1:])]
        + [0]
    )
    post_joints = {
        name: {
            o.name.split(".")[0].removeprefix(name + "_"): o
            for o in root.children_recursive
            if o.name.startswith(name + "_")
        }
        for name, root in models.items()
        if name in layout["starts"]
    }
    for joints in post_joints.values():
        for key, obj in joints.items():
            obj.rotation_mode = "XYZ" if key.startswith("wheel_") else "QUATERNION"


def recorded_tick(t):
    i = min(len(rates) - 1, max(0, bisect_right(clock_times, t) - 1))
    start, end = clock_times[i : i + 2]
    span = end - start
    u = min(1, max(0, (t - start) / span))
    return (
        (1 + 2 * u) * (1 - u) ** 2 * clock_ticks[i]
        + u * (1 - u) ** 2 * span * slopes[i]
        + u * u * (3 - 2 * u) * clock_ticks[i + 1]
        + u * u * (u - 1) * span * slopes[i + 1]
    )


def three_point(v):
    return Vector((v[0], -v[2], v[1]))


def post_actors(t):
    tick = recorded_tick(t)
    pos = tick * post_motion["perTick"]
    idx = int(pos)
    lo, hi = post_motion["samples"][idx : idx + 2]
    u = pos - idx
    settle = smooth(t, 0.85, 5.3)
    for name, r in lo["robots"].items():
        other = hi["robots"][name]

        def value(key):
            return r[key] + (other[key] - r[key]) * u

        initial = {"Jack": -0.94, "Patch": -1.24}.get(name, 0.20)
        yaw = value("yaw")
        scale = 1 + (r["scale"] - 1) * settle
        locate(
            models[name],
            value("x"),
            -value("z"),
            0.013,
            initial + (yaw - initial) * settle,
            scale,
        )
        for key, a in r["joints"].items():
            b = other["joints"][key]
            obj = post_joints[name][key]
            obj.location = interp(three_point(a), three_point(b), u)
            qa = Quaternion((a[6], a[3], -a[5], a[4]))
            qb = Quaternion((b[6], b[3], -b[5], b[4]))
            obj.rotation_quaternion = qa.slerp(qb, u)
        for n in range(4):
            wheel = post_joints[name][f"wheel_{n}"]
            wheel.rotation_euler.x = (
                value("distance") / r["scale"] - wheel.location.x * (yaw - 0.22)
            ) / wheel.location.z
    bag = interp(three_point(lo["bag"]), three_point(hi["bag"]), u)
    bag += (Vector((*bag_xy, 1.18)) - three_point(post_motion["samples"][0]["bag"])) * (
        1 - smooth(tick, 8.6, 10)
    )
    models["Mailbag"].location = bag
    collar = interp(three_point(lo["collar"]), three_point(hi["collar"]), u) + Vector(
        (0, 0, 0.013)
    )
    return tick, collar


def railway_pose(t):
    u = smooth(t, -2.2, 15.8)
    eye = cubic(
        (6.8, -6.9, 4.0), (14, -11.0, 6.4), (28, -17.1, 21.5), (51.1, -13.6, 37.0), u
    )
    target = cubic(
        (9.2, 0.65, 0.66), (17.2, 1, 0.92), (27.7, 3.2, 0.70), (35.7, 12.9, 0.30), u
    )
    return eye, target, 32 + 3 * u, (target.x - 9.2) * 0.94


def post_camera(t):
    # Move between deliberately composed stations. Each track has zero velocity
    # and acceleration at either end; event ticks never set a camera position.
    eye = Vector((4.64, -7.34, 2.65))
    target = Vector((9.50, -5.62, 0.69))
    lens = 35.9
    for a, b, end, subject, glass in [
        (0.65, 6.35, (2.30, -10.35, 6.2), (3.05, -2.85, 0.65), 33.0),
        (7.15, 12.65, (2.65, -9.65, 3.48), (4.80, -4.72, 0.56), 39.5),
        (13.15, 19.25, (11.65, -8.28, 2.75), (8.98, -4.07, 0.66), 41.5),
        (30.30, 34.65, (13.24, -9.38, 3.87), (9.52, -5.08, 0.58), 37.0),
        (40.45, 46.65, (11.43, -6.95, 2.50), (9.15, -3.58, 0.57), 40.0),
        (50.05, 54.8, (12.42, -9.11, 4.05), (8.40, -4.75, 0.61), 37.0),
    ]:
        f = smooth(t, a, b)
        eye = interp(eye, end, f)
        target = interp(target, subject, f)
        lens += (glass - lens) * f
    end_time = cuts["dispatch"]["frames"] / FPS
    out_eye, out_target, out_lens, roll = railway_pose(t - end_time)
    track = smooth(t, 53.8, 59.62)
    wide = smooth(t, 56.24, 59.58)
    eye = interp(eye, out_eye, track)
    target = interp(target, out_target, track)
    cam_data.shift_x = (W - 900) / (2 * W) * (1 - wide)
    cam_data.lens = lens * (900 / W) * (1 - track) + out_lens * track
    cam_data.dof.use_dof = t < 59.6
    cam_data.dof.aperture_fstop = (1.18 + 2.9 * smooth(t, 0.6, 5.8) + 45 * track) * (
        cam_data.lens / lens
    )
    cam_data.dof.focus_distance = (target - eye).length - 0.16
    cam.location = eye
    cam.rotation_euler = (target - eye).to_track_quat("-Z", "Y").to_euler()
    locate(coach, 9.65 + roll, 0.82, 0.12)
    for w in wheels:
        w.rotation_euler.x = roll / 0.215
    return wide


# Locked photographs can be reused while the graph and the drawn fault effects animate.
POST_HOLDS = [(21.10, 30.30), (34.67, 40.44)]


def post_plate(frame):
    for start, end in POST_HOLDS:
        first = math.ceil(start * FPS) + 1
        if first <= frame <= math.floor(end * FPS) + 1:
            return first
    return frame


def place_camera(frame):
    t = (frame - 1) / FPS
    if SHOT == "dispatch":
        tick, collar = post_actors(t)
        wide = post_camera(t)
        if tick >= 58:
            models["Mailbag"].location.x += coach.location.x - 9.65
        return tick, collar, wide
    if SHOT == "opening":
        slide = smooth(t, *DOLLY)
        eye = interp((3.9, -15.6, 11.8), (4.64, -7.34, 2.65), slide)
        target = interp((6.35, -2.65, 0.48), (9.50, -5.62, 0.69), slide)
        cam_data.lens = 38 - 2.1 * slide
        fork.location = fork_start.copy()
        fork.location.z += 0.10 * (smooth(t, *RAISE_FORKS) - smooth(t, *LOWER_FORKS))
        distance = 0
    else:
        # A pair of continuously moving Bezier curves carries the eye and its focus
        # through the same rail portal. There is no switch of lens, map or shot.
        eye, target, cam_data.lens, distance = railway_pose(t)
    locate(coach, 9.65 + distance, 0.82, 0.12)
    if SHOT == "travel":
        models["Mailbag"].location = travel_bag + Vector((distance, 0, 0))
    for w in wheels:
        w.rotation_euler.x = distance / 0.215
    cam_data.dof.use_dof = SHOT == "opening"
    cam_data.dof.aperture_fstop = 4.8 - 3.62 * slide if SHOT == "opening" else 0.46
    cam_data.dof.focus_distance = (target - eye).length - 0.16
    cam.location = eye
    cam.rotation_euler = (target - eye).to_track_quat("-Z", "Y").to_euler()
    # Replay the first dispatch. At the end five jobs have started; the next
    # checkpoint would complete a picker, so stop just before that checkpoint.
    sample = motion[frame - 1] if SHOT == "travel" else motion[0]
    for name, root in fleet.items():
        pose = sample["robots"][name]
        x, y = big_xy((pose["x"], pose["z"]))
        locate(root, x, y, 0.018, math.pi * 1.5 + pose["yaw"], 0.92)
        for joint, values in pose.get("arm", {}).items():
            obj = arms[name][joint]
            px, py, pz, qx, qy, qz, qw = values
            obj.location = (px, -pz, py)
            obj.rotation_mode = "QUATERNION"
            obj.rotation_quaternion = (qw, qx, -qz, qy)
        for wheel in rolling[name]:
            # In the imported rig each axle is positioned one tyre radius above the floor.
            wheel.rotation_euler.x = (
                pose["distance"] / 0.92 - wheel.location.x * (pose["yaw"] - 0.22)
            ) / wheel.location.z
    for identifier, (px, py, pz) in sample["bags"].items():
        bx, by = big_xy((px, pz))
        bags[identifier].location = (bx, by, py - 0.04)
    return sample["tick"]


def light(name, kind, at, energy, color, size, target):
    data = bpy.data.lights.new(name, kind)
    data.energy = energy
    data.color = color
    data.use_shadow = name != "Open sky"
    if kind == "SUN":
        data.angle = size
    else:
        data.shape = "DISK"
        data.size = size
    obj = bpy.data.objects.new(name, data)
    scene.collection.objects.link(obj)
    obj.location = at
    obj.rotation_euler = (
        (Vector(target) - Vector(at)).to_track_quat("-Z", "Y").to_euler()
    )


if os.environ.get("MOONMAIL_STUDIO_LIGHT", "eevee") == "eevee":
    scene.render.engine = "BLENDER_EEVEE"
    scene.eevee.taa_render_samples = 5
    scene.render.use_persistent_data = True
    scene.eevee.use_shadows = True
    scene.eevee.shadow_ray_count = 1
    scene.eevee.shadow_step_count = 4
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast"
    world = scene.world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    bg.inputs[0].default_value = (0.40, 0.52, 0.56, 1)
    bg.inputs[1].default_value = 0.45
    pigments = {}
    for mesh in bpy.data.meshes:
        attr = mesh.color_attributes.active_color
        if not attr:
            continue
        key = attr.name
        if key not in pigments:
            mat = bpy.data.materials.new("Enamel paint / " + key)
            mat.use_nodes = True
            bsdf = mat.node_tree.nodes.get("Principled BSDF")
            bsdf.inputs["Roughness"].default_value = 0.55
            src = mat.node_tree.nodes.new("ShaderNodeVertexColor")
            src.layer_name = key
            mat.node_tree.links.new(src.outputs["Color"], bsdf.inputs["Base Color"])
            pigments[key] = mat
        mesh.materials.clear()
        mesh.materials.append(pigments[key])
    light("Late sun", "SUN", (-18, -23, 32), 3.0, (1, 0.84, 0.64), 0.085, (10, 6, 0))
    light("Open sky", "SUN", (8, 20, 25), 1.35, (0.69, 0.86, 1), 0.65, (20, 1, 0))
    light("Camera bounce", "AREA", (4, -11, 9), 760, (0.87, 0.92, 1), 11, (5, -2, 0))


def project(xyz):
    p = world_to_camera_view(scene, cam, Vector(xyz))
    return [round(p.x * W, 2), round((1 - p.y) * H, 2), round(p.z, 3)]


def anchor_frame(frame):
    tick = place_camera(frame)
    cam_mat = cam.rotation_euler.to_matrix().to_4x4()
    cam_mat.translation = cam.location
    cam.matrix_world = cam_mat
    if SHOT == "dispatch":
        tick, collar, wide = tick
        return dict(
            plate=post_plate(frame),
            tick=round(tick, 5),
            wide=round(wide, 7),
            **{
                name: project(models[name].location + Vector((0, 0, 0.28)))
                for name in layout["starts"]
            },
            collar=project(collar),
            bag=project(models["Mailbag"].location + Vector((0, 0, 0.20))),
            slip=project((layout["desk"][0] - 0.105, -layout["desk"][1] + 0.77, 0.775)),
        )
    if SHOT == "opening":
        hx, hz = layout["gates"]["Hatch"]
        dx, dz = layout["desk"]
        return dict(
            plate=opening_plate(frame),
            bag=project((*bag_xy, 1.54)),
            hatch=project((hx, -hz, 0.57)),
            coach=project((coach.location.x, coach.location.y, 1.46)),
            slip=project((dx - 0.105, -dz + 0.77, 0.775)),
            **{
                name: project(models[name].location + Vector((0, 0, 0.28)))
                for name in layout["starts"]
            },
        )
    return dict(
        tick=round(tick, 4),
        robots={
            k: project((root.location.x, root.location.y, 0.15))
            for k, root in fleet.items()
        },
    )


# Analytical animation is evaluated before every sampled frame, including offline frames.
def update(scene, *_):
    place_camera(scene.frame_current)


# Freeze the distant sorting floor during the first delivery.
if SHOT == "dispatch":
    for name, root in fleet.items():
        p = motion[0]["robots"][name]
        locate(root, *big_xy((p["x"], p["z"])), 0.018, math.pi * 1.5 + p["yaw"], 0.92)
elif SHOT == "travel":
    post_actors(cuts["dispatch"]["frames"] / FPS)
    travel_bag = models["Mailbag"].location.copy()
bpy.app.handlers.frame_change_pre.append(update)
anchors = [anchor_frame(f) for f in range(1, LAST + 1)]
anchor_path = ROOT / (SHOT + "-anchors.json")
temp_anchors = anchor_path.with_suffix(f".{os.getpid()}.tmp")
temp_anchors.write_text(json.dumps(anchors))
temp_anchors.replace(anchor_path)
partial = opts and opts[0] == "--range"
if opts == ["--anchors"]:
    print(f"Projected {len(anchors)} frames for {SHOT}.")
elif opts and not partial:
    for frame in (int(f) for f in opts[0].split(",")):
        scene.frame_set(frame)
        scene.render.filepath = str(ROOT / (SHOT + "-proof-%04d.jpg" % frame))
        bpy.ops.render.render(write_still=True)
else:
    out = ROOT / (SHOT + "-frames")
    out.mkdir(exist_ok=True)
    scene.render.filepath = str(out / "plate-")
    scene.render.use_overwrite = False
    # The world is physically stationary during the locked-off explanatory holds.
    # The compositor still draws and encodes every graph frame at 60 fps.
    ranges = opening_ranges if SHOT == "opening" else [(1, LAST)]
    if SHOT == "dispatch":
        boundary = math.floor(56.24 * FPS) + 1
        holds = [
            (math.ceil(s * FPS) + 1, math.floor(e * FPS) + 1) for s, e in POST_HOLDS
        ]
        ranges = [
            (1, holds[0][0]),
            (holds[0][1] + 1, holds[1][0]),
            (holds[1][1] + 1, boundary),
            (boundary + 1, LAST),
        ]
    for start, end in ranges:
        if partial:
            start, end = max(start, int(opts[1])), min(end, int(opts[2]))
            if end < start:
                continue
        if SHOT == "dispatch":
            scene.render.use_border = scene.render.use_crop_to_border = (
                start <= boundary
            )
            scene.render.border_min_x = 0
            scene.render.border_max_x = 900 / W
        scene.frame_start, scene.frame_end = start, end
        bpy.ops.render.render(animation=True)
