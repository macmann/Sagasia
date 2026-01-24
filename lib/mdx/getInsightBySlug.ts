import fs from "node:fs/promises";
import path from "node:path";
import { INSIGHTS_DIR, readMdxFileBySlug } from "./readMdx";
import type { InsightPost } from "@/types/insight";

export async function getInsightSlugs(): Promise<string[]> {
  const entries = await fs.readdir(INSIGHTS_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => e.name.replace(/\.mdx$/, ""));
}

export async function getInsightBySlug(slug: string): Promise<InsightPost | null> {
  try {
    const { frontmatter, content } = await readMdxFileBySlug(slug);
    return { slug, content, ...frontmatter };
  } catch {
    return null;
  }
}
