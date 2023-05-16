import { mongoUtils } from "../utils/mongoose";
import { authMiddleware } from "../utils/auth-middleware";
export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const strikeRecord = await mongoUtils.getStrikeRecord();
  return strikeRecord;
});
