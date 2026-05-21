import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossary } from "@/data/glossary";
import { getGlossaryTerm } from "@/lib/content";

export function generateStaticParams() {
  return glossary.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  return term ? { title: term.term, description: term.description } : {};
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">{term.term}</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{term.description}</p>
    </main>
  );
}
