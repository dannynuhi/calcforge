import fs from "node:fs";
import path from "node:path";
import { articles } from "../data/articles";
import { calculators } from "../data/calculators";
import { site } from "../data/site";
import { allRoutes } from "../lib/content";

const OFFICIAL_URL = "https://calcforge-nine.vercel.app";
const OLD_URL_PATTERNS = [
  /https?:\/\/calcforge\.com/gi,
  /calcforge\.com/gi,
  /calcforge-[a-z0-9]+-dannynuhis-projects\.vercel\.app/gi,
  /calcforge-dannynuhis-projects\.vercel\.app/gi,
];
const POLICY_RISK_PATTERNS = [
  { pattern: /click\s+(the\s+)?(ad|ads|advertisement)/i, label: "ad-click encouragement" },
  { pattern: /aggregateRating|ratingValue|reviewRating/i, label: "rating schema without visible ratings" },
  { pattern: /testimonial/i, label: "testimonial language" },
  { pattern: /fake\s+(review|rating)/i, label: "fake review/rating wording" },
  { pattern: /guaranteed\s+(income|earnings|ranking|approval)/i, label: "guaranteed outcome claim" },
  { pattern: /lorem ipsum/i, label: "placeholder text" },
];
const SKIP_DIRS = new Set([".git", ".next", ".npm-cache", ".vercel", "node_modules"]);
type AuditCalculator = {
  slug: string;
  title: string;
  name: string;
  description: string;
  category: string;
  inputs: readonly unknown[];
  formula: string;
  example: string;
  relatedCalculators: readonly string[];
  relatedArticles: readonly string[];
  seoTitle: string;
  metaDescription: string;
  faqs: readonly unknown[];
  disclaimerType?: string;
};
type AuditArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  relatedCalculator: string;
  seoTitle: string;
  metaDescription: string;
};
const calculatorItems = calculators as readonly AuditCalculator[];
const articleItems = articles as readonly AuditArticle[];
const requiredDisclaimerByCategory: Record<string, string> = {
  finance: "financial",
  health: "health",
  time: "time",
};

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return SKIP_DIRS.has(entry.name) ? [] : sourceFiles(full);
    return /\.(ts|tsx|md|mdx|mjs|json|html|txt|xml)$/.test(entry.name) ? [full] : [];
  });
}

function read(file: string) {
  return fs.readFileSync(file, "utf8");
}

function fail(errors: string[]) {
  if (!errors.length) return;
  console.error(errors.join("\n"));
  process.exit(1);
}

function checkUrls() {
  const errors: string[] = [];
  if (site.url !== OFFICIAL_URL) errors.push(`data/site.ts URL must be ${OFFICIAL_URL}; found ${site.url}`);

  for (const file of sourceFiles(process.cwd())) {
    const relative = path.relative(process.cwd(), file);
    const text = read(file);
    for (const pattern of OLD_URL_PATTERNS) {
      pattern.lastIndex = 0;
      const matches = text.match(pattern) || [];
      const badMatches = matches.filter((match) => match !== OFFICIAL_URL);
      if (badMatches.length) errors.push(`${relative} contains outdated URL/domain: ${Array.from(new Set(badMatches)).join(", ")}`);
    }
  }

  fail(errors);
  console.log(`URL audit OK: official URL is ${OFFICIAL_URL}.`);
}

