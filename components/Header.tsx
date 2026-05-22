import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight no-underline focus-ring">CalcForge</Link>
        <nav className="flex items-center gap-3 overflow-x-auto text-sm md:gap-5" aria-label="Primary">
          <Link href="/calculators/">Calculators</Link>
          <Link href="/calculators/finance/">Finance</Link>
          <Link href="/calculators/math/">Math</Link>
          <Link href="/calculators/time/">Time</Link>
          <Link href="/articles/">Guides</Link>
        </nav>
      </div>
    </header>
  );
}
