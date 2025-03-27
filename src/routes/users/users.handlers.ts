import type { RouteHandler } from "@hono/zod-openapi";
import { eq } from "drizzle-orm";

import { db } from "~/db";
import { usersTable } from "~/db/schema";

import type { GetOneRoute } from "./users.routes";

export const getOne: RouteHandler<GetOneRoute> = async (ctx) => {
  const { id } = ctx.req.valid("param");
  console.log(`Fetching user with id: ${id}`);

  const result = await db.select().from(usersTable).where(eq(usersTable.id, id));
  const user = result.at(0) ?? null;

  if (!user) {
    return ctx.notFound();
  }

  return ctx.json(user);
};
