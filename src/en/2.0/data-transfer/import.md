# Import

Bulk import is a feature that allows users to import large quantities of data into a system quickly and efficiently. It simplifies the process and saves time by not having to add each piece of information one by one.

The feature works differently for each system and has a vast variety of use cases across many industries as well as [UnoPim](https://unopim.com/).

### Steps to add Bulk Import in UnoPim

**Step 1:** Go to the Admin panel of UnoPim and click on **Data Transfer → Imports** in the sidebar then click the **Create Import** button.

 <ImagePopup src="/assets/2.0/images/data-transfer/import-listing.png" alt="Import Listing" />

**Step 2:** Under general configurations add the below fields:

1) **Code -** Enter the code of your Import process.

2) **Type -** Kindly select the type i.e. (Products, Categories) which you want to import.

3) **File / Images –** a combined panel covering both the data file and any product images the file references:
   - **File \*** – drag a **CSV / XLSX / XLS** file onto the upload area (*"Click to upload or drag and drop"*) or click to browse. Allowed file types are shown under the label.
   - **Download {Type} Sample CSV** – link that downloads the sample file for the Type you selected (e.g., *"Download Categories Sample CSV"* when Type is Categories). Use it to confirm the expected column layout before you upload your own file.
   - **Images → Path** – the two-part path UnoPim uses to locate product images:
     - The prefix is locked to `storage/app/public/`.
     - The editable suffix defaults to something like `import-images/my-products`.
     - Click **Upload Images to set Path** to upload an images folder; UnoPim saves it under the prefix and fills the suffix in for you automatically.
   - Helper text under the field: *"Place images in `storage/app/public/`. For images at `storage/app/public/import-images`, include `import-images/` in the path and use only the file name in the import file."*

4) **Action –** Select Create/Update or Delete from the Settings panel to control whether matching rows are upserted or removed.

5) **Validation Strategy –** Choose **Skip Errors** or **Stop on Errors** to decide how the importer reacts when a row fails validation.

6) **Allowed Errors –** Maximum number of row-level errors the import tolerates before halting. Default: **`10`**.

7) **Field Separator –** The character that separates columns in the CSV file. Default: **`;`** (semicolon). Only used for CSV files.

Now, click on **Save Import** button.  

 <ImagePopup src="/assets/2.0/images/data-transfer/create-import-form.png" alt="Create Import Form" />

The create import form has a two-panel layout:
- **General panel (left)** — Code, Type (Products/Categories), plus a combined **File / Images** block with the file upload area, the *Download {Type} Sample CSV* link, and the **Images → Path** field with its *Upload Images to set Path* button.
- **Settings panel (right)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (default `10`), Field Separator (default `;`).

### Drag-and-Drop File Upload

UnoPim v2.0 supports **Drag-and-Drop File Upload** for import files. The upload area displays **"Click to upload or drag and drop"** with supported file types (CSV, XLSX, XLS). You can drag a file directly from your file manager onto the dashed upload area.

### Dynamic Import Job Filters

Import jobs support **dynamic filters** that allow you to configure advanced filtering conditions for your import data. This helps you control exactly which records get imported based on specific criteria.

**Step 3:** From the import listing, click the **Import** action icon (play icon) on the row of the import you want to run. This opens the execution page, which shows a summary of the import configuration:

- **Import Profile** — The import code
- **File Path** — The uploaded file location
- **Action Mode** — Create/Update or Delete

Click the **Import Now** button to start processing. UnoPim queues the job and redirects you to the **Job Tracker** detail view for that job.

## Import/Export Tracker

**Step 4:** The Job Tracker detail page shows the step pipeline in real time. If validation catches errors, the page surfaces them with row numbers and the exact field that failed, plus a **Download Full Report** button:

 <ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Import detail page — validation errors" />

The tracker shows a **step pipeline** with visual progress indicators:

| Step | Description |
|------|-------------|
| **Queued** | Job is in the queue waiting to be processed |
| **Validating** | File is being validated against import rules |
| **Importing** | Records are being created/updated in the database |
| **Indexing** | Elasticsearch indexes are being updated |
| **Complete** | Import finished successfully |

Each step shows a green checkmark when completed. Below the pipeline you can see:
- **Success/Error message** — Whether the job completed or failed, with details
- **Records Created / Updated / Deleted** — Exact counts of what changed
- **Total Duration** — How long the import took
- **Download log** — Download the full import log file
- **Error details** — If validation fails, you see the specific errors (e.g., "Required columns not found: code")

### Pause, Resume, and Cancel Controls

During an active import, **job control buttons** appear in the tracker:

- **Pause** — Temporarily halt an in-progress import. The job state is preserved and can be resumed later.
- **Resume** — Continue a paused import from where it left off.
- **Cancel** — Stop an import entirely. Cancelled jobs cannot be resumed.

::: tip
The pause and resume feature is especially useful for large imports. You can pause a job during peak hours and resume it during off-peak times.
:::

Also you can run the below command in the root of your UnoPim to process the import queue:

```bash
php artisan queue:listen
```

So by the above steps you can easily create Import Data in UnoPim.
