# System Settings

**System Settings** is the one place in UnoPim 3.0 where application-wide settings live — the admin's look, outgoing email, single sign-on, measurement precision, Digital Product Passport controls, and more. You no longer hunt through separate configuration screens; it is all on one page.

You find it under **Configuration → System Settings** in the admin sidebar.

<ImagePopup src="/assets/3.0/images/configuration/system-settings.png" alt="The System Settings hub with its sections and search bar" />

## Finding a setting

Type in the **Search settings** box at the top of the page and the sections filter live as you type. Searching for "logo", "SMTP" or "precision" takes you straight to the right place — you do not need to remember which section a setting belongs to.

## What you see depends on your role

The sections shown on the page follow your role's permissions. A colleague may see fewer sections than you, or none at all — that is by design, not an error. Access is granted per section in **Settings → Roles**.

## The sections

### Appearance

Make the admin panel yours: upload your **own logo** and **favicon** (the small icon shown in the browser tab). Click the upload area or simply **drag and drop** an image onto it — the change previews instantly and applies once you save.

<ImagePopup src="/assets/3.0/images/configuration/system-settings-appearance.png" alt="Appearance settings with logo and favicon upload areas" />

### Email

The sender name and address UnoPim uses for outgoing mail, and the SMTP server details it sends through. If notification emails are not arriving, this is the first place to check — the details usually come from your IT team or email provider.

### Microsoft SSO

Let your team log in to UnoPim with their Microsoft work account instead of a separate password. See [Microsoft SSO](./microsoft-sso.md) for the full setup guide.

### Measurement

How precisely UnoPim stores and displays measurement values — for example, how many decimals a converted weight keeps. If your catalogue uses measurement attributes, this is where the rounding behaviour is set.

### Digital Product Passport

The on/off switches for [Digital Product Passports](../passport/index.md): enable the passport feature itself, and enable the publication system that serves the public passport pages. A passport cannot go live while these are off.

### Debug

Lets your technical team turn on detailed troubleshooting output for specific IP addresses only, without exposing it to anyone else.

## System Information

Next to System Settings in the sidebar you will also find **Configuration → System Information**. It is a read-only overview of your installation: the application version, the server, the database, connected services, and every installed package with its version.

You will rarely need it day to day — but when you contact support, this page answers most of the questions they will ask, so have it open or send a screenshot along.

::: tip
Sections can also be added here by extensions you install, so your System Settings page may show more than what is listed above.
:::
