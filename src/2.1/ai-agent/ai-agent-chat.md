# AI Agent Chat

The **AI Agent Chat** is the conversational UI for Agentic PIM. From one chat window you can manage products, categories, attributes, data quality, and bulk operations — just by describing what you need.

## What does the AI Agent Chat do?

The chat panel is a single entry point for **30+ PIM tools**. When you type a message, the agent:

- Interprets your intent.
- Picks one or more tools to call (create product, search, bulk-edit, generate content, manage associations, etc.).
- Runs the tools against real UnoPim data, inside your ACL permissions.
- Streams the results back into the chat in real time.

Anything you can do from the admin UI, you can do by asking for it in the chat — and the agent can chain several steps into one request, so tasks that would take many clicks collapse into a single instruction.

## How does it work?

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-Step Workflow" />

The Platform and Model used for this reasoning loop are configured under **Magic AI → Settings → Agentic PIM**. The personality (tone, temperature, max tokens) comes from the active **System Prompt**.


## Opening the AI Agent Chat

Click the floating **star icon** at the bottom-right of any admin page. The chat panel slides in from the right edge with the header **"Agenting PIM — AI-powered operations"**.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

A settings gear ⚙ in the panel header jumps to `/admin/ai-agent/settings` (which resolves to **Magic AI → Settings**), where you can configure platforms, models, and budgets.

The panel has three tabs:
- **Capabilities** — Browse the 30+ tools the agent can call.
- **Chat** — Conversational interface. When empty, it shows *"How can I help with your catalog?"* under a star icon and the header **General Chat**.
- **Sessions** — Your past conversations. A numeric badge on the tab shows how many sessions are unread.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-chat-tab.png" alt="AI Agent Chat Tab" />

Once opened, the chat panel slides in from the right side of the screen. You can start typing your request immediately.

## Capabilities Tab

The Capabilities tab lists every tool the agent can invoke. Each tool represents a specific PIM operation that you can trigger through natural language — you don't call tools by name, you describe what you want and the agent picks the right one.

| # | Tool | What it does |
|---|------|-------------|
| 1 | **Create from Image** | Upload photos to auto-create products |
| 2 | **Update Products** | Update attributes/status by SKU |
| 3 | **Search Products** | Find products by SKU, name, or status |
| 4 | **Find Similar** | Find similar products using AI |
| 5 | **Generate Content** | AI-generated name, description & SEO |
| 6 | **Generate Image** | Create product images from text |
| 7 | **Edit Product Image** | Background removal, enhance & retouch |
| 8 | **Assign Categories** | Assign category paths to products |
| 9 | **List Attributes** | View family attributes & options |
| 10 | **Export Products** | Generate CSV/XLSX export |
| 11 | **Bulk Import CSV** | Upload CSV/XLSX to batch update — runs as a background queued job  |
| 12 | **Delete Products** | Remove products by SKU list |
| 13 | **Create Category** | Add new categories to the catalog |
| 14 | **Category Tree** | View full category hierarchy |
| 15 | **Create Attribute** | Add new product attributes |
| 16 | **Manage Options** | Add or list attribute options |
| 17 | **Attribute Families** | List, create, or inspect families |
| 18 | **Bulk Edit** | Mass update products by rules |
| 19 | **Catalog Summary** | Stats, counts & recent activity |
| 20 | **Channels** | View channels, locales & currencies |
| 21 | **Users** | View admin users & details |
| 22 | **Roles** | View roles & permissions |
| 23 | **Ask Anything** | Free-form PIM assistant |
| 24 | **Manage Associations** | Add, remove, or list related/up-sell/cross-sell products via natural language  |

::: tip
Every tool respects your ACL permissions. If your admin role doesn't allow a particular operation, the corresponding tool silently does not execute — the agent can never bypass your role.
:::

## Bulk Import CSV — now queued

The **Bulk Import CSV** tool previously processed the entire file inline, inside the HTTP request. That worked for a few hundred rows, but timed out on larger uploads. In v2.1.0 the tool extracts the heavy lifting into a dedicated queued job — **`ImportProductsJob`** — so you can reliably push **10,000+ products** in a single AI Agent message.

