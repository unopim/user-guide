# Export 

Exporting data to save information in files is a common practice for data management, analysis, and sharing. This involves transferring data from a source system into a file format that is suitable for storage, future use, or sharing with others. 

### Steps to add Bulk Export in UnoPim

**Step 1:** Go to the Admin panel of UnoPim and click on **Data Transfer → Exports** in the sidebar, then click the **Create Export** button.

 <ImagePopup src="/assets/2.1/images/data-transfer/export-listing.png" alt="Export Listing" />

**Step 2:** Under general configurations add the below fields.

1) **Code -** Enter the code of your Export process.

2) **Type -** Kindly select the type i.e. (Products, Categories) which you want to Export.

3) **Filters -** Select the format of the file **(CSV, XLS, XLSX)** as per your requirements from the dropdown.

4) **With Media -** Enable or Disable if you need the export data with or without Media. 

Now, click on **Save Export** button. The profile is saved and you return to the Exports listing.

 <ImagePopup src="/assets/2.1/images/data-transfer/create-export-form.png" alt="Create Export Form" />

The create export form has a two-panel layout:
- **General panel (left)** — Code, Type (Products/Categories)
- **Filters panel (right)** — File Format (CSV/XLS/XLSX dropdown), With Media (toggle)

**Step 3:** From the export listing, click the **Export** action icon (play icon) on the row you want to run. This opens the execution page, which shows a summary of the export configuration:

- **Export Profile** — The export code
- **File Format** — CSV, XLS, or XLSX
- **With Media** — Yes or No

Click the **Export Now** button. UnoPim queues the job and redirects you to the **Job Tracker** detail view for that job.

## Export Tracker

**Step 4:** The Job Tracker detail page shows the step pipeline in real time. Each step lights up with a green checkmark as it completes, and when the job finishes you get a success banner plus record counts and download links:

 <ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Export detail page — step pipeline" />

The tracker shows a **step pipeline** with visual progress indicators:

| Step | Description |
|------|-------------|
| **Queued** | Job is in the queue waiting to be processed |
| **Validating** | Export configuration is being validated |
| **Exporting** | Records are being written to the export file |
| **Complete** | Export finished successfully |

Each step shows a green checkmark when completed. Below the pipeline you can see:
- **Success message** — "Job completed successfully" with the total duration
- **Records Created / Updated / Deleted** — Exact counts of records exported
- **Total Duration** — How long the export took
- **Download log** — Download the full export log file
- **Download Exported Files** button — Click to download the generated file

### Pause, Resume, and Cancel Controls

During an active export, **job control buttons** appear in the tracker:

- **Pause** — Temporarily halt an in-progress export. The job state is preserved.
- **Resume** — Continue a paused export from where it left off.
- **Cancel** — Stop an export entirely. Cancelled jobs cannot be resumed.

::: tip
The pause and resume feature is especially useful for large exports. You can pause a job during peak hours and resume it during off-peak times.
:::

## Quick Product Export

UnoPim supports **dynamic management of quick product export jobs**. You can quickly export selected products directly from the product listing:

1. Navigate to **Catalog → Products**
2. Select the products you want to export (or export all)
3. Click on **Quick Export** button in the top-right
4. Choose the format (CSV, XLS, XLSX)
5. The export will be processed and downloaded

::: tip
For large exports, the system uses an **optimized export pipeline** with eager loading and increased batch size (up to 200) for better performance. Category exports have been optimized to avoid memory overload.
:::

So by the above steps you can easily create Export Data in UnoPim.
