
import Elysia from "elysia";
import { pokemonController } from "./pokemon";
import { TodoController } from "../controllers/todo.controller";


export const app = new Elysia({ aot: false }).onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
}).use(TodoController)


app.get('/', () => "Hello from Elysia 🦊")