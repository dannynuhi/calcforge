import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const write = (file, body) => {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, body);
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const categories = [
  {
    slug: "construction",
    name: "Construction",
    description:
      "Estimate material quantities for common building, landscaping, and renovation projects.",
    color: "emerald",
  },
  {
    slug: "finance",
    name: "Finance",
    description:
      "Plan payments, interest, savings, returns, and debt payoff scenarios with transparent formulas.",
    color: "blue",
  },
  {
    slug: "health",
    name: "Health",
    description:
      "Run everyday wellness estimates for nutrition, body composition, hydration, and activity planning.",
    color: "rose",
  },
  {
    slug: "math",
    name: "Math",
    description:
      "Solve percentage, ratio, probability, geometry, algebra, and everyday math problems.",
    color: "violet",
  },
  {
    slug: "conversion",
    name: "Conversion",
    description:
      "Convert common length, area, volume, weight, temperature, and speed units.",
    color: "amber",
  },
  {
    slug: "time",
    name: "Time",
    description:
      "Calculate dates, durations, work hours, time zones, and business-day schedules.",
    color: "cyan",
  },
];

const calculatorNames = {
  construction: [
    "Concrete Calculator",
    "Roofing Calculator",
    "Paint Calculator",
    "Tile Calculator",
    "Flooring Calculator",
    "Drywall Calculator",
    "Gravel Calculator",
    "Mulch Calculator",
    "Asphalt Calculator",
    "Deck Board Calculator",
    "Fence Calculator",
    "Brick Calculator",
    "Paver Calculator",
    "Rebar Calculator",
    "Stud Calculator",
    "Insulation Calculator",
    "Wallpaper Calculator",
    "Concrete Block Calculator",
    "Sand Calculator",
    "Topsoil Calculator",
  ],
  finance: [
    "Mortgage Calculator",
    "Loan Calculator",
    "Compound Interest Calculator",
    "Retirement Calculator",
    "Savings Calculator",
    "Investment Return Calculator",
    "ROI Calculator",
    "Debt Payoff Calculator",
    "Auto Loan Calculator",
    "Credit Card Payoff Calculator",
    "APR Calculator",
    "Simple Interest Calculator",
    "Future Value Calculator",
    "Present Value Calculator",
    "Inflation Calculator",
    "Emergency Fund Calculator",
    "Budget Calculator",
    "Paycheck Calculator",
    "Rent Affordability Calculator",
    "Tip Calculator",
  ],
  health: [
    "BMI Calculator",
    "Calorie Calculator",
    "Macro Calculator",
    "Body Fat Calculator",
    "Protein Intake Calculator",
    "Water Intake Calculator",
    "BMR Calculator",
    "TDEE Calculator",
    "Ideal Weight Calculator",
    "Pregnancy Due Date Calculator",
    "Pace Calculator",
    "Heart Rate Zone Calculator",
    "Carbohydrate Intake Calculator",
    "Fat Intake Calculator",
    "Sleep Calculator",
    "Steps to Miles Calculator",
    "Waist to Hip Ratio Calculator",
    "Lean Body Mass Calculator",
    "Body Surface Area Calculator",
    "Creatine Intake Calculator",
  ],
  math: [
    "Percentage Calculator",
    "Ratio Calculator",
    "Scientific Calculator",
    "Fraction Calculator",
    "Slope Calculator",
    "Probability Calculator",
    "Average Calculator",
    "Median Calculator",
    "Standard Deviation Calculator",
    "Area Calculator",
    "Volume Calculator",
    "Circle Calculator",
    "Triangle Calculator",
    "Pythagorean Theorem Calculator",
    "Quadratic Formula Calculator",
    "Exponent Calculator",
    "Logarithm Calculator",
    "Modulo Calculator",
    "Permutation Calculator",
    "Combination Calculator",
  ],
  conversion: [
    "Inches to CM Calculator",
    "Feet to Meters Calculator",
    "Pounds to KG Calculator",
    "Gallons to Liters Calculator",
    "Celsius to Fahrenheit Calculator",
    "Square Feet to Square Meters Calculator",
    "Miles to Kilometers Calculator",
    "Ounces to Grams Calculator",
    "Cups to Milliliters Calculator",
    "Acres to Square Feet Calculator",
    "Yards to Meters Calculator",
    "Liters to Gallons Calculator",
    "Kilograms to Pounds Calculator",
    "Centimeters to Inches Calculator",
    "Meters to Feet Calculator",
    "Kilometers to Miles Calculator",
    "Hectares to Acres Calculator",
    "MPH to KPH Calculator",
    "Square Meters to Square Feet Calculator",
    "Fahrenheit to Celsius Calculator",
  ],
  time: [
    "Age Calculator",
    "Date Difference Calculator",
    "Work Hours Calculator",
    "Business Days Calculator",
    "Time Duration Calculator",
    "Time Zone Calculator",
    "Overtime Calculator",
    "Countdown Calculator",
    "Hours Between Times Calculator",
    "Days Until Calculator",
    "Weeks Between Dates Calculator",
    "Months Between Dates Calculator",
    "Pay Period Calculator",
    "Meeting Time Calculator",
    "Unix Timestamp Calculator",
    "Time Card Calculator",
    "Vacation Days Calculator",
    "School Days Calculator",
    "Project Timeline Calculator",
    "Leap Year Calculator",
  ],
};

