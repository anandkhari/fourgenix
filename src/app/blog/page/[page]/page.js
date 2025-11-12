import Link from "next/link";
import { sanityClient, urlFor } from "../../../../../lib/sanity"; // adjust path

const PAGE_SIZE = 6;

// --- Helper function for text
function getPlainText(body) {
  if (!body) return "";
  return body
    .map(block => block.children?.map(child => child.text).join("") || "")
    .join(" ");
}

// --- Hero Component (defined outside)
function BlogHero() {
  return (
    <section className="relative bg-[url('/pages-hero.png')] bg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden
    py-12 sm:py-16 lg:py-16 mt-14 sm:mt-14 lg:mt-30"
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

// --- Main Page Component (Server Component) ---
export default async function PaginatedBlog({ params }) {
  // --- Unwrap params safely
  const resolvedParams = await params;
  const pageNumber = parseInt(resolvedParams.page || "1", 10);

  const start = (pageNumber - 1) * PAGE_SIZE;
  const end = pageNumber * PAGE_SIZE;

  // --- Fetch paginated posts
  const posts = await sanityClient.fetch(`
    *[_type=="post"] | order(publishedAt desc) [${start}...${end}]{
      title,
      slug,
      mainImage,
      body,
      author-> { name },
      publishedAt
    }
  `);

  // --- Total posts to calculate pages
  const totalPosts = await sanityClient.fetch(`count(*[_type=="post"])`);
  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

 return (
    <>
      {/* Hero */}
      {/* (Assuming BlogHero component is also made responsive) */}
      <BlogHero />

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 lg:px-16">
        
        {/* Responsive, centered, and constrained heading */}
        {/* <h2 className="text-2xl sm:text-4xl mb-14 md:mb-14 ">
          Explore our expert insights on proactive tax strategy, 
          compliance, and financial growth.
        </h2> */}

        {/* Responsive grid gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {posts.map(post => (
            <div
              key={post.slug.current}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              {post.mainImage && (
                <Link href={`/blog/${post.slug.current}`}>
                  <img
                    src={urlFor(post.mainImage).width(600).height(350).url()}
                    alt={post.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                </Link>
              )}
              <div className="p-6 flex flex-col flex-grow">
                {/* Responsive card heading */}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins leading-snug mb-5">
                  {post.title}
                </h2>
                
                {/* Responsive card text */}
                <p className="text-sm sm:text-base text-gray-600 font-poppins flex-grow mb-6">
                  {getPlainText(post.body).slice(0, 120) + "..."}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-poppins mb-5">
                  {post.author?.name || "Admin"} •{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-1.5 font-worksans text-brand font-medium text-sm sm:text-base pt-2 pb-1"
                >
                  Read More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - now responsive with flex-wrap and size changes */}
        <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mt-10 md:mt-12 items-center">
          {/* Previous */}
          <Link
            href={pageNumber > 1 ? `/blog/page/${pageNumber - 1}` : "#"}
            className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium transition-colors border border-gray-300
            ${pageNumber > 1
              ? "bg-white text-gray-700 hover:bg-gray-100"
              : "bg-white text-gray-300 cursor-not-allowed pointer-events-none"
            }`}
            aria-disabled={pageNumber <= 1}
            tabIndex={pageNumber <= 1 ? -1 : undefined}
          >
            &lt;
          </Link>

          {/* Page Numbers - responsive size */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <Link
              key={num}
              href={`/blog/page/${num}`}
              className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium text-sm sm:text-base transition-colors
              ${num === pageNumber
                ? "bg-brand text-white border-blue-500"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
              aria-current={num === pageNumber ? "page" : undefined}
            >
              {num}
            </Link>
          ))}

          {/* Next */}
          <Link
            href={pageNumber < totalPages ? `/blog/page/${pageNumber + 1}` : "#"}
            className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium transition-colors border border-gray-300
            ${pageNumber < totalPages
              ? "bg-white text-gray-700 hover:bg-gray-100"
              : "bg-white text-gray-300 cursor-not-allowed pointer-events-none"
            }`}
            aria-disabled={pageNumber >= totalPages}
            tabIndex={pageNumber >= totalPages ? -1 : undefined}
          >
            &gt;
          </Link>
        </div>
      </section>
    </>
  );
}