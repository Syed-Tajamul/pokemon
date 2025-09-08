
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
import cors from "@elysiajs/cors";

const CreateTodoDTO = createInsertSchema(todos);
export const app = new Elysia({ aot: false })
    .use(cors({
        origin: process.env.CLIENT_ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    }))
    .derive(() => ({ get db() { return drizzle((app.store.env.todo_database)) } }))
    .onError(({ code, error }) => {
        console.log(code)
        return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
    }).use(TodoController)
