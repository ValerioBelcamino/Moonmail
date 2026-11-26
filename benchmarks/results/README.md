# Moonmail planning benchmark

20 dispatch checkpoints · 68 trials per input · gpt-6-luna. Each pair starts from the same saved Relate database and uses the station’s planner, Z3 validator and symbolic executor.

Moonmail produced **19 more correct first drafts** than the full-state baseline. It used **55.3% fewer model tokens** across all trials, including corrections.

| Metric | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Correct first draft | 52/68 (76.5%) | 33/68 (48.5%) |
| Correct within 4 drafts | 68/68 (100.0%) | 65/68 (95.6%) |
| Extra drafts | 31 | 49 |
| Total model tokens | 344,864 | 771,336 |
| Median model time per trial | 7.91 s | 10.09 s |

Moonmail reads eligible robots and surviving assignments directly from Relate. The baseline receives the entities, relationships and rules from which it can derive them. Both get the same goal, action contracts, tool schema and validator feedback. A correct decision reaches the requested goal or correctly holds an infeasible dispatch.

## Deliveries and holds

Each cell shows correct first drafts → correct final outcomes. A rejected draft receives the validator’s reason.

| Expected outcome | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Feasible delivery goal | 45/54 → 54/54 | 23/54 → 51/54 |
| Required hold | 7/14 → 14/14 | 10/14 → 14/14 |

<details>
<summary>Success after each draft and collection details</summary>


| Input | By draft 1 | By draft 2 | By draft 3 | By draft 4 |
| --- | --- | --- | --- | --- |
| Moonmail with Relate | 52/68 | 57/68 | 64/68 | 68/68 |
| Full-state baseline | 33/68 | 57/68 | 65/68 | 65/68 |

The schedule per input was 12 cases × 3 trials and 8 cases × 4 trials. Every trial has equal weight. The local reference runs once per checkpoint and is counted separately. Token totals include all reported input and output tokens. Model time sums completed calls within each trial.

The recorded trials were collected in two batches on the same deployment. [Collection settings](suite.json)

</details>

## Inspect a dispatch

Jack’s broken carriage blocks three loads. Bag 74 has already crossed the hatch, and Fern’s carriage still works. The saved graph keeps Fern’s assignment ready to run. Follow the **Bag 74 load waits for** row to see whether each draft preserves that fact. [Six-bag repair](midrun-6-shared-driver/README.md#trial-4)

## Results by case

Each arrow shows how many trials were correct on the first draft and how many were correct within the full budget. Select a case to see every proposal, validator reply and final graph.

| Case | Bags / robots / chassis types | Moonmail with Relate | Full-state baseline | Local reference |
| --- | --- | --- | --- | --- |
| [One bag for one train](one-order/README.md) | 1 / 4 / 4 | 3/3 → 3/3 | 0/3 → 3/3 | Goal reached |
| [Three bags for one train](three-orders/README.md) | 3 / 8 / 4 | 3/3 → 3/3 | 0/3 → 3/3 | Goal reached |
| [Six bags for one train](six-orders/README.md) | 6 / 14 / 4 | 3/3 → 3/3 | 1/3 → 2/3 | Goal reached |
| [Three bags with two extra forklifts and one extra mechanic](larger-fleet/README.md) | 3 / 11 / 4 | 3/3 → 3/3 | 3/3 → 3/3 | Goal reached |
| [Add a fifth chassis type at the signing desk](scanner-chassis/README.md) | 3 / 9 / 5 | 3/3 → 3/3 | 3/3 → 3/3 | Goal reached |
| [Remove the courier serving the last bay](missing-courier/README.md) | 3 / 7 / 4 | 3/3 → 3/3 | 2/3 → 3/3 | Correct hold |
| [Bag 47 starts across the hatch](bag-on-platform/README.md) | 3 / 8 / 4 | 2/3 → 3/3 | 0/3 → 3/3 | Goal reached |
| [Bag 47 starts with a signed waybill](waybill-signed/README.md) | 3 / 8 / 4 | 3/3 → 3/3 | 0/3 → 2/3 | Goal reached |
| [Load only Bag 52 and keep the signal red](load-one-bag/README.md) | 3 / 8 / 4 | 3/3 → 3/3 | 3/3 → 3/3 | Goal reached |
| [Carriage fault with a compatible driver](repair-collar/README.md) | 1 / 4 / 4 | 3/3 → 3/3 | 2/3 → 3/3 | Goal reached |
| [Carriage fault with a probe and no station lift](hold-collar/README.md) | 1 / 4 / 4 | 0/3 → 3/3 | 0/3 → 3/3 | Correct hold |
| [Carriage fault with a probe and a connected station lift](use-hoist/README.md) | 1 / 4 / 4 | 3/3 → 3/3 | 1/3 → 3/3 | Goal reached |
| [3 orders · carriage for Bag 47 alone · hex driver](midrun-3-single-driver/README.md) | 3 / 9 / 4 | 4/4 → 4/4 | 2/4 → 4/4 | Goal reached |
| [3 orders · carriage for Bag 47 alone · inspection probe](midrun-3-single-probe/README.md) | 3 / 9 / 4 | 4/4 → 4/4 | 1/4 → 4/4 | Goal reached |
| [3 orders · shared carriage · hex driver](midrun-3-shared-driver/README.md) | 3 / 9 / 4 | 3/4 → 4/4 | 2/4 → 4/4 | Goal reached |
| [3 orders · shared carriage · inspection probe](midrun-3-shared-probe/README.md) | 3 / 9 / 4 | 3/4 → 4/4 | 4/4 → 4/4 | Correct hold |
| [6 orders · carriage for Bag 47 alone · hex driver](midrun-6-single-driver/README.md) | 6 / 15 / 4 | 1/4 → 4/4 | 2/4 → 4/4 | Goal reached |
| [6 orders · carriage for Bag 47 alone · inspection probe](midrun-6-single-probe/README.md) | 6 / 15 / 4 | 3/4 → 4/4 | 2/4 → 4/4 | Goal reached |
| [6 orders · shared carriage · hex driver](midrun-6-shared-driver/README.md) | 6 / 15 / 4 | 1/4 → 4/4 | 1/4 → 3/4 | Goal reached |
| [6 orders · shared carriage · inspection probe](midrun-6-shared-probe/README.md) | 6 / 15 / 4 | 1/4 → 4/4 | 4/4 → 4/4 | Correct hold |

[Download per-trial scores](scores.csv) · [Suite settings](suite.json)

[Run or inspect the benchmark](../README.md)
