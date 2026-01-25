import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getInsightSlugs } from "@/lib/mdx/getInsightBySlug";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/services", "/industries", "/insights", "/contact"];
  const slugs = await getInsightSlugs();
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7
    })),
    ...slugs.map((slug) => ({
      url: `${siteConfig.url}/insights/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