function checkContent() {
  const errors: string[] = [];
  const calculatorSlugs = new Set<string>();
  const articleSlugs = new Set<string>();
  const calculatorTitles = new Map<string, string>();
  const calculatorDescriptions = new Map<string, string>();
  const articleTitles = new Map<string, string>();
  const articleDescriptions = new Map<string, string>();

  for (const calculator of calculatorItems) {
    if (calculatorSlugs.has(calculator.slug)) errors.push(`Duplicate calculator slug: ${calculator.slug}`);
    calculatorSlugs.add(calculator.slug);
    if (!calculator.slug || !calculator.title || !calculator.name || !calculator.description || !calculator.category) {
      errors.push(`Calculator ${calculator.slug || "(missing slug)"} is missing required metadata.`);
    }
    if (!calculator.inputs.length) errors.push(`Calculator ${calculator.slug} has no inputs.`);
    if (!calculator.formula || !calculator.example) errors.push(`Calculator ${calculator.slug} needs formula and example copy.`);
    if (!calculator.relatedCalculators.length) errors.push(`Calculator ${calculator.slug} has no related calculators.`);
    if (!calculator.relatedArticles.length) errors.push(`Calculator ${calculator.slug} has no related articles.`);
    if (calculator.description.length < 80) errors.push(`Calculator ${calculator.slug} intro/description is too short.`);
    if (requiredDisclaimerByCategory[calculator.category] && calculator.disclaimerType !== requiredDisclaimerByCategory[calculator.category]) {
      errors.push(`Calculator ${calculator.slug} needs ${requiredDisclaimerByCategory[calculator.category]} disclaimer type.`);
    }
    const previousTitle = calculatorTitles.get(calculator.seoTitle);
    if (previousTitle) errors.push(`Repeated calculator SEO title: ${calculator.slug} and ${previousTitle}`);
    calculatorTitles.set(calculator.seoTitle, calculator.slug);
    const previousDescription = calculatorDescriptions.get(calculator.metaDescription);
    if (previousDescription) errors.push(`Repeated calculator meta description: ${calculator.slug} and ${previousDescription}`);
    calculatorDescriptions.set(calculator.metaDescription, calculator.slug);
  }

  for (const article of articleItems) {
    if (articleSlugs.has(article.slug)) errors.push(`Duplicate article slug: ${article.slug}`);
    articleSlugs.add(article.slug);
    if (!article.slug || !article.title || !article.description || !article.category || !article.relatedCalculator) {
      errors.push(`Article ${article.slug || "(missing slug)"} is missing required metadata.`);
    }
    if (!calculatorSlugs.has(article.relatedCalculator)) errors.push(`Article ${article.slug} links to missing calculator ${article.relatedCalculator}.`);
    if (article.description.length < 80) errors.push(`Article ${article.slug} description is too short.`);
    const previousTitle = articleTitles.get(article.seoTitle);
    if (previousTitle) errors.push(`Repeated article SEO title: ${article.slug} and ${previousTitle}`);
    articleTitles.set(article.seoTitle, article.slug);
    const previousDescription = articleDescriptions.get(article.metaDescription);
    if (previousDescription) errors.push(`Repeated article meta description: ${article.slug} and ${previousDescription}`);
    articleDescriptions.set(article.metaDescription, article.slug);
  }

  for (const calculator of calculatorItems) {
    for (const slug of calculator.relatedCalculators) {
      if (!calculatorSlugs.has(slug)) errors.push(`Calculator ${calculator.slug} has missing related calculator ${slug}.`);
    }
    for (const slug of calculator.relatedArticles) {
      if (!articleSlugs.has(slug)) errors.push(`Calculator ${calculator.slug} has missing related article ${slug}.`);
    }
  }

  fail(errors);
  console.log(`Content audit OK: ${calculatorItems.length} calculators and ${articleItems.length} articles.`);
}

function checkPolicyLanguage() {
  const errors: string[] = [];
  for (const file of sourceFiles(process.cwd())) {
    const relative = path.relative(process.cwd(), file);
    if (relative.startsWith("out/") || relative === "scripts/site-audit.ts") continue;
    const text = read(file);
    for (const risk of POLICY_RISK_PATTERNS) {
      if (risk.pattern.test(text)) errors.push(`${relative} contains risky wording: ${risk.label}`);
    }
  }
  return errors;
}

