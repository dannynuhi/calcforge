import { allRoutes } from "../lib/content";

const routes = new Set(allRoutes());
const required = ["/", "/calculators/", "/articles/", "/glossary/", "/privacy/", "/terms/"];
const missing = required.filter((route) => !routes.has(route));

if (missing.length) {
  console.error(`Missing required routes: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`Internal route inventory OK: ${routes.size} static routes.`);
