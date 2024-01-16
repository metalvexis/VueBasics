<template>
  <div v-for="msg in props.convo">

    <h3 class="text-right font-serif text-lg text-cyan-700" v-if="isSender(msg)">You</h3>

    <h3 class="text-leftfont-serif text-lg text-cyan-700" v-if="!isSender(msg)">{{ msg.userName }}</h3>

    <p :class="isSender(msg) ? 'text-right' : 'text-left'" class="font-sans text-base text-indigo-500">
      {{ msg.content }}
    </p>

    <!-- In VueJs, format a date string msg.dateSent to Human readable DD/MM/YYYY format string -->
    <p :class="isSender(msg) ? 'text-right' : 'text-left'" class="text-sm text-riptide-500">
      {{ getTimeDateDisplay(msg.dateSent) }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { IConvoMsg } from '~/composables';
const props = defineProps<{
  senderId: number | string,
  convo?: IConvoMsg[]
}>();

function getTimeDateDisplay(dateString: string): string {
  const s = new Date(dateString);
  const t = `${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}`
  const d = `${s.getDate()}/${s.getMonth() + 1}/${s.getFullYear()}`
  return `${t} ${d}`;
}

watch(() => props.convo, (newVal) => {
  console.log('new convo: ', newVal)
});

function isSender(msg: IConvoMsg) {
  return msg.userId === props.senderId
};
</script>
