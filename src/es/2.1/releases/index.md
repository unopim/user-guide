<script setup>
import { ref, computed } from 'vue'

const selectedVersions = ref(['v2.1.0', 'v2.0.0', 'v2.0.0-beta.1', 'v1.0.0', 'v0.3.0', 'v0.2.0'])
const selectedDomains = ref(['ai', 'productivity', 'data-quality', 'connectivity', 'automation', 'scalability', 'reporting', 'governance'])

const versions = [
  { id: 'v2.1.0', label: 'v2.1.0' },
  { id: 'v2.0.0', label: 'v2.0.0' },
  { id: 'v2.0.0-beta.1', label: 'v2.0.0-beta.1' },
  { id: 'v1.0.0', label: 'v1.0.0' },
  { id: 'v0.3.0', label: 'v0.3.0' },
  { id: 'v0.2.0', label: 'v0.2.0' },
  { id: 'v0.1.x', label: 'v0.1.x' },
]

const domains = [
  { id: 'ai', label: 'IA y Agentes', color: '#7c3aed' },
  { id: 'productivity', label: 'Productividad', color: '#2563eb' },
  { id: 'data-quality', label: 'Calidad de Datos', color: '#059669' },
  { id: 'connectivity', label: 'Conectividad', color: '#dc2626' },
  { id: 'automation', label: 'Automatización', color: '#d97706' },
  { id: 'scalability', label: 'Escalabilidad', color: '#be185d' },
  { id: 'reporting', label: 'Informes', color: '#6366f1' },
  { id: 'governance', label: 'Gobernanza', color: '#0d9488' },
]

