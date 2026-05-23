import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-paper/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="focus-ring flex items-center gap-2 text-lg font-bold tracking-tight text-ink no-underline dark:text-zinc-50">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-slate-900 text-sm font-black text-white shadow-md shadow-emerald-900/15">
            CF
          </span>
          <span>CalcForge</span>
        </Link>
        <nav className="flex items-center gap-2 overflow-x-auto text-sm md:gap-2" aria-label="Primary">
          <Link className="rounded-full px-3 py-2 font-medium no-underline transition hover:bg-white hover:text-forge dark:hover:bg-zinc-900" href="/calculators/">Calculators</Link>
          <Link className="rounded-full px-3 py-2 font-medium no-underline transition hover:bg-white hover:text-forge dark:hover:bg-zinc-900" href="/calculators/finance/">Finance</Link>
          <Link className="rounded-full px-3 py-2 font-medium no-underline transition hover:bg-white hover:text-forge dark:hover:bg-zinc-900" href="/calculators/math/">Math</Link>
          <Link className="rounded-full px-3 py-2 font-medium no-underline transition hover:bg-white hover:text-forge dark:hover:bg-zinc-900" href="/calculators/time/">Time</Link>
          <Link className="rounded-full px-3 py-2 font-medium no-underline transition hover:bg-white hover:text-forge dark:hover:bg-zinc-900" href="/articles/">Guides</Link>
        </nav>
      </div>
    </header>
  );
}
