export const metadata = {
  title: "Editorial Policy",
  description: "CalcForge pages are written to help users understand estimates, assumptions, and practical next steps.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Editorial Policy</h1>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p>CalcForge pages are written to help users understand estimates, assumptions, and practical next steps. The editorial goal is usefulness, transparency, and readability.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>explain assumptions plainly</li>
            <li>avoid fake certainty</li>
            <li>avoid exaggerated accuracy claims</li>
            <li>distinguish educational estimates from professional advice</li>
            <li>keep calculators easy to use</li>
            <li>keep important limitations visible</li>
            <li>evaluation pages for broken links, unclear wording, and misleading claims</li>
          </ul>
          <p>CalcForge does not publish fabricated endorsement claims, fabricated endorsement claims, or claims of guaranteed outcomes. Pages should help users make better comparisons before they verify important decisions with the appropriate professional, provider, or source.</p>
        </div>
      </section>
    </main>
  );
}
