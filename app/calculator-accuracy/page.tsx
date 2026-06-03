export const metadata = {
  title: "Calculator Accuracy and Assumptions",
  description:
    "Learn how to interpret CalcForge estimates, what can affect accuracy, and when to verify results before acting.",
};

export default function CalculatorAccuracyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forge">Accuracy</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          How accurate are CalcForge calculators?
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
          CalcForge calculators are educational tools. They can be useful for planning and comparing scenarios, but the
          output depends on the numbers you enter and the assumptions built into each formula.
        </p>
      </section>

      <section className="mt-8 premium-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What can change a result?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">Missing fees or local rules</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Loan fees, taxes, insurance, material waste, delivery costs, penalties, and local rules can change the
              real-world total.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">Rounded or estimated inputs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Small changes in rates, dates, quantities, or measurements can create meaningfully different results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">Different calculation methods</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Some institutions or professionals use different assumptions, compounding schedules, rounding rules, or
              definitions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950 dark:text-white">Changing conditions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Prices, interest rates, timelines, and personal circumstances change. Recalculate when your inputs change.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 premium-sheet p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">How to use results responsibly</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
          <li>Start with realistic inputs from a statement, quote, measurement, or current rate.</li>
          <li>Change one input at a time so you can see what drives the result.</li>
          <li>Compare best-case, expected-case, and worst-case scenarios.</li>
          <li>Use the explanation and formula section to understand the estimate.</li>
          <li>Verify important decisions with the relevant lender, contractor, tax professional, doctor, or local authority.</li>
        </ol>
      </section>

      <section className="mt-8 premium-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Decision-risk levels</h2>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p><strong>Low risk:</strong> everyday comparisons such as unit price, percentage difference, or quick date gaps. A calculator can usually give enough context for a simple comparison.</p>
          <p><strong>Medium risk:</strong> planning purchases, timelines, quantities, or payments. Use the calculator to compare options, then check the assumptions before acting.</p>
          <p><strong>High risk:</strong> loans, contracts, taxes, health, legal deadlines, construction orders, insurance, or large purchases. Use CalcForge to prepare, then verify with the relevant source before deciding.</p>
        </div>
      </section>

    </main>
  );
}
