# Integration

Integrations let other software — an online store, an ERP, a mobile app — read and write your product data through UnoPim's API. Each integration gets its own credentials and its own set of permissions, so every connected system has exactly the access it needs and nothing more.

## Who the API acts as

In UnoPim 3.0 you no longer assign one of your admin users to an integration. When you create an integration, UnoPim automatically creates a dedicated **robot user** behind the scenes:

- The robot user has only the permissions you give the integration — nothing more.
- It cannot log in to the admin panel.
- It does not appear in your user list, so it never gets in the way of managing your real team.

This means a connected system can never do more than you allowed it, and removing a team member never breaks an integration.

::: tip Upgrading from an earlier version?
Integrations created before 3.0 were switched to this model automatically during the upgrade. They keep working with their existing credentials — nothing for you to do.
:::

## Create an integration

**Step 1:** Go to the admin panel, click **Configuration → Integrations** in the sidebar, and click the **Create** button.

   <ImagePopup src="/assets/3.0/images/configuration/configuration.png" alt="The Integrations page with the Create button" />

**Step 2:** Fill in the form:

1) **Name** — a name your team will recognise, like "Shopify connector".

2) **Permissions** — choose **All** or **Custom**:

* **All** — the integration may use everything the API offers.
* **Custom** — pick exactly which areas the integration may access. Prefer this: give each integration only what it needs.

   <ImagePopup src="/assets/3.0/images/configuration/saveIntegration.png" alt="The New Integration form with name and permissions" />

**Step 3:** Save. The **Credentials** section appears on the edit page.

**Step 4:** Click **Generate**. UnoPim creates the credentials the connected system will use: a **Client ID**, a **Secret Key**, an **API Username** and an **API Password**.

   <ImagePopup src="/assets/3.0/images/configuration/apiKey.png" alt="Generated credentials with copy buttons" />

::: warning Credentials are shown only once
The Secret Key and API Password are displayed a single time, right after you generate them. Use the **Copy** buttons and store them somewhere safe — for example your company's password manager. Once you leave the page, UnoPim cannot show them again.
:::

**Step 5:** The integration now appears in the Integrations list, ready to hand over to the team connecting the other system.

## Lost the password?

You do not need to recreate the integration. Open it and click **Regenerate password** — UnoPim issues a new API Password and shows it once, again with a copy button. The old password stops working, so update the connected system right away. The Secret Key can be regenerated the same way with **Re-Generate Secret Key**.

## Changing what an integration may do

Open the integration at any time and adjust its permissions. The change takes effect immediately — the robot user behind the integration is updated with it.
