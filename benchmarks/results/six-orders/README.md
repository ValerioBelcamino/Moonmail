# Six bags for one train

Deliver Bag 47, Bag 52, Bag 68, Bag 74, Bag 81, Bag 96 to the addressed coaches and sign every waybill before releasing one train.

6 orders · 14 robots · 4 body types in use · 38 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × load coach, 6 × sign, release train | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | Accepted | Accepted |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 4,774 | 8,710 |
| Model time / validator time | 9.55 s / 29 ms | 10.26 s / 35 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × load coach, 6 × sign, release train | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | Accepted | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | — | Accepted |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 4,828 | 17,871 |
| Model time / validator time | 10.15 s / 29 ms | 18.57 s / 41 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × load coach, 6 × sign, release train | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | Accepted | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | — | Rejected. 96/manifest has no eligible body in the graph • Puck cannot perform 96/manifest |
| Draft 3 | — | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | — | Rejected. 96/manifest has no eligible body in the graph • Elm cannot perform 96/manifest |
| Draft 4 | — | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × sign, 6 × load coach, release train |
| Validator | — | Rejected. 96/manifest has no eligible body in the graph • Signal box cannot perform 96/manifest |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal red · 0/6 aboard · 0/6 signed |
| Expected outcome reached | Yes | No · exhausted |
| Total tokens | 4,817 | 36,976 |
| Model time / validator time | 9.57 s / 27 ms | 34.55 s / 75 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Delivery routes (6 rows)</summary>

```cypher
MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:ADDRESSED_TO]->(route:Route)
       <-[:SERVES]-(coach:Station)<-[:DELIVER_TO]-(o),(w:Waybill)-[:COVERS]->(p),
       (o)-[:ON_TRAIN]->(t:Train)-[:HAS_COACH]->(coach)
       RETURN o.id AS order,p.id AS bag,route.id AS route,coach.id AS coach,w.id AS bill ORDER BY bag
```

| order | bag | route | coach | bill |
| --- | --- | --- | --- | --- |
| 47 | Bag 47 | Northport | Coach A | Waybill 47 |
| 52 | Bag 52 | Eastbank | Coach B | Waybill 52 |
| 68 | Bag 68 | Westmere | Coach C | Waybill 68 |
| 74 | Bag 74 | Southgate | Coach D | Waybill 74 |
| 81 | Bag 81 | Longford | Coach E | Waybill 81 |
| 96 | Bag 96 | Ashfield | Coach F | Waybill 96 |

</details>

<details>
<summary>Couriers fitting each hatch (6 rows)</summary>

```cypher
MATCH (o:Order)-[:VIA]->(g:Passage),(o)-[:REQUESTS]->(p:Parcel)
OPTIONAL MATCH (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Passive deck'})
WHERE b.cm<=g.cm AND b.deck+p.cm<=g.cm
RETURN o.id AS bag,g.id AS hatch,r.id AS courier ORDER BY bag,courier
```

| bag | hatch | courier |
| --- | --- | --- |
| 47 | Hatch 47 | Skim |
| 52 | Hatch 52 | Dash |
| 68 | Hatch 68 | Moss |
| 74 | Hatch 74 | Kite |
| 81 | Hatch 81 | Zip |
| 96 | Hatch 96 | Puck |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | 6 × pick up, 6 × hand off, 6 × cross hatch, 6 × load coach, 6 × sign, release train |
| Validator | Accepted |
| Final facts | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
