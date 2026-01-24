import { getInsightSlugs, getInsightBySlug } from "./getInsightBySlug";
import type { InsightPost } from "@/types/insight";

export async function getInsights(): Promise<InsightPost[]> {
  const slugs = await getInsightSlugs();
  const posts = await Promise.all(slugs.map((s) => getInsightBySlug(s)));

  return posts
    .filter((p): p is InsightPost => Boolean(p))
    .filter((p) => p.published !== false)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
