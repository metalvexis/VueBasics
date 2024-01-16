<template>
  <UTextarea class="flex-grow border-riptide-200" v-model="convoInput" variant="none" :placeholder="props.placeholder" />
  <UDivider class="my-2 w-0 border-solid border-x-[1px] border-riptide-500 justify-self-stretch" />
  <UButton class="flex-grow-0 border-0 px-4" variant="link" aria-label="Send Message" @click="send">
    <UIcon v-if="!buttonClicked" class="text-lg sm:text-xl" name="i-bi-send-fill" />
    <UIcon v-if="buttonClicked" class="text-lg sm:text-xl" name="i-bi-send" />
  </UButton>
</template>

<script lang="ts" setup>
import type { IConvoTextInputProps, IConvoTextInputEmits } from '~/composables';

const props = defineProps<IConvoTextInputProps>();
const emit = defineEmits<IConvoTextInputEmits>();

const convoInput = ref('');

const buttonClicked = ref(false);

watch(buttonClicked, (clicked) => {
  if (clicked) {
    setTimeout(() => {
      buttonClicked.value = false;
    }, 150);
  }
})

function send() {
  if (convoInput.value) {
    emit('send', convoInput.value);
    convoInput.value = '';
    buttonClicked.value = true;
  }
}
</script>
