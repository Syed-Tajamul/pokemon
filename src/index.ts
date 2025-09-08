// import { Env } from "bun"
// import { Context } from "elysia"
// import { app } from "./routes/app"


// export default {
//   async fetch(request: Request, env: Env, ctx: Context): Promise<Response> {
//     app.store.env = env
//     return await app.handle(request)
//   },
// }

import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { createDbConnection } from "./db/schema";
import { TodoController } from "./controllers/todo.controller";
import { ExecutionContext } from "@cloudflare/workers-types";

// For development server
if (process.env.MODE !== "production") {
  const app = new Elysia()
    .use(cors({
      origin: process.env.CLIENT_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }))
    .derive(() => ({
      get db() {
        return createDbConnection();
      }
    }))
    .use(TodoController)
    .listen(process.env.PORT || 4000);

  console.log(`🦊 Development server running at ${app.server?.hostname}:${app.server?.port}`);
}

// For Cloudflare Workers (production)
export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const app = new Elysia()
      .use(cors({
        origin: process.env.CLIENT_ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
      }))
      .derive(() => ({
        get db() {
          return createDbConnection(env);
        }
      }))
      .use(TodoController);

    return app.handle(request);
  },
};

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
