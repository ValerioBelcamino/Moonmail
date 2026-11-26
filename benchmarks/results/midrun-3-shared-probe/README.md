# 3 orders · shared carriage · inspection probe

Deliver Bag 47, Bag 52, Bag 68 to the addressed coaches and sign every waybill before releasing one train.

3 orders · 9 robots · 4 body types in use · 25 eligible action–actor pairs.

The expected outcome is a verified hold with the signal red.

Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. Patch carries an inspection probe. The station hoist connects to Bag 47’s coach.

## The checkpoint

| Bag | Cargo | Waybill | Assigned forklift | Carriage |
| --- | --- | --- | --- | --- |
| 47 | platform | unsigned | Jack | offline |
| 52 | staged | signed | Jack | offline |
| 68 | aboard | unsigned | Fern | online |

The fault invalidates `47/load`, `52/load` and blocks the shared departure. 3 pending actions keep their assignments and surviving dependencies.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Validator | Confirmed hold | Confirmed hold |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 1/3 aboard (68) · 1/3 signed | Signal red · 1/3 aboard (68) · 1/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,991 | 6,211 |
| Model time / validator time | 9.67 s / 0 ms | 8.82 s / 0 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Validator | Confirmed hold | Confirmed hold |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 1/3 aboard (68) · 1/3 signed | Signal red · 1/3 aboard (68) · 1/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 3,001 | 6,282 |
| Model time / validator time | 9.28 s / 0 ms | 9.03 s / 0 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Validator | Confirmed hold | Confirmed hold |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 1/3 aboard (68) · 1/3 signed | Signal red · 1/3 aboard (68) · 1/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 2,909 | 6,180 |
| Model time / validator time | 7.48 s / 0 ms | 7.59 s / 0 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

### Trial 4

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 2 × cross hatch, 3 × sign, 2 × load coach, use station hoist, release train | Hold the train |
| Validator | Rejected. 47/cross requires 47/cargo=staged; no causal predecessor establishes it | Confirmed hold |
| Draft 2 | hand off, 2 × cross hatch, 3 × sign, 2 × load coach, use station hoist, release train | — |
| Validator | Rejected. 47/stage requires 47/cargo=picked; no causal predecessor establishes it | — |
| Draft 3 | pick up, hand off, 2 × cross hatch, 3 × sign, 2 × load coach, use station hoist, release train | — |
| Validator | Rejected. 47/collect requires 47/cargo=shelf; no causal predecessor establishes it | — |
| Draft 4 | Hold the train | — |
| Validator | Confirmed hold | — |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 1/3 aboard (68) · 1/3 signed | Signal red · 1/3 aboard (68) · 1/3 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 11,951 | 6,292 |
| Model time / validator time | 19.80 s / 18 ms | 8.75 s / 0 ms |
| Evidence | [Raw trace](relate-4.json) · [Final Relate file, gzip](relate-4.rl.gz) | [Raw trace](flat-4.json) · [Final Relate file, gzip](flat-4.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Loading carriages at the checkpoint (3 rows)</summary>

```cypher
MATCH (o:Order)-[:LOADS_WITH]->(t:Tool)<-[:MOUNTS]-(r:Robot),
    (o)-[:REQUESTS]->(p:Parcel)<-[:COVERS]-(w:Waybill)
    RETURN o.id AS bag,p.stage AS stage,w.status AS waybill,r.id AS forklift,t.online AS online ORDER BY bag
```

| bag | stage | waybill | forklift | online |
| --- | --- | --- | --- | --- |
| 47 | platform | unsigned | Jack | False |
| 52 | staged | signed | Jack | False |
| 68 | aboard | unsigned | Fern | True |

</details>

<details>
<summary>Instrument and carriage interfaces (2 rows)</summary>

```cypher
MATCH (r:Robot)-[:MOUNTS]->(i:Instrument)-[:FITS]->(port:Interface),
       (r)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(:Skill {id:'Service wrist'}),
       (t:Tool)<-[:MOUNTS]-(p:Robot),(t)-[:USES_PORT]->(need:Interface)
       RETURN r.id AS robot,i.id AS instrument,port.id AS fits,need.id AS needs,t.id AS tool,p.id AS patient
```

| robot | instrument | fits | needs | tool | patient |
| --- | --- | --- | --- | --- | --- |
| Patch | Inspection probe | Test socket | Hex collar | Fern forks | Fern |
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
<summary>Fault impact on the prior plan (3 rows)</summary>

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
| INVALIDATES | 1/52/load | Load coach |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | Hold the train |
| Validator | Confirmed hold |
| Executed assignments for Bag 47 | — |
| Final facts | Signal red · 1/3 aboard (68) · 1/3 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
