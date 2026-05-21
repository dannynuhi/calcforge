import { articles } from "../data/articles";
import { calculators } from "../data/calculators";

const missing = [
  ...articles.filter((item) => !item.title || !item.description || !item.slug),
  ...calculators.filter((item) => !item.name || !item.description || !item.slug),
];

if (missing.length) {
  console.error(`Metadata validation failed for ${missing.length} items.`);
  process.exit(1);
}

console.log(`Metadata OK: ${articles.length} articles, ${calculators.length} calculators.`);
