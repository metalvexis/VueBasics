<template>
  <ConvoModalAskName @setName="setName" />

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

      <div ref="refChatView"
        class="px-6 py-4 flex-grow flex flex-col gap-2 border-solid rounded-md border-2 border-riptide-500 max-h-[500px] overflow-y-auto">
        <!-- Convo messages -->
        <ClientOnly>
          <ConvoChatView :sender-id="userIp" :convo="getConvoFeed" />
        </ClientOnly>
      </div>

      <div class="basis-1/5 flex flex-row border-riptide-500 border-2 rounded ">
        <!-- <ConvoTextInput :va/> -->
        <ConvoTextInput @send="(msg) => sendMessage(userIp, userName, msg)" :placeholder="startingMsg" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types';
import type { IConvoRoom } from '~/composables';

const convoFeedStore = useConvoFeed();
const { getConvoFeed, convoFeed } = storeToRefs(convoFeedStore);

const userName = ref('');
const userIp = ref('0.0.0.0');
fetch('https://api.ipify.org/?format=json', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => {
    if (response.ok) {
      response.json().then(json => {
        userIp.value = json.ip;
      });
    }
    return response;
  })
  .catch(error => console.error('Error:', error));

function setName(name: string) {
  userName.value = name;

  convoFeedStore.downloadConvoFeed();
}

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

for (let index = 0; index < 1; index++) {
  roomList.value.push({
    id: index,
    name: `Convo Session ID ${index}`,
    userCount: Math.random() * 10,
  });
}

const startingMsg = computed(() => {
  if (userName.value !== '') {
    return `Hi, ${userName.value}! Say hello to the other visitors!`
  } else {
    return 'Say hello to the other visitors!'
  }
});

const refChatView = ref<HTMLDivElement | null>(null);

function sendMessage(ip: string, username: string, s: string) {
  console.log('sending : ', ip, username, s)
  convoFeedStore.sendMessage(ip, username, s);

  setTimeout(() => {
    if (refChatView.value) {
      refChatView.value.scrollTop = refChatView.value?.scrollHeight
    }
  }, 100)

}

watch([refChatView, convoFeed], () => {
  setTimeout(() => {
    if (refChatView.value) {
      console.log('scrolling to bottom')
      refChatView.value.scrollTop = refChatView.value?.scrollHeight
    }
  }, 100)
});

setInterval(() => {
  convoFeedStore.downloadConvoFeed();
}, 3000);
</script>