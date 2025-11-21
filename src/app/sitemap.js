// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://www.fourgenix.com";

  const pages = [
    "",          // Home
    "/about",    // About
    "/services", // Services
    "/profiles", // Who We Help
    "/blog",     // Blog main
    "/contact",  // Contact
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
