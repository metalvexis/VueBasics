<template>
  <UContainer class="flex flex-col gap-8 py-6 relative">
    <h1 class="font-serif text-2xl sm:text-6xl text-riptide-600 dark:text-riptide">Projects</h1>


    <div class="px-8 py-4 flex justify-start">
      <NuxtLink v-for="g of gallery" :to="g.link">
        <UCard :ui="{ background: 'red dark:white' }">
          <template #header>
            <h2 class="text-center font-serif text-xl sm:text-2xl text-riptide-600 dark:text-riptide">
              {{ g.title }}
            </h2>
            <p class="text-center font-sans sm:text-lg text-riptide-600 dark:text-riptide">
              {{ g.description }}
            </p>
          </template>

          <img class="aspect-square object-cover" :src="g.image" alt="Photo of Convo App">
        </UCard>
      </NuxtLink>

    </div>

  </UContainer>
  <!-- <NuxtPage :page-key="route => route.fullPath" /> -->
</template>

<script lang="ts" setup>
type GalleryItem = {
  title: string
  description: string
  image: string
  link: string
};

const gallery: GalleryItem[] = [
  {
    title: 'Convo',
    image: '/screenshots/ss_convo.png',
    link: '/projects/convo',
    description: 'Chat with everyone visiting the site!',
  }
]



</script>