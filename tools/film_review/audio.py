"""Place each untreated narration take at time zero, over a quiet stereo underscore."""

import argparse
import json
from pathlib import Path
import sys
import wave

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from film_score import night_post


def write_mix(shot, seconds, directory):
    with wave.open(str(Path(__file__).parent / "voice" / (shot + ".wav"))) as take:
        rate = take.getframerate()
        if (take.getnchannels(), take.getsampwidth()) != (1, 2):
            raise ValueError("Expected mono 16-bit PCM narration")
        voice = np.frombuffer(take.readframes(take.getnframes()), dtype="<i2") / 32768
    music = night_post(seconds, rate, fault_at=seconds + 1, departure_at=seconds + 1)

    def rms(buf):
        return np.sqrt(np.mean(buf**2))

    # Set the bed 30 dB below the speaking voice. Only constant gains touch the voice.
    speaking = voice[np.abs(voice) > 0.015]
    voice_gain = 0.84
    music *= voice_gain * rms(speaking) * 10 ** (-30 / 20) / rms(music)
    music[: len(voice)] += voice_gain * voice[:, None]
    if np.max(np.abs(music)) > 0.98:
        raise ValueError("The mix exceeds its headroom")
    destination = directory / (shot + "-mix.wav")
    with wave.open(str(destination), "wb") as mix:
        mix.setparams((2, 2, rate, 0, "NONE", "not compressed"))
        mix.writeframes(np.round(music * 32767).astype("<i2").tobytes())


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    args = parser.parse_args()
    cuts = json.loads(Path(__file__).with_name("cuts.json").read_text(encoding="utf-8"))
    args.directory.mkdir(parents=True, exist_ok=True)
    for name in ("opening", "dispatch", "travel"):
        take = cuts[name]
        write_mix(name, take["frames"] / cuts["fps"], args.directory)

        def timecode(seconds):
            milliseconds = round(seconds * 1000)
            hours, milliseconds = divmod(milliseconds, 3600000)
            minutes, milliseconds = divmod(milliseconds, 60000)
            seconds, milliseconds = divmod(milliseconds, 1000)
            return f"{hours:02}:{minutes:02}:{seconds:02},{milliseconds:03}"

        subtitles = [
            f"{i}\n{timecode(start)} --> {timecode(end)}\n{line}\n"
            for i, (start, end, line) in enumerate(take["captions"], 1)
        ]
        (args.directory / (name + ".srt")).write_text(
            "\n".join(subtitles), encoding="utf-8"
        )
