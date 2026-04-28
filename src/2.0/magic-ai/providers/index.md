# AI Providers

UnoPim supports **11 AI providers** under Magic AI. Each one is a separate integration with its own credentials, model catalogue, and capabilities. This section documents every provider in detail — how to obtain credentials, which models work with UnoPim, and how to wire each one into the Magic AI features (Text Generation, Image Generation, Translation, Agentic PIM / AI Agent).

## Provider matrix

A quick comparison of capabilities. **Text** = wand icons on text fields, **Image** = wand icons on image / gallery fields, **Translation** = auto-translation on save and the bulk translation command, **Agentic PIM** = AI Agent Chat and the worker pipelines.

| Provider | Text | Image | Translation | Agentic PIM | Hosted / Local |
|----------|:----:|:-----:|:-----------:|:-----------:|----------------|
| [OpenAI](./openai.md) | ✓ | ✓ | ✓ | ✓ | Hosted (OpenAI) |
| [Anthropic](./anthropic.md) | ✓ |   | ✓ | ✓ | Hosted (Anthropic) |
| [Google Gemini](./gemini.md) | ✓ | ✓ | ✓ | ✓ | Hosted (Google) |
| [Groq](./groq.md) | ✓ |   | ✓ | ✓ | Hosted (Groq) |
| [Ollama](./ollama.md) | ✓ |   | ✓ | ✓ | Local / self-hosted |
| [xAI (Grok)](./xai.md) | ✓ | ✓ | ✓ | ✓ | Hosted (xAI) |
| [Mistral](./mistral.md) | ✓ |   | ✓ | ✓ | Hosted (Mistral) |
| [DeepSeek](./deepseek.md) | ✓ |   | ✓ | ✓ | Hosted (DeepSeek) |
| [Azure OpenAI](./azure.md) | ✓ | ✓ | ✓ | ✓ | Hosted (Microsoft Azure) |
| [OpenRouter](./openrouter.md) | ✓ | ✓ | ✓ | ✓ | Hosted (proxy) |
| [Custom (OpenAI-compatible)](./custom.md) | ✓ | ✓* | ✓ | ✓ | Bring-your-own |

`✓*` for Custom = depends on whether the upstream endpoint behind your custom URL supports image generation.

## How to read each provider page

Every provider page follows the same structure:

1. **What it is** — one paragraph summary.
2. **Capabilities in UnoPim** — capability matrix specific to this provider.
3. **Supported models** — the models confirmed to work with UnoPim, grouped by capability (text, image).
4. **Get the credentials** — where to sign up and how to fetch the API key.
5. **Configure in UnoPim** — step-by-step Add Platform walkthrough.
6. **Use it with each Magic AI feature** — how to route this provider's models into Text / Image / Translation / Agentic PIM.
7. **Tips and limits** — rate limits, cost notes, gotchas.

## Choosing a provider

Three questions narrow the list quickly:

- **Need image generation?** Only **OpenAI**, **Gemini**, **xAI**, **Azure OpenAI**, and **OpenRouter** generate images. The others are text-only.
- **Data must stay on-prem?** Use **[Ollama](./ollama.md)** (local model server) or **[Custom (OpenAI-compatible)](./custom.md)** pointed at your own gateway.
- **Optimising for cost?** **[DeepSeek](./deepseek.md)**, **[Gemini Flash](./gemini.md)**, **[Groq](./groq.md)**, and **[Mistral Small](./mistral.md)** are the budget tiers. Pair them with a premium provider for content generation.

You don't have to commit to one. Register multiple Platforms and split capabilities across them in **Magic AI → Settings**.

::: tip
A common production split: **Anthropic Claude** for content (best long-form quality), **OpenAI DALL-E 3** for images, **Gemini 1.5 Flash** for translation, **OpenAI GPT-4o** for the AI Agent. Translation alone is usually 70%+ of token volume — moving it to a flash-tier model typically cuts the bill 80–95%.
:::
