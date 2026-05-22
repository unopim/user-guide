<!--
  GoogleTranslate.vue
  Renders a styled flyout (matching VitePress's native language menu)
  that triggers Google Translate under the hood. The Google widget's
  default UI is hidden; we only use its translation engine.
-->
<template>
  <div
    class="vp-gt"
    v-click-outside="close"
    @mouseenter="onHoverOpen"
    @mouseleave="onHoverClose"
  >
    <button
      type="button"
      class="vp-gt-trigger"
      :aria-expanded="open"
      aria-haspopup="true"
      aria-label="Translate this page"
      title="Translate this page"
      @click="toggle"
      @focus="onHoverOpen"
      @keydown.escape="close"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path fill="currentColor"
          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </svg>
    </button>

    <Transition name="vp-gt-fade">
      <div
        v-if="open"
        class="vp-gt-menu"
        role="menu"
        aria-label="Translate this page"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          role="menuitem"
          class="vp-gt-menu-item"
          :class="{ 'is-active': current === lang.code }"
          @click="switchTo(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </Transition>

    <!-- Hidden host that Google Translate injects its widget into -->
    <div id="google_translate_element" class="vp-gt-hidden-host" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const languages = [
  { code: 'en',    label: 'English' },
  { code: 'es',    label: 'Español' },
  { code: 'fr',    label: 'Français' },
  { code: 'de',    label: 'Deutsch' },
  { code: 'nl',    label: 'Nederlands' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja',    label: '日本語' }
] as const

const open = ref(false)
const current = ref<string>('en')
let scriptLoaded = false

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|;)\\s*' + name + '=([^;]+)'))
  return m ? decodeURIComponent(m[1]) : null
}

function writeCookie(name: string, value: string) {
  // Set on root and on the parent domain so GT picks it up on reload.
  document.cookie = `${name}=${encodeURIComponent(value)};path=/`
  const host = location.hostname
  if (host.indexOf('.') >= 0) {
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;domain=.${host}`
  }
}

function detectCurrent() {
  // Format is `/auto/<lang>` once GT has translated.
  const c = readCookie('googtrans') || ''
  const m = c.match(/^\/auto\/([a-z]{2})$/i)
  current.value = m ? m[1] : 'en'
}

function loadGoogleTranslate() {
  if (typeof window === 'undefined') return
  if (scriptLoaded) return
  scriptLoaded = true

  ;(window as any).googleTranslateElementInit = () => {
    const g = (window as any).google
    if (!g || !g.translate) return
    // eslint-disable-next-line no-new
    new g.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,de,nl,zh-CN,ja',
        layout: g.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      'google_translate_element'
    )
  }

  const existing = document.querySelector('script[src*="translate_a/element.js"]')
  if (!existing) {
    const s = document.createElement('script')
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    s.defer = true
    document.body.appendChild(s)
  } else if ((window as any).google && (window as any).google.translate) {
    ;(window as any).googleTranslateElementInit()
  }
}

function triggerSelect(lang: string): boolean {
  const sel = document.querySelector<HTMLSelectElement>('.goog-te-combo')
  if (!sel) return false
  sel.value = lang
  sel.dispatchEvent(new Event('change'))
  return true
}

function switchTo(lang: string) {
  current.value = lang
  close()

  // Keep the cookie in sync so a page reload (or other components reading
  // it) see the current target language.
  if (lang === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    const host = location.hostname
    if (host.indexOf('.') >= 0) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${host}`
    }
  } else {
    writeCookie('googtrans', '/auto/' + lang)
  }

  // Try in-page switch first (no reload, no flash).
  if (triggerSelect(lang)) return

  // Engine not loaded yet — reload so GT picks up the cookie.
  location.reload()
}

function toggle() {
  open.value = !open.value
  if (open.value) loadGoogleTranslate()
}

function close() {
  open.value = false
}

// Hover support — opens immediately on mouseenter, closes after a short
// delay on mouseleave so the user can move from trigger to menu without
// it closing under their cursor.
let closeTimer: ReturnType<typeof setTimeout> | null = null

function onHoverOpen() {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
  if (!open.value) {
    open.value = true
    loadGoogleTranslate()
  }
}

function onHoverClose() {
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    open.value = false
    closeTimer = null
  }, 180)
}

onMounted(() => {
  detectCurrent()
  // If a non-default lang is in the cookie, eagerly load GT so the
  // page translates on first paint after a refresh.
  if (current.value !== 'en') loadGoogleTranslate()
})

onBeforeUnmount(() => {
  // No-op: keep GT engine loaded across route changes.
})

// Lightweight click-outside directive
const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    ;(el as any).__vco = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) binding.value()
    }
    document.addEventListener('click', (el as any).__vco)
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', (el as any).__vco)
  }
}
</script>

<style scoped>
.vp-gt {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
}

/* Trigger — matches VitePress's .VPSocialLink button sizing */
.vp-gt-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;
}

.vp-gt-trigger:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.vp-gt-trigger:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
}

.vp-gt-trigger[aria-expanded="true"] {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-default-soft);
}

/* Menu — mirrors .VPMenu styling from VitePress default theme */
.vp-gt-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  z-index: 50;
  min-width: 180px;
  padding: 12px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.vp-gt-menu-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: 0;
  background: transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  color: var(--vp-c-text-1);
  text-align: left;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.vp-gt-menu-item:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-default-soft);
}

.vp-gt-menu-item.is-active {
  color: var(--vp-c-brand);
  font-weight: 600;
}

/* Google's widget injects into this host; hide it entirely. */
.vp-gt-hidden-host {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
}

/* Transition */
.vp-gt-fade-enter-active,
.vp-gt-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.vp-gt-fade-enter-from,
.vp-gt-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

<style>
/* Global overrides — Google injects into the document root and we
   can't reach those nodes from scoped styles. */

/* Hide the floating Google banner that pushes the page down. */
/* The "Translated into: …" banner Google injects at the top of the
   page is intentionally hidden here — it would clobber the VitePress
   nav and confuse users. Translation still works; only the banner
   chrome is suppressed. */
iframe.goog-te-banner-frame,
.goog-te-banner-frame,
.goog-te-banner-frame.skiptranslate,
.skiptranslate > iframe {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* Counteract Google's body offset (it pushes body down by the banner height) */
html,
body {
  top: 0 !important;
  position: static !important;
  margin-top: 0 !important;
}

/* Hide the inline Google widget UI everywhere (we drive it from JS). */
.goog-te-gadget,
.goog-te-gadget-simple,
.goog-te-menu-value,
.goog-te-menu-frame,
#google_translate_element { display: none !important; }

/* Strip the "translated by" tooltip + hover highlights GT attaches
   to every translated phrase — they're noisy. */
.goog-tooltip,
.goog-tooltip:hover,
.goog-text-highlight {
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

/* Block the Google Translate "About this translation" popup that
   appears when hovering a phrase. */
#goog-gt-tt,
.goog-te-balloon-frame {
  display: none !important;
}
</style>
