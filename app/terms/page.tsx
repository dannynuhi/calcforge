import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "CalcForge is provided for informational use. You are responsible for verifying results before making decisions." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Terms</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is provided for informational use. You are responsible for verifying results before making decisions.</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
