import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.course.create({
    data: {
      name: "Node.js",
      description: "Ignite Node.js",
      duration: 200,
    },
  });

  console.log(result);
}

main();
