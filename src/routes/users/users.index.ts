import { OpenAPIHono } from "@hono/zod-openapi";

import * as routes from "./users.routes";
import * as handlers from "./users.handlers";

export const router = new OpenAPIHono().openapi(routes.getOne, handlers.getOne);
