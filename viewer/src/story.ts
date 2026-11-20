import "./story.css";
import { Depot } from "./scene";
import { FloorPlan } from "./grid";
import { eventLink, markNode } from "./storyFocus";
import { dispatchDrawing } from "./dispatchDrawing";
import type { Episode, DepotEvent, Frame } from "./types";
const el = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id) as T;
const put = (id: string, s: string) => {
  el(id).textContent = s;
};
const project = el<HTMLDialogElement>("projector"),
  sources = el<HTMLDialogElement>("sources"),
  slider = el<HTMLInputElement>("time");
let stage: Depot | FloorPlan;
try {
  stage = new Depot(el("world"));
} catch {
  stage = new FloorPlan(el("world"));
  el<HTMLButtonElement>("map").disabled = true;
}
const parameters = new URLSearchParams(location.search),
  original = parameters.get("reel");
let ep: Episode | undefined,
  asset = "",
  t = 0,
  playing = false,
  drewMotion = false,
  hold = 0,
  latestMs = 0,
  key = "",
  lastStop = -1,
  touring = false,
  top = false;
let active: AbortController | undefined,
  streaming = false,
  waiting = false,
  cue: DepotEvent | undefined;
const dwell = (e: DepotEvent) => {
  if (ep?.layout.yard)
    return (
      {
        order: 1.4,
        read: 0.65,
        proposal: 1.2,
        decision: 1.1,
        "fork fault": 1.6,
        hold: 2,
        delivered: 1,
      }[e.kind] ?? 0
    );
  return (
    {
      order: 2.7,
      read: 2.8,
      proposal: 3.1,
      decision: 3.3,
      "fork fault": 4.2,
      violation: 3.4,
      rejected: 2.6,
      hold: 2.5,
      delivered: 1.8,
    }[e.kind] ?? 0
  );
};
const review = (e: DepotEvent) => dwell(e) > 0;
const visible = (e: DepotEvent) => e.kind !== "completed";
const beats = (data: Episode) => data.events.filter(visible);
function play(on: boolean) {
  if (!on && playing && stage instanceof Depot) stage.restoreDetail();
  playing = on;
  put(
    "play",
    on
      ? "Ⅱ Pause"
      : !streaming && ep && t >= ep.frames.length - 1
        ? "↻ Replay"
        : asset === "post"
          ? "▶ Play tour"
          : "▶ Play run",
  );
  el("play").setAttribute("aria-label", on ? "Pause" : asset === "post" ? "Play tour" : "Play run");
}
function header() {
  if (!ep) return;
  put(
    "source",
    waiting
      ? "Orchestrator is planning…"
      : streaming
        ? "Live run"
        : asset ? "Recorded model run" : ep.outcome ? "Run complete" : "Stopped",
  );
  el("source").classList.toggle("live", streaming);
  el("stop").hidden = !streaming;
  const link = el<HTMLAnchorElement>("database");
  link.hidden = !asset && !ep.outcome;
  link.href = asset
    ? "./episodes/" + asset + ".rl"
    : "/api/episodes/" + ep.id + "/graph";
}
function bookmark() {
  if (!ep) return;
  slider.max = String(ep.frames.length - 1);
  const pin = el("pins");
  pin.replaceChildren();
  if (streaming) return;
  for (const e of beats(ep).filter(review)) {
    const p = document.createElement("i");
    p.style.left = (100 * e.tick) / (ep.frames.length - 1) + "%";
    pin.append(p);
  }
}
function explain(e: DepotEvent, event: DepotEvent) {
  const data = ep!,
    yard = data.layout.yard,
    rev = event.planGraph?.revision ?? 0;
  const kind = event.kind,
    plan = kind === "proposal",
    reading = kind === "read",
    accepted = kind === "decision";
  const fault = kind === "fork fault" || kind === "violation",
    rejected = kind === "rejected",
    local = data.controller !== "azure";
  const author = local ? "Local planner" : "Orchestrator",
    pendingRevision = event.targetRevision ?? rev;
  const history = data.events.filter((x) => x.seq <= event.seq),
    input = history.filter((x) => x.kind === "read").at(-1);
  const proposal = history
    .filter((x) => x.kind === "proposal" && x.seq > (input?.seq ?? -1))
    .at(-1);
  const ctx = input?.modelInput,
    count = event.planGraph?.nodes.length ?? 0,
    frame = data.frames[Math.floor(t)];
  const previousFault = history.filter((x) => x.issues?.length).at(-1);
  const holdings = frame.cargoByBag;
  const total = yard?.orders.length ?? 1;
  const aboard = yard
    ? yard.orders.filter((o) => holdings?.[o.id].holder === o.coach).length
    : Number(frame.holder === data.layout.destination);
  const signed = yard
    ? yard.orders.filter((o) => holdings?.[o.id].manifest === "signed").length
    : Number(frame.manifest === "signed");
  const goals = el("goals");
  goals.replaceChildren();
  for (const [txt, met] of [
    [
      yard ? aboard + " / " + total + " bags aboard" : "Bag 47 aboard Coach B",
      aboard === total,
    ],
    [
      yard ? signed + " / " + total + " bills signed" : "Signed waybill",
      signed === total,
    ],
  ] as const) {
    const item = document.createElement("span");
    item.textContent = txt;
    item.title = txt.toLowerCase().includes("bill")
      ? "A waybill is the delivery slip. Signing it is an independent job."
      : "Each bag must reach the coach serving its address.";
    item.classList.toggle("achieved", met);
    goals.append(item);
  }
  put("author", author);
  const role =
    reading || plan
      ? "model"
      : accepted || rejected
        ? "verify"
        : kind === "order" || fault
          ? "state"
          : "execute";
  for (const element of el("pipeline").querySelectorAll<HTMLElement>(
    "[data-role]",
  )) {
    element.classList.toggle(
      "lit",
      element.dataset.role === role ||
        (reading && element.dataset.role === "state"),
    );
    element.classList.toggle(
      "pass",
      accepted && element.dataset.role === "state",
    );
  }
  const nodeStates = event.planGraph?.nodes ?? [],
    active = nodeStates.filter((n) => n.state === "running");
  let chapter = "Running the plan",
    title = e.title,
    reason = e.reason ?? "",
    graphTitle = "Executing the plan",
    evidence = "Recorded state";
  let detail = yard
    ? aboard +
      " bags aboard · " +
      signed +
      " waybills signed · Signal " +
      frame.signal
    : "Bag 47 with " +
      frame.holder +
      " · Waybill " +
      frame.manifest +
      " · Forks " +
      (frame.fork_online ? "online" : "offline");
  if (kind === "order") {
    chapter = "Starting state";
    title = yard ? "One plan for nine robots." : "Which robot can do each job?";
    reason = yard
      ? "Nine robots share three orders. Relate holds all six departure conditions and the assignments in one plan."
      : "The bag starts on the shelf. The train needs the bag aboard and a signed delivery slip before it can leave.";
    graphTitle = "Initial station state";
  } else if (reading) {
    chapter = "Reading the knowledge graph";
    title =
      pendingRevision > 1 ? "Read what changed." : "What can each body do?";
    graphTitle =
      pendingRevision > 1
        ? "Facts after the fault"
        : "Facts available to the orchestrator";
    if (local) graphTitle = "State sent to the planner";
    const opts = ctx?.operators ?? {},
      key = yard ? "47/repair" : "repair";
    if (pendingRevision > 1) {
      reason =
        "The orchestrator reads the failed tool, the available equipment and the jobs that still have valid assignments.";
      const choices = Object.keys(opts[key]?.eligible_and_approach ?? {});
      const issue = previousFault?.issues?.[0];
      detail =
        issue?.fact === "forks"
          ? "Forks " +
            issue.actual +
            " · Eligible repairers: " +
            (choices.join(", ") || "none")
          : (issue?.fact ?? "Recorded state") +
            " · " +
            (issue?.actual ?? "updated");
    } else {
      reason = yard
        ? "One graph read gathers all three orders, their goals and the workers eligible in each bay."
        : "Relate stores the starting scene, the goal and each body’s capabilities. The orchestrator reads which arm can reach the shelf and which courier fits the hatch.";
      detail = yard
        ? (ctx?.goal ?? detail)
        : "Holder: " +
          (ctx?.current_holder ?? frame.holder) +
          " · Destination: " +
          (ctx?.destination ?? "") +
          " · Waybill " +
          (ctx?.world.manifest ?? frame.manifest);
    }
    evidence = "What the graph returned";
  } else if (plan) {
    const steps = event.proposal?.steps ?? [],
      edges = steps.reduce((n, s) => n + s.after.length, 0);
    chapter = "Planning";
    title =
      pendingRevision > 1
        ? "A plan for the remaining jobs."
        : "The orchestrator proposes a plan.";
    if (local && pendingRevision === 1) title = "The planner proposes a plan.";
    reason =
      pendingRevision > 1
        ? "The orchestrator submits the jobs that still need doing. The validator checks them against the updated graph."
        : "An arrow means the earlier action must finish first. Loading the bag and signing its delivery slip can happen independently.";
    graphTitle = "Proposed action plan";
    evidence = "What was proposed";
    const automatic = steps.filter((s) => s.actor === "auto").length;
    detail =
      steps.length +
      " proposed actions · " +
      edges +
      " prerequisites · " +
      (automatic
        ? automatic + " assignments for the validator"
        : "Robots selected by the " + author);
  } else if (accepted) {
    chapter = "Validation";
    title =
      rev === 1 ? "Which assignments pass?" : "Reuse the surviving actions.";
    const added = event.new?.length ?? 0,
      kept = count - added;
    reason =
      rev === 1
        ? "The validator uses Z3 to check robot abilities and the order of the jobs. Relate stores the accepted assignments."
        : yard
          ? "Only the failed load and the shared departure need replacing. Both other orders keep their loading jobs."
          : event.new?.includes("repair")
            ? "Patch’s driver fits the collar. The new load waits for the repair, and Jack keeps his waybill assignment."
            : (e.reason ?? "The surviving actions keep their IDs.");
    graphTitle = "Approved action plan";
    evidence = "Validator approved";
    detail =
      rev === 1
        ? count +
          " stored actions · " +
          (event.planGraph?.edges.length ?? 0) +
          " dependencies · Revision " +
          rev
        : kept +
          " original jobs kept · " +
          added +
          " new actions · Revision " +
          rev;
  } else if (fault || rejected) {
    chapter = rejected ? "Plan check" : "Equipment failure";
    title = rejected
      ? event.feedback?.counterexample.includes("repair")
        ? "This tool cannot repair the fork."
        : "Why did the plan fail?"
      : kind === "fork fault"
        ? "Which jobs does the fork stop?"
        : e.title;
    if (rejected)
      reason = event.feedback?.counterexample?.includes("repair")
        ? "The mechanic’s probe fits a test socket. No robot can repair this fork, so the orchestrator gets another attempt."
        : "The validator returns the failed check to the agent for another proposal.";
    graphTitle = rejected ? "Rejected proposal" : "Impact on the stored plan";
    evidence = rejected ? "Why the plan failed" : "Effect on the plan";
    if (previousFault && fault) {
      const impacts = previousFault.proof?.rows ?? [];
      detail =
        impacts.length +
        " jobs affected. " +
        (kind === "fork fault"
          ? "The delivery slip can still be signed."
          : "The orchestrator will read the updated conditions.");
      reason =
        yard && kind === "fork fault"
          ? "Jack’s fork carriage went offline. Follow its loading job to the shared departure. The other two loading branches survive."
          : kind === "fork fault"
            ? "The forklift cannot load the coach. Departure needs that load. The same robot can still sign using its scanner."
            : (e.reason ?? "");
    } else detail = event.feedback?.counterexample ?? event.reason ?? detail;
  } else if (kind === "hold") {
    chapter = "Departure held";
    graphTitle = "Last stored revision";
  } else if (frame.signal === "green") {
    chapter = "Order fulfilled";
    graphTitle = "Goal reached";
    evidence = "Signal green";
    title = yard ? "All three orders are ready." : "The train can leave.";
    reason = yard
      ? "All three bags are in their addressed coaches. All three waybills are signed. The shared train can leave."
      : "Bag 47 is aboard Coach B. Its waybill is signed. The departure signal is green.";
  } else if (yard) {
    chapter = "Running the plan";
    if (active.length) {
      title =
        active.length > 1
          ? active.length + " jobs under way."
          : active[0].label + ".";
      reason = active
        .map(
          (n) =>
            n.actor +
            " · " +
            n.label.toLowerCase() +
            (n.op.includes("/") ? " " + n.op.split("/")[0] : ""),
        )
        .join("   /   ");
    } else {
      title = "Completed jobs are recorded.";
      reason = "The executor reads the updated graph for the next ready jobs.";
    }
    detail =
      active.length +
      " running · " +
      nodeStates.filter((n) => n.state === "done").length +
      " complete · Signal " +
      frame.signal;
  } else {
    chapter = "Updating the graph";
    if (["stage", "cross"].includes(e.op ?? "")) {
      title =
        e.op === "stage" ? "Who holds the bag now?" : "The crossing can start.";
      reason =
        e.op === "stage"
          ? "The executor records who holds the bag. The next action can use that fact as soon as the handoff is complete."
          : "The courier has the bag. The executor checks that the hatch is open and starts the crossing.";
    }
    if (kind === "assignment" && e.op === "collect") {
      const r = e.proof?.rows[0];
      if (r) {
        evidence = "Why this robot qualifies";
        detail =
          r.robot +
          " → " +
          r.body +
          " → " +
          r.skill +
          " · " +
          r.reach +
          " cm reach / " +
          r.height +
          " cm shelf";
      }
    } else if (kind === "assignment" && e.op === "repair") {
      const r = e.proof?.rows[0];
      if (r) {
        evidence = "Tool fit";
        detail = r.actor + " → " + r.instrument + " → " + r.port;
      }
    }
  }
  if (kind === "assignment" && !yard) {
    if (e.op === "manifest") {
      title = "Signing is still possible.";
      reason = "The forklift’s scanner works independently of its broken fork.";
    }
    if (e.op === "repair") {
      title = "Repair the fork.";
      reason =
        "The mechanic’s hex driver fits the collar. Loading can resume after the repair.";
    }
    if (e.op === "load") {
      title = "Load the coach.";
      reason =
        "The executor checks the fork and the bag’s holder before the load.";
    }
    if (e.op === "hoist") {
      title = "Use the station lift.";
      reason =
        "The lift accepts the courier’s tray and feeds the destination coach.";
    }
    if (e.op === "depart") {
      title = "Check the departure conditions.";
      reason = "The bag must be aboard and its delivery slip signed.";
    }
  }
  put("chapter", chapter);
  put("line", title);
  put("narration", reason);
  put("graph-title", graphTitle);
  put(
    "revision",
    rejected
      ? ""
      : plan
        ? "Draft " + pendingRevision
        : rev
          ? "Revision " + rev
          : "",
  );
  put("evidence-label", evidence);
  put("witness", detail);
  const pattern =
    kind === "order"
      ? "Parcel → ADDRESSED_TO → Route ← SERVES ← Coach"
      : reading
        ? pendingRevision > 1 && previousFault?.issues?.[0]?.fact === "forks"
          ? "Robot → MOUNTS → Instrument → FITS → Interface"
          : "Robot → INSTANCE_OF → Embodiment → HAS_SKILL → Skill"
        : plan
          ? "propose_dag(steps)  ·  op / actor / after"
          : rejected
            ? "propose_dag → counterexample → revised proposal"
            : accepted
              ? rev > 1
                ? "PlanRevision → REVISES → PlanRevision"
                : "PlanRevision → INCLUDES → Action → ASSIGNED_TO → Robot"
              : kind === "fork fault"
                ? "Event → INVALIDATES → Action ← DEPENDS_ON ← Action"
                : e.op === "stage" || kind === "transfer"
                  ? "Parcel → HELD_BY → current holder"
                  : "Action → DEPENDS_ON → finished prerequisite";
  put("relation", pattern);
  el("drawing").replaceChildren(dispatchDrawing(data, event, frame));
  cueKey = "";
  put("source-title", title);
  put(
    "proof-note",
    "Recorded at step " +
      event.tick +
      ". In an action plan, an arrow leads from the earlier job to the job it enables.",
  );
  put("query", event.proof?.query ?? "");
  put("rows", JSON.stringify(event.proof?.rows ?? [], null, 2));
  const currentDecision = history
    .filter((x) => x.kind === "decision" && x.seq >= (input?.seq ?? -1))
    .at(-1);
  put(
    "raw",
    JSON.stringify(
      {
        read_dispatch_graph: ctx,
        propose_dag: proposal?.proposal ?? currentDecision?.proposal,
        accepted_revision: currentDecision?.planGraph?.revision,
        bindings: currentDecision?.bindings,
        feedback: event.feedback,
      },
      null,
      2,
    ),
  );
}
const world = el("world");
const pin = document.createElement("div");
pin.className = "scene-link";
pin.hidden = true;
const point = document.createElement("i"),
  caption = document.createElement("span");
