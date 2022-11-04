export default defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  const mongoUtils = await nitroApp.hooks.callHook("mongoUtils");

  const performances = await mongoUtils.getAllRecords();
  return performances?.map((el) => {
    return {
      id: el._id,
      desc: el.description,
      data: el.measurements.map((mes) => [mes.date, mes.value]),
    };
  });
});
