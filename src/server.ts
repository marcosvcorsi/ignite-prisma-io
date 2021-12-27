import { findCourseWithModule } from "./course";

async function main() {
  const result = await findCourseWithModule();

  console.log(JSON.stringify(result, null, 2));
}

main();
