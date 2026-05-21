import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: "Calculator results are estimates and are not financial, medical, legal, engineering, or professional advice." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>Calculator results are estimates and are not financial, medical, legal, engineering, or professional advice.</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
