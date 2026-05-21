import type { Metadata } from "next";

export const metadata: Metadata = { title: "About CalcForge", description: "CalcForge is a utility website focused on transparent formulas, practical examples, and fast pages." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">About CalcForge</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is a utility website focused on transparent formulas, practical examples, and fast pages.</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
