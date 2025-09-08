// import { D1Database } from "@cloudflare/workers-types";
// import { drizzle } from "drizzle-orm/libsql/driver";

// export interface Env {
//     todo_database: D1Database;
// }

// export const db = drizzle(process.env.DATABASE_URL!);

import { D1Database } from "@cloudflare/workers-types";
import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzleLibSQL } from "drizzle-orm/libsql/driver";
import { createClient } from '@libsql/client';

export interface Env {
    todo_database: D1Database;
}

export function createDbConnection(env?: Env) {
    if (process.env.MODE === "production" && env?.todo_database) {
        return drizzleD1(env.todo_database);
    } else {
        const dbUrl = process.env.DATABASE_URL || 'file:local.db';
        const client = createClient({
            url: dbUrl,
        });
        return drizzleLibSQL(client);
    }
}

export type DB = ReturnType<typeof createDbConnection>;

export const db = createDbConnection();
