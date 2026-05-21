# Cola de aprobación

La **Cola de aprobación** es la red de seguridad que se sitúa entre los cambios propuestos por el AI Agent y su catálogo en vivo. Cuando el agente quiere modificar datos del producto — cambiar una descripción, actualizar un precio, asignar una categoría, etc. — el cambio puede retenerse para que usted lo revise antes de que surta efecto. Aprueba lo que parece correcto, rechaza lo que no, y nada llega al catálogo a menos que usted lo diga.

## ¿Qué hace la Cola de aprobación?

- **Intercepta** las escrituras propuestas por la IA antes de que se confirmen en la base de datos.
- **Le muestra un diff lado a lado** del valor actual frente al que el agente quiere cambiarlo.
- **Le permite aprobar o rechazar** cambios individuales, o lotes de ellos, uno por uno o todos a la vez.
- **Registra** cada decisión para auditoría.

La Cola de aprobación se aplica únicamente a **escrituras originadas por el AI Agent**. Los cambios realizados directamente por administradores a través de la UI normal no se enrutan a través de la cola.

## ¿Cómo funciona la Cola de aprobación?

1. **El AI Agent propone un cambio** — generado a partir de una instrucción de chat, una ejecución de auto-enriquecimiento o el Catalog Quality Monitor.
2. **UnoPim comprueba el Change Approval Mode** (configurado en **Magic AI → Ajustes → Agentic PIM**):
   - **Auto-apply** — los cambios seguros / de alta confianza van directamente a la base de datos.
   - **Confirm & apply** (por defecto) — el agente propone valores, pide confirmación en el chat, luego ejecuta.
   - **Manual review** — cada cambio se enruta a la Cola de aprobación, sin excepciones.
3. **UnoPim comprueba el Confidence Threshold** — si la confianza del agente en el cambio propuesto está por debajo del umbral (por defecto 0.7, "Balanced"), el cambio se retiene para revisión independientemente del modo de aprobación.
4. **Los cambios retenidos aterrizan en la Cola de aprobación** con un diff lado a lado, marca de tiempo y el turno de chat que los produjo.
5. **Aprueba o rechaza** cada entrada. Los cambios aprobados se confirman inmediatamente; los rechazados se descartan.
6. **La decisión se registra** para que pueda auditar después.

## Modos Configurables

La Cola de aprobación admite dos modos amplios de operación, seleccionados bajo **Magic AI → Ajustes → Agentic PIM**:

### Modo Auto-Approve

Los cambios van directamente a la base de datos sin revisión manual. Lo mejor para operaciones rutinarias y de confianza — por ejemplo, un flujo de trabajo de auto-enriquecimiento bien afinado donde ya ha validado el prompt y la personalidad. Más rápido, pero sin un segundo par de ojos.

### Modo Manual Review

Cada cambio propuesto se retiene para aprobación explícita. Este es el punto de partida recomendado al desplegar el AI Agent, especialmente para operaciones masivas o generación de contenido. Sacrifica un poco de velocidad por supervisión completa.

::: tip
Comience en revisión manual mientras aprende cómo se comporta el agente en su catálogo. Una vez que confíe en un flujo de trabajo específico (por ejemplo, rellenar meta descripciones para una familia específica), puede cambiar a auto-approve para esa clase de operaciones.
:::

## Revisión de Cambios Pendientes

Cuando los cambios están esperando su revisión, aparecen en la Cola de aprobación. Cada cambio pendiente muestra:

- **El producto o entidad afectada** — a qué producto, categoría o registro se aplica el cambio.
- **El campo que se está modificando** — el atributo o campo específico que se actualizará.
- **El valor actual** — lo que el campo contiene ahora mismo.
- **El valor propuesto** — a lo que el AI Agent quiere cambiarlo.
- **La marca de tiempo** — cuándo el agente generó la propuesta.

Esta disposición lado a lado facilita detectar si el valor propuesto es preciso y acorde a la marca antes de que aterrice.

## Aprobar Cambios

Haga clic en el botón **Approve** de una entrada pendiente para confirmar ese cambio. El cambio llega a la base de datos inmediatamente y la entrada se elimina de la cola.

También puede seleccionar varias entradas y aprobarlas en masa — útil cuando ha revisado un lote de ediciones similares (por ejemplo, 20 meta descripciones que siguen todas el mismo patrón).

## Rechazar Cambios

Haga clic en **Reject** para descartar una propuesta. El cambio se descarta y nunca llega a su catálogo. Rechazar no afecta el comportamiento del agente en solicitudes futuras — puede rechazar libremente sin preocuparse por efectos secundarios de entrenamiento.

## Cuándo se Requiere Confirmación

Ciertas clases de cambios siempre solicitan confirmación explícita, independientemente del modo de aprobación que haya elegido:

- **Cambios de imagen entre solicitudes** — si el agente propone cambios en las imágenes del producto o activos multimedia, se le pedirá que confirme.
- **Modificaciones masivas** — los cambios a gran escala que afectan a muchos productos disparan un paso de confirmación para prevenir actualizaciones masivas accidentales.
- **Operaciones destructivas** — cualquier cosa que elimine o sobrescriba una cantidad significativa de datos pide confirmación explícita.

Estas salvaguardas se ejecutan incluso en modo Auto-Approve. Están ahí para detener que "un prompt extraviado" cause daño en todo el catálogo.

::: tip
La Cola de aprobación se combina especialmente bien con el auto-enriquecimiento. Deje que el agente genere descripciones y contenido SEO en segundo plano, luego revise todo desde un único lugar antes de publicarlo.
:::

## Cómo interactúa la cola con otros controles de seguridad

La Cola de aprobación es uno de los cuatro salvaguardas del AI Agent. Juntos forman un modelo de defensa en profundidad:

| Salvaguarda | Configurada en | Qué protege |
|---|---|---|
| **Permisos ACL** | Settings → Roles | Impide que el agente haga cosas que su rol no puede hacer. |
| **Daily Token Budget** | Magic AI → Ajustes → Agentic PIM | Limita el gasto total de IA por día. |
| **Max Agent Steps Per Turn** | Magic AI → Ajustes → Agentic PIM | Limita cuántas herramientas puede encadenar un solo mensaje. |
| **Change Approval Mode + Confidence Threshold + Cola de aprobación** | Magic AI → Ajustes → Agentic PIM | Retiene las escrituras arriesgadas o de baja confianza para revisión. |

La cola se ocupa específicamente de la **supervisión en el momento de la escritura** — una vez que un cambio ha sido aprobado y escrito, se comporta como cualquier otra edición de catálogo y sigue el rastro normal de auditoría/historial.
