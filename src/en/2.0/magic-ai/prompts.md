# Magic AI — Prompts

> **Sidebar:** Magic AI → **Prompts**
> **URL:** `/admin/magic-ai/prompts`

The **Prompts** page is where you manage the **instruction templates** that Magic AI sends to the model with every request. A well-written prompt is what makes the difference between generic AI filler and content that fits your brand and catalog.

## What is a Prompt?

A *Prompt* is an instruction that tells the AI *what* to produce for a specific field. It's a short piece of text with optional **placeholders** — tokens like `@name`, `@color`, `@material` — that Magic AI replaces with real values from the entity at generation time.

Example prompt:

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

When this prompt runs against a product named *Air Max 90* with `color = Blue`, it becomes:

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Every prompt is tied to two axes:

- **Entity Type** — which kind of record it applies to: `product` or `category`.
- **Purpose** — what it produces: `Text Generation` or `Image Generation`.

Magic AI picks the matching prompt automatically when you click a wand icon, run auto-enrichment, or ask the AI Agent to generate content.

## What does this page do?

- Lists every prompt template available in the system.
- Lets you **create**, **edit**, and **delete** prompts.
- Shows which entity and purpose each prompt serves, so you can see coverage at a glance.

<ImagePopup src="/assets/2.0/images/magic-ai/prompts.png" alt="Prompts" />

## How prompts are used at generation time

```
User clicks wand icon on a field
           │
           ▼
Magic AI picks the prompt that matches
   entity type (product/category) + purpose (text/image)
           │
           ▼
`@attribute_code` placeholders are replaced
   with the entity's real attribute values
           │
           ▼
Active System Prompt (tone + temperature) is prepended
           │
           ▼
Request sent to the Platform + Model
   configured on Magic AI → Settings
           │
           ▼
Generated content appears in the field
```

## Prompts datagrid

| Column | Description |
|--------|-------------|
| **Title** | The name of the prompt. |
| **Prompt** | The prompt text with placeholders. |
| **Entity Type** | The entity the prompt applies to (`product` or `category`). |
| **Purpose** | Whether the prompt is for `Text Generation` or `Image Generation`. |
| **Created At** | Date the prompt was created. |
| **Updated At** | Date the prompt was last modified. |
| **Actions** | Edit (pencil icon), Delete (trash icon). |

## Creating a Prompt

Click the **Create Prompt** button. Fill in:

- **Title** — How it appears in the list. Use something recognisable like *"Product Description — Long Form"*.
- **Prompt** — The instruction text. Use `@attribute_code` placeholders for any value you want pulled from the entity. You can reference any attribute code defined on the entity's attribute family.
- **Entity Type** — `product` or `category`.
- **Purpose** — `Text Generation` or `Image Generation`.

### Placeholder rules

- Placeholders are prefixed with `@` and use the **attribute code**, not the label. For example, a "Product Color" attribute with code `color` is referenced as `@color`.
- If the attribute has no value on the entity, the placeholder is replaced with an empty string — so write prompts defensively (e.g., `highlighting its @color variant if specified`).
- You can chain multiple placeholders in one prompt; Magic AI expands them all in a single pass.

## Example Prompts

Here are examples of prompts that ship with UnoPim:

| Title | Prompt | Entity Type | Purpose |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Use attribute codes as placeholders (prefixed with `@`) in your prompts. Magic AI replaces them with actual values from the product or category being processed.
:::

## Prompts vs. System Prompts — what's the difference?

- A **Prompt** says *what* to write for a specific field ("write a product description that mentions `@name` and `@color`").
- A **System Prompt** says *how* to write — voice, tone, creativity, length. It applies globally, in front of every prompt.

See the **[System Prompts](./system-prompts.md)** page for the personality layer that sits underneath every prompt.
