import { findCourses } from "./course";

async function main() {
  const result = await findCourses();

  console.log(result);
}

main();
