# Magic AI Configuration

**Magic AI** is UnoPim's built-in layer for generating, enriching, and translating product and category content with Large Language Models (LLMs). Before you can use any AI feature — the Magic AI wand icons on product fields, the AI Agent Chat, auto-translation, or auto-enrichment — you must first configure Magic AI from the admin sidebar.

<ImagePopup src="/assets/2.1/images/configuration/AiConfiguration.png" alt="Magic AI Configuration Overview" />

## What does Magic AI do?

Magic AI wires your UnoPim instance to one or more external AI providers (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) and exposes that power inside the PIM in four ways:

| Capability | Where it appears in the UI | What it does |
|---|---|---|
| **Text generation** | Wand icon next to product/category text fields | Writes names, descriptions, SEO meta fields, category copy |
| **Image generation** | Wand icon next to image/gallery attributes | Creates product imagery from a text description |
| **Translation** | Automatic on product save, plus a bulk command | Translates locale-specific values across all configured locales |
| **Agentic PIM (AI Agent Chat)** | "Open Agenting PIM" button, bottom-right | Conversational assistant that calls 30+ PIM tools on your behalf |

All four share the same provider connections, prompt library, and system personality — so when you change Magic AI settings, every AI feature in UnoPim picks up the change.

## How does Magic AI work?

The pipeline is the same for every AI feature — from field generation to the AI Agent:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-Step Workflow" />

1. **You trigger a request** — click a wand icon, save a product with auto-translate on, or send a chat message to the AI Agent.
2. **UnoPim assembles the input** — it combines:
   - The target entity's data (e.g., the product's name, attributes, category)
   - The matching **Prompt** from Magic AI → Prompts (with `@attribute` placeholders expanded)
   - The active **System Prompt** personality (tone, temperature, max tokens)
3. **UnoPim forwards the request** through the unified **LaravelAiAdapter** to the platform/model you selected in Magic AI → Settings.
4. **The provider responds** with generated text, an image, or a translation.
5. **UnoPim applies the result** — either directly into the field, into the database (after optional approval), or streamed back into the chat.


Everything between step 2 and step 5 is configured from the four sub-pages described below: **Platforms**, **Settings**, **Prompts**, and **System Prompts**.

::: tip
API keys never appear in plain text. All provider credentials are stored in the database with **encrypted credential storage**, and the key is masked in the UI after you save it.
:::

## The Magic AI Menu

Expand **Magic AI** in the admin sidebar and you'll see four sub-menu items. Each one owns a specific slice of the AI configuration — together they give you complete control over *which provider runs, which models it uses, which instructions it follows, and which personality it speaks with*.

| Menu item | URL | What you configure here | When to visit |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Provider connections — add an OpenAI / Anthropic / Gemini / Ollama / Groq account, paste its API key, and choose which of its models to enable. | First-time setup, rotating API keys, adding a new provider, enabling new models. |
| **Settings** | `/admin/configuration/general/magic_ai` | Per-capability routing — pick which Platform + Model handles Text Generation, Image Generation, Translation, and Agentic PIM. Also the home for the daily token budget, approval mode, and auto-enrichment switches. | Any time you want to change which provider runs a given feature, tune safety limits, or turn features on/off. |
| **Prompts** | `/admin/magic-ai/prompts` | Prompt templates — the instruction text Magic AI sends with every request, using `@attribute_code` placeholders that get replaced with real entity values. | Tailoring AI output to your brand voice, adding prompts for new attributes or categories, tweaking the default prompts. |
| **System Prompts** | `/admin/magic-ai/system-prompts` | Global AI personality — tone, temperature, max tokens. Only one is active at a time, so your whole catalog keeps a consistent voice. | Changing the overall tone (formal vs. casual, concise vs. descriptive), tuning creativity, capping response length. |

### How the four menu items connect

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-config-flow.png" alt="Magic AI Configuration Hierarchy" />

