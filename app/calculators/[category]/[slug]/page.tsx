import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorClient } from "@/components/CalculatorClient";
import { calculators } from "@/data/calculators";
import { site } from "@/data/site";
import { calculatorDisclaimers } from "@/lib/disclaimers";
import { absoluteUrl } from "@/lib/format";
import { breadcrumbSchema, calculatorSchema, faqSchema } from "@/lib/schema";
import { getCalculator, relatedArticlesForCalculator, relatedCalculators } from "@/lib/content";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ category: calculator.category, slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) return {};
  const path = `/calculators/${calculator.category}/${calculator.slug}/`;
  return {
    title: calculator.seoTitle,
    description: calculator.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: calculator.seoTitle, description: calculator.metaDescription, url: path },
    twitter: { title: calculator.seoTitle, description: calculator.metaDescription },
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator || calculator.category !== category) notFound();
  const url = absoluteUrl(site.url, `/calculators/${calculator.category}/${calculator.slug}/`);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators/" },
    { label: calculator.categoryName, href: `/calculators/${calculator.category}/` },
    { label: calculator.name, href: `/calculators/${calculator.category}/${calculator.slug}/` },
  ];
  const disclaimer = calculatorDisclaimers[calculator.disclaimerType] ?? calculatorDisclaimers.general;

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema(calculator, url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(calculator.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })))) }} />
      <article>
        <Breadcrumbs items={breadcrumbs} />
        <section className="mt-5 rounded-2xl border border-line bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-forge">{calculator.categoryName} calculator</p>
          <h1 className="mt-2 text-3xl font-bold">{calculator.name}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">{calculator.description}</p>
          <p className="mt-3 text-sm text-zinc-500">Updated {calculator.updated} · Free to use · No signup required</p>
        </section>
        <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm leading-6 text-zinc-700 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-zinc-300">
          <strong className="text-ink dark:text-zinc-100">Before you use it:</strong> Enter your values, review the formula, and use the result as a practical estimate. {disclaimer}
        </div>
        <div className="mt-8"><CalculatorClient calculator={calculator} /></div>
        <AdSlot id={`below-calculator-${calculator.slug}`} />
        <section id="formula" className="prose prose-zinc mt-8 max-w-none rounded-2xl border border-line bg-white p-6 dark:prose-invert dark:border-zinc-800 dark:bg-zinc-900">
          <h2>How calculations work</h2>
          <p>This calculator uses the visible inputs on the page and applies the formula below. Keeping the assumptions visible makes the result easier to check and reuse.</p>
          <h2>Formula</h2>
          <p>{calculator.formula}.</p>
          <h2>Worked Example</h2>
          <p>{calculator.example}</p>
          <h2>Common mistakes to avoid</h2>
          <ul>
            <li>Double-check units before comparing results, especially when feet, inches, percentages, months, or years are mixed.</li>
            <li>Use realistic inputs instead of optimistic best-case numbers when the result affects a purchase, project, or budget.</li>
            <li>Recalculate when a quote, rate, schedule, body measurement, or project dimension changes.</li>
          </ul>
          <h2>How to use this result</h2>
          <p>{disclaimer} Compare important results with quotes, product labels, lender disclosures, professional advice, or measured project data when the decision has financial, health, or safety consequences.</p>
          <h2>Next useful step</h2>
          <p>Review the related calculators and guides below if you need to compare another scenario, check assumptions, or understand the method in more detail.</p>
          <h2>FAQs</h2>
          {calculator.faqs.map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </section>
        <AuthorBox />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Related calculators</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedCalculators(calculator).map((item) => (
              <Link className="focus-ring rounded-xl border border-line bg-white p-4 no-underline shadow-sm hover:border-forge dark:border-zinc-800 dark:bg-zinc-900" key={item.slug} href={`/calculators/${item.category}/${item.slug}/`}>
                <span className="text-xs font-medium uppercase tracking-wide text-forge dark:text-emerald-300">{item.categoryName}</span>
                <span className="mt-1 block font-semibold">{item.name}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedArticlesForCalculator(calculator).map((article) => (
              <Link className="focus-ring rounded-xl border border-line bg-white p-4 no-underline shadow-sm hover:border-forge dark:border-zinc-800 dark:bg-zinc-900" key={article.slug} href={`/articles/${article.slug}/`}>
                <span className="text-xs font-medium uppercase tracking-wide text-forge dark:text-emerald-300">Guide</span>
                <span className="mt-1 block font-semibold">{article.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <nav className="rounded-xl border border-line bg-white p-4 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900" aria-label="Table of contents">
            <p className="font-semibold">On this page</p>
            <a className="mt-3 block" href="#calculator">Calculator</a>
            <a className="mt-2 block" href="#formula">Formula</a>
          </nav>
          <AdSlot id={`sidebar-${calculator.slug}`} size="sidebar" />
        </div>
      </aside>
    </main>
  );
}
