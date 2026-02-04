import { users } from "../schema.ts";
import { db } from "../db.ts";
import { eq } from "drizzle-orm";

export async function handleReqUsers(req:Request) {
    const url = new URL(req.url);
    const id = url.pathname.split("/")[2];

    try{
        if(req.method === "GET" && !id){
            const allUsers = await db
                .select()
                .from(users)
            
            return Response.json(allUsers);
        }

        if(req.method === "GET" && id){
            const user = await db
                .select()
                .from(users)
                .where(eq(users.id, Number(id)))

            if(user.length == 0){
                return new Response("User not found", {status: 404})
            }

            return Response.json(user)
        }

        if(req.method === "POST" && !id){
            const body = await req.json();

            const newUser = await db
                .insert(users)
                .values(body)
                .returning();
            
            return Response.json(newUser);
        }

        return new Response("Not implemented", { status: 501 });
    }catch(error){
        console.error(error);
        return new Response("Server error", { status: 500 });
    }
}