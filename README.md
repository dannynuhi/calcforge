# CalcForge

CalcForge is a static, SEO-first utility website built with Next.js 15 App Router, TypeScript, TailwindCSS, MDX support, and JSON-driven content.

Created by Daniel Victor Nunez-Regueiro.

Official free Vercel URL: https://calcforge-nine.vercel.app

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run verify
npm run validate:metadata
npm run check:links
npm run build
```

The static export is generated in `out/`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set **Framework Preset** to Next.js.
4. Keep `NEXT_PUBLIC_SITE_URL=https://calcforge-nine.vercel.app`, or omit it to use the built-in free Vercel URL.
5. Optional: add `NEXT_PUBLIC_ENABLE_ADS=true` after ad approval.
6. Optional after AdSense approval: add `NEXT_PUBLIC_ADSENSE_CLIENT` with the real publisher ID.
7. Deploy.

## Content

- Calculator config: `data/calculators.ts`
- Categories: `data/categories.ts`
- Articles index: `data/articles.ts`
- MDX source drafts: `content/articles/*.mdx`

Use `npm run generate:content` to regenerate the starter inventory from `scripts/scaffold.mjs`.
