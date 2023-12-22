<template>
  <div class="sm:flex justify-center mb-10 sm:mb-0">
    <div class="basis-1/2 sm:border-l-2 border-riptide sm:px-4 py-2 sm:py-10 order-last">
      <p class="leading-relaxed text-center sm:text-left text-riptide-600">{{ props.startDate }} - {{ props.endDate }}
      </p>
    </div>
    <div class="basis-1/2 sm:border-r-2 border-cornflower-300 sm:px-4 sm:py-10 flex flex-col gap-2">
      <div class="w-full text-center p-4 rounded-lg bg-riptide-100 text-riptide-600">
        <h1 class="mb-2 font-bold text-lg">{{ props.title }}</h1>
        <h2 class="mb-2 font-semibold text-base ">{{ props.subtitle }}</h2>
        <p class="text-justify">{{ props.description }}</p>
      </div>
      <div class="w-full p-2 rounded-lg bg-riptide-100 text-riptide-600">
        <h2 class="mb-2 font-bold">Tech Stack</h2>
        <p v-if="props.techStack.length > 0">{{ props.techStack.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface TLineNode {
  title: string;
  subtitle: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  techStack?: string[];
}

const props = defineProps<TLineNode>()

</script>

<style></style>