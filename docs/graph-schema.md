# Moonmail graph schema

Moonmail stores one Relate graph per dispatch. The tables give the direction and endpoints of every relationship the simulator writes across its one-order and multi-order depots. Together the three bundled recordings contain **25 node labels and 49 relationship types**. A live run can create one additional node label, `AccessBlock`, when a route search fails. [Recorded graphs](../viewer/public/episodes/) · [Architecture and worked examples](architecture.md)

## Fleet and equipment

An embodiment describes a chassis, including its height, reach and skills. A robot can mount a carriage or a mechanic’s instrument. The load query joins the chassis and carriage at the same skill. The repair query matches an instrument to the interface the repair requires.

| From | Relationship | To |
| --- | --- | --- |
| `Robot` | `INSTANCE_OF` | `Embodiment` |
| `Embodiment` | `HAS_SKILL` | `Skill` |
| `Robot` | `MOUNTS` | `Tool`, `Instrument` |
| `Tool` | `PROVIDES` | `Skill` |
| `Tool` | `RESTORED_BY` | `Operation` |
| `Operation` | `REQUIRES` | `Skill` |
| `Operation` | `USES_PORT` | `Interface` |
| `Tool` | `USES_PORT` | `Interface` |
| `Instrument` | `FITS` | `Interface` |
| `Robot` | `SERVICES` | `Order` |

## Depot and orders

An order connects a parcel to its train and coach. The parcel’s address and the route the coach serves must match. The yard also records the shelf, passage and loading equipment for each order.

| From | Relationship | To |
| --- | --- | --- |
| `Order` | `REQUESTS` | `Parcel` |
| `Order` | `DELIVER_TO` | `Station` |
| `Order` | `ON_TRAIN` | `Train` |
| `Order` | `AT_SHELF` | `Station` |
| `Order` | `VIA` | `Passage` |
| `Order` | `LOADS_WITH` | `Tool` |
| `Parcel` | `ADDRESSED_TO` | `Route` |
| `Station` | `SERVES` | `Route` |
| `Train` | `HAS_COACH` | `Station` |
| `Interlocking` | `CONTROLS` | `Train` |
| `Robot`, `Station`, `Desk` | `IN_ZONE` | `Zone` |
| `Zone` | `EXIT` | `Passage` |
| `Passage` | `ENTERS` | `Zone` |

## Handling, custody and signing

`HELD_BY` points to the parcel’s current holder. Each handoff replaces that edge. A separate `CustodyChange` preserves the old and new holders, so the handoff is still visible after the bag reaches the coach.

| From | Relationship | To |
| --- | --- | --- |
| `Parcel` | `HELD_BY` | `Station`, `Robot`, `LoadingLift` |
| `Parcel` | `USES` | `Tray` |
| `Tray` | `HANDLED_WITH` | `Skill` |
| `Tray` | `RESTS_ON` | `Skill` |
| `LoadingLift` | `FEEDS` | `Station` |
| `LoadingLift` | `ACCEPTS` | `Tray` |
| `LoadingLift` | `DOCKS_WITH` | `Skill` |
| `Waybill` | `COVERS` | `Parcel` |
| `Waybill` | `AT_DESK` | `Desk` |
| `Desk` | `ACCEPTS` | `Skill` |
| `Action` | `TRANSFERRED` | `CustodyChange` |
| `CustodyChange` | `FROM` | `Station`, `Robot`, `LoadingLift` |
| `CustodyChange` | `TO` | `Station`, `Robot`, `LoadingLift` |

## Plans and observations

The service records each draft and its verdict as a `ProposalAttempt`. An accepted `PlanRevision` includes executable actions. An action points to its prerequisites. The expected value on its `REQUIRES` edge can be checked against the current value on the `WorldFact`.

| From | Relationship | To |
| --- | --- | --- |
| `ProposalAttempt` | `CONSIDERED_FOR` | `PlanRevision` |
| `PlanRevision` | `INCLUDES` | `Action` |
| `PlanRevision` | `REVISES` | `PlanRevision` |
| `PlanRevision` | `RESPONDS_TO` | `Event` |
| `Action` | `ASSIGNED_TO` | `Robot`, `Interlocking` |
| `Action` | `FOR_ORDER` | `Order` |
| `Action` | `DEPENDS_ON` | `Action` |
| `Action` | `REQUIRES` | `WorldFact` |
| `Action` | `ESTABLISHES` | `WorldFact` |
| `Event` | `AT_REVISION` | `PlanRevision` |
| `Event` | `CONCERNS` | `Parcel` |
| `Event` | `STARTS` | `Action` |
| `Event` | `COMPLETES` | `Action` |
| `Event` | `VIOLATES` | `WorldFact` |
| `Event` | `INVALIDATES` | `Action` |
| `Event` | `BLOCKS` | `Action` |

`AccessBlock` is a standalone node. Its properties record the operation, actor, reason and station configuration for a failed route search. A matching block removes that actor from the candidates for the operation while the same configuration holds. [One-order executor](../moonmail/mail_episode.py) · [Yard executor](../moonmail/yard.py)

## Inspect a run

In the station, open **Query graph → Write Cypher on the completed run**. This query returns the distinct endpoint labels and relationship types present in that file. Different layouts instantiate different parts of the schema. A completed delivery has its final `HELD_BY` edge and the full chain of custody changes. [Open the station](http://127.0.0.1:8041/?guide=1)

```cypher
MATCH (source)-[r]->(target)
RETURN DISTINCT labels(source) AS source_labels,
       type(r) AS relationship, labels(target) AS target_labels
ORDER BY relationship
```
