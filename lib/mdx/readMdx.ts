import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { InsightFrontmatter } from "@/types/insight";

export const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export async function readMdxFileBySlug(slug: string) {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = matter(raw);

  const fm = parsed.data as Partial<InsightFrontmatter>;
  if (!fm.title || !fm.date) {
    throw new Error(`Missing required frontmatter (title/date) in ${slug}.mdx`);
  }

  return {
    frontmatter: {
      title: String(fm.title),
      date: String(fm.date),
      summary: fm.summary ? String(fm.summary) : undefined,
      tags: Array.isArray(fm.tags) ? fm.tags.map(String) : undefined,
      published: typeof fm.published === "boolean" ? fm.published : true
    } satisfies InsightFrontmatter,
    content: parsed.content
  };
}
