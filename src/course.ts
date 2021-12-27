import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCourse() {
  return prisma.course.create({
    data: {
      name: "Node.js",
      description: "Ignite Node.js",
      duration: 200,
      teacher: {
        connectOrCreate: {
          where: {
            name: "Dani",
          },
          create: {
            name: "Dani",
          },
        },
      },
    },
  });
}

export async function findCourse() {
  return prisma.course.findFirst({
    take: -1,
  });
}

export async function findCourses() {
  return prisma.course.findMany({
    include: {
      teacher: true,
    },
  });
}

export async function updateCourse(name: string) {
  return prisma.course.update({
    where: {
      name,
    },
    data: {
      duration: 100,
    },
  });
}

export async function findCourseWithModule() {
  return prisma.course.findMany({
    include: {
      modules: {
        select: {
          module: true,
        },
      },
    },
  });
}

export async function findCourseByName(name: string) {
  return prisma.course.findMany({
    where: {
      name: {
        startsWith: name,
        mode: "insensitive",
      },
    },
  });
}

export async function findCourseOr(name: string) {
  return prisma.course.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "Node",
          },
        },
      ],
      AND: {
        duration: 200,
      },
    },
  });
}

export async function findCoursesPaginated() {
  return prisma.course.findMany({
    skip: 1,
    take: 2,
  });
}
