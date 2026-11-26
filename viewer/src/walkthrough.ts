import "./walkthrough.css";

type Side = "above" | "below" | "left" | "right";

interface Step {
  target: string;
  title: string;
  instruction: string;
  side: Side;
}

const steps: Step[] = [
  {
    target: "body-tab",
    title: "Meet the robots",
    side: "left",
    instruction:
      "Click Robot bodies to see how a robot’s chassis and equipment connect to its skills.",
  },
  {
    target: "plan-tab",
    title: "Return to the jobs",
    side: "left",
    instruction:
      "Compare robots with the selector. Click Dispatch graph to see the jobs and their dependencies.",
  },
  {
    target: "next",
    title: "Follow one decision",
    side: "above",
    instruction:
      "Click Next event to advance the map and graph together. The timeline lets you revisit any step.",
  },
  {
    target: "proof",
    title: "Ask Relate",
    side: "left",
    instruction:
      "Click Query graph. Playback pauses so you can inspect what the graph knew at this step.",
  },
  {
    target: "store-question",
    title: "Read the evidence",
    side: "right",
    instruction:
      "Choose a question and read its rows. Expand the Cypher underneath. Continue when you’re ready.",
  },
  {
    target: "options",
    title: "Change the experiment",
    side: "below",
    instruction:
      "Open Run options to replay a saved LLM decision or start a new dispatch with your own fleet.",
  },
  {
    target: "controller",
    title: "Choose a planner",
    side: "right",
    instruction:
      "Use Local planner and Start live run without a key. To enable LLM orchestrator, open Connect a live LLM.",
  },
];

const byId = (id: string) => document.getElementById(id)!;
const seenKey = "moonmail-walkthrough-v2";
const clamp = (n: number, low: number, high: number) =>
  Math.max(low, Math.min(n, high));

function visibleBounds(target: HTMLElement) {
  const dialog = target.closest("dialog");
  const pane = (dialog ?? target.closest("#book"))?.getBoundingClientRect();
  const header = dialog?.querySelector(".dialog-head")?.getBoundingClientRect();
  return {
    top: Math.max(0, header?.bottom ?? pane?.top ?? 0),
    bottom: Math.min(window.innerHeight, pane?.bottom ?? window.innerHeight),
  };
}

function reveal(target: HTMLElement) {
  const rect = target.getBoundingClientRect();
  const bounds = visibleBounds(target);
  if (rect.top < bounds.top + 6 || rect.bottom > bounds.bottom - 6) {
    target.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "instant",
    });
  }
}

