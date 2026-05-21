---
layout: page
title: UnoPim User Guide
sidebar: false
aside: false
outline: false
prev: false
next: false
editLink: false
lastUpdated: false
head:
  - - meta
    - http-equiv: refresh
      content: "0; url=/en/"
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const preferred = (navigator.language || 'en').toLowerCase().slice(0, 2)
  const supported = ['en', 'de', 'fr', 'es', 'nl', 'pl']
  const target = supported.includes(preferred) ? preferred : 'en'
  window.location.replace(`/${target}/`)
})
</script>

<div style="max-width: 720px; margin: 6rem auto; text-align: center; padding: 2rem;">

# UnoPim User Guide

Choose a language to continue.

<div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 1.5rem;">

[English](/en/) · [Deutsch](/de/) · [Français](/fr/) · [Español](/es/) · [Nederlands](/nl/) · [Polski](/pl/)

</div>

</div>
