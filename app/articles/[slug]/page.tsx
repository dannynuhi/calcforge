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
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: { title: article.title, description: article.description, type: "article", url: path },
    twitter: { title: article.title, description: article.description },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const calc = calculators.find((calculator) => calculator.slug === article.relatedCalculator);
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
        <h1>{article.title}</h1>
        <p className="lead">{article.description}</p>
        <p className="text-sm text-zinc-500">Updated {article.updated} · {article.readingMinutes} min read</p>
        <h2 id="quick-method">Quick method</h2>
        <p>{copy.method}</p>
        <ul>
          {copy.checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <AdSlot id={`article-mid-${article.slug}`} />
        <h2 id="example">Worked example</h2>
        <p>{copy.example}</p>
        <h2 id="calculator">Related calculator</h2>
        {calc ? <p>Use the <Link href={`/calculators/${calc.category}/${calc.slug}/`}>{calc.name}</Link> to run the numbers with your own inputs.</p> : null}
        <h2>Planning notes</h2>
        <p>{copy.caution} Revisit the estimate when inputs change; a fresh calculation is usually faster and clearer than adjusting an old answer from memory.</p>
        <AuthorBox />
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
          <AdSlot id={`article-sidebar-${article.slug}`} />
        </div>
      </aside>
    </main>
  );
}
