import type { Config } from "drizzle-kit";

export default{
    schema: "../models/user.model",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgres://admin:admin@localhost:5432/testDenoApi"
    }
} satisfies Config;