import { Hono } from "hono";
import { foods } from "./data/foods";

const app = new Hono();

app.get("/", (c) => {
  // return c.text("Hello Semuanya!\nHello Rizki");

  return c.json({
    message: "Hello Semuanya!",
    author: "Rizki",
    ok: true,
    number: 123456,
  });
});

app.get("/foods", (c) => {
  // return c.text("Hello Semuanya!\nHello Rizki");

  return c.json(foods);
});

export default app;
