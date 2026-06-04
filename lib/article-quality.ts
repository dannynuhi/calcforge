const LOW_VALUE_PATTERN_SUFFIXES = [
  "beginner-guide",
  "common-mistakes",
  "cost-factors",
  "estimation-method",
  "formula-and-example",
  "planning-checklist",
  "practical-examples",
  "quick-worksheet",
  "simple-explanation",
  "step-by-step",
];

const KEEP_INDEXED_ARTICLE_SLUGS = new Set([
  "how-to-calculate-a-discount",
  "how-to-calculate-days-between-dates",
  "how-to-calculate-percentage-decrease",
  "how-to-calculate-percentage-increase",
  "how-to-calculate-sales-tax",
  "how-to-compare-unit-prices",
  "how-to-estimate-monthly-payments",
  "how-to-set-a-savings-goal",
  "what-a-bmi-calculator-can-and-cannot-tell-you",
]);

export function isIndexableArticleSlug(slug: string) {
  if (KEEP_INDEXED_ARTICLE_SLUGS.has(slug)) return true;
  return !LOW_VALUE_PATTERN_SUFFIXES.some((suffix) => slug.endsWith(`-${suffix}`));
}

export function indexableArticles<T extends { slug: string }>(items: readonly T[]) {
  return items.filter((item) => isIndexableArticleSlug(item.slug));
}
