# One bag for one train

Deliver Bag 47 to the addressed coaches and sign every waybill before releasing one train.

1 order · 4 robots · 4 body types in use · 8 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, sign, load coach, release train | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | Accepted | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | — | Accepted |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,514 | 6,118 |
| Model time / validator time | 3.78 s / 5 ms | 9.78 s / 11 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, sign, load coach, release train | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | Accepted | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | — | Accepted |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,579 | 6,167 |
| Model time / validator time | 5.51 s / 9 ms | 9.37 s / 9 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, sign, load coach, release train | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | Accepted | Rejected. 47/cross supplies no precondition of 47/manifest. Keep the branches independent. |
| Draft 2 | — | pick up, hand off, cross hatch, sign, load coach, release train |
| Validator | — | Accepted |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,514 | 6,256 |
| Model time / validator time | 5.36 s / 9 ms | 9.97 s / 10 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Delivery routes (1 rows)</summary>

```cypher
MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:ADDRESSED_TO]->(route:Route)
       <-[:SERVES]-(coach:Station)<-[:DELIVER_TO]-(o),(w:Waybill)-[:COVERS]->(p),
       (o)-[:ON_TRAIN]->(t:Train)-[:HAS_COACH]->(coach)
       RETURN o.id AS order,p.id AS bag,route.id AS route,coach.id AS coach,w.id AS bill ORDER BY bag
```

| order | bag | route | coach | bill |
| --- | --- | --- | --- | --- |
| 47 | Bag 47 | Northport | Coach A | Waybill 47 |

</details>

<details>
<summary>Couriers fitting each hatch (1 rows)</summary>

```cypher
MATCH (o:Order)-[:VIA]->(g:Passage),(o)-[:REQUESTS]->(p:Parcel)
OPTIONAL MATCH (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Passive deck'})
WHERE b.cm<=g.cm AND b.deck+p.cm<=g.cm
RETURN o.id AS bag,g.id AS hatch,r.id AS courier ORDER BY bag,courier
```

| bag | hatch | courier |
| --- | --- | --- |
| 47 | Hatch 47 | Skim |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | pick up, hand off, cross hatch, load coach, sign, release train |
| Validator | Accepted |
| Final facts | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
