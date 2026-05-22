import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "CalcForge is provided for informational use. You are responsible for verifying results before making decisions." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Terms</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is provided for informational use. You are responsible for verifying results before making decisions.</p>
        <p>You may use the calculators and guides for personal planning, learning, and estimation. Do not treat the results as professional financial, legal, tax, medical, engineering, or safety advice.</p>
        <p>The site may change over time as formulas, explanations, or page structure improve.</p>
      </div>
    </main>
  );
}