**Read top to bottom, you configure once, then use everywhere.** A wand click on a product description, an auto-translated field, or a chat message to the AI Agent all follow the same path through these four menu items.


### Minimum setup order

If you're configuring Magic AI for the first time, visit the menu items in this order:

1. **Platforms** — add at least one provider, paste the API key, enable the models you plan to use, and **star one as the default**.
2. **Settings** — enable the capabilities you need (Text / Image / Translation / Agentic PIM) and pick a Platform + Model for each. Set the Daily Token Budget and Change Approval Mode while you're here.
3. **Prompts** — review the shipped prompts; adjust or add your own so the AI writes in the voice your catalog expects.
4. **System Prompts** — confirm the active personality matches the tone you want across the whole catalog. Enable a different one if needed.

Once those four pages are saved, every Magic AI feature in the admin — wand icons, auto-translation, auto-enrichment, and the AI Agent Chat — is ready to use.

## Platforms

Navigate to **Magic AI → Platforms** to manage the AI provider connections that every Magic AI feature uses.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

### What a "Platform" is

A *Platform* is one configured provider connection: a provider (OpenAI, Anthropic, Gemini, Ollama, Groq, …), an API key, and the list of models you've enabled from that provider. You can configure as many Platforms as you want — for example, one OpenAI platform for writing, one Gemini platform for translation, and one Ollama platform for on-prem workloads — and UnoPim will route each AI feature to the platform you assign.

### Platforms datagrid

| Column | Description |
|--------|-------------|
| **Label** | The name you assigned to the platform configuration |
| **Provider** | The AI provider (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) |
| **Models** | The models enabled for this platform |
| **Default** | Whether this platform is the default (Yes/No) |
| **Status** | Enabled or Disabled |
| **Created At** | Date the platform was added |
| **Actions** | Star (set as default), Edit (pencil icon), Delete (trash icon) |

### Adding a Platform

Click **Add Platform** in the top-right. A two-step modal titled **"Add AI Platform"** opens.

**Step 1 — pick the provider.**

The first screen of the modal only has one field:

- **Provider *** — dropdown listing every supported provider (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.).

Select a provider and click **Save**. The modal expands to show the rest of the fields.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Add AI Platform — Step 1" />

**Step 2 — fill in the provider-specific details.**

- **Label** — Enter a descriptive name for this platform configuration (e.g., *"OpenAI Production"*, *"Gemini Translation"*). This name appears in the downstream dropdowns on Magic AI → Settings.
- **API Key** — Paste the API key from your provider account. It is encrypted on save and masked in the UI afterwards.
- **Models** — A multiselect listing the models available from the selected provider. Only the models you tick here appear in the Settings dropdowns.
- **Status** — Toggle to enable or disable the platform.

Click **Save** to finish. The platform appears in the datagrid.

::: tip
API credentials are stored with encrypted credential storage for security. Your API keys are never stored in plain text.
:::

### Platform Actions

- **Star icon** — Sets the platform as the **default**. The default is what the system uses when a feature is set to *"Use Default Platform"*. Only one platform can be the default at a time.
- **Pencil icon** — Opens the edit modal to update the platform label, API key, models, or status.
- **Trash icon** — Deletes the platform configuration. This action cannot be undone.

### How platform selection flows into features

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

## Settings

Navigate to **Magic AI → Settings** in the sidebar. This opens the configuration page at `/admin/configuration/general/magic_ai` with four sections — one per capability. For each capability you pick **which Platform** and **which Model** should handle it. Using different Platforms for different capabilities lets you optimize cost, speed, and quality independently.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

### 1. Agentic PIM

This section controls the **AI Agent Chat** (the conversational assistant) and the autonomous workflows it powers: auto-enrichment on product create, catalog quality monitoring, and the approval queue that sits in front of AI-proposed changes.

