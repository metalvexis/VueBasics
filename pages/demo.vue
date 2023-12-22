<template>
  <UContainer class="h-screen" >
    Test Demo Page
    <UButton @:click="increment" label="Click Me" variant="solid" />
    Count: {{ example.counter }}
  </UContainer>
</template>
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
</script>