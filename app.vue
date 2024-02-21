<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'James Paulo Saballegue Portfolio',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { hid: 'description', name: 'description', content: "James' online profile showcases all his skills and talent." },
    { hid: 'og:url', property: 'og:url', content: 'https://jamespaulo.com/' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: 'James Paulo Saballegue Portfolio' },
    { hid: 'og:description', property: 'og:description', content: "James' online profile showcases all his skills and talent." },
    { hid: 'og:image', property: 'og:image', content: 'https://opengraph.b-cdn.net/production/documents/adfec774-885f-4823-838e-85ac330c6d20.png?token=rHRhmhQK68N-MgK8-lv-zoVJ-PxxjgW00xKefv2wLC0&height=389&width=721&expires=33244515129' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:domain', property: 'twitter:domain', content: 'jamespaulo.com' },
    { hid: 'twitter:url', property: 'twitter:url', content: 'https://jamespaulo.com/' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'James Paulo Saballegue Portfolio' },
    { hid: 'twitter:description', name: 'twitter:description', content: "James' online profile showcases all his skills and talent." },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://opengraph.b-cdn.net/production/documents/adfec774-885f-4823-838e-85ac330c6d20.png?token=rHRhmhQK68N-MgK8-lv-zoVJ-PxxjgW00xKefv2wLC0&height=389&width=721&expires=33244515129' },
  ],
})
</script>