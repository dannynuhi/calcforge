"use client";

import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculation";
import { formatNumber } from "@/lib/format";
import type { Calculator } from "@/lib/content";

export function CalculatorClient({ calculator }: { calculator: Calculator }) {
  const initialValues = Object.fromEntries(calculator.inputs.map((input) => [input.key, input.default]));
  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const [copied, setCopied] = useState<"result" | "link" | null>(null);
  const result = useMemo(() => calculate(calculator.type, calculator.slug, values), [calculator.slug, calculator.type, values]);
  const shareUrl = typeof window === "undefined" ? "" : `${window.location.origin}${window.location.pathname}?${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}`;
  const copyText = async (text: string, type: "result" | "link") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section id="calculator" className="rounded-2xl border border-line bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <div className="flex flex-col gap-2 border-b border-line pb-4 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-forge dark:text-emerald-300">{calculator.categoryName} estimate</p>
          <h2 className="mt-1 text-xl font-semibold">{calculator.name}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Adjust the inputs to compare scenarios. Results update automatically.</p>
        </div>
        <button
          className="focus-ring rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-forge dark:bg-zinc-100 dark:text-zinc-950"
          type="button"
          onClick={() => copyText(`${calculator.name}: ${formatNumber(result)} ${calculator.unit}`, "result")}
          aria-live="polite"
        >
          {copied === "result" ? "Copied" : "Copy result"}
        </button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {calculator.inputs.map((input) => (
          <label key={input.key} className="block">
            <span className="text-sm font-medium text-ink dark:text-zinc-100">{input.label}</span>
            <div className="mt-1 flex rounded-lg border border-zinc-300 bg-white transition focus-within:border-forge dark:border-zinc-700 dark:bg-zinc-950">
              <input
                className="focus-ring min-w-0 flex-1 bg-transparent px-3 py-3 text-base"
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
      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
        <p className="text-sm font-medium uppercase tracking-wide text-forge dark:text-emerald-300">Estimated result</p>
        <p className="mt-2 text-4xl font-semibold text-ink dark:text-zinc-50">
          {formatNumber(result)} <span className="text-base font-normal text-zinc-600 dark:text-zinc-400">{calculator.unit}</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          This is an educational estimate based on the visible inputs. Change one value at a time to compare scenarios clearly.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            className="focus-ring rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900"
            type="button"
            onClick={() => copyText(shareUrl, "link")}
            disabled={!shareUrl}
          >
            {copied === "link" ? "Copied" : "Copy share link"}
          </button>
          <a className="focus-ring rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-forge no-underline hover:underline dark:text-emerald-300" href="#formula">
            See formula
          </a>
        </div>
      </div>
    </section>
  );
}
