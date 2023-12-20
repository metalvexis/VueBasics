<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

type Example = {
  counter: number;
}

const example: Ref<Example> = ref({
  counter: 0
});

function increment() {
  example.value.counter += 1;
}

// const colorMode = ref('light')
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <UContainer class="h-60" >
    <BasicButton @:click="increment"> Click Me</BasicButton>
    <div>
      Count: {{ example.counter }}
    </div>

    <BasicButton @:click="isDark = !isDark" :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"></BasicButton>
  </UContainer>
</template>
