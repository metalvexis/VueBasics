<template>
  <UContainer
    class="flex flex-row justify-stretch flex-nowrap items-center max-h-fit gap-x-6 bg-riptide dark:bg-riptide-600 rounded-md py-1">
    <NuxtLink to="/" class="font-serif text-lg md:text-2xl text-riptide-800 dark:text-riptide-100">James Paulo
      Saballegue</NuxtLink>

    <!-- Make a div that shows up when screen size is sm using TailwindCSS -->
    <div class="sm:hidden flex flex-row justify-stretch flex-nowrap items-center flex-grow">
      <UDropdown class="ml-auto" :items="dropdown_items" mode="click" :popper="{ placement: 'bottom-start' }">
        <UButton class="ml-auto" :icon="'i-heroicons-bars-3-solid'" aria-label=" Menu" variant="outline" />
      </UDropdown>


    </div>
    <div class="hidden sm:flex flex-row justify-stretch flex-nowrap items-center flex-grow">
      <NuxtLink to="/projects" class="font-serif text-sm md:text-base text-riptide-800 dark:text-riptide-100">Projects
      </NuxtLink>
      <UButton class="ml-auto" @:click="isDark = !isDark"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" :label="isDark ? 'Dark' : 'Light'" />
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import type { DropdownItem } from '@nuxt/ui/dist/runtime/types';

const colorMode = useColorMode()

// Writable computed property
const isDark = computed({
  get() {
    return colorMode.preference === 'dark'
  },
  set(darken) {
    console.log('darken', darken)
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
})

// Read-only computed property
const dropdown_items = computed<DropdownItem[][]>(() => [
  [{
    label: 'Projects',
    to: '/projects'
  },
  {
    label: isDark.value ? 'Dark Mode' : 'Light Mode',
    click: () => {
      isDark.value = !isDark.value
    }
  },
  ]
]
)
</script>

<style></style>