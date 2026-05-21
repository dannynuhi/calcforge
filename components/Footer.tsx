import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-ink dark:text-zinc-100">CalcForge</p>
          <p className="mt-2">Transparent calculators and concise guides for everyday planning.</p>
        </div>
        <nav className="grid gap-2" aria-label="Footer">
          <Link href="/about/">About</Link>
          <Link href="/editorial-policy/">Editorial Policy</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <nav className="grid gap-2" aria-label="Legal">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
          <Link href="/rss.xml">RSS</Link>
        </nav>
      </div>
    </footer>
  );
}
