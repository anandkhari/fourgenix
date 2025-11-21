import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import MissionVision from "./components/MissionVision";

export const metadata = {
  title: "About Fourgenix Partners – U.S. Tax & Expat Advisors",
  description:
    "Learn more about Fourgenix Partners, a U.S.-based tax and advisory firm in Florida specializing in expat taxation, IRS compliance, international reporting and cross-border financial solutions.",

  keywords: [
    "About Fourgenix",
    "U.S. tax firm in Florida",
    "Expat tax advisors",
    "International tax consultants",
    "IRS compliance experts",
    "FBAR and FATCA specialists",
    "Fourgenix Partners LLC",
  ],

  alternates: {
    canonical: "https://www.fourgenix.com/about",
  },

  openGraph: {
    title: "About Fourgenix Partners – Who We Are",
    description:
      "Discover the story, mission, and expertise behind Fourgenix Partners, a trusted U.S. tax and advisory firm serving clients worldwide.",
    url: "https://www.fourgenix.com/about",
    siteName: "Fourgenix Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Fourgenix Partners",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Fourgenix Partners – U.S. Tax & Advisory Firm",
    description:
      "Meet the experts behind Fourgenix Partners, a leading U.S. tax and international advisory firm.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <MissionVision />

    </main>
  );
}