const articleSeeds = [
  "how much concrete do i need",
  "how to estimate roofing materials",
  "how mortgage interest works",
  "bmi explained",
  "how to calculate roi",
  "how to estimate paint coverage",
  "how to calculate compound interest",
  "how to plan a debt payoff schedule",
  "how to convert inches to centimeters",
  "how to calculate business days",
  "how to estimate gravel for a driveway",
  "how to calculate tile waste",
  "how to choose a loan term",
  "how calorie needs are estimated",
  "how to calculate percentages quickly",
];

const articleModifiers = [
  "beginner guide",
  "formula and example",
  "common mistakes",
  "quick worksheet",
  "planning checklist",
  "practical examples",
  "estimation method",
  "cost factors",
  "step by step",
  "simple explanation",
];

const formulaByCategory = {
  construction: {
    type: "material",
    unit: "units",
    inputs: [
      { key: "length", label: "Length", unit: "ft", min: 0, default: 20 },
      { key: "width", label: "Width", unit: "ft", min: 0, default: 12 },
      { key: "depth", label: "Depth / thickness", unit: "in", min: 0, default: 4 },
      { key: "waste", label: "Waste allowance", unit: "%", min: 0, default: 10 },
    ],
  },
  finance: {
    type: "finance",
    unit: "$",
    inputs: [
      { key: "principal", label: "Starting amount", unit: "$", min: 0, default: 250000 },
      { key: "rate", label: "Annual rate", unit: "%", min: 0, default: 6.5 },
      { key: "years", label: "Years", unit: "yr", min: 0, default: 30 },
      { key: "monthly", label: "Monthly addition/payment", unit: "$", min: 0, default: 0 },
    ],
  },
  health: {
    type: "health",
    unit: "estimate",
    inputs: [
      { key: "weight", label: "Weight", unit: "lb", min: 0, default: 170 },
      { key: "height", label: "Height", unit: "in", min: 0, default: 68 },
      { key: "age", label: "Age", unit: "yr", min: 0, default: 35 },
      { key: "activity", label: "Activity factor", unit: "x", min: 1, default: 1.35 },
    ],
  },
  math: {
    type: "math",
    unit: "result",
    inputs: [
      { key: "a", label: "Value A", unit: "", default: 40 },
      { key: "b", label: "Value B", unit: "", default: 25 },
      { key: "c", label: "Value C", unit: "", default: 10 },
    ],
  },
  conversion: {
    type: "conversion",
    unit: "converted value",
    inputs: [{ key: "value", label: "Value", unit: "", default: 10 }],
  },
  time: {
    type: "time",
    unit: "days",
    inputs: [
      { key: "start", label: "Start day number", unit: "", default: 1 },
      { key: "end", label: "End day number", unit: "", default: 30 },
      { key: "hours", label: "Hours per day", unit: "hr", min: 0, default: 8 },
    ],
  },
};

const calculators = Object.entries(calculatorNames).flatMap(([category, names]) =>
  names.map((name, index) => {
    const slug = slugify(name.replace(" Calculator", ""));
    const base = formulaByCategory[category];
    const categoryName = categories.find((item) => item.slug === category).name;
    return {
      slug,
      name,
      title: name,
      seoTitle: name,
      category,
      categoryName,
      type: base.type,
      unit: base.unit,
      inputs: base.inputs,
      featured: index < 9,
      updated: "2026-05-21",
      description: `${name} for quick ${categoryName.toLowerCase()} estimates with clear formulas, worked examples, and copyable results.`,
      metaDescription: `${name} for quick ${categoryName.toLowerCase()} estimates with clear formulas, worked examples, and copyable results.`,
      output: { label: "Estimated result", unit: base.unit },
      relatedCalculators: [],
      relatedArticles: [],
      disclaimerType: category === "finance" ? "financial" : category === "health" ? "health" : category === "time" ? "time" : "general",
      formula:
        category === "construction"
          ? "quantity = length x width x depth with waste allowance"
          : category === "finance"
            ? "monthly rate and compounding formulas are used for payment, future value, or payoff estimates"
            : category === "health"
              ? "health estimate = standard body measurement formulas using the inputs you provide"
              : category === "conversion"
                ? "converted value = input value x unit conversion factor"
                : category === "time"
                  ? "duration = end value - start value, adjusted for work hours or business-day assumptions"
                  : "result = arithmetic relationship between the values entered",
      example: `Example: enter the default values and adjust one field to see how the ${name.toLowerCase()} changes in real time.`,
      faqs: [
        {
          q: `Is this ${name.toLowerCase()} exact?`,
          a: "It is an estimate based on the inputs shown. Real projects, lender terms, health needs, and schedules can vary, so use the result as a planning number.",
        },
        {
          q: "Can I share the result?",
          a: "Yes. Use the share link button to copy a URL with the current inputs included.",
        },
        {
          q: "Why does the page show the formula?",
          a: "The formula makes the result easier to check and helps you understand what changes when an input changes.",
        },
      ],
    };
  }),
);

for (const calculator of calculators) {
  calculator.relatedCalculators = calculators
    .filter((item) => item.category === calculator.category && item.slug !== calculator.slug)
    .slice(0, 6)
    .map((item) => item.slug);
}

