# xAI (Grok)

> **Provider ID:** `xai`
> **Hosted by:** xAI (api.x.ai)
> **Best for:** A second opinion alongside OpenAI / Anthropic. Grok also exposes image generation, so it's one of the few drop-in alternatives when DALL-E is unavailable.

## What is xAI?

**xAI** is Elon Musk's AI company; they ship the **Grok** model family. The xAI REST API is OpenAI-shaped — same Chat Completions surface, same JSON formats — so UnoPim plugs in via the unified adapter and routes Grok the same way it routes any other provider.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `grok-4`, `grok-3-mini` |
| Image Generation | ✓ | `grok-2-image` |
| Translation | ✓ | `grok-3-mini` |
| Agentic PIM | ✓ | `grok-4` |

## Supported models

xAI's catalogue evolves; the Models multi-select reflects whatever your account is entitled to. Typical lineup:

- **`grok-4`** — current flagship. Strong reasoning, tool-use, and long-context.
- **`grok-3`** / **`grok-3-mini`** — previous-gen text models. The `mini` variant is the cost-efficient pick for translation.
- **`grok-2-image`** — image generation model. Use for the wand on image / gallery fields.

::: tip
Tick at least one text model **and** `grok-2-image` if you want to use xAI for both content and images on a single Platform.
:::

## Get the credentials

1. Sign in at [https://console.x.ai/](https://console.x.ai/).
2. Open **API Keys** and click **Create API Key**.
3. Add a billing method on the **Billing** page if your plan requires it.
4. Copy the key.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `xAI (Grok)`
   - **Label** = e.g. *"Grok"*
   - **API Key** = paste
   - **Models** = `grok-4`, `grok-3-mini`, `grok-2-image`
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = xAI, Model = `grok-4`.
- **Image Generation** → Platform = xAI, Model = `grok-2-image`. A useful alternative to DALL-E if you've hit OpenAI rate limits.
- **Translation** → Platform = xAI, Model = `grok-3-mini`.
- **Agentic PIM** → Platform = xAI, Model = `grok-4`.

## Tips and limits

- **OpenAI-compatible internally.** If a future Grok model isn't listed yet, you can usually wire it via the [Custom (OpenAI-compatible)](./custom.md) provider with base URL `https://api.x.ai/v1`.
- **Personality.** Grok has a more conversational / opinionated default tone than OpenAI / Anthropic. If product copy comes out off-brand, tighten the active System Prompt under **Magic AI → System Prompts**.
- **Image rate limits.** Image generation has its own RPM cap; if you generate in bulk, batch with a queue or stagger via the AI Agent's **Token Budget**.
