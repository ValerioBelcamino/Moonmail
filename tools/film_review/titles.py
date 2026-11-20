"""Composite the recorded graph and tracked world points on the native 60 fps Blender plates."""

import argparse
from contextlib import contextmanager, nullcontext
from functools import lru_cache
import json
import math
from pathlib import Path
import subprocess
from tempfile import TemporaryDirectory

import numpy as np
import skia

W, H, FPS = 1920, 1080, 60
INK = "#0e242a"
DEEP = "#0a1b22"
SLATE = "#315058"
PAPER = "#fff3d8"
MINT = "#9ce8cc"
GOLD = "#ffce80"
LILAC = "#d9bcff"
QUIET = "#abc2c0"
FAINT = "#6d9598"
FULL = skia.Rect.MakeWH(W, H)
LEFT = 900
FILES = {
    "serif": ("georgia.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"),
    "sans": ("segoeui.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    "bold": ("segoeuib.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    "mono": ("consola.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"),
}


def clamp(v):
    return min(1.0, max(0.0, v))


def fade(t, at, span=0.5):
    x = clamp((t - at) / span)
    return x * x * (3 - 2 * x)


def mix(a, b, t):
    return (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)


@lru_cache(None)
def color(code, alpha=255):
    return skia.ColorSetARGB(alpha, *[int(code[i : i + 2], 16) for i in (1, 3, 5)])


def ink(code, alpha=1, width=0):
    p = skia.Paint(Color=color(code, round(255 * clamp(alpha))), AntiAlias=True)
    if width:
        p.setStyle(skia.Paint.kStroke_Style)
        p.setStrokeWidth(width)
        p.setStrokeCap(skia.Paint.kRound_Cap)
        p.setStrokeJoin(skia.Paint.kRound_Join)
    return p


@lru_cache(None)
def font(family, size):
    name, alt = FILES[family]
    path = Path("/mnt/c/Windows/Fonts") / name
    face = skia.Typeface.MakeFromFile(str(path if path.exists() else alt))
    f = skia.Font(face, size)
    f.setEdging(skia.Font.Edging.kAntiAlias)
    f.setSubpixel(True)
    return f


def label(c, text, x, y, size=29, face="sans", col=PAPER, align="left", alpha=1):
    if alpha <= 0 or not text:
        return
    f = font(face, size)
    if align != "left":
        x -= f.measureText(text) * (1 if align == "right" else 0.5)
    c.drawSimpleText(text, x, y, f, ink(col, alpha))


def stroke(c, pts, col, width=3, alpha=1):
    if alpha <= 0 or len(pts) < 2:
        return
    path = skia.Path()
    path.moveTo(*pts[0])
    for pt in pts[1:]:
        path.lineTo(*pt)
    c.drawPath(path, ink(col, alpha, width))


def disc(c, x, y, r, col, alpha=1, width=0):
    if r > 0 and alpha > 0:
        c.drawCircle(x, y, r, ink(col, alpha, width))


def rect(c, x, y, w, h, col, rad=0, alpha=1, stroke_width=0):
    if alpha > 0:
        c.drawRoundRect(
            skia.Rect.MakeXYWH(x, y, w, h), rad, rad, ink(col, alpha, stroke_width)
        )


def gradient(c, x, y, w, h, start, end, colors, stops):
    p = skia.Paint()
    p.setShader(
        skia.GradientShader.MakeLinear(
            [start, end], [color(k, a) for k, a in colors], stops
        )
    )
    c.drawRect(skia.Rect.MakeXYWH(x, y, w, h), p)


def layer(c, amount, draw):
    if amount <= 0:
        return
    if amount >= 0.999:
        draw()
        return
    c.saveLayerAlpha(FULL, round(255 * clamp(amount)))
    draw()
    c.restore()


def glyph(c, name, x, y, scale, col):
    c.save()
    c.translate(x, y)
    c.scale(scale, scale)

    def ln(*p):
        stroke(c, p, col, 2)

    def box(a, b, w, h, r=2):
        rect(c, a, b, w, h, col, r, stroke_width=2)

    def circle(a, b, r):
        disc(c, a, b, r, col, width=2)

    if name == "bag":
        ln((-4, -11), (4, -11), (3, -7), (-3, -7), (-4, -11))
        ln((-3, -6), (-8, -1), (-10, 6), (-8, 9), (8, 9), (10, 6), (8, -1), (3, -6))
        ln((-3, -4), (3, -4))
        ln((2, 1), (6, 2), (5, 5))
    elif name == "shelf":
        for a in (-9, 9):
            ln((a, -10), (a, 11))
        for b in (-5, 4, 9):
            ln((-10, b), (10, b))
        box(-5, -10, 6, 4, 1)
    elif name == "slip":
        ln((-7, -11), (4, -11), (9, -6), (9, 10), (-7, 10), (-7, -11))
        ln((4, -11), (4, -6), (9, -6))
        ln((-3, -1), (5, -1))
        ln((-3, 4), (3, 4))
    elif name == "route":
        circle(-7, 7, 2.8)
        circle(7, -7, 2.8)
        ln((-4, 7), (0, 7), (0, -3), (5, -3), (5, -5))
    elif name == "coach":
        box(-10, -6, 20, 13, 3)
        for a in (-6, 0, 6):
            ln((a, -3), (a, 1))
        circle(-6, 8, 1.8)
        circle(6, 8, 1.8)
    elif name == "robot":
        box(-10, -6, 20, 15, 4)
        for a in (-4, 4):
            disc(c, a, 0, 1.6, col)
        ln((-2, 5), (2, 5))
        ln((0, -10), (0, -7))
        disc(c, 0, -11, 1.4, col)
    elif name == "body":
        box(-10, -3, 13, 10, 2)
        ln((-6, -3), (-6, -9), (2, -9), (4, -3))
        ln((7, -10), (7, 4), (12, 4))
        circle(-6, 8, 2.6)
        circle(2, 8, 2.6)
    elif name in ("tool", "fork"):
        ln((-7, -10), (-7, 7), (9, 7))
        ln((-2, -9), (-2, 2), (11, 2))
        if name == "tool":
            ln((-10, -2), (-4, -2))
    elif name == "lift":
        box(-8, 0, 16, 8, 1)
        ln((0, -1), (0, -11))
        ln((-4, -7), (0, -11), (4, -7))
        ln((-11, 10), (11, 10))
    elif name == "carry":
        box(-7, -8, 14, 12, 1)
        ln((0, -8), (0, -4))
        ln((-11, 1), (-11, 9), (10, 9), (10, 1))
    elif name == "scan":
        for dx, dy in [(-1, -1), (-1, 1), (1, -1), (1, 1)]:
            ln((dx * 6, dy * 10), (dx * 10, dy * 10), (dx * 10, dy * 6))
        for a in (-5, -2, 1, 5):
            ln((a, -4), (a, 4))
    elif name == "hatch":
        ln((-10, 9), (-10, -7), (10, -7), (10, 9))
        ln((-13, 9), (-7, 9))
        ln((7, 9), (13, 9))
        ln((-6, 0), (5, 0), (2, -3))
        ln((5, 0), (2, 3))
    elif name == "crawler":
        box(-10, -4, 20, 11, 4)
        circle(-6, 8, 2)
        circle(6, 8, 2)
        ln((-2, -5), (-2, -9), (4, -9))
    elif name == "driver":
        ln((-7, 9), (2, -1))
        box(-10, 4, 6, 6, 2)
        ln((1, 0), (7, -8), (11, -9), (9, -5), (4, 0))
    elif name == "model":
        for yy, off in [(-7, 0), (0, -3), (7, 0)]:
            for xx in (-7, 7):
                disc(c, xx + off, yy, 1.9, col)
            ln((-7 + off, yy), (7 + off, yy))
        ln((-7, -7), (-10, 0), (-7, 7))
        ln((7, -7), (4, 0), (7, 7))
    elif name == "envelope":
        box(-12, -8, 24, 16, 2)
        ln((-11, -6), (0, 2), (11, -6))
        ln((-11, 7), (-4, 0))
        ln((11, 7), (4, 0))
    c.restore()


def trace(c, pts, t, start, span=0.65, col=MINT, alpha=0.95, arrow=True, width=2.8):
    """Grow a whole polyline by arclength, then leave an arrow at its true endpoint."""
    p = fade(t, start, span)
    if p <= 0:
        return
    lengths = [math.dist(a, b) for a, b in zip(pts, pts[1:])]
    remaining = p * sum(lengths)
    partial = [pts[0]]
    tangent = (1, 0)
    for a, b, d in zip(pts, pts[1:], lengths):
        if not d:
            continue
        tangent = ((b[0] - a[0]) / d, (b[1] - a[1]) / d)
        cut = min(1, max(0, remaining / d))
        partial.append(mix(a, b, cut))
        if remaining <= d:
            break
        remaining -= d
    stroke(c, partial, col, width, alpha)
    end = partial[-1]
    if p < 0.997:
        disc(c, *end, 6, col, 0.19 * alpha)
        disc(c, *end, 2.9, col, alpha)
    elif arrow:
        dx, dy = tangent
        stroke(
            c,
            [
                (end[0] - 9 * dx - 4 * dy, end[1] - 9 * dy + 4 * dx),
                end,
                (end[0] - 9 * dx + 4 * dy, end[1] - 9 * dy - 4 * dx),
            ],
            col,
            width,
            alpha,
        )


def edge_label(c, text, x, y, t, start):
    a = fade(t, start, 0.39)
    if a <= 0:
        return
    f = font("sans", 22)
    w = f.measureText(text) + 20
    rect(c, x - w / 2, y - 23, w, 30, INK, 8, alpha=a)
    label(c, text, x, y, 22, col=QUIET, align="center", alpha=a)


def seal(c, x, y, name, title, t, at, col=MINT, sub="", r=34):
    a = fade(t, at, 0.49)
    if a <= 0:
        return

    def paint():
        rr = r * (0.85 + 0.15 * a)
        disc(c, x, y, rr + 6, col, 0.09)
        disc(c, x, y, rr, INK)
        disc(c, x, y, rr, col, 0.96, 2.2)
        glyph(c, name, x, y, 1.39 if r > 29 else 1.05, col)
        label(c, title, x, y + rr + 38, 31, "bold", PAPER, "center")
        if sub:
            label(c, sub, x, y + rr + 66, 21, col=QUIET, align="center")

    layer(c, a, paint)


def map_pin(c, anchor, offset, name, col, t, at):
    x, y, depth = anchor
    if depth <= 0:
        return
    a = fade(t, at, 0.42) * (1 - fade(t, 14.50, 0.48))
    if a <= 0:
        return
    tx, ty = x + offset[0], y + offset[1]
    w = font("bold", 23).measureText(name) + 32

    def draw():
        pulse = math.sin(math.pi * clamp((t - at) / 1.35))
        disc(c, x, y, 13, DEEP, 0.75)
        disc(c, x, y, 12, col, 1, 2.8)
        disc(c, x, y, 19 + 12 * pulse, col, 0.75 * pulse, 2.5)
        end_y = ty - math.copysign(20, offset[1])
        stem = [(x, y + math.copysign(14, offset[1])), (tx, end_y)]
        stroke(c, stem, DEEP, 5)
        stroke(c, stem, col, 2.3)
        rect(c, tx - w / 2, ty - 20, w, 40, DEEP, 9, 0.96)
        rect(c, tx - w / 2, ty - 20, w, 40, col, 9, 0.9, 1.6)
        label(c, name, tx, ty + 8, 23, "bold", col, "center")

    layer(c, a, draw)


def head(c, kicker, title):
    label(c, kicker, 975, 112, 24, "bold", MINT)
    label(c, title, 971, 207, 58, "serif")
    stroke(c, [(975, 247), (1836, 247)], SLATE, 1.7)


def footer(c, heading, body):
    stroke(c, [(975, 899), (1836, 899)], SLATE, 1.7)
    label(c, heading, 975, 951, 24, "bold", GOLD)
    label(c, body, 975, 997, 29)


def delivery(c, t, anchors, e):
    head(c, "THE DELIVERY", "Before the train can leave")
    order = e["order"]
    for i, name in enumerate(("Wick", "Skim", "Jack", "Patch")):
        since = t - (0.12 + i * 0.33)
        glow = fade(since, 0, 0.44) * (1 - fade(t, 2.40, 0.66))
        if glow:
            x, y, _ = anchors[name]
            tone = CREW_COLORS.get(name, PAPER)
            disc(c, x, y, 21, DEEP, 0.75 * glow, 4.5)
            disc(c, x, y, 21, tone, 0.95 * glow, 2.5)
    label(c, "Move the mailbag", 975, 338, 35, "bold")
    # This is a geographic itinerary. The proposed action dependencies arrive later.
    trace(c, [(1095, 467), (1354, 467)], t, 5.82, 0.84, GOLD)
    trace(c, [(1429, 467), (1691, 467)], t, 7.24, 0.78, GOLD)
    seal(c, 1056, 467, "shelf", e["holder"], t, 0.0, GOLD, sub=order["bag"])
    seal(c, 1392, 467, "hatch", e["hatch"], t, 5.75, GOLD, sub="Passage")
    seal(c, 1730, 467, "coach", order["coach"], t, 7.20, GOLD, sub="Train")

    def signature():
        stroke(c, [(975, 646), (1836, 646)], SLATE, 1.7)
        disc(c, 1027, 763, 40, MINT, 0.12)
        glyph(c, "slip", 1027, 763, 1.86, MINT)
        label(c, "Sign the delivery slip", 1100, 760, 37, "bold")
        label(
            c,
            e["shared_scan"]["slip"] + "  ·  " + e["shared_scan"]["desk"],
            1100,
            810,
            25,
            col=QUIET,
        )

    layer(c, fade(t, 8.90, 0.68), signature)
    layer(
        c,
        fade(t, 12.05),
        lambda: footer(c, "The dispatch problem", "Which robot can do each job?"),
    )
    for key, offset, name, col, at in (
        ("bag", (-38, -85), e["holder"], GOLD, 3.20),
        ("hatch", (-10, 90), e["hatch"], GOLD, 5.82),
        ("coach", (48, -84), order["coach"], GOLD, 7.26),
        ("slip", (86, 73), "Delivery slip", MINT, 9.85),
    ):
        map_pin(c, anchors[key], offset, name, col, t, at)


def world(c, t, e):
    order = e["order"]
    head(c, "RELATE  /  WORLD STATE", "What the orchestrator reads")
    # All four arrows follow the direction stored in Relate.
    trace(c, [(1197, 519), (1197, 395), (1457, 395)], t, 0.20, 0.63, GOLD)
    trace(c, [(1230, 558), (1446, 558)], t, 0.54, 0.63, MINT)
    trace(c, [(1698, 600), (1698, 568), (1519, 568)], t, 0.99, 0.60, MINT)
    trace(c, [(1197, 716), (1146, 683), (1146, 611), (1169, 582)], t, 1.38, 0.65, MINT)
    edge_label(c, "held by", 1334, 387, t, 0.45)
    edge_label(c, "addressed to", 1333, 549, t, 0.81)
    edge_label(c, "serves", 1608, 559, t, 1.11)
    edge_label(c, "covers", 1101, 652, t, 1.50)
    seal(c, 1197, 558, "bag", order["bag"], t, -0.20, GOLD)
    seal(c, 1493, 395, "shelf", e["holder"], t, 0.35, GOLD)
    seal(c, 1483, 558, "route", order["route"], t, 0.80, sub="Postal route")
    seal(c, 1698, 637, "coach", order["coach"], t, 1.05)
    seal(
        c,
        1197,
        755,
        "slip",
        order["bill"],
        t,
        1.45,
        sub=e["world"]["manifest"].capitalize(),
    )
    stroke(c, [(975, 899), (1836, 899)], SLATE, 1.7)
    glyph(c, "model", 996, 950, 1.16, LILAC)
    label(c, "Orchestrator", 1028, 960, 27, "bold", LILAC)
    glyph(c, "route", 1556, 950, 1.16, MINT)
    label(c, "Relate", 1590, 960, 27, "bold", MINT)
    stroke(c, [(1220, 951), (1525, 951)], FAINT, 1.8)
    for start, left, right, tone in (
        (0.28, 1220, 1525, LILAC),
        (1.76, 1525, 1220, MINT),
    ):
        progress = fade(t, start, 1.17)
        if 0 < progress < 1:
            x = left + (right - left) * progress
            disc(c, x, 951, 11, tone, 0.18)
            disc(c, x, 951, 5, tone)
    label(
        c,
        "Read goal and state" if t < 1.76 else "Return connected facts",
        1371,
        931,
        21,
        col=QUIET,
        align="center",
    )
    label(
        c, "The same graph holds the fleet’s bodies, tools and skills.", 975, 1007, 28
    )


CREW_COLORS = {"Jack": GOLD, "Patch": MINT}
BODY_ROLES = {"Lift": "Forklift", "Service crawler": "Mechanic"}


def identify_crew(c, t, anchors, e):
    for name, at in (("Jack", 19.55), ("Patch", 21.42)):
        alpha = fade(t, at, 0.47)
        if not alpha:
            continue
        x, y, depth = anchors[name]
        if depth <= 0:
            continue
        width = 186
        left = max(16, min(LEFT - width - 16, x - width / 2))
        top = min(H - 115, y + 86)
        shade = CREW_COLORS[name]
        body = e["crew"][name]["body"]

        def plate():
            stroke(c, [(x, y + 42), (x, top)], DEEP, 5, 0.7)
            stroke(c, [(x, y + 42), (x, top)], shade, 2, 0.95)
            rect(c, left, top, width, 80, DEEP, 12, alpha=0.96)
            rect(c, left, top, width, 80, shade, 12, alpha=0.82, stroke_width=1.7)
            label(c, name, left + 18, top + 34, 29, "bold", shade)
            label(c, BODY_ROLES.get(body, body), left + 18, top + 63, 22, col=PAPER)
            if "Scan" in e["crew"][name]["skills"]:

                def scanner():
                    glyph(c, "scan", left + width - 29, top + 28, 1.05, shade)
                    label(
                        c,
                        "Scan",
                        left + width - 29,
                        top + 62,
                        18,
                        col=shade,
                        align="center",
                    )

                layer(c, fade(t, 31.40, 0.50), scanner)
            shared = math.sin(math.pi * clamp((t - 32.90) / 2.05))
            lifting = (
                math.sin(math.pi * clamp((t - 35.84) / 1.78)) if name == "Jack" else 0
            )
            signing = math.sin(math.pi * clamp((t - 38.38) / 2.29))
            pulse = max(shared, lifting, signing)
            if pulse:
                disc(c, x, y, 48 + 7 * pulse, shade, 0.82 * pulse, 3.0)
                rect(c, left - 4, top - 4, width + 8, 88, shade, 15, pulse * 0.92, 3.3)

        layer(c, alpha, plate)


def fact_card(c, x, y, w, icon, name, detail, tone, t, at):
    def draw():
        rect(c, x, y - 35, w, 70, "#173138", 13)
        rect(c, x, y - 35, w, 70, tone, 13, 0.82, 1.8)
        glyph(c, icon, x + 25, y, 1.18, tone)
        label(c, name, x + 48, y - 2, 25, "bold")
        label(c, detail, x + 48, y + 23, 19, col=QUIET)

    layer(c, fade(t, at, 0.44), draw)


def embodiment(c, t, e):
    head(c, "RELATE  /  ROBOT CAPABILITIES", "What can each robot do?")
    tool, scan = e["tool"], e["shared_scan"]
    working = e["world"]["forks"] == e["load_guard"]
    # One robot must satisfy both clauses of the lifting query. Both bodies
    # independently reach the very same persisted Scan node.
    for path, at, tone in (
        ([(1100, 445), (1140, 445), (1184, 333), (1218, 333)], 25.78, GOLD),
        ([(1100, 475), (1154, 475), (1190, 491), (1218, 491)], 20.00, GOLD),
        ([(1100, 758), (1138, 758), (1187, 688), (1218, 688)], 21.70, MINT),
        ([(1100, 786), (1154, 786), (1187, 845), (1218, 845)], 22.02, MINT),
        ([(1468, 333), (1518, 333), (1558, 382)], 26.27, GOLD),
        ([(1468, 483), (1512, 483), (1558, 420)], 23.88, GOLD),
    ):
        trace(c, path, t, at, 0.65, tone)
    for txt, x, y, at in (
        ("mounts", 1158, 367, 25.96),
        ("is a", 1160, 469, 20.28),
        ("is a", 1156, 716, 21.91),
        ("mounts", 1158, 827, 22.28),
        ("provides", 1514, 320, 26.30),
        ("supports", 1511, 468, 24.16),
    ):
        edge_label(c, txt, x, y, t, at)
    fact_card(c, 946, 460, 154, "robot", "Jack", "Robot", GOLD, t, 19.72)
    fact_card(c, 946, 773, 154, "robot", "Patch", "Robot", MINT, t, 21.43)
    fact_card(
        c,
        1218,
        333,
        250,
        "tool",
        tool["name"],
        "Working" if working else "Offline",
        GOLD,
        t,
        26.00,
    )
    fact_card(
        c,
        1218,
        491,
        250,
        "body",
        BODY_ROLES[e["crew"]["Jack"]["body"]] + " chassis",
        "Body",
        GOLD,
        t,
        20.30,
    )
    fact_card(
        c, 1218, 688, 250, "crawler", e["crew"]["Patch"]["body"], "Body", MINT, t, 21.88
    )
    fact_card(
        c, 1218, 845, 250, "driver", e["instrument"]["name"], "Tool", MINT, t, 22.24
    )

    def conjunction():
        disc(c, 1576, 401, 29, INK)
        disc(c, 1576, 401, 29, GOLD, 0.90, 2)
        label(c, "AND", 1576, 408, 21, "bold", GOLD, "center")

    layer(c, fade(t, 26.64, 0.40), conjunction)
    trace(c, [(1606, 401), (1652, 401)], t, 26.97, 0.48, GOLD)
    fact_card(c, 1655, 401, 223, "lift", tool["label"], "Skill", GOLD, t, 27.14)
    shared_at = 29.90
    top = [(1468, 511), (1508, 511), (1589, 590), (1652, 590)]
    bottom = [(1468, 688), (1514, 688), (1592, 610), (1652, 610)]
    for path, tone, at in ((top, GOLD, shared_at), (bottom, MINT, shared_at + 0.28)):
        trace(c, path, t, at, 0.90, tone)
        light = math.sin(math.pi * clamp((t - 32.85) / 2.15))
        if light > 0:
            trace(c, path, t, 32.82, 0.74, tone, light, width=5.0)
    edge_label(c, "supports", 1537, 521, t, 30.12)
    edge_label(c, "supports", 1521, 674, t, 30.37)
    fact_card(c, 1655, 600, 223, "scan", scan["skill"], "Shared skill", MINT, t, 30.48)
    layer(
        c,
        fade(t, 33.00, 0.50),
        lambda: rect(
            c,
            1651,
            561,
            231,
            78,
            MINT,
            16,
            0.7 * math.sin(math.pi * clamp((t - 33.00) / 2.30)),
            2.5,
        ),
    )
    switching = fade(t, 29.78, 0.4)
    choices = fade(t, 32.53, 0.51)
    layer(
        c,
        fade(t, 22.88, 0.5) * (1 - switching),
        lambda: footer(
            c,
            "Load the coach",
            "Jack’s chassis supports lifting. The mounted carriage provides it.",
        ),
    )
    layer(
        c,
        switching * (1 - choices),
        lambda: footer(
            c,
            "Sign the delivery slip",
            scan["desk"] + " accepts a scan. Jack and Patch can both sign.",
        ),
    )

    def eligible():
        stroke(c, [(975, 899), (1836, 899)], SLATE, 1.7)
        label(c, "Eligible robots from Relate", 975, 948, 25, "bold", MINT)
        candidate(c, "Load coach", e["candidates"]["load"], 975, 968, 1, 160)
        candidate(
            c, "Sign the delivery slip", e["candidates"]["manifest"], 1365, 968, 1, 245
        )

    layer(c, choices, eligible)


def candidate(c, title, names, x, y, a, offset=237):
    if a <= 0:
        return

    def draw():
        label(c, title, x, y + 32, 24, "sans", QUIET)
        cursor = x + offset
        for i, name in enumerate(names):
            if i:
                label(c, " / ", cursor, y + 33, 26, col=QUIET)
                cursor += font("sans", 26).measureText(" / ")
            label(c, name, cursor, y + 33, 29, "bold", CREW_COLORS.get(name, PAPER))
            cursor += font("bold", 29).measureText(name)

    layer(c, a, draw)


def proposal(c, t, e):
    review = t - (43.0 - 35.32)
    checking = fade(review, 0.14, 0.52)
    layer(
        c,
        1 - checking,
        lambda: head(c, "PLANNING  /  FIRST REVISION", "From skills to a plan"),
    )
    layer(
        c,
        checking,
        lambda: head(c, "VALIDATOR  /  FIRST REVISION", "Can this plan run?"),
    )
    label(c, "Eligible robots from Relate", 975, 324, 31, "bold", MINT)
    candidate(c, "Load coach", e["candidates"]["load"], 977, 358, fade(t, -0.80, 0.45))
    candidate(
        c,
        "Sign the delivery slip",
        e["candidates"]["manifest"],
        977,
        424,
        fade(t, -0.65, 0.52),
    )
    stroke(c, [(978, 415), (1377, 415)], SLATE, 1.2, fade(t, -0.80))
    for y, at, duration, tone in [(382, 0.50, 1.85, GOLD), (451, 3.07, 2.25, MINT)]:
        glow = math.sin(math.pi * clamp((t - at) / duration))
        rect(c, 960, y - 22, 440, 52, tone, 10, glow * 0.84, 2.5)
    expl = (
        "Only Jack can lift the tray."
        if t < 2.92
        else "Jack or Patch can sign the slip."
    )
    layer(
        c,
        fade(t, 0.34, 0.38) * (1 - fade(t, 5.80, 0.46)),
        lambda: label(c, expl, 977, 548, 28, "bold", GOLD if t < 2.92 else MINT),
    )
    t -= 4.87
    trace(c, [(1403, 385), (1432, 385), (1458, 414), (1515, 414)], t, 0.08, 0.95, MINT)
    trace(c, [(1403, 451), (1432, 451), (1458, 414), (1515, 414)], t, 0.18, 0.92, MINT)
    model = fade(t, 0.35, 0.58)

    def box():
        rect(c, 1529, 343, 289, 142, "#243741", 16)
        rect(c, 1529, 343, 289, 142, LILAC, 16, stroke_width=2)
        glyph(c, "model", 1570, 409, 1.63, LILAC)
        label(c, "Orchestrator", 1606, 406, 29, "bold", PAPER)
        label(c, "Language model", 1607, 445, 23, col=LILAC)

    layer(c, model, box)
    trace(c, [(1674, 486), (1674, 520), (1650, 544), (1650, 569)], t, 0.89, 0.85, LILAC)
    draft = fade(t, 1.03, 0.8)
    layer(
        c,
        draft,
        lambda: rect(c, 952, 574, 913, 410, "#49606a", 19, alpha=0.9, stroke_width=1.8),
    )
    saved = review >= 5.35
    layer(
        c,
        draft,
        lambda: label(
            c,
            "Approved action plan" if saved else "The model’s proposed plan",
            975,
            632,
            37,
            "serif",
        ),
    )
    layer(
        c,
        draft,
        lambda: label(
            c,
            "Saved in Relate"
            if saved
            else "Checking dependencies"
            if review > 3.27
            else "Checking assignments"
            if review > 0.38
            else "Awaiting validation",
            1837,
            627,
            23,
            col=MINT if saved else LILAC,
            align="right",
        ),
    )
    layout = {
        "collect": (1045, 746),
        "stage": (1225, 746),
        "cross": (1405, 746),
        "load": (1585, 746),
        "manifest": (1585, 899),
        "depart": (1767, 827),
    }
    names = {
        "collect": "Pick bag",
        "stage": "Handoff",
        "cross": "Cross hatch",
        "load": "Load coach",
        "manifest": "Sign the delivery slip",
        "depart": "Release train",
    }
    times = {
        "collect": 1.12,
        "stage": 1.27,
        "cross": 1.41,
        "manifest": 1.59,
        "load": 1.72,
        "depart": 1.99,
    }
    bw, bh = 151, 81
    for step in e["proposal"]:
        op = step["op"]
        x, y = layout[op]
        for prev in step["after"]:
            px, py = layout[prev]
            start = (px + bw / 2 + 1, py)
            end = (x - bw / 2 - 4, y)
            path = (
                [start, end]
                if y == py
                else [start, (start[0] + 11, py), (end[0] - 9, y), end]
            )
            trace(c, path, t, times[op] - 0.04, 0.34, LILAC, width=2.3)
    for step in e["proposal"]:
        op = step["op"]
        x, y = layout[op]
        a = fade(t, times[op], 0.5)
        selected = op == "load"

        def action():
            rect(
                c,
                x - bw / 2,
                y - bh / 2,
                bw,
                bh,
                "#473b32" if selected else "#22343e",
                12,
            )
            rect(
                c,
                x - bw / 2,
                y - bh / 2,
                bw,
                bh,
                GOLD if selected else LILAC,
                12,
                stroke_width=2,
            )
            title = names[op]
            title_size = min(
                23, math.floor(23 * (bw - 18) / font("bold", 23).measureText(title))
            )
            if op == "manifest":
                label(c, "Sign the", x, y - 12, 21, "bold", PAPER, "center")
                label(c, "delivery slip", x, y + 9, 21, "bold", PAPER, "center")
            else:
                label(c, title, x, y - 2, title_size, "bold", PAPER, "center")
            label(
                c,
                step["actor"],
                x,
                y + (32 if op == "manifest" else 26),
                21,
                col=GOLD if selected else QUIET,
                align="center",
            )

        layer(c, a, action)
    for name, at in [("load", 2.43), ("manifest", 2.87)]:
        x, y = layout[name]
        glow = max(
            math.sin(math.pi * clamp((t - at) / 1.2)), emphasis(review, 1.36, 2.79)
        )
        if glow > 0.001:
            rect(
                c,
                x - bw / 2 - 4,
                y - bh / 2 - 4,
                bw + 8,
                bh + 8,
                GOLD if name == "load" else LILAC,
                15,
                alpha=0.73 * glow,
                stroke_width=2.6,
            )
    for name, at in [("load", 3.36), ("manifest", 3.48)]:
        px, py = layout[name]
        x, y = layout["depart"]
        start = (px + bw / 2 + 1, py)
        end = (x - bw / 2 - 4, y)
        trace(
            c,
            [start, (start[0] + 11, py), (end[0] - 9, y), end],
            t,
            at,
            0.77,
            GOLD,
            0.85 * (1 - fade(t, 4.14, 0.67)),
            width=3.0,
        )
        trace(
            c,
            [start, (start[0] + 11, py), (end[0] - 9, y), end],
            review,
            3.28,
            0.70,
            MINT,
            emphasis(review, 3.24, 4.87),
            width=3.8,
        )
    layer(
        c,
        fade(t, 2.52, 0.62),
        lambda: label(
            c,
            "The executor can now read revision 1."
            if saved
            else "Z3 checks the assignments and action dependencies."
            if review > 0.38
            else "The train needs both the load and the signature.",
            975,
            1017,
            25,
            col=QUIET,
        ),
    )


def brand(c):
    glyph(c, "envelope", 68, 72, 1.20, GOLD)
    label(c, "Moonmail", 97, 83, 34, "serif", PAPER)


def end_card(path):
    surface = skia.Surface(W, H)
    c = surface.getCanvas()
    gradient(c, 0, 0, W, H, (0, H), (W, 0), [(DEEP, 255), ("#17343a", 255)], [0, 1])
    glyph(c, "envelope", W / 2, 415, 2.4, GOLD)
    label(c, "Moonmail", W / 2, 553, 102, "serif", PAPER, "center")
    label(c, "Built with Relate", W / 2, 627, 34, "sans", MINT, "center")
    path.write_bytes(surface.makeImageSnapshot().encodeToData(skia.kPNG, 100).bytes())


ALERT = "#ffab8b"


def ping(c, x, y, size, t, at, tone, duration=1.45):
    p = clamp((t - at) / duration)
    strength = math.sin(p * math.pi)
    if strength > 0.001:
        disc(c, x, y, size + 15 * p, tone, strength * 0.86, 3.5)


def tag(c, point, text, tone, alpha, dx=100, dy=-84):
    x, y, depth = point
    if depth <= 0 or not (12 < x < LEFT - 12 and 14 < y < H - 14) or alpha <= 0:
        return
    w = font("bold", 24).measureText(text) + 34
    cx = max(w / 2 + 16, min(LEFT - w / 2 - 16, x + dx))
    cy = max(125, min(H - 48, y + dy))

    def paint():
        stem = [(x, y), (x + (cx - x) * 0.63, cy), (cx, cy)]
        stroke(c, stem, DEEP, 6, 0.85)
        stroke(c, stem, tone, 2.1)
        disc(c, x, y, 7, DEEP)
        disc(c, x, y, 4, tone)
        rect(c, cx - w / 2, cy - 23, w, 46, DEEP, 10, 0.95)
        rect(c, cx - w / 2, cy - 23, w, 46, tone, 10, 0.85, 1.7)
        label(c, text, cx, cy + 8, 24, "bold", tone, "center")

    layer(c, alpha, paint)


def smoke_puff(c, x, y, radius, alpha, seed):
    if alpha <= 0 or radius <= 0:
        return
    points = []
    for i in range(18):
        angle = i * math.tau / 18
        r = radius * (
            1 + 0.23 * math.cos(5 * angle + seed) + 0.12 * math.sin(3 * angle - seed)
        )
        points.append((x + r * math.cos(angle), y + 0.85 * r * math.sin(angle)))
    path = skia.Path()
    path.moveTo(*mix(points[-1], points[0], 0.5))
    for i, q in enumerate(points):
        path.quadTo(*q, *mix(q, points[(i + 1) % len(points)], 0.5))
    path.close()
    c.drawPath(path, ink("#647477", alpha))
    c.drawPath(path, ink("#394e52", alpha * 0.95, 2.8))
    c.save()
    c.clipPath(path, doAntiAlias=True)
    disc(c, x - radius * 0.27, y - radius * 0.47, radius * 0.82, "#ced6c8", alpha * 0.9)
    c.restore()


def collar_effect(c, t, a, broken):
    onset = 20.27
    if t < onset or t > 52.2:
        return
    x, y, depth = a["collar"]
    age = t - onset
    if depth <= 0:
        return
    zoom = max(0.78, min(1.2, 5.0 / depth))

    def sparks(birth, scale):
        h = age - birth
        if h < 0 or h > 0.72:
            return
        for i in range(12):
            age_i = h - i % 3 * 0.031
            p = clamp(age_i / (0.34 + 0.09 * (i % 4)))
            if p <= 0 or p >= 1:
                continue
            angle = -2.86 + i * 2.69
            reach = (58 + ((i * 37) % 77)) * scale * zoom
            xx = x + math.cos(angle) * reach * p
            yy = y + math.sin(angle) * reach * p + 17 * p * p
            length = (25 + 13 * (i % 2)) * (1 - p) * scale * zoom
            ray = [
                (xx, yy),
                (xx - length * math.cos(angle), yy - length * math.sin(angle)),
            ]
            stroke(c, ray, "#a34c1d", 8, (1 - p) ** 0.4)
            stroke(c, ray, "#ffe18a", 4.6, (1 - p) ** 0.4)
            disc(c, xx, yy, 2.7 * (1 - p), "#fff2c6")
        disc(c, x, y, 12 * zoom * (1 - clamp(h / 0.22)), "#fff0be", 1 - clamp(h / 0.22))

    # A few opaque, lobed puffs drift out of the robot silhouette on the camera side.
    for index in range(max(0, int((age - 2.7) / 0.48)), int(age / 0.48) + 1):
        born = onset + index * 0.48
        if born > 49.5:
            continue
        u = (t - born) / 2.58
        if not 0 < u < 1:
            continue
        steady = 1 - 0.26 * fade(born, onset + 5, 2)
        strength = (
            fade(u, 0, 0.09)
            * (1 - fade(u, 0.63, 0.37))
            * steady
            * (1 - fade(t, 49.6, 1.85))
        )
        size = (7 + 37 * u) * zoom
        px = x + zoom * (
            117 * u + 16 * u * u + 8 * math.sin(u * 4.2 + index * 0.91) * u
        )
        py = y - zoom * (7 + 179 * u)
        smoke_puff(c, px, py, size, strength, index * 0.87)
    if broken:
        disc(c, x, y, 6.6 * zoom, ALERT, 0.86)
    sparks(0, 1.20)
    sparks(0.29, 0.89)
    sparks(0.86, 0.69)
    sparks(1.95, 0.50)


def custody_graph(c, t, tick, e):
    head(c, "EXECUTION  /  LIVE GRAPH", "Who holds the bag?")
    history = e["dispatch"]["custody"]
    pickup, handoff = history[1:3]
    top = pickup["holder"] if tick >= pickup["tick"] else history[0]["holder"]
    switch = fade(tick, handoff["tick"], 0.36)
    high = [(1138, 547), (1258, 547), (1370, 442), (1551, 442)]
    low = [(1138, 558), (1258, 558), (1370, 714), (1551, 714)]
    trace(c, high, 10, 0, 0.4, MINT, 1 - switch, width=3.5)
    trace(c, low, tick, handoff["tick"], 0.36, GOLD)
    seal(c, 1096, 553, "bag", e["order"]["bag"], 10, 0, GOLD, r=39)
    seal(
        c,
        1600,
        442,
        "robot" if top == pickup["holder"] else "shelf",
        top,
        10,
        0,
        MINT if switch < 0.5 else QUIET,
        sub="Picker" if top == pickup["holder"] else "Start",
        r=38,
    )
    seal(
        c,
        1600,
        714,
        "robot",
        handoff["holder"],
        10,
        0,
        GOLD if switch > 0.35 else QUIET,
        sub="Courier",
        r=38,
    )
    edge_label(c, "held by", 1452, 431 if switch < 0.5 else 703, 10, 0)
    ping(c, 1600, 714, 42, t, 12.64, GOLD, 1.75)
    footer(
        c,
        "Custody in Relate",
        ("Current holder  ·  " + handoff["holder"])
        if switch > 0.5
        else ("Current holder  ·  " + top),
    )


def action_box(c, x, y, w, icon, title, detail, tone, emphasis=0):
    rect(c, x, y, w, 100, "#1b3439", 14)
    rect(c, x, y, w, 100, tone, 14, 0.8, 2)
    if emphasis > 0.001:
        rect(c, x - 4, y - 4, w + 8, 108, tone, 17, 0.82 * emphasis, 3.5)
    glyph(c, icon, x + 27, y + 38, 1.14, tone)
    label(c, title, x + 51, y + 46, 29, "bold")
    label(c, detail, x + 18, y + 80, 23, col=tone)


def emphasis(t, start, end):
    return fade(t, start, 0.26) * (1 - fade(t, end, 0.46))


def fault_graph(c, t, tick, e):
    fault = e["dispatch"]["fault"]
    failed = tick >= fault["tick"]
    jobs = {a["op"]: a["label"] for a in e["dispatch"]["actions"]}
    tone = ALERT if failed else MINT
    head(c, "EXECUTION  /  DEPENDENCIES", "What does the failure stop?")
    top = 392
    bottom = 663
    for x1, x2, caption in ((1189, 1271, "needs"), (1506, 1587, "needs")):
        # Read each dependency from the dependent action back to its prerequisite.
        trace(c, [(x2, top + 50), (x1, top + 50)], 10, 0, 0.3, tone, width=3.3)
        label(c, caption, (x1 + x2) / 2, top + 32, 20, col=QUIET, align="center")
    trace(
        c,
        [(1722, 493), (1722, 600), (1391, 600), (1391, bottom - 4)],
        10,
        0,
        0.4,
        MINT,
        width=2.7,
    )
    edge_label(c, "also needs", 1555, 592, 10, 0)
    action_box(
        c,
        957,
        top,
        229,
        "tool",
        "Carriage",
        "Offline" if failed else "Working",
        tone,
        emphasis(t, 20.23, 23.18),
    )
    action_box(
        c,
        1273,
        top,
        230,
        "lift",
        jobs[fault["load"]],
        "Blocked" if failed else "Planned",
        tone,
        emphasis(t, 23.79, 25.5),
    )
    action_box(
        c,
        1589,
        top,
        263,
        "coach",
        jobs[fault["downstream"]],
        "Waiting for load" if failed else "Planned",
        tone,
        emphasis(t, 25.75, 27.93),
    )
    action_box(
        c,
        1268,
        bottom,
        251,
        "scan",
        "Sign slip",
        "Ready to scan",
        MINT,
        emphasis(t, 28.32, 30.15),
    )
    footer(
        c,
        "One tool is offline" if failed else "Before departure",
        "The signature still has everything it needs."
        if t >= 28.37
        else "The train needs both the load and the signature.",
    )


def repair_graph(c, t, tick, e):
    data = e["dispatch"]
    name = data["revision"]["mechanic"]
    done = data["complete"]
    head(c, "ORCHESTRATOR  /  REVISION 2", "How can the plan recover?")
    for x1, x2, what, at in [
        (1177, 1292, "mounts", 34.30),
        (1507, 1607, "fits", 35.37),
    ]:
        trace(c, [(x1, 383), (x2, 383)], t, at, 0.52, MINT, width=3)
        edge_label(c, what, (x1 + x2) / 2, 372, t, at + 0.10)
    fact_card(c, 965, 383, 210, "robot", name, "Mechanic", MINT, t, 32.02)
    fact_card(
        c,
        1294,
        383,
        211,
        "driver",
        e["instrument"]["name"],
        "Mounted tool",
        MINT,
        t,
        34.58,
    )
    fact_card(
        c,
        1608,
        383,
        235,
        "fork",
        e["instrument"]["port"],
        "On the carriage",
        GOLD,
        t,
        35.66,
    )
    stroke(c, [(973, 506), (1840, 506)], SLATE, 1.6)
    drafted = fade(t, 37.43, 0.62)
    layer(
        c,
        drafted,
        lambda: label(
            c,
            "Revised plan in Relate" if tick >= 29 else "The model’s proposed change",
            971,
            563,
            36,
            "serif",
        ),
    )

    def inserted():
        active = tick >= 35
        action_box(
            c,
            972,
            615,
            312,
            "driver",
            "Repair carriage",
            "Working  ·  " + name if active else "Added  ·  " + name,
            MINT,
            emphasis(t, 37.63, 39.80) + emphasis(t, 46.89, 49.85),
        )
        action_box(c, 1516, 615, 322, "lift", "Load coach", "Waits for repair", GOLD)
        trace(c, [(1287, 664), (1510, 664)], t, 38.35, 0.76, MINT)
        edge_label(c, "before", 1400, 652, t, 38.49)

    layer(c, drafted, inserted)

    def signature():
        signed = tick >= done["manifest"]
        glyph(c, "scan", 992, 813, 1.25, MINT)
        label(c, "Sign the delivery slip", 1021, 822, 29, "bold")
        label(
            c,
            "Signed" if signed else "Same action in both plans",
            1836,
            822,
            25,
            "bold",
            MINT,
            "right",
        )

    layer(c, fade(t, 40.06, 0.54), signature)
    footer(
        c,
        "Orchestrator reads Relate" if tick < 28 else "One repair added",
        "A tool that fits makes a repair possible."
        if t < 40.0
        else "The original signing assignment stays in the graph.",
    )


def departure_graph(c, t, tick, e):
    done = e["dispatch"]["complete"]
    onboard = tick >= done["load"]
    released = tick >= done["depart"]
    head(c, "EXECUTION  /  LIVE GRAPH", "Ready to leave?")
    action_box(c, 974, 355, 299, "scan", "Delivery slip", "Signed", MINT)
    action_box(
        c,
        974,
        630,
        299,
        "bag",
        e["order"]["bag"],
        "Aboard " + e["order"]["coach"] if onboard else "Loading",
        MINT if onboard else GOLD,
    )
    trace(c, [(1276, 408), (1354, 408), (1434, 528), (1502, 528)], 10, 0, 0.4, MINT)
    trace(
        c,
        [(1276, 681), (1354, 681), (1434, 558), (1502, 558)],
        10,
        0,
        0.4,
        MINT if onboard else GOLD,
    )
    action_box(
        c,
        1507,
        493,
        324,
        "coach",
        "Release train",
        "Signal green" if released else "Ready" if onboard else "Waiting for bag",
        MINT if onboard else GOLD,
    )
    footer(
        c,
        "Both jobs complete" if onboard else "Fork carriage working",
        "The departure signal clears."
        if released
        else "The executor can load the addressed coach.",
    )


def dispatch(c, t, a, e):
    tick = a["tick"]
    opening_end = 43.0 - 35.32
    phase = [
        fade(t, s, d)
        for s, d in ((7.59, 0.61), (17.92, 0.74), (31.52, 0.66), (51.14, 0.74))
    ]
    wide = a["wide"]
    shift = (W - LEFT) * fade(t, 58.63, 1.0)
    c.save()
    c.translate(shift, 0)
    rect(c, LEFT, 0, W - LEFT, H, INK)
    gradient(
        c, LEFT, 0, W - LEFT, H, (LEFT, 0), (W, H), [(INK, 255), (DEEP, 160)], [0, 1]
    )
    stroke(c, [(LEFT, 0), (LEFT, H)], GOLD, 2, 0.65 * (1 - wide))
    c.restore()
    layer(c, 1 - phase[0], lambda: proposal(c, t + opening_end, e))
    layer(c, phase[0] * (1 - phase[1]), lambda: custody_graph(c, t, tick, e))
    layer(c, phase[1] * (1 - phase[2]), lambda: fault_graph(c, t, tick, e))
    layer(c, phase[2] * (1 - phase[3]), lambda: repair_graph(c, t, tick, e))
    layer(
        c, phase[3] * (1 - fade(t, 58.14, 0.53)), lambda: departure_graph(c, t, tick, e)
    )
    gradient(
        c,
        0,
        0,
        LEFT + shift,
        168,
        (0, 0),
        (0, 168),
        [(DEEP, round(194 * (1 - wide))), (DEEP, 0)],
        [0, 1],
    )
    layer(c, wide, lambda: travel_light(c))
    brand(c)
    c.save()
    c.clipRect(skia.Rect.MakeXYWH(0, 0, LEFT + shift, H))
    layer(c, 1 - fade(t, 0.24, 0.74), lambda: identify_crew(c, 43 + t, a, e))
    holder = next(
        x["holder"] for x in reversed(e["dispatch"]["custody"]) if x["tick"] <= tick
    )
    tag(
        c,
        a["bag"],
        e["order"]["bag"] + "  ·  " + holder,
        GOLD,
        emphasis(t, 7.7, 16.30),
        -102,
        -91,
    )
    broken = (
        e["dispatch"]["fault"]["tick"] <= tick < e["dispatch"]["complete"]["repair"]
    )
    collar_effect(c, t, a, broken)
    tag(c, a["collar"], "Carriage offline", ALERT, emphasis(t, 20.65, 30.82), -125, 91)
    tag(
        c, a["Patch"], "Patch  ·  hex driver", MINT, emphasis(t, 34.55, 38.74), -102, 92
    )
    if 31 <= tick <= 34:
        sx, sy, _ = a["slip"]
        jx, jy, _ = a["Jack"]
        alpha = emphasis(t, 42.36, 44.18)
        stroke(c, [(jx, jy - 20), (sx, sy)], MINT, 4.4, alpha * 0.92)
        disc(c, sx, sy, 10, MINT, alpha * 0.70)
    tag(
        c,
        a["slip"],
        "Delivery slip signed" if tick >= 34 else "Scanning the slip",
        MINT,
        emphasis(t, 42.52, 45.15),
        102,
        -78,
    )
    tag(
        c,
        a["collar"],
        "Tightening the collar",
        MINT,
        emphasis(t, 46.94, 50.15),
        -98,
        -90,
    )
    if tick >= 43:
        ping(c, *a["collar"][:2], 24, t, 51.60, MINT, 1.65)
    tag(c, a["collar"], "Carriage working", MINT, emphasis(t, 51.60, 53.24), 104, -78)
    tag(
        c,
        a["bag"],
        e["order"]["bag"] + "  ·  " + holder,
        GOLD,
        emphasis(t, 54.23, 56.66),
        -110,
        -65,
    )
    c.restore()


def opening(c, t, anchors, e):
    rect(c, LEFT, 0, W - LEFT, H, INK)
    gradient(
        c,
        LEFT,
        0,
        W - LEFT,
        H,
        (LEFT, 0),
        (W, H),
        [(INK, 255), (DEEP, 160)],
        [0.0, 1.0],
    )
    gradient(c, 0, 0, LEFT, 168, (0, 0), (0, 168), [(DEEP, 194), (DEEP, 0)], [0.0, 1.0])
    brand(c)
    stroke(c, [(LEFT, 0), (LEFT, H)], GOLD, 2, 0.65)
    read = fade(t, 14.77, 0.54)
    bodies = fade(t, 19.35, 0.50)
    plan = fade(t, 35.42, 0.52)
    layer(c, 1 - read, lambda: delivery(c, t, anchors, e))
    layer(c, read * (1 - bodies), lambda: world(c, t - 14.80, e))
    layer(c, bodies * (1 - plan), lambda: embodiment(c, t, e))
    layer(c, plan, lambda: proposal(c, t - 35.32, e))
    identify_crew(c, t, anchors, e)


def travel_light(c):
    gradient(
        c,
        0,
        0,
        W,
        H,
        (0, 0),
        (W * 0.47, 0),
        [(DEEP, 222), (DEEP, 129), (DEEP, 0)],
        [0.0, 0.48, 1.0],
    )
    gradient(c, 0, 0, W, 170, (0, 0), (0, 170), [(DEEP, 136), (DEEP, 0)], [0.0, 1.0])


def fleet_graph(c, t, e, first_wave):
    reveal = fade(t, 6.90, 0.65)
    if not reveal:
        return
    scale = e["scale"]
    plan = scale["final_plan"]
    orders = e["yard"]["yard"]["orders"]
    rows = {order["id"]: 261 + 119 * i for i, order in enumerate(orders)}
    # The orders share a visual vocabulary. The recorded revision supplies every
    # node, actor and dependency, including the extra repair on just one branch.
    columns = {
        "collect": (187, 100, "Pick up"),
        "stage": (305, 98, "Hand off"),
        "cross": (409, 79, "Cross"),
        "load": (510, 77, "Load"),
        "manifest": (510, 81, "Sign"),
        "repair": (397, 86, "Repair"),
        "depart": (665, 103, "Release train"),
    }
    layout = {}
    for node in plan["nodes"]:
        bag, _, op = node["op"].rpartition("/")
        x, width, title = columns[op]
        y = rows.get(bag, 360)
        if op in ("manifest", "repair"):
            y += 50
        layout[node["uid"]] = x, y, width, title

    # A feathered scrim keeps the graph on the empty floor beside the set.
    c.save()
    c.translate(284, 351)
    c.scale(1, 0.77)
    shade = skia.Paint()
    shade.setShader(
        skia.GradientShader.MakeRadial(
            (0, 0),
            541,
            [
                color(DEEP, round(155 * reveal)),
                color(DEEP, round(105 * reveal)),
                color(DEEP, 0),
            ],
            [0.0, 0.55, 1.0],
        )
    )
    c.drawCircle(0, 0, 541, shade)
    c.restore()
    label(c, "Final action graph", 63, 160, 45, "serif", alpha=reveal)
    label(
        c,
        f"{len(plan['nodes'])} actions in Relate",
        66,
        201,
        25,
        col=QUIET,
        alpha=reveal,
    )

    for i, (bag, y) in enumerate(rows.items()):
        label(
            c, "Bag " + bag, 58, y + 7, 21, "bold", alpha=fade(t, 7.30 + i * 0.18, 0.55)
        )
    # Each incoming arrow has its own landing point on a node. This matters
    # at the signal box, where three load paths and three signatures converge.
    incoming = {}
    for edge in plan["edges"]:
        incoming.setdefault(edge["target"], []).append(edge["source"])
    ports = {}
    for target, sources in incoming.items():
        for i, source in enumerate(sorted(sources, key=lambda uid: layout[uid][1])):
            ports[source, target] = (i - (len(sources) - 1) / 2) * 8
    for edge in plan["edges"]:
        source, target = edge["source"], edge["target"]
        x, y, width, _ = layout[source]
        tx, ty, target_w, _ = layout[target]
        ty += ports[source, target]
        start, end = x + width / 2 + 1, tx - target_w / 2 - 3
        strength = fade(t, 7.48 + (x - 187) * 0.00165 + (y - 261) * 0.0012, 0.63)
        if not strength:
            continue
        bend = (end - start) * 0.54
        wire = skia.Path()
        wire.moveTo(start, y)
        wire.cubicTo(start + bend, y, end - bend, ty, end, ty)
        c.drawPath(wire, ink(QUIET, strength * 0.79, 2.5))
        stroke(
            c, [(end - 5, ty - 3), (end, ty), (end - 5, ty + 3)], QUIET, 2.2, strength
        )

    starters = {item["uid"] for item in scale["running"]}
    for node in plan["nodes"]:
        x, y, width, title = layout[node["uid"]]
        appear = fade(t, 7.35 + (x - 187) * 0.0018 + (y - 261) * 0.0011, 0.55)
        if not appear:
            continue
        if node["op"] == "depart":
            rect(c, x - width / 2, y - 30, width, 60, INK, 16, appear)
            rect(c, x - width / 2, y - 30, width, 60, QUIET, 16, appear, 2)
            label(c, "Release", x, y - 2, 23, "bold", align="center", alpha=appear)
            label(c, "train", x, y + 20, 22, align="center", alpha=appear)
            continue
        rect(c, x - width / 2, y - 18, width, 36, INK, 15, appear)
        rect(c, x - width / 2, y - 18, width, 36, FAINT, 15, appear, 1.8)
        active = first_wave if node["uid"] in starters else 0
        label(c, title, x, y + 7, 22, align="center", alpha=appear * (1 - active))
        if active:
            pickup = node["op"].endswith("/collect")
            tone = GOLD if pickup else MINT
            h = 36 + 19 * first_wave
            rect(c, x - width / 2, y - h / 2, width, h, tone, 15, first_wave)
            c.saveLayerAlpha(
                skia.Rect.MakeXYWH(x - width / 2, y - 28, width, 56),
                round(255 * first_wave),
            )
            glyph(c, "bag" if pickup else "scan", x - width / 2 + 16, y - 9, 0.70, DEEP)
            label(c, title, x + 10, y - 2, 20, "bold", DEEP, "center")
            label(c, node["actor"], x, y + 19, 20, col=INK, align="center")
            c.restore()

    if first_wave:
        pickups = sum(job["op"].endswith("/collect") for job in scale["running"])
        scans = sum(job["op"].endswith("/manifest") for job in scale["running"])
        label(c, "First to start", 65, 621, 25, "bold", alpha=first_wave)
        label(c, f"{pickups} pickups", 232, 621, 25, "bold", GOLD, alpha=first_wave)
        label(c, f"{scans} signatures", 368, 621, 25, "bold", MINT, alpha=first_wave)


def travel(c, t, anchors, e):
    travel_light(c)
    brand(c)
    scale = e["scale"]
    head1 = fade(t, 0.59, 0.75) * (1 - fade(t, 8.91, 0.58))

    def intro():
        label(c, "A larger depot", 65, 904, 54, "serif")
        for j, (key, word, at) in enumerate(
            [
                ("orders", "deliveries", 3.91),
                ("robots", "robots", 5.05),
            ]
        ):
            a = fade(t, at, 0.59)
            label(c, str(scale[key]), 68 + j * 162, 991, 49, "bold", GOLD, alpha=a)
            label(c, word, 69 + j * 162, 1028, 24, col=PAPER, alpha=a)

    layer(c, head1, intro)
    first_wave = fade(anchors["tick"], scale["tick"], 0.31)
    fleet_graph(c, t, e, first_wave)
    for item in scale["running"]:
        x, y, depth = anchors["robots"][item["actor"]]
        if depth <= 0 or x < 24 or x > W - 24 or y < 24 or y > H - 24:
            continue
        # Match the recorded scheduler tick, including its five independent starts.
        a = first_wave
        if not a:
            continue
        r = clamp(38 / depth) * 25 + 6
        cy = y + r * 0.29
        oval = skia.Rect.MakeXYWH(x - r, cy - r * 0.45, 2 * r, r * 0.9)
        pickup = item["op"].endswith("/collect")
        tone = GOLD if pickup else MINT
        c.drawArc(oval, 180, 180, False, ink(tone, 0.39 * a, 2))
        c.drawArc(oval, 0, 180, False, ink(DEEP, 0.86 * a, 5.7))
        c.drawArc(oval, 0, 180, False, ink(tone, a, 3.0))
        marker_y = max(26, cy - r * 0.45 - 37)
        marker_x = x - r * 0.94

        def marker():
            stem = [
                (x - r * 0.77, cy - r * 0.26),
                (marker_x, cy - 17),
                (marker_x, marker_y + 15),
            ]
            stroke(c, stem, DEEP, 6)
            stroke(c, stem, tone, 2.7)
            disc(c, marker_x, marker_y, 20, DEEP)
            disc(c, marker_x, marker_y, 17, tone)
            glyph(c, "bag" if pickup else "scan", marker_x, marker_y, 0.92, DEEP)

        layer(c, a, marker)
    # The large layout is visible during a single moving shot. Counts clear its centre.


@contextmanager
def video_stream(shot, work, output, frame_count):
    output.parent.mkdir(exist_ok=True, parents=True)
    with TemporaryDirectory(dir=output.parent) as staging:
        staged = Path(staging) / "render.mp4"
        command = [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-f",
            "rawvideo",
            "-pixel_format",
            "rgba",
            "-video_size",
            f"{W}x{H}",
            "-framerate",
            str(FPS),
            "-i",
            "pipe:0",
            "-i",
            str(work / (shot + "-mix.wav")),
            "-i",
            str(work / (shot + ".srt")),
            "-map",
            "0:v",
            "-map",
            "1:a",
            "-map",
            "2:s",
            "-c:s",
            "mov_text",
            "-metadata:s:s:0",
            "language=eng",
            "-disposition:s:0",
            "0",
            "-c:v",
            "libx264",
            "-threads",
            "4",
            "-preset",
            "veryfast",
            "-crf",
            "16",
            "-vf",
            "scale=out_color_matrix=bt709,format=yuv420p",
            "-colorspace",
            "bt709",
            "-color_primaries",
            "bt709",
            "-color_trc",
            "bt709",
            "-c:a",
            "aac",
            "-b:a",
            "256k",
            "-t",
            str(frame_count / FPS),
            "-movflags",
            "+faststart",
            str(staged),
        ]
        with subprocess.Popen(command, stdin=subprocess.PIPE) as encoder:
            with encoder.stdin as stream:
                yield stream
            if encoder.wait():
                raise RuntimeError("The video encoder failed.")
        staged.replace(output)


def compose(shot, base, work, output, proof=None):
    evidence = json.loads((work / "evidence.json").read_text(encoding="utf-8"))
    plate_shot = shot
    pts = json.loads(
        (base / (plate_shot + "-anchors.json")).read_text(encoding="utf-8")
    )
    im_info = skia.ImageInfo.Make(
        W, H, skia.ColorType.kRGBA_8888_ColorType, skia.AlphaType.kPremul_AlphaType
    )
    image = np.zeros((H, W, 4), dtype=np.uint8)
    surface = skia.Surface.MakeRasterDirect(im_info, image)
    canvas = surface.getCanvas()
    frames = [int(n) for n in proof.split(",")] if proof else range(1, len(pts) + 1)
    output_stream = (
        nullcontext(None) if proof else video_stream(shot, work, output, len(pts))
    )
    previous_plate = None
    with output_stream as stream:
        for frame in frames:
            plate_number = pts[frame - 1].get("plate", frame)
            file = base / (plate_shot + "-frames") / f"plate-{plate_number:04}.jpg"
            if proof and not file.exists():
                file = base / f"{shot}-proof-{frame:04}.jpg"
            if file != previous_plate:
                plate = skia.Image.open(str(file)).makeRasterImage()
                previous_plate = file
            canvas.clear(color(DEEP))
            canvas.drawImage(plate, 0, 0)
            {"opening": opening, "dispatch": dispatch, "travel": travel}[shot](
                canvas, (frame - 1) / FPS, pts[frame - 1], evidence
            )
            if proof:
                dest = work / f"{shot}-title-{frame:04}.jpg"
                dest.write_bytes(
                    surface.makeImageSnapshot().encodeToData(skia.kJPEG, 93).bytes()
                )
            else:
                stream.write(memoryview(image))


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("shot", choices=("opening", "dispatch", "travel"))
    p.add_argument("plates", type=Path)
    p.add_argument("work", type=Path)
    p.add_argument("output", type=Path)
    p.add_argument("--proof", help="Frame numbers for stills, starting at 1")
    args = p.parse_args()
    compose(args.shot, args.plates, args.work, args.output, args.proof)


if __name__ == "__main__":
    main()
