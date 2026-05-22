import type { Metadata } from "next";

export const metadata: Metadata = { title: "Editorial Policy", description: "CalcForge pages aim to be accurate, useful, and transparent about formulas, assumptions, limitations, and update dates." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge pages aim to be accurate, useful, and transparent about formulas, assumptions, limitations, and update dates.</p>
        <p>Content should solve a real calculation or planning problem, show the formula when practical, and avoid fake credentials, fabricated endorsements, fabricated statistics, and unsupported claims.</p>
        <p>Calculator pages should remain useful without ads, and ads should never mimic controls or obscure the calculator result.</p>
      </div>
    </main>
  );
}
