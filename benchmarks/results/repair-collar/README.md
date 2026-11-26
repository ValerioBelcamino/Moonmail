# Carriage fault with a compatible driver

Deliver Bag 47 to the addressed coaches and sign every waybill before releasing one train.

1 order · 4 robots · 4 body types in use · 9 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. Patch carries a hex driver. The station hoist is disconnected.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | sign, repair carriage, load coach, release train | repair carriage, load coach, sign, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Patch · repair carriage | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,733 | 3,360 |
| Model time / validator time | 8.04 s / 5 ms | 5.95 s / 4 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | sign, repair carriage, load coach, release train | repair carriage, load coach, sign, release train |
| Validator | Accepted | Rejected. 47/load names a predecessor outside this proposal. |
| Draft 2 | — | repair carriage, load coach, sign, release train |
| Validator | — | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Patch · repair carriage | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,662 | 6,569 |
| Model time / validator time | 6.06 s / 7 ms | 9.13 s / 4 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | repair carriage, load coach, sign, release train | repair carriage, load coach, sign, release train |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Patch · repair carriage, Patch · sign | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 1,707 | 3,343 |
| Model time / validator time | 7.89 s / 23 ms | 5.33 s / 7 ms |
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
| Patch | Hex driver | Hex collar | Hex collar | Jack forks | Jack |

</details>

<details>
<summary>Connected hoist (0 rows)</summary>

```cypher
MATCH (l:LoadingLift)-[:FEEDS]->(c:Station)<-[:DELIVER_TO]-(o:Order),
       (o)-[:REQUESTS]->(:Parcel)-[:USES]->(t:Tray)<-[:ACCEPTS]-(l),
       (r:Robot)-[:SERVICES]->(o),(r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(s)<-[:DOCKS_WITH]-(l)
       RETURN o.id AS bag,r.id AS actor,l.id AS lift
```

The query returned no matching rows.

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
| Draft 1 | repair carriage, load coach, sign, release train |
| Validator | Accepted |
| Executed assignments for Bag 47 | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 1/1 aboard · 1/1 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
