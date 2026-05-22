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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group rounded-lg border bg-white p-5 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-forge hover:shadow-md focus-ring dark:bg-zinc-900 ${
            item.featured ? "border-emerald-200 ring-1 ring-emerald-100 dark:border-emerald-900 dark:ring-emerald-950" : "border-line dark:border-zinc-800"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-ink dark:text-zinc-50">{item.title}</h3>
            {item.badge ? (
              <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-forge dark:bg-emerald-950 dark:text-emerald-300">
                {item.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p>
          <span className="mt-4 inline-flex text-sm font-medium text-forge group-hover:underline dark:text-emerald-300">
            {item.cta ?? "Open calculator"}
          </span>
        </Link>
      ))}
    </div>
  );
}
