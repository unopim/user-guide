# OpenRouter

> **Provider ID:** `openrouter`
> **Hosted by:** OpenRouter (openrouter.ai)
> **Best for:** Trying many models behind a single API key. One contract, one bill, hundreds of models.

## What is OpenRouter?

[OpenRouter](https://openrouter.ai/) is a meta-provider: it exposes a single OpenAI-compatible endpoint that proxies to 100+ models from OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek, Cohere, Together AI, and more. You pay OpenRouter, OpenRouter pays the upstream. The result for UnoPim is a single Platform with access to almost every model in this guide.

## Capabilities in UnoPim

| Capability | Supported | Notes |
|------------|:---------:|-------|
| Text Generation | ✓ | Any text model OpenRouter offers |
| Image Generation | ✓ | Only for upstream models that themselves support images (DALL-E, Gemini Vision, etc.) |
| Translation | ✓ | Often paired with cheap upstreams (Llama, DeepSeek, Mistral Small) |
| Agentic PIM | ✓ | Tool-use depends on the upstream model — pick a tool-use-capable one |

## Supported models

OpenRouter's catalogue is huge and evolves weekly. Browse it at [openrouter.ai/models](https://openrouter.ai/models). The Model field in UnoPim accepts any **route ID** of the form `<vendor>/<model>`, for example:

- `openai/gpt-4o`, `openai/gpt-4o-mini`
- `anthropic/claude-sonnet-4`, `anthropic/claude-haiku-4`
- `google/gemini-2.5-pro`, `google/gemini-1.5-flash`
- `meta-llama/llama-3.1-70b-instruct`
- `mistralai/mistral-large`, `mistralai/mistral-small`
- `deepseek/deepseek-chat`, `deepseek/deepseek-reasoner`
- `qwen/qwen-2.5-72b-instruct`

Add the route IDs you want in the Models multi-select on the Add Platform modal. UnoPim treats each one as a normal model selection.

## Get the credentials

1. Sign in at [https://openrouter.ai/](https://openrouter.ai/).
2. Open **Keys** → **Create Key**, label it (e.g. `unopim`), copy.
3. Top up credits on the **Credits** page. OpenRouter is pay-as-you-go.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `OpenRouter`
   - **Label** = e.g. *"OpenRouter Pool"*
   - **API Key** = paste
   - **Models** = the OpenRouter route IDs you want available, one per line / multi-select entry.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = OpenRouter, Model = e.g. `anthropic/claude-sonnet-4`.
- **Image Generation** → Platform = OpenRouter, Model = e.g. `openai/dall-e-3` *if* OpenRouter exposes the upstream image API to your account; otherwise route images to a direct provider.
- **Translation** → Platform = OpenRouter, Model = e.g. `mistralai/mistral-small` or `deepseek/deepseek-chat`.
- **Agentic PIM** → Platform = OpenRouter, Model = a strong tool-use model such as `openai/gpt-4o` or `anthropic/claude-sonnet-4`.

## Tips and limits

- **Markup.** OpenRouter adds a small markup on top of the upstream price. If you already have a direct contract with (say) OpenAI or Anthropic, the direct provider is cheaper — use OpenRouter for breadth, not as a primary cost optimiser.
- **Rate limits cascade.** If the upstream throttles, OpenRouter returns the same 429. Keep an eye on the Job Tracker for failures during bulk operations.
- **Single bill, many vendors.** This is the headline win. For evaluation phases ("which model writes the best descriptions?"), it's the fastest path to comparing options.
- **Image support is per-upstream.** Don't assume image generation works just because OpenRouter is listed. Check the upstream model's capability before routing **Image Generation** to OpenRouter.
