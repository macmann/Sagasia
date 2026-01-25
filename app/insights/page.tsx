import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { getInsights } from "@/lib/mdx/getInsights";

export const metadata = {
  title: "Insights"
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
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="group">
              <Card className="h-full">
                <div className="text-xs text-slate-500">
                  {new Date(post.date).toLocaleDateString()}
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
