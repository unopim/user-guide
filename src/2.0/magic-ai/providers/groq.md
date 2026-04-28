# Groq

> **Provider ID:** `groq`
> **Hosted by:** Groq (api.groq.com)
> **Best for:** Latency-sensitive use cases. Groq's custom LPU hardware serves open-source models at sub-second response times.

## What is Groq?

**Groq** runs popular open-source models (Llama, Qwen, DeepSeek, Kimi, GPT-OSS) on its own LPU-based inference hardware. Same models as Ollama / OpenRouter, but with extreme throughput. Useful when the AI Agent loops through many tool calls and you want the user-facing latency to feel instant. Text-only — no image generation.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `llama-3.1-8b-instant`, `qwen/qwen3-32b` |
| Image Generation | ✗ | — |
| Translation | ✓ | `llama-3.1-8b-instant` |
| Agentic PIM | ✓ | `groq/compound`, `qwen/qwen3-32b` |

## Supported models

UnoPim's Groq integration exposes these model IDs in the Models multi-select:

- **`deepseek-r1-distill-llama-70b`** — DeepSeek's R1 reasoning distilled into a Llama-70B. Strong on multi-step reasoning, good Agent default.
- **`llama-3.1-8b-instant`** — small, very fast. Translation and short content.
- **`openai/gpt-oss-120b`** — OpenAI's open-weights GPT-OSS, 120B parameters. Heavy but high quality.
- **`openai/gpt-oss-20b`** — smaller GPT-OSS variant. Good balance.
- **`groq/compound`** — Groq's compound model (mix-of-experts style). Strong general default.
- **`qwen/qwen3-32b`** — Alibaba's Qwen 3, 32B. Solid multilingual coverage; useful for translation.
- **`moonshotai/kimi-k2-instruct-0905`** — Kimi K2. Good reasoning, large context.

## Get the credentials

1. Sign in at [https://console.groq.com/](https://console.groq.com/).
2. Open **API Keys** in the sidebar.
3. Click **Create API Key**, label it, and copy.
4. Free tier ships generous RPM, so you can evaluate without entering billing.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Groq`
   - **Label** = e.g. *"Groq Fast"*
   - **API Key** = paste
   - **Models** = tick `llama-3.1-8b-instant` and `groq/compound` to start; add others as needed.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Groq, Model = `groq/compound`. Use when you want responses to *feel* instant in the admin UI.
- **Image Generation** → **Not supported.** Route to a different Platform.
- **Translation** → Platform = Groq, Model = `llama-3.1-8b-instant`. Probably the cheapest fast translation option in this list.
- **Agentic PIM** → Platform = Groq, Model = `qwen/qwen3-32b` or `groq/compound`. Tool-use quality is good but not at GPT-4o / Claude Sonnet level — keep complex multi-step plans on a premium provider.

## Tips and limits

- **No image generation.** Pair with OpenAI / Gemini for images.
- **Token-per-second focus.** Groq's value is latency, not raw quality. For accuracy-critical content (legal copy, regulated industries), still use a frontier model.
- **Per-key TPM cap.** The free tier caps tokens per minute aggressively. Production workloads should move to a paid plan.
- **Open-source model behaviour.** Some open-source models occasionally produce inconsistent JSON for tool calls. If the AI Agent flakes, switch the Agent's model to `qwen/qwen3-32b` or `groq/compound` — they handle structured output more reliably.
