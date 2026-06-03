export const metadata = {
  title: "Disclaimer",
  description: "CalcForge provides educational calculators and guides.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Disclaimer</h1>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p>CalcForge provides educational calculators and guides. Results are estimates based on the inputs you enter and the assumptions described on each page.</p>
          <p>CalcForge does not provide financial, legal, tax, construction, medical, insurance, or investment advice. Important decisions should be verified with a qualified professional, official source, lender, provider, contract, statement, measurement, or local authority.</p>
          <p>Calculator results can change because of fees, taxes, rounding rules, local requirements, interest-rate changes, measurement errors, timing, and personal circumstances. Use CalcForge to compare scenarios and prepare better questions, not as the only source for a final decision.</p>
        </div>
      </section>
    </main>
  );
}
