<template>
  <div v-if="banner" class="vp-version-banner" role="alert">
    <div class="vp-version-banner-inner">
      <p class="vp-version-banner-body">
        <strong>Notice:</strong> You are browsing an older UnoPim version. Explore the
        <a :href="banner.latestHref" class="vp-version-banner-link">latest documentation</a>
        for updated features.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const LATEST = '2.1'
const UNMAINTAINED = new Set(['1.0', '2.0'])
const versionRegex = /^\/(1\.0|2\.0|2\.1)(\/.*)?$/

const route = useRoute()

const banner = computed(() => {
  const m = route.path.match(versionRegex)
  if (!m) return null
  const current = m[1]
  if (!UNMAINTAINED.has(current)) return null
  return {
    current,
    latest: LATEST,
    latestHref: `/${LATEST}/introduction/`
  }
})
</script>

<style scoped>
.vp-version-banner {
  margin: 0 0 1.5rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-warning-2, #d97706);
  background-color: var(--vp-c-warning-soft, rgba(234, 179, 8, 0.14));
  color: var(--vp-c-text-1);
}

.vp-version-banner-body {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
}

.vp-version-banner-body strong {
  color: var(--vp-c-warning-1, #b45309);
  font-weight: 700;
}

.vp-version-banner-link {
  color: var(--vp-c-warning-1, #b45309);
  font-weight: 600;
  text-decoration: underline;
}

.vp-version-banner-link:hover {
  text-decoration: none;
}

.dark .vp-version-banner-title,
.dark .vp-version-banner-link {
  color: var(--vp-c-warning-3, #fbbf24);
}
</style>
