import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { articles } from "@/data/articles";
import { indexableArticles } from "@/lib/article-quality";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical calculation guides, estimation tutorials, formulas, and examples from CalcForge.",
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="premium-shell relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300" />
        <p className="page-kicker">Helpful guides</p>
        <h1 className="mt-2 text-4xl font-bold">Calculation guides</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">Short, useful articles that explain formulas, assumptions, and planning methods before you use a calculator result.</p>
      </section>
      <div className="mt-8">
        <CardGrid items={indexableArticles(articles).map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description, badge: "Guide", cta: "Read guide" }))} />
      </div>
    </main>
  );
}
