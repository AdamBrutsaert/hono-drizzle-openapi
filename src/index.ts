import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";

import { router as usersRouter } from "./routes/users/users.index";

const app = new OpenAPIHono();

app.route("/users", usersRouter);

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get(
  "/reference",
  apiReference({
    url: "/doc",
  }),
);

export default app;
