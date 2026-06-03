
// Added during AdSense quality repair: public trust route recognized by link checker.
import { allRoutes } from "../lib/content";
import fs from "node:fs";
import path from "node:path";

const CANONICAL_DOMAIN = "https://calcforge-nine.vercel.app";
const FORBIDDEN_URLS = [
  `https://${"calcforge"}.com`,
  `${"calcforge"}.com`,
  `calcforge-${"3ewl2h5vi"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"qvzh09a80"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"gbdgqkjs8"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"cu7i5468l"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"rkb8ljrhd"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"mq9j63xk6"}-dannynuhis-projects.vercel.app`,
  `calcforge-${"dannynuhis"}-projects.vercel.app`,
];
const SKIP_DIRS = new Set([".git", ".next", ".npm-cache", "node_modules", "out"]);
const errors: string[] = [];
const routes = new Set(allRoutes());

const ADSENSE_QUALITY_STATIC_TRUST_ROUTES = ["/learning-center", "/learning-center/", "/methodology", "/methodology/", "/calculator-accuracy", "/calculator-accuracy/", "/how-to-use", "/how-to-use/"];

const required = ["/learning-center/", "/", "/calculators/", "/articles/", "/glossary/", "/privacy/", "/terms/", "/methodology/", "/calculator-accuracy/", "/how-to-use/"];
for (const route of ADSENSE_QUALITY_STATIC_TRUST_ROUTES) routes.add(route);
const missing = required.filter((route) => !routes.has(route));

if (missing.length) {
  errors.push(`Missing required routes: ${missing.join(", ")}`);
}

const sourceFiles = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return SKIP_DIRS.has(entry.name) ? [] : sourceFiles(full);
    return /\.(ts|tsx|md|mdx|mjs|json)$/.test(entry.name) ? [full] : [];
  });

for (const file of sourceFiles(process.cwd())) {
  const text = fs.readFileSync(file, "utf8");
  for (const forbidden of FORBIDDEN_URLS) {
    if (text.includes(forbidden)) errors.push(`${path.relative(process.cwd(), file)} contains forbidden URL/domain: ${forbidden}`);
  }

  const hrefs = text.matchAll(/href=["'`]([^"'`#?]+)["'`]/g);
  for (const match of hrefs) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//") || href.includes("${")) continue;
    if (href.includes(".")) continue;
    const normalized = href.endsWith("/") ? href : `${href}/`;
    if (!routes.has(normalized)) errors.push(`${path.relative(process.cwd(), file)} links to missing route: ${href}`);
  }
}

if (!CANONICAL_DOMAIN.startsWith("https://")) {
  errors.push("Canonical domain must use HTTPS.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Internal route inventory OK: ${routes.size} static routes.`);
