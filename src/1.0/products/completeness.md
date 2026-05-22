# Product Completeness

Product Completeness provides a visual score and detailed evaluation of product data quality based on your completeness settings. It helps you identify which products are ready for publish and which ones need more information.

## How it Works

UnoPim evaluates product completeness based on the attributes assigned to a product's family. You can configure which attributes are "required" for a product to be considered complete.

### Completeness Score

The score is calculated as a percentage:
`(Number of filled required attributes) / (Total number of required attributes) * 100`

## Completeness Settings

You can define completeness rules in the attribute management section.

1. Navigate to **catalog >> Attributes families**  Select an attribute family.
2. Click on the **Completeness** tab.
3. Mark attributes as **Required in Channels** for completeness evaluation and save.

## Calculation Queue

Completeness calculation jobs are processed via the system queue to ensure real-time updates without affecting performance.

To start the queue worker, use:

```bash
php artisan queue:work --queue=system,default
```

## Viewing Completeness

The completeness score is visible in:

- **Product Datagrid**: As a percentage column.
- **Product Edit Page**: Detailed breakdown of missing attributes.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
