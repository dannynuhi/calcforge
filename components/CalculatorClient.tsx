"use client";

import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculation";
import { formatNumber } from "@/lib/format";
import type { Calculator } from "@/lib/content";

export function CalculatorClient({ calculator }: { calculator: Calculator }) {
  const initialValues = Object.fromEntries(calculator.inputs.map((input) => [input.key, input.default]));
  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const result = useMemo(() => calculate(calculator.type, calculator.slug, values), [calculator.slug, calculator.type, values]);
  const shareUrl = typeof window === "undefined" ? "" : `${window.location.origin}${window.location.pathname}?${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}`;

  return (
    <section id="calculator" className="rounded border border-line bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-2 border-b border-line pb-4 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{calculator.name}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Enter your values. Results update automatically.</p>
        </div>
        <button
          className="focus-ring rounded bg-ink px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-950"
          type="button"
          onClick={() => navigator.clipboard.writeText(`${calculator.name}: ${formatNumber(result)} ${calculator.unit}`)}
        >
          Copy result
        </button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {calculator.inputs.map((input) => (
          <label key={input.key} className="block">
            <span className="text-sm font-medium">{input.label}</span>
            <div className="mt-1 flex rounded border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950">
              <input
                className="focus-ring min-w-0 flex-1 bg-transparent px-3 py-2"
                type="number"
                min={"min" in input ? input.min : undefined}
                value={values[input.key]}
                onChange={(event) => setValues((current) => ({ ...current, [input.key]: Number(event.target.value) }))}
              />
              {input.unit ? <span className="border-l border-zinc-200 px-3 py-2 text-sm text-zinc-500 dark:border-zinc-700">{input.unit}</span> : null}
            </div>
          </label>
        ))}
      </div>
      <div className="mt-6 rounded bg-zinc-50 p-5 dark:bg-zinc-950">
        <p className="text-sm uppercase tracking-wide text-zinc-500">Estimated result</p>
        <p className="mt-1 text-3xl font-semibold">{formatNumber(result)} <span className="text-base font-normal text-zinc-500">{calculator.unit}</span></p>
        <button
          className="focus-ring mt-4 rounded border border-line px-3 py-2 text-sm dark:border-zinc-700"
          type="button"
          onClick={() => navigator.clipboard.writeText(shareUrl)}
        >
          Copy share link
        </button>
      </div>
    </section>
  );
}
