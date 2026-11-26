# 6 orders · shared carriage · inspection probe

Deliver Bag 47, Bag 52, Bag 68, Bag 74, Bag 81, Bag 96 to the addressed coaches and sign every waybill before releasing one train.

6 orders · 15 robots · 4 body types in use · 48 eligible action–actor pairs.

The expected outcome is a verified hold with the signal red.

Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. Patch carries an inspection probe. The station hoist connects to Bag 47’s coach.

## The checkpoint

| Bag | Cargo | Waybill | Assigned forklift | Carriage |
| --- | --- | --- | --- | --- |
| 47 | platform | unsigned | Jack | offline |
| 52 | staged | signed | Jack | offline |
| 68 | aboard | unsigned | Fern | online |
| 74 | platform | unsigned | Fern | online |
| 81 | staged | signed | Jack | offline |
| 96 | aboard | unsigned | Fern | online |

The fault invalidates `47/load`, `52/load`, `81/load` and blocks the shared departure. 7 pending actions keep their assignments and surviving dependencies.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, use station hoist, 3 × cross hatch, 3 × load coach, release train | Hold the train |
| Bag 74 load waits for | cross hatch (Bag 74) | Hold requested |
| Validator | Rejected. Preserve the existing predecessors of 74/load. | Confirmed hold |
| Draft 2 | 4 × sign, use station hoist, 3 × cross hatch, 3 × load coach, release train | — |
| Bag 74 load waits for | cross hatch (Bag 74) | — |
| Validator | Rejected. Preserve the existing predecessors of 74/load. | — |
| Draft 3 | Hold the train | — |
| Bag 74 load waits for | Hold requested | — |
| Validator | Confirmed hold | — |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 2/6 aboard (68, 96) · 2/6 signed | Signal red · 2/6 aboard (68, 96) · 2/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 15,536 | 10,241 |
| Model time / validator time | 21.35 s / 8 ms | 9.30 s / 0 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | Hold the train | Hold the train |
| Bag 74 load waits for | Hold requested | Hold requested |
| Validator | Confirmed hold | Confirmed hold |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 2/6 aboard (68, 96) · 2/6 signed | Signal red · 2/6 aboard (68, 96) · 2/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 4,633 | 10,289 |
| Model time / validator time | 6.85 s / 0 ms | 9.49 s / 0 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, use station hoist, 3 × cross hatch, 2 × load coach, release train | Hold the train |
| Bag 74 load waits for | cross hatch (Bag 74) | Hold requested |
| Validator | Rejected. Preserve the existing predecessors of 74/load. | Confirmed hold |
| Draft 2 | 4 × sign, use station hoist, 2 × cross hatch, 3 × load coach, release train | — |
| Bag 74 load waits for | Ready now | — |
| Validator | Rejected. 52/load requires forks=online; no causal predecessor establishes it | — |
| Draft 3 | Hold the train | — |
| Bag 74 load waits for | Hold requested | — |
| Validator | Confirmed hold | — |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 2/6 aboard (68, 96) · 2/6 signed | Signal red · 2/6 aboard (68, 96) · 2/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 15,360 | 10,149 |
| Model time / validator time | 20.70 s / 29 ms | 6.96 s / 0 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

### Trial 4

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, 2 × cross hatch, 2 × load coach, 2 × use station hoist, release train | Hold the train |
| Bag 74 load waits for | Ready now | Hold requested |
| Validator | Rejected. Every proposed operation must contribute to depart. | Confirmed hold |
| Draft 2 | 4 × sign, 2 × cross hatch, 2 × load coach, 2 × use station hoist, release train | — |
| Bag 74 load waits for | Ready now | — |
| Validator | Rejected. 47/manifest supplies no precondition of 47/hoist. Keep the branches independent. | — |
| Draft 3 | 4 × sign, 2 × cross hatch, 2 × load coach, 2 × use station hoist, release train | — |
| Bag 74 load waits for | Ready now | — |
| Validator | Rejected. 52/load requires forks=online; no causal predecessor establishes it | — |
| Draft 4 | Hold the train | — |
| Bag 74 load waits for | Hold requested | — |
| Validator | Confirmed hold | — |
| Executed assignments for Bag 47 | — | — |
| Final facts | Signal red · 2/6 aboard (68, 96) · 2/6 signed | Signal red · 2/6 aboard (68, 96) · 2/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 21,100 | 10,390 |
| Model time / validator time | 22.52 s / 10 ms | 11.10 s / 0 ms |
| Evidence | [Raw trace](relate-4.json) · [Final Relate file, gzip](relate-4.rl.gz) | [Raw trace](flat-4.json) · [Final Relate file, gzip](flat-4.rl.gz) |

## What the planners could see

[Full-state input](flat-input.json) · [Relate input](relate-input.json) · [Shared instructions and graph evidence](case.json) · [Decision-time Relate database](decision.rl)

<details>
<summary>Loading carriages at the checkpoint (6 rows)</summary>

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
| 74 | platform | unsigned | Fern | True |
| 81 | staged | signed | Jack | False |
| 96 | aboard | unsigned | Fern | True |

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
<summary>Fault impact on the prior plan (4 rows)</summary>

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
| INVALIDATES | 1/81/load | Load coach |

</details>

## Keyless reference

| Decision | Local reference |
| --- | --- |
| Draft 1 | Hold the train |
| Bag 74 load waits for | Hold requested |
| Validator | Confirmed hold |
| Executed assignments for Bag 47 | — |
| Final facts | Signal red · 2/6 aboard (68, 96) · 2/6 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
