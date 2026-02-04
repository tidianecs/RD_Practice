import { handleReqUsers } from "./routes/users.route.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/users")) {
    return handleReqUsers(req);
  }

  return new Response("Not Found", { status: 404 });
}

// Starting of the server
Deno.serve({ port: 8000 }, handler);