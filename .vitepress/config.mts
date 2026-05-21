// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { locales } from './i18n'

export default defineConfig({
  base: '/',
  title: 'User Guide',
  description:
    'Unlock the full potential of UnoPim with our comprehensive user guide. Master data enrichment and streamline your information management effortlessly.',

  vite: {
    server: {
      host: '0.0.0.0',
      port: 8080
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    [
      'script',
      {},
      `
        (function() {
            var script = document.createElement('script');
            script.innerHTML = 'window.chatbotConfig = { url: "https://ask.unopim.com:5001/chat", logoUrl: "https://docs.unopim.com/logoBot.png" };';
            document.head.appendChild(script);
        })();
      `
    ]
  ],

  srcDir: './src',

  locales,

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/logo.svg',
      dark: '/dark_logo.svg',
    },

    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Help us improve this page on Github.'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: { dateStyle: 'full' }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unopim' }
    ],

    footer: {
      message:
        'Released under the <a href="https://opensource.org/licenses/mit" target="_blank">MIT License</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} UnoPim`
    },

    outline: {
      level: 'deep'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: false,
    // Localize :::tip / :::warning / :::danger / :::info / :::details
    // default labels per locale. Custom titles (`:::tip My Title`) pass through
    // unchanged because we only replace the exact default English token.
    config(md) {
      const LABELS: Record<string, Record<string, string>> = {
        en: { tip: 'TIP',       warning: 'WARNING',       danger: 'DANGER',           info: 'INFO',   details: 'DETAILS' },
        de: { tip: 'TIPP',      warning: 'WARNUNG',       danger: 'GEFAHR',           info: 'INFO',   details: 'DETAILS' },
        fr: { tip: 'ASTUCE',    warning: 'AVERTISSEMENT', danger: 'DANGER',           info: 'INFO',   details: 'DÉTAILS' },
        es: { tip: 'CONSEJO',   warning: 'ADVERTENCIA',   danger: 'PELIGRO',          info: 'INFO',   details: 'DETALLES' },
        nl: { tip: 'TIP',       warning: 'WAARSCHUWING',  danger: 'GEVAAR',           info: 'INFO',   details: 'DETAILS' },
        pl: { tip: 'WSKAZÓWKA', warning: 'OSTRZEŻENIE',   danger: 'NIEBEZPIECZEŃSTWO', info: 'INFO',  details: 'SZCZEGÓŁY' }
      }

      function localeFromPath(p: string): string {
        const m = p.replace(/\\/g, '/').match(/(?:^|\/)(en|de|fr|es|nl|pl)\//)
        return m ? m[1] : 'en'
      }

      for (const name of ['tip', 'warning', 'danger', 'info', 'details'] as const) {
        const orig = md.renderer.rules[`container_${name}_open`]
        if (!orig) continue
        md.renderer.rules[`container_${name}_open`] = (tokens, idx, options, env, self) => {
          const html = orig(tokens, idx, options, env, self)
          const locale = localeFromPath((env as any).relativePath || (env as any).path || '')
          if (locale === 'en') return html
          const defaultLabel = LABELS.en[name]
          const localized = LABELS[locale][name]
          if (defaultLabel === localized) return html
          return html.replace(
            new RegExp(`(<p class="custom-block-title">)${defaultLabel}(</p>)`),
            `$1${localized}$2`
          )
        }
      }
    }
  }
})
