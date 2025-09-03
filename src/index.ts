import { Env } from "bun"
import { Context } from "elysia"
import { app } from "./routes/app"

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,

  ): Promise<Response> {
    // const expectedAuth = `Basic ${btoa(`admin:${env.BASIC_AUTH_PASSWORD}`)}`
    const pathname = new URL(request.url).pathname

    return await app.fetch(request)
  },
}

// /**
//  * MockEx Core
//  *
//  * @author    Afaan Bilal
//  * @copyright Eonyx Infotech LLP
//  * @link      https://eonyx.io
//  */

// import cors from "@elysiajs/cors";
// import { Elysia } from "elysia";
// import { TodoController } from "./controllers/todo.controller";

// const app = new Elysia()
//   .use(cors({
//     origin: process.env.CLIENT_ORIGIN,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
//   }))
//   .use(TodoController)
//   .listen(process.env.PORT!);
