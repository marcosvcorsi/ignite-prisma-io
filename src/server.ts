import { createAuthor } from "./authors";

async function main() {
  const result = await createAuthor();

  console.log(result);
}

main();
