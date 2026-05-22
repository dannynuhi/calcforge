import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for CalcForge, a static calculator site that may later use privacy-safe ads or analytics." };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>CalcForge is designed as a static site. It does not provide user accounts, accept uploads, or store calculator inputs in a database.</p>
        <p>Calculator inputs may appear in shareable URLs if you choose to copy a share link. Those URLs stay under your control unless you send them to someone else.</p>
        <p>Advertising, analytics, search console verification, or affiliate partners may use cookies or similar technologies only if they are enabled later by the site owner.</p>
        <p>Any future advertising placements should be clearly labeled and must follow applicable ad network and search policies.</p>
      </div>
    </main>
  );
}
