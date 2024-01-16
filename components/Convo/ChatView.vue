<template>
  <div v-for="msg in props.convo">

    <h3 v-if="msg.userId === props.senderId">You</h3>

    <h3 v-if="msg.userId !== props.senderId">{{ msg.userName }}</h3>

    <p>
      {{ msg.content }}
    </p>

    <i>{{ msg.dateSent }}</i>

  </div>
</template>

<script lang="ts" setup>
import type { IConvoMsg } from '~/composables';
const props = defineProps<{
  senderId: number | string,
  convo?: IConvoMsg[]
}>();
</script>
