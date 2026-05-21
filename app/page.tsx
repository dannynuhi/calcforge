import Link from "next/link";
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
                <Link key={calculator.slug} className="rounded border border-line p-3 no-underline hover:border-forge dark:border-zinc-800" href={`/calculators/${calculator.category}/${calculator.slug}/`}>
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
          <CardGrid items={categories.map((category) => ({ href: `/calculators/${category.slug}/`, title: category.name, description: category.description }))} />
        </div>
        <AdSlot id="home-mid" />
        <h2 className="text-2xl font-semibold">Latest practical guides</h2>
        <div className="mt-6">
          <CardGrid items={articles.slice(0, 6).map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description }))} />
        </div>
      </section>
    </main>
  );
}
