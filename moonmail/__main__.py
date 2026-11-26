"""Launch the station or execute a new dispatch from the command line."""

import argparse
import sys
from pathlib import Path

from pydantic import ValidationError

from .depot import Scenario, YardFleet
from .episode import run_episode


def main():
    parser = argparse.ArgumentParser(
        prog="moonmail", description="Open the Moonmail station or run a dispatch."
    )
    commands = parser.add_subparsers(dest="command")
    serve = commands.add_parser(
        "serve", help="Serve the interactive depot and competition film"
    )
    serve.add_argument("--host", default="127.0.0.1")
    serve.add_argument("--port", type=int, default=8041)
    run = commands.add_parser("run", help="Write a new episode.rl and motion trace")
    run.add_argument("--mission", choices=["mail", "yard"])
    run.add_argument(
        "--fleet",
        nargs=5,
        type=int,
        metavar=("ORDERS", "PICKERS", "COURIERS", "FORKLIFTS", "MECHANICS"),
        help="Build a custom yard roster with these counts",
    )
    run.add_argument("--seed", type=int, default=7)
    run.add_argument(
        "--service-kit", choices=["off", "driver", "probe"], default="driver"
    )
    faults = run.add_mutually_exclusive_group()
    faults.add_argument(
        "--fault",
        "--mail-fault",
        choices=["none", "forks", "hatch", "address"],
        default="forks",
    )
    faults.add_argument(
        "--fork-fault",
        dest="fault",
        action="store_const",
        const="forks",
        help=argparse.SUPPRESS,
    )
    run.add_argument("--height", type=int, help="Parcel height in centimetres")
    run.add_argument(
        "--case",
        choices=["open", "jam", "oversize"],
        default="jam",
        help="Initial shutter and parcel setup",
    )
    run.add_argument("--output", type=Path, default=Path("runs"))
    run.add_argument(
        "--controller", choices=["deterministic", "azure"], default="deterministic"
    )
    run.add_argument("--env-file", type=Path, help="Private model endpoint settings")
    argv = sys.argv[1:]
    if not argv:
        argv = ["serve"]
    elif argv[0].startswith("--") and argv[0] != "--help":
        argv = ["run", *argv]
    args = parser.parse_args(argv)
    if args.command == "serve":
        import uvicorn

        host = {"0.0.0.0": "127.0.0.1", "::": "::1"}.get(args.host, args.host)
        url_host = f"[{host}]" if ":" in host else host
        print(f"Open Moonmail at http://{url_host}:{args.port}/", flush=True)
        uvicorn.run("moonmail.server:app", host=args.host, port=args.port)
        return
    fleet = None
    if args.fleet:
        if args.mission == "mail":
            parser.error("--fleet uses the yard mission")
        try:
            fleet = YardFleet(
                **dict(
                    zip(
                        ("orders", "pickers", "couriers", "forklifts", "mechanics"),
                        args.fleet,
                    )
                )
            )
        except ValidationError as exc:
            parser.error(str(exc))
    scenario = Scenario(
        mission=args.mission or ("yard" if fleet else "mail"),
        fleet=fleet,
        seed=args.seed,
        service_kit=args.service_kit,
        mail_fault=None if args.fault == "none" else args.fault,
        jam=args.case != "open",
        parcel_cm=args.height
        if args.height is not None
        else (26 if args.case == "oversize" else 18),
    )
    episode = run_episode(scenario, args.output, args.controller, args.env_file)
    print(episode["outcome"], args.output / episode["id"] / "episode.rl")


if __name__ == "__main__":
    main()
