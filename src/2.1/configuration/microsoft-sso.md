# Microsoft SSO

Microsoft SSO lets your team sign in to UnoPim with their existing Microsoft work account instead of a separate UnoPim password. Once it is switched on, a **Sign in with Microsoft** button appears on the login page.

This page walks through the whole setup from scratch. No prior Azure experience is assumed.

## What you get

- Your team signs in with the Microsoft account they already use.
- One less password for people to manage and for you to reset.
- Removing someone from your Microsoft directory stops them signing in to UnoPim.
- The normal email and password login keeps working alongside it.

::: warning Signing in is not the same as getting access
Microsoft only confirms **who** somebody is. It does not decide what they are allowed to do in UnoPim.

Every person who signs in with Microsoft must already have a UnoPim user account with the **same email address** and a role. If that account does not exist, the login is refused. You will create one in **Step 8**.
:::

## Before you begin

You need three things from Microsoft: a **Tenant ID**, a **Client ID**, and a **Client Secret**. Steps 1 to 5 explain how to get them. You also need a Microsoft directory that you are an administrator of.

---

## Step 1 — Make sure you have a directory you control

This trips up most first-timers, so check it first.

If you sign in to the Azure portal with a personal Microsoft account (outlook.com, hotmail.com, gmail.com), Microsoft may put you in a placeholder directory called **"Microsoft Services"**. That directory belongs to Microsoft. You cannot add users or applications to it.

