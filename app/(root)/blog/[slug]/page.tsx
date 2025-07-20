import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const blogs = await getAllBlogs(); // fetch all blog slugs

  return blogs.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description || "",
  };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostPage;
