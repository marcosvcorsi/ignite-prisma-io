import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await create();
  // await findOne();
  await update();
}

async function create() {
  const result = await prisma.course.create({
    data: {
      name: "Node.js",
      description: "Ignite Node.js",
      duration: 200,
    },
  });

  console.log(result);
}

async function findOne() {
  const result = await prisma.course.findFirst({
    take: -1,
  });

  console.log(result);
}

async function update() {
  const result = await prisma.course.update({
    where: {
      name: "Node.js",
    },
    data: {
      duration: 100,
    },
  });

  console.log(result);
}

main();
