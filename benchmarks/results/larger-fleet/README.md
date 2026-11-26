# Three bags with two extra forklifts and one extra mechanic

Deliver Bag 47, Bag 52, Bag 68 to the addressed coaches and sign every waybill before releasing one train.

3 orders · 11 robots · 4 body types in use · 29 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 3,161 | 5,760 |
| Model time / validator time | 7.32 s / 20 ms | 9.31 s / 17 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 3,128 | 5,801 |
| Model time / validator time | 7.16 s / 19 ms | 8.25 s / 17 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 3,184 | 5,659 |
| Model time / validator time | 6.79 s / 17 ms | 5.97 s / 19 ms |
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
| 68 | Hatch 68 | Moss |

</details>

<details>
<summary>Robots eligible to sign (15 rows)</summary>

```cypher
MATCH (r:Robot)-[:SERVICES]->(o:Order),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Scan'})
WHERE r.x>12 RETURN o.id AS bag,r.id AS robot,b.id AS chassis ORDER BY bag,robot
```

| bag | robot | chassis |
| --- | --- | --- |
| 47 | Ash | Lift |
| 47 | Dot | Service crawler |
| 47 | Fern | Lift |
| 47 | Jack | Lift |
| 47 | Patch | Service crawler |
| 52 | Ash | Lift |
| 52 | Dot | Service crawler |
| 52 | Fern | Lift |
| 52 | Jack | Lift |
| 52 | Patch | Service crawler |
| 68 | Ash | Lift |
| 68 | Dot | Service crawler |
| 68 | Fern | Lift |
| 68 | Jack | Lift |
| 68 | Patch | Service crawler |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train |
| Validator | Accepted |
| Final facts | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
