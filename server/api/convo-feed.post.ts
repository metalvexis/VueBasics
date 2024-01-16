import { IConvoMsg } from "~/composables";
export default eventHandler(async (event) => {
  const timerName = `updatejsonconvofeed-${Date.now()}`;
  console.time(timerName);
  const body = await readBody(event);

  if (!body || !body.convoMsg) {
    throw createError({
      statusCode: 400,
      statusMessage: "convoMsg is required",
    });
  }

  const inputMsg: IConvoMsg = body.convoMsg;
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
        statusMessage: "Cannot parse jsonconvofeed",
      });
    }
  }

  parsedFeed.push(inputMsg);

  try {
    storage.setItem("jsonconvofeed", JSON.stringify(parsedFeed));
  } catch (error) {
    console.log("Load jsonconvofeed FAILED");
    throw createError({
      statusCode: 400,
      statusMessage: "Cannot update jsonconvofeed",
    });
  }

  console.log("Update jsonconvofeed SUCCESS");
  console.timeEnd(timerName);
  return {
    jsonconvofeed: parsedFeed,
  };
});
