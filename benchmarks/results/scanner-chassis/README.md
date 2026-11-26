# Add a fifth chassis type at the signing desk

Deliver Bag 47, Bag 52, Bag 68 to the addressed coaches and sign every waybill before releasing one train.

3 orders · 9 robots · 5 body types in use · 23 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Ink · sign | Ink · sign |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,993 | 5,521 |
| Model time / validator time | 7.01 s / 17 ms | 8.84 s / 13 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Ink · sign | Ink · sign |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,920 | 5,472 |
| Model time / validator time | 6.39 s / 16 ms | 8.31 s / 13 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × sign, 3 × load coach, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Ink · sign | Ink · sign |
| Final facts | Signal green · 3/3 aboard · 3/3 signed | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,909 | 5,386 |
| Model time / validator time | 6.51 s / 17 ms | 6.94 s / 21 ms |
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
<summary>Robots eligible to sign (9 rows)</summary>

```cypher
MATCH (r:Robot)-[:SERVICES]->(o:Order),(r)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(:Skill {id:'Scan'})
WHERE r.x>12 RETURN o.id AS bag,r.id AS robot,b.id AS chassis ORDER BY bag,robot
```

| bag | robot | chassis |
| --- | --- | --- |
| 47 | Ink | Scanner cart |
| 47 | Jack | Lift |
| 47 | Patch | Service crawler |
| 52 | Ink | Scanner cart |
| 52 | Jack | Lift |
| 52 | Patch | Service crawler |
| 68 | Ink | Scanner cart |
| 68 | Jack | Lift |
| 68 | Patch | Service crawler |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | 3 × pick up, 3 × hand off, 3 × cross hatch, 3 × load coach, 3 × sign, release train |
| Validator | Accepted |
| Executed assignments for Bag 47 | Ink · sign |
| Final facts | Signal green · 3/3 aboard · 3/3 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
