import { defineStore } from "pinia";
import type { IConvoMsg } from "~/composables";

export const useConvoFeed = defineStore("convoFeed", () => {
  const convoFeed = ref<IConvoMsg[]>([]);

  const getConvoFeed = computed(() => {
    return convoFeed.value;
  });

  const downloadConvoFeed = async () => {
    try {
      const downloadFeed = await $fetch("/api/convo-feed", {
        method: "GET",
      });
      convoFeed.value = downloadFeed.jsonconvofeed;
    } catch (error) {
      console.error(error);
    }
  };

  async function sendMessage(userId: string, user: string, content: string) {
    const newMsg: IConvoMsg = {
      content,
      convoId: "0",
      dateSent: new Date().toString(),
      userId: userId,
      userName: user,
    };
    convoFeed.value.push(newMsg);

    try {
      await $fetch("/api/convo-feed", {
        method: "POST",
        body: {
          convoMsg: newMsg,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    convoFeed,
    getConvoFeed,
    downloadConvoFeed,
    sendMessage,
  };
});