function checkLinks() {
  const errors: string[] = [];
  const routes = new Set(allRoutes());
  const requiredRoutes = ["/", "/privacy/", "/terms/", "/about/", "/contact/", "/sitemap.xml", "/robots.txt", "/image-sitemap.xml"];
  const requiredFiles = ["public/google07a1f7eb87e23854.html"];

  for (const route of requiredRoutes) {
    if (route.endsWith(".xml") || route.endsWith(".txt")) continue;
    if (!routes.has(route)) errors.push(`Missing required route: ${route}`);
  }
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(process.cwd(), file))) errors.push(`Missing required file: ${file}`);
  }

  for (const file of sourceFiles(process.cwd())) {
    const relative = path.relative(process.cwd(), file);
    if (relative.startsWith("out/")) continue;
    const text = read(file);
    for (const match of text.matchAll(/href=["'`]([^"'`#?]+)["'`]/g)) {
      const href = match[1];
      if (!href.startsWith("/") || href.startsWith("//") || href.includes("${") || href.includes(".")) continue;
      const normalized = href.endsWith("/") ? href : `${href}/`;
      if (!routes.has(normalized)) errors.push(`${relative} links to missing route: ${href}`);
    }
  }

  fail(errors);
  console.log(`Link audit OK: ${routes.size} app routes and required public files are present.`);
}

function checkSitemaps() {
  const errors: string[] = [];
  const required = ["out/robots.txt", "out/sitemap.xml", "out/image-sitemap.xml", "out/rss.xml", "out/google07a1f7eb87e23854.html"];
  for (const file of required) {
    if (!fs.existsSync(path.join(process.cwd(), file))) errors.push(`Build output missing ${file}. Run npm run build first.`);
  }
  if (errors.length) fail(errors);

  const robots = read("out/robots.txt").trim();
  const expectedRobots = `User-Agent: *\nAllow: /\n\nSitemap: ${OFFICIAL_URL}/sitemap.xml\nSitemap: ${OFFICIAL_URL}/image-sitemap.xml`;
  if (robots !== expectedRobots) errors.push("out/robots.txt does not match the required sitemap references.");

  for (const file of ["out/sitemap.xml", "out/image-sitemap.xml", "out/rss.xml"]) {
    const text = read(file);
    if (!text.includes(OFFICIAL_URL)) errors.push(`${file} does not include the official URL.`);
    for (const pattern of OLD_URL_PATTERNS) {
      pattern.lastIndex = 0;
      const matches = text.match(pattern) || [];
      const badMatches = matches.filter((match) => match !== OFFICIAL_URL);
      if (badMatches.length) errors.push(`${file} includes outdated URL/domain: ${Array.from(new Set(badMatches)).join(", ")}`);
    }
  }

  const verification = read("out/google07a1f7eb87e23854.html").trim();
  if (verification !== "google-site-verification: google07a1f7eb87e23854.html") {
    errors.push("Google verification file has incorrect content.");
  }

  fail(errors);
  console.log("Sitemap audit OK: robots, sitemap, image sitemap, RSS, and verification output are correct.");
}

function checkSeo() {
  const errors: string[] = [];
  for (const calculator of calculatorItems) {
    if (calculator.seoTitle.length > 60) errors.push(`Calculator SEO title over 60 chars: ${calculator.slug}`);
    if (calculator.metaDescription.length < 110 || calculator.metaDescription.length > 170) errors.push(`Calculator meta description length issue: ${calculator.slug}`);
    if (!calculator.faqs.length) errors.push(`Calculator has no visible FAQ content: ${calculator.slug}`);
  }
  for (const article of articleItems) {
    if (article.seoTitle.length > 70) errors.push(`Article SEO title is long: ${article.slug}`);
    if (article.metaDescription.length < 110 || article.metaDescription.length > 170) errors.push(`Article meta description length issue: ${article.slug}`);
  }
  errors.push(...checkPolicyLanguage());
  fail(errors);
  console.log("SEO audit OK: required titles, descriptions, FAQs, and metadata are present.");
}

const command = process.argv[2] || "all";
if (command === "urls") checkUrls();
else if (command === "content") checkContent();
else if (command === "links") checkLinks();
else if (command === "sitemaps") checkSitemaps();
else if (command === "seo") checkSeo();
else {
  checkUrls();
  checkContent();
  checkLinks();
  checkSeo();
  if (fs.existsSync(path.join(process.cwd(), "out"))) checkSitemaps();
}
