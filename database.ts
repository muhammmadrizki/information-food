import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const allFoods = await prisma.food.findMany();

  console.log(allFoods);
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
