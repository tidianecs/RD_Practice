import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://admin:admin@localhost:5432/testDenoApi",
  },
} satisfies Config;
