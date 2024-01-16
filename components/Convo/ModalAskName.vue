<template>
  <UModal v-model="askUserModalOpen" preventClose :ui="{
    inner: 'fixed inset-0 overflow-y-auto flex justify-center',
    container: 'flex min-h-full items-end sm:items-center justify-center text-center max-w-[500px]'
  }">
    <div class="p-4 flex justify-between gap-2">
      <UButton variant="outline" @click="randomizeUser">
        <UIcon class="text-lg sm:text-xl" name="i-lucide-dices" dynamic />
      </UButton>
      <UInput autofocus :autofocusDelay="100" class="flex-grow border-riptide-200" variant="outline" v-model="currentUser"
        :placeholder="placeholderName" />
      <UButton @click="setUser" variant="outline">Let's GO!</UButton>
    </div>
  </UModal>
</template>

<script lang="ts" setup>

const emit = defineEmits<{
  (e: 'setName', name: string): void,
}>();

const askUserModalOpen = ref(false);

setTimeout(() => {
  askUserModalOpen.value = true;
}, 200);

const currentUser = ref('')
const placeholderName = ref('What\'s your name?');

function randomizeUser() {
  placeholderName.value = 'Randomizing...';
  fetch('https://randomuser.me/api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      currentUser.value = res.results[0].name.first;
    });
};

function setUser() {
  if (currentUser.value !== '') {
    askUserModalOpen.value = false;
    emit('setName', currentUser.value);
  }
}
</script>