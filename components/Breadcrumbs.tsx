import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-600 dark:text-zinc-400">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <Link className="hover:text-forge hover:underline" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
