export default defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  const mongoUtils = await nitroApp.hooks.callHook("mongoUtils");
  const exerciseList = await mongoUtils.getExerciseList();
  return exerciseList;
});
