export type InsightFrontmatter = {
  title: string;
  date: string; // ISO date string
  summary?: string;
  tags?: string[];
  published?: boolean;
};

export type InsightPost = InsightFrontmatter & {
  slug: string;
  content: string;
};
