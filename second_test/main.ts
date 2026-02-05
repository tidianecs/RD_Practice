import { db } from "./db/db.ts";
import { users } from "./drizzle/schema.ts";

//Just a test to verify all is working
Deno.serve(async () => {
  const data = await db.select().from(users);
  return Response.json(data);
});
