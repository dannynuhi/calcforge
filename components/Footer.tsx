import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-300 dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm sm:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-400 text-sm font-black text-slate-950">CF</span>
            CalcForge
          </p>
          <p className="mt-3 max-w-md leading-6">Free calculators and simple guides for everyday estimates.</p>
          <p className="mt-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200">Created by {site.creator}</p>
        </div>
        <nav className="grid content-start gap-2" aria-label="Footer">
          <p className="font-semibold text-white">Site</p>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/about/">About</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/contact/">Contact</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/editorial-policy/">Editorial Policy</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/articles/">Guides</Link>
        </nav>
        <nav className="grid content-start gap-2" aria-label="Legal">
          <p className="font-semibold text-white">Trust</p>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/privacy/">Privacy</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/terms/">Terms</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/disclaimer/">Disclaimer</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/sitemap.xml">Sitemap</Link>
          <Link className="no-underline hover:text-emerald-200 hover:underline" href="/rss.xml">RSS</Link>
        </nav>
      </div>
    </footer>
  );
}
