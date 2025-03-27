import { drizzle } from "drizzle-orm/bun-sqlite";
import invariant from "tiny-invariant";

invariant(import.meta.env.DB_FILE_NAME, "DB_FILE_NAME must be defined");

export const db = drizzle(import.meta.env.DB_FILE_NAME);