Open [portal.azure.com](https://portal.azure.com) and go to **Microsoft Entra ID → Overview**. Compare what you see:

| What you see | Meaning |
| --- | --- |
| Primary domain is a long code like `f8cdef31-a31e-…` | Not usable. Continue below. |
| Your role shows **User** | Not usable. Continue below. |
| Primary domain ends in `.onmicrosoft.com` and your role is **Global Administrator** | You are ready. Go to Step 2. |

**If it is not usable**, get a proper directory one of these ways:

- **Sign up for Azure** at [azure.microsoft.com/free](https://azure.microsoft.com/free). This creates a **Default Directory** where you are the administrator. A card is required for identity verification, but the directory itself is free.
- **Ask your IT team.** If your company already uses Microsoft 365, a directory exists. Ask an administrator to complete Steps 3 to 7 for you.

::: tip Do not try to create a new tenant
The **Manage tenants → Create** button now asks for a paid licence. You almost certainly do not need it — signing up for Azure already gives you a **Default Directory** that works.
:::

---

## Step 2 — Copy the Redirect URI from UnoPim

Microsoft needs to know where to send people back to after they sign in. UnoPim tells you the exact address.

In UnoPim, go to **Configuration → System Settings → Microsoft SSO**.

The **Redirect URI** box at the top is read-only. Click the copy icon at its right-hand edge to copy the value.

It will look something like this:

```
https://your-unopim-site.com/admin/login/sso/microsoft/callback
```

::: danger Copy it, do not type it
Microsoft compares this address letter for letter. A missing `s` in `https`, a wrong port number, or an extra `/` at the end will make the login fail. Always copy it from this screen.
:::

---

## Step 3 — Register UnoPim in Microsoft

1. In [portal.azure.com](https://portal.azure.com), go to **Microsoft Entra ID → App registrations**.
2. Click **+ New registration**.
3. **Name** — type something you will recognise later, such as `UnoPim`.
4. **Supported account types** — choose **Accounts in this organizational directory only (Single tenant)**.
5. **Redirect URI** — set the dropdown to **Web** and paste the address you copied in Step 2.
6. Click **Register**.

---

## Step 4 — Copy the Client ID and Tenant ID

Microsoft now shows an **Overview** page with the first two values you need.

| On the Microsoft page | Paste into UnoPim as |
| --- | --- |
| Application (client) ID | Client ID |
| Directory (tenant) ID | Tenant ID |

Copy both somewhere safe for a moment.

---

## Step 5 — Create the Client Secret

1. In the left menu of your app registration, click **Certificates & secrets**.
2. On the **Client secrets** tab, click **+ New client secret**.
3. Type a description, choose an expiry period, and click **Add**.
4. Copy the value in the **Value** column straight away.

::: danger You only get one chance to copy this
Copy the **Value** column, not the **Secret ID**. As soon as you leave this page the value is hidden forever and you have to create a new secret.

Also note the expiry date in your calendar. When a secret expires, Microsoft sign-in simply stops working with no warning.
:::

---

## Step 6 — Approve the permission

1. In the left menu, click **API permissions**.
2. You should see **Microsoft Graph → User.Read**. If it is missing, click **+ Add a permission → Microsoft Graph → Delegated permissions**, tick **User.Read**, and confirm.
3. Click **Grant admin consent for &lt;your directory&gt;**, then **Yes**.

This lets UnoPim read the signed-in person's name and email address. Approving it centrally means your team is not asked to approve anything themselves.

---

## Step 7 — Create a Microsoft user to test with

Skip this if the people who will use UnoPim already have accounts in your directory.

1. Go to **Microsoft Entra ID → Users → All users**.
2. Click **+ New user → Create new user**.
3. **User principal name** — type a short name such as `pimtest`, then pick your `.onmicrosoft.com` domain from the dropdown next to it. The full address becomes something like `pimtest@yourcompany.onmicrosoft.com`.
4. **Display name** — for example `PIM Test`.
5. Choose **Auto-generate password** and copy the password shown, or set your own.
6. Click **Review + create**, then **Create**.

The first time this person signs in, Microsoft asks them to change their password. That is normal.

---

## Step 8 — Create the matching user in UnoPim

**Do not skip this step.** Without it, everything else is configured correctly and the login will still be refused.

1. In UnoPim go to **Settings → Users → Create**.
2. **Email** — must be exactly the same as the Microsoft account, for example `pimtest@yourcompany.onmicrosoft.com`.
3. **Status** — Active.
4. **Role** — choose a role that actually gives access to something.
5. **Password** — set anything. Microsoft sign-in never uses it.
6. Save.

::: warning Give the role real permissions
If the role has no permissions, the person signs in successfully and is immediately signed out again with a "not authorised" message, because there is no page they are allowed to open.

Also remember that ticking a section in the role is not always enough — tick the specific pages inside it as well.
:::

Repeat this step for every person who should be able to sign in with Microsoft.

---

## Step 9 — Enter the details in UnoPim

Go to **Configuration → System Settings → Microsoft SSO** and fill in:

| Field | What to enter |
| --- | --- |
| Enable Microsoft SSO | Turn on |
| Tenant ID | Directory (tenant) ID from Step 4. Your `.onmicrosoft.com` domain also works. |
| Client ID | Application (client) ID from Step 4 |
| Client Secret | The secret **Value** from Step 5 |

Click **Save**.

The **Sign in with Microsoft** button appears on the login page as soon as all four are filled in. If any one of them is empty, the button stays hidden.

---

## Step 10 — Try it

1. Sign out, or open the login page in a private browser window.
2. Click **Sign in with Microsoft**.
3. Sign in with the Microsoft account from Step 7 and change the password if prompted.
4. You are taken into the UnoPim admin panel.

---

## If something goes wrong

### "Please check your credentials and try again" — and the email is already filled in

This is the most common message, and it is actually a good sign. It means Microsoft accepted the sign-in and sent the email address back to UnoPim. UnoPim then refused it.

Almost always, the reason is that **no UnoPim user exists with that email address**. Go back to Step 8 and compare the address character by character with the one filled into the form.

Other possible reasons:

- The UnoPim user exists but is an **API user**, which cannot sign in.
- The email address was previously used by a different person in your Microsoft directory. UnoPim refuses this on purpose, so the new person does not inherit the old person's access.

::: tip Why the message is so vague
The message is intentionally the same for every failure. A more specific message would let an outsider work out which email addresses are UnoPim administrators by trying them one at a time.
:::

### "Your account is not activated"

The UnoPim user exists but is switched off. Go to **Settings → Users**, edit the user, and set Status to Active.

### "Selected user account does not exist in tenant …"

The Microsoft account you signed in with does not belong to the directory that owns the app registration.

- If the message mentions **Microsoft Services**, you were signing in with a personal Microsoft account. Go back to Step 1.
- If it names your own directory, sign in with a user from Step 7, or invite the outside account as a guest under **Users → New user → Invite external user**.

### The Azure portal will not let you sign in

The Azure and Entra portals do not accept personal Microsoft accounts. You need an account that belongs to a directory. Completing the Azure sign-up in Step 1 creates one for you.

### "Reply URL does not match" or a redirect error

The address registered in Microsoft does not exactly match the one UnoPim sends. Copy the Redirect URI from Step 2 again and compare it with what is listed under **Authentication** in your app registration.

If your UnoPim site address has changed since you set this up, the Redirect URI has changed too and must be updated in Microsoft.

### "The signed in user is not assigned to a role for the application"

You have turned on **Assignment required?** for the application, and this person is not on the list. Go to **Microsoft Entra ID → Enterprise applications → your app → Users and groups** and add them, or add them to the group you assigned.

### It used to work and now it does not

The client secret has most likely expired. Go to **Certificates & secrets**, create a new one, and paste the new **Value** into UnoPim.

### Signing in works, then immediately signs out

The role assigned to that user in UnoPim does not grant access to any page. Edit the role and give it real permissions.

### The button does not appear on the login page

All four fields must be filled in — the toggle, Tenant ID, Client ID, and Client Secret. If any one is blank, the button is hidden.

---

## Only some of your staff use UnoPim

A common situation: your company has 500 people in Microsoft, but only 50 work in the PIM.

You do not have to do anything for this. Everyone can click **Sign in with Microsoft**, but only people who also have a UnoPim user account get in. The other 450 are turned away with the "check your credentials" message. Your UnoPim user list is the gate.

If you would rather stop people earlier — before they even come back to UnoPim — you can tell Microsoft to allow only certain people to use the application:

1. Go to **Microsoft Entra ID → Enterprise applications** and open the app you registered.
2. Open **Properties** and set **Assignment required?** to **Yes**.
3. Open **Users and groups** and add only the people, or a group, who should use UnoPim.

Anyone not on that list now sees a Microsoft error instead of reaching UnoPim at all.

::: tip Use a group
Assigning a group such as `PIM Users` rather than individuals means adding someone to that group is all it takes to grant access, and removing them takes it away. Your IT team can manage it without touching UnoPim.
:::

You still need to create the matching UnoPim user from Step 8 either way.

---

## Day-to-day management

**Adding someone new.** Create their Microsoft account in your directory, then create a UnoPim user with the same email address and a role. Both are required.

**Removing someone.** Disable them in your Microsoft directory, and also set their UnoPim user to Inactive. Either one alone blocks Microsoft sign-in, but doing both is safest.

**Changing what someone can do.** Change their role in UnoPim under **Settings → Users**. Microsoft has no say in this.

**Someone changed their email address in Microsoft.** They can keep signing in. UnoPim remembers the person, not the address, after their first successful sign-in.

**Rotating the secret.** Create a new client secret in Microsoft before the old one expires, paste the new value into UnoPim, then delete the old secret in Microsoft.
