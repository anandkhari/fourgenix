import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

// 1. UPDATED: Content from your document
const footerLinks = {
  quick: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ],
  visit: [
    { title: "FOURGENIX PARTNERS LLC" },
    { title: "7901 4th St N, Ste 300" },
    { title: "St. Petersburg, FL" },
  ],
  contact: [
    { title: "Fourgenix@gmail.com", href: "mailto:Fourgenix@gmail.com" },
    { title: "+60-998930645", href: "tel:+60998930645" },
  ],
};

// 2. REFACTORED: Reusable Footer Column
const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    {/* 3. CHANGED: Styling to match site's design system */}
    <h3 className="text-lg font-medium text-gray-900">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          {/* 4. ADDED: Logic to render <p> if no href, or <Link> if href exists */}
          {link.href ? (
            <Link
              href={link.href}
              className="text-base text-gray-600 hover:text-gray-900"
            >
              {link.title}
            </Link>
          ) : (
            <p className="text-base text-gray-600">
              {link.title}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    // 5. CHANGED: Adjusted background and padding
    <footer className="relative bg-gray-50 pt-12 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-8 ml-2 lg:ml-10">
        
        {/* 6. CHANGED: Passed 'size="footer"' prop to NewsletterForm */}
        <NewsletterForm size="footer" />

        {/* Links + Logo Section */}
        <div className="relative z-10 mt-12 sm:mt-16 grid grid-cols-1 gap-12 border-t border-gray-200 pt-12 sm:pt-16 lg:grid-cols-4">
          {/* Logo */}
          <div className="flex justify-start lg:justify-start">
            <Image
              src="/logo.png" // TODO: Update logo path if needed
              alt="Fourgenix Brand"
              width={314}
              height={236}
              // 7. CHANGED: Adjusted logo size
              className="rounded-2xl object-contain w-40"
            />
          </div>

          {/* Quick Links */}
          <FooterLinkColumn title="Quick links" links={footerLinks.quick} />

          {/* Visit Us */}
          <FooterLinkColumn title="Visit Us At" links={footerLinks.visit} />

          {/* Contact Us */}
          <FooterLinkColumn title="Contact us" links={footerLinks.contact} />
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 sm:flex-row">
          {/* 8. CHANGED: Styling to match site's design system */}
          <p className="text-sm text-gray-600 text-center sm:text-left">
            @ Fourgenix Partners LLC
          </p>
          <p className="text-sm text-gray-600 text-center sm:text-right">
            Privacy Policy and Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
