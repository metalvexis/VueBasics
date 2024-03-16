<template>
  <UContainer class="flex flex-col gap-8 py-6 relative">
    <UContainer class="absolute px-0 py-0 left-0 right-0">
      <h1
        class="font-serif font-bold text-3xl md:text-7xl text-riptide-600/50 dark:text-riptide/10 text-center md:text-left">
        Software Engineer</h1>
    </UContainer>
    <UContainer class="relative w-full md:flex md:flex-row-reverse p-10 rounded-md bg-cyan-50/50 dark:bg-cyan-50/5">



      <UContainer class="z-10 basis-2/5 flex justify-center">
        <img class="rounded-full aspect-square object-cover border-4 border-cyan-200 dark:border-riptide-600 max-w-52"
          src="https://avatars.githubusercontent.com/u/20812784?v=4" alt="Photo of James Paulo Saballegue">
      </UContainer>

      <UContainer class="z-10 basis-3/5 flex flex-col gap-4 justify-center py-4">
        <div>
          <p
            class="font-serif font-bold text-center leading-loose md:leading-relaxed text-lg md:text-3xl text-riptide-600 dark:text-riptide">
            7 Years in the Industry, <br />A lifetime of a hobby.
          </p>
        </div>

        <span class="text-center">
          <UButton icon="i-heroicons-envelope" to="mailto:jp.saballegue@gmail.com" label="Work with James" />
        </span>
      </UContainer>
    </UContainer>

    <UContainer class="w-full flex flex-row gap-8 justify-center py-4">
      <UButton class="rounded-full bg-indigo dark:bg-indigo-300" size="xl" icon="i-bi-github"
        to="https://github.com/metalvexis" label="Github" />
      <UButton class="rounded-full bg-indigo dark:bg-indigo-300" size="xl" icon="i-bi-filetype-pdf"
        to="https://drive.google.com/file/d/1GTiDrgBJ0lATgszdhLX9k401CRgpq445/view?usp=sharing" label="Resume" />
      <UButton class="rounded-full bg-indigo dark:bg-indigo-300" size="xl" icon="i-bi-linkedin"
        to="https://www.linkedin.com/in/jpsaballegue" label="LinkedIn" />
    </UContainer>

    <h1 class="font-serif font-bold text-xl text-center text-riptide-600">History</h1>

    <UContainer class="w-full flex flex-wrap flex-column">
      <TLineNode class="w-full" v-for="(exp, index) in expNodes" :title="exp.title" :subtitle="exp.subtitle"
        :start-date="exp.startDate" :end-date="exp.endDate" :description="exp.description" :tech-stack="exp.techStack"
        :position="exp.position" />
    </UContainer>

  </UContainer>
</template>

<script setup lang="ts">
import type { ITLineNodeProps } from '@/composables/index';

const expNodes: ITLineNodeProps[] = [
  {
    title: "Senior Software Engineer",
    subtitle: "Coherent",
    startDate: "Nov 2022",
    endDate: "Present",
    description: "[Confidential]",
    techStack: ['NodeJs', 'PostgreSQL', 'React', 'Typescript', 'Python'],
    position: "left"
  },
  {
    title: "Technical Lead Developer",
    subtitle: "PDAX",
    startDate: "May 2021",
    endDate: "November 2022",
    description: "I architected and implemented an OLTP system for processing crypto-currency transactions deployed as microservices. My services achieved 99.99% uptime and were able to execute 500 concurrent transactions. I also trained my team on maintaining and updating our microservices.",
    techStack: ['AWS', 'Docker', 'NodeJs', 'Redis', 'PostgreSQL', 'Typescript', 'Go'],
    position: "right"
  },
  {
    title: "Full Stack Developer",
    subtitle: "1Day Group Ltd.",
    startDate: "July 2017",
    endDate: "May 2021",
    description: "I built the back-end system for sending and receiving bookings via a global distribution system for all our partner hotels across South East Asia. I also collaborated with our front-end developers to provide our users with a smooth experience for managing and arranging bookings for our partner hotels with numerous rooms and properties.",
    techStack: ['AWS', 'DigitalOcean', 'Docker', 'MongoDb', 'ExpressJs', 'React', 'NodeJs'],
    position: "left"
  },
  {
    title: "Web Developer",
    subtitle: "Auxilius Online",
    startDate: "October 2016",
    endDate: "July 2017",
    description: "I wireframed, designed and develop the frontend for Auxilius Online's web apps catered to all Child care facilities in Orlando, Florida",
    techStack: [],
    position: "right"
  }
];

</script>