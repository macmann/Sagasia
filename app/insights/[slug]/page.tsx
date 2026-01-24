import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
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
        <div className="text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        {post.summary ? <p className="text-neutral-700">{post.summary}</p> : null}
      </div>

      {content}
    </article>
  );
}