const features = [
  // v2.1.0
  { title: 'Herramienta Manage Associations', desc: 'Nueva herramienta del AI Agent que añade, elimina o lista productos related/up-sell/cross-sell vía lenguaje natural — no es necesario abrir cada producto manualmente. Los resultados de búsqueda de productos ahora muestran enlaces clicables para una navegación simplificada.', version: 'v2.1.0', domains: ['ai', 'productivity'] },
  { title: 'Sembrado de Datos de Demostración', desc: 'Incorporación rápida con productos, categorías y atributos de muestra — disponible vía el alternador del asistente de instalación, la bandera CLI `php artisan unopim:install --with-demo-data`, la opción de configuración Docker, o el comando independiente `php artisan unopim:install:demo-data`.', version: 'v2.1.0', domains: ['productivity', 'governance'] },
  { title: 'Configuración Docker Lista para Producción', desc: 'Stack multi-contenedor (Nginx + PHP-FPM por defecto, Apache como alternativa) distribuido vía imágenes de Docker Hub, con healthchecks, servicios Redis, Elasticsearch, Mailpit, php.ini afinado con OPcache y flujo de auto-publicación.', version: 'v2.1.0', domains: ['connectivity', 'scalability'] },
  { title: 'Proveedor Personalizado de MagicAI', desc: 'Conecte cualquier servicio compatible con OpenAI (gateways autoalojados, proxies, endpoints personalizados) configurando una URL base personalizada en la página Magic AI Platforms — más allá de los presets oficiales OpenAI/Anthropic/Gemini/Ollama/Groq.', version: 'v2.1.0', domains: ['ai', 'connectivity'] },
  { title: 'MagicAI Test Connection (ModelRecommender)', desc: 'Test Connection en una Platform ahora usa un recomendador dedicado que omite los modelos solo de imagen, previniendo falsos negativos durante la validación de credenciales.', version: 'v2.1.0', domains: ['ai', 'governance'] },
  { title: 'PrismErrorResolver', desc: 'El AI Agent Chat traduce los errores del proveedor y de Prism en mensajes amigables para el usuario, para que los administradores comprendan inmediatamente lo que salió mal (rate limit, clave inválida, modelo no disponible, etc.).', version: 'v2.1.0', domains: ['ai', 'productivity'] },
  { title: 'Estadísticas de Producto Clicables en el Panel', desc: 'Las tarjetas de estadísticas de producto en el Panel (Activos, Inactivos, Enriquecidos, Con Variantes, …) ahora actúan como chips de filtro — hacer clic en una enlaza profundamente a la cuadrícula de productos prefiltrada a ese conjunto.', version: 'v2.1.0', domains: ['productivity', 'reporting'] },
  { title: 'Despacho Asíncrono de Webhook de Producto', desc: 'Las entregas de webhook de creación/actualización de producto ahora se ejecutan como un trabajo en cola SendProductWebhook, por lo que las acciones del administrador retornan inmediatamente y la latencia del endpoint externo ya no bloquea la UI de administración.', version: 'v2.1.0', domains: ['connectivity', 'automation', 'scalability'] },
  { title: 'Limitación de Tasa de Inicio de Sesión del Administrador', desc: 'Limitadores de tasa con nombre con segmentación por email + por IP (5 intentos/minuto) protegen los endpoints de inicio de sesión y olvido de contraseña del administrador de ataques de fuerza bruta.', version: 'v2.1.0', domains: ['governance', 'scalability'] },
  { title: 'Validación de Contraseña del Lado del Servidor', desc: 'Longitud mínima de contraseña de 6 caracteres aplicada en el lado del servidor en UserForm, cerrando una laguna donde los clientes podían saltarse las reglas de contraseña.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Refuerzo de Enumeración de Usuarios', desc: 'El endpoint de olvido de contraseña ahora devuelve un mensaje genérico independientemente de si el email existe, previniendo la enumeración de cuentas mediante diferencias de respuesta.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Protección contra Open-Redirect', desc: 'Las redirecciones basadas en Referer en el inicio de sesión y el olvido de contraseña ahora validan el host vía parse_url() para que los encabezados Referer falsificados ya no puedan empujar a los usuarios a sitios de phishing externos.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Corrección de Escalada de Privilegios en Edición de Usuario', desc: 'Añadidas las entradas ACL faltantes y salvaguardas a nivel de controlador en los endpoints de actualización y destrucción de usuario; los no-superadmins ya no pueden asignar roles de permission_type: all. Parchea el hallazgo de auditoría de severidad Alta.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Middleware No-Cache para Páginas de Administración', desc: 'Las respuestas del administrador incluyen encabezados Cache-Control: no-store y Pragma: no-cache que evitan que los navegadores y proxies cacheen páginas sensibles después de cerrar sesión.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Encabezados Seguros Mejorados', desc: 'Los encabezados Permissions-Policy y X-Permitted-Cross-Domain-Policies ahora se envían en todas las respuestas del administrador para protecciones más fuertes a nivel de navegador.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Helper de Saneamiento XSS', desc: 'El helper clean_content() respaldado por HTMLPurifier elimina directivas Blade, etiquetas PHP y HTML peligroso del contenido generado por el usuario antes del almacenamiento.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Filtrado de Debug Basado en IP', desc: 'La variable de entorno APP_DEBUG_ALLOWED_IPS restringe el acceso al debugbar a IPs específicas para que la depuración en producción sea más segura.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Traducciones Mejoradas al Holandés (nl_NL)', desc: 'Pasada de calidad a través de nueve paquetes (Admin, AiAgent, Completeness, Core, DataTransfer, Installer, Product, Webhook) — tono informal, eliminación de prefijos extraviados, limpieza de zero-width-space. Contribución de la comunidad.', version: 'v2.1.0', domains: ['productivity'] },
  { title: 'Pasada de Rendimiento de Índices de Base de Datos', desc: 'Nuevos índices en channels.code, locales.status, currencies.status y un índice compuesto en core_config(code, channel_code, locale_code) para búsquedas de configuración y cargas de página de administración más rápidas.', version: 'v2.1.0', domains: ['scalability'] },
  { title: 'Pasada de Compatibilidad PostgreSQL', desc: 'Soporte de búsqueda JSON, gramática jsonContains(), variables de sesión bulk-mode de MySQL gateadas por driver y correcciones de filtros DataGrid a través de las cuadrículas de herramientas de AiAgent, Channel y AttributeOption.', version: 'v2.1.0', domains: ['connectivity', 'scalability'] },
  { title: 'Pulido del Modo Oscuro en el Seguimiento de trabajos', desc: 'Las barras de progreso y los botones de configuración ahora se renderizan correctamente en modo oscuro dentro del seguimiento de trabajos de importación/exportación.', version: 'v2.1.0', domains: ['productivity'] },
  { title: 'Flujo de Trabajo CI de PostgreSQL', desc: 'Ejecución dedicada de tests Pest contra PostgreSQL 16 (con y sin Elasticsearch) en cada cambio mantiene estable la compatibilidad entre bases de datos.', version: 'v2.1.0', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'Comando de Traducción Impulsado por IA', desc: 'Traduzca masivamente las claves de locale faltantes en los 32 locales no ingleses usando MagicAI. Auto-tradujo aproximadamente 18 000 claves previamente no traducidas a través de 7 paquetes.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Traducciones Mejoradas al Alemán', desc: 'Corregida la terminología de columna y mejorada la calidad del locale de_DE.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Auto-Reindexación de Elasticsearch Tras el Sembrado', desc: 'Los productos son inmediatamente buscables después del sembrado de base de datos sin reindexación manual.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Gramática JSON Entre Bases de Datos', desc: 'Compatibilidad con PostgreSQL mediante manejo mejorado de consultas JSON.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'Interfaz de AI Agent Chat', desc: 'Más de 30 herramientas PIM integradas accesibles vía lenguaje natural. Cree productos, busque, edite masivamente, genere contenido, gestione categorías — todo a través de la conversación.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'MagicAI Multi-Plataforma', desc: 'Soporte para más de 10 proveedores de IA (OpenAI, Anthropic, Gemini, Ollama, Groq, y más) con almacenamiento cifrado de credenciales y selección de plataforma por característica.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'Búsqueda Semántica Impulsada por IA', desc: 'EmbeddingSimilarityService y SemanticRankingService entregan resultados de búsqueda inteligentes basados en el significado, no solo en palabras clave.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Auto-Traducción al Crear/Actualizar Producto', desc: 'Traduzca automáticamente los datos del producto a todos los locales configurados cuando se crean o actualizan productos.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'Cola de Aprobación para Cambios de IA', desc: 'Modos configurables para los cambios de IA — auto-approve o revisión manual antes de aplicar.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'Sistema de Memoria del Agente', desc: 'Las herramientas RememberFact y RecallMemory permiten a la IA almacenar y recuperar contexto a través de las interacciones.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Comando programado que monitoriza e informa sobre la calidad de los datos del catálogo.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-Enriquecimiento', desc: 'Rellena automáticamente las descripciones de producto faltantes y los campos SEO usando IA.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Bucle de Retroalimentación de Contenido', desc: 'Capture las preferencias del usuario sobre el contenido generado por IA para refinar las salidas futuras.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Herramienta de Informe de Calidad de Datos', desc: 'Recorra su catálogo en busca de datos faltantes y reciba informes estructurados de calidad.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Herramienta de Verificación de Producto', desc: 'Verifique productos individuales contra criterios de calidad con puntuación de completitud.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Herramienta de Planificación de Tareas', desc: 'Planifique y ejecute operaciones PIM complejas de varios pasos a través del AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Streaming SSE para AI Agent Chat', desc: 'Respuestas de streaming en tiempo real en la interfaz de chat usando Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Seguimiento de Presupuesto de Tokens', desc: 'Límites diarios de uso y monitorización para el consumo de tokens de IA.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Persistencia de Conversaciones', desc: 'Sesiones de chat respaldadas por base de datos que persisten a través de las recargas del navegador y los inicios de sesión.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Panel de AI Agent Analytics', desc: 'Monitorice el uso, los costes y el rendimiento de la IA desde un panel centralizado.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch Types para Atributos', desc: 'Tipos de muestra Color, Image y Text para atributos Select y Multiselect — visualización visual de opciones.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Panel Mejorado', desc: 'Widgets de Estadísticas de Producto, Gráficos de Actividad, Puntuaciones de Completitud, Preparación del Canal, Actividad Reciente y Transferencia de Datos.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'UI del Tracker de Importación/Exportación', desc: 'Visualización en tiempo real de los trabajos de importación y exportación con barras de progreso, indicadores de estado y etiquetas del pipeline de pasos.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Subida de Archivo Arrastrar y Soltar', desc: 'Arrastre los archivos directamente al área de subida de importación en lugar de usar el navegador de archivos.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Controles de Pausa, Reanudación y Cancelación', desc: 'Capacidades de control de trabajo para los trabajos de importación y exportación — pause durante las horas pico, reanude más tarde.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Soporte de Producto Configurable en el AI Agent', desc: 'Cree y gestione productos configurables con super_attributes y variantes a través del AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Actualización al Framework Laravel 12', desc: 'Actualizado de Laravel 10 a Laravel 12 con PHP 8.3 mínimo. Bootstrap modernizado, tests Pest 3.0, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'Autorización ACL en Todas las Herramientas del AI Agent', desc: 'Control de acceso basado en roles aplicado en todas las más de 30 herramientas del AI Agent y 15 rutas API previamente desprotegidas.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Limitación de Tasa en Endpoints de IA', desc: 'Limitación Throttle:30,1 en los endpoints del AI Agent para prevenir el abuso.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Pipeline de Exportación Optimizado', desc: 'Eager loading y tamaño de lote aumentado (hasta 200) para un mejor rendimiento de exportación. Las exportaciones de categoría evitan la sobrecarga de memoria.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'Soporte para PostgreSQL', desc: 'Compatibilidad completa entre bases de datos — use PostgreSQL junto a MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'Gestión de Prompts del sistema', desc: 'Configure el comportamiento y la personalidad de la IA con prompts del sistema preestablecidos y personalizados.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Prompts Personalizados para Magic AI', desc: 'Defina plantillas de prompt específicas para la generación de contenido por IA con marcadores dinámicos.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Traducción de Valores de Producto', desc: 'Traduzca los valores de atributo de producto a todos los locales configurados.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Completitud del Producto', desc: 'Puntuación de calidad que rastrea la información de producto requerida por canal y locale.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Edición Masiva de Producto', desc: 'Edite varios productos a la vez — actualización masiva de atributos compartidos desde el datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Webhook de Actualización de Producto', desc: 'Callbacks HTTP automatizados cuando los datos del producto se modifican, con pestañas Logs e History.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Soporte de Vídeo en Gallery', desc: 'Suba y gestione archivos de vídeo en el atributo galería junto con imágenes.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Columnas Dinámicas del Datagrid de Producto', desc: 'Personalice qué columnas son visibles en el listado de productos con un gestor de columnas arrastrar y soltar.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Filtros Dinámicos del Datagrid de Producto', desc: 'Filtrado avanzado por cualquier columna visible — búsqueda de texto, desplegables, rangos de fechas.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Trabajos de Exportación Rápida de Producto', desc: 'Gestione dinámicamente los trabajos de exportación rápida directamente desde el listado de productos.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Funcionalidad Magic AI Mejorada', desc: 'Generación de contenido por IA mejorada con mejores prompts y soporte de modelos.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Filtros Elasticsearch Mejorados', desc: 'Mejor indexación de búsqueda de producto y manejo de filtros para catálogos grandes.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Tests End-to-End con Playwright', desc: 'Suite completa de tests E2E para pruebas automatizadas de UI.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'Notificaciones en App y por Email', desc: 'Sistema de notificaciones en tiempo real para trabajos de importación/exportación, cambios de producto y eventos del sistema.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'Instalador GUI', desc: 'Asistente de instalación basado en web para una configuración más fácil de UnoPim.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Generación de Imágenes Magic', desc: 'Genere imágenes de producto a partir de descripciones textuales usando DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'Endpoints API PATCH y DELETE', desc: 'Nuevos endpoints API para parchear y eliminar productos y categorías.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Filtros Dinámicos de Trabajo de Importación', desc: 'Configure condiciones avanzadas de filtrado para los datos de importación.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Sistema PIM Central', desc: 'Gestión centralizada de productos con tipos de producto Simple y Configurable, categorías, atributos y familias.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Pipeline de Importación/Exportación', desc: 'Importación y exportación masiva de datos de producto y categoría en formatos CSV, XLS, XLSX.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'API REST con OAuth 2.0', desc: 'API RESTful completa con autenticación Passport OAuth 2.0 para integraciones de terceros.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Canal y Multi-Locale', desc: 'Gestione los datos del producto a través de múltiples canales, locales y monedas.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'Gestión de Usuarios y Roles', desc: 'Usuarios administradores con control de acceso basado en roles y permisos personalizados.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Tema Oscuro / Claro', desc: 'Cambie entre modo oscuro y claro con un solo clic. La preferencia persiste entre sesiones.', version: 'v0.1.x', domains: ['productivity'] },
]

