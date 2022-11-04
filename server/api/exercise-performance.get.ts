export default defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  const mongoUtils = await nitroApp.hooks.callHook("mongoUtils");
  const query = getQuery(event);

  const performances = await mongoUtils.getRecord(query.id);
  console.log(performances);
  return performances?.map((el) => [el.date, el.value]);
});
