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



function EstimateQualityChecklist() {
  return (
    <section className="mt-8 premium-sheet p-5 sm:p-6">
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">Estimate quality checklist</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300 md:grid-cols-2">
        <li><strong>Input source:</strong> use numbers from a real document, quote, bill, rate, or measurement when possible.</li>
        <li><strong>Missing costs:</strong> check whether fees, taxes, delivery, insurance, or local rules could change the result.</li>
        <li><strong>Scenario range:</strong> compare at least one conservative and one optimistic version.</li>
        <li><strong>Final check:</strong> verify important decisions with the relevant provider, professional, or official source.</li>
      </ul>
    </section>
  );
}

function QualityUseGuide({ title }: { title: string }) {
  return (
    <section className="mt-8 grid gap-5 lg:grid-cols-3">
      <article className="premium-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Use it well</p>
        <h2 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">How to use this estimate</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          Start with numbers from a real quote, statement, bill, measurement, or calendar. Then change one input at a time
          so you can see which assumption moves the result most.
        </p>
      </article>
      <article className="premium-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Double-check</p>
        <h2 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">Before relying on the result</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          A {title} can help with planning, but real-world totals may include fees, taxes, local rules, rounding, or terms
          this page cannot know. Verify important decisions with the relevant provider or document.
        </p>
      </article>
      <article className="premium-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Compare scenarios</p>
        <h2 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">Try three versions</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          Run a conservative, expected, and stretch scenario. This makes the calculator more useful than a single number
          and helps you spot risk before you act.
        </p>
      </article>
    </section>
  );
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
        <section className="premium-shell relative mt-5 overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300" />
          <p className="page-kicker">{calculator.categoryName} calculator</p>
          <h1 className="mt-2 text-4xl font-bold">{calculator.name}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">{calculator.description}</p>
          <p className="mt-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-zinc-600 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-zinc-300">Updated {calculator.updated} · Free to use · No signup required</p>
        </section>
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm leading-6 text-zinc-700 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-zinc-300">
          <strong className="text-ink dark:text-zinc-100">Before you use it:</strong> Enter your values, review the formula, and use the result as a practical estimate. {disclaimer}
        </div>
        <div className="mt-8"><CalculatorClient calculator={calculator} /></div>
        
        <QualityUseGuide title={calculator.title} />

        <EstimateQualityChecklist />

        <AdSlot id={`below-calculator-${calculator.slug}`} />
        <section id="formula" className="prose prose-zinc mt-8 max-w-none rounded-3xl border border-line bg-white/90 p-6 shadow-sm dark:prose-invert dark:border-zinc-800 dark:bg-zinc-900/90">
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
          <h2 className="text-2xl font-bold">Related calculators</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedCalculators(calculator).map((item) => (
              <Link className="focus-ring rounded-2xl border border-line bg-white p-4 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-forge hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900" key={item.slug} href={`/calculators/${item.category}/${item.slug}/`}>
                <span className="premium-badge">{item.categoryName}</span>
                <span className="mt-1 block font-semibold">{item.name}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedArticlesForCalculator(calculator).map((article) => (
              <Link className="focus-ring rounded-2xl border border-line bg-white p-4 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-forge hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900" key={article.slug} href={`/articles/${article.slug}/`}>
                <span className="premium-badge">Guide</span>
                <span className="mt-1 block font-semibold">{article.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <nav className="rounded-2xl border border-line bg-white/90 p-4 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90" aria-label="Table of contents">
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
