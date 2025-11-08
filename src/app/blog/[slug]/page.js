// app/blog/[slug]/page.jsx
import { sanityClient } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const posts = await sanityClient.fetch(`*[_type == "post"]{
    slug
  }`);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage,
      body
    }`,
    { slug }
  );

  if (!post) return <p>Post not found</p>;

  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="rounded-lg mb-6"
        />
      )}

      <PortableText value={post.body} />
    </article>
  );
}
