import { Hono } from "hono";

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

  return c.json([
    {
      id: 1,
      name: "Burgo",
    },
    {
      id: 2,
      name: "Laksan",
    },
    {
      id: 3,
      name: "Mie Celor",
    },
    {
      id: 4,
      name: "Pindang Patin",
    },
    {
      id: 5,
      name: "Pempek",
    },
    {
      id: 6,
      name: "Ragit",
    },
  ]);
});

export default app;
