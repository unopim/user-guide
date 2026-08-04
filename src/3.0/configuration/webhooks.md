# Webhooks

Webhooks let UnoPim notify your other systems the moment product data changes. Instead of another system asking UnoPim "has anything changed?" over and over, UnoPim sends a message to a web address you choose, right when the change happens — for example to an online store, an ERP, or a marketplace connector.

In UnoPim 3.0 you can create **as many webhooks as you need**. Each webhook has its own destination address, its own list of events it listens to, and its own delivery log.

You find them under **Configuration → Webhooks** in the admin sidebar.

<ImagePopup src="/assets/3.0/images/configuration/webhooks-list.png" alt="The Webhooks list showing several webhooks with their URL, events and status" />

::: tip Upgrading from an earlier version?
If you configured the single webhook that existed before 3.0, you do not have to set anything up again. Your old settings were moved over automatically during the upgrade and now appear as a webhook named **Default** in the list.
:::

## Create a webhook

1. Go to **Configuration → Webhooks**.
2. Click **Create Webhook**. A small window opens.
3. Enter a **Name** — something your team will recognise, like "Online store" or "ERP sync".
4. Enter the **URL** — the web address of the system that should receive the messages. Ask the team that runs that system for it.
5. Pick the **Events** the webhook should listen to, for example **Product Created** and **Product Updated**.
6. Click **Save**.

That is all a webhook needs to start working. You can refine it any time by opening it from the list.

::: tip
Not sure what your receiving system will get? Point a test webhook at a free inspection service such as [webhook.site](https://webhook.site) and save a product — you will see exactly what UnoPim sends.
:::

## Fine-tune a webhook

Open a webhook from the list to reach its edit page. Besides the name, URL and events, you can set:

| Setting | What it does |
|---|---|
| **Active** | Turns the webhook on or off. Switch it off to pause deliveries — for example while the receiving system is under maintenance. Everything else is kept, so you can switch it back on later. |
| **Signing Secret** | A secret your receiving system uses to verify the message really came from UnoPim. Share it only with the team that runs the receiving system. Once saved, the page shows "A secret is already set" — leave the field blank to keep it. |
| **Custom Headers** | Extra information sent with every message, if the receiving system asks for it (for example an access key it expects). |
| **Test Connection** | Click **Send Test** to check the URL is reachable before you rely on it. |

<ImagePopup src="/assets/3.0/images/configuration/webhook-edit.png" alt="Editing a webhook: name, URL, events, signing secret and settings" />

## Delivery logs

Every message UnoPim sends is recorded. Click **Logs** on the Webhooks page to see all deliveries, or open a specific webhook to see only its own.

Each log entry shows:

| Column | Description |
|---|---|
| **Webhook** | Which webhook sent the message |
| **Event** | What triggered it, for example Product Updated |
| **SKU** | The product concerned |
| **Date/Time** | When it was sent |
| **User** | Whose change triggered it |
| **Status** | Whether the delivery worked: **Success**, **Failed**, **Server Error** or **Timeout/Error** |

Use the grid's search and **Filter** controls to narrow the list — for example, only failed deliveries for one webhook since yesterday.

Click the eye icon on a log entry to open **Webhook Log Details**. There you can inspect the **Sent Payload** (exactly what UnoPim sent) and the **Response** (what the receiving system answered). This is usually all your technical team needs to work out why a delivery failed.

<ImagePopup src="/assets/3.0/images/configuration/webhook-logs.png" alt="Webhook delivery logs with status, event and filters" />

::: warning Deliveries run in the background
Webhook messages are sent by UnoPim's background workers, not while you wait. If the Logs page stays empty even though products are being saved, ask your technical team to check that the background workers are running.
:::

## Automatic log cleanup

Delivery logs do not pile up forever. UnoPim automatically removes log entries older than 30 days. Your technical team can change how long logs are kept, or turn the cleanup off entirely.

## Who can manage webhooks

Access is controlled through roles, just like the rest of UnoPim. In **Settings → Roles**, a role can be granted:

- **Webhook** — see the webhook list, plus **Create**, **Edit** and **Delete** rights individually.
- **Logs** — view delivery logs, open their details, and delete them.

So you can, for example, let a support team read the logs without letting them change any webhook.
