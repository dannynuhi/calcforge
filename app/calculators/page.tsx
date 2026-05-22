import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { CalculatorSearch } from "@/components/CalculatorSearch";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Calculators",
  description: "Browse CalcForge calculator categories for construction, finance, health, math, conversions, and time.",
};

export default function CalculatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-forge">Calculator library</p>
      <h1 className="mt-2 text-3xl font-bold">Find a calculator</h1>
      <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">Search or browse focused tools with formulas, examples, FAQs, and related guides. Links remain crawlable and available without signup.</p>
      <div className="mt-8">
        <CalculatorSearch calculators={calculators} />
      </div>
      <div className="mt-8">
        <CardGrid items={categories.map((category) => ({
          href: `/calculators/${category.slug}/`,
          title: category.name,
          description: category.description,
          badge: category.slug === "finance" ? "Start here" : category.name,
          cta: "Browse category",
          featured: category.slug === "finance",
        }))} />
      </div>
    </main>
  );
}
