import type { Metadata } from "next";

export const metadata: Metadata = { title: "About CalcForge", description: "Learn what CalcForge is, who created it, and how its calculators and guides are maintained." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">About CalcForge</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is a utility website focused on transparent formulas, practical examples, and fast pages. It was written and created by Daniel Victor Nunez-Regueiro.</p>
        <p>The site is intentionally simple: no accounts, no uploads, no database, and no paid services required for the core experience.</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
