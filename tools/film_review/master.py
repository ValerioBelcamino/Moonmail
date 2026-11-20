"""Edit the narrated competition film at 4K60, keeping the voice takes at their recorded speed."""

import argparse
import hashlib
import json
from pathlib import Path
import subprocess
from tempfile import TemporaryDirectory
import textwrap
import wave

import numpy as np

from audio import night_post
from titles import end_card

HERE = Path(__file__).resolve().parent
FPS, RATE = 60, 48000


def run(*args):
    subprocess.run(
        ["ffmpeg", "-nostdin", "-hide_banner", "-loglevel", "error", "-y", *args],
        check=True,
    )


def probe(path):
    return json.loads(
        subprocess.check_output(
            [
                "ffprobe",
                "-v",
                "error",
                "-show_streams",
                "-show_chapters",
                "-show_format",
                "-of",
                "json",
                path,
            ]
        )
    )


def video_part(work, key, source, frames):
    # All camera and graph animations are sampled on the same 60 Hz edit clock.
    with source.open("rb") as stream:
        fingerprint = hashlib.file_digest(stream, "sha256").hexdigest()
    source_stream = probe(source)["streams"][0]
    if (
        int(source_stream["nb_frames"]) != frames
        or source_stream["avg_frame_rate"] != "60/1"
    ):
        raise ValueError(f"Render the current {key} shot before assembling the master.")
    vf = "scale=3840:2160:flags=lanczos,setsar=1,format=yuv420p"
    encoding = [
        "-c:v",
        "libx264",
        "-crf",
        "20" if key == "dispatch" else "17",
        "-preset",
        "veryfast",
        "-threads",
        "4",
        "-profile:v",
        "high",
        "-level:v",
        "5.2",
        "-color_primaries",
        "bt709",
        "-color_trc",
        "bt709",
        "-colorspace",
        "bt709",
        "-video_track_timescale",
        "60000",
    ]
    signature = hashlib.sha256(
        (fingerprint + vf + repr(encoding)).encode()
    ).hexdigest()[:14]
    target = work / f"picture-{key}-{signature}.mp4"
    if target.exists():
        return target
    with TemporaryDirectory(dir=work) as staging:
        staged = Path(staging) / "part.mp4"
        run(
            "-filter_threads",
            "3",
            "-threads",
            "3",
            "-i",
            source,
            "-map",
            "0:v:0",
            "-an",
            "-sn",
            "-dn",
            "-map_metadata",
            "-1",
            "-map_chapters",
            "-1",
            "-vf",
            vf,
            "-frames:v",
            str(frames),
            *encoding,
            staged,
        )
        video = probe(staged)["streams"][0]
        if int(video["nb_frames"]) != frames or video["avg_frame_rate"] != "60/1":
            raise ValueError(f"Incomplete picture for {key}")
        staged.replace(target)
    return target


def timecode(t):
    ms = round(t * 1000)
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02},{ms:03}"


def outro_picture(work, fleet_frames, card_frames):
    with TemporaryDirectory(dir=work) as folder:
        last = Path(folder) / "last.png"
        card = Path(folder) / "card.png"
        part = Path(folder) / "outro.mp4"
        run(
            "-ss",
            str((fleet_frames - 1.25) / FPS),
            "-i",
            work / "travel.mp4",
            "-frames:v",
            "1",
            "-threads",
            "1",
            last,
        )
        end_card(card)
        run(
            "-filter_complex_threads",
            "2",
            "-loop",
            "1",
            "-framerate",
            str(FPS),
            "-i",
            last,
            "-loop",
            "1",
            "-framerate",
            str(FPS),
            "-i",
            card,
            "-filter_complex",
            "[0:v][1:v]xfade=transition=fade:duration=0.28:offset=0,"
            "fade=t=out:st=0.82:d=0.16:color=0x0a1b22,format=yuv420p",
            "-an",
            "-frames:v",
            str(card_frames),
            "-c:v",
            "libx264",
            "-threads",
            "3",
            "-crf",
            "14",
            part,
        )
        return video_part(work, "outro", part, card_frames)


def voice_cut(path, start, duration):
    pcm = subprocess.check_output(
        [
            "ffmpeg",
            "-nostdin",
            "-v",
            "error",
            "-i",
            path,
            "-ss",
            f"{start:.9f}",
            "-t",
            f"{duration:.9f}",
            "-map",
            "0:a:0",
            "-vn",
            "-sn",
            "-ac",
            "1",
            "-ar",
            str(RATE),
            "-f",
            "f32le",
            "pipe:1",
        ]
    )
    return np.frombuffer(pcm, dtype="<f4")


