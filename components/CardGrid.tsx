import Link from "next/link";

type CardGridItem = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  cta?: string;
  featured?: boolean;
};

export function CardGrid({ items }: { items: CardGridItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`premium-card group relative overflow-hidden no-underline focus-ring ${
            item.featured ? "border-emerald-200 bg-gradient-to-br from-white via-emerald-50/45 to-white ring-1 ring-emerald-100 dark:border-emerald-900 dark:from-zinc-900 dark:via-emerald-950/20 dark:to-zinc-900 dark:ring-emerald-950" : ""
          }`}
        >
          {item.featured ? <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400" /> : null}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-ink transition group-hover:text-forge dark:text-zinc-50">{item.title}</h3>
            {item.badge ? (
              <span className="premium-badge shrink-0">
                {item.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p>
          <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-ink transition group-hover:bg-forge group-hover:text-white dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-emerald-700">
            {item.cta ?? "Open calculator"}
          </span>
        </Link>
      ))}
    </div>
  );
}
