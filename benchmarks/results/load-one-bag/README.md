# Load only Bag 52 and keep the signal red

Get Bag 52 aboard its addressed coach. Confirm delivery and leave the train at red. Other bags and signatures are outside this goal.

3 orders · 8 robots · 4 body types in use · 20 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, load coach, confirm delivery | pick up, hand off, cross hatch, load coach, confirm delivery |
| Validator | Accepted | Accepted |
| Final facts | Signal red · 1/3 aboard (52) · 0/3 signed | Signal red · 1/3 aboard (52) · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,587 | 4,930 |
| Model time / validator time | 4.18 s / 5 ms | 4.18 s / 6 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, load coach, confirm delivery | pick up, hand off, cross hatch, load coach, confirm delivery |
| Validator | Accepted | Accepted |
| Final facts | Signal red · 1/3 aboard (52) · 0/3 signed | Signal red · 1/3 aboard (52) · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,577 | 4,930 |
| Model time / validator time | 4.49 s / 11 ms | 4.23 s / 8 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | pick up, hand off, cross hatch, load coach, confirm delivery | pick up, hand off, cross hatch, load coach, confirm delivery |
| Validator | Accepted | Accepted |
| Final facts | Signal red · 1/3 aboard (52) · 0/3 signed | Signal red · 1/3 aboard (52) · 0/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,582 | 4,930 |
| Model time / validator time | 4.67 s / 9 ms | 4.71 s / 6 ms |
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
<summary>Parcel custody and waybills (3 rows)</summary>

```cypher
MATCH (o:Order)-[:REQUESTS]->(p:Parcel)-[:HELD_BY]->(h),
(o)-[:DELIVER_TO]->(c:Station),(w:Waybill)-[:COVERS]->(p)
RETURN o.id AS bag,p.stage AS stage,h.id AS holder,c.id AS coach,w.status AS waybill ORDER BY bag
```

| bag | stage | holder | coach | waybill |
| --- | --- | --- | --- | --- |
| 47 | shelf | Shelf 47 | Coach A | unsigned |
| 52 | shelf | Shelf 52 | Coach B | unsigned |
| 68 | shelf | Shelf 68 | Coach C | unsigned |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | pick up, hand off, cross hatch, load coach, confirm delivery |
| Validator | Accepted |
| Final facts | Signal red · 1/3 aboard (52) · 0/3 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
