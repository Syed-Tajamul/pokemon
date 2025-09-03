import { drizzle } from "drizzle-orm/libsql/driver";

export const db = drizzle(process.env.DATABASE_URL!);
