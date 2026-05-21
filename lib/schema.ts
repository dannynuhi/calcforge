import { site } from "@/data/site";
import type { Article, Calculator } from "@/lib/content";

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const calculatorSchema = (calculator: Calculator, url: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: calculator.name,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  url,
  description: calculator.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export const articleSchema = (article: Article, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  dateModified: article.updated,
  datePublished: article.updated,
  author: { "@type": "Organization", name: site.author },
  publisher: { "@type": "Organization", name: site.name },
  mainEntityOfPage: url,
});
