# Ollama

> **Provider ID:** `ollama`
> **Hosted by:** You (self-hosted, default `http://localhost:11434`)
> **Best for:** On-prem / air-gapped deployments where product data must not leave the network.

## What is Ollama?

[Ollama](https://ollama.com/) is a self-hosted runner for open-source models. You install Ollama on a server, pull models locally, and Ollama exposes an HTTP endpoint that UnoPim calls. No API key by default — the only secret is network reachability. Text-only — Ollama in UnoPim is not used for image generation.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `llama3`, `qwen` |
| Image Generation | ✗ | — |
| Translation | ✓ | `mistral`, `llama3` |
| Agentic PIM | ✓ | `llama3`, `qwen` |

## Supported models

The Ollama integration in UnoPim is confirmed working with:

- **`llama2`** / **`llama3`** — Meta's Llama family. `llama3` is the better default; `llama2` only if your hardware is constrained.
- **`mistral`** — Mistral 7B. Lightweight, good for translation.
- **`qwen`** — Alibaba's Qwen. Strong multilingual; particularly good for non-Latin locales.
- **`deepseek-coder`** — code-flavoured model. Use only if your Custom Prompts ask for code-like output (e.g. structured JSON descriptions).
- **`phi`** — Microsoft's small / efficient model. Useful on lower-spec hardware.
- **`llava`** — vision-capable. UnoPim does not currently use Llava for generation, but it can describe uploaded images if your Custom Prompt is wired for it.

::: tip
Whatever you `ollama pull` on the host shows up here. The model dropdown lists what your Ollama server reports — there's no fixed allow-list inside UnoPim.
:::

## Get the endpoint

There's no API key. You need a running Ollama server.

1. Install Ollama on a machine that the UnoPim app server can reach.
2. Run `ollama serve` (it binds to `127.0.0.1:11434` by default).
3. Pull the models you want, e.g. `ollama pull llama3 && ollama pull mistral`.
4. Confirm the server responds: `curl http://localhost:11434/api/tags`.
5. If UnoPim runs on a different host, expose Ollama on the network interface (`OLLAMA_HOST=0.0.0.0:11434 ollama serve`) and put it behind a firewall or auth proxy.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Ollama`
   - **Label** = e.g. *"Local Ollama"*
   - **Base URL** = e.g. `http://localhost:11434` (default) or the LAN address of your Ollama box.
   - **API Key** = leave empty unless you've fronted Ollama with an auth proxy that requires one.
   - **Models** = tick the models you've pulled.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Ollama, Model = `llama3`.
- **Image Generation** → **Not supported.** Use OpenAI / Gemini / xAI.
- **Translation** → Platform = Ollama, Model = `mistral` or `llama3`.
- **Agentic PIM** → Platform = Ollama, Model = `llama3` (most reliable tool-use of the small models). For complex multi-step plans, Ollama is generally not on par with GPT-4o / Claude Sonnet — set **Max Agent Steps Per Turn** to a low value to avoid runaway loops.

## Tips and limits

- **Hardware matters.** A `llama3:8b` model needs ~6 GB of VRAM; `llama3:70b` needs ~40 GB. If the server is CPU-only, expect tens of seconds per response — fine for batch jobs, painful for the AI Agent UI.
- **No image generation.** Even though Ollama can run multi-modal models like LLaVA, UnoPim's image-generation pipeline is wired for DALL-E / Gemini / xAI image APIs only.
- **Privacy is the headline feature.** Catalogue data never leaves your infrastructure. Use Ollama when GDPR / compliance / sensitive-pricing requirements forbid third-party API calls.
- **Auth.** Ollama has no built-in authentication. If you expose it beyond `localhost`, put it behind a reverse proxy (nginx, Cloudflare Tunnel) that adds an auth header — and paste that header's secret into the Platform's `API Key` field.
