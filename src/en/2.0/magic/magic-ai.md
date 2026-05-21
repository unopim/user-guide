# Magic AI

**Magic AI** is UnoPim's AI content layer. It generates product and category content (text + images), translates values across locales, and powers the Agentic PIM assistant — all using any of 10+ supported AI providers behind the scenes.

## What does Magic AI do?

Once you've configured Magic AI (see [Magic AI Configuration](../configuration/magic-ai.md)), it surfaces across the admin UI in five places:

| Surface | What it produces | How you trigger it |
|---|---|---|
| **Wand icon on text fields** | Names, descriptions, SEO meta fields, category copy | Click the wand next to a supported field |
| **Wand icon on image/gallery fields** | Product imagery generated from a text description | Click the wand next to an image attribute |
| **Auto-translation on product save** | Translated values for every target locale | Automatic when enabled; also via a bulk command |
| **AI-Powered Search** | Semantic search results ranked by meaning, not just keywords | Ordinary search box |
| **AI Agent Chat (Agentic PIM)** | Results of 30+ tool calls | Chat button bottom-right |

All five share the same provider connections, the same prompt library, and the same system personality — so you configure Magic AI once and every feature picks it up.

## How does Magic AI work?

Every Magic AI action follows the same pipeline:

1. **Trigger** — click a wand icon, save a product, run a translation command, or send a chat message.
2. **Context assembly** — UnoPim combines the target entity's current data, the relevant **Prompt** template (with `@attribute` placeholders expanded), and the active **System Prompt** personality.
3. **Dispatch** — the assembled request goes through the unified `LaravelAiAdapter` to the Platform and Model you selected for that capability under **Magic AI → Settings**.
4. **Response** — the provider returns text, an image, or a translation.
5. **Apply** — the result is inserted into the field (text/image), written to locale columns (translation), or streamed into the chat (agent).

The unified adapter means you can **swap providers without touching your workflow** — switch the default Platform under Magic AI → Settings and every feature uses the new one on the next request.

## Content Generation

With Magic AI, you can effortlessly generate engaging **product and category** content — names, descriptions, SEO metadata, and more.

<ImagePopup src="/assets/2.0/images/magic-ai/content.png" alt="Magic AI content generation" />

Instead of writing every description by hand, Magic AI composes them for you from the data the product already has (name, category, key attributes), the prompt template you've configured, and the active system personality.

### Supported AI Providers

UnoPim provides native support for multiple AI providers through its **Multi-Platform MagicAI** system. You can configure one or more providers with encrypted credential storage for secure API key management.

**A) For Content — UnoPim supports these AI providers:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – Claude model family (Opus, Sonnet, Haiku) for text generation and reasoning
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
All providers are managed through a unified **LaravelAiAdapter** implementation. You can switch providers without changing your workflow.
:::

## How to Generate Text Content with AI

Follow these steps to generate text content for your products using Magic AI:

1. Navigate to **Catalog → Products** and click **Edit** on a product.
2. Find a text field that supports AI generation (Name, Short Description, Description, Meta Title, Meta Description, etc.).
3. Click the **Magic AI icon** (sparkle/wand icon) next to the field.
4. The AI generates content based on:
   - The configured **Prompt** for that field type (from **Magic AI → Prompts**).
   - The product's existing data (name, category, attributes) — which is substituted in where the prompt uses `@attribute_code` placeholders.
   - The active **System Prompt** personality (tone, temperature, max tokens).
5. The generated content appears in the field.
6. Review and edit the generated content as needed.
7. Click **Save Product** to keep the changes.

You can also generate content for categories by opening a category edit page and using the wand icon on supported fields.

::: tip
Configure your preferred AI provider and model in **Magic AI → Settings → Text Generation** before using this feature. Pick a model that balances quality and cost for your needs.
:::

## How to Generate Images with AI

Follow these steps to generate product images using Magic AI:

1. Navigate to **Catalog → Products** and click **Edit** on a product.
2. Find an **Image** or **Gallery** attribute.
3. Click the **Magic AI icon** next to the image field.
4. Enter a description of the image you want (or accept the default Image prompt from **Magic AI → Prompts**).
5. The AI generates a product image matching the description.
6. Review the generated image.
7. Accept it to attach it to the product.
8. Click **Save Product**.

::: tip
Image generation requires a Platform whose provider supports images (OpenAI with DALL-E, Gemini, or xAI). Configure it under **Magic AI → Settings → Image Generation**.
:::

## Custom Prompts

