import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "CalcForge is designed as a static site. Advertising, analytics, and affiliate partners may use cookies when enabled by the site owner." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is designed as a static site. Advertising, analytics, and affiliate partners may use cookies when enabled by the site owner.</p>
        <p>Pages are maintained with a lightweight editorial process: define the user problem, show the relevant formula, include examples where helpful, and avoid claims that cannot be substantiated.</p>
      </div>
    </main>
  );
}
