
// // import Elysia from "elysia";
// // import { TodoController } from "../controllers/todo.controller";
// // import { drizzle } from "drizzle-orm/d1";
// // import cors from "@elysiajs/cors";

// // export const app = new Elysia({ aot: false })
// //     .use(cors({
// //         origin: process.env.CLIENT_ORIGIN,
// //         methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
// //         credentials: true,
// //         allowedHeaders: ["Content-Type", "Authorization"],
// //     }))
// //     .derive(() => ({ get db() { return drizzle((app.store.env.todo_database)) } }))
// //     .onError(({ code, error }) => {
// //         console.log(code)
// //         return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
// //     }).use(TodoController)


// import { Elysia } from "elysia";
// import cors from "@elysiajs/cors";
// import { createDbConnection } from "../db/schema";
// import { TodoController } from "../controllers/todo.controller";
// import { ExecutionContext } from "@cloudflare/workers-types";

// // For development server
// if (process.env.MODE !== "production") {
//     const app = new Elysia()
//         .use(cors({
//             origin: process.env.CLIENT_ORIGIN,
//             methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//             credentials: true,
//             allowedHeaders: ["Content-Type", "Authorization"],
//         }))
//         .derive(() => ({
//             get db() {
//                 return createDbConnection();
//             }
//         }))
//         .use(TodoController)
//         .listen(process.env.PORT || 4000);

//     console.log(`🦊 Development server running at ${app.server?.hostname}:${app.server?.port}`);
// }

// export default {
//     async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
//         const app = new Elysia()
//             .use(cors({
//                 origin: process.env.CLIENT_ORIGIN,
//                 methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//                 credentials: true,
//                 allowedHeaders: ["Content-Type", "Authorization"],
//             }))
//             .derive(() => ({
//                 get db() {
//                     return createDbConnection(env);
//                 }
//             }))
//             .use(TodoController);

//         return app.handle(request);
//     },
// };
