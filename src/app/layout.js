import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Work_Sans, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import WhatsAppButton from "../components/WhatsAppButton";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-work-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://www.fourgenix.com"),
  title: {
    default: "Fourgenix Partners – U.S. Tax & Expat Advisory Firm",
    template: "%s | Fourgenix Partners",
  },
  description:
    "Fourgenix Partners is a U.S.-based tax and advisory firm specializing in U.S. tax filing, expat taxation, FBAR, FATCA, and international compliance services.",

  keywords: [
    "Fourgenix",
    "U.S. tax services",
    "Expat tax filing",
    "FBAR filing",
    "FATCA reporting",
    "U.S. tax for expats",
    "International tax advisor",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.fourgenix.com",
    title: "Fourgenix Partners – U.S. Tax & Expat Advisory Firm",
    description:
      "Expert U.S. tax, expat taxation, FBAR & FATCA filing services by Fourgenix Partners.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fourgenix Partners",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} font-[var(--font-poppins)] antialiased`}
      >
        {/* Organization Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fourgenix Partners",
              url: "https://www.fourgenix.com",
              logo: "https://www.fourgenix.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7901 4th St N, Ste 300",
                addressLocality: "St. Petersburg",
                addressRegion: "FL",
                postalCode: "33702",
                addressCountry: "US",
              },
            }),
          }}
        />

        <Toaster position="top-center" richColors />
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
