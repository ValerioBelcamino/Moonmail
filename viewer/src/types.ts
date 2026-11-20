export type Cell = [number, number];
export type Robot = "Wick" | "Skim" | "Jack" | "Patch";
type Fleet = Record<"Wick" | "Skim" | "Jack", Cell> & { Patch?: Cell };
export interface Motion {
  kind: string;
  actor: Robot;
  from: string;
  to: string;
  start: number;
  end: number;
}
export interface YardOrder {
  id: string;
  route: string;
  coach: string;
  row: number;
  picker: string;
  courier: string;
  shelf: Cell;
  handoff: Cell;
  deck: Cell;
  hatch: Cell;
  berth: Cell;
  unload: Cell;
  desk: Cell;
  door: Cell;
  lift: Cell;
}
export interface Layout {
  yard?: { orders: YardOrder[]; bodies: Record<string, Robot> };
  width: number;
  depth: number;
  wall: number;
  gates: Record<string, Cell>;
  shelf: Cell;
  socket: Cell;
  lift?: Cell;
  baggage?: Cell;
  desk?: Cell;
  destination?: string;
  obstacles: Cell[];
  berths: Cell[][];
  starts: Fleet;
}
export interface Scenario {
  mission?: "mail" | "yard";
  mail_fault?: "forks" | "hatch" | "address" | null;
  seed: number;
  jam: boolean;
  parcel_cm: number;
  service_kit?: "off" | "driver" | "probe";
  fork_fault?: boolean;
}
export interface Frame {
  tick: number;
  robots: Fleet;
  cargoByBag?: Record<
    string,
    { holder: string; stage: string; manifest: string }
  >;
  holder: string;
  shutter: boolean;
  fork_online?: boolean;
  signal?: string;
  manifest?: string;
  motion?: Motion;
}
export interface Fact {
  entity: string;
  fact: string;
}
export interface PlanGraph {
  revision: number;
  nodes: {
    uid: string;
    op: string;
    label: string;
    state: string;
    actor: string;
  }[];
  edges: { source: string; target: string }[];
}
export interface DispatchInput {
  orders?: Record<
    string,
    { holder: string; coach: string; address: string; waybill: string }
  >;
  goal: string;
  world: Record<string, string>;
  current_holder: string;
  destination: string;
  retained: Record<string, { actor: string; after: string[] }>;
  instrument_interfaces: NonNullable<DepotEvent["service_interfaces"]>;
  operators: Record<
    string,
    {
      requires: Record<string, string>;
      establishes: Record<string, string>;
      effort: number;
      eligible_and_approach: Record<string, number>;
    }
  >;
}
export interface DepotEvent {
  modelInput?: DispatchInput;
  targetRevision?: number;
  bindings?: Record<string, string>;
  active?: string[];
  feedback?: { counterexample: string };
  planGraph?: PlanGraph;
  op?: string;
  uid?: string;
  new?: string[];
  retained?: string[];
  issues?: { uid: string; fact: string; expected: string; actual: string }[];
  proposal?: { steps: { op: string; actor: string; after: string[] }[] };

  seq: number;
  tick: number;
  kind: string;
  title: string;
  actors: Robot[];
  reason?: string;
  facts?: Fact[];
  motion?: Motion;
  choices?: {
    crew: Robot[];
    ticks: number;
    via?: string;
    repair?: { actor: Robot; patient: Robot; instrument: string };
  }[];
  service_interfaces?: {
    robot: string;
    instrument: string;
    fits: string;
    needs: string;
    patient?: string;
  }[];
  proof?: GraphProof;
  controller?: string;
  tools?: { tool: string; usage: number; result?: unknown }[];
}
export interface Episode {
  version: 1;
  id: string;
  controller: string;
  scenario: Scenario;
  layout: Layout;
  outcome: string;
  checkpoint?: { tick: number; holder: string } | null;
  branch?: {
    source: string;
    tick: number;
    sourceController: string;
    liftContext: boolean;
  };
  frames: Frame[];
  events: DepotEvent[];
}

export interface GraphProof {
  query: string;
  bindings: Record<string, number | string>;
  rows: Record<string, string | number | boolean>[];
  nodes: string[];
  links: string[];
  holder: string;
  state: Record<string, string>;
}
