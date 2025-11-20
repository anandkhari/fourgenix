// lib/sanity.js
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
 projectId: "5uy4v0zm", // replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-11-08",
  useCdn: true,
});

// Initialize image URL builder
const builder = imageUrlBuilder(sanityClient);

// Export a helper function
export function urlFor(source) {
  return builder.image(source);
}