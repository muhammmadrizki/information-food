import { Hono } from "hono";
import { dataFoods } from "./data/foods";

let foods = dataFoods;
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

  const food = dataFoods.find((food) => food.id === id);

  if (!food) {
    return c.notFound();
  }

  return c.json(food);
});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const nextId = dataFoods[dataFoods.length - 1].id + 1 || 1; // Increment the last ID

  const newFood = {
    id: nextId,
    ...body,
  };

  const updatedFoods = [...dataFoods, newFood];

  console.log(updatedFoods);

  //console.log(body);
  foods = updatedFoods;

  return c.json(newFood);
});

export default app;
