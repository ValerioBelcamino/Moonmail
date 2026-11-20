"""Embodiment, handling and instrument queries for dispatch."""

LIFTS = """MATCH (r:Robot)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s:Skill)
      <-[:DOCKS_WITH]-(l:LoadingLift)-[:FEEDS]->(d:Station)
      <-[:DELIVER_TO]-(o:Order)-[:REQUESTS]->(p:Parcel)-[:USES]->(tray:Tray),
      (l)-[:ACCEPTS]->(tray)
RETURN r.id AS robot, b.id AS body, s.id AS skill, l.id AS lift,
       d.id AS station, o.id AS mission, l.x AS x, l.z AS z, l.cycle AS cycle
ORDER BY lift, robot"""

REPAIRS = """MATCH (patient:Robot)-[:MOUNTS]->(t:Tool {online:false})-[:RESTORED_BY]->(op),
      (op)-[:REQUIRES]->(skill:Skill)<-[:HAS_SKILL]-(b:Embodiment)<-[:INSTANCE_OF]-(r:Robot),
      (r)-[:MOUNTS]->(i:Instrument {online:true})-[:FITS]->(port:Interface)<-[:USES_PORT]-(op),
      (t)-[:PROVIDES]->(handling:Skill)<-[:HANDLED_WITH]-(:Tray)<-[:USES]-(:Parcel),
      (patient)-[:INSTANCE_OF]->(:Embodiment)-[:HAS_SKILL]->(handling)
WHERE r.id <> patient.id AND b.reach >= t.port_cm
RETURN r.id AS actor, b.id AS body, skill.id AS skill, i.id AS instrument,
       port.id AS port, op.id AS operation, op.ticks AS ticks, t.id AS target,
       patient.id AS patient, handling.id AS restored
ORDER BY actor, target, instrument"""

SERVICE_INTERFACES = """MATCH (r:Robot)-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)<-[:REQUIRES]-(op)
      <-[:RESTORED_BY]-(t:Tool {online:false}), (op)-[:USES_PORT]->(need),
      (r)-[:MOUNTS]->(i:Instrument {online:true})-[:FITS]->(fits)
RETURN r.id AS robot,i.id AS instrument,fits.id AS fits,need.id AS needs"""

HANDLING = """MATCH (r:Robot {id:$actor})-[:INSTANCE_OF]->(b)-[:HAS_SKILL]->(s)
      <-[:HANDLED_WITH]-(tray:Tray)<-[:USES]-(p:Parcel), (station:Station {id:$station})
WHERE b.reach >= station.cm
RETURN r.id AS robot,b.id AS body,s.id AS skill,tray.id AS tray,p.id AS parcel,
       b.reach AS reach,station.cm AS height,station.id AS station"""
