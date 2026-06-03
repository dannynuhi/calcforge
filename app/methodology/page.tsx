export const metadata = {
  title: "CalcForge Methodology",
  description:
    "How CalcForge builds calculators, explains assumptions, and keeps estimates transparent for everyday planning.",
};

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forge">Methodology</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          How CalcForge builds useful calculators
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
          CalcForge is designed for fast educational estimates. The calculators are meant to help people compare
          scenarios, understand formulas, and make better everyday planning decisions. They are not a replacement for
          professional financial, legal, tax, construction, medical, or insurance advice.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Formula transparency</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Calculator pages are built around visible inputs, a clear result, and supporting explanation. When a
            formula is relevant, CalcForge surfaces it so users can understand what the tool is doing instead of
            treating the result like a black box.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Scenario comparison</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Many real-life decisions depend on changing one assumption at a time. CalcForge encourages users to compare
            inputs carefully rather than relying on one estimate as a final answer.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Plain-language context</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            The site is written for regular people who want practical estimates without unnecessary jargon. Supporting
            guides explain what results mean, what to check next, and which assumptions can change the outcome.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Limits and responsibility</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            A calculator can help with planning, but it cannot know every fee, local rule, personal circumstance, or
            contract term. CalcForge highlights that estimates should be verified before making important decisions.
          </p>
        </article>
      </section>

      <section className="mt-8 premium-sheet p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Quality principles</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          <li><strong>Useful first:</strong> calculator pages should solve a real question quickly.</li>
          <li><strong>Clear assumptions:</strong> users should understand what the estimate includes and excludes.</li>
          <li><strong>Readable on mobile:</strong> forms and results should be easy to use on small screens.</li>
          <li><strong>No fake certainty:</strong> the site avoids guarantees and exaggerated accuracy claims.</li>
          <li><strong>Review before action:</strong> important decisions should be checked against real documents, rates, or professional advice.</li>
        </ul>
      </section>

      <section className="mt-8 premium-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What CalcForge avoids</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>It avoids presenting estimates as guaranteed outcomes.</li>
          <li>It avoids hiding important limitations behind polished design.</li>
          <li>It avoids making ad placements feel like calculator controls.</li>
          <li>It avoids replacing professional advice for high-stakes decisions.</li>
          <li>It avoids adding pages that do not help a real user complete a task or understand an estimate.</li>
        </ul>
      </section>

    </main>
  );
}
