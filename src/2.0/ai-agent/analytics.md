# AI Agent Analytics

The **AI Agent Analytics** dashboard shows you how the agent is being used and what it's costing. Because every AI request consumes tokens (and tokens cost money), this dashboard is how you keep the bill predictable, spot unusual usage patterns, and tune the daily budget.

## What does the Analytics dashboard do?

It surfaces three things in one place:

1. **What's happening right now** — today's token consumption vs. the daily budget, and how much budget is left.
2. **What has happened historically** — conversation counts, tool calls, and token spend per day, per user, and per operation type.
3. **What it has cost** — token usage translated into an estimated dollar figure based on your provider's pricing.

Use it to answer questions like *"Who is using the agent most heavily this week?"*, *"Which operation types are the biggest token sinks?"*, and *"Am I about to hit my daily cap?"*

## How does it work?

Every time a user sends a message to the AI Agent Chat, UnoPim records:

- **Who** sent the message (the admin user).
- **Which tools** the agent called to respond.
- **How many tokens** were consumed (prompt + completion, for every tool call).
- **When** the turn happened.

The dashboard aggregates these records to produce the counters, charts, and user-level breakdowns. Records persist as long as your session/log retention policy allows, so historical trend analysis is available out-of-the-box.

### Where the daily budget comes from

The **Daily Token Budget** is a single global number set under **Magic AI → Settings → Agentic PIM → Daily Token Budget** (e.g., `500000`). Every tool call the agent makes decrements the running total for the day. When the total hits zero, the agent replies with a budget-exhausted notice to any user that tries to send a message. At midnight (server time), the counter resets.

The dashboard shows **three derived figures** on top of that raw counter: today's usage, remaining budget, and the utilization percentage.

## Analytics Dashboard Overview

The dashboard gives you a centralized view of all AI Agent activity. From it, you can monitor:

- **Total tokens consumed** over a selected time period.
- **Number of conversations** initiated by each admin user.
- **Number of tool calls** executed by the agent.
- **Daily and weekly usage trends** displayed in visual charts.

<!-- TODO: Add screenshot -->

The dashboard is accessible from the admin panel and is available to users with the appropriate permissions.

## Token Budget Tracking

The AI Agent operates on a **daily token budget** — a single global cap shared across all admin users. The dashboard displays:

- **Daily token usage** — How many tokens have been consumed today across all users.
- **Remaining budget** — Tokens still available for the current day.
- **Budget utilization percentage** — Visual indicator (e.g., a progress bar) of how much of the daily budget has been used.

When the daily token budget is exhausted, the AI Agent pauses for the rest of the day. It notifies users that the limit has been reached and resumes normal operation the following day when the budget resets.

::: tip
Keep an eye on the daily utilization if your team leans on auto-enrichment or bulk operations. Those tasks consume more tokens per turn than simple lookup queries.
:::

## Monitoring AI Usage and Costs

The dashboard helps you understand the cost implications of the agent. Key metrics include:

- **Token consumption per user** — Which team members are using the agent most heavily.
- **Token consumption per operation type** — Which types of operations (product creation, auto-enrichment, data quality scans, image generation, etc.) consume the most tokens.
- **Cost estimation** — Tokens translated into a dollar estimate based on the pricing of your selected provider/model.

<!-- TODO: Add screenshot -->

This information is useful for budgeting, for spotting runaway usage, and for deciding whether to assign a cheaper model to a particular capability (e.g., use a lighter model for translation and keep the premium model for content generation).

## Configuring Daily Token Budgets

To set or adjust the daily token budget:

1. Navigate to **Magic AI → Settings** in the admin panel.
2. Open the **Agentic PIM** section.
3. Set the **Daily Token Budget** field (e.g., `500000`).
4. Click **Save Configuration** to apply.

<!-- TODO: Add screenshot -->

The budget applies globally across all admin users. Once combined usage reaches the daily limit, the agent pauses until midnight.

::: tip
Start with a conservative daily budget and raise it gradually as you learn your team's usage patterns. This prevents surprise spikes during rollout.
:::

## Viewing Usage History and Trends

The **Usage History** section lets you review past activity over customizable date ranges. It provides:

- **Daily usage breakdown** — Day-by-day view of token consumption and conversation counts.
- **Weekly and monthly summaries** — Aggregated views for longer-term trend analysis.
- **Peak usage identification** — Highlights days or periods with unusually high usage so you can investigate before they become a problem.

<!-- TODO: Add screenshot -->

Use this historical data to inform budget allocation, spot power users, and identify operations that might benefit from a cheaper model.

## How analytics ties to the other agent controls

The analytics dashboard is the observability layer that sits on top of the controls you configured under **Magic AI → Settings → Agentic PIM**. Together they form a feedback loop:

```
Configure budget + approval mode    ←──┐
             │                         │
             ▼                         │
   Users chat with the agent           │
             │                         │
             ▼                         │
   Analytics records usage             │
             │                         │
             ▼                         │
   You review trends and costs    ────┘
```

A typical rollout is: start with a conservative Daily Token Budget and Manual Review approval, watch the analytics for a week, raise the budget where it's safe, and move trusted workflows to Auto-Approve based on what the dashboard tells you.
