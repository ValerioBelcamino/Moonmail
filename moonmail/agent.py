"""Responses transport for the language-model orchestrator."""

import hashlib
import json
import os
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

from dotenv import dotenv_values


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


def azure_transport(env_file):
    values = {
        **(dotenv_values(env_file, interpolate=False) if env_file else {}),
        **os.environ,
    }

    def setting(key):
        return values.get("MOONMAIL_AZURE_" + key) or values.get("CUT_LLM_" + key, "")

    base, key, model = (
        setting("ENDPOINT").rstrip("/"),
        setting("API_KEY"),
        setting("MODEL"),
    )
    parsed = urlsplit(base)
    if (
        parsed.scheme != "https"
        or not parsed.hostname
        or parsed.query
        or not key
        or not model
    ):
        raise ValueError(
            "Configure the Azure endpoint, API key and deployment for live dispatch"
        )
    if not base.endswith("/openai/v1"):
        base += "/openai/v1"

    options = {
        "tool_choice": "required",
        "parallel_tool_calls": False,
        "store": False,
        "max_output_tokens": 4096,
        "reasoning": {"effort": setting("REASONING_EFFORT") or "low"},
    }

    def respond(messages, toolset):
        payload = {
            "model": model,
            "input": messages,
            "tools": toolset,
            **options,
        }
        request = Request(
            base + "/responses",
            data=json.dumps(payload).encode(),
            headers={"Content-Type": "application/json", "api-key": key},
        )
        try:
            with build_opener(NoRedirect()).open(request, timeout=75) as reply:
                data = json.load(reply)
        except HTTPError as exc:
            raise RuntimeError(f"Azure returned HTTP {exc.code}") from None
        except (URLError, OSError):
            raise RuntimeError("Azure connection failed") from None
        expected = setting("EXPECTED_RESPONSE_MODEL")
        actual = data.get("model", "")
        if expected and actual != expected and not actual.startswith(expected + "-"):
            raise RuntimeError(
                "Azure response model differs from configured deployment family"
            )
        return data

    respond.options = options
    # Match the deployment and request settings when resuming a paid experiment.
    # The public suite stores only the digest, never a credential or endpoint.
    respond.config_digest = hashlib.sha256(
        json.dumps(
            [base, model, setting("EXPECTED_RESPONSE_MODEL"), options], sort_keys=True
        ).encode()
    ).hexdigest()
    return respond
