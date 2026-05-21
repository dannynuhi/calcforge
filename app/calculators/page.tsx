import type { Metadata } from "next";
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
        <CardGrid items={categories.map((category) => ({ href: `/calculators/${category.slug}/`, title: category.name, description: category.description }))} />
      </div>
    </main>
  );
}
