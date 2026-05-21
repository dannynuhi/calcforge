import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { allRoutes } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date("2026-05-21"),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.includes("/calculators/") ? 0.8 : 0.6,
  }));
}
