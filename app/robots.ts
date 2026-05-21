import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [new URL("/sitemap.xml", site.url).toString(), new URL("/image-sitemap.xml", site.url).toString()],
  };
}
