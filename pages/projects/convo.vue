<template>
  <UContainer
    class="flex flex-col items-stretch gap-1 sm:gap-2 py-6 relative text-center text-riptide-600 dark:text-riptide-300">
    <h1 class="font-serif text-2xl sm:text-6xl">Convo</h1>
    <p class="font-sans text-lg sm:text-xl">
      Chat with everyone visiting the site!
    </p>
  </UContainer>

  <UContainer class="min-h-[300px] sm:min-h-[500px] flex flex-col sm:flex-row px-0 py-2 gap-1 sm:gap-2 sm:py-4 sm:px-4">
    <div class="basis-1/3 sm:hidden flex flex-col border-solid rounded-md border-2 border-riptide-500">
      <ConvoRoomList variant="mobile" :roomList="roomList" @selectRoom="moveToRoom" />
    </div>

    <div class="basis-1/3 hidden sm:flex flex-col border-solid rounded-md border-2 border-riptide-500 overflow-auto">
      <!-- Convo sessions list -->
      <ConvoRoomList :roomList="roomList" @selectRoom="moveToRoom" />
    </div>


    <div class="basis-2/3 flex-grow flex flex-col gap-1 sm:gap-2">

      <div class="flex-grow flex flex-col border-solid rounded-md border-2 border-riptide-500 ">
      </div>

      <div class="basis-1/5 flex flex-row border-riptide-500 border-2 rounded ">
        <!-- <ConvoTextInput :va/> -->
        <ConvoTextInput @send="sendMessage" :placeholder="startingMsg" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types';
import type { IConvoRoom } from '~/composables';
const convosMobileAccordion: AccordionItem[] = [
  {
    label: 'Convo Session ID ####',
    icon: 'i-bi-chat-dots-fill',
    defaultOpen: false,
    slot: 'convosMobile',
  }
];

const roomList = ref<IConvoRoom[]>([]);

function moveToRoom(id: number | string) {
  console.log('moving to room: ', id)
}

for (let index = 0; index < 5; index++) {
  roomList.value.push({
    id: index,
    name: `Convo Session ID ${index}`,
    userCount: Math.random() * 10,
  });
}

const startingMsg = 'Hello World!'
function sendMessage(s: string) {
  console.log('sending msg: ', s)
}

</script>