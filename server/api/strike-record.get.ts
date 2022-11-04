import MongodbUtils from "~/mongodb/mongoose";

export default defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  const mongoUtils: MongodbUtils = await nitroApp.hooks.callHook("mongoUtils");
  const strikeRecord = await mongoUtils.getStrikeRecord();
  return strikeRecord;
});
