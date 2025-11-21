// app/services/page.js
import React from "react";
import ServicesHero from "./components/ServicesHero";
import TrustedTaxSection from "./components/TrustedTaxSection";
import ServicesSection from "./components/ServicesSection";

export const metadata = {
  title: "U.S. Tax & Expat Services – Fourgenix Partners",
  description:
    "Explore Fourgenix Partners’ U.S. tax and advisory services including expat tax filing, FBAR & FATCA reporting, IRS compliance, and international tax solutions.",

  keywords: [
    "U.S. tax services",
    "Expat tax filing",
    "FBAR reporting",
    "FATCA filing",
    "International tax compliance",
    "IRS advisory services",
    "US tax for foreigners",
    "Fourgenix Partners services",
  ],

  alternates: {
    canonical: "https://www.fourgenix.com/services",
  },

  openGraph: {
    title: "U.S. Tax & Expat Services – Fourgenix Partners",
    description:
      "Professional U.S. tax, expat tax, FBAR & FATCA reporting, and international compliance services by Fourgenix Partners.",
    url: "https://www.fourgenix.com/services",
    siteName: "Fourgenix Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fourgenix Services – U.S. & International Tax Advisory",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "U.S. Tax & Expat Services – Fourgenix Partners",
    description:
      "Explore our U.S. tax, expat tax, FBAR, FATCA and international compliance services.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <ServicesHero />
      <TrustedTaxSection />
      <ServicesSection />
    </div>
  );
}
