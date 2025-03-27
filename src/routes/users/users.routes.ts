import { createRoute, z } from "@hono/zod-openapi";

import { userSchema } from "~/db/schema";

export const getOne = createRoute({
  method: "get",
  path: "/{id}",
  request: {
    params: z.object({
      id: z.coerce
        .number()
        .openapi({ param: { name: "id", in: "path", required: true }, required: ["id"], example: 123 }),
    }),
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: userSchema,
        },
      },
      description: "Retrieve the user",
    },
    404: {
      description: "User not found",
    },
  },
});

export type GetOneRoute = typeof getOne;