export function stationWalkthrough() {
  const layer = byId("walkthrough");
  const card = layer.querySelector<HTMLElement>(".guide-note")!;
  const ring = layer.querySelector<HTMLElement>(".guide-ring")!;
  const arrow = layer.querySelector<SVGLineElement>(".guide-arrow line")!;
  const opener = byId("guide-open");
  const resize = new ResizeObserver(schedule);
  let index = -1;
  let anchor: HTMLElement | null = null;
  let previousDescription: string | null = null;
  let frame = 0;

  function schedule() {
    if (anchor && !frame) frame = requestAnimationFrame(place);
  }

  function place() {
    frame = 0;
    if (!anchor) return;
    const rect = anchor.getBoundingClientRect();
    const origin = layer.getBoundingClientRect();
    const width = origin.width,
      height = origin.height;
    const bounds = visibleBounds(anchor);
    const inView =
      rect.width > 0 &&
      rect.top >= bounds.top - 1 &&
      rect.bottom <= bounds.bottom + 1;
    layer.style.visibility = inView ? "visible" : "hidden";
    if (!inView) return;

    const pad = 4,
      margin = 10,
      gap = 26;
    const left = rect.left - origin.left - pad,
      top = rect.top - origin.top - pad;
    const right = rect.right - origin.left + pad,
      bottom = rect.bottom - origin.top + pad;
    Object.assign(ring.style, {
      left: left + "px",
      top: top + "px",
      width: right - left + "px",
      height: bottom - top + "px",
    });
    const cardWidth = card.offsetWidth,
      cardHeight = card.offsetHeight;
    const spare: Record<Side, number> = {
      above: top - gap - margin - cardHeight,
      below: height - bottom - gap - margin - cardHeight,
      left: left - gap - margin - cardWidth,
      right: width - right - gap - margin - cardWidth,
    };
    const choices: Side[] = [
      steps[index].side,
      "above",
      "below",
      "left",
      "right",
    ];
    const side =
      choices.find((s) => spare[s] >= 0) ??
      choices.reduce((a, b) => (spare[a] > spare[b] ? a : b));
    const centerX = (left + right) / 2,
      centerY = (top + bottom) / 2;
    let x = centerX - cardWidth / 2,
      y = centerY - cardHeight / 2;
    if (side === "above") y = top - gap - cardHeight;
    if (side === "below") y = bottom + gap;
    if (side === "left") x = left - gap - cardWidth;
    if (side === "right") x = right + gap;
    x = clamp(x, margin, width - cardWidth - margin);
    y = clamp(y, margin, height - cardHeight - margin);
    card.style.left = x + "px";
    card.style.top = y + "px";

    const vertical = side === "above" || side === "below";
    const startX = vertical
      ? clamp(centerX, x + 12, x + cardWidth - 12)
      : side === "left"
        ? x + cardWidth
        : x;
    const startY = vertical
      ? side === "above"
        ? y + cardHeight
        : y
      : clamp(centerY, y + 12, y + cardHeight - 12);
    arrow.setAttribute("x1", String(startX));
    arrow.setAttribute("y1", String(startY));
    arrow.setAttribute(
      "x2",
      String(vertical ? startX : side === "left" ? left - 3 : right + 3),
    );
    arrow.setAttribute(
      "y2",
      String(vertical ? (side === "above" ? top - 3 : bottom + 3) : startY),
    );
  }

  function releaseAnchor() {
    resize.disconnect();
    if (anchor) {
      if (previousDescription === null)
        anchor.removeAttribute("aria-describedby");
      else anchor.setAttribute("aria-describedby", previousDescription);
    }
    anchor = null;
  }

  function finish(focus = false) {
    if (!anchor) return;
    const current = anchor;
    releaseAnchor();
    cancelAnimationFrame(frame);
    frame = 0;
    index = -1;
    layer.hidePopover?.();
    layer.hidden = true;
    document.body.append(layer);
    opener.setAttribute("aria-expanded", "false");
    if (focus) current.focus({ preventScroll: true });
  }

  function show(n: number, focus = true) {
    releaseAnchor();
    index = n;
    const step = steps[n];
    const target = byId(step.target);
    anchor = target;
    // A native modal makes the rest of the page inert, including controls in a detached tooltip.
    const host = target.closest("dialog") ?? document.body;
    if (layer.parentElement !== host) {
      layer.hidePopover?.();
      host.append(layer);
    }
    layer.hidden = false;
    layer.showPopover?.();
    const last = n === steps.length - 1;
    byId("guide-heading").textContent = step.title;
    const connected =
      last &&
      !target.querySelector<HTMLOptionElement>('[value="azure"]')?.disabled;
    byId("guide-instruction").textContent = connected
      ? "Choose LLM orchestrator for fresh model decisions or Local planner for a keyless run. Select Start live run when ready."
      : step.instruction;
    byId("guide-progress").textContent = `${n + 1} / ${steps.length}`;
    byId("guide-dismiss").textContent = last ? "Done" : "Skip guide";
    byId("guide-continue").hidden = target.id !== "store-question";
    previousDescription = target.getAttribute("aria-describedby");
    target.setAttribute(
      "aria-describedby",
      [previousDescription, "guide-heading guide-instruction"]
        .filter(Boolean)
        .join(" "),
    );
    reveal(target);
    if (focus) target.focus({ preventScroll: true });
    resize.observe(target);
    resize.observe(card);
    resize.observe(host);
    place();
  }

  function start(focus = true) {
    try {
      localStorage.setItem(seenKey, "1");
    } catch {
      /* Storage is optional. */
    }
    opener.setAttribute("aria-expanded", "true");
    show(0, focus);
  }

  document.addEventListener("click", (event) => {
    if (!anchor || !(event.target instanceof Element)) return;
    if (anchor.contains(event.target) && !anchor.matches("select")) {
      show(index + 1);
    } else if (
      event.target.closest("#play, #recordings-tab, [data-reel]") ||
      (document.querySelector("dialog[open]") && !anchor.closest("dialog"))
    ) {
      finish();
    }
  });
  document.addEventListener(
    "close",
    (event) => {
      if (!anchor || event.target !== anchor.closest("dialog")) return;
      if (event.target === byId("sources")) show(index + 1);
      else finish();
    },
    true,
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (anchor && event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        finish(true);
      }
    },
    true,
  );
  byId("guide-dismiss").addEventListener("click", () => finish(true));
  byId("guide-continue").addEventListener("click", () =>
    anchor?.closest("dialog")?.close(),
  );
  window.addEventListener("resize", () => {
    if (
      anchor &&
      (document.activeElement === anchor ||
        document.activeElement === document.body)
    )
      reveal(anchor);
    schedule();
  });
  window.addEventListener("scroll", schedule, true);

  return {
    get active() {
      return anchor !== null;
    },
    start,
    finish,
    offer(params: URLSearchParams) {
      if (params.has("guide")) {
        start();
        return;
      }
      if (params.size) return;
      try {
        if (!localStorage.getItem(seenKey)) start(false);
      } catch {
        /* The button works without storage. */
      }
    },
  };
}
