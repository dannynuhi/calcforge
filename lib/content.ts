import { articles } from "@/data/articles";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { glossary } from "@/data/glossary";

export type Calculator = (typeof calculators)[number];
export type Article = (typeof articles)[number];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getCalculator = (slug: string) => calculators.find((calculator) => calculator.slug === slug);
export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
export const getGlossaryTerm = (slug: string) => glossary.find((term) => term.slug === slug);

export const calculatorsByCategory = (category: string) =>
  calculators.filter((calculator) => calculator.category === category);

export const articlesByCategory = (category: string) =>
  articles.filter((article) => article.category === category);

export const relatedCalculators = (calculator: Calculator, limit = 6) =>
  (calculator.relatedCalculators.length
    ? calculator.relatedCalculators
        .map((slug) => calculators.find((item) => item.slug === slug))
        .filter((item): item is Calculator => Boolean(item))
    : calculators.filter((item) => item.category === calculator.category && item.slug !== calculator.slug)
  ).slice(0, limit);

export const relatedArticlesForCalculator = (calculator: Calculator, limit = 4) =>
  (calculator.relatedArticles.length
    ? calculator.relatedArticles
        .map((slug) => articles.find((article) => article.slug === slug))
        .filter((article): article is Article => Boolean(article))
    : articles.filter((article) => article.relatedCalculator === calculator.slug || article.category === calculator.category)
  ).slice(0, limit);

export const relatedArticles = (article: Article, limit = 6) =>
  articles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, limit);

export const allRoutes = () => [
  "/",
  "/calculators/",
  "/articles/",
  "/glossary/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/disclaimer/",
  "/editorial-policy/",
  ...categories.map((category) => `/calculators/${category.slug}/`),
  ...calculators.map((calculator) => `/calculators/${calculator.category}/${calculator.slug}/`),
  ...articles.map((article) => `/articles/${article.slug}/`),
  ...glossary.map((term) => `/glossary/${term.slug}/`),
];