Magic AI supports **Custom Prompts** for content generation. A prompt is an instruction template that tells the model *what* to produce — for example, `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Every placeholder (`@name`, `@color`, …) is replaced with the real value from the entity at generation time.

You can create prompts for specific use cases such as:
- "Generate a professional product description for an electronics store"
- "Write SEO-optimized content with keywords for fashion products"
- "Create a brief 50-word summary suitable for mobile displays"

Manage prompts from **Magic AI → Prompts**. Each prompt belongs to an **entity type** (product / category) and a **purpose** (text / image).

<!-- TODO: Add screenshot of custom prompts configuration -->

## System Prompt Management

**System Prompts** configure the AI's overall **personality** — voice, tone, and generation parameters (temperature, max tokens) — and apply across every Magic AI feature. Only **one** system prompt is active at any time, so your entire catalog keeps a consistent voice.

Manage them from **Magic AI → System Prompts**. See the [System Prompts section of Magic AI Configuration](../configuration/magic-ai.md#system-prompts) for the full list of 10 preset personalities that ship with UnoPim.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI includes an **image generation** feature powered by DALL-E (OpenAI) and other image-capable providers. You can create product images directly from a text description:

1. Navigate to a product edit page.
2. Click the **Magic AI** icon near the image / gallery field.
3. Enter a description of the image you want to generate.
4. Select the model (e.g., `dall-e-2` or `dall-e-3`).
5. Click **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-Translation

Magic AI provides **automatic translation** of product data. When enabled, saving a product triggers translation of all locale-specific fields (name, descriptions, meta fields, …) into every configured target locale. Your catalog stays multilingual without manual copy-paste.

### Translation Settings UI

The Translation section lives on the Magic AI Settings page at **Magic AI → Settings**. The fields:

| Field | What it does |
|---|---|
| **Enabled** | Master switch for AI-powered translation. |
| **Default Platform** | The AI platform used for translations. You can pick a different provider than your content generation platform — useful for optimizing cost or speed. |
| **Translation Model** | The specific model used for translation tasks. Independent of the text-generation model. |
| **Replace Existing Value** | On: overwrite existing locale values. Off: fill only empty locales, preserving manual translations. |
| **Source Channel** | The channel whose values are the translation source-of-truth. |
| **Target Channel** | The channel that receives the translated values. |
| **Source Locale** | The locale to translate from (e.g., `en_US`). |
| **Target Locales** | Multi-select — every locale to auto-populate. |

::: tip
Use **Replace Existing Value** carefully. Off preserves any manual translations you've already made; on regenerates everything from scratch.
:::

### How Auto-Translation Works

When auto-translation is enabled and a product is created or updated:

1. UnoPim reads the source-locale values for every locale-specific field.
2. For each target locale, it calls the translation Platform/Model with the source value and target language.
3. It writes the translated values into the target locale columns, respecting the channel/locale assignments so only locales tied to the target channel are populated.

If **Replace Existing Value** is off, the translation step skips fields that already have a locale value — preserving your manual edits.

### Manual Translation via Locale Switcher

You can also translate manually: open a product, switch to a target locale in the **locale switcher** at the top of the edit form, and either type translations or invoke the wand icon on each field. Attributes that support per-locale values show a locale badge (e.g., `EN_US`) so you know which locale you're editing.

### AI-Powered Translation Command

For bulk translation of existing data, UnoPim v2.0 ships an **AI-Powered Translation Command** that uses Magic AI to fill in missing locale keys across all 32 non-English locales. It auto-translated approximately **18 000 previously untranslated keys** across 7 packages during the v2.0 release itself — the same command is available for your catalog.

::: tip
For high-volume translation workloads, assign a faster/cheaper provider to translation and keep a premium provider for content generation. Magic AI lets you split them per capability.
:::

## AI-Powered Search

UnoPim v2.0 introduces **AI-Powered Search** that uses embedding similarity and semantic ranking to deliver more intelligent results. Instead of matching keywords character-by-character, it understands the meaning behind the query.

Under the hood:
- **Embedding Similarity Service** — converts product data into vector embeddings so queries and products can be compared semantically.
- **Semantic Ranking Service** — reorders results by how closely they match the query's intent, not just its words.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-Enrichment

**Auto-Enrichment** automatically fills in missing product information — descriptions, meta titles, meta descriptions, and other text fields flagged as incomplete. When enabled under **Magic AI → Settings → Agentic PIM**, Magic AI analyzes each product and generates values for the empty fields.

This is particularly useful for:
- Bulk-imported products that lack descriptions.
- Products missing SEO metadata.
- Incomplete records flagged by the completeness system.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Enriched values can be routed through the [Approval Queue](../ai-agent/approval-queue.md) if you want to review them before they go live.

## AI in Agentic PIM Chat

The AI Agent Chat reuses Magic AI's **Generate Content** and **Generate Image** capabilities as tools. You can ask for content generation in plain language without leaving the chat — and the agent uses the same Platforms, Prompts, and System Prompt you configured, so results match the rest of the catalog.

Example chat prompts:

- "Generate a product description for SKU SHOE-100"
- "Create an image for product Nike Air Max"

See the [AI Agent Chat](../ai-agent/ai-agent-chat.md) page for the full tool list and interaction patterns.

## Magic AI vs. the AI Agent — at a glance

| | Magic AI wand icons | AI Agent (Agentic PIM) |
|---|---|---|
| **Trigger** | Click a wand next to a field | Chat button; conversational |
| **Scope** | One field on one entity at a time | Anything across the catalog |
| **Output** | Text / image for the field | Tool results streamed into chat |
| **Multi-step** | No — one request, one response | Yes — can plan and chain tool calls |
| **Uses Platforms/Prompts/System Prompts?** | Yes | Yes |
| **Has its own safety layer?** | Field-level preview before save | Approval Queue, Confidence Threshold, Token Budget, Max Steps |

They're two interfaces over the **same Magic AI core** — configure Magic AI once under **Magic AI → Platforms / Settings / Prompts / System Prompts**, and both sets of features light up.
