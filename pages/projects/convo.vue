<template>
  <UContainer
    class="flex flex-col items-stretch gap-1 sm:gap-2 py-6 relative sm:max-h-[500px] text-center text-riptide-600 dark:text-riptide-300">
    <h1 class="font-serif text-2xl sm:text-6xl">Convo</h1>
    <p class="font-sans text-lg sm:text-xl">
      Chat with everyone visiting the site!
    </p>
  </UContainer>

  <UContainer
    class="flex flex-col sm:flex-row items-stretch px-0 py-2 gap-1 sm:gap-2 sm:py-4 sm:px-4 relative sm:max-h-[500px]">
    <div class="min-h-0 sm:hidden flex flex-col border-solid rounded-md border-2 border-riptide-500">
      <!-- Convo sessions list -->
      <UAccordion :items="convosMobileAccordion" :ui="{ wrapper: 'flex flex-col w-full' }">

        <template #default="{ item, index, open }">
          <UButton variant="ghost">
            <template #leading>
              <UIcon :name="item.icon" class="text-xl" />
              <p>

                {{ item.label }}
              </p>
            </template>

            <template #trailing>
              <UIcon name="i-bi-chevron-down" class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-180']" />
            </template>
          </UButton>
        </template>


        <template #convosMobile>

          <ul class="max-h-[200px] overflow-auto">
            <li v-for="convo in convosList" class="px-4 py-2">
              <UButton variant="ghost" class="w-full">
                {{ convo.text }}
              </UButton>
            </li>
          </ul>

        </template>
      </UAccordion>
    </div>

    <div class="basis-1/3 hidden sm:flex flex-col border-solid rounded-md border-2 border-riptide-500 overflow-auto">
      <!-- Convo sessions list -->
      <p class="font-sans px-4 py-2 text-xl text-riptide-500">Rooms</p>
      <div class="w-full overflow-auto">
        <ul>
          <li v-for="convo in convosList" class="px-4 py-2">
            <UButton variant="ghost" class="w-full">
              {{ convo.text }}
            </UButton>
          </li>
        </ul>
      </div>
    </div>

    <div class="h-min basis-2/3 flex flex-col gap-1 sm:gap-2">
      <div class="h-64 sm:h-80 md:h-96 border-solid rounded-md border-2 border-riptide-500">
        <!-- Convo -->
      </div>

      <div class="flex flex-row border-riptide-500 border-2 rounded ">
        <UTextarea class="flex-grow border-riptide-200" v-model="convoInput" variant="none"
          placeholder="Say Hello to the lil elves :D" />
        <UDivider class="my-2 w-0 border-solid border-x-[1px] border-riptide-500 justify-self-stretch" />
        <UButton class="flex-grow-0 border-0 px-4" variant="link" aria-label="Send Message" @click="sendMessage">
          <UIcon v-if="!buttonClicked" class="text-lg sm:text-xl" name="i-bi-send-fill" />
          <UIcon v-if="buttonClicked" class="text-lg sm:text-xl" name="i-bi-send" />
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types';
const convosMobileAccordion: AccordionItem[] = [
  {
    label: 'Convo Session ID ####',
    icon: 'i-bi-chat-dots-fill',
    defaultOpen: false,
    slot: 'convosMobile',
  }
];

const convosList = ref<Record<string, string>[]>([]);

for (let index = 0; index < 5; index++) {
  convosList.value.push({
    text: `Convo Session ID ${index}`,
  });
}

const convoInput = ref('');

const buttonClicked = ref(false);

watch(buttonClicked, (value) => {
  if (value) {
    setTimeout(() => {
      buttonClicked.value = false;
    }, 150);
  }
})

function sendMessage() {
  console.log('send message');
  buttonClicked.value = true;
  convoInput.value = '';
}

</script>