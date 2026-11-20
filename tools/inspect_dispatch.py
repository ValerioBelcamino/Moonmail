"""Read the dispatch decisions from the three bundled Relate databases."""

import json
from pathlib import Path

import relate

EPISODES = Path(__file__).resolve().parents[1] / "viewer" / "public" / "episodes"

INSTRUMENT = """MATCH (:Robot {id:'Patch'})-[:MOUNTS]->(i:Instrument)-[:FITS]->(f:Interface)
RETURN i.id AS instrument, f.id AS port"""

ATTEMPTS = """MATCH (p:ProposalAttempt {revision:2})
RETURN p.outcome AS outcome, p.feedback AS feedback, p.proposal AS proposal
ORDER BY outcome DESC"""

IMPACT = """MATCH (:Event {kind:'fork fault'})-[r]->(a:Action)
WHERE type(r)='INVALIDATES' OR type(r)='BLOCKS'
RETURN type(r) AS effect, a.uid AS action ORDER BY effect"""

SHARED = """MATCH (v:PlanRevision {rev:2})-[:REVISES]->(old)
MATCH (old)-[:INCLUDES]->(a:Action)<-[:INCLUDES]-(v)
RETURN count(a) AS kept"""

JOIN = """MATCH (:PlanRevision {rev:2})-[:INCLUDES]->(d:Action {op:'depart'})
MATCH (d)-[:DEPENDS_ON]->(p:Action)-[:FOR_ORDER]->(o:Order)
RETURN o.id AS bag, p.op AS prerequisite ORDER BY bag, prerequisite"""


def main():
    for name in ("post", "post-probe", "yard"):
        print(f"\n{name}.rl")
        with relate.connect(str(EPISODES / f"{name}.rl"), read_only=True) as db:
            tool = db.execute(INSTRUMENT).fetchall()[0]
            print(f"  Patch mounts {tool['instrument']} which fits {tool['port']}.")
            for row in db.execute(IMPACT).fetchall():
                print(f"  Fork observation {row['effect']} {row['action']}")
            for attempt in db.execute(ATTEMPTS).fetchall():
                ops = [s["op"] for s in json.loads(attempt["proposal"])["steps"]]
                result = attempt["outcome"]
                print(f"  {result.capitalize()} proposal  {', '.join(ops)}")
                if attempt["feedback"]:
                    print(f"    {attempt['feedback']}")
            print(f"  Shared action nodes  {db.execute(SHARED).fetchall()[0]['kept']}")
            if name == "yard":
                prereqs = db.execute(JOIN).fetchall()
                print(
                    "  Departure depends on  "
                    + ", ".join(r["prerequisite"] for r in prereqs)
                )


if __name__ == "__main__":
    main()
