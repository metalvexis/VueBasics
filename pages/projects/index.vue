<template>
  <UContainer class="flex flex-col gap-8 py-6 relative">
    <h1 class="font-serif font-bold text-6xl text-riptide-600 dark:text-riptide">Projects</h1>
    <ul>
      <li>
        <NuxtLink to="/projects/convo">Convo</NuxtLink>
      </li>
    </ul>
  </UContainer>
  <NuxtPage :page-key="route => route.fullPath" />
</template>

<script lang="ts" setup>

</script>