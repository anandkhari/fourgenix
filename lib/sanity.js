// lib/sanity.js
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "g3wxkz4i", // replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-11-08",
  useCdn: true,
});
