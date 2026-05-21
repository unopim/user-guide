// Root locale — landing page only (no version content under /).
// Visitors hitting `/` see a language picker and are auto-redirected
// to their preferred locale by the script in src/index.md.
export const root = {
  themeConfig: {
    nav: [
      { text: 'Dev Doc', link: 'https://devdocs.unopim.com/' },
      { text: 'Extensions Doc', link: 'https://docs-extensions.unopim.com/' }
    ],
    langMenuLabel: 'Change language'
  }
}
