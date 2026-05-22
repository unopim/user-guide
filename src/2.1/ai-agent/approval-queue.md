# Approval Queue

The **Approval Queue** is the safety net that sits between the AI Agent's proposed changes and your live catalog. When the agent wants to modify product data — change a description, update a price, assign a category, etc. — the change can be held for you to review before it takes effect. You approve what looks right, reject what doesn't, and nothing reaches the catalog unless you say so.

## What does the Approval Queue do?

- **Intercepts** AI-proposed writes before they are committed to the database.
- **Shows you a side-by-side diff** of the current value vs. what the agent wants to change it to.
- **Lets you approve or reject** individual changes, or batches of them, one-by-one or at once.
- **Records** every decision for auditing.

The Approval Queue applies only to **writes originating from the AI Agent**. Changes made directly by admins through the normal UI are not routed through the queue.

## How does the Approval Queue work?

1. **The AI Agent proposes a change** — generated from a chat instruction, an auto-enrichment run, or the Catalog Quality Monitor.
2. **UnoPim checks the Change Approval Mode** (configured in **Magic AI → Settings → Agentic PIM**):
   - **Auto-apply** — safe / high-confidence changes go straight to the database.
   - **Confirm & apply** (default) — the agent proposes values, asks for confirmation in the chat, then executes.
   - **Manual review** — every change is routed to the Approval Queue, no exceptions.
3. **UnoPim checks the Confidence Threshold** — if the agent's confidence in the proposed change is below the threshold (default 0.7, "Balanced"), the change is held for review regardless of the approval mode.
4. **Held changes land in the Approval Queue** with a side-by-side diff, timestamp, and the chat turn that produced them.
5. **You approve or reject** each entry. Approved changes commit immediately; rejected changes are dropped.
6. **The decision is logged** so you can audit later.

## Configurable Modes

The Approval Queue supports two broad modes of operation, selected under **Magic AI → Settings → Agentic PIM**:

### Auto-Approve Mode

Changes go straight to the database without manual review. Best for routine, trusted operations — for example, a well-tuned auto-enrichment workflow where you've already validated the prompt and personality. Faster, but no second pair of eyes.

### Manual Review Mode

Every proposed change is held for explicit approval. This is the recommended starting point when rolling out the AI Agent, especially for bulk operations or content generation. You trade a little speed for full oversight.

::: tip
Start in manual review while you learn how the agent behaves on your catalog. Once you trust a specific workflow (for example, filling in meta descriptions for a specific family), you can switch to auto-approve for that class of operations.
:::

## Reviewing Pending Changes

When changes are awaiting your review, they appear in the Approval Queue. Each pending change displays:

- **The product or entity affected** — which product, category, or record the change applies to.
- **The field being modified** — the specific attribute or field that will be updated.
- **The current value** — what the field contains right now.
- **The proposed value** — what the AI Agent wants to change it to.
- **The timestamp** — when the agent generated the proposal.

This side-by-side layout makes it easy to spot whether the proposed value is accurate and on-brand before it lands.

## Approving Changes

Click the **Approve** button on a pending entry to commit that change. The change hits the database immediately and the entry is removed from the queue.

You can also select multiple entries and approve them in bulk — useful when you've reviewed a batch of similar edits (for example, 20 meta descriptions all following the same pattern).

## Rejecting Changes

Click **Reject** to discard a proposal. The change is dropped and never reaches your catalog. Rejecting does not affect the agent's behaviour on future requests — you can reject freely without worrying about training side-effects.

## When Confirmation is Required

Certain classes of change always prompt for explicit confirmation, regardless of the approval mode you chose:

- **Image changes between requests** — if the agent proposes changes to product images or media assets, you'll be asked to confirm.
- **Bulk modifications** — large-scale changes affecting many products trigger a confirmation step to prevent accidental mass updates.
- **Destructive operations** — anything that removes or overwrites a significant amount of data asks for explicit confirmation.

These guards run even in Auto-Approve mode. They're there to stop "one stray prompt" from doing catalog-wide damage.

::: tip
The Approval Queue pairs especially well with auto-enrichment. Let the agent generate descriptions and SEO content in the background, then review everything from one place before it's published.
:::

## How the queue interacts with other safety controls

The Approval Queue is one of four safeguards on the AI Agent. Together they form a defence-in-depth model:

| Safeguard | Configured at | What it protects |
|---|---|---|
| **ACL permissions** | Settings → Roles | Stops the agent from doing things your role cannot do. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Caps total AI spend per day. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Caps how many tools a single message can chain. |
| **Change Approval Mode + Confidence Threshold + Approval Queue** | Magic AI → Settings → Agentic PIM | Holds risky or low-confidence writes for review. |

The queue is specifically about **write-time oversight** — once a change has been approved and written, it behaves like any other catalog edit and follows the normal audit/history trail.