pin.append(point, caption);
world.append(pin);
let cueKey = "",
  linkedTarget = "";
function positionLink() {
  const at = linkedTarget ? stage.anchor(linkedTarget) : undefined;
  pin.hidden =
    !at || at.x < 0.025 || at.x > 0.975 || at.y < 0.035 || at.y > 0.965;
  world.classList.toggle("has-link", !pin.hidden);
  if (!at || pin.hidden) return;
  pin.style.left = at.x * 100 + "%";
  pin.style.top = at.y * 100 + "%";
  pin.classList.toggle("leftwards", at.x > 0.61);
  pin.classList.toggle("below", at.y < 0.17);
}
new ResizeObserver(positionLink).observe(world);
function spotlight(event: DepotEvent, progress: number) {
  if (!ep) return;
  const cue = eventLink(ep, event, progress);
  const key =
    event.seq +
    "|" +
    (cue ? [cue.target, cue.caption, cue.selector, cue.alert].join("|") : "");
  if (key === cueKey) return;
  cueKey = key;
  linkedTarget =
    cue && markNode(el("drawing"), cue.selector, cue.alert) ? cue.target : "";
  if (!cue) markNode(el("drawing"));
  pin.classList.toggle("attention", !!cue?.alert);
  point.textContent = cue?.alert ? "!" : "";
  caption.textContent = cue?.caption ?? "";
  positionLink();
}
function seek(n: number) {
  if (!ep?.frames.length) return;
  t = Math.min(Math.max(n, 0), ep.frames.length - 1);
  slider.value = String(t);
  put("tick", "Step " + Math.floor(t));
  const history = ep.events.filter((e) => e.tick <= t);
  const current = history.filter(visible).at(-1);
  const graphEvent = history.at(-1);
  if (current && graphEvent) {
    const frame = ep.frames[Math.floor(t)];
    const id =
      current.seq +
      "-" +
      graphEvent.seq +
      "-" +
      frame.holder +
      "-" +
      frame.signal +
      "-" +
      (frame.cargoByBag
        ? Object.values(frame.cargoByBag)
            .map((c) => c.holder)
            .join("|")
        : "");
    if (key !== id) {
      key = id;
      cue = current;
      explain(current, graphEvent);
    }
    spotlight(graphEvent, Math.min(1, t - graphEvent.tick));
  }
  stage.draw(t);
  drewMotion = playing && hold <= 0;
  positionLink();
}
function install(data: Episode, file: string) {
  ep = data;
  asset = file;
  key = "";
  cue = undefined;
  t = 0;
  hold = 0;
  lastStop = -1;
  el<HTMLSelectElement>("kit").value = data.scenario.service_kit ?? "driver";
  el<HTMLInputElement>("seed").value = String(data.scenario.seed);
  el<HTMLSelectElement>("fault").value =
    data.scenario.mail_fault ?? (data.scenario.fork_fault ? "forks" : "none");
  const yard = !!data.layout.yard;
  el<HTMLSelectElement>("station").value = yard ? "yard" : "mail";
  const fleet = Object.keys(data.layout.starts).length;
  put(
    "map-label",
    yard
      ? fleet + " robots · three orders"
      : fleet +
          " robots · one order" +
          (data.scenario.service_kit === "probe" ? " · inspection probe" : ""),
  );
  put("mode", "");
  for (const btn of document.querySelectorAll<HTMLButtonElement>(
    "[data-station]",
  ))
    btn.setAttribute(
      "aria-pressed",
      String((btn.dataset.station === "yard") === yard),
    );
  stage.composition(false);
  stage.load(data);
  bookmark();
  header();
  seek(0);
  play(false);
}
function cancel() {
  active?.abort();
  active = new AbortController();
  streaming = false;
  waiting = false;
  play(false);
  put("status", "");
  return active;
}
function jump(name: string | null) {
  if (!ep || !name) return 0;
  if (name === "rejected" || name === "retry") {
    const rejected = ep.events.find((event) => event.kind === "rejected");
    if (!rejected || name === "rejected") return rejected?.tick ?? 0;
    return (
      ep.events.find(
        (event) => event.seq > rejected.seq && event.kind === "proposal",
      )?.tick ?? rejected.tick
    );
  }
  if (name === "fault")
    return (
      (ep.events.find((e) => ["fork fault", "violation"].includes(e.kind))
        ?.tick ?? 0) + 0.6
    );
  if (name === "replan")
    return (
      ep.events.find(
        (e) => e.kind === "decision" && e.planGraph?.revision === 2,
      )?.tick ?? 0
    );
  if (["read", "proposal", "reread", "redraft"].includes(name)) {
    const phase =
      name === "reread" ? "read" : name === "redraft" ? "proposal" : name;
    return (
      ep.events.find(
        (e) =>
          e.kind === phase &&
          (e.targetRevision ?? 1) ===
            (name === "reread" || name === "redraft" ? 2 : 1),
      )?.tick ?? 0
    );
  }
  if (name === "plan")
    return ep.events.find((e) => e.kind === "decision")?.tick ?? 0;
  return Number.isFinite(Number(name)) ? Number(name) : 0;
}
async function presentSetup(data: Episode, show: () => void) {
  const changedMap = ep && !!ep.layout.yard !== !!data.layout.yard;
  if (changedMap && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(show);
      await transition.finished;
    } else {
      show();
      await el("spread").animate(
        [
          { opacity: 0.2, transform: "scale(1.025)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 500 },
      ).finished;
    }
  } else show();
}
async function reel(file: string, at: string | null) {
  const token = cancel();
  try {
    const r = await fetch("/api/recordings/" + file, {
      signal: token.signal,
      cache: "no-cache",
    });
    if (!r.ok) throw Error("The recorded episode could not be opened.");
    const data = await r.json();
    if (active !== token) return;
    const show = () => {
      if (token !== active) return;
      install(data, file);
      seek(jump(at));
      play(false);
    };
    await presentSetup(data, show);
    if (token !== active) return;
    const url = new URLSearchParams({ reel: file });
    if (at) url.set("at", at);
    history.replaceState(null, "", "?" + url);
  } catch (e) {
    if (token === active) put("status", (e as Error).message);
  }
}
type Packet =
  | ({ type: "init" } & Episode)
  | { type: "thinking"; tick: number }
  | { type: "update"; frames: Frame[]; events: DepotEvent[] }
  | { type: "complete"; episode: Episode }
  | { type: "error"; message: string };
async function live() {
  const token = cancel(),
    fault = el<HTMLSelectElement>("fault").value;
  project.close();
  streaming = true;
  header();
  put("status", "Opening a new Relate store…");
  let initialized = false,
    completed = false;
  try {
    const response = await fetch(
      "/api/live?pace=0.34&controller=" +
        el<HTMLSelectElement>("controller").value,
      {
        method: "POST",
        signal: token.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mission: el<HTMLSelectElement>("station").value,
          seed: Number(el<HTMLInputElement>("seed").value),
          service_kit: el<HTMLSelectElement>("kit").value,
          mail_fault: fault === "none" ? null : fault,
          fork_fault: false,
          jam: true,
          parcel_cm: 18,
        }),
      },
    );
    if (
      !response.ok ||
      !response.body ||
      !response.headers.get("content-type")?.includes("ndjson")
    )
      throw Error("Fresh runs require the local Moonmail server.");
    const accept = async (p: Packet) => {
      if (active !== token) return;
      if (p.type === "error") throw Error(p.message);
      if (p.type === "init") {
        await presentSetup(p, () => {
          if (active !== token) return;
          initialized = true;
          install({ ...p, outcome: "" }, "");
          put("status", "");
          holdHere();
          play(true);
          history.replaceState(null, "", location.pathname);
        });
      } else if (p.type === "thinking") {
        waiting = true;
        header();
      } else if (p.type === "update" && ep) {
        if (p.events.length) waiting = false;
        ep.frames.push(...p.frames);
        ep.events.push(...p.events);
        slider.max = String(ep.frames.length - 1);
        header();
        seek(t);
      } else if (p.type === "complete" && ep) {
        completed = true;
        streaming = false;
        waiting = false;
        ep.frames = p.episode.frames;
        ep.events = p.episode.events;
        ep.outcome = p.episode.outcome;
        header();
        bookmark();
        seek(t);
      }
    };
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();
    let tail = "";
    try {
      for (;;) {
        const c = await reader.read();
        if (c.done) break;
        const lines = (tail + c.value).split("\n");
        tail = lines.pop()!;
        for (const line of lines)
          if (line.trim()) await accept(JSON.parse(line));
      }
      if (tail.trim()) await accept(JSON.parse(tail));
    } finally {
      reader.releaseLock();
    }
    if (!completed) throw Error("The run ended before the final commit.");
  } catch (e) {
    if (token === active) {
      streaming = false;
      waiting = false;
      header();
      play(false);
      put("status", (e as Error).message);
      if (initialized) put("source", "Live interrupted");
    }
  }
}
function holdHere() {
  if (cue && review(cue) && cue.seq !== lastStop) {
    hold = dwell(cue);
    drewMotion = false;
    if (stage instanceof Depot) stage.restoreDetail();
    lastStop = cue.seq;
  }
}
el("play").onclick = () => {
  if (!ep) return;
  if (playing) {
    play(false);
    return;
  }
  if (!streaming && t >= ep.frames.length - 1) {
    seek(0);
    lastStop = -1;
  }
  touring = asset === "post";
  holdHere();
  play(true);
};
el("next").onclick = () => {
  if (!ep) return;
  play(false);
  hold = 0;
  const next = beats(ep).find((e) => e.tick > t + 0.01);
  seek(
    next
      ? next.tick + (next.kind === "fork fault" ? 0.45 : 0)
      : ep.frames.length - 1,
  );
  play(false);
};
slider.oninput = () => {
  play(false);
  hold = 0;
  lastStop = -1;
  seek(Number(slider.value));
  play(false);
};
let queryRequest = 0;
async function inspectStore() {
  const request = ++queryRequest;
  const panel = el("store-inspector");
  panel.hidden = !asset && !ep?.outcome;
  if (panel.hidden || !ep) return;
  const base = asset ? "/api/recordings/" + asset : "/api/episodes/" + ep.id;
  const table = el<HTMLTableElement>("store-rows");
  table.replaceChildren();
  put("store-query", "");
  put("store-status", "Reading the Relate database…");
  try {
    const response = await fetch(base + "/evidence/" + el<HTMLSelectElement>("store-question").value, { cache: "no-store" });
    if (!response.ok) throw Error("The database could not be read.");
    const result: {database: string; query: string; rows: Record<string, string | number>[]} = await response.json();
    if (request !== queryRequest) return;
    put("store-query", result.query);
    put("store-status", result.rows.length + (result.rows.length === 1 ? " row" : " rows") + " from " + result.database);
    if (result.rows.length) {
      const keys = Object.keys(result.rows[0]);
      const header = table.createTHead().insertRow();
      for (const key of keys) {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = key.replaceAll("_", " ");
        header.append(cell);
      }
      const body = table.createTBody();
      for (const record of result.rows) {
        const row = body.insertRow();
        for (const key of keys) row.insertCell().textContent = String(record[key]);
      }
    }
  } catch {
    if (request === queryRequest) put("store-status", "The saved database could not be read.");
  }
}
el("store-question").onchange = () => void inspectStore();
el("proof").onclick = () => {
  play(false);
  sources.showModal();
  el<HTMLSelectElement>("store-question").value = cue?.kind === "delivered" ? "departure" : cue?.issues?.length || cue?.kind === "fork fault" ? "fault" : "tools";
  void inspectStore();
};
el("options").onclick = () => {
  play(false);
  project.showModal();
};
document
  .querySelectorAll<HTMLButtonElement>("dialog .close")
  .forEach((b) => (b.onclick = () => b.closest("dialog")!.close()));