def build(work, output):
    cuts = json.loads((HERE / "cuts.json").read_text())
    work.mkdir(parents=True, exist_ok=True)
    names = ("opening", "dispatch", "travel")
    starts = {}
    at = 0
    for name in names:
        starts[name] = at / FPS
        at += cuts[name]["frames"]
    story_duration = at / FPS
    outro_frames = cuts["master"]["outro_frames"]
    at += outro_frames
    if at > 120 * FPS:
        raise ValueError(
            f"The film exceeds the two-minute limit at {at / FPS} seconds."
        )
    total = at / FPS
    pictures = [
        video_part(work, name, work / (name + ".mp4"), cuts[name]["frames"])
        for name in names
    ]
    pictures.append(outro_picture(work, cuts["travel"]["frames"], outro_frames))
    (work / "film.ffconcat").write_text(
        "ffconcat version 1.0\n" + "".join(f"file '{p.name}'\n" for p in pictures)
    )
    chapters = cuts["master"]["chapters"]
    metadata = [";FFMETADATA1", "title=Moonmail · Which robot can do each job?"]
    for (t, title), (end, _) in zip(chapters, chapters[1:] + [(total, "")]):
        metadata.extend(
            [
                "[CHAPTER]",
                "TIMEBASE=1/60",
                f"START={round(t * FPS)}",
                f"END={round(end * FPS)}",
                "title=" + title,
            ]
        )
    (work / "film.ffmeta").write_text("\n".join(metadata) + "\n")
    voice = np.zeros(round(story_duration * RATE), dtype=np.float32)
    subtitles = []
    for key in names:
        duration = cuts[key]["frames"] / FPS
        offset = starts[key]
        samples = voice_cut(HERE / "voice" / (key + ".wav"), 0, duration)
        active = samples[np.abs(samples) > 0.015]
        gain = 0.125 / np.sqrt(np.mean(active**2))
        i = round(offset * RATE)
        voice[i : i + len(samples)] = samples * gain
        subtitles.extend(
            (offset + lo, offset + hi, line) for lo, hi, line in cuts[key]["captions"]
        )
    score = night_post(
        story_duration, RATE, starts["dispatch"] + 20.27, starts["dispatch"] + 57.81
    )
    score *= 0.125 * 10 ** (-30 / 20) / np.sqrt(np.mean(score**2))
    mix = voice[:, None] + score
    mix *= min(1.0, 0.92 / np.max(np.abs(mix)))
    with wave.open(str(work / "film.wav"), "wb") as writer:
        writer.setparams((2, 2, RATE, 0, "NONE", "not compressed"))
        writer.writeframes(np.round(mix * 32767).astype("<i2").tobytes())
        writer.writeframes(bytes(round(outro_frames / FPS * RATE) * 4))
    srt = work / "film.en.srt"
    with srt.open("w", encoding="utf-8") as sub:
        for n, (start, end, line) in enumerate(subtitles, 1):
            caption = "\n".join(textwrap.fill(part, 48) for part in line.splitlines())
            sub.write(f"{n}\n{timecode(start)} --> {timecode(end)}\n{caption}\n\n")
    output.parent.mkdir(parents=True, exist_ok=True)
    with TemporaryDirectory(dir=output.parent) as staging:
        staged = Path(staging) / "film.mp4"
        run(
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            work / "film.ffconcat",
            "-i",
            work / "film.wav",
            "-i",
            srt,
            "-f",
            "ffmetadata",
            "-i",
            work / "film.ffmeta",
            "-map",
            "0:v",
            "-map",
            "1:a",
            "-map",
            "2:s",
            "-map_metadata",
            "3",
            "-map_chapters",
            "3",
            "-c:v",
            "copy",
            "-c:a",
            "aac",
            "-b:a",
            "256k",
            "-c:s",
            "mov_text",
            "-metadata:s:s:0",
            "language=eng",
            "-metadata:s:a:0",
            "language=eng",
            "-disposition:s:0",
            "0",
            "-movflags",
            "+faststart",
            staged,
        )
        result = probe(staged)
        if (
            abs(float(result["format"]["duration"]) - total) > 0.005
            or int(result["streams"][0]["nb_frames"]) != at
        ):
            raise ValueError("The delivered movie does not match the edit.")
        staged.replace(output)
    print(
        f"{total:.3f} s, {at} frames, {len(chapters)} chapters, {len(subtitles)} captions",
        flush=True,
    )


if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("work", type=Path)
    p.add_argument("output", type=Path)
    args = p.parse_args()
    build(args.work, args.output)
