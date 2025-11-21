import { redirect } from "next/navigation";

export const metadata = {
  title: "Fourgenix Blog – U.S. Tax & Expat Financial Insights",
  description:
    "Read expert articles from Fourgenix Partners covering U.S. tax law, expat taxation, FBAR & FATCA reporting, and international financial compliance.",

  keywords: [
    "U.S. tax blog",
    "Expat tax blog",
    "FBAR reporting blog",
    "FATCA blog",
    "International tax insights",
    "Fourgenix blog",
    "Tax tips for expats",
  ],

  alternates: {
    canonical: "https://www.fourgenix.com/blog",
  },

  openGraph: {
    title: "Fourgenix Blog – U.S. Tax & Expat Insights",
    description:
      "Expert articles on U.S. tax, expat tax obligations, FBAR & FATCA reporting from Fourgenix Partners.",
    url: "https://www.fourgenix.com/blog",
    siteName: "Fourgenix Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fourgenix Tax and Advisory Blog",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fourgenix Blog – U.S. Tax & Expat Insights",
    description:
      "Stay updated with the latest U.S. tax and expat tax insights from Fourgenix.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndex() {
  redirect("/blog/page/1");
}
