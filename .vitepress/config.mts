// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import v10 from './version-configs/1.0'
import v20 from './version-configs/2.0'
import v21 from './version-configs/2.1'

export default defineConfig({
  base: '/',
  lang: 'en-US',
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

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/logo.svg',
      dark: '/dark_logo.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dev Doc', link: 'https://devdocs.unopim.com/' },
      { text: 'Extensions Doc', link: 'https://docs-extensions.unopim.com/' },
    ],

    sidebar: {
      '/1.0/': v10,
      '/2.0/': v20,
      '/2.1/': v21
    },

    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Help us improve this page on Github.'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: { dateStyle: 'full' }
    },

    socialLinks: [],

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
    lineNumbers: false
  }
})
