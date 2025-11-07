import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

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

const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-3 sm:gap-4 text-left pl-5 sm:text-left">
    <h3 className="text-lg sm:text-xl font-semibold font-worksans text-white">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          {link.href ? (
            <Link
              href={link.href}
              className="text-base sm:text-lg text-gray-300 font-poppins hover:text-white transition-colors duration-200"
            >
              {link.title}
            </Link>
          ) : (
            <p className="text-base sm:text-lg font-poppins text-gray-300">
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
    <footer className="relative bg-brand pt-10 sm:pt-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Newsletter */}

          <NewsletterForm size="footer" />
      

        {/* Links + Logo Section */}
        <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20 border-t border-white/20 pt-12">
          {/* Logo */}
          <div className="flex justify-start sm:justify-start">
            <Image
              src="/logo-dark.png"
              alt="Fourgenix Brand"
              width={180}
              height={180}
              className="rounded-2xl object-contain w-40 sm:w-48"
            />
          </div>

          {/* Columns */}
          <FooterLinkColumn title="Quick links" links={footerLinks.quick} />
          <FooterLinkColumn title="Visit Us At" links={footerLinks.visit} />
          <FooterLinkColumn title="Contact us" links={footerLinks.contact} />
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/20 py-6">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            © Fourgenix Partners LLC
          </p>
          <p className="text-sm text-gray-300 text-center sm:text-right hover:text-white transition-colors duration-200">
            Privacy Policy & Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
