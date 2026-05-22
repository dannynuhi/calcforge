import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: "Calculator results are estimates and are not financial, medical, legal, engineering, or professional advice." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>Calculator results are estimates and are not financial, medical, legal, tax, engineering, or professional advice.</p>
        <p>Financial calculators are educational estimates only. Health calculators are informational and not medical advice. Date and time calculators may vary by timezone, holidays, and local rules.</p>
        <p>For important decisions, compare results with official documents, product labels, qualified professionals, or measured data.</p>
      </div>
    </main>
  );
}