document.querySelectorAll<HTMLButtonElement>("[data-reel]").forEach(
  (b) =>
    (b.onclick = () => {
      project.close();
      touring = false;
      void reel(
        b.dataset.reel!,
        b.dataset.reel === "yard" ? null : t > 2 ? "replan" : null,
      );
    }),
);
document.querySelectorAll<HTMLButtonElement>("[data-station]").forEach(
  (b) =>
    (b.onclick = () => {
      touring = false;
      void reel(b.dataset.station!, null);
    }),
);
el("map").onclick = () => {
  top = !top;
  stage.view(top);
  put("map", top ? "Follow camera" : "Overhead camera");
  project.close();
  seek(t);
};
el("launch").onsubmit = (e) => {
  e.preventDefault();
  void live();
};
el("stop").onclick = () => {
  cancel();
  header();
  project.close();
  put("status", "Live run stopped.");
};
document.addEventListener("keydown", (e) => {
  if (
    project.open ||
    sources.open ||
    ["INPUT", "SELECT", "BUTTON"].includes((e.target as HTMLElement).tagName)
  )
    return;
  if (e.code === "Space") {
    e.preventDefault();
    el("play").click();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    el("next").click();
  }
});
function animate(ms: number) {
  if (playing && drewMotion && stage instanceof Depot)
    stage.noteMovingFrame(ms - latestMs);
  drewMotion = false;
  const dt = Math.min(0.32, (ms - latestMs) / 1000);
  latestMs = ms;
  if (playing && ep) {
    if (hold > 0) {
      hold = Math.max(0, hold - dt);
      if (cue) {
        const fraction = 1 - hold / dwell(cue);
        if (cue.kind === "fork fault") {
          const snapped =
            fraction < 0.03
              ? 0
              : fraction < 0.065
                ? 0.18
                : fraction < 0.13
                  ? 0.37
                  : 0.6;
          if (t < cue.tick + snapped) seek(cue.tick + snapped);
        }
        if (
          cue.kind === "read" &&
          cue.targetRevision === 1 &&
          !ep.layout.yard
        ) {
          const cameraStep = Math.min(0.44, Math.floor(fraction * 20) / 20);
          if (t < cue.tick + cameraStep) seek(cue.tick + cameraStep);
        }
        spotlight(cue, fraction);
      }
    } else if (t < ep.frames.length - 1) {
      const stop = beats(ep).find(
        (e) => review(e) && e.tick > t + 0.00001 && e.seq !== lastStop,
      );
      const future = t + dt * (ep.layout.yard ? 6.4 : 2.65);
      if (stop && future >= stop.tick) {
        seek(stop.tick);
        holdHere();
      } else seek(future);
    } else if (!streaming) {
      play(false);
      if (touring && asset === "post") {
        touring = false;
        void reel("yard", null).then(() => {
          if (asset === "yard") {
            holdHere();
            play(true);
          }
        });
      }
    }
  }
  requestAnimationFrame(animate);
}
async function start() {
  await reel(
    original === "yard"
      ? "yard"
      : original === "post-probe" || original === "probe"
        ? "post-probe"
        : "post",
    parameters.get("at"),
  );
  try {
    const r = await fetch("/api/live");
    if (r.ok) {
      const { controllers } = await r.json();
      if (Array.isArray(controllers)) {
        if (controllers.includes("azure"))
          el<HTMLSelectElement>("controller").add(
            new Option("LLM orchestrator", "azure"),
          );
      }
    }
  } catch {
    /* The initial recording reports its own loading error. */
  }
}
void start();
requestAnimationFrame(animate);
