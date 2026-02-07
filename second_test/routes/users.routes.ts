import { Hono } from "hono"
import { db } from "../db/db.ts";
import { users } from "../drizzle/schema.ts";
import { eq } from "drizzle-orm";

export const app = new Hono();
const baseUrl: string = "/api/v1/users";
const corsConfig = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
};

//To create a user
app.post(baseUrl, async(c) =>{
    const body = await c.req.json()
    const newUser = await db
        .insert(users)
        .values(body)
        .returning()

    return c.json(newUser, { headers: corsConfig });
});

//To get all the users
app.get(baseUrl, async(c) => {
    const allUsers = await db
        .select()
        .from(users)
    
    return c.json(allUsers, { headers: corsConfig });
});

//To get a specific user
app.get(baseUrl + `/:id`, async(c) => {
    const idParam = await c.req.param("id");
    if (!idParam) {
        return c.json({ error: "User ID is required" }, 400);
    }
    const id = parseInt(idParam);
    const user = await db
        .select()
        .from(users)
        .where(eq(users.id, id))
    
    return c.json(user, { headers: corsConfig });
})

//To update a specific user
app.put(baseUrl + `/:id`, async(c) => {
    const idParam = await c.req.param("id");
    if (!idParam) {
        return c.json({ error: "User ID is required" }, 400);
    }
    const id = parseInt(idParam);
    const body = await c.req.json();
    const updatedUser = await db
        .update(users)
        .set(body)
        .where(eq(users.id, id))
        .returning()
    return c.json(updatedUser, { headers: corsConfig });
})

//To delete a specific user
app.delete(baseUrl + `/:id`, async(c) => {
    const idParam = c.req.param("id");
    if (!idParam) {
        return c.json({ error: "User ID is required" }, 400);
    }
    const id = parseInt(idParam);
    const deletedUser = await db
        .delete(users)
        .where(eq(users.id, id))
        .returning()

    return c.json({ message: "User deleted successfully" }, { headers: corsConfig })
})