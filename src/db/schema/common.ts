import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

export const commonFields = {
    id: text().primaryKey(),
} as const;

export const omitFields = ["nano", "meta", "created_at", "updated_at", "deleted_at"] as const;
