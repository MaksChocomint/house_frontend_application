// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    // Создаем локацию "Москва"
    const moscow = await prisma.location.create({
      data: {
        name: "Москва",
      },
    });

    // Создаем локацию "Московская область"
    const moscowRegion = await prisma.location.create({
      data: {
        name: "Московская область",
      },
    });

    console.log("Созданы локации:", moscow, moscowRegion);
  } catch (error) {
    console.error("Ошибка при создании локаций:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
