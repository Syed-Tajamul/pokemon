/**
 * MockEx Core
 *
 * @author    Lateef Ahmad Baba
 * @copyright Eonyx Infotech LLP
 * @link      https://eonyx.io
 */

import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { commonFields } from "./common";

export const todos = sqliteTable("todos", {
    ...commonFields,
    title: text().notNull(),
    description: text(),
});
