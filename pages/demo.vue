<template>
  <UContainer class="flex flex-col gap-8 py-6 relative">
    <UContainer class="flex flex-col p-8">
      <UButton class="basis-1/2" @:click="increment" label="Click Me" variant="solid" />
      <p class="basis-1/2">
        Count: {{ example.counter }}
      </p>
    </UContainer>

    <UContainer class="flex flex-col p-8">
      <UButton class="basis-1/2" @:click="() => socket_send('Hello Ws')" label="Websocket send" variant="solid" />
      <UButton class="basis-1/2" @:click="socket_stop" label="Websocket stop" variant="solid" color="indigo" />
    </UContainer>

    <UContainer class="flex flex-col p-8">
      <UButton class="basis-1/2" @:click="() => send_message('Hello REST')" label="REST send" variant="solid" />
      <p class="basis-1/2">
        Flask responded: {{ send_message_response }}
      </p>
    </UContainer>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

type Example = {
  counter: number;
}

const example: Ref<Example> = ref({
  counter: 0
});

const send_message_response: Ref<string> = ref("");

async function send_message(message: string) {

  console.log("Sending message: " + message);

  try {
    const res = await fetch("http://localhost:8765/hello", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json();
    send_message_response.value = data
    console.log(`Response `, data);
  } catch (error) {
    console.error(error);
  }
}

function increment() {
  example.value.counter += 1;
}

const socket = useWsClient();

function socket_send(message: string) {
  if (!socket.connected) {
    console.log("Connecting socket");
    socket.connect();
  }

  try {
    if (socket.connected)
      socket.send("Client says: " + message);
  } catch (error) {
    console.error(error)
  }
}

function socket_stop() {
  console.log("Stopping socket");
  try {
    socket.disconnect();
    console.log({ socket });
  } catch (error) {
    console.error(error)
  }
}
</script>