// Español
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'es'

const v21Labels = {
  introduction: 'Introducción',
  whatsNew: 'Novedades',
  agenticPim: 'PIM Agéntico',
  dashboard: 'Panel',
  productTypes: 'Tipos de producto',
  simpleProduct: 'Producto simple',
  configurableProduct: 'Producto configurable',
  categories: 'Categorías',
  categoryFields: 'Campos de categoría',
  attributes: 'Atributos',
  attributeInputType: 'Tipo de entrada de atributo',
  productAttribute: 'Atributo del producto',
  attributeFamily: 'Familia de atributos',
  attributeGroups: 'Grupos de atributos',
  magicAI: 'Magic AI',
  platforms: 'Plataformas',
  settingsLabel: 'Ajustes',
  prompts: 'Prompts',
  systemPrompts: 'Prompts del sistema',
  dataTransfer: 'Transferencia de datos',
  jobTracker: 'Seguimiento de trabajos',
  import: 'Importar',
  export: 'Exportar',
  settings: 'Ajustes',
  locales: 'Idiomas',
  currencies: 'Monedas',
  channels: 'Canales',
  users: 'Usuarios',
  roles: 'Roles',
  configurations: 'Configuraciones',
  integration: 'Integración',
  webhooks: 'Webhooks',
  notifications: 'Notificaciones',
  aiAgent: 'Agente IA',
  aiAgentChat: 'Chat del Agente IA',
  approvalQueue: 'Cola de aprobación',
  analytics: 'Análisis'
}

const v10Labels = {
  introduction: 'Introducción',
  productTypes: 'Tipos de producto',
  simpleProduct: 'Producto simple',
  configurableProduct: 'Producto configurable',
  categories: 'Categorías',
  categoryFields: 'Campos de categoría',
  attributes: 'Atributos',
  attributeInputType: 'Tipo de entrada de atributo',
  productAttribute: 'Crear atributo de producto',
  attributeFamily: 'Familia de atributos',
  attributeGroups: 'Grupos de atributos',
  dataTransfer: 'Transferencia de datos',
  import: 'Importar',
  export: 'Exportar',
  settings: 'Ajustes',
  locales: 'Idiomas',
  currencies: 'Monedas',
  channels: 'Canales',
  users: 'Usuarios',
  roles: 'Roles',
  configurations: 'Configuraciones',
  integration: 'Integración',
  magicAI: 'Magic AI',
  webhooks: 'Webhooks'
}

export const es = {
  themeConfig: {
    nav: [
      { text: 'Inicio', link: `/${prefix}/` },
      { text: 'Doc Desarrollador', link: 'https://devdocs.unopim.com/' },
      { text: 'Doc Extensiones', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Ayúdanos a mejorar esta página en GitHub.'
    },
    lastUpdated: { text: 'Última actualización' },
    docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
    outline: { level: 'deep' as const, label: 'En esta página' },
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar al tema claro',
    darkModeSwitchTitle: 'Cambiar al tema oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    langMenuLabel: 'Cambiar idioma'
  }
}
