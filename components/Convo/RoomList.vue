<template>
  <span v-if="props.variant == 'mobile'">
    <UAccordion :items="roomListAccordion" :ui="{ wrapper: 'flex flex-col w-full' }">

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
          <li v-for="room in props.roomList" class="px-4 py-2">
            <UButton variant="ghost" class="w-full">
              {{ room.name }}
            </UButton>
          </li>
        </ul>

      </template>
    </UAccordion>
  </span>
  <span v-else>
    <p class="font-sans px-4 py-2 text-xl text-riptide-500">Rooms</p>
    <div class="w-full overflow-auto">
      <ul>
        <li v-for="room in props.roomList" class="px-4 py-2">
          <UButton variant="ghost" class="w-full" @click="selectRoom(room.id)">
            {{ room.name }}
          </UButton>
        </li>
      </ul>
    </div>
  </span>
</template>

<script lang="ts" setup>
import type { IConvoRoom } from '~/composables';
const props = defineProps<{
  variant?: 'mobile' | 'desktop',
  roomList: IConvoRoom[]
}>();
const emit = defineEmits<{
  (e: 'selectRoom', roomId: number | string): void;
}>();

const roomListAccordion = computed(() => {
  return props.roomList.map((room) => {
    return {
      label: room.name,
      icon: 'i-bi-chat-left-text-fill',
      onClick: () => {
        selectRoom(room.id);
      }
    }
  })
})

function selectRoom(id: number | string) {
  console.log('selecting room: ', id)
  emit('selectRoom', id);
}

</script>

<style></style>