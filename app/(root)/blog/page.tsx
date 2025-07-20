import { blogPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Blog | IntervueIQ - Interview Preparation Tips & Guides",
  description:
    "Read expert tips, guides, and resources to prepare for technical interviews. Stay ahead with IntervueIQ's latest blogs on mock interviews, resume tips, and more.",
};

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
        Insights, tips, and guides to help you crack your next technical interview.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
