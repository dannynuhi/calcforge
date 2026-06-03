import Link from "next/link";

export const metadata = {
  title: "Calculator Learning Center",
  description:
    "Learn how to use calculators for planning, comparison, and better everyday estimates without treating results as final advice.",
};

export default function LearningCenterPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forge">Learning Center</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Learn how to make calculator results more useful
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
          CalcForge is most useful when you use calculators as decision-support tools. The goal is not to get one magic
          number. The goal is to understand the assumptions, compare realistic scenarios, and know what to verify next.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Use the result as a range, not a promise</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            A calculator result is usually most helpful when you compare it with nearby possibilities. Try a lower,
            expected, and higher input so you can understand how sensitive the answer is.
          </p>
        </article>
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Check what the calculator cannot know</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Calculators cannot see hidden fees, local rules, changing prices, contract terms, exact lender methods, or
            personal details. Those limits matter most when a decision is expensive or hard to reverse.
          </p>
        </article>
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Write down your assumptions</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            When comparing options, write down the rate, quantity, date, price, or measurement you used. That makes it
            easier to explain the estimate later and compare it with quotes or documents.
          </p>
        </article>
        <article className="premium-card p-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Verify important outcomes</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Use CalcForge to prepare, estimate, and compare. Before acting, verify important outcomes with the relevant
            provider, professional, official source, measurement, statement, or contract.
          </p>
        </article>
      </section>

      <section className="mt-8 premium-sheet p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">A practical three-pass workflow</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li><strong>Baseline:</strong> enter the most realistic numbers you have right now.</li>
          <li><strong>Stress test:</strong> change the input that could go against you, such as a higher rate or cost.</li>
          <li><strong>Better case:</strong> test a more favorable input so you can compare the range.</li>
          <li><strong>Reality check:</strong> compare the estimate with actual quotes, rules, statements, or measurements.</li>
        </ol>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <Link className="premium-card group p-5 no-underline" href="/calculators/finance/compound-interest/">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Finance example</p>
          <h2 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-forge dark:text-white">Compound interest</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Compare contribution amounts, time horizons, and rates to see how assumptions change growth estimates.
          </p>
        </Link>
        <Link className="premium-card group p-5 no-underline" href="/calculators/finance/auto-loan/">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Payment example</p>
          <h2 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-forge dark:text-white">Auto loan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Test price, down payment, term, and rate before comparing real loan offers.
          </p>
        </Link>
        <Link className="premium-card group p-5 no-underline" href="/calculators/finance/unit-price/">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forge">Shopping example</p>
          <h2 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-forge dark:text-white">Unit price</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Compare package sizes and prices so the cheaper-looking option does not hide a worse value.
          </p>
        </Link>
      </section>

      <section className="mt-8 premium-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Questions to ask after using a calculator</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">What assumption matters most?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Look for the input that changes the result the most. That is often the number worth verifying first.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">What is missing from the estimate?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Check whether the calculator excludes fees, taxes, local rules, delivery costs, measurement waste, contract terms, or timing issues.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">What would make this result wrong?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Think about the most likely real-world reason the result could change, then run another scenario with that risk included.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">Where should I verify this?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Use the result to prepare better questions for the lender, provider, contractor, official source, document, or professional involved.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
