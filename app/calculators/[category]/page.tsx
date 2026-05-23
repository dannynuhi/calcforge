import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { categoryIntros } from "@/lib/category-copy";
import { articlesByCategory, calculatorsByCategory, getCategory } from "@/lib/content";
import { absoluteUrl } from "@/lib/format";
import { breadcrumbSchema } from "@/lib/schema";

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
  const articles = articlesByCategory(category.slug).slice(0, 6);
  const intro = categoryIntros[category.slug];
  const priority = new Set(["compound-interest", "auto-loan", "percentage", "date-difference", "unit-price"]);
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators/" }, { label: category.name, href: `/calculators/${category.slug}/` }];
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })))) }} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="premium-shell relative mt-5 overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300" />
        <p className="page-kicker">{category.name} tools</p>
        <h1 className="mt-2 text-4xl font-bold">{category.name} calculators</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">{category.description}</p>
      </section>
      {intro ? (
        <section className="mt-6 rounded-2xl border border-line bg-white/85 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
          <h2 className="text-xl font-bold">Plan with clearer estimates</h2>
          <p className="mt-2 max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{intro.summary}</p>
          <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-3">
            {intro.tips.map((tip) => <li className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-zinc-800 dark:bg-zinc-950" key={tip}>{tip}</li>)}
          </ul>
        </section>
      ) : null}
      <div className="mt-8">
        <CardGrid items={calculators.map((calculator) => ({
          href: `/calculators/${calculator.category}/${calculator.slug}/`,
          title: calculator.name,
          description: calculator.description,
          badge: priority.has(calculator.slug) ? "Start here" : calculator.categoryName,
          cta: "Open calculator",
          featured: priority.has(calculator.slug) || calculator.category === "finance",
        }))} />
      </div>
      {articles.length ? (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Helpful {category.name.toLowerCase()} guides</h2>
          <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">Use these guides to understand the assumptions behind the calculators and check your estimate before acting on it.</p>
          <div className="mt-6">
            <CardGrid items={articles.map((article) => ({ href: `/articles/${article.slug}/`, title: article.title, description: article.description, badge: "Guide", cta: "Read guide" }))} />
          </div>
        </section>
      ) : null}
    </main>
  );
}
