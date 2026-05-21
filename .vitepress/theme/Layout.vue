<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import DefaultTheme from 'vitepress/theme'
import VersionSelect from './components/VersionSelect.vue'

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
    <template #nav-bar-content-after>
      <VersionSelect class="vp-version-select" />
    </template>
  </Layout>
</template>
