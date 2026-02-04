import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.ts";

const client = postgres("postgres://admin:admin@localhost:5432/testDenoApi");

export const db = drizzle(client, { schema });
