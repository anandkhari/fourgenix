import React from "react";
import { HeroSection } from "../components/Hero";
import { AboutIntroSection } from "../components/AboutIntroSection";
import { WhyPartnerSection } from "../components/WhyPartnerSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";

export const metadata = {
  title: "U.S. Tax & Expat Advisory Services",
  description:
    "Fourgenix Partners is a U.S.-based tax and advisory firm specializing in U.S. tax filing, expat tax services, FBAR & FATCA reporting and international tax compliance.",

  keywords: [
    "U.S. tax for expats",
    "Expat tax filing services",
    "FBAR filing services",
    "FATCA reporting",
    "U.S. tax return assistance",
    "International tax advisory",
    "IRS compliance services",
    "Fourgenix Partners",
  ],

  alternates: {
    canonical: "https://www.fourgenix.com/",
  },

  openGraph: {
    title: "Fourgenix Partners – U.S. Tax & Expat Advisory Services",
    description:
      "Expert U.S. tax, expat tax filing, and international compliance services by Fourgenix Partners in Florida.",
    url: "https://www.fourgenix.com/",
    siteName: "Fourgenix Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fourgenix – U.S. Tax & Advisory Firm",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fourgenix Partners – U.S. Tax & Expat Advisory Services",
    description:
      "Trusted U.S. tax & advisory services for expats and businesses worldwide.",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutIntroSection />
      <ServicesSection />
      <WhyPartnerSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
