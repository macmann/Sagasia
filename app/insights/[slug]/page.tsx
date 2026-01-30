import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Badge } from "@/components/Badge";
import { InsightDisclaimer } from "@/components/InsightDisclaimer";
import { getInsightBySlug, getInsightSlugs } from "@/lib/mdx/getInsightBySlug";
import { MDXComponents } from "@/components/mdx/MDXComponents";

export async function generateStaticParams() {
  const slugs = await getInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary ?? post.title
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);

  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }]
        ]
      }
    },
    components: MDXComponents
  });

  return (
    <article className="prose max-w-none">
      <div className="not-prose mb-8 space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-sm text-text-dark/60">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.tags?.length
            ? post.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)
            : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-dark">{post.title}</h1>
        {post.summary ? <p className="text-text-dark/70">{post.summary}</p> : null}
        <InsightDisclaimer />
      </div>

      {content}
    </article>
  );
}
