import { PrismaClient } from "../src/generated/prisma";

import { dataFoods } from "../src/data/foods";

const prisma = new PrismaClient();

async function main() {
  for (const seedFood of dataFoods) {
    const food = await prisma.food.upsert({
      where: { id: seedFood.id },
      update: {},
      create: {
        name: seedFood.name,
        taste: seedFood.taste,
      },
    });

    console.log(`🍳 Food: ${food.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
