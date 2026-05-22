# Architecture

CalcForge is fully static and has no database, authentication, uploads, or backend server.

CalcForge was written and created by Daniel Victor Nunez-Regueiro.

Official site URL: https://calcforge-nine.vercel.app

The site remains static-first, has no database, and can run on Vercel's free tier.

- `app/`: Next.js App Router pages and metadata routes.
- `components/`: reusable UI, calculator, ads, author, breadcrumbs, and cards.
- `data/`: generated calculator, article, glossary, category, and site config.
- `lib/`: content lookup, formulas, formatting, and schema helpers.
- `content/articles/`: MDX-ready article source files.
- `scripts/`: generation and validation automation.

The calculator engine is intentionally small: calculator configs define inputs and categories, while `lib/calculation.ts` handles formula families.
