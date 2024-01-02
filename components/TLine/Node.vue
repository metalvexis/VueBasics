<template>
  <div class="sm:flex justify-center mb-10 sm:mb-0 text-riptide-600 dark:text-riptide-200">
    <!-- <div class="basis-1/2 border-cyan-300 sm:px-4 py-2 sm:py-10 "> -->
    <div :class="dateStyle">
      <p
        :class="'sm:py-4 font-semibold leading-relaxed text-center ' + (props.position === 'right' ? 'sm:text-right' : 'sm:text-left')">
        {{ props.startDate }} - {{ props.endDate }}
      </p>
    </div>
    <!-- <div class="basis-1/2 border-cyan-300 sm:px-4 sm:py-10 flex flex-col gap-2"> -->
    <div :class="expStyle">
      <div class="w-full text-center p-4 rounded-lg bg-riptide-100 dark:bg-riptide-800">
        <h1 class="mb-2 font-bold text-lg">{{ props.title }}</h1>
        <h2 class="mb-2 font-semibold text-base ">{{ props.subtitle }}</h2>
        <p class="text-justify">{{ props.description }}</p>
      </div>
      <div v-if="props.techStack.length > 0" class="w-full p-4 rounded-lg bg-riptide-100 dark:bg-riptide-800">
        <h2 class="mb-2 font-bold">Tech Stack</h2>
        <p>{{ props.techStack.join(", ") }}</p>
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
  techStack: string[];
  position: 'left' | 'right';
}

const props = defineProps<TLineNode>()

const dateStyle = computed(() => {
  const style = 'basis-1/2 border-cyan-300 sm:px-4 py-2 sm:py-10 '
  const pos = props.position === "right" ? "order-first sm:border-r-2" : "order-last sm:border-l-2";

  return style + pos;
});

const expStyle = computed(() => {
  const style = 'basis-1/2 border-cyan-300 sm:px-4 sm:py-10 flex flex-col gap-2 '
  const pos = props.position === "right" ? "sm:border-l-2" : "sm:border-r-2";
  return style + pos;
});
</script>

<style></style>