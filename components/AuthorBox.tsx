import { site } from "@/data/site";

export function AuthorBox() {
  return (
    <section className="rounded border border-line bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-base font-semibold">Created by {site.creator}</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">
        CalcForge pages are written to show inputs, assumptions, formulas, and limitations clearly. We avoid fabricated credentials and update evergreen pages when formulas or user needs change.
      </p>
    </section>
  );
}
