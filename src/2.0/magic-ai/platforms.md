# Magic AI — Platforms

> **Sidebar:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

The **Platforms** page is where you register the AI providers UnoPim is allowed to talk to. Without at least one active platform, every other Magic AI feature — wand icons, auto-translation, auto-enrichment, and the AI Agent Chat — stays switched off.

## What is a Platform?

A *Platform* is one configured provider connection. It has three parts:

1. **Provider** — the company whose AI you want to use (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.).
2. **API key** — the secret that authorises UnoPim to call that provider's API.
3. **Enabled models** — which of the provider's models should be available inside UnoPim.

You can register **as many Platforms as you like**. A common setup is one premium provider for content (e.g., OpenAI `gpt-4o`) and a cheaper or faster one for translation (e.g., Gemini `gemini-1.5-flash`). The Platforms page keeps them side by side; the **Settings** page decides which Platform handles which capability.

## What does this page do?

- Lists every Platform you've registered, along with its status and models.
- Lets you **add**, **edit**, **enable/disable**, **delete**, and **set a default** Platform.
- Encrypts every API key on save — keys are never stored in plain text and are masked in the UI.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

## Platforms datagrid

| Column | Description |
|--------|-------------|
| **Label** | The name you assigned to the platform configuration. |
| **Provider** | The AI provider (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.). |
| **Models** | The models enabled for this platform. |
| **Default** | Whether this platform is the default (Yes/No). |
| **Status** | Enabled or Disabled. |
| **Created At** | Date the platform was added. |
| **Actions** | Star (set as default), Edit (pencil icon), Delete (trash icon). |

## Adding a Platform

Click the **Add Platform** button in the top-right corner. A modal opens with the following fields:

