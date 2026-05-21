import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = { title: "Glossary", description: "Plain-language definitions for common calculator and estimation terms." };

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Glossary</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.map((term) => <Link className="rounded border border-line p-4 no-underline dark:border-zinc-800" key={term.slug} href={`/glossary/${term.slug}/`}>{term.term}</Link>)}
      </div>
    </main>
  );
}