| Field | What it does |
|-------|---|
| **Enable AI Agent Chat** | Master switch for the "Open Agenting PIM" chat button. When off, the floating button is hidden and no one can converse with the agent. |
| **Max Agent Steps Per Turn** | How many tool calls the agent may chain together for a single user message (default: 5). Higher = more autonomy per turn; lower = tighter control and cheaper tokens. |
| **Daily Token Budget** | Hard daily cap on tokens spent by the agent (e.g., 500 000). When the cap is hit, the agent replies with a budget-exhausted notice until the next day. |
| **Auto-Enrichment on Product Create** | When enabled, every newly created product is queued for AI enrichment — missing descriptions, SEO fields, etc. are filled in automatically. |
| **Catalog Quality Monitor** | Runs a scheduled AI sweep that reports on missing, thin, or inconsistent data across the catalog. |
| **Confidence Threshold** | Minimum confidence score (default: 0.7 — "Balanced") the AI must reach before a proposed change is applied. Below the threshold, changes are held for review. |
| **Change Approval Mode** | How AI-proposed changes land in your data: *Auto-apply*, *Confirm & apply* (default — the AI proposes values, asks you, then executes), or *Manual review* (everything goes to the Approval Queue). |

### 2. Text Generation

This section controls the wand icons next to text fields (product name, descriptions, SEO meta fields, category copy). When a user clicks a wand icon, UnoPim sends the field's prompt to the Platform and Model configured here.

| Field | What it does |
|-------|---|
| **Enabled** | Toggle to enable or disable text generation across the admin. |
| **Default Platform** | Choose which Platform serves text requests. Pick *"Use Default Platform"* to follow the starred platform, or override with a specific one. |
| **Default Model** | The model used for text generation, drawn from the models enabled on the chosen Platform. |

### 3. Image Generation

This section controls the wand icons on Image and Gallery attributes. Only Platforms whose provider supports image generation (OpenAI / DALL-E, Gemini, xAI) are listed.

| Field | What it does |
|-------|---|
| **Enabled** | Toggle to enable or disable image generation. |
| **Default Platform** | The image-capable Platform to use. |
| **Default Model** | The specific image model (e.g., `dall-e-3`). |

### 4. Translation

Translation can run automatically whenever a product is saved, and can also be triggered in bulk via the translation command. Because translation tends to be high-volume, Magic AI lets you assign a **different Platform** — typically a cheaper or faster one — for this job alone.

| Field | What it does |
|-------|---|
| **Enabled** | Toggle to enable or disable AI-powered translation. |
| **Default Platform** | The Platform used for translation requests. |
| **Translation Model** | The specific model used for translation — independent of the text-generation model. |
| **Replace Existing Value** | On: re-translating overwrites existing locale values. Off: only empty locale fields are filled, preserving manual translations. |
| **Source Channel** | The channel whose values serve as the source-of-truth. |
| **Target Channel** | The channel that receives the translated values. |
| **Source Locale** | The locale to translate from (e.g., `en_US`). |
| **Target Locales** | Multi-select; choose every locale you want to auto-populate. |

::: tip
You can assign a different (potentially cheaper or faster) AI provider specifically for translations, keeping your premium provider for content generation.
:::

Click **Save Configuration** at the bottom of the page to apply all changes. Settings take effect immediately — no restart required.

## Prompts

Navigate to **Magic AI → Prompts** to manage the **prompt templates** that tell the AI what to produce. A prompt is the instruction sent with every generation request; it's where you bake in your brand voice, required structure, or catalog-specific rules.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

### How prompts work

Each prompt is tied to an **Entity Type** (product or category) and a **Purpose** (Text Generation or Image Generation). At generation time, UnoPim:

1. Picks the prompt that matches the entity and purpose.
2. Replaces every `@attribute_code` placeholder with the actual value from the entity.
3. Adds the active System Prompt personality on top.
4. Sends the combined instructions to the Platform/Model configured for that capability.

So a prompt of `Write a product description for @name in the @color variant` becomes, at generation time, something like `Write a product description for Air Max 90 in the Blue variant`.

