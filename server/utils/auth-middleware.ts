// file: ~/server/middleware/auth.ts
import { getServerSession } from "#auth";

export async function authMiddleware(event: any) {
  const session = await getServerSession(event);
  if (!session || session.user?.email !== process.env.EMAIL) {
    throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
  }
}
