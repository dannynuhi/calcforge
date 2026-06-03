export const metadata = {
  title: "Contact",
  description: "Use the contact page to report calculator issues, unclear explanations, broken links, or suggestions for making CalcForge more useful.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="premium-sheet p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Contact</h1>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p>Use the contact page to report calculator issues, unclear explanations, broken links, or suggestions for making CalcForge more useful.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>the calculator or article URL</li>
            <li>what input you entered</li>
            <li>what result seemed confusing</li>
            <li>what you expected to happen</li>
            <li>whether the issue happened on mobile or desktop</li>
          </ul>
          <p>CalcForge is designed to improve over time based on clarity, usefulness, accuracy of explanations, and real user needs.</p>
        </div>
      </section>
    </main>
  );
}
