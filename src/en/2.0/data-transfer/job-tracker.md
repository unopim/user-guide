# Job Tracker

> **Sidebar:** Data Transfer → **Job Tracker**
> **URL:** `/admin/data-transfer/job-tracker`

The **Job Tracker** is the central monitoring page for every import and export job UnoPim runs. When you click *Import Now* or *Export Now* from a profile, or watch a background job fire off, this is the screen that shows you what's happening right now, what's finished, and what — if anything — went wrong.

## What is the Job Tracker?

A single real-time view of every data-transfer job in the system. Instead of hunting through import and export listings separately, you open one page and see:

- **Every job's status** — queued, processing, complete, failed, cancelled, paused.
- **Live progress** — current step in the pipeline, count of records created / updated / deleted so far.
- **Controls** — pause, resume, or cancel an in-flight job.
- **Logs and artefacts** — download the job log or the exported file once the run finishes.

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Job Tracker" />

## How does it work?

Every import and export runs as a queued job. The moment you launch one, UnoPim:

1. Creates a **job record** with a unique ID, status `Queued`, and the configuration that was submitted.
2. As the queue worker picks it up, the job moves through a fixed **step pipeline** — each step updates the record.
3. The Job Tracker page subscribes to those updates and repaints the progress UI live (no refresh needed).
4. When the job lands in a terminal state (`Complete`, `Failed`, `Cancelled`), the log file and any produced artefacts become downloadable from the tracker.

Because every step writes to the same record, you can navigate away from the tracker mid-run and come back later — the page restores the current state from the database.

## Job statuses

Each row in the tracker shows the job's current status as a coloured chip:

| Status | Meaning |
|---|---|
| **Queued** | Job is in the queue, waiting for a worker. |
| **Validating** / **Validated** | File is being validated, or validation finished successfully and the import is ready to run. |
| **Processing** | A worker has picked it up and the pipeline is advancing. |
| **Paused** | You stopped it mid-run; state is preserved and it can be resumed. |
| **Completed** | All steps finished successfully. |
| **Failed** | A step errored; see the log for details. |
| **Cancelled** | You stopped it permanently; cannot be resumed. |

## Tracker listing columns

The tracker is a datagrid; one row per job:

| Column | Description |
|---|---|
| **ID** | Auto-incremented job ID. Matches the `#n` suffix on notifications (e.g., *Import #15*). |
| **Job** | The profile code (e.g., `product_export`, `category_import`). |
| **Type** | What's being transferred — `Products` or `Categories`. |
| **Job Type** | How the job was triggered — `import`, `export`, or `system` (scheduled, bulk, or AI-Agent-initiated). |
| **Status** | Current state (see table above). |
| **User** | The admin who started the job. |
| **Started at** / **Completed at** | Timestamps. |
| **Actions** | **Eye icon** — opens the job detail page where the step pipeline, live progress, and Pause / Resume / Cancel controls are shown. |

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Job Tracker listing" />

## System jobs and AI-Agent-triggered jobs

Not every entry in the tracker comes from a manual import / export. Jobs fall into three categories, shown in the **Job Type** column:

| Job Type | Where it comes from |
|---|---|
| `import` | A manual run from **Data Transfer → Imports**. |
| `export` | A manual run from **Data Transfer → Exports**, or a **Quick Export** from the Products listing. |
| `system` | A background job — bulk product updates, scheduled catalog quality scans, auto-enrichment runs, or exports the AI Agent produced on your behalf. AI-Agent-initiated jobs show up with names like `ai-agent-export-…`. |

All three share the same lifecycle, status chips, logs, and Pause / Resume / Cancel controls — the only difference is how they were started.

::: tip
If you see a `system` job you don't recognise, click the eye icon to open the detail page. The detail view shows the user that triggered the chain and, for AI-Agent jobs, the chat message that produced it.
:::

## Step pipelines (on the job detail page)

Click the **eye icon** on a row in the tracker to open the job detail page. The detail page visualises the job as a horizontal step pipeline. The exact steps depend on the job type:

### Import pipeline

| Step | Description |
|------|-------------|
| **Queued** | Job is waiting for a worker. |
| **Validating** | File is being validated against the import rules. |
| **Importing** | Records are being created / updated / deleted in the database. |
| **Indexing** | Elasticsearch indexes are being updated so products are searchable. |
| **Complete** | Import finished successfully. |

<ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Import Progress" />

### Export pipeline

| Step | Description |
|------|-------------|
| **Queued** | Job is waiting for a worker. |
| **Validating** | Export configuration is being validated. |
| **Exporting** | Records are being written to the output file. |
| **Complete** | Export finished successfully. |

<ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Export Progress" />

Each completed step renders with a green checkmark. A failed step renders red and the pipeline stops there — subsequent steps are skipped.

## Details shown for each job

Below the pipeline, the tracker shows:

- **Success / Error message** — *"Job completed successfully"* plus total duration, or the specific error that stopped the run (e.g., *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — exact counts of what changed.
- **Total Duration** — how long the job took from queued to terminal state.
- **Download log** — full import/export log for offline review.
- **Download Exported Files** *(exports only)* — the CSV/XLS/XLSX produced by the run.

## Controls

### Pause

During a `Processing` run, click **Pause** to temporarily halt the job. UnoPim freezes the job state at the current batch — no records are lost, nothing rolls back, and the queue worker moves on to other work.

### Resume

For a `Paused` job, click **Resume** to continue from the next batch. The job picks up exactly where it left off — already-processed records are not reprocessed.

### Cancel

Click **Cancel** to stop a job permanently. The job moves to the `Cancelled` state and cannot be resumed. Records already written by earlier steps are **not** rolled back — if you need to undo them, run a cleanup import.

::: tip
Pause is the right choice during peak hours on a large job. Cancel is for *"this import had the wrong file"* situations — once you cancel, you start over from the listing page.
:::

## Opening the Job Tracker

Three common entry points:

1. **From the admin sidebar** — click **Data Transfer → Job Tracker**.
2. **After launching a job** — the *Import Now* / *Export Now* button redirects you straight to the tracker for the job you just started.
3. **From the Dashboard** — the **Data Transfer** widget lists recent jobs and a *"View All Jobs"* link goes to the tracker.

## How the tracker relates to imports and exports

| Page | Role |
|---|---|
| **[Import](./import.md)** | Define an import profile (code, type, file, validation strategy, action mode). |
| **[Export](./export.md)** | Define an export profile (code, type, file format, media). |
| **Job Tracker** (this page) | Monitor the runs those profiles produce — status, progress, logs, artefacts. |

Profiles are *reusable configurations*. Every time you hit *Import Now* or *Export Now* on a profile, a new job is created and surfaced in the Job Tracker.

## Background processing

Jobs run on the Laravel queue worker. If you don't see queued jobs progressing, make sure a worker is running:

```bash
php artisan queue:listen
```

For production, run the worker as a managed service (systemd, Supervisor, …) so it stays up across reboots.
