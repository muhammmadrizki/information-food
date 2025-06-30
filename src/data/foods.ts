type Food = {
  id: number;
  name: string;
  tastes?: Taste[];
};

type Taste = "savory" | "spicy" | "sweet" | "bitter";

export const foods: Food[] = [
  {
    id: 1,
    name: "Burgo",
    tastes: ["savory"],
  },
  {
    id: 2,
    name: "Laksan",
    tastes: ["spicy"],
  },
  {
    id: 3,
    name: "Mie Celor",
    tastes: ["savory"],
  },
  {
    id: 4,
    name: "Pindang Patin",
    tastes: ["spicy"],
  },
  {
    id: 5,
    name: "Pempek",
    tastes: ["savory", "spicy", "sweet"],
  },
  {
    id: 6,
    name: "Ragit",
    tastes: ["savory"],
  },
  {
    id: 7,
    name: "Tekwan",
    tastes: ["savory"],
  },
  {
    id: 8,
    name: "Model",
    tastes: ["savory"],
  },
  {
    id: 9,
    name: "Celimpungan",
    tastes: ["savory"],
  },
  {
    id: 10,
    name: "Kemplang",
    tastes: ["savory"],
  },
];
