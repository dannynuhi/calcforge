import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { categories } from "@/data/categories";
import { calculatorsByCategory, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return { title: `${category.name} Calculators`, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();
  const calculators = calculatorsByCategory(category.slug);
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators/" }, { label: category.name, href: `/calculators/${category.slug}/` }]} />
      <h1 className="mt-5 text-3xl font-bold">{category.name} calculators</h1>
      <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">{category.description}</p>
      <div className="mt-8">
        <CardGrid items={calculators.map((calculator) => ({ href: `/calculators/${calculator.category}/${calculator.slug}/`, title: calculator.name, description: calculator.description }))} />
      </div>
    </main>
  );
}
