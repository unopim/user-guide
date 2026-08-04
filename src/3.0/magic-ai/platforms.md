# Magic AI — Platforms

> **Sidebar:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

The **Platforms** page is where you register the AI providers UnoPim is allowed to talk to. Without at least one active platform, every other Magic AI feature — wand icons, auto-translation, auto-enrichment, and the AI Agent Chat — stays switched off.

## What is a Platform?

A *Platform* is one configured provider connection. It has three parts:

1. **Provider** — the company whose AI you want to use. UnoPim 3.0 supports **OpenAI, Anthropic, Gemini, Groq, Ollama, xAI, Mistral, DeepSeek, Azure**, and **Custom** (any OpenAI-compatible service).
2. **API key** — the secret that authorises UnoPim to call that provider's API.
3. **Enabled models** — which of the provider's models should be available inside UnoPim.

You can register **as many Platforms as you like**. A common setup is one premium provider for content (e.g., OpenAI `gpt-4o`) and a cheaper or faster one for translation (e.g., Gemini `gemini-1.5-flash`). The Platforms page keeps them side by side; the **Settings** page decides which Platform handles which capability.

::: tip Custom Provider
Need to call an OpenAI-compatible service that isn't on the preset list — for example a self-hosted gateway, a corporate proxy, or an alternative inference provider? Pick the **Custom** provider and enter its endpoint in the **API URL** field. For Custom providers the API URL is required, and UnoPim refuses addresses that point at restricted or internal network locations.
:::

## First-time setup banner

Until you register your first platform, the page shows a **Get Started with Magic AI** panel instead of the list. It walks you through the three steps — *Choose a provider*, *Enter your API key*, *Select models & save* — and offers an **Add Your First Platform** button.

If platforms exist but none is marked as default, a warning appears: *"No default platform is set. Please set one platform as default to enable AI features across the application."* Click the star on a platform row to clear it.

## What does this page do?

- Lists every Platform you've registered, along with its status and models.
- Lets you **add**, **edit**, **enable/disable**, **delete**, and **set a default** Platform.
- Encrypts every API key on save — keys are never stored in plain text and are masked in the UI.

<ImagePopup src="/assets/3.0/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

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

Click the **Add Platform** button in the top-right corner. A dialog opens with the following fields:

1. **Provider** — Select from the dropdown (OpenAI, Anthropic, Gemini, Groq, Ollama, xAI, Mistral, DeepSeek, Azure, or **Custom**).
2. **Label** — A descriptive name such as *"OpenAI Production"* or *"Gemini Translation"*. This is what you'll see in the Settings dropdowns.
3. **API Key** — Paste the key from your provider account. It's encrypted before it hits the database.
4. **API URL** — Pre-filled with the provider's default endpoint. Edit it only if you use a proxy or a custom deployment. For the **Custom** provider this field is required.
5. **Deployment Name** and **API Version** *(Azure only)* — extra fields shown when the provider is Azure.
6. **Models** — As soon as you enter a valid API key, UnoPim contacts the provider and **fetches the available models for you**. Recommended models are pre-ticked; use the search box to find others, and tick every model you want to expose. If the fetch fails, you can still type model IDs by hand and click **Add**. Only the models you select here appear in the Text / Image / Translation / Agentic PIM dropdowns on the Settings page.
7. **Set as Default** — Toggle to make this the default platform.
8. **Status** — Toggle to enable or disable the platform.

<ImagePopup src="/assets/3.0/images/magic-ai/add-platform.png" alt="Add Platform" />

::: tip
API credentials are stored with encrypted credential storage for security. Your API keys are never stored in plain text.
:::

### Connection testing on save

You do not need to test the connection yourself. When you click **Save**, UnoPim first sends a small test request to the provider using the key, URL, and models you entered:

- The test uses a text-capable model from your list — image-only models are skipped, so they never cause a false failure. At least one text-capable model must be selected.
- If the test fails, the platform is **not saved**, and a plain-language message explains what went wrong (invalid key, unreachable endpoint, model unavailable, etc.).
- When you edit a platform without changing its API key, the test is skipped — your stored key stays untouched.

::: tip
Because every save is verified against the provider first, a platform that appears in the list is known to have worked at the moment it was saved. If your provider key is rotated later, the next generation request will surface the error.
:::

## Platform Actions

- **Star icon** — Sets the platform as the **default**. Anywhere the Settings page shows *"Use Default Platform"*, it resolves to the starred platform. Only one can be the default at a time, and a disabled platform cannot be made the default.
- **Pencil icon** — Opens the edit dialog so you can update the label, rotate the API key, adjust the model list, or flip status.
- **Trash icon** — Deletes the platform configuration. Any feature that still points at this platform in Settings falls back to the default. You cannot delete the only default platform. Irreversible.

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

Every request — from a single field generation to a complex AI Agent plan — follows the **Agentic PIM Pipeline**:

<ImagePopup src="/assets/3.0/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-Step Workflow" />


## Minimum setup

To get any Magic AI feature working at all:

1. Register at least **one** Platform.
2. Make sure it has at least **one** Model enabled.
3. Set its Status to **Enabled**.
4. **Star** one Platform as the default.

Once that's done, head to **Magic AI → Settings** to route each capability (Text / Image / Translation / Agentic PIM) to a Platform and Model of your choice.
