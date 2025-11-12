// app/blog/page.js
import { redirect } from "next/navigation";

export default function BlogIndex() {
  // Redirect /blog → /blog/1
  redirect("/blog/page/1");
}
