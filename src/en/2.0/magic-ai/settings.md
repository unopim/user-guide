# Magic AI — Settings

> **Sidebar:** Magic AI → **Settings**
> **URL:** `/admin/configuration/general/magic_ai`

The **Settings** page is where you route each AI capability in UnoPim to a specific **Platform** and **Model**. This is also the home of the **Agentic PIM** controls — the token budget, approval mode, auto-enrichment toggle, and the Catalog Quality Monitor.

## What does this page do?

It contains four independent sections, one per capability:

1. **Agentic PIM** — configures the AI Agent Chat (Open Agenting PIM) and its safety controls.
2. **Text Generation** — powers the wand icons on product/category text fields.
3. **Image Generation** — powers the wand icons on image and gallery attributes.
4. **Translation** — configures auto-translation on product save, plus the bulk translation command.

Because each section has its own Platform and Model dropdown, you can use **different providers for different capabilities** — for example, OpenAI for content generation and Gemini for translation.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

## 1. Agentic PIM

Controls the conversational AI Agent and the background workflows it drives (auto-enrichment on product create, Catalog Quality Monitor, approval queue).

| Field | What it does |
|-------|---|
| **Enable AI Agent Chat** | Master switch for the "Open Agenting PIM" button. When off, the chat button is hidden and no one can converse with the agent. |
| **Max Agent Steps Per Turn** | How many tool calls the agent may chain for a single user message. The dropdown offers labeled presets rather than raw numbers — e.g., **`3 (Fast)`** for tight, cheap responses, and higher presets for more autonomy. Higher = more autonomy per turn; lower = tighter control and cheaper tokens. |
| **Daily Token Budget** | Global daily cap on AI Agent token spend (e.g., `500000`). When the cap is hit, the agent replies with a budget-exhausted notice until midnight. |
| **Auto-Enrichment on Product Create** | When enabled, every new product is queued for AI enrichment — missing descriptions, SEO fields, etc. are filled in automatically. |
| **Catalog Quality Monitor** | Runs a scheduled AI sweep that reports on missing, thin, or inconsistent catalog data. |
| **Confidence Threshold** | Minimum confidence (default 0.7 — "Balanced") required before a proposed change is applied. Below the threshold, the change is held for review. |
| **Change Approval Mode** | How AI-proposed changes land: *Auto-apply*, *Confirm & apply* (default), or *Manual review* (everything routes to the Approval Queue). |

::: tip
Start with **Manual review** while you learn how the agent behaves on your catalog. Move trusted workflows to Auto-apply once the analytics dashboard shows consistent, high-confidence output.
:::

## 2. Text Generation

Controls the wand icons next to product and category text fields (Name, Short Description, Description, Meta Title, Meta Description, URL Key, etc.).

| Field | What it does |
|-------|---|
| **Enabled** | Toggle text generation on or off across the admin. |
| **Default Platform** | Which Platform serves text requests. Pick **`-- Use Default Platform --`** to follow the starred default, or override with a specific platform. Platforms marked with `*` in the dropdown are the current default. |
| **Default Model** | The model used for text, pulled from the models enabled on the chosen Platform. |

## 3. Image Generation

Controls the wand icons on Image and Gallery attributes. Only Platforms whose provider supports image generation (OpenAI / DALL-E, Gemini, xAI) appear here.

| Field | What it does |
|-------|---|
| **Enabled** | Toggle image generation on or off. |
| **Default Platform** | An image-capable Platform. Pick **`-- Use Default Platform --`** to follow the starred default; `*` in the dropdown marks the current default. |
| **Default Model** | The specific image model (e.g., `dall-e-3`). |

## 4. Translation

Controls auto-translation on product save and the AI-powered bulk translation command. Because translation tends to be high-volume, you can assign it a different (often cheaper/faster) Platform.

| Field | What it does |
|-------|---|
| **Enabled** | Turn AI-powered translation on or off. |
| **Default Platform** | The Platform used for translation requests. Pick **`-- Use Default Platform --`** to follow the starred default; `*` in the dropdown marks the current default. |
| **Translation Model** | The specific model used for translation — independent of the text-generation model. |
| **Replace Existing Value** | On: re-translating overwrites existing locale values. Off: only empty locale fields are filled, preserving manual translations. |
| **Source Channel** | The channel whose values serve as the source-of-truth. |
| **Target Channel** | The channel that receives the translated values. |
| **Source Locale** | The locale to translate from (e.g., `en_US`). |
| **Target Locales** | Multi-select — every locale to auto-populate. |

::: tip
You can assign a different (potentially cheaper or faster) AI provider specifically for translations, keeping your premium provider for content generation.
:::

Click **Save Configuration** at the bottom of the page to apply all changes. Settings take effect immediately — no restart required.

## Where the values come from

The Platform / Model dropdowns on this page are populated entirely from the **[Platforms](./platforms.md)** page. If a Platform isn't listed, either (a) it's disabled, (b) its provider doesn't support the capability (e.g., Ollama doesn't show up in Image Generation), or (c) you haven't registered it yet.

Similarly, the **Translation** section's Source / Target Channel and Locale dropdowns are populated from your channel and locale configuration (see **Settings → Channels** and **Settings → Locales**).
