# Notifications

Notifications in [UnoPim](https://unopim.com/) provide a real-time, in-app alerting system that keeps administrators informed about important events and background processes. Introduced in **v0.2.0**, the notification system works alongside optional email notifications to ensure you never miss critical updates.

Whether it's the completion of a bulk import, a failed export job, or a product change, notifications help you stay on top of everything happening in your PIM without needing to constantly check each section manually.

### Accessing Notifications

To access your notifications, click the **Bell Icon** in the top navigation bar of the Admin panel. This opens the notification panel where you can view all recent alerts.

 <ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Notification Panel" />

### Types of Notifications

UnoPim sends notifications for various system events. Below are the main categories:

**1) Import/Export Job Status Updates**

Whenever you run a bulk import or export job, UnoPim automatically sends a notification when the job is completed, failed, or requires attention. This allows you to monitor long-running data transfer operations without staying on the job tracker page.

- **Completed** — The import or export job finished successfully.
- **Failed** — The job encountered errors and could not complete.
- **Completed with Errors** — The job finished but some records were skipped due to validation issues.

**2) Product Changes**

Notifications can alert you when significant product data modifications occur, such as bulk updates or changes made through the API. This is useful when multiple team members are working on the product catalog simultaneously.

**3) System Notifications**

General system-level alerts, such as scheduled maintenance reminders or important configuration changes, are also delivered through the notification panel.

### Notification Panel Features

Click the **bell icon** in the top-right of the header to open the panel. A **green dot** on the bell indicates unread notifications.

<ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Notifications panel" />

The panel lists recent notifications. Each entry shows:

- **Title** — job type + sequential number, e.g., `Import #15`, `Export #1`. The number matches the **ID** column in the [Job Tracker](../data-transfer/job-tracker.md), so you can click through and find the exact run.
- **Body** — the profile code + terminal state, e.g., *"Import 'Test' completed"* — useful for telling apart multiple runs of the same profile.
- **Relative timestamp** — e.g., *"4 days ago"*.

Two actions sit at the bottom of the panel:

- **View All** — opens the full notifications page, where you can browse, filter, and manage individual entries.
- **Mark as Read** — a single bulk action that clears the unread state for every notification visible in the panel.

::: tip
Per-notification *Mark as Read / Unread* and *Clear Notifications* controls now live on the full notifications page (via **View All**). The panel itself keeps only the bulk *Mark as Read* and *View All* actions so it stays scannable.
:::

### Email Notifications

In addition to in-app notifications, UnoPim supports email notifications for critical events. When enabled, the system sends an email to the administrator's registered email address alongside the in-app notification.

**How Email Notifications Work**

Email notifications are sent automatically for key events such as import/export job completions and failures. This ensures that even if you are not actively logged into the Admin panel, you still receive timely updates.

**Configuration**

Email delivery is configured at the infrastructure level via your UnoPim `.env` file — set `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_FROM_ADDRESS` to match your mail provider (SMTP, Mailgun, Postmark, etc.). UnoPim uses standard Laravel mail drivers and picks up the settings automatically on application boot.

::: tip
Test your mail configuration end-to-end before relying on notification emails. Trigger a low-stakes event (e.g., a small import) and confirm the email arrives; if it doesn't, check your Laravel log (`storage/logs/laravel.log`) for mailer errors.
:::

By using both in-app and email notifications together, you can ensure complete visibility into all important events happening within your UnoPim instance.
