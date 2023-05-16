import { mongoUtils } from "../utils/mongoose";
import { authMiddleware } from "../utils/auth-middleware";
export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const exerciseList = await mongoUtils.getExerciseList();
  return exerciseList;
});
