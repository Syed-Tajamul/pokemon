import { D1Database } from "@cloudflare/workers-types";
import { drizzle } from "drizzle-orm/libsql/driver";

export interface Env {
    todo_database: D1Database;
}

export const db = drizzle(process.env.DATABASE_URL!);
