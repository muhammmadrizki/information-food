import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  // return c.text("Hello Semuanya!\nHello Rizki");

  return c.json({
    message: "Hello Semuanya!",
    author: "Rizki",
  });
});

export default app;
