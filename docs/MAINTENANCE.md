# Maintenance

Official URL:

https://calcforge-nine.vercel.app

## Weekly Checks

- Open the homepage and a few calculator pages.
- Confirm the Google verification URL still loads:
  https://calcforge-nine.vercel.app/google07a1f7eb87e23854.html
- Check Google Search Console for coverage, sitemap, and indexing issues.

## Monthly Checks

- Run `npm run verify`.
- Run `npm run build`.
- Review Search Console queries and pages.
- If AdSense is approved, check policy center and ad performance.

## Deploy

```bash
npm run verify
vercel --prod
```

## Do Not Touch

- Do not remove `public/google07a1f7eb87e23854.html`.
- Do not replace the official URL with old deployment URLs.
- Do not replace the official Vercel URL with an unavailable custom domain.
- Do not add paid services, paid APIs, paid databases, paid cron jobs, or paid analytics.

## Official URLs

- Homepage: https://calcforge-nine.vercel.app
- Sitemap: https://calcforge-nine.vercel.app/sitemap.xml
- Image sitemap: https://calcforge-nine.vercel.app/image-sitemap.xml
- Robots: https://calcforge-nine.vercel.app/robots.txt

Old temporary Vercel URLs should not be used in source, docs, sitemaps, metadata, or Search Console.
