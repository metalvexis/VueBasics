<template>
  <UContainer class="h-screen">
    Test Demo Page
    <UButton @:click="increment" label="Click Me" variant="solid" />
    Count: {{ example.counter }}
  </UContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { Manager, io } from 'socket.io-client';

type Example = {
  counter: number;
}

const example: Ref<Example> = ref({
  counter: 0
});

const wsManager = new Manager("localhost:8765");

const socket = wsManager.socket('/');

// socket.
socket.on("open", () => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.on("message", (event) => {
  console.log("Message from server ", event.data);
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

const sendMessage = (message: string) => {
  console.log({ socket });

  console.log("Sending message: " + message);

  socket.send("Client says: " + message, (...arg: any) => console.log('callback', arg));
}

function increment() {
  example.value.counter += 1;
  sendMessage("test message send");
}
</script>