### How it works

1. You ask the agent something like *"import these products"* and attach a CSV/XLSX.
2. The agent validates the file, opens a **Job Track** record (visible from the **Job Tracker** page), and dispatches one `ImportProductsJob` to the queue.
3. The job processes every row, recording results in a `JobTrackBatch`. The original HTTP request returns immediately with a job ID — you can keep chatting while the import runs.
4. The agent reports progress in the chat as the job advances. When it finishes, you get a summary (`created`, `updated`, errors).

### Import modes

The agent can run the import in one of three modes — it picks based on your wording, but you can be explicit:

| Mode | Behaviour | When to use |
|---|---|---|
| **`create_or_update`** *(default)* | Updates existing SKUs, creates new ones. | Mixed-batch imports. |
| **`create_only`** | Only creates new SKUs — existing rows are **skipped**. | First-time loads where you want to avoid touching existing data. |
| **`update_only`** | Only updates existing SKUs — new SKUs are **skipped**. | Bulk corrections on a known SKU set. |

### Job behaviour

| Setting | Value | Notes |
|---|---|---|
| **Timeout** | `3600` seconds (1 hour) | Generous ceiling for very large imports. |
| **Tries** | `1` | The job is **not** retried on failure — partial results are recorded and the job is marked `failed`. Re-run the import from the AI Agent after you've fixed the source file. |
| **Queue** | `default` | Make sure your `queue:work --queue=` list includes `default` (it does in the documented [worker command](../configuration/webhooks#running-the-queue-worker)). |

### What gets recorded

Every import dispatches into the standard UnoPim **Data Transfer pipeline**, so you can monitor it the same way you monitor a normal CSV import:

- **Job Tracker** → see this import in the list with state `processing` → `completed`.
- **Per-batch summary** → `processed_rows`, `created`, `updated`, errors.
- **Errors** → first 10 row-level errors are saved with the format `Row N (SKU: X): <message>` so you can fix the source file.

::: tip Why `$tries = 1`?
Bulk imports are not safely retryable from the start — re-running a half-finished import would re-process rows that already succeeded, plus double-process anything that failed mid-row. UnoPim deliberately bails after one attempt so you can decide how to recover. Use the error list in the Job Tracker to fix the source rows and re-import.
:::

## Chat Interface Layout

The chat interface consists of the following areas:

- **Message Area** — Displays the conversation history between you and the AI Agent, including responses, tool outputs, and status updates.
- **Input Field** — A text input at the bottom where you type your commands or questions. Keyboard hint: **Enter** to send, **Shift+Enter** for a new line.
- **Attachment (paperclip) icon** — Attach a file (image, CSV) to the message.
- **Platform dropdown** — Pick which configured AI Platform handles this specific message (see below).
- **Model dropdown** — Pick which model on that platform handles this specific message.
- **Send button** — Submits your message to the AI Agent for processing.

### Choosing a Platform or Model for a single message

The chat input bar lets you override the default platform and model **per message**, without changing the global defaults under **Magic AI → Settings**.

| Dropdown | What it shows | Source |
|---|---|---|
| **Platform** | Every enabled platform (e.g., *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Models enabled on the selected platform (e.g., *gpt-5.4*). | Models ticked on that platform |

The override lasts for one message; the next message reverts to whatever the dropdowns are currently showing.

**When this is useful:**

- **Cost control** — route a simple lookup to a cheap, fast model while keeping a premium model for enrichment.
- **Quality experiments** — send the same prompt twice with different models and compare.
- **Provider isolation** — route sensitive prompts to a self-hosted Ollama platform without touching the global setting.

If you want a change to stick for every user and every feature, edit **Magic AI → Settings → Agentic PIM** instead.

## Types of Commands

Below are the main categories of things you can ask the agent to do. Because the agent chooses tools from your intent, you don't need to remember tool names — just describe the outcome you want.

### Product Operations

Create, update, search, and bulk-edit products.

**Example prompts:**
- "Create a simple product with SKU TSHIRT-001 and name Blue T-Shirt"
- "Update the price of product SKU LAPTOP-PRO to 999.99"
- "Search for all products in the Footwear category"
- "Bulk update status to enabled for all products with SKU starting with SHOE"

### Category Management

Manage the category tree.

**Example prompts:**
- "Show me all root categories"
- "List products assigned to the Electronics category"

### Data Quality Reports

Scan your catalog for missing or incomplete data and receive structured reports you can act on.

**Example prompts:**
- "Run a data quality scan on all products in the Clothing category"
- "Which products are missing a description?"
- "Show me products with completeness score below 50%"

### Product Verification & Quality Scoring

Verify individual products against quality criteria.

**Example prompts:**
- "Check the completeness of product SKU JACKET-100"
- "Verify data quality for all products in the Default family"

### Auto-Enrichment

Have the agent fill in missing content — descriptions, SEO fields, etc. The agent uses whatever the product already has (name, category, attributes) to produce content that fits.

**Example prompts:**
- "Generate a short description for product SKU SNEAKER-200"
- "Auto-fill missing meta descriptions for all products in the Accessories category"
- "Enrich the SEO fields for product SKU WATCH-050"

::: tip
Auto-enrichment works best when the product already has basic information like a name and category. The agent leans on that context to produce coherent, on-brand content.
:::

### Task Planning

For multi-step work, the agent builds a plan, shows it to you, and executes it step-by-step.

**Example prompts:**
- "Plan and execute: update all products in the Summer collection to have a 20% discount and a new promotional description"
- "Create a task plan to review and enrich all products with missing images"

### Bulk Transformations

Apply transforms (append, prepend, replace) across many SKUs in one shot.

**Example prompts:**
- "Bulk update all products with status disabled to enabled"
- "Change the category of all products with SKU prefix LEGACY to the Archive category"

### Manage Associations

Introduced in **v2.0.x**, the **Manage Associations** tool lets you add, remove, or list related products, up-sells, and cross-sells through conversation — no need to open each product individually.

**Example prompts:**
- "Add SKU BELT-100 as a cross-sell on SKU JEANS-200"
- "Remove all up-sell products from SKU PHONE-CASE-BLACK"
- "List cross-sell products linked to SKU LAPTOP-PRO"
- "Mirror the related products of SKU SHIRT-001 onto SKU SHIRT-002"

### Agent Memory System

The agent has a small long-term memory that persists across sessions. It uses two internal tools:

- **RememberFact** — Stores a fact or preference you tell it to remember.
- **RecallMemory** — Retrieves remembered facts when they're relevant to the current request.

**Example prompts:**
- "Remember that our standard product description format starts with the brand name"
- "Recall what I told you about our naming convention"

### Content Feedback Loop

When the agent generates content, you can nudge it with feedback and it will adjust future outputs in the same session — and, if strong enough, remember the preference for next time.

**Example prompts:**
- "That description is too long, make it shorter and more direct"
- "I prefer a formal tone for product descriptions"
- "Rewrite that but focus more on the material and durability"

## Real-Time Streaming Responses

Responses stream into the chat in real time using **Server-Sent Events (SSE)**. You see the agent's reasoning, tool calls, and results appear progressively instead of waiting for the whole response. For long operations (a 200-product bulk update, for instance) this lets you watch progress as it happens.

## Sessions Tab

The Sessions tab lists every past chat. Each entry shows the session title, number of messages, and last-active date.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-sessions.png" alt="AI Agent Sessions" />

### Managing Sessions

- **+ New Session** — Start a clean conversation with no prior context. Useful when you switch to a different task.
- **Delete session** — Trash-icon button permanently removes a session. Irreversible.
- **Resume a session** — Click any entry to reopen it. Full history and context restore, so the agent picks up exactly where you left off.

### Session Persistence

Sessions are database-backed, which means:

- **Page refreshes** do not clear your conversation.
- **Browser sessions** are preserved — close the tab, come back later, resume.
- **Context is preserved within a session**, so the agent remembers what you discussed earlier in the same thread ("apply the same change to SKU B").
- Sessions persist **across logins**, so your history is always available when you sign back in.

::: tip
Start a new session when switching to a different task. Focused sessions produce better tool choices because the agent isn't juggling unrelated context.
:::
