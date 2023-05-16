import { mongoUtils } from "../utils/mongoose";
import { authMiddleware } from "../utils/auth-middleware";
export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const query = getQuery(event);
  const performances = await mongoUtils.getSingleRecord(query.id);
  console.log(performances);
  return performances;
});
