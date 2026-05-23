"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Calculator } from "@/lib/content";

export function CalculatorSearch({ calculators }: { calculators: readonly Calculator[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return calculators;
    return calculators.filter((calculator) =>
      [calculator.name, calculator.categoryName, calculator.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [calculators, normalizedQuery]);

  return (
    <section className="premium-shell p-4 sm:p-5">
      <label className="block text-sm font-semibold" htmlFor="calculator-search">
        Find a calculator
      </label>
      <input
        id="calculator-search"
        className="focus-ring mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base shadow-sm transition focus:border-forge focus:ring-4 focus:ring-emerald-100 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-emerald-950/40"
        placeholder="Search payments, percentages, dates, unit price..."
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {filtered.length} calculator{filtered.length === 1 ? "" : "s"} shown. All calculator links remain available in the page HTML.
      </p>
      <div className="mt-4 grid max-h-[28rem] gap-3 overflow-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((calculator) => (
          <Link
            className="rounded-2xl border border-line bg-white p-4 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-forge hover:bg-emerald-50/40 hover:shadow-md focus-ring dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-emerald-950/20"
            href={`/calculators/${calculator.category}/${calculator.slug}/`}
            key={calculator.slug}
          >
            <span className="premium-badge">{calculator.categoryName}</span>
            <span className="mt-1 block font-semibold text-ink dark:text-zinc-50">{calculator.name}</span>
            <span className="mt-1 line-clamp-2 block text-sm leading-6 text-zinc-700 dark:text-zinc-300">{calculator.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
