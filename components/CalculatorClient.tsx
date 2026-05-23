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
    <section id="calculator" className="premium-shell relative overflow-hidden p-5 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300" />
      <div className="flex flex-col gap-3 border-b border-line pb-5 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="page-kicker text-xs">{calculator.categoryName} estimate</p>
          <h2 className="mt-1 text-2xl font-bold">{calculator.name}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Adjust the inputs to compare scenarios. Results update automatically.</p>
        </div>
        <button
          className="premium-button px-4 py-2 text-sm"
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
            <div className="mt-2 flex rounded-xl border border-zinc-300 bg-white shadow-sm transition focus-within:border-forge focus-within:ring-4 focus-within:ring-emerald-100 dark:border-zinc-700 dark:bg-zinc-950 dark:focus-within:ring-emerald-950/40">
              <input
                className="focus-ring min-w-0 flex-1 bg-transparent px-3 py-3 text-base"
                type="number"
                min={"min" in input ? input.min : undefined}
                value={values[input.key]}
                onChange={(event) => setValues((current) => ({ ...current, [input.key]: Number(event.target.value) }))}
              />
              {input.unit ? <span className="border-l border-zinc-200 px-3 py-3 text-sm font-medium text-zinc-500 dark:border-zinc-700">{input.unit}</span> : null}
            </div>
          </label>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-5 shadow-inner dark:border-emerald-900 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-blue-950/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="premium-badge">Estimated result</p>
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Educational estimate</span>
        </div>
        <p className="mt-4 text-4xl font-bold text-ink dark:text-zinc-50 sm:text-5xl">
          {formatNumber(result)} <span className="text-base font-normal text-zinc-600 dark:text-zinc-400">{calculator.unit}</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          This is an educational estimate based on the visible inputs. Change one value at a time to compare scenarios clearly.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            className="premium-button-secondary px-3 py-2 text-sm"
            type="button"
            onClick={() => {
              if (shareUrl) {
                copyText(shareUrl, "link");
              }
            }}
          >
            {copied === "link" ? "Copied" : "Copy share link"}
          </button>
          <a className="focus-ring rounded-full border border-transparent px-3 py-2 text-sm font-semibold text-forge no-underline hover:bg-emerald-50 hover:underline dark:text-emerald-300 dark:hover:bg-emerald-950/30" href="#formula">
            See formula
          </a>
        </div>
      </div>
    </section>
  );
}
