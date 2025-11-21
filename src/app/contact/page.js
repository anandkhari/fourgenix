import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import Map from "./components/Maps";

export const metadata = {
  title: "Contact Fourgenix Partners – U.S. Tax & Advisory Firm",
  description:
    "Get in touch with Fourgenix Partners, a U.S.-based tax and advisory firm in Florida specializing in expat tax services, IRS compliance, FBAR & FATCA reporting.",

  keywords: [
    "Contact Fourgenix",
    "U.S. tax advisor contact",
    "Expat tax consultant Florida",
    "IRS compliance support",
    "International tax firm contact",
    "Fourgenix Partners contact details",
  ],

  alternates: {
    canonical: "https://www.fourgenix.com/contact",
  },

  openGraph: {
    title: "Contact Fourgenix Partners",
    description:
      "Speak with Fourgenix Partners’ expert tax advisors for U.S. tax, expat tax, and international compliance services.",
    url: "https://www.fourgenix.com/contact",
    siteName: "Fourgenix Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Fourgenix Partners",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Fourgenix Partners",
    description:
      "Reach out to Fourgenix Partners for professional U.S. tax and advisory services.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DCDEFF] text-foreground">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Main Content Area (2-column grid) */}
      <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>

      <Map />
    </div>
  );
}
