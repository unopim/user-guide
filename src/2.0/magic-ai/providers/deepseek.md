# DeepSeek

> **Provider ID:** `deepseek`
> **Hosted by:** DeepSeek (api.deepseek.com)
> **Best for:** Aggressive cost optimisation. DeepSeek's hosted models are typically the cheapest per-million-token option among first-party providers in this list.

## What is DeepSeek?

[DeepSeek](https://www.deepseek.com/) is a Chinese AI lab whose models punch well above their price. The DeepSeek API is OpenAI-compatible, so UnoPim plugs in cleanly. Text-only — no image generation.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `deepseek-chat`, `deepseek-reasoner` |
| Image Generation | ✗ | — |
| Translation | ✓ | `deepseek-chat` |
| Agentic PIM | ✓ | `deepseek-reasoner` |

## Supported models

DeepSeek's hosted catalogue, as exposed in the Models multi-select:

- **`deepseek-chat`** — general-purpose chat model. Default for content and translation.
- **`deepseek-reasoner`** — reasoning-tuned (R1-family). Best when you need careful multi-step output, including the AI Agent.

::: tip
DeepSeek Reasoner emits visible *thinking* tokens before the final answer. UnoPim's adapter strips them when streaming into a field, but they still cost tokens — reflect that in your **Token Budget** if you route the AI Agent to Reasoner.
:::

## Get the credentials

1. Sign in at [https://platform.deepseek.com/](https://platform.deepseek.com/).
2. Open **API Keys** in the dashboard, click **Create new API key**, copy it.
3. Add credits to your account on the **Top up** page — you pay as you go.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `DeepSeek`
   - **Label** = e.g. *"DeepSeek Cheap"*
   - **API Key** = paste
   - **Models** = tick `deepseek-chat` and `deepseek-reasoner`.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = DeepSeek, Model = `deepseek-chat`.
- **Image Generation** → **Not supported.** Route to OpenAI / Gemini / xAI.
- **Translation** → Platform = DeepSeek, Model = `deepseek-chat`. Often 5-10× cheaper than equivalent OpenAI / Anthropic translation.
- **Agentic PIM** → Platform = DeepSeek, Model = `deepseek-reasoner`. Tool-use is decent; for complex catalogue-wide plans, premium providers (`gpt-4o`, `claude-sonnet-4-x`) still produce more reliable plans.

## Tips and limits

- **Headquartered in China.** Some compliance regimes (US federal, EU sovereign data) explicitly disallow Chinese-hosted endpoints. Check before routing customer or pricing data through DeepSeek.
- **Cost-per-token.** Lowest in this provider list at the time of writing. If translation is your hot path, this is the easiest place to save money.
- **Reasoner thinking tokens.** Reasoner traces inflate output token counts. For chat-style use it's fine; for the Agent loop, set conservative `Max Agent Steps Per Turn` (e.g. `3`) to bound spend.
- **No image generation.** Pair DeepSeek for text with another provider for images.
