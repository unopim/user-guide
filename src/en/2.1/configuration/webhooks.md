# Webhooks

Webhooks in [UnoPim](https://unopim.com/) let you push real-time product update notifications to an external URL whenever product data changes. Instead of polling the API, your connected systems (e-commerce storefronts, ERPs, marketplaces) receive an HTTP request the moment a product is created, updated, or deleted.

The Webhook Settings page is located at **Configuration → Webhooks** in the admin sidebar.

::: tip Async dispatch
Webhook deliveries now run in the background as a queued **`SendProductWebhook`** job. On product create and update, the `Product` listener dispatches the job to the **`webhooks`** queue (`->onQueue('webhooks')`). Admin save actions return immediately — a slow receiving endpoint can no longer block the UI. Webhook log entries are still recorded once the job completes; the `webhook_logs.user_id` column is now nullable to support system-dispatched deliveries.
:::

## Running the queue worker

Because webhook deliveries are queued on the **`webhooks`** queue, a plain `php artisan queue:work` will **not** drain them — you have to include `webhooks` in the `--queue` list. Most UnoPim installations run a single worker that pulls from every queue the platform uses:

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| Queue | Used by |
|---|---|
| **`webhooks`** | `SendProductWebhook` job  — product create/update notifications. |
| **`system`** | System-level jobs such as translation queues and indexing. |
| **`default`** | Laravel's default queue — anything dispatched without an explicit queue. |
| **`completeness`** | `BulkProductCompletenessJob` and per-product completeness recalculation. |

::: warning
If you run `php artisan queue:work` without `--queue=webhooks,...`, webhook deliveries will sit in the queue forever and the **Logs** tab will appear empty even though admin saves look successful. Always include `webhooks` in the queue list (or run a dedicated worker just for `webhooks`).
:::

::: tip Supervisor / systemd
In production, supervise this command with Supervisor or systemd so the worker restarts automatically on failure. Run `php artisan queue:restart` after every deploy so workers pick up your latest code.
:::

## Retry policy

If your receiving endpoint is down or returns an error, UnoPim does **not** give up after the first attempt. The `SendProductWebhook` job has a built-in retry policy:

| Setting | Value | What it means |
|---|---|---|
| **Tries** | `3` | UnoPim attempts each webhook up to **three times** before marking it failed. |
| **Backoff** | `30 seconds` | After a failed attempt, UnoPim waits **30 seconds** before retrying. |

So in the worst case, a single product save can produce up to **three** delivery attempts spread across roughly a minute. Each attempt records a row in the **Logs** tab so you can see exactly what happened — success on attempt 1 is one log row, two failures plus a success on attempt 3 is three log rows.

::: tip Make your endpoint idempotent
Because the same payload may arrive more than once (e.g. attempt #1 timed out but actually succeeded server-side), build your receiving endpoint so that processing the **same event twice produces the same result**. A common pattern is to dedupe on the `event_id` field of the incoming JSON.
:::

::: warning Worker must be running for retries
The retry logic only fires when a queue worker is actively pulling from the `webhooks` queue. If you stop the worker, retries pause until you restart it — they don't expire.
:::

## General Tab

The **General** tab is where you enable the webhook and configure the destination URL. It uses a two-panel layout.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Webhook Settings" />

### Enable the Webhook and Set the URL

**Step 1:** Navigate to **Configuration → Webhooks** in the admin sidebar. The **General** tab is selected by default.

**Step 2:** In the **General** panel on the left, toggle **Active Webhook** to enable webhook delivery.

**Step 3:** In the **Settings** panel on the right, enter your **Webhook URL** (e.g., `https://example.com/webhook`). This is the endpoint that will receive POST requests whenever product data changes.

**Step 4:** Click the **Save** button at the top-right of the page to apply your configuration.

::: tip
Use a service like [webhook.site](https://webhook.site) during development to inspect the payloads UnoPim sends before building your processing logic.
:::

## Logs Tab

The **Logs** tab displays a record of every webhook request that UnoPim has sent. Use it to monitor delivery status and troubleshoot failures.

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Webhook Logs" />

The log datagrid includes the following columns:

| Column | Description |
|---|---|
| **Id** | Unique identifier for the log entry |
| **Date/Time** | When the webhook request was sent |
| **SKU** | The product SKU that triggered the webhook |
| **User** | The admin user whose action triggered the change |
| **Status** | The HTTP response status code returned by your endpoint |
| **Actions** | View details of the individual log entry |

You can use the **search bar** to search by code, the **Filter** button to narrow results, and the **pagination** controls to browse through entries.

::: tip
If you see non-200 status codes in the logs, check that your endpoint is reachable, returns a 200 OK response, and can handle the incoming JSON payload correctly.
:::

## History Tab

The **History** tab tracks every change made to the webhook configuration itself. Use it to audit when settings were modified and by whom.

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Webhook History" />

The history datagrid includes the following columns:

| Column | Description |
|---|---|
| **Date/Time** | When the configuration change was made |
| **Version** | The version number of the configuration snapshot |
| **User** | The admin user who made the change |
| **Actions** | Click the eye icon to view the full details of what changed |

This is useful for tracking when the webhook URL was updated, when the webhook was enabled or disabled, and which user made the change.

## Quick Setup Summary

1. Go to **Configuration → Webhooks**.
2. On the **General** tab, toggle **Active Webhook** on.
3. Enter your **Webhook URL** in the Settings panel.
4. Click **Save**.
5. Switch to the **Logs** tab to monitor outgoing webhook deliveries and verify successful responses.
6. Switch to the **History** tab to review any past configuration changes.

::: tip
If your receiving endpoint is temporarily down, toggle the Active Webhook off to pause deliveries. Your configuration is preserved and you can re-enable it at any time without re-entering the URL.
:::
