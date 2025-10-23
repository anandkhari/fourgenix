import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from "@/components/NewsletterForm";


// Data for footer links
const footerLinks = {
  quick: [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' },
  ],
  visit: [{ title: 'FOURGENIX PARTNERS LLC', href: '#' }],
  contact: [
    {
      title:
        'We specialize in U.S. individual tax filing, U.S. expat taxation, and cross-border advisory services.',
      href: '#',
    },
  ],
};

// Reusable inner component for link columns
const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-3xl font-normal text-h1">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className="text-lg font-medium text-gray-700 hover:text-primary-700"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    // We use bg-white here, as the newsletter form sits on top
    <footer className="relative bg-white pt-20 sm:pt-32">
      {/* Background large text */}
      <div
        className="absolute bottom-0 left-0 text-[20vw] font-normal text-gray-500 opacity-5"
        aria-hidden="true"
      >
        Fourgenix
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Part: Newsletter Form */}
        <NewsletterForm />

        {/* Middle Part: Links and Logo */}
        <div className="relative z-10 mt-16 grid grid-cols-1 gap-16 border-t border-gray-300 pt-16 lg:grid-cols-4">
          {/* Column 1: Logo/Brand */}
          <div>
            <Image
              src="/logo.png" // The brand image from your code
              alt="Fourgenix Brand"
              width={314}
              height={236}
              className="rounded-2xl"
            />
          </div>

          {/* Column 2: Quick Links */}
          <FooterLinkColumn title="Quick links" links={footerLinks.quick} />

          {/* Column 3: Visit Us */}
          <FooterLinkColumn title="Visit Us At" links={footerLinks.visit} />

          {/* Column 4: Contact Us */}
          <FooterLinkColumn title="Contact us" links={footerLinks.contact} />
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-300 py-8 md:flex-row">
          <p className="text-gray-600">@ Fourgenix Partners LLC</p>
          <p className="text-gray-600">
            Privacy Policy and Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};