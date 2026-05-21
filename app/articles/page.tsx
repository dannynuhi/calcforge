import type { Metadata } from "next";
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
        <CardGrid items={articles.map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description }))} />
      </div>
    </main>
  );
}
