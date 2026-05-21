# Completitud del Producto

La Completitud del Producto proporciona una puntuación visual y una evaluación detallada de la calidad de los datos del producto basándose en sus ajustes de completitud. Le ayuda a identificar qué productos están listos para publicar y cuáles necesitan más información.

## Cómo Funciona

UnoPim evalúa la completitud del producto basándose en los atributos asignados a la familia de un producto. Puede configurar qué atributos son "requeridos" para que un producto sea considerado completo.

### Puntuación de Completitud

La puntuación se calcula como un porcentaje:
`(Número de atributos requeridos rellenados) / (Total de atributos requeridos) * 100`

## Ajustes de Completitud

Puede definir las reglas de completitud en la sección de gestión de atributos.

1. Navegue a **catalog >> Attributes families**. Seleccione una familia de atributos.
2. Haga clic en la pestaña **Completeness**.
3. Marque los atributos como **Required in Channels** para la evaluación de completitud y guarde.

## Cola de Cálculo

Los trabajos de cálculo de completitud se procesan a través de la cola del sistema para garantizar actualizaciones en tiempo real sin afectar el rendimiento.

Para iniciar el queue worker, use:

```bash
php artisan queue:work --queue=system,default
```

## Visualización de la Completitud

La puntuación de completitud es visible en:

- **Datagrid de Producto**: Como una columna porcentual.
- **Página de Edición del Producto**: Desglose detallado de los atributos faltantes.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
