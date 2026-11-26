"""Public execution entry points for the small station and the multi-bay yard."""

from pathlib import Path

from .depot import Scenario
from .mail_episode import mail_steps


def episode_steps(
    scenario: Scenario,
    root: Path,
    controller="deterministic",
    env_file=None,
    *,
    live_inspection=False,
):
    if controller not in {"deterministic", "azure"}:
        raise ValueError("Unknown controller")
    yield from mail_steps(
        scenario, root, controller, env_file, live_inspection=live_inspection
    )


def run_episode(
    scenario: Scenario, root: Path, controller="deterministic", env_file=None
):
    for packet in episode_steps(scenario, root, controller, env_file):
        if packet["type"] == "complete":
            return packet["episode"]
    raise RuntimeError("Episode ended before completion")
