# /// script
# requires-python = ">=3.11"
# dependencies = ["playwright>=1.55,<2", "pillow>=10,<13"]
# ///
"""Export the editable architecture deck and its five-panel README preview."""

import argparse
import io
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--browser", help="Optional path to an installed Chromium executable"
    )
    args = parser.parse_args()
    docs = Path(__file__).resolve().parents[1] / "docs"
    source = (docs / "presentation.html").as_uri()
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(executable_path=args.browser)
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        page.goto(source)
        page.evaluate("document.fonts.ready")
        page.pdf(
            path=str(docs / "presentation.pdf"),
            print_background=True,
            prefer_css_page_size=True,
        )
        frames = []
        for phase in range(5):
            page.goto(f"{source}?preview={phase}")
            page.evaluate("document.fonts.ready")
            raw = page.locator("#preview").screenshot()
            frames.append(Image.open(io.BytesIO(raw)).convert("RGB"))
        browser.close()
    frames[0].save(
        docs / "station-tour.webp",
        save_all=True,
        append_images=frames[1:],
        duration=[6500, 5500, 5500, 6500, 6500],
        loop=0,
        lossless=True,
        method=6,
    )


if __name__ == "__main__":
    main()
