import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { CardGrid } from "@/components/CardGrid";
import { articles } from "@/data/articles";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";

const seedSlugs = ["compound-interest", "auto-loan", "percentage", "date-difference", "unit-price"];
const seedCalculators = seedSlugs
  .map((slug) => calculators.find((calculator) => calculator.slug === slug))
  .filter((calculator): calculator is (typeof calculators)[number] => Boolean(calculator));
const financeCalculators = calculators
  .filter((calculator) => calculator.category === "finance" && !seedSlugs.includes(calculator.slug))
  .slice(0, 6);

export const metadata: Metadata = {
  title: "CalcForge",
  description: "Fast calculators with formulas, examples, and practical guides for construction, finance, health, math, conversions, and time planning.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-line bg-gradient-to-b from-white to-paper dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-forge">Free tools. Clear formulas. No signup.</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-normal text-ink dark:text-zinc-50 sm:text-5xl">
              Free calculators for smarter money decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Estimate payments, interest, percentages, dates, and everyday costs in seconds.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
              CalcForge is built for quick educational estimates: compare loan scenarios, check savings growth, calculate percentages, plan dates, and understand the formula behind the answer.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring rounded-lg bg-ink px-5 py-3 text-center font-medium text-white no-underline shadow-sm hover:bg-forge dark:bg-zinc-100 dark:text-zinc-950" href="/calculators/">
                Explore calculators
              </Link>
              <Link className="focus-ring rounded-lg border border-line bg-white px-5 py-3 text-center font-medium no-underline hover:border-forge dark:border-zinc-700 dark:bg-zinc-900" href="/calculators/finance/compound-interest/">
                Open Compound Interest Calculator
              </Link>
            </div>
            <div className="mt-6 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              {["Free to use", "No signup required", "Educational estimates", "Fast static calculators"].map((item) => (
                <span className="rounded-full border border-line bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900 dark:bg-zinc-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-forge">Start here</p>
            <h2 className="mt-2 text-xl font-semibold">Priority calculators</h2>
            <div className="mt-4 grid gap-3">
              {seedCalculators.map((calculator, index) => (
                <Link
                  key={calculator.slug}
                  className="focus-ring rounded-xl border border-line p-4 no-underline transition hover:border-forge hover:bg-emerald-50/50 dark:border-zinc-800 dark:hover:bg-emerald-950/20"
                  href={`/calculators/${calculator.category}/${calculator.slug}/`}
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-forge dark:text-emerald-300">{index < 2 ? "Finance" : calculator.categoryName}</span>
                  <span className="mt-1 block font-semibold text-ink dark:text-zinc-50">{calculator.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-700 dark:text-zinc-300">{calculator.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-forge">Money tools first</p>
            <h2 className="text-2xl font-semibold">Finance calculators</h2>
            <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Compare payments, interest, savings goals, everyday costs, and budget assumptions without creating an account.</p>
          </div>
          <Link className="font-medium text-forge no-underline hover:underline dark:text-emerald-300" href="/calculators/finance/">View finance category</Link>
        </div>
        <div className="mt-6">
          <CardGrid items={financeCalculators.map((calculator) => ({
            href: `/calculators/${calculator.category}/${calculator.slug}/`,
            title: calculator.name,
            description: calculator.description,
            badge: "Finance",
            cta: "Open calculator",
            featured: true,
          }))} />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Calculator categories</h2>
          <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Browse focused calculator groups when you need a different type of estimate.</p>
        </div>
        <div className="mt-6">
          <CardGrid items={categories.map((category) => ({
            href: `/calculators/${category.slug}/`,
            title: category.name,
            description: category.description,
            badge: category.slug === "finance" ? "Start here" : category.name,
            cta: "Browse category",
            featured: category.slug === "finance",
          }))} />
        </div>
        <AdSlot id="home-mid" />
        <h2 className="text-2xl font-semibold">Featured guides</h2>
        <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Short explanations that help you check assumptions before using a result for planning.</p>
        <div className="mt-6">
          <CardGrid items={articles.slice(0, 6).map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description, badge: "Guide", cta: "Read guide" }))} />
        </div>
      </section>
    </main>
  );
}