### Prompts datagrid

| Column | Description |
|--------|-------------|
| **Title** | The name of the prompt |
| **Prompt** | The prompt text with placeholders |
| **Entity Type** | The entity the prompt applies to (product or category) |
| **Purpose** | Whether the prompt is for Text Generation or Image Generation |
| **Created At** | Date the prompt was created |
| **Updated At** | Date the prompt was last modified |
| **Actions** | Edit (pencil icon), Delete (trash icon) |

### Creating a Prompt

Click the **Create Prompt** button to add a new prompt. Fill in:

- **Title** — how it appears in the list.
- **Prompt** — the instruction text. Use `@attribute_code` placeholders for any value you want filled in from the entity.
- **Entity Type** — product or category.
- **Purpose** — Text Generation or Image Generation.

### Shipped prompts

UnoPim ships with **18 preset prompts**. Most target image generation (product photography styles) and a handful target text generation. All of them target `product` as the Entity Type. Examples you'll see in the list:

| Title | Purpose |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Open **Magic AI → Prompts** to see the full list, edit any preset, or create new ones.

::: tip
Use attribute codes as placeholders (prefixed with `@`) in your prompts. The AI will replace them with actual values from the product or category being processed.
:::

## System Prompts

Navigate to **Magic AI → System Prompts** to configure the AI's **personality** — the tone, style, and generation parameters that sit underneath every prompt.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="System Prompts" />

### How a System Prompt differs from a Prompt

- A **Prompt** says *what* to write for a specific field ("write a product description …").
- A **System Prompt** says *how* to write — voice, tone, creativity, length. It's applied in front of every prompt, globally.

Only **one System Prompt is active at any time**. Enabling a new one automatically disables the previous one, so the entire catalog keeps a consistent voice.

### System Prompts datagrid

| Column | Description |
|--------|-------------|
| **Title** | The name of the system prompt |
| **Tone** | The conversational tone (e.g., Confident, Vivid, Brief) |
| **Max Tokens** | The maximum number of tokens for AI responses |
| **Temperature** | The creativity level (lower = more focused, higher = more creative) |
| **Status** | Enabled or Disabled |
| **Created At** | Date the system prompt was created |
| **Updated At** | Date the system prompt was last modified |
| **Actions** | Edit (pencil icon), Delete (trash icon) |

### Preset System Prompts

UnoPim ships with 10 preset System Prompts. All ship with **Max Tokens = 1024**; only Temperature differs. Only one System Prompt can be enabled at a time.

| Title | Tone | Temperature | Notes |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Enabled by default |

### Creating a System Prompt

Click the **Create System Prompt** button to define a new AI personality. Configure:

- **Title** — shows in the datagrid.
- **Tone description** — plain-language description of the voice (the model reads this).
- **Max Tokens** — caps response length. Lower values = shorter output and lower cost.
- **Temperature** — 0.0–1.0. Low values keep answers tight and repeatable; high values add variety and flair.
- **Status** — enabling this one disables the currently-active prompt.

::: tip
Only one system prompt can be active at a time. Enabling a new system prompt automatically disables the previously active one. Choose a system prompt that matches the tone you want across all AI-generated content.
:::

## Configuration checklist

Before you start using Magic AI features, make sure you've done all four of these:

1. **Magic AI → Platforms** — Add at least one platform, paste an API key, enable the models you want, and **star one as default**.
2. **Magic AI → Settings** — Enable the capabilities you need (Text / Image / Translation / Agentic PIM) and pick a Platform + Model for each.
3. **Magic AI → Prompts** — Review the shipped prompts or create your own to match your brand voice.
4. **Magic AI → System Prompts** — Confirm the active personality matches the tone you want across the catalog.

Once these four pages are configured, every Magic AI feature — wand icons, the AI Agent Chat, auto-translation, and auto-enrichment — will work without further setup.
