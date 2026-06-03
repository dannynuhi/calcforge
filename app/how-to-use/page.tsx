export const metadata = {
  title: "How to Use CalcForge",
  description:
    "A practical guide to using CalcForge calculators for estimates, comparisons, and everyday planning.",
};

export default function HowToUsePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forge">Guide</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          How to get better estimates from CalcForge
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
          The fastest way to get value from CalcForge is to treat each calculator as a comparison tool. One result can
          be helpful, but the real insight usually comes from testing a few realistic scenarios.
        </p>
      </section>

      <section className="mt-8 grid gap-5">
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">1. Use real inputs when possible</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Pull numbers from a bill, loan quote, product listing, measuring tape, statement, or calendar. Estimates
            become more useful when the inputs match your actual situation.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">2. Compare scenarios</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Try a lower rate, higher price, longer timeline, or different quantity. Comparing scenarios helps you see
            what matters most before making a decision.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">3. Read the assumptions</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            A calculator may not include every fee, rule, tax, or local detail. The explanation and disclaimer sections
            help you understand what the estimate can and cannot tell you.
          </p>
        </article>

        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">4. Verify before acting</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Use CalcForge to prepare and compare, then verify high-stakes decisions with the relevant provider,
            professional, document, or local authority.
          </p>
        </article>
      </section>

      <section className="mt-8 premium-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Common mistakes to avoid</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>Using a rough guess when a real number is available from a statement, quote, calendar, bill, or measurement.</li>
          <li>Comparing two results while changing several inputs at once.</li>
          <li>Forgetting to include fees, taxes, delivery, insurance, penalties, waste, or local rules.</li>
          <li>Assuming one calculator result is the same as a quote, contract, professional estimate, or official answer.</li>
          <li>Not rerunning the calculator when a rate, date, price, or quantity changes.</li>
        </ul>
      </section>

    </main>
  );
}
