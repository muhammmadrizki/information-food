import { Hono } from "hono";
import { dataFoods } from "./data/foods";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

let foods = dataFoods;
const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Information Foods!",
    foods: "/foods",
  });
});

//GET API
app.get("/foods", async (c) => {
  const allFoods = await prisma.food.findMany();
  console.log(allFoods);

  return c.json(allFoods);
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  const food = dataFoods.find((food) => food.id === id);

  if (!food) {
    return c.notFound();
  }

  return c.json(food);
});

//GET POST API

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

//DELETE API

app.delete("/foods", (c) => {
  foods = [];
  return c.json(foods);
});

//DELETE API by ID
app.delete("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  const filteredFoods = foods.filter((food) => {
    return food.id !== id;
  });

  foods = filteredFoods;

  return c.json(filteredFoods);
});

//PATCH UPDATE FOODS BY ID
app.patch("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const newFood = {
    id: Number(id),
    ...body,
  };

  const updatedFood = foods.map((food) => {
    if (food.id == id) {
      return {
        ...food,
        ...newFood,
      };
    } else {
      return food;
    }
  });

  foods = updatedFood;
  return c.json(newFood);
});

//  PUT UPDATE FOODS BY ID
app.put("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const newFood = {
    id: Number(id),
    ...body,
  };

  const updatedFood = foods.map((food) => {
    if (food.id == id) {
      return newFood;
    } else {
      return food;
    }
  });

  foods = updatedFood;
  return c.json(newFood);
});

export default app;
