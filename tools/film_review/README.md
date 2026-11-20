# Rebuilding the competition film

The film follows one delivery through a fork failure, a repair and departure. Its final shot follows the same coach into a three-order depot. The graph facts and robot movements come from the two recorded executions. The 119.4-second master fits the competition’s two-minute limit. [Official rules, section 4](https://relate.devpost.com/rules)

## Prepare the set

Run these commands from the repository root. Use Python 3.11, the project’s Node environment, Blender 5.1 and FFmpeg with libx264. Start Moonmail with `uv run --locked -m moonmail` in a separate shell. Its API reads the recording from Relate. The Vite server below supplies the articulated meshes during export.

```bash
npm --prefix viewer ci
npm --prefix viewer run dev -- --host 127.0.0.1 --port 5187 --strictPort
```

In a second shell, choose a working directory accessible to Blender.

```bash
study_dir="$(mktemp -d)"
uv run --locked -m tools.film_review.evidence "$study_dir/evidence.json"
uvx --from playwright playwright install chromium
uvx --from playwright python tools/film_review/export_scene.py "$study_dir/assets"
uv run --no-project --with numpy python tools/film_review/audio.py "$study_dir"
```

The evidence reader opens the Relate databases read-only. It follows both chassis to Scan and tests Jack’s chassis and carriage together for lifting. It also reads the recorded fault, the repair dependency, the signature shared between revisions and each custody change. The finale draws the larger depot’s final plan from the `delivered` event. The first `assignment` event’s `STARTS` edges identify five actions in that plan. Each action and its robot light up together at the recorded tick. The motion export samples the original viewer’s articulated rigs at 24 positions per simulation tick. [Source queries](evidence.py) · [Motion export](export_scene.py)

## Render and assemble

```bash
for shot in opening dispatch travel; do
  blender -b --factory-startup --python-exit-code 1 --python tools/film_review/studio.py -- "$study_dir" "$shot"
  uv run --no-project --with skia-python --with numpy python tools/film_review/titles.py "$shot" "$study_dir" "$study_dir" "$study_dir/$shot.mp4"
done
uv run --no-project --with numpy --with skia-python python tools/film_review/master.py "$study_dir" moonmail-demo.mp4
cp "$study_dir/film.en.srt" docs/moonmail.en.srt
ffmpeg -v error -y -i "$study_dir/film.en.srt" viewer/public/review/film.en.vtt
npm --prefix viewer run build
```

For a still, append a comma-separated list of frame numbers to the Blender command and pass the same numbers to the compositor using `--proof`. Use a fresh working directory after changing the set or camera. Within a render, existing plates can be reused to resume an interrupted job.

The first 35 seconds introduce the goal, the map and the two robot bodies. The next lines distinguish a required assignment from a choice the model is free to make. During the delivery, a smooth mapping from film seconds to recorded ticks drives the 3D actors, custody link, fault and repair. The camera follows its own continuous path through the depot. The fork collar supplies the screen position for the drawn sparks, smoke and tool callouts. The coach, parcel and station crew continue from the last delivery pose into the fleet reveal. [Camera and physical anchors](studio.py) · [Graph animation](titles.py)

The narrator uses native-rate, dry PCM takes. Pauses give the camera time to reach each action. A single quiet stereo score runs across the three shots. After the final graph, the last depot frame dissolves into a silent Moonmail / Built with Relate title card. The MP4 includes twelve chapters and forty English subtitle cues. The local player uses the same captions in WebVTT format. The master verifies the native 60 fps inputs, exported frame count, duration and competition limit. [Edit and caption timing](cuts.json) · [Master assembly](master.py) · [Original score](../film_score.py)
