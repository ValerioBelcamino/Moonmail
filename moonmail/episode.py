"""Public execution entry points for a single order or a three-order depot."""

from pathlib import Path

from .depot import Scenario
from .mail_episode import mail_steps


def episode_steps(
    scenario: Scenario, root: Path, controller="deterministic", env_file=None
):
    if controller not in {"deterministic", "azure"}:
        raise ValueError("Unknown controller")
    yield from mail_steps(scenario, root, controller, env_file)


def run_episode(
    scenario: Scenario, root: Path, controller="deterministic", env_file=None
):
    for packet in episode_steps(scenario, root, controller, env_file):
        if packet["type"] == "complete":
            return packet["episode"]
    raise RuntimeError("Episode ended before completion")
