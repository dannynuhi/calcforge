import Link from "next/link";
import { categories } from "@/data/categories";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold no-underline">CalcForge</Link>
        <nav className="hidden items-center gap-5 text-sm md:flex" aria-label="Primary">
          <Link href="/calculators/">Calculators</Link>
          <Link href="/articles/">Guides</Link>
          <Link href="/glossary/">Glossary</Link>
          {categories.slice(0, 4).map((category) => (
            <Link key={category.slug} href={`/calculators/${category.slug}/`}>{category.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
