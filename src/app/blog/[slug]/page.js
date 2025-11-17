import { sanityClient, urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

// --- Hero Section for Blog ---
function BlogHero() {
  return (
    <section
      className="relative bg-[url('/pages-hero.png')] bg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden
      py-12 sm:py-16 lg:py-16 mt-14 sm:mt-14 lg:mt-18"
    >
      <div className="max-w-7xl mx-auto px-6 text-left">
        <p className="text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
          Fourgenix
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-worksans text-gray-900 leading-tight">
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            Blog
          </span>
        </h1>
      </div>
    </section>
  );
}

// --- Portable Text Custom Components ---
const components = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || "Blog image"}
        className="w-full h-auto rounded-lg my-6"
      />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-4 text-gray-700 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand hover:underline"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await sanityClient.fetch(
    `
    *[_type=="post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      author->{name},
      publishedAt
    }
  `,
    { slug }
  );

  if (!post) return <p>Post not found</p>;

  return (
    <main className="bg-white">
      {/* --- Hero Section --- */}
      <BlogHero />

      {/* --- Blog Content --- */}
      <section className="max-w-5xl mx-auto py-16 mt-8 px-6">
        <h1 className="text-4xl font-worksans mb-6 text-gray-900">{post.title}</h1>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1000).url()}
            alt={post.title}
            className="w-full h-128 object-cover mb-8 rounded-lg"
          />
        )}

        <article className="prose prose-lg font-poppins max-w-none">
          <PortableText value={post.body} components={components} />
        </article>

        <p className="text-gray-600 text-xl mt-12">
          {post.author?.name || "Admin"} •{" "}
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        <Link href="/blog/page/1" className="text-brand font-semibold mt-6 block">
          &larr; Back to Blog
        </Link>
      </section>
    </main>
  );
}
