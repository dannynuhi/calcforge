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
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white dark:border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.26),transparent_26rem),radial-gradient(circle_at_86%_20%,rgba(59,130,246,0.18),transparent_24rem),linear-gradient(135deg,#071527_0%,#0f1f33_48%,#10251f_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent dark:from-zinc-950" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200 shadow-sm backdrop-blur">
              Free tools. Clear formulas. No signup.
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl">
              Free calculators for smarter money decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90 sm:text-xl">
              Estimate payments, interest, percentages, dates, and everyday costs in seconds.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              CalcForge is built for quick educational estimates: compare loan scenarios, check savings growth, calculate percentages, plan dates, and understand the formula behind the answer.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring rounded-full bg-emerald-400 px-5 py-3 text-center font-semibold text-slate-950 no-underline shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300" href="/calculators/">
                Explore calculators
              </Link>
              <Link className="focus-ring rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center font-semibold text-white no-underline shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15" href="/calculators/finance/compound-interest/">
                Open Compound Interest Calculator
              </Link>
            </div>
            <div className="mt-7 grid gap-2 text-sm text-slate-100 sm:grid-cols-2">
              {["Free to use", "No signup required", "Educational estimates", "Fast static calculators"].map((item) => (
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-sm backdrop-blur" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="premium-shell relative overflow-hidden p-5 text-ink dark:text-zinc-50">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300" />
            <p className="page-kicker">Start here</p>
            <h2 className="mt-2 text-2xl font-bold">Priority calculators</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">A focused path into CalcForge’s most useful money, percentage, date, and cost tools.</p>
            <div className="mt-4 grid gap-3">
              {seedCalculators.map((calculator, index) => (
                <Link
                  key={calculator.slug}
                  className="focus-ring group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:hover:border-emerald-800"
                  href={`/calculators/${calculator.category}/${calculator.slug}/`}
                >
                  <span className="premium-badge">{index < 2 ? "Finance" : calculator.categoryName}</span>
                  <span className="mt-2 block font-semibold text-ink group-hover:text-forge dark:text-zinc-50">{calculator.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-700 dark:text-zinc-300">{calculator.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="page-kicker">Money tools first</p>
            <h2 className="text-3xl font-bold">Finance calculators</h2>
            <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Compare payments, interest, savings goals, everyday costs, and budget assumptions without creating an account.</p>
          </div>
          <Link className="premium-button-secondary px-4 py-2 text-sm" href="/calculators/finance/">View finance category</Link>
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
        <div className="mt-14 rounded-3xl border border-line bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-2xl font-bold">Calculator categories</h2>
          <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Browse focused calculator groups when you need a different type of estimate.</p>
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
        </div>
        <AdSlot id="home-mid" />
        <h2 className="text-2xl font-bold">Featured guides</h2>
        <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Short explanations that help you check assumptions before using a result for planning.</p>
        <div className="mt-6">
          <CardGrid items={articles.slice(0, 6).map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description, badge: "Guide", cta: "Read guide" }))} />
        </div>
      </section>
    </main>
  );
}
