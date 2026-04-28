# Anthropic (Claude)

> **Provider ID:** `anthropic`
> **Hosted by:** Anthropic (api.anthropic.com)
> **Best for:** Long-form, careful prose. Best-in-class for the AI Agent because of strong tool-use and reasoning.

## What is Anthropic?

Anthropic builds the **Claude** family of LLMs. UnoPim integrates Claude via the unified adapter so the wand icons, auto-translation, and the AI Agent can all route through it. Claude is **text-only** in UnoPim — it does not generate images.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `claude-sonnet-4-x`, `claude-opus-4-x` |
| Image Generation | ✗ | — (use OpenAI / Gemini / xAI for images) |
| Translation | ✓ | `claude-haiku-4-x` |
| Agentic PIM | ✓ | `claude-sonnet-4-x` |

## Supported models

The Claude family is organised by tier and version. UnoPim dynamically lists whatever your account is entitled to. The three tiers, from largest to fastest:

- **Opus** — flagship tier. Best long-form descriptions, complex reasoning, the best agent quality. Most expensive.
- **Sonnet** — balanced tier. Production sweet spot for content and the AI Agent.
- **Haiku** — fast, cheap. Best fit for translation and short copy.

::: tip
Always include the version suffix when you select a model (e.g. `claude-sonnet-4-6`, `claude-opus-4-7`). Anthropic deprecates older versions on a published schedule, so anchor the Platform on the latest version your account has access to.
:::

## Get the credentials

1. Sign in at [https://console.anthropic.com/](https://console.anthropic.com/).
2. Open **Settings → API Keys**.
3. Click **Create Key**, label it (e.g. `unopim-prod`), and copy the secret — shown once.
4. Make sure your workspace has billing enabled and a usage cap set, otherwise Claude calls return a 402.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Anthropic`
   - **Label** = e.g. *"Claude Content"*
   - **API Key** = paste the key
   - **Models** = tick the Sonnet and Haiku versions you plan to use; add Opus only if you actually need flagship quality.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Anthropic, Model = a Sonnet version. Claude Sonnet writes notably better long-form descriptions than equivalently priced GPT models — worth A/B-testing if your catalogue is description-heavy.
- **Image Generation** → **Not supported.** Leave this routed to OpenAI / Gemini / xAI.
- **Translation** → Platform = Anthropic, Model = a Haiku version. Cheapest Claude tier, plenty good for short locale strings.
- **Agentic PIM** → Platform = Anthropic, Model = a Sonnet version. Sonnet has very reliable tool-use and follows the Agentic PIM safety constraints well.

## Tips and limits

- **Token-budget aware.** Claude responses are charged per input + output token. For the AI Agent, lower **Max Agent Steps Per Turn** and **Token Budget** if costs creep.
- **No image generation.** Pair Anthropic for text with another provider for images. UnoPim has no problem mixing — they're independent settings.
- **Strong refusal behaviour.** Claude is more likely than other models to push back on borderline marketing copy. If a prompt keeps getting refused, soften the wording in your Custom Prompt under **Magic AI → Prompts**.
- **Region.** All calls go through `api.anthropic.com`. For EU-residency Claude, use Anthropic's AWS Bedrock route via a [Custom (OpenAI-compatible)](./custom.md) gateway that fronts Bedrock.
