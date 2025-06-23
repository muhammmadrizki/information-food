import { Hono } from "hono";
import { foods } from "./data/foods";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello everyone!",
    author: "Rizki",
    ok: true,
    number: 123456,
  });
});

app.get("/foods", (c) => {
  return c.json(foods);
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  const food = foods.find((food) => food.id === id);

  if (!food) {
    return c.notFound();
  }

  return c.json(food);
});

export default app;
