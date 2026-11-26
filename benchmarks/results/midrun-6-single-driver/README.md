# 6 orders · carriage for Bag 47 alone · hex driver

Deliver Bag 47, Bag 52, Bag 68, Bag 74, Bag 81, Bag 96 to the addressed coaches and sign every waybill before releasing one train.

6 orders · 15 robots · 4 body types in use · 49 eligible action–actor pairs.

The expected outcome is a plan reaching the goal.

Both planners inherit the same verified plan. Bag 47 has already crossed. Jack’s carriage goes offline before loading. Patch carries a hex driver. The station hoist connects to Bag 47’s coach.

## The checkpoint

| Bag | Cargo | Waybill | Assigned forklift | Carriage |
| --- | --- | --- | --- | --- |
| 47 | platform | unsigned | Jack | offline |
| 52 | staged | signed | Fern | online |
| 68 | aboard | unsigned | Fern | online |
| 74 | platform | unsigned | Fern | online |
| 81 | staged | signed | Fern | online |
| 96 | aboard | unsigned | Fern | online |

The fault invalidates `47/load` and blocks the shared departure. 9 pending actions keep their assignments and surviving dependencies.

## The paired decisions

Each row compares independent model calls on the same saved world. Drafts summarize the requested operations. The raw traces include every dependency, nomination, validator reply and executed action.

### Trial 1

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, repair carriage, 4 × load coach, 2 × cross hatch, release train | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | Ready now | Ready now |
| Validator | Rejected. 52/cross supplies no precondition of depart. Keep the branches independent. | Accepted |
| Draft 2 | 4 × sign, repair carriage, 4 × load coach, 2 × cross hatch, release train | — |
| Bag 74 load waits for | Ready now | — |
| Validator | Accepted | — |
| Executed assignments for Bag 47 | Patch · sign, Patch · repair carriage | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 9,743 | 10,331 |
| Model time / validator time | 13.55 s / 13 ms | 9.98 s / 8 ms |
| Evidence | [Raw trace](relate-1.json) · [Final Relate file, gzip](relate-1.rl.gz) | [Raw trace](flat-1.json) · [Final Relate file, gzip](flat-1.rl.gz) |

### Trial 2

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | Ready now | cross hatch (Bag 74) |
| Validator | Accepted | Rejected. 47/load names a predecessor outside this proposal. |
| Draft 2 | — | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | — | Ready now |
| Validator | — | Accepted |
| Executed assignments for Bag 47 | Patch · repair carriage, Patch · sign | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 4,900 | 20,618 |
| Model time / validator time | 10.76 s / 18 ms | 13.70 s / 8 ms |
| Evidence | [Raw trace](relate-2.json) · [Final Relate file, gzip](relate-2.rl.gz) | [Raw trace](flat-2.json) · [Final Relate file, gzip](flat-2.rl.gz) |

### Trial 3

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, repair carriage, 4 × load coach, 2 × cross hatch, release train | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | Ready now | cross hatch (Bag 74) |
| Validator | Rejected. 47/load names a predecessor outside this proposal. | Rejected. 47/load names a predecessor outside this proposal. |
| Draft 2 | 4 × sign, repair carriage, 4 × load coach, 2 × cross hatch, release train | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | Ready now | Ready now |
| Validator | Accepted | Accepted |
| Executed assignments for Bag 47 | Patch · sign, Patch · repair carriage | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 9,839 | 20,626 |
| Model time / validator time | 15.35 s / 8 ms | 13.42 s / 8 ms |
| Evidence | [Raw trace](relate-3.json) · [Final Relate file, gzip](relate-3.rl.gz) | [Raw trace](flat-3.json) · [Final Relate file, gzip](flat-3.rl.gz) |

### Trial 4

| Decision | Moonmail with Relate | Full-state baseline |
| --- | --- | --- |
| Draft 1 | 4 × sign, repair carriage, 4 × load coach, 3 × cross hatch, release train | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | cross hatch (Bag 74) | Ready now |
| Validator | Rejected. 47/load names a predecessor outside this proposal. | Accepted |
| Draft 2 | 4 × sign, repair carriage, 4 × load coach, 3 × cross hatch, release train | — |
| Bag 74 load waits for | cross hatch (Bag 74) | — |
| Validator | Rejected. Preserve the existing predecessors of 74/load. | — |
| Draft 3 | 4 × sign, repair carriage, 4 × load coach, 2 × cross hatch, release train | — |
| Bag 74 load waits for | Ready now | — |
| Validator | Accepted | — |
| Executed assignments for Bag 47 | Patch · sign, Patch · repair carriage | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 6/6 aboard · 6/6 signed | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes | Yes |
| Total tokens | 15,113 | 10,306 |
| Model time / validator time | 18.47 s / 13 ms | 14.37 s / 17 ms |
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
| 52 | staged | signed | Fern | True |
| 68 | aboard | unsigned | Fern | True |
| 74 | platform | unsigned | Fern | True |
| 81 | staged | signed | Fern | True |
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
| Patch | Hex driver | Hex collar | Hex collar | Fern forks | Fern |
| Patch | Hex driver | Hex collar | Hex collar | Jack forks | Jack |

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
| Draft 1 | repair carriage, 4 × load coach, 4 × sign, 2 × cross hatch, release train |
| Bag 74 load waits for | Ready now |
| Validator | Accepted |
| Executed assignments for Bag 47 | Patch · repair carriage, Patch · sign |
| Final facts | Signal green · 6/6 aboard · 6/6 signed |
| Expected outcome reached | Yes |
| Evidence | [Raw trace](local-1.json) · [Final Relate file, gzip](local-1.rl.gz) |

[All cases](../README.md)
