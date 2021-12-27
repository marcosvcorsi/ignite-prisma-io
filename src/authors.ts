import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAuthor() {
  // return prisma.author.create({
  //   data: {
  //     name: "John",
  //     books: {
  //       connectOrCreate: {
  //         create: {
  //           name: "Book 1",
  //         },
  //         where: {
  //           name: "Book 1",
  //         },
  //       },
  //     },
  //   },
  // });

  return prisma.author.create({
    data: {
      name: "Mayk",
      books: {
        createMany: {
          data: [
            {
              name: "Book 2",
            },
            {
              name: "Book 3",
            },
          ],
        },
      },
    },
  });
}