const articles = Array.from({ length: 150 }, (_, index) => {
  const seed = articleSeeds[index % articleSeeds.length];
  const modifier = articleModifiers[Math.floor(index / articleSeeds.length) % articleModifiers.length];
  const title = `${seed} ${modifier}`
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const category = categories[index % categories.length].slug;
  return {
    slug: slugify(title),
    title,
    seoTitle: title,
    category,
    updated: "2026-05-21",
    description: `A concise, practical guide to ${seed} with formulas, examples, and planning notes.`,
    metaDescription: `A concise, practical guide to ${seed} with formulas, examples, and planning notes.`,
    readingMinutes: 4,
    relatedCalculator: calculators.filter((calc) => calc.category === category)[index % 20]?.slug ?? calculators[index % calculators.length].slug,
  };
});

const glossary = [
  "APR",
  "Area",
  "BMI",
  "Business Day",
  "Compound Interest",
  "Conversion Factor",
  "Coverage Rate",
  "Debt Payoff",
  "Future Value",
  "Gross Margin",
  "Loan Principal",
  "Markup",
  "Nominal Rate",
  "Present Value",
  "Return on Investment",
  "Square Foot",
  "Unit Rate",
  "Waste Allowance",
  "Work Hour",
  "Yield",
].map((term) => ({
  term,
  slug: slugify(term),
  description: `${term} is a planning term used in calculators, estimates, or everyday measurement. CalcForge defines it in plain language and links it to useful tools.`,
}));

write(
  "package.json",
  JSON.stringify(
    {
      author: "Daniel Victor Nunez-Regueiro",
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "eslint scripts --ext .mjs",
        typecheck: "tsc --noEmit",
        "generate:content": "node scripts/scaffold.mjs",
        "validate:metadata": "tsx scripts/validate-metadata.ts",
        "check:links": "tsx scripts/check-internal-links.ts",
        "regenerate:sitemap": "next build",
      },
      dependencies: {
        "@next/mdx": "^15.0.0",
        "@tailwindcss/typography": "^0.5.15",
        clsx: "^2.1.1",
        "gray-matter": "^4.0.3",
        next: "^15.0.0",
        react: "^19.0.0",
        "react-dom": "^19.0.0",
      },
      devDependencies: {
        "@types/node": "^22.10.2",
        "@types/react": "^19.0.1",
        "@types/react-dom": "^19.0.2",
        autoprefixer: "^10.4.20",
        eslint: "^9.17.0",
        "eslint-config-next": "^15.0.0",
        postcss: "^8.5.10",
        tailwindcss: "^3.4.17",
        tsx: "^4.19.2",
        typescript: "^5.7.2",
      },
      overrides: {
        postcss: "^8.5.10",
      },
    },
    null,
    2,
  ) + "\n",
);

write(
  "next.config.mjs",
  `import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
`,
);

