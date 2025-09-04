
import Elysia, { error, t } from "elysia";
import { pokemonController } from "./pokemon";
import { TodoController } from "../controllers/todo.controller";
import { todos } from "../db/schema/todo";
import { eq } from "drizzle-orm";
import { failure, success } from "../utils/response";
import { TParamsId } from "../utils/validation";
import { genId } from "../utils/id";
import { createInsertSchema } from "drizzle-typebox";
import { omitFields } from "../db/schema/common";
import { drizzle } from "drizzle-orm/d1";

const CreateTodoDTO = createInsertSchema(todos);
export const app = new Elysia({ aot: false })
    .derive(() => ({ get db() { return drizzle((app.store.env.todo_database)) } }))
    .onError(({ code, error }) => {
        console.log(code)
        return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
    }).use(TodoController)
// export const app = new Elysia()
//     .get("", async () => {
//         // const rows = await db.select().from(todos);
//         // return success({ todos: rows });
//         return "todos list";
//     })
//     .get(
//         "/:id",
//         async ({ params: { id }, env }) => {
//             const db = drizzle(env.todo_database!);
//             const rows = await db
//                 .select()
//                 .from(todos)
//                 .where(eq(todos.id, id))
//                 .limit(1);

//             if (!rows.length) {
//                 return error(404, failure("Todo not found."));
//             }

//             return success({ todo: rows[0] });
//         },
//         { params: TParamsId }
//     )
//     .post(
//         "/todos",
//         async ({ body, env, set }) => {
//             const db = drizzle(env.todo_database!);

//             const rows = await db
//                 .insert(todos).values({
//                     id: genId("todo"),
//                     title: body.title,
//                     description: body.description,
//                 })
//                 .returning();

//             set.status = 201;
//             return success({ todo: rows[0] });
//         },
//         { body: t.Omit(CreateTodoDTO, omitFields) }
//     )