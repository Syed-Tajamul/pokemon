// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//     dialect: process.env.DATABASE_DIALECT! as "sqlite" | "turso",
//     schema: "./src/db/*",
//     out: "./drizzle",
//     dbCredentials: {
//         url: process.env.DATABASE_URL!,
//     },
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: process.env.DATABASE_DIALECT! as "sqlite" | "turso",
    schema: "./src/db/*",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});

// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//     dialect: "sqlite",
//     schema: "./src/db/schema/*",
//     out: "./drizzle",
// });