# Google Gemini

> **Provider ID:** `gemini`
> **Hosted by:** Google (generativelanguage.googleapis.com)
> **Best for:** High-volume, low-cost translation and bulk content. The Flash tier is hard to beat on price-per-token.

## What is Gemini?

**Gemini** is Google's multi-modal LLM family, served by Google AI Studio (free / paid keys) or Vertex AI (enterprise). UnoPim uses the AI Studio path by default — give it a single API key and it uses any model your project has access to.

## Capabilities in UnoPim

| Capability | Supported | Recommended models |
|------------|:---------:|--------------------|
| Text Generation | ✓ | `gemini-2.5-pro`, `gemini-2.5-flash` |
| Image Generation | ✓ | `gemini-2.5-flash` (image output) |
| Translation | ✓ | `gemini-1.5-flash-latest`, `gemini-2.5-flash` |
| Agentic PIM | ✓ | `gemini-2.5-pro` |

## Supported models

UnoPim lists these Gemini text / multi-modal models in the Models multi-select:

- **`gemini-2.5-pro`** — top-tier reasoning and content quality. Best for the AI Agent.
- **`gemini-2.5-flash`** — fast multi-modal. Strong default for content generation; supports image generation in newer revisions.
- **`gemini-2.0-flash`** — cost-aggressive workhorse for translation.
- **`gemini-1.5-flash-latest`** — long-stable Flash tier. Excellent for bulk translation jobs.
- **`gemini-1.5-pro`** — long-context Pro tier. Useful when prompts include large reference data.

## Get the credentials

1. Sign in at [https://aistudio.google.com/](https://aistudio.google.com/).
2. Click **Get API key** in the top-right.
3. Either pick an existing Google Cloud project or create a new one, then click **Create API key**.
4. Copy the key — it's shown in plain text and you can retrieve it later from the same screen if needed.

::: tip
Free-tier keys have a low RPM cap (currently 15 RPM on Flash). For production translation workloads, enable billing on the underlying Google Cloud project so the key promotes to the paid tier automatically.
:::

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Google Gemini`
   - **Label** = e.g. *"Gemini Translation"*
   - **API Key** = paste the AI Studio key
   - **Models** = at minimum tick `gemini-1.5-flash-latest` for translation and `gemini-2.5-pro` for content.
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Gemini, Model = `gemini-2.5-pro` or `gemini-2.5-flash`.
- **Image Generation** → Platform = Gemini, Model = `gemini-2.5-flash` (only if your account has image-output enabled).
- **Translation** → Platform = Gemini, Model = `gemini-1.5-flash-latest`. This is the most common cost-saving move — point translation at Flash and content at a premium provider.
- **Agentic PIM** → Platform = Gemini, Model = `gemini-2.5-pro`.

## Tips and limits

- **Region & residency.** AI Studio routes worldwide. For data residency, use Vertex AI through the [Custom (OpenAI-compatible)](./custom.md) provider behind a LiteLLM proxy.
- **Safety filters.** Gemini will refuse content that trips its Safety Filters. If specific product copy keeps getting blocked (e.g. weapons / health claims), reword the Custom Prompt rather than disabling the filter.
- **Free tier rate limits.** A free key works for evaluation but will throttle a real catalogue. Enable billing on the project to lift caps.
- **Image output.** The Gemini image-output capability is rolled out per-account; if `gemini-2.5-flash` doesn't return images, your project hasn't been granted image generation yet — request access in AI Studio or fall back to OpenAI for images.
