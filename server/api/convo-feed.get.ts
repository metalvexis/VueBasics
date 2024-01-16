import { IConvoMsg } from "~/composables";
export default eventHandler(async () => {
  const timerName = `parsejsonconvofeed-${Date.now()}`;
  console.time(timerName);
  const storage = useStorage("data");
  let jsonconvofeed = (await storage.getItem("jsonconvofeed")) as IConvoMsg[];

  let parsedFeed: IConvoMsg[] = [];
  if (jsonconvofeed) {
    try {
      console.log("Trying to load jsonconvofeed: ", jsonconvofeed.length);
      parsedFeed = jsonconvofeed;
    } catch (error) {
      console.log("Load jsonconvofeed FAILED");
      throw createError({
        statusCode: 400,
        statusMessage: "Cannot load jsonconvofeed",
      });
    }
  }

  console.timeEnd(timerName);
  return {
    jsonconvofeed: parsedFeed,
  };
});
