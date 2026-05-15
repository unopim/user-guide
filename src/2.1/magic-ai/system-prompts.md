# Magic AI — System Prompts

> **Sidebar:** Magic AI → **System Prompts**
> **URL:** `/admin/magic-ai/system-prompts`

The **System Prompts** page controls the AI's **personality** — the voice, tone, and generation parameters that sit underneath every content request in UnoPim. Only one System Prompt is active at a time, so your entire catalog keeps a consistent voice.

## What is a System Prompt?

A *System Prompt* is a preamble that Magic AI prepends to every user-facing prompt before sending the request to the model. It sets:

- **Tone** — friendly vs. formal, concise vs. vivid, authoritative vs. casual.
- **Temperature** — how creative or deterministic the output is (0.0 = tight and repeatable, 1.0 = varied and inventive).
- **Max Tokens** — how long the response can be.

If a [**Prompt**](./prompts.md) says *what* to write for a specific field (*"write a product description mentioning `@name` and `@color`"*), a **System Prompt** says *how* it should sound — and that "how" applies to every piece of content the system produces.

## What does this page do?

- Lists the 10 preset System Prompts that ship with UnoPim plus any custom ones you create.
- Lets you **create**, **edit**, **enable/disable**, and **delete** System Prompts.
- Enforces that only one System Prompt is active at a time — enabling a new one automatically disables the previous one.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="System Prompts" />

## Where the active System Prompt is applied
Every AI request in UnoPim flows through a unified pipeline where the active System Prompt is prepended as the personality layer.

Because the active System Prompt applies to **every** AI feature — wand icons, auto-translation, auto-enrichment, and the AI Agent — switching it instantly changes the voice of every AI output across the catalog.

## System Prompts datagrid

| Column | Description |
|--------|-------------|
| **Title** | The name of the system prompt. |
| **Tone** | The conversational tone (e.g., Confident, Vivid, Brief). |
| **Max Tokens** | The maximum number of tokens for AI responses. |
| **Temperature** | The creativity level (lower = more focused, higher = more creative). |
| **Status** | Enabled or Disabled. |
| **Created At** | Date the system prompt was created. |
| **Updated At** | Date the system prompt was last modified. |
| **Actions** | Edit (pencil icon), Delete (trash icon). |

## Preset System Prompts

UnoPim ships with 10 preset System Prompts. Only one can be enabled at a time.

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

## Creating a System Prompt

Click the **Create System Prompt** button. Configure:

- **Title** — The name that appears in the datagrid (e.g., *"Luxury Brand Voice"*).
- **Tone description** — A plain-language description of the voice. The model reads this at request time, so be specific: *"Write in an understated, elegant tone. Use concise sentences. Avoid marketing hyperbole."*
- **Max Tokens** — Caps response length. Lower values produce shorter, cheaper output; higher values give the model more room.
- **Temperature** — 0.0 to 1.0. Low values (0.3–0.5) are best for reliable, repeatable output; high values (0.8–1.0) add variety and flair.
- **Status** — Enabling this one automatically disables the currently-active System Prompt.

## Choosing a temperature

| Temperature | Best for |
|---|---|
| **0.0 – 0.4** | Technical specs, SEO meta fields, reference content — where repeatability matters. |
| **0.5 – 0.7** | General product descriptions, category copy, everyday marketing content. |
| **0.8 – 1.0** | Lifestyle content, storytelling, blog-style copy — where variety and creativity shine. |

::: tip
Only one System Prompt can be active at a time. Enabling a new System Prompt automatically disables the previously active one. Pick a personality that matches the tone you want across the whole catalog — switching mid-flight will make older and newer content feel inconsistent.
:::

## Prompts vs. System Prompts

| | Prompt | System Prompt |
|---|---|---|
| **Scope** | Per field / per purpose | Global across the whole system |
| **Says** | *What* to write | *How* to write |
| **How many active** | As many as you've created | Exactly one |
| **Placeholders** | Yes (`@attribute_code`) | No — written as plain instructions |
| **Typical change cadence** | Often — tuned per attribute, per use case | Rarely — tied to brand voice |

See **[Prompts](./prompts.md)** for the per-field instruction layer that combines with the active System Prompt at generation time.
