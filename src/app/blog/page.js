// app/blog/page.jsx
import Link from "next/link";
import { sanityClient } from "../../../lib/sanity";

export default async function BlogPage() {
const posts = await sanityClient.fetch(`
  *[_type == "post"] | order(publishedAt desc){
    title,
    slug,         // <--- must include this
    publishedAt,
    mainImage,
    body
  }
`);


  return (
    <section className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug.current}
            className="border p-4 rounded-lg hover:shadow-lg transition"
          >
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <Link
              href={`/blog/${post.slug.current}`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
