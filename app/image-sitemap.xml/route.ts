import { calculators } from "@/data/calculators";
import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const urls = calculators.slice(0, 50).map((calculator) => `
    <url>
      <loc>${new URL(`/calculators/${calculator.category}/${calculator.slug}/`, site.url)}</loc>
      <image:image>
        <image:loc>${new URL("/og-default.png", site.url)}</image:loc>
        <image:title>${calculator.name}</image:title>
      </image:image>
    </url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
}
