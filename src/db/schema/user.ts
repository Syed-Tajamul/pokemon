import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: text().primaryKey(),
    first_name: text().notNull(),
    last_name: text().notNull(),
    email_verified: integer('email_verified', { mode: 'boolean' }).notNull(),
    email: text().unique().notNull(),
    email_verified_at: text(),
    password: text(),
    phone: text(),
    phone_verified_at: text(),
    image: text('image'),
    ip: text(),
    last_login_ip: text(),
    last_login_at: text(),
    refresh_token: text(),
    suspended_at: text(),
    suspension_reason: text(),
    role: text().notNull().default("user"),
});
