# Agentic PIM

> **Sidebar:** **Agentic PIM**
> **Settings live at:** Magic AI → Settings → *Agentic PIM* section (`/admin/configuration/general/magic_ai`)

**Agentic PIM** is UnoPim's flagship AI capability — the umbrella that covers every autonomous or semi-autonomous AI workflow the product runs on your behalf. From one settings card under **Magic AI → Settings**, you control:

- The **AI Agent Chat** panel (the floating star icon at the bottom-right of every admin page).
- The **Auto-Enrichment** background job that fills missing product fields after creation.
- The **Catalog Quality Monitor** scheduled scan.
- The **Confidence Threshold** and **Change Approval Mode** that decide when AI-proposed changes reach your data vs. land in the Approval Queue.
- The **Daily Token Budget** that caps combined spend across all of the above.

## What does Agentic PIM do?

Think of Agentic PIM as a small team of AI workers watching your catalog:

| Worker | Trigger | Outcome |
|---|---|---|
| **AI Agent Chat** | You type an instruction in the chat panel. | Calls one or more of 30+ PIM tools to carry out your request. |
| **Auto-Enrichment** | A new product is created (manually or via import). | Fills in missing descriptions, SEO metadata, etc. |
| **Catalog Quality Monitor** | Scheduled (background). | Sweeps the catalog for thin or inconsistent data and surfaces it in Needs Attention. |
| **Approval Queue** | Any AI worker proposes a change. | Holds or applies the change based on your approval mode + confidence threshold. |

All four share the same Platform, Model, Prompt, System Prompt, and token budget — configured once from **Magic AI → Settings**.

## How does Agentic PIM work?

Every Agentic PIM action follows the same five-step pipeline:

```
1. Trigger
   ├─ Chat message   (AI Agent Chat)
   ├─ Product create  (Auto-Enrichment)
   ├─ Schedule tick   (Catalog Quality Monitor)
   └─ API action      (anything calling the agent over HTTP)
        │
        ▼
2. Compose context
   - Entity data (+ @attribute_code placeholders expanded)
   - Matching Prompt from Magic AI → Prompts
   - Active System Prompt from Magic AI → System Prompts
   - Remembered facts (RememberFact / RecallMemory)
        │
        ▼
3. Reason (respecting Max Agent Steps Per Turn)
   - LLM picks one or more tools to call
   - Each tool runs against real UnoPim data
   - Only within the caller's ACL permissions
        │
        ▼
4. Decide how to apply the result
   - Confidence ≥ threshold + approval mode allows → apply directly
   - Below threshold OR Manual Review mode → route to Approval Queue
        │
        ▼
5. Respond
   - Chat: stream back over Server-Sent Events
   - Background: write to DB (possibly via approval queue)
   - Record token usage against the Daily Token Budget
```

This pipeline runs on top of the unified **LaravelAiAdapter**, so switching Platforms or Models under Magic AI Settings immediately changes every Agentic PIM worker's behaviour.

## Configuration — the Agentic PIM settings

Open **Magic AI → Settings** and expand the **Agentic PIM** card. The fields are:

| Field | What it does |
|---|---|
| **Enable AI Agent Chat** | Master switch for the floating chat panel. When off, the star icon at the bottom-right is hidden and no user can converse with the agent. Auto-Enrichment and the Catalog Quality Monitor still run. |
| **Max Agent Steps Per Turn** | How many tool calls the agent may chain for a single trigger. Dropdown presets rather than raw numbers (e.g., **`3 (Fast)`**). Higher = more autonomy per turn; lower = tighter control and cheaper tokens. |
| **Daily Token Budget** | Global daily cap on tokens spent by Agentic PIM (e.g., `500000`). Shared across chat, enrichment, and monitoring. When the cap is hit, every AI worker pauses until the next day. |
| **Auto-Enrichment on Product Create** | When enabled, every newly created product is queued for background enrichment — missing descriptions, SEO fields, etc. are filled in automatically. |
| **Catalog Quality Monitor** | Runs a scheduled AI sweep that reports thin, missing, or inconsistent catalog data into the Dashboard's **Needs Attention** section. |
| **Confidence Threshold** | Minimum confidence score (default **0.7 — Balanced**) required before a proposed change is applied without review. Below the threshold, the change is held in the Approval Queue regardless of the approval mode. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Governs how AI-proposed changes land in your data. Defaults to *"Confirm & apply (propose values, ask to confirm, then execute)"*. |

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings — Agentic PIM section" />

## Recommended setup sequence

Agentic PIM has a lot of knobs. A typical rollout looks like this:

1. **Day 0 — cautious start.** Enable AI Agent Chat only. Set *Max Agent Steps Per Turn* to the lowest preset, Daily Token Budget to a conservative number, and Change Approval Mode to **Manual review**.
2. **Day 1-3 — observe in Analytics.** Watch token usage and which tools the agent actually calls. Review every change in the Approval Queue.
3. **Day 4+ — loosen selectively.** Raise the token budget once you understand the spend. Move trusted workflows (e.g., filling meta descriptions in a specific family) to **Confirm & apply** or **Auto-apply**. Leave risky workflows in Manual review.
4. **Week 2 — turn on background workers.** Enable **Auto-Enrichment on Product Create** first (single-entity, predictable cost). Enable **Catalog Quality Monitor** once you're happy with enrichment quality.

## How Agentic PIM relates to other docs

| If you want to… | Read |
|---|---|
| Learn the chat UI in detail | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Review, approve, or reject proposed changes | **[Approval Queue](../ai-agent/approval-queue.md)** |
| See token usage, costs, and activity | **[Analytics](../ai-agent/analytics.md)** |
| Configure Platforms, Prompts, System Prompts | **[Magic AI Configuration](../configuration/magic-ai.md)** |
| Fine-tune per-capability routing (Text / Image / Translation) | **[Magic AI → Settings](../magic-ai/settings.md)** |

## Safety controls at a glance

Four layers stack up to keep Agentic PIM's autonomy in check:

| Layer | Configured at | What it protects |
|---|---|---|
| **ACL permissions** | Settings → Roles | Stops the agent from doing anything the caller's role can't do. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Caps total spend across all Agentic PIM workers per day. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Caps how many tools one trigger can chain. |
| **Confidence Threshold + Change Approval Mode + Approval Queue** | Magic AI → Settings → Agentic PIM | Holds risky or low-confidence writes for review. |

None of these require re-deploying or restarting — save the Magic AI settings page and every Agentic PIM worker picks up the new values on its next run.
