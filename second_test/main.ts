import { app } from "./routes/users.routes.ts";

Deno.serve(app.fetch);
