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
  return c.json(foods);
});

//response API berdasarkan ID
app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));
  console.log({ id });

  const food = foods.find((food) => food.id === id);
  //onst food = foods.find((food) => foods.id === id);

  if (!food) {
    return c.notFound();
  }

  return c.json(food);
});

export default app;
