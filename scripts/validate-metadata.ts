import { articles } from "../data/articles";
import { calculators } from "../data/calculators";
import { site } from "../data/site";

const CANONICAL_DOMAIN = "https://calcforge-nine.vercel.app";
const errors: string[] = [];

const missing = [
  ...articles.filter((item) => !item.title || !item.description || !item.slug || !item.category || !item.metaDescription || item.metaDescription.length > 170),
  ...calculators.filter((item) => !item.title || !item.name || !item.description || !item.slug || !item.category || !item.metaDescription || item.metaDescription.length > 170),
];

if (missing.length) {
  errors.push(`Metadata validation failed for ${missing.length} items.`);
}

const duplicateSlugs = (items: readonly { slug: string }[], label: string) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) duplicates.add(item.slug);
    seen.add(item.slug);
  }
  if (duplicates.size) errors.push(`Duplicate ${label} slugs: ${Array.from(duplicates).join(", ")}`);
};

duplicateSlugs(articles, "article");
duplicateSlugs(calculators, "calculator");

if (site.url !== CANONICAL_DOMAIN) {
  errors.push(`site.url must be ${CANONICAL_DOMAIN}; found ${site.url}`);
}

const calculatorSlugs = new Set(calculators.map((calculator) => calculator.slug));
const articleSlugs = new Set(articles.map((article) => article.slug));
for (const article of articles) {
  if (!calculatorSlugs.has(article.relatedCalculator)) {
    errors.push(`Article ${article.slug} points to missing calculator ${article.relatedCalculator}`);
  }
}

for (const calculator of calculators) {
  for (const related of calculator.relatedCalculators) {
    if (!calculatorSlugs.has(related)) errors.push(`Calculator ${calculator.slug} points to missing related calculator ${related}`);
  }
  for (const related of calculator.relatedArticles) {
    if (!articleSlugs.has(related)) errors.push(`Calculator ${calculator.slug} points to missing related article ${related}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Metadata OK: ${articles.length} articles, ${calculators.length} calculators, canonical ${site.url}.`);
