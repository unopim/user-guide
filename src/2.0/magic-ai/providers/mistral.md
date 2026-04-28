# Mistral

> **Provider ID:** `mistral`
> **Hosted by:** Mistral AI (api.mistral.ai)
> **Best for:** European-hosted text generation with strong multilingual coverage — a good fit for translation into French, Spanish, German, Italian, and other European locales.

## What is Mistral?

[Mistral AI](https://mistral.ai/) is a French AI lab. Their hosted API serves the Mistral and Codestral model families. Text-only — Mistral's UnoPim integration does not generate images.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `mistral-large-latest`, `mistral-medium-latest` |
| Image Generation | ✗ | — |
| Translation | ✓ | `mistral-small-latest` |
| Agentic PIM | ✓ | `mistral-large-latest` |

## Supported models

UnoPim's Models multi-select reflects what Mistral exposes for your account. Common choices:

- **`mistral-large-latest`** — flagship tier. Best content quality and tool-use.
- **`mistral-medium-latest`** — middle tier. Good production default.
- **`mistral-small-latest`** — fast / cheap. Strong translation pick, especially for European target locales.
- **`open-mistral-7b`** / **`open-mixtral-8x7b`** — open-weights tiers. Cheaper still; suitable for bulk content where quality variance is acceptable.
- **`codestral-latest`** — code-flavoured model. Only relevant if your Custom Prompts deliberately produce code-shaped output.

## Get the credentials

1. Sign in at [https://console.mistral.ai/](https://console.mistral.ai/).
2. Open **API Keys** and **Create new key**.
3. Confirm billing on the **Workspace** settings page if you exceeded the free trial.
4. Copy the key.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Mistral`
   - **Label** = e.g. *"Mistral EU"*
   - **API Key** = paste
   - **Models** = at minimum tick `mistral-large-latest` and `mistral-small-latest`.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Mistral, Model = `mistral-large-latest`.
- **Image Generation** → **Not supported.** Route to OpenAI / Gemini / xAI.
- **Translation** → Platform = Mistral, Model = `mistral-small-latest`. Particularly strong for fr / es / de / it locales.
- **Agentic PIM** → Platform = Mistral, Model = `mistral-large-latest`. Tool-use is reliable on Large; smaller tiers can occasionally produce malformed JSON.

## Tips and limits

- **EU residency.** Mistral is hosted in the EU, which makes it easier to defend under GDPR than US-hosted providers. If residency is a deal-breaker, Mistral or [Azure OpenAI](./azure.md) (with an EU region) are the practical options.
- **No image generation.** Pair Mistral for text with another provider for images.
- **Multilingual prompts.** Mistral handles non-English source prompts well, so you can write Custom Prompts in French / German if your editorial team prefers — Mistral won't drift the way some English-trained models do.
- **Latency.** Mistral Large is slower than Mistral Small by 2-3×. Use Small for translation to keep auto-translate-on-save snappy.
