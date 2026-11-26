# Remove the courier serving the last bay

Deliver Bag 47, Bag 52, Bag 68 to the addressed coaches and sign every waybill before releasing one train.

3 orders · 7 robots · 4 body types in use · 19 eligible action–actor pairs.

The expected outcome is a verified hold with the signal red.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Validator | Confirmed hold | Confirmed hold |
| Final facts | Signal red · 0/3 aboard · 0/3 signed | Signal red · 0/3 aboard · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,641 | 5,120 |
| Model time / validator time | 4.77 s / 0 ms | 6.22 s / 0 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Validator | Confirmed hold | Confirmed hold |
| Final facts | Signal red · 0/3 aboard · 0/3 signed | Signal red · 0/3 aboard · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,646 | 5,175 |
| Model time / validator time | 4.81 s / 0 ms | 7.80 s / 0 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Confirmed hold | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | — | Rejected. 68/cross has no eligible body in the graph |
| Draft 3 | — | Hold the train |
| Validator | — | Confirmed hold |
| Final facts | Signal red · 0/3 aboard · 0/3 signed | Signal red · 0/3 aboard · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,669 | 17,055 |
| Model time / validator time | 5.76 s / 0 ms | 24.11 s / 14 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Delivery routes (3 rows)</summary>

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

</details>

<details>
<summary>Couriers fitting each hatch (3 rows)</summary>

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
| 68 | Hatch 68 | None |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | Hold the train |
| Validator | Confirmed hold |
| Final facts | Signal red · 0/3 aboard · 0/3 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
