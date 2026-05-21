// Central i18n registry — add a locale here once and it will be
// picked up by .vitepress/config.mts automatically.
//
// Each named locale is served at `/<code>/` (e.g. `/en/`, `/de/`).
// The `root` locale serves only `/` — a language picker that auto-redirects
// to the visitor's preferred locale.
import { root } from './locales/root'
import { en } from './locales/en'
import { de } from './locales/de'
import { fr } from './locales/fr'
import { es } from './locales/es'
import { nl } from './locales/nl'
import { pl } from './locales/pl'

export const locales = {
  root: { label: 'Languages',   lang: 'en-US', ...root },
  en:   { label: 'English',     lang: 'en-US', ...en },
  de:   { label: 'Deutsch',     lang: 'de-DE', ...de },
  fr:   { label: 'Français',    lang: 'fr-FR', ...fr },
  es:   { label: 'Español',     lang: 'es-ES', ...es },
  nl:   { label: 'Nederlands',  lang: 'nl-NL', ...nl },
  pl:   { label: 'Polski',      lang: 'pl-PL', ...pl }
}
