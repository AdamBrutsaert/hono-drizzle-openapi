import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "@hono/zod-openapi";

export const usersTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const userSchema = z
  .object({
    id: z.number().openapi({ title: "Identifier", description: "The user's identifier", example: 123 }),
    name: z.string().openapi({ title: "Name", description: "The user's name", example: "John Doe" }),
    age: z.number().openapi({ title: "Age", description: "The user's age", example: 30 }),
    email: z
      .string()
      .email()
      .openapi({ title: "Email", description: "The user's email", example: "john.doe@example.com" }),
  })
  .openapi("User", { title: "User", description: "An user" });
