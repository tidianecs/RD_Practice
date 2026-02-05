import { Hono } from "hono"
import { db } from "../db/db.ts";
import { users } from "../drizzle/schema.ts";
import { eq } from "drizzle-orm";

export const app = new Hono();
const baseUrl: string = "/api/v1/users";

//To create a user
app.post(baseUrl, async(c) =>{
    const body = await c.req.json()
    const newUser = await db
        .insert(users)
        .values(body)
        .returning()

    return c.json(newUser);
});

//To get all the users
app.get(baseUrl, async(c) => {
    const allUsers = await db
        .select()
        .from(users)
    
    return c.json(allUsers);
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
    
    return c.json(user);
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
    return c.json(updatedUser);
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

    return c.json({ message: "User deleted successfully" })
})