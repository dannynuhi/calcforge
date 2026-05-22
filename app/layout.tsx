import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdSenseScript } from "@/components/AdSenseScript";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s | CalcForge" },
  description: site.description,
  authors: [{ name: site.creator }],
  creator: site.creator,
  publisher: site.organizationName,
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, type: "website", locale: site.locale, url: site.url },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-1211518887152940" />
      </head>
      <body>
        <AdSenseScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          creator: { "@type": "Person", name: site.creator },
          publisher: { "@type": "Organization", name: site.organizationName, url: site.url },
        }) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
