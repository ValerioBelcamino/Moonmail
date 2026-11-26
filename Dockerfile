FROM python:3.11-slim-bookworm
COPY --from=ghcr.io/astral-sh/uv:0.11.28 /uv /usr/local/bin/uv

WORKDIR /app
ENV UV_PYTHON_DOWNLOADS=never UV_LINK_MODE=copy PYTHONUNBUFFERED=1
COPY pyproject.toml uv.lock .python-version ./
RUN uv sync --locked --no-dev --no-install-project && uv cache clean

COPY moonmail ./moonmail
COPY viewer/dist ./viewer/dist
COPY viewer/public ./viewer/public
COPY docs/presentation.pdf ./docs/presentation.pdf
COPY moonmail-demo.mp4 ./
COPY --chown=10001:10001 benchmarks ./benchmarks
RUN useradd --create-home --uid 10001 station && mkdir runs && chown station:station runs
USER station
EXPOSE 8041
CMD ["/app/.venv/bin/python", "-m", "moonmail", "serve", "--host", "0.0.0.0", "--port", "8041"]
