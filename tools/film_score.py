"""Original stereo underscore for Moonmail. Times are in seconds; pitches are MIDI notes."""

import numpy as np


def night_post(seconds, rate, fault_at, departure_at):
    stereo = np.zeros((round(rate * seconds), 2), dtype=np.float32)

    def note(start, pitch, duration, level, pan=0, sustained=False):
        first = round(rate * start)
        n = min(round(rate * duration), len(stereo) - first)
        if n <= 0:
            return
        t = np.arange(n) / rate
        hz = 440 * 2 ** ((pitch - 69) / 12)
        phase = 2 * np.pi * hz * t
        if sustained:
            envelope = (1 - np.exp(-t / 0.33)) * np.exp(-t / 2.7)
            sound = np.sin(phase) + 0.15 * np.sin(phase * 2.001)
        else:
            envelope = (1 - np.exp(-t / 0.018)) * np.exp(-t / 0.90)
            sound = np.sin(phase) + 0.43 * np.sin(phase * 1.0015)
            sound += 0.32 * np.sin(phase * 2.002) * np.exp(-t / 0.35)
            sound += 0.10 * np.sin(phase * 3.007) * np.exp(-t / 0.16)
        release = np.minimum(1, (duration - t) / (0.50 if sustained else 0.20))
        signal = level * sound * envelope * release
        for channel, gain in enumerate(
            (np.sqrt((1 - pan) / 2), np.sqrt((1 + pan) / 2))
        ):
            stereo[first : first + n, channel] += signal * gain

    beat = 60 / 76
    # A six-beat phrase passes between the lower electric piano and its upper answer.
    harmony = (
        (50, 57, 62, 66),
        (47, 54, 62, 66),
        (43, 55, 59, 62),
        (45, 57, 61, 64),
        (50, 54, 57, 64),
        (47, 54, 59, 62),
        (43, 55, 62, 66),
        (45, 57, 62, 64),
    )
    for bar, start in enumerate(np.arange(0.14, seconds - 5.2, beat * 6)):
        bass, low, mid, high = harmony[bar % len(harmony)]
        quiet = 0.5 if fault_at - 0.8 < start < fault_at + 6 else 1
        note(start, bass, beat * 5.1, 0.28 * quiet, -0.15, sustained=True)
        note(start + beat * 0.5, low, 2.5, 0.25 * quiet, -0.31)
        note(start + beat * 2, mid, 2.3, 0.22 * quiet, 0.26)
        if bar % 4 != 2:
            note(start + beat * 3.5, high, 2.2, 0.20 * quiet, 0.31)
        if bar % 4 == 3:
            note(start + beat * 4.75, mid, 1.7, 0.16 * quiet, -0.12)
    for i, pitch in enumerate((62, 69, 66)):
        note(departure_at + i * beat * 0.7, pitch, 2.8, 0.25, 0.18 - 0.13 * i)
    for i, pitch in enumerate((50, 57, 62, 66)):
        note(
            seconds - 3.1 + 0.16 * i, pitch, 2.48, 0.25, (i - 1.5) / 6, sustained=i == 0
        )
    dry = stereo.copy()
    for delay, gain in ((0.077, 0.11), (0.163, 0.07), (0.297, 0.045)):
        offset = round(rate * delay)
        stereo[offset:] += gain * dry[:-offset, ::-1]
    stereo[-rate:] *= np.linspace(1, 0, rate)[:, None]
    return stereo
