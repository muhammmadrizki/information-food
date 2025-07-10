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

//GET API
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

//   const filteredSchool = schools.filter((school) => {
//     return school.id != id;
//   });

//   schools = filteredSchool;

//   return c.json(filteredSchool);
// });

export default app;
