import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contact note for CalcForge corrections, suggestions, and calculator feedback." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge welcomes corrections and suggestions, especially when a formula needs clearer assumptions or a calculator page could be easier to use.</p>
        <p>No contact form is included because the site is static-first and does not collect messages, uploads, or account data. Add a public contact email here only when you are ready to monitor it.</p>
      </div>
    </main>
  );
}
