import type { YardFleet } from "./types";

const defaults: YardFleet = {
  orders: 2,
  pickers: 2,
  couriers: 2,
  forklifts: 1,
  mechanics: 1,
};
const select = (k: keyof YardFleet) =>
  document.querySelector<HTMLSelectElement>("#fleet-" + k)!;

function choices(key: keyof YardFleet, max: number, value: number) {
  const min = key === "orders" ? 1 : 0;
  const options = Array.from(
    { length: max - min + 1 },
    (_, n) => new Option(String(n + min), String(n + min)),
  );
  const control = select(key);
  control.replaceChildren(...options);
  control.value = String(Math.min(value, max));
}

export function setFleet(fleet: YardFleet = defaults) {
  choices("orders", 3, fleet.orders);
  choices("pickers", fleet.orders, fleet.pickers);
  choices("couriers", fleet.orders, fleet.couriers);
  choices("forklifts", 3, fleet.forklifts);
  choices("mechanics", 2, fleet.mechanics);
}

export function readFleet(): YardFleet {
  return {
    orders: +select("orders").value,
    pickers: +select("pickers").value,
    couriers: +select("couriers").value,
    forklifts: +select("forklifts").value,
    mechanics: +select("mechanics").value,
  };
}

export function resizeBays() {
  const fleet = readFleet();
  for (const key of ["pickers", "couriers"] as const) {
    const wasFull = fleet[key] === select(key).options.length - 1;
    choices(key, fleet.orders, wasFull ? fleet.orders : fleet[key]);
  }
}
