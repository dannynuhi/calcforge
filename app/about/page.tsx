export const metadata = {
  title: "About CalcForge",
  description: "CalcForge exists to make everyday estimates easier to understand.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">About CalcForge</h1>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p>CalcForge exists to make everyday estimates easier to understand. The site focuses on calculators, plain-language guides, visible assumptions, and practical comparisons. It was written and created by Daniel Victor Nunez-Regueiro.</p>
          <p>CalcForge is not a professional advisory service. It is a free educational utility for people who want to estimate payments, percentages, dates, material quantities, health numbers, and everyday costs before checking the result against real documents, providers, or professionals.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>make calculator inputs clear</li>
            <li>explain what results mean</li>
            <li>show useful context around estimates</li>
            <li>avoid fake certainty or exaggerated claims</li>
            <li>keep pages fast and easy to use on mobile</li>
            <li>separate educational tools from advertisements</li>
          </ul>
          <p>The site is built for regular people who need a quick estimate and a better understanding of the assumptions behind that estimate.</p>
        </div>
      </section>
    </main>
  );
}
