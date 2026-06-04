import { articles } from "@/data/articles";
import { indexableArticles } from "@/lib/article-quality";
import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const items = indexableArticles(articles).slice(0, 50).map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${new URL(`/articles/${article.slug}/`, site.url)}</link>
      <guid>${new URL(`/articles/${article.slug}/`, site.url)}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.updated).toUTCString()}</pubDate>
    </item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${site.description}</description>${items}</channel></rss>`, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