function toggleVersion(id) {
  const idx = selectedVersions.value.indexOf(id)
  if (idx > -1) selectedVersions.value.splice(idx, 1)
  else selectedVersions.value.push(id)
}

function toggleDomain(id) {
  const idx = selectedDomains.value.indexOf(id)
  if (idx > -1) selectedDomains.value.splice(idx, 1)
  else selectedDomains.value.push(id)
}

const filteredFeatures = computed(() => {
  return features.filter(f =>
    selectedVersions.value.includes(f.version) &&
    f.domains.some(d => selectedDomains.value.includes(d))
  )
})

function getDomainColor(id) {
  return domains.find(d => d.id === id)?.color || '#666'
}

function getDomainLabel(id) {
  return domains.find(d => d.id === id)?.label || id
}
</script>

# Novedades

Descubra todas las características clave lanzadas a través de las versiones de UnoPim. Use los filtros a continuación para explorar las características por versión y área de dominio.

<div class="releases-page">

<div class="filter-section">
  <div class="filter-group">
    <h4>VERSIONES</h4>
    <div class="filter-chips">
      <button
        v-for="v in versions"
        :key="v.id"
        :class="['chip', { active: selectedVersions.includes(v.id) }]"
        @click="toggleVersion(v.id)"
      >
        <span v-if="selectedVersions.includes(v.id)" class="check">✓</span>
        {{ v.label }}
      </button>
    </div>
  </div>

  <div class="filter-group">
    <h4>ÁREAS DE DOMINIO</h4>
    <div class="filter-chips">
      <button
        v-for="d in domains"
        :key="d.id"
        :class="['chip', 'domain-chip', { active: selectedDomains.includes(d.id) }]"
        :style="selectedDomains.includes(d.id) ? { borderColor: d.color, backgroundColor: d.color + '15' } : {}"
        @click="toggleDomain(d.id)"
      >
        <span v-if="selectedDomains.includes(d.id)" class="check" :style="{ color: d.color }">✓</span>
        {{ d.label }}
      </button>
    </div>
  </div>
</div>

<p class="results-count">
  Estas son las <strong>{{ filteredFeatures.length }}</strong> características clave entregadas en el PIM para las versiones y áreas que seleccionó.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Disponible desde <strong>{{ f.version }}</strong></p>
    <div class="domain-tags">
      <span
        v-for="d in f.domains"
        :key="d"
        class="domain-tag"
        :style="{ borderColor: getDomainColor(d), color: getDomainColor(d) }"
      >
        {{ getDomainLabel(d) }}
      </span>
    </div>
  </div>
</div>

</div>

<style scoped>
.releases-page {
  margin-top: 1rem;
}

.filter-section {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-group h4 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.75rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.chip:hover {
  border-color: var(--vp-c-brand-1);
}

.chip.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.chip .check {
  font-size: 0.75rem;
  font-weight: 700;
}

.results-count {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1.25rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.feature-version {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.75rem;
}

.domain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.domain-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border: 1.5px solid;
  border-radius: 4px;
  background: transparent;
}
</style>
