# OpenAI

> **Provider ID:** `openai`
> **Hosted by:** OpenAI (api.openai.com)
> **Best for:** Top-tier general quality, the only provider in UnoPim that ships first-party support for both text **and** image generation.

## What is OpenAI?

OpenAI is the original commercial LLM vendor. UnoPim talks to OpenAI's REST API directly via the unified `LaravelAiAdapter`, so anything OpenAI exposes — chat completions, image generation (DALL-E), embeddings — is available through the standard Magic AI surfaces.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation (wand on text fields) | ✓ | `gpt-4o`, `gpt-4o-mini` |
| Image Generation (wand on image / gallery) | ✓ | `dall-e-3`, `dall-e-2` |
| Translation (auto-translate on save) | ✓ | `gpt-4o-mini`, `gpt-3.5-turbo` |
| Agentic PIM (AI Agent Chat, workers) | ✓ | `gpt-4o` |

## Supported models

The Models multi-select on the Add Platform modal exposes these IDs:

**Text models** — confirmed working with UnoPim:

- `gpt-4o` — flagship multi-modal model. Best quality, reasoning, and tool-use for the AI Agent.
- `gpt-4o-mini` — cheaper / faster variant of `gpt-4o`. Sweet spot for translation and bulk content.
- `gpt-3.5-turbo` — legacy budget tier. Cheap, fast, good enough for short copy and simple translation.

**Image models** — confirmed working with UnoPim:

- `dall-e-3` — current-generation image model. Higher fidelity, better prompt adherence.
- `dall-e-2` — older, cheaper. Useful for bulk thumbnail-style generation.

::: tip
You can enable several text models on the same Platform and switch between them on the Settings page (Text Generation vs. Translation), without registering a second OpenAI Platform.
:::

## Get the credentials

1. Sign in at [https://platform.openai.com/](https://platform.openai.com/).
2. Open **Dashboard → API keys** in the left sidebar.
3. Click **Create new secret key**, give it a label (e.g. `unopim-prod`), and copy the key — it is shown **only once**.
4. Add a payment method on **Billing** if you haven't already; image generation and `gpt-4o` calls are paid by token / image.

## Configure in UnoPim

1. Go to **Magic AI → Platforms** in the admin sidebar.
2. Click **Add Platform**.
3. Fill the modal:
   - **Provider** = `OpenAI`
   - **Label** = e.g. *"OpenAI Production"*
   - **API Key** = paste the secret key
   - **Models** = tick `gpt-4o`, `gpt-4o-mini`, `dall-e-3` (and any others you want)
   - **Status** = `Enabled`
4. **Save**. The key is encrypted before it hits the database.
5. Click the **star** icon on the new row in the Platforms grid to mark this Platform as the default (optional but recommended).

## Use it with each Magic AI feature

Open **Magic AI → Settings** and route the capabilities you want OpenAI to power:

- **Text Generation** → Platform = OpenAI, Model = `gpt-4o` (quality) or `gpt-4o-mini` (speed/cost).
- **Image Generation** → Platform = OpenAI, Model = `dall-e-3`.
- **Translation** → Platform = OpenAI, Model = `gpt-4o-mini`.
- **Agentic PIM** → Platform = OpenAI, Model = `gpt-4o`.

Save the Settings page. The wand icons on product / category fields now call OpenAI; the AI Agent Chat uses `gpt-4o` for tool calls.

## Tips and limits

- **Per-organisation rate limits.** OpenAI applies tier-based RPM/TPM caps; the AI Agent's `Max Agent Steps Per Turn` may amplify usage. If you hit 429 errors, lower steps or upgrade your tier.
- **Cost split.** Translation typically dominates token usage. Pair OpenAI for content (`gpt-4o`) with a cheaper provider (Gemini Flash, DeepSeek) for translation if cost matters.
- **DALL-E 3 prompt rewriting.** OpenAI re-writes prompts internally for `dall-e-3`. The image you get back may differ from the literal prompt you typed.
- **Region.** All requests go through `api.openai.com`. If you need EU residency, use [Azure OpenAI](./azure.md) instead.
