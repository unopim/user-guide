# AI Agent (Agentic PIM)

The **AI Agent** — also called **Agentic PIM** — is a conversational assistant built directly into UnoPim. Instead of clicking through menus and forms, you tell the agent in plain language what you want ("create a T-shirt SKU with these attributes," "find every product missing a description," "mirror the up-sells from SKU A onto SKU B"), and it carries out the task for you by calling real PIM operations under the hood.

## What is the AI Agent?

The AI Agent is **different from Magic AI's wand icons**. Here's the distinction:

| | Magic AI (wand icons) | AI Agent (Agentic PIM) |
|---|---|---|
| **Where you trigger it** | Click the wand on a specific field | Chat button at the bottom-right of any page |
| **Interaction** | One-shot: click, generate, accept | Conversation: multi-turn, with memory |
| **Scope** | One field on one entity | Anything across the catalog — products, categories, attributes, users, roles, channels |
| **How it acts** | Produces content for the field | Calls real PIM tools (create, update, search, import, export, delete, bulk-edit, …) |
| **Output** | Text or an image | Results of tool calls, streamed back into chat |

In short: **Magic AI writes content. The AI Agent takes actions.**

## How does the AI Agent work?

Every chat message flows through this loop:

1. **You send a message** in the AI Agent Chat panel.
2. **The agent interprets your intent** using the Platform/Model configured under **Magic AI → Settings → Agentic PIM**, plus the active System Prompt personality and any facts it has remembered about you.
3. **The agent chooses tools to call** from a library of 30+ PIM tools (see the [AI Agent Chat](./ai-agent-chat.md) page for the full list). For complex requests it chains several tools together in a plan.
4. **Each tool runs against real UnoPim data** — but **only within your ACL permissions**. A tool you don't have permission for silently refuses to execute.
5. **Destructive or low-confidence changes go to the Approval Queue** (if your Change Approval Mode is set that way) so you can review them before they're applied.
6. **The response streams back into the chat** in real time over Server-Sent Events (SSE), so you see progress as the agent thinks and acts.

Because the agent has real tools and real data, it's more powerful than a plain LLM chat — but also more consequential. The Approval Queue, token budget, confidence threshold, and ACL checks exist to keep that power under your control.

## Key Capabilities

### Product Management
Create, update, search, copy, delete, and bulk-edit products without leaving the chat. The agent handles single-product tweaks and catalog-wide sweeps equally well.

### Data Quality & Completeness
Ask the agent to scan the catalog for gaps — missing descriptions, thin SEO fields, products under a completeness threshold — and it produces a structured report plus suggested fixes.

### Auto-Enrichment
Tell the agent to fill in missing descriptions, meta titles, or any other text field, and it generates content that fits your brand voice (via the active System Prompt) and your prompt templates.

### Bulk Operations
Bulk-update attributes, reassign categories, toggle status, or apply transforms (append/prepend/replace) across many SKUs at once — all from one conversational instruction.

### Task Planning
For multi-step work ("clean up the Summer collection: update prices, add a promotional description, and assign the Sale category"), the agent builds a plan, shows you the steps, and executes them in sequence.

### Association Management *(New in v2.0.x)*
Add, remove, list, or mirror related products, up-sells, and cross-sells through conversation — no need to open each product edit page.

### Catalog Insights
Ask for counts, stats, recent activity, or the state of channels, users, and roles. The agent returns structured summaries without you having to navigate to each page.

## Real-Time Streaming (SSE)

The AI Agent streams output using **Server-Sent Events**. As the agent decides what to do and calls each tool, you see the reasoning and results appear progressively in the chat — you don't have to wait for the whole response to finish. This makes long operations feel responsive.

## Conversation Persistence

Chat sessions are **database-backed**. That means:

- Refreshing the page does not clear the conversation.
- Closing and reopening the browser preserves it.
- Within a single session the agent remembers what you've already discussed, so you can refer back ("apply that same change to SKU B too").
- Between sessions, facts you explicitly ask the agent to **remember** (via the internal `RememberFact` tool) carry forward.

See the **Sessions** tab in the chat panel to resume, rename, or delete past conversations.

## ACL Authorization

Every one of the 30+ tools respects your **ACL permissions**. If your admin role cannot delete products, the agent cannot delete products on your behalf — the corresponding tool simply does not execute. This means granting AI Agent access does not widen what any user can do; it only changes *how* they do it.

## Rate Limiting

To keep the system stable and costs predictable, the AI Agent enforces **30 requests per minute per user**. If you exceed the limit, the agent replies with a retry notice and unblocks automatically after the window passes.

## Safety Controls

Three controls keep the agent's autonomy in check — all configured from **Magic AI → Settings → Agentic PIM**:

- **Daily Token Budget** — caps how much the agent can spend in a 24-hour window.
- **Max Agent Steps Per Turn** — caps how many tools it can chain for one user message.
- **Change Approval Mode** — routes risky or low-confidence changes through the [Approval Queue](./approval-queue.md) before they hit your data.

And one more signal worth knowing: the **Confidence Threshold**. If the agent's internal confidence score for a proposed change falls below the threshold, the change is held for manual approval regardless of the approval mode.

::: tip
The AI Agent is most effective when you provide clear, specific instructions. Instead of "fix my products," try "update all products in the Electronics category that are missing a meta description." Specific intent → specific tool calls → faster, cheaper, more accurate results.
:::

## Where to go next

- **[AI Agent Chat](./ai-agent-chat.md)** — How to open, interact with, and manage chat sessions; full list of 30+ tools.
- **[Approval Queue](./approval-queue.md)** — How AI-proposed changes are reviewed, approved, or rejected.
- **[Analytics](./analytics.md)** — Token usage, cost, and activity dashboards for the agent.
- **[Magic AI Configuration](../configuration/magic-ai.md)** — Platforms, Settings, Prompts, and System Prompts that power the agent.
