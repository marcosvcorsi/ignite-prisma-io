import { Module, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createModule() {
  // return prisma.module.create({
  //   data: {
  //     name: "Aprendendo Express",
  //     courses: {
  //       create: {
  //         course: {
  //           connect: {
  //             id: "a27cf860-b573-4762-9662-87a1d18acc5e",
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  return prisma.courseModule.create({
    data: {
      course_id: "b54b9265-d4b4-4e3a-aec8-9e6c4d868b70",
      module_id: "a27cf860-b573-4762-9662-87a1d18acc5e",
    },
  });
}

export async function findModulesRaw() {
  return prisma.$queryRaw<Module[]>(Prisma.sql`SELECT * FROM modules`);
}
