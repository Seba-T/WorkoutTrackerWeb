export default defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  const mongoUtils = await nitroApp.hooks.callHook("mongoUtils");

  const performances = await mongoUtils.getAllRecords();
  return performances?.map((el) => ({
    id: el._id,
    desc: el.description,
    measurements: el.measurements.map((mes) => ({
      value: mes.value,
      date: new Date(mes.date).getTime().toString(),
    })),
  }));
});
