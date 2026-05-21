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

1. **Provider** — Select from the dropdown (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.).
2. **Label** — A descriptive name such as *"OpenAI Production"* or *"Gemini Translation"*. This is what you'll see in the Settings dropdowns.
3. **API Key** — Paste the key from your provider account. It's encrypted before it hits the database.
4. **Models** — Multi-select the models you want to expose. Only the models you tick here appear in the downstream Text / Image / Translation / Agentic PIM dropdowns on the Settings page.
5. **Status** — Toggle to enable or disable the platform.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Add Platform" />

::: tip
API credentials are stored with encrypted credential storage for security. Your API keys are never stored in plain text.
:::

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
