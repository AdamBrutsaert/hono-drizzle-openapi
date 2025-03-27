import { defineConfig } from "drizzle-kit";
import invariant from "tiny-invariant";

invariant(import.meta.env.DB_FILE_NAME, "DB_FILE_NAME must be defined");

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: import.meta.env.DB_FILE_NAME,
  },
});