1. **Provider** — Select from the dropdown. UnoPim supports 11 providers (see [Supported Providers](#supported-providers) below).
2. **Label** — A descriptive name such as *"OpenAI Production"* or *"Gemini Translation"*. This is what you'll see in the Settings dropdowns.
3. **API Key** — Paste the key from your provider account. It's encrypted before it hits the database.
4. **Models** — Multi-select the models you want to expose. Only the models you tick here appear in the downstream Text / Image / Translation / Agentic PIM dropdowns on the Settings page.
5. **Status** — Toggle to enable or disable the platform.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Add Platform" />

::: tip
API credentials are stored with encrypted credential storage for security. Your API keys are never stored in plain text.
:::

## Supported Providers

The **Provider** dropdown in the Add / Edit Platform modal exposes these 11 options. Each one is a distinct integration with its own credential format, model catalogue, and capability set (text-only vs. text + image, hosted vs. self-hosted, etc.). Click any row for the full per-provider page (models confirmed working with UnoPim, how to get the key, step-by-step configuration, capability routing, tips and limits).

| # | Provider | ID | What it is | Typical use |
|---|----------|----|------------|-------------|
| 1 | **[OpenAI](./providers/openai.md)** | `openai` | OpenAI's hosted models — GPT-4o family for text, DALL-E 2/3 for images. | Default choice when you want best-in-class quality for both content generation and image generation in one place. |
| 2 | **[Anthropic](./providers/anthropic.md)** | `anthropic` | Claude model family (Opus, Sonnet, Haiku). Text generation and reasoning only — no image generation. | High-quality long-form descriptions, careful reasoning, agentic workflows. Pair with another provider for images. |
| 3 | **[Google Gemini](./providers/gemini.md)** | `gemini` | Google's Gemini family — `gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-flash-latest`, `gemini-1.5-pro`. Supports text and image generation. | Cost-efficient translation and bulk content; the `flash` tiers are popular for translation workloads. |
| 4 | **[Groq](./providers/groq.md)** | `groq` | Groq-hosted open-source models running on custom inference hardware — DeepSeek-R1 distill, Llama 3.1, Qwen 3, Kimi K2, GPT-OSS, and Groq Compound. Text only. | Very fast, low-latency text generation when speed matters more than absolute quality. |
| 5 | **[Ollama](./providers/ollama.md)** | `ollama` | Local / self-hosted runner for open-source models — Llama 2/3, Mistral, Qwen, DeepSeek-Coder, Phi, LLaVA. | Air-gapped or privacy-sensitive deployments where data must not leave the network. Requires a running Ollama server. |
| 6 | **[xAI (Grok)](./providers/xai.md)** | `xai` | xAI's Grok models. Supports text and image generation. | Alternative to OpenAI / Anthropic with its own personality; useful as a fallback or A/B option. |
| 7 | **[Mistral](./providers/mistral.md)** | `mistral` | Mistral AI's hosted models (Mistral Large, Mistral Small, Codestral, etc.). Text only. | European-hosted alternative; strong multilingual performance, useful for translation into European locales. |
| 8 | **[DeepSeek](./providers/deepseek.md)** | `deepseek` | DeepSeek's hosted models (`deepseek-chat`, `deepseek-reasoner`). Text only, strong on reasoning and code-style tasks. | Cost-aggressive option for bulk text generation and reasoning-heavy prompts. |
| 9 | **[Azure OpenAI](./providers/azure.md)** | `azure` | OpenAI models served through Microsoft Azure with an enterprise SLA, regional hosting, and Azure-managed keys. | Enterprises that already standardise on Azure for compliance and billing. |
| 10 | **[OpenRouter](./providers/openrouter.md)** | `openrouter` | A meta-provider that proxies to 100+ models behind a single API key. | One-stop access when you want to experiment across many models without registering each provider individually. |
| 11 | **[Custom (OpenAI-compatible)](./providers/custom.md)** | `custom` | Any third-party endpoint that speaks the OpenAI Chat Completions API — vLLM, LM Studio, LiteLLM proxy, in-house gateways, etc. | Bring-your-own infrastructure. Enter the base URL and the API key; UnoPim treats it like any other OpenAI-style provider. |

> **Want a deep dive?** The [Providers index](./providers/) page has a capability matrix and a decision guide for choosing between them.

### Choosing a provider

Three questions narrow the choice:

- **Do you need image generation?** Only **OpenAI**, **Gemini**, and **xAI (Grok)** generate images. For Magic AI → Settings → **Image Generation**, pick one of those.
- **Does data have to stay on-prem?** Use **Ollama** (local model server) or a **Custom (OpenAI-compatible)** endpoint pointed at your own gateway.
- **What capability is the bottleneck — quality, speed, or cost?** Quality → OpenAI / Anthropic / Gemini-Pro. Speed → Groq, Gemini-Flash. Cost → DeepSeek, Gemini-Flash, Mistral-Small.

You don't have to commit to one. Register multiple Platforms and route each capability separately under **Magic AI → Settings**:

- **Text Generation** → e.g. Anthropic `claude-sonnet`
- **Image Generation** → e.g. OpenAI `dall-e-3`
- **Translation** → e.g. Gemini `gemini-1.5-flash`
- **Agentic PIM** → e.g. OpenAI `gpt-4o`

::: tip
Register a cheap, fast provider (Gemini Flash, Groq, DeepSeek) for translation and a premium provider (Claude, GPT-4o) for content generation. The split typically cuts translation cost by 80–95% with no quality drop on short locale-string tasks.
:::

### Credentials by provider

Different providers expect different fields. Most need just an **API Key**, but a few have extras:

- **OpenAI / Anthropic / Gemini / Groq / xAI / Mistral / DeepSeek / OpenRouter** — single **API Key** field.
- **Azure OpenAI** — API Key plus the **Azure endpoint URL** and the **deployment name** you created in the Azure portal.
- **Ollama** — usually no API key; you supply the **Base URL** of your Ollama server (e.g. `http://localhost:11434`).
- **Custom (OpenAI-compatible)** — **Base URL** of your endpoint plus an **API Key** if your gateway requires one.

The Add / Edit Platform modal renders only the fields relevant to the selected Provider, so you won't be prompted for an Azure deployment name when you pick OpenAI, for example.

## Platform Actions

- **Star icon** — Sets the platform as the **default**. Anywhere the Settings page shows *"Use Default Platform"*, it resolves to the starred platform. Only one can be the default at a time.
- **Pencil icon** — Opens the edit modal so you can update the label, rotate the API key, adjust the model list, or flip status.
- **Trash icon** — Deletes the platform configuration. Any feature that still points at this platform in Settings falls back to the default. Irreversible.

## How Platform selection flows into features

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Minimum setup

To get any Magic AI feature working at all:

1. Register at least **one** Platform.
2. Make sure it has at least **one** Model enabled.
3. Set its Status to **Enabled**.
4. **Star** one Platform as the default.

Once that's done, head to **Magic AI → Settings** to route each capability (Text / Image / Translation / Agentic PIM) to a Platform and Model of your choice.
