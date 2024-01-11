<template>
  <UContainer class="flex flex-col md:flex-row p-0 gap-1 sm:gap-2 sm:py-4 sm:px-4 relative h-dvh md:h-auto"
    style="outline: red solid 1px;">
    <div class="basis-1/3 flex flex-col border-solid rounded-md border-2">
      <!-- Convo sessions list -->
    </div>
    <div class="basis-2/3 flex flex-col gap-1 sm:gap-2">
      <div class="h-40 sm:h-60 md:h-96 border-solid rounded-md border-2">
        <!-- Convo -->
      </div>

      <div>
        <UTextarea v-model="convoInput" color="primary" variant="outline" placeholder="Say Hello to the lil elves :D" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>

const convoInput = ref('');


</script>