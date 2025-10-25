import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from "@/components/NewsletterForm";

// Footer link data
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

// Reusable Footer Column
const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-2xl sm:text-3xl font-[var(--font-work-sans)]">{title}</h3>
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.href} className="body hover:text-primary-700">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative bg-white pt-12 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Newsletter Form */}
        <NewsletterForm />

        {/* Links + Logo Section */}
        <div className="relative z-10 mt-6 sm:mt-16 grid grid-cols-1 gap-12 sm:gap-16 border-t border-gray-300 pt-12 sm:pt-16 lg:grid-cols-4">
          {/* Logo */}
          <div className="flex justify-start lg:justify-start">
            <Image
              src="/logo.png"
              alt="Fourgenix Brand"
              width={314}
              height={236}
              className="rounded-2xl object-contain w-48 sm:w-56 md:w-64 lg:w-full"
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
        <div className="relative z-10 mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 border-t border-gray-300 py-6 sm:py-8">
          <p className="text-gray-600 font-[var(--font-work-sans)] text-center sm:text-left">
            @ Fourgenix Partners LLC
          </p>
          <p className="text-gray-600 font-[var(--font-work-sans)] text-center sm:text-right">
            Privacy Policy and Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};