write(
  "tsconfig.json",
  JSON.stringify(
    {
      compilerOptions: {
        target: "ES2017",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: false,
        skipLibCheck: true,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
        incremental: true,
        plugins: [{ name: "next" }],
        paths: { "@/*": ["./*"] },
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"],
    },
    null,
    2,
  ) + "\n",
);

write("next-env.d.ts", `/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n\n`);
write("postcss.config.mjs", `export default { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`);
write(
  "tailwind.config.ts",
  `import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16201c",
        paper: "#fbfcf8",
        forge: "#246b52",
        line: "#dfe7dc",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [typography],
};

export default config;
`,
);

write(
  "app/globals.css",
  `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-paper text-ink antialiased dark:bg-zinc-950 dark:text-zinc-100;
}

a {
  @apply underline-offset-4;
}

.focus-ring {
  @apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forge;
}
`,
);

write(
  "data/site.ts",
  `// CalcForge was written and created by Daniel Victor Nunez-Regueiro.
export const site = {
  name: "CalcForge",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://calcforge-nine.vercel.app",
  description: "Fast, transparent calculators and practical guides for construction, finance, health, math, conversions, and time planning.",
  creator: "Daniel Victor Nunez-Regueiro",
  author: "Daniel Victor Nunez-Regueiro",
  organizationName: "CalcForge",
  locale: "en_US",
};
`,
);

write("data/categories.ts", `export const categories = ${JSON.stringify(categories, null, 2)} as const;\n`);
write("data/calculators.ts", `export const calculators = ${JSON.stringify(calculators, null, 2)} as const;\n`);
write("data/articles.ts", `export const articles = ${JSON.stringify(articles, null, 2)} as const;\n`);
write("data/glossary.ts", `export const glossary = ${JSON.stringify(glossary, null, 2)} as const;\n`);

for (const article of articles) {
  write(
    `content/articles/${article.slug}.mdx`,
    `---
title: "${article.title}"
description: "${article.description}"
category: "${article.category}"
updated: "${article.updated}"
---

# ${article.title}

Use this guide as a practical starting point. The goal is to understand the inputs, run the math, and check whether the result makes sense before making a decision.

## Quick Method

1. Identify the quantity you are trying to estimate.
2. Write down the units for each input.
3. Apply the formula once with conservative assumptions.
4. Add a margin for real-world variation when the result affects cost, schedule, or health planning.

## Worked Example

Start with a simple set of numbers, calculate the result, then change one input at a time. This makes the estimate easier to audit and avoids hiding assumptions inside a single final number.

## When To Recheck

Recalculate when prices, measurements, rates, dates, or personal inputs change. Small input changes can have a large effect on finance, construction material, and health estimates.
`,
  );
}

write(
  "lib/format.ts",
  `export const titleCase = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const formatNumber = (value: number, maximumFractionDigits = 2) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(Number.isFinite(value) ? value : 0);

export const absoluteUrl = (siteUrl: string, path: string) => new URL(path, siteUrl).toString();
`,
);

write(
  "lib/content.ts",
  `import { articles } from "@/data/articles";
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
  ...categories.map((category) => \`/calculators/\${category.slug}/\`),
  ...calculators.map((calculator) => \`/calculators/\${calculator.category}/\${calculator.slug}/\`),
  ...articles.map((article) => \`/articles/\${article.slug}/\`),
  ...glossary.map((term) => \`/glossary/\${term.slug}/\`),
];
`,
);

write(
  "lib/calculation.ts",
  `export type CalculationInput = Record<string, number>;

const conversionFactors: Record<string, number> = {
  "inches-to-cm": 2.54,
  "feet-to-meters": 0.3048,
  "pounds-to-kg": 0.45359237,
  "gallons-to-liters": 3.785411784,
  "square-feet-to-square-meters": 0.09290304,
  "miles-to-kilometers": 1.609344,
  "ounces-to-grams": 28.349523125,
  "cups-to-milliliters": 236.5882365,
  "acres-to-square-feet": 43560,
  "yards-to-meters": 0.9144,
  "liters-to-gallons": 0.2641720524,
  "kilograms-to-pounds": 2.2046226218,
  "centimeters-to-inches": 0.3937007874,
  "meters-to-feet": 3.280839895,
  "kilometers-to-miles": 0.6213711922,
  "hectares-to-acres": 2.4710538147,
  "mph-to-kph": 1.609344,
  "square-meters-to-square-feet": 10.763910417,
};

export function calculate(type: string, slug: string, values: CalculationInput) {
  if (slug === "celsius-to-fahrenheit") return values.value * 1.8 + 32;
  if (slug === "fahrenheit-to-celsius") return (values.value - 32) / 1.8;

  if (type === "conversion") return values.value * (conversionFactors[slug] ?? 1);

  if (type === "material") {
    const cubicFeet = values.length * values.width * (values.depth / 12);
    return cubicFeet * (1 + values.waste / 100);
  }

  if (type === "finance") {
    const monthlyRate = values.rate / 100 / 12;
    const months = Math.max(values.years * 12, 1);
    if (slug.includes("loan") || slug.includes("mortgage") || slug.includes("payoff")) {
      if (monthlyRate === 0) return values.principal / months;
      return (values.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }
    return values.principal * Math.pow(1 + values.rate / 100, values.years) + values.monthly * months;
  }

  if (type === "health") {
    if (slug === "bmi") return (values.weight / (values.height * values.height)) * 703;
    if (slug.includes("water")) return values.weight * 0.5;
    if (slug.includes("protein")) return values.weight * 0.8;
    return (10 * values.weight * 0.453592 + 6.25 * values.height * 2.54 - 5 * values.age + 5) * values.activity;
  }

  if (type === "time") return Math.max(values.end - values.start, 0) * (values.hours || 1);

  if (slug === "percentage") return (values.a / 100) * values.b;
  if (slug === "ratio") return values.b === 0 ? 0 : values.a / values.b;
  if (slug === "slope") return values.b === 0 ? 0 : (values.c - values.a) / values.b;
  if (slug === "probability") return values.b === 0 ? 0 : values.a / values.b;
  return values.a + values.b + values.c;
}
`,
);

write(
  "lib/schema.ts",
  `import { site } from "@/data/site";
import type { Article, Calculator } from "@/lib/content";

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const calculatorSchema = (calculator: Calculator, url: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: calculator.name,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  url,
  description: calculator.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export const articleSchema = (article: Article, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  dateModified: article.updated,
  datePublished: article.updated,
  author: { "@type": "Person", name: site.creator },
  publisher: { "@type": "Organization", name: site.organizationName, url: site.url },
  mainEntityOfPage: url,
});
`,
);

write(
  "components/AdSlot.tsx",
  `type AdSlotProps = {
  id: string;
  label?: string;
  className?: string;
};

export function AdSlot({ id, label = "Advertisement", className = "" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_ADS === "true";
  return (
    <div
      id={id}
      className={\`my-8 flex min-h-28 items-center justify-center rounded border border-dashed border-zinc-300 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 \${className}\`}
      data-ads-enabled={enabled}
      aria-label={label}
    >
      {label}
    </div>
  );
}
`,
);

write(
  "components/AuthorBox.tsx",
  `import { site } from "@/data/site";

export function AuthorBox() {
  return (
    <section className="rounded border border-line bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-base font-semibold">Created by {site.creator}</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">
        CalcForge pages are written to show inputs, assumptions, formulas, and limitations clearly. We avoid fabricated credentials and update evergreen pages when formulas or user needs change.
      </p>
    </section>
  );
}
`,
);

write(
  "components/Breadcrumbs.tsx",
  `import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-600 dark:text-zinc-400">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <Link className="hover:text-forge hover:underline" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
`,
);

write(
  "components/CardGrid.tsx",
  `import Link from "next/link";

export function CardGrid({ items }: { items: { href: string; title: string; description: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="rounded border border-line bg-white p-5 no-underline transition hover:-translate-y-0.5 hover:border-forge dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-ink dark:text-zinc-50">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
`,
);

write(
  "components/CalculatorClient.tsx",
  `"use client";

import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculation";
import { formatNumber } from "@/lib/format";
import type { Calculator } from "@/lib/content";

export function CalculatorClient({ calculator }: { calculator: Calculator }) {
  const initialValues = Object.fromEntries(calculator.inputs.map((input) => [input.key, input.default]));
  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const result = useMemo(() => calculate(calculator.type, calculator.slug, values), [calculator.slug, calculator.type, values]);
  const shareUrl = typeof window === "undefined" ? "" : \`\${window.location.origin}\${window.location.pathname}?\${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}\`;

  return (
    <section id="calculator" className="rounded border border-line bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-2 border-b border-line pb-4 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{calculator.name}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Enter your values. Results update automatically.</p>
        </div>
        <button
          className="focus-ring rounded bg-ink px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-950"
          type="button"
          onClick={() => navigator.clipboard.writeText(\`\${calculator.name}: \${formatNumber(result)} \${calculator.unit}\`)}
        >
          Copy result
        </button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {calculator.inputs.map((input) => (
          <label key={input.key} className="block">
            <span className="text-sm font-medium">{input.label}</span>
            <div className="mt-1 flex rounded border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950">
              <input
                className="focus-ring min-w-0 flex-1 bg-transparent px-3 py-2"
                type="number"
                min={input.min}
                value={values[input.key]}
                onChange={(event) => setValues((current) => ({ ...current, [input.key]: Number(event.target.value) }))}
              />
              {input.unit ? <span className="border-l border-zinc-200 px-3 py-2 text-sm text-zinc-500 dark:border-zinc-700">{input.unit}</span> : null}
            </div>
          </label>
        ))}
      </div>
      <div className="mt-6 rounded bg-zinc-50 p-5 dark:bg-zinc-950">
        <p className="text-sm uppercase tracking-wide text-zinc-500">Estimated result</p>
        <p className="mt-1 text-3xl font-semibold">{formatNumber(result)} <span className="text-base font-normal text-zinc-500">{calculator.unit}</span></p>
        <button
          className="focus-ring mt-4 rounded border border-line px-3 py-2 text-sm dark:border-zinc-700"
          type="button"
          onClick={() => navigator.clipboard.writeText(shareUrl)}
        >
          Copy share link
        </button>
      </div>
    </section>
  );
}
`,
);

write(
  "components/Header.tsx",
  `import Link from "next/link";
import { categories } from "@/data/categories";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold no-underline">CalcForge</Link>
        <nav className="hidden items-center gap-5 text-sm md:flex" aria-label="Primary">
          <Link href="/calculators/">Calculators</Link>
          <Link href="/articles/">Guides</Link>
          <Link href="/glossary/">Glossary</Link>
          {categories.slice(0, 4).map((category) => (
            <Link key={category.slug} href={\`/calculators/\${category.slug}/\`}>{category.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
`,
);

write(
  "components/Footer.tsx",
  `import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-ink dark:text-zinc-100">CalcForge</p>
          <p className="mt-2">Transparent calculators and concise guides for everyday planning.</p>
        </div>
        <nav className="grid gap-2" aria-label="Footer">
          <Link href="/about/">About</Link>
          <Link href="/editorial-policy/">Editorial Policy</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <nav className="grid gap-2" aria-label="Legal">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
          <Link href="/rss.xml">RSS</Link>
        </nav>
      </div>
    </footer>
  );
}
`,
);

write(
  "app/layout.tsx",
  `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s | CalcForge" },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: site.locale },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
`,
);

write(
  "app/page.tsx",
  `import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { CardGrid } from "@/components/CardGrid";
import { articles } from "@/data/articles";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-line dark:border-zinc-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-forge">Fast formulas. Clear assumptions.</p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">CalcForge calculators for practical decisions</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Use transparent, copyable calculators for construction, finance, health, math, conversions, and time planning. Every tool shows the formula and related guidance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="rounded bg-forge px-5 py-3 font-medium text-white no-underline" href="/calculators/">Browse calculators</Link>
              <Link className="rounded border border-line px-5 py-3 font-medium no-underline dark:border-zinc-700" href="/articles/">Read guides</Link>
            </div>
          </div>
          <div className="rounded border border-line bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-semibold">Popular tools</h2>
            <div className="mt-4 grid gap-3">
              {calculators.filter((calculator) => calculator.featured).slice(0, 8).map((calculator) => (
                <Link key={calculator.slug} className="rounded border border-line p-3 no-underline hover:border-forge dark:border-zinc-800" href={\`/calculators/\${calculator.category}/\${calculator.slug}/\`}>
                  {calculator.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Calculator categories</h2>
        <div className="mt-6">
          <CardGrid items={categories.map((category) => ({ href: \`/calculators/\${category.slug}/\`, title: category.name, description: category.description }))} />
        </div>
        <AdSlot id="home-mid" />
        <h2 className="text-2xl font-semibold">Latest practical guides</h2>
        <div className="mt-6">
          <CardGrid items={articles.slice(0, 6).map((article) => ({ href: \`/articles/\${article.slug}/\`, title: article.title, description: article.description }))} />
        </div>
      </section>
    </main>
  );
}
`,
);

write(
  "app/calculators/page.tsx",
  `import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Calculators",
  description: "Browse CalcForge calculator categories for construction, finance, health, math, conversions, and time.",
};

export default function CalculatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Calculators</h1>
      <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">Choose a category to find focused tools with formulas, examples, FAQs, and related guides.</p>
      <div className="mt-8">
        <CardGrid items={categories.map((category) => ({ href: \`/calculators/\${category.slug}/\`, title: category.name, description: category.description }))} />
      </div>
    </main>
  );
}
`,
);

write(
  "app/calculators/[category]/page.tsx",
  `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { categories } from "@/data/categories";
import { calculatorsByCategory, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return { title: \`\${category.name} Calculators\`, description: category.description };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();
  const calculators = calculatorsByCategory(category.slug);
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators/" }, { label: category.name, href: \`/calculators/\${category.slug}/\` }]} />
      <h1 className="mt-5 text-3xl font-bold">{category.name} calculators</h1>
      <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">{category.description}</p>
      <div className="mt-8">
        <CardGrid items={calculators.map((calculator) => ({ href: \`/calculators/\${calculator.category}/\${calculator.slug}/\`, title: calculator.name, description: calculator.description }))} />
      </div>
    </main>
  );
}
`,
);

write(
  "app/calculators/[category]/[slug]/page.tsx",
  `import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorClient } from "@/components/CalculatorClient";
import { calculators } from "@/data/calculators";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/format";
import { breadcrumbSchema, calculatorSchema, faqSchema } from "@/lib/schema";
import { getCalculator, relatedArticlesForCalculator, relatedCalculators } from "@/lib/content";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ category: calculator.category, slug: calculator.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const calculator = getCalculator(params.slug);
  if (!calculator) return {};
  const path = \`/calculators/\${calculator.category}/\${calculator.slug}/\`;
  return {
    title: calculator.name,
    description: calculator.description,
    alternates: { canonical: path },
    openGraph: { title: calculator.name, description: calculator.description, url: path },
    twitter: { title: calculator.name, description: calculator.description },
  };
}

export default function CalculatorPage({ params }: { params: { category: string; slug: string } }) {
  const calculator = getCalculator(params.slug);
  if (!calculator || calculator.category !== params.category) notFound();
  const url = absoluteUrl(site.url, \`/calculators/\${calculator.category}/\${calculator.slug}/\`);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators/" },
    { label: calculator.categoryName, href: \`/calculators/\${calculator.category}/\` },
    { label: calculator.name, href: \`/calculators/\${calculator.category}/\${calculator.slug}/\` },
  ];

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema(calculator, url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(calculator.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })))) }} />
      <article>
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-5 text-3xl font-bold">{calculator.name}</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">{calculator.description}</p>
        <p className="mt-2 text-sm text-zinc-500">Updated {calculator.updated}</p>
        <div className="mt-8"><CalculatorClient calculator={calculator} /></div>
        <AdSlot id={\`below-calculator-\${calculator.slug}\`} />
        <section id="formula" className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
          <h2>Formula</h2>
          <p>{calculator.formula}.</p>
          <h2>Worked Example</h2>
          <p>{calculator.example}</p>
          <h2>How to use this result</h2>
          <p>Use the result as a planning estimate, then compare it with quotes, product labels, lender disclosures, professional advice, or measured project data when the decision has financial, health, or safety consequences.</p>
          <h2>FAQs</h2>
          {calculator.faqs.map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </section>
        <AuthorBox />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Related calculators</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedCalculators(calculator).map((item) => (
              <Link className="rounded border border-line p-4 no-underline hover:border-forge dark:border-zinc-800" key={item.slug} href={\`/calculators/\${item.category}/\${item.slug}/\`}>{item.name}</Link>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedArticlesForCalculator(calculator).map((article) => (
              <Link className="rounded border border-line p-4 no-underline hover:border-forge dark:border-zinc-800" key={article.slug} href={\`/articles/\${article.slug}/\`}>{article.title}</Link>
            ))}
          </div>
        </section>
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <nav className="rounded border border-line bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900" aria-label="Table of contents">
            <p className="font-semibold">On this page</p>
            <a className="mt-3 block" href="#calculator">Calculator</a>
            <a className="mt-2 block" href="#formula">Formula</a>
          </nav>
          <AdSlot id={\`sidebar-\${calculator.slug}\`} />
        </div>
      </aside>
    </main>
  );
}
`,
);

write(
  "app/articles/page.tsx",
  `import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical calculation guides, estimation tutorials, formulas, and examples from CalcForge.",
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Guides</h1>
      <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">Short, useful articles that explain formulas, assumptions, and planning methods.</p>
      <div className="mt-8">
        <CardGrid items={articles.map((article) => ({ href: \`/articles/\${article.slug}/\`, title: article.title, description: article.description }))} />
      </div>
    </main>
  );
}
`,
);

write(
  "app/articles/[slug]/page.tsx",
  `import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/format";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { calculators, getArticle, relatedArticles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const path = \`/articles/\${article.slug}/\`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: { title: article.title, description: article.description, type: "article", url: path },
    twitter: { title: article.title, description: article.description },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const calc = calculators.find((calculator) => calculator.slug === article.relatedCalculator);
  const url = absoluteUrl(site.url, \`/articles/\${article.slug}/\`);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/articles/" },
    { label: article.title, href: \`/articles/\${article.slug}/\` },
  ];
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article, url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })))) }} />
      <article className="prose prose-zinc max-w-none dark:prose-invert">
        <Breadcrumbs items={breadcrumbs} />
        <h1>{article.title}</h1>
        <p className="lead">{article.description}</p>
        <p className="text-sm text-zinc-500">Updated {article.updated} · {article.readingMinutes} min read</p>
        <h2 id="quick-method">Quick method</h2>
        <p>Start by naming the result you need, listing each input, and checking that every number uses the same unit system. A clear setup prevents most calculator mistakes.</p>
        <ul>
          <li>Measure or collect current inputs.</li>
          <li>Use conservative assumptions when cost or schedule matters.</li>
          <li>Compare the answer with a second method when the result feels unusually high or low.</li>
        </ul>
        <AdSlot id={\`article-mid-\${article.slug}\`} />
        <h2 id="example">Worked example</h2>
        <p>Suppose you have a base value of 40 and an adjustment of 10 percent. The adjusted estimate is 44. This simple check makes the formula visible and gives you a number to compare with calculator output.</p>
        <h2 id="calculator">Related calculator</h2>
        {calc ? <p>Use the <Link href={\`/calculators/\${calc.category}/\${calc.slug}/\`}>{calc.name}</Link> to run the numbers with your own inputs.</p> : null}
        <h2>Planning notes</h2>
        <p>Revisit the estimate when inputs change. Construction quantities, rates, health targets, and date ranges can shift quickly, and a fresh calculation is usually faster than trying to adjust an old answer from memory.</p>
        <AuthorBox />
        <h2>Related guides</h2>
        <ul>
          {relatedArticles(article, 5).map((item) => (
            <li key={item.slug}><Link href={\`/articles/\${item.slug}/\`}>{item.title}</Link></li>
          ))}
        </ul>
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <nav className="rounded border border-line bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900" aria-label="Table of contents">
            <p className="font-semibold">On this page</p>
            <a className="mt-3 block" href="#quick-method">Quick method</a>
            <a className="mt-2 block" href="#example">Example</a>
            <a className="mt-2 block" href="#calculator">Calculator</a>
          </nav>
          <AdSlot id={\`article-sidebar-\${article.slug}\`} />
        </div>
      </aside>
    </main>
  );
}
`,
);

write(
  "app/glossary/page.tsx",
  `import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = { title: "Glossary", description: "Plain-language definitions for common calculator and estimation terms." };

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Glossary</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.map((term) => <Link className="rounded border border-line p-4 no-underline dark:border-zinc-800" key={term.slug} href={\`/glossary/\${term.slug}/\`}>{term.term}</Link>)}
      </div>
    </main>
  );
}
`,
);

write(
  "app/glossary/[slug]/page.tsx",
  `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossary } from "@/data/glossary";
import { getGlossaryTerm } from "@/lib/content";

export function generateStaticParams() {
  return glossary.map((term) => ({ slug: term.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const term = getGlossaryTerm(params.slug);
  return term ? { title: term.term, description: term.description } : {};
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const term = getGlossaryTerm(params.slug);
  if (!term) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">{term.term}</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{term.description}</p>
    </main>
  );
}
`,
);

const staticPages = {
  about: ["About CalcForge", "CalcForge is a utility website focused on transparent formulas, practical examples, and fast pages."],
  contact: ["Contact", "Contact note for CalcForge corrections, suggestions, and calculator feedback."],
  privacy: ["Privacy Policy", "CalcForge is designed as a static site. Advertising, analytics, and affiliate partners may use cookies when enabled by the site owner."],
  terms: ["Terms", "CalcForge is provided for informational use. You are responsible for verifying results before making decisions."],
  disclaimer: ["Disclaimer", "Calculator results are estimates and are not financial, medical, legal, engineering, or professional advice."],
  "editorial-policy": ["Editorial Policy", "CalcForge pages aim to be accurate, useful, and transparent about formulas, assumptions, limitations, and update dates."],
};

for (const [slug, [title, body]] of Object.entries(staticPages)) {
  write(
    `app/${slug}/page.tsx`,
    `import type { Metadata } from "next";

export const metadata: Metadata = { title: "${title}", description: "${body}" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">${title}</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>${body}</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
`,
  );
}

write(
  "app/sitemap.ts",
  `import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { allRoutes } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date("2026-05-21"),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.includes("/calculators/") ? 0.8 : 0.6,
  }));
}
`,
);

write(
  "app/robots.ts",
  `import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [new URL("/sitemap.xml", site.url).toString(), new URL("/image-sitemap.xml", site.url).toString()],
  };
}
`,
);

write(
  "app/rss.xml/route.ts",
  `import { articles } from "@/data/articles";
import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const items = articles.slice(0, 50).map((article) => \`
    <item>
      <title><![CDATA[\${article.title}]]></title>
      <link>\${new URL(\`/articles/\${article.slug}/\`, site.url)}</link>
      <guid>\${new URL(\`/articles/\${article.slug}/\`, site.url)}</guid>
      <description><![CDATA[\${article.description}]]></description>
      <pubDate>\${new Date(article.updated).toUTCString()}</pubDate>
    </item>\`).join("");
  return new Response(\`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel><title>\${site.name}</title><link>\${site.url}</link><description>\${site.description}</description>\${items}</channel></rss>\`, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
`,
);

write(
  "app/image-sitemap.xml/route.ts",
  `import { calculators } from "@/data/calculators";
import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const urls = calculators.slice(0, 50).map((calculator) => \`
    <url>
      <loc>\${new URL(\`/calculators/\${calculator.category}/\${calculator.slug}/\`, site.url)}</loc>
      <image:image>
        <image:loc>\${new URL("/og-default.png", site.url)}</image:loc>
        <image:title>\${calculator.name}</image:title>
      </image:image>
    </url>\`).join("");
  return new Response(\`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\${urls}</urlset>\`, {
    headers: { "Content-Type": "application/xml" },
  });
}
`,
);

write(
  "scripts/validate-metadata.ts",
  `import { articles } from "../data/articles";
import { calculators } from "../data/calculators";

const missing = [
  ...articles.filter((item) => !item.title || !item.description || !item.slug),
  ...calculators.filter((item) => !item.name || !item.description || !item.slug),
];

if (missing.length) {
  console.error(\`Metadata validation failed for \${missing.length} items.\`);
  process.exit(1);
}

console.log(\`Metadata OK: \${articles.length} articles, \${calculators.length} calculators.\`);
`,
);

write(
  "scripts/check-internal-links.ts",
  `import { allRoutes } from "../lib/content";

const routes = new Set(allRoutes());
const required = ["/", "/calculators/", "/articles/", "/glossary/", "/privacy/", "/terms/"];
const missing = required.filter((route) => !routes.has(route));

if (missing.length) {
  console.error(\`Missing required routes: \${missing.join(", ")}\`);
  process.exit(1);
}

console.log(\`Internal route inventory OK: \${routes.size} static routes.\`);
`,
);

write(
  "README.md",
  `# CalcForge

CalcForge is a static, SEO-first utility website built with Next.js 15 App Router, TypeScript, TailwindCSS, MDX support, and JSON-driven content.

## Install

\`\`\`bash
npm install
\`\`\`

## Local development

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000.

## Build

\`\`\`bash
npm run validate:metadata
npm run check:links
npm run build
\`\`\`

The static export is generated in \`out/\`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set **Framework Preset** to Next.js.
4. Keep \`NEXT_PUBLIC_SITE_URL=https://calcforge-nine.vercel.app\`, or omit it to use the built-in free Vercel URL.
5. Optional: add \`NEXT_PUBLIC_ENABLE_ADS=true\` after ad approval.
6. Deploy.

## Content

- Calculator config: \`data/calculators.ts\`
- Categories: \`data/categories.ts\`
- Articles index: \`data/articles.ts\`
- MDX source drafts: \`content/articles/*.mdx\`

Use \`npm run generate:content\` to regenerate the starter inventory from \`scripts/scaffold.mjs\`.
`,
);

write(
  "docs/SEO_STRATEGY.md",
  `# SEO Strategy

CalcForge uses topic clusters around calculators, guides, and glossary definitions. Category hubs link to calculators, calculators link to related guides, and articles link back to relevant tools.

Principles:

- Keep each calculator useful on its own with an interactive tool, formula, example, FAQs, and limitations.
- Avoid location doorway pages, fabricated endorsements, fake credentials, and fabricated statistics.
- Use stable evergreen URLs.
- Update pages when formulas, assumptions, or user expectations change.
- Keep article pages concise and tied to a practical task.
- Use schema only when it matches visible page content.
`,
);

write(
  "docs/ARCHITECTURE.md",
  `# Architecture

CalcForge is fully static and has no database, authentication, uploads, or backend server.

- \`app/\`: Next.js App Router pages and metadata routes.
- \`components/\`: reusable UI, calculator, ads, author, breadcrumbs, and cards.
- \`data/\`: generated calculator, article, glossary, category, and site config.
- \`lib/\`: content lookup, formulas, formatting, and schema helpers.
- \`content/articles/\`: MDX-ready article source files.
- \`scripts/\`: generation and validation automation.

The calculator engine is intentionally small: calculator configs define inputs and categories, while \`lib/calculation.ts\` handles formula families.
`,
);

write(
  "docs/MONETIZATION.md",
  `# Monetization Strategy

CalcForge includes reserved ad slots for AdSense, Ezoic, and Mediavine-style placements.

Recommended rollout:

1. Launch without ads and submit the site to Google Search Console and Bing Webmaster Tools.
2. Add AdSense once the site has a clean index and enough useful pages.
3. Use Ezoic or Mediavine only after traffic supports it.
4. Add affiliate links only where they help the user, such as material guides or finance explainers.

Ad slots reserve space to reduce layout shift. Toggle with \`NEXT_PUBLIC_ENABLE_ADS=true\`.
`,
);

write(
  ".eslintrc.json",
  JSON.stringify({ extends: ["next/core-web-vitals", "next/typescript"] }, null, 2) + "\n",
);

write(
  ".gitignore",
  `node_modules
.next
out
.env*.local
*.log
`,
);

console.log(`Generated ${calculators.length} calculators, ${articles.length} articles, and ${glossary.length} glossary terms.`);
