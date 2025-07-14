import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello everyone!",
    author: "Rizki",
    ok: true,
    number: 123456,
  });
});

app.get("/foods", async (c) => {
  const allFoods = await prisma.food.findMany();

  return c.json(allFoods);
});

app.get("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const food = await prisma.food.findUnique({
    where: { id },
  });

  if (!food) {
    return c.notFound();
  }

  return c.json(food);
});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const newFood = {};

  return c.json(newFood);
});

app.delete("/foods", (c) => {
  return c.json("All foods deleted");
});

app.delete("/foods/:id");

app.patch("/foods/:id");

app.put("/foods/:id");

export default app;
