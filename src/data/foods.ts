type Food = {
  id: number;
  name: string;
  taste?: "savory" | "spicy" | "sweet";
};

export const foods: Food[] = [
  {
    id: 1,
    name: "Burgo",
    taste: "savory",
  },
  {
    id: 2,
    name: "Laksan",
    taste: "spicy",
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
];
