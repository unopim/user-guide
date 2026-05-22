<template>
  <div
    v-if="showSelector"
    class="vp-version-select"
  >
    <select @change="onChange" :value="currentVersion">
      <option v-for="v in versions" :key="v.value" :value="v.value">{{ v.label }}</option>
    </select>
    <span class="vp-version-arrow" aria-hidden="true">▼</span>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vitepress'
import { computed } from 'vue'

const versions = [
  { label: 'v2.1', value: '2.1' },
  { label: 'v2.0', value: '2.0' },
  { label: 'v1.0', value: '1.0' }
]

const versionRegex = /^\/(1\.0|2\.0|2\.1)(\/.*)?$/

// Top-level sections available in each version. Used to redirect a
// version switch to that version's introduction when the current
// section doesn't exist there.
const SECTIONS: Record<string, Set<string>> = {
  '1.0': new Set([
    'attribute', 'category', 'categoryField', 'configuration',
    'data-transfer', 'introduction', 'magic', 'products', 'settings'
  ]),
  '2.0': new Set([
    'agenticPim', 'ai-agent', 'attribute', 'category', 'categoryField',
    'configuration', 'dashboard', 'data-transfer', 'introduction',
    'magic', 'magic-ai', 'notifications', 'products', 'releases', 'settings'
  ]),
  '2.1': new Set([
    'agenticPim', 'ai-agent', 'attribute', 'category', 'categoryField',
    'configuration', 'dashboard', 'data-transfer', 'introduction',
    'magic', 'magic-ai', 'notifications', 'products', 'releases', 'settings'
  ])
}

const route = useRoute()
const router = useRouter()

// Hide on the landing page; only show inside a versioned section.
const showSelector = computed(() => route.path !== '/')

const currentVersion = computed(() => {
  const m = route.path.match(versionRegex)
  return m ? m[1] : '2.1'
})

const restPath = computed(() => {
  const m = route.path.match(versionRegex)
  return m && m[2] && m[2] !== '/' ? m[2] : '/introduction/'
})

function resolveRestPath(targetVersion: string, rest: string): string {
  const trimmed = rest.replace(/^\/+/, '').replace(/\/$/, '')
  const topSection = trimmed.split('/')[0]
  const sections = SECTIONS[targetVersion]
  if (!sections || !sections.has(topSection)) {
    return '/introduction/'
  }
  // v1.0 doesn't have data-transfer/job-tracker
  if (targetVersion === '1.0' && rest.replace(/\/$/, '').startsWith('/data-transfer/job-tracker')) {
    return '/introduction/'
  }
  return rest
}

function onChange(e: Event) {
  const newVersion = (e.target as HTMLSelectElement).value
  const targetRest = resolveRestPath(newVersion, restPath.value)
  router.go(`/${newVersion}${targetRest}`)
}
</script>

<style scoped>
.vp-version-select {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  vertical-align: middle;
}

.vp-version-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: var(--vp-c-bg, #fff);
  color: var(--vp-c-text-1, #213547);
  border: 1px solid var(--vp-c-border, #e1e1e1);
  border-radius: 6px;
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  height: 2rem;
  box-shadow: 0 1px 2px rgba(60, 60, 60, 0.03);
  transition: border-color 0.2s;
  outline: none;
}

.vp-version-select select:focus {
  border-color: var(--vp-c-brand, #8b5cf6);
}

.vp-version-arrow {
  pointer-events: none;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2, #888);
  font-size: 0.85em;
}
</style>
