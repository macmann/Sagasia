import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { InsightDisclaimer } from "@/components/InsightDisclaimer";
import { Section } from "@/components/Section";
import { getInsights } from "@/lib/mdx/getInsights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Browse Sagasia insights on market entry, competitive intelligence, and growth strategy."
};

export default async function InsightsPage() {
  const posts = await getInsights();

  return (
    <div className="space-y-12">
      <Section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Insights</h1>
        <p className="text-lg text-slate-600">
          Market perspectives and advisory playbooks from the Sagasia team.
        </p>
        <InsightDisclaimer />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="group">
              <Card className="h-full">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {post.tags?.[0] ? <Badge>{post.tags[0]}</Badge> : null}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900 group-hover:underline">
                  {post.title}
                </div>
                {post.summary ? (
                  <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
                ) : null}
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
