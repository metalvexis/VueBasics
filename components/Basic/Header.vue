<template>
  <UContainer
    class="flex flex-row justify-stretch flex-nowrap items-center max-h-fit gap-x-6 bg-riptide dark:bg-riptide-600 rounded-md py-1">
    <NuxtLink to="/" class="font-serif sm:text-lg md:text-2xl text-riptide-800 dark:text-riptide-100">James Paulo
      Saballegue</NuxtLink>
    <!-- <NuxtLink href="/demo" class="font-serif sm:text-lg md:text-lg text-riptide-800 dark:text-riptide-100">Demo</NuxtLink> -->
    <UButton class="ml-auto" @:click="isDark = !isDark"
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" />
  </UContainer>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style></style>