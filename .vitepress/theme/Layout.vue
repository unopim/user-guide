<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import DefaultTheme from 'vitepress/theme'
import VersionSelect from './components/VersionSelect.vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import VersionBanner from './components/VersionBanner.vue'
import PromoBar from './components/PromoBar.vue'

const { Layout } = DefaultTheme

let observer: MutationObserver | null = null

function scrollActiveTocIntoView() {
  const active = document.querySelector('.VPDocAsideOutline .outline-link.active')
  if (active && active.scrollIntoView) {
    active.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }
}

onMounted(() => {
  scrollActiveTocIntoView()
  const toc = document.querySelector('.VPDocAsideOutline')
  if (toc) {
    observer = new MutationObserver(() => {
      scrollActiveTocIntoView()
    })
    observer.observe(toc, {
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <PromoBar />
    </template>
    <template #doc-before>
      <VersionBanner />
    </template>
    <template #nav-bar-content-after>
      <!-- Order: translate → github → version. Translate sits right
           after the theme toggle (theme toggle is the last default
           item now that socialLinks is empty). -->
      <GoogleTranslate />
      <a
        class="vp-gh-link"
        href="https://github.com/unopim"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="UnoPim on GitHub"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z"/>
        </svg>
      </a>
      <VersionSelect class="vp-version-select" />
    </template>
  </Layout>
</template>

<style scoped>
/* Mirror VitePress's .VPSocialLink button styling so the GitHub icon
   looks identical to the native socialLinks icon it replaced. */
.vp-gh-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-left: 2px;
  border-radius: 50%;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s, background-color 0.25s;
}

.vp-gh-link:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.vp-gh-link:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
}
</style>
