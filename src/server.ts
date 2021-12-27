import { findModulesRaw } from "./modules";

async function main() {
  const result = await findModulesRaw();

  console.log(JSON.stringify(result, null, 2));
}

main();
