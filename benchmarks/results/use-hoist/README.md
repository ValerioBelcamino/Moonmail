# Carriage fault with a probe and a connected station lift

Deliver Bag 47 to the addressed coaches and sign every waybill before releasing one train.

1 order · 4 robots · 4 body types in use · 9 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. Patch carries an inspection probe. The station hoist connects to Bag 47’s coach.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | sign, use station hoist, release train | use station hoist, sign, release train |
| Validator | Accepted | Rejected. 47/hoist names a predecessor outside this proposal. |
| Draft 2 | — | use station hoist, sign, release train |
| Validator | — | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Skim · use station hoist | Skim · use station hoist, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,792 | 6,811 |
| Model time / validator time | 9.31 s / 4 ms | 21.03 s / 4 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | sign, use station hoist, release train | use station hoist, sign, release train |
| Validator | Accepted | Rejected. 47/hoist names a predecessor outside this proposal. |
| Draft 2 | — | use station hoist, sign, release train |
| Validator | — | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Skim · use station hoist | Skim · use station hoist, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,780 | 6,792 |
| Model time / validator time | 9.03 s / 4 ms | 10.65 s / 6 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | sign, use station hoist, release train | use station hoist, sign, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Skim · use station hoist | Skim · use station hoist, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,484 | 3,402 |
| Model time / validator time | 3.27 s / 4 ms | 6.52 s / 6 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Instrument and carriage interfaces (1 rows)</summary>

```cypher
MATCH (r:Robot)-[:MOUNTS]->(i:Instrument)-[:FITS]->(port:Interface),
       (r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(:Skill {id:'Service wrist'}),
       (t:Tool)<-[:MOUNTS]-(p:Robot),(t)-[:USES_PORT]->(need:Interface)
       RETURN r.id AS robot,i.id AS instrument,port.id AS fits,need.id AS needs,t.id AS tool,p.id AS patient
```

| robot | instrument | fits | needs | tool | patient |
| --- | --- | --- | --- | --- | --- |
| Patch | Inspection probe | Test socket | Hex collar | Jack forks | Jack |

</details>

<details>
<summary>Connected hoist (1 rows)</summary>

```cypher
MATCH (l:LoadingLift)-[:FEEDS]->(c:Station)<-[:DELIVER_TO]-(o:Order),
       (o)-[:REQUESTS]->(:Parcel)-[:USES]->(t:Tray)<-[:ACCEPTS]-(l),
       (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(s)<-[:DOCKS_WITH]-(l)
       RETURN o.id AS bag,r.id AS actor,l.id AS lift
```

| bag | actor | lift |
| --- | --- | --- |
| 47 | Skim | Mail lift |

</details>

<details>
<summary>Fault impact on the prior plan (2 rows)</summary>

```cypher
MATCH (e:Event {id:$event})-[k]->(a:Action)
WHERE type(k)='INVALIDATES' OR type(k)='BLOCKS'
RETURN type(k) AS effect,a.uid AS uid,a.label AS action ORDER BY effect,uid
```

Parameters · `{"event": 1}`

| effect | uid | action |
| --- | --- | --- |
| BLOCKS | 1/depart | Release train |
| INVALIDATES | 1/47/load | Load coach |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | use station hoist, sign, release train |
| Validator | Accepted |
| Executed assignments for Bag 47 | Skim · use station hoist, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
