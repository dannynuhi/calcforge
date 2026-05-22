import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles } from "@/data/articles";
import { calculators } from "@/data/calculators";
import { site } from "@/data/site";
import { articleCopy } from "@/lib/article-copy";
import { absoluteUrl } from "@/lib/format";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getArticle, relatedArticles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const path = `/articles/${article.slug}/`;
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: article.seoTitle, description: article.metaDescription, type: "article", url: path },
    twitter: { title: article.seoTitle, description: article.metaDescription },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const calc = calculators.find((calculator) => calculator.slug === article.relatedCalculator);
  const relatedCalculators = calculators.filter((calculator) => calculator.category === article.category && calculator.slug !== article.relatedCalculator).slice(0, 4);
  const copy = articleCopy(article);
  const url = absoluteUrl(site.url, `/articles/${article.slug}/`);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/articles/" },
    { label: article.title, href: `/articles/${article.slug}/` },
  ];
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article, url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })))) }} />
      <article className="prose prose-zinc max-w-none dark:prose-invert">
        <Breadcrumbs items={breadcrumbs} />
        <section className="not-prose rounded-2xl border border-line bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-forge">CalcForge guide</p>
          <h1 className="mt-2 text-3xl font-bold text-ink dark:text-zinc-50">{article.title}</h1>
          <p className="mt-3 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{article.description}</p>
          <p className="mt-3 text-sm text-zinc-500">Updated {article.updated} · {article.readingMinutes} min read</p>
        </section>
        <h2 id="quick-method">Quick method</h2>
        <p>{copy.method}</p>
        <ul>
          {copy.checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <AdSlot id={`article-mid-${article.slug}`} />
        <h2 id="example">Worked example</h2>
        <p>{copy.example}</p>
        <h2 id="calculator">Related calculator</h2>
        {calc ? (
          <div className="not-prose rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="text-sm font-medium uppercase tracking-wide text-forge dark:text-emerald-300">Try the calculator</p>
            <Link className="mt-1 block text-lg font-semibold no-underline hover:underline" href={`/calculators/${calc.category}/${calc.slug}/`}>{calc.name}</Link>
            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Run the numbers with your own inputs and compare another scenario.</p>
          </div>
        ) : null}
        {relatedCalculators.length ? (
          <>
            <h2>Related calculators</h2>
            <ul>
              {relatedCalculators.map((calculator) => (
                <li key={calculator.slug}><Link href={`/calculators/${calculator.category}/${calculator.slug}/`}>{calculator.name}</Link></li>
              ))}
            </ul>
          </>
        ) : null}
        <h2>Planning notes</h2>
        <p>{copy.caution} Revisit the estimate when inputs change; a fresh calculation is usually faster and clearer than adjusting an old answer from memory.</p>
        <h2>Common mistakes</h2>
        <ul>
          <li>Using a rounded number too early and then treating the final result as exact.</li>
          <li>Forgetting to update rates, dates, quantities, or assumptions when comparing two options.</li>
          <li>Skipping the related calculator when a quick check would catch an input or unit error.</li>
        </ul>
        <h2>What to use next</h2>
        <p>
          Browse more <Link href={`/calculators/${article.category}/`}>{article.category} calculators</Link> or use the related guides below to compare a second method before making a decision.
        </p>
        <AuthorBox />
        <AdSlot id={`article-bottom-${article.slug}`} />
        <h2>Related guides</h2>
        <ul>
          {relatedArticles(article, 5).map((item) => (
            <li key={item.slug}><Link href={`/articles/${item.slug}/`}>{item.title}</Link></li>
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
          <AdSlot id={`article-sidebar-${article.slug}`} size="sidebar" />
        </div>
      </aside>
    </main>
  );
}
