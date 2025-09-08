import { D1Database } from "@cloudflare/workers-types";
// import { drizzle } from "drizzle-orm/libsql/driver";
import { app } from "../../routes/app";
import { drizzle } from "drizzle-orm/d1";

export interface Env {
    todo_database: D1Database;
}

// export const db = drizzle(process.env.DATABASE_URL!);
export const db = drizzle((app.store.env.todo_database));
