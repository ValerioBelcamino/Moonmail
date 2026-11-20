"""Four-neighbour grid paths for the depot executor."""

from heapq import heappop, heappush
from itertools import count


def distance(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])


def legal_cell(scene, cell, gates):
    x, z = cell
    if not (0 <= x < scene["width"] and 0 <= z < scene["depth"]):
        return False
    if list(cell) in scene["obstacles"]:
        return False
    if x != scene["wall"]:
        return True
    return any(list(cell) == scene["gates"][gate] for gate in gates)


def path_to(scene, start, end, occupied, gates):
    end = tuple(end)
    queue = []
    serial = count()
    prev = {start: None}
    cost = {start: 0}
    heappush(queue, (distance(start, end), next(serial), start))
    while queue:
        _, _, here = heappop(queue)
        if here == end:
            path = []
            while here != start:
                path.append(here)
                here = prev[here]
            return list(reversed(path))
        x, z = here
        for cell in ((x + 1, z), (x, z + 1), (x, z - 1), (x - 1, z)):
            if cell in occupied or not legal_cell(scene, cell, gates):
                continue
            steps = cost[here] + 1
            if steps < cost.get(cell, float("inf")):
                prev[cell], cost[cell] = here, steps
                heappush(queue, (steps + distance(cell, end), next(serial), cell))
    return None
