import Link from "next/link";

export function CardGrid({ items }: { items: { href: string; title: string; description: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="rounded border border-line bg-white p-5 no-underline transition hover:-translate-y-0.5 hover:border-forge dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-ink dark:text-zinc-50">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
