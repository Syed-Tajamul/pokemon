/**
 * Todo Controller
 *
 * @author    Syed Tajamul
 * @copyright Eonyx Infotech LLP
 * @link      https://eonyx.io
 */

import Elysia, { error, t } from "elysia";
import { eq } from "drizzle-orm";
import { createInsertSchema, createUpdateSchema } from "drizzle-typebox";
import { todos } from "../db/schema/todo";
import { failure, success } from "../utils/response";
import { TParamsId } from "../utils/validation";
import { genId } from "../utils/id";
import { omitFields } from "../db/schema/common";


const CreateTodoDTO = createInsertSchema(todos);
const UpdateTodoDTO = createUpdateSchema(todos);

export const TodoController = new Elysia({
    prefix: "todos",
    detail: {
        tags: ["Todos"],
    }
})
    .get("", async ({ db }) => {
        const rows = await db.select()
            .from(todos)
            .all();
        return success({ todos: rows });

    })
    .get(
        "/:id",
        async ({ params: { id }, db }) => {
            const rows = await db
                .select()
                .from(todos)
                .where(eq(todos.id, id))
                .limit(1);

            if (!rows.length) {
                return error(404, failure("Todo not found."));
            }

            return success({ todo: rows[0] });
        },
        { params: TParamsId }
    )
    .post(
        "",
        async ({ body, db, set }) => {

            const rows = await db
                .insert(todos).values({
                    id: genId("todo"),
                    title: body.title,
                    description: body.description,
                })
                .returning();

            set.status = 201;
            return success({ todo: rows[0] });
        },
        { body: t.Omit(CreateTodoDTO, omitFields) }
    )

    .put(
        "/:id",
        async ({ params: { id }, body, db }) => {
            const rows = await db
                .update(todos)
                .set(body)
                .where(eq(todos.id, id))
                .returning();

            if (!rows.length) {
                return error(404, failure("Todo not found."));
            }

            return success({ todo: rows[0] });
        },
        { params: TParamsId, body: UpdateTodoDTO }
    )
