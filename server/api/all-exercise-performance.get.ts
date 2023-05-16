import { authMiddleware } from "../utils/auth-middleware";
import { mongoUtils } from "../utils/mongoose";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
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
