"use client";

import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { motion } from "framer-motion";

const footerLinks = {
  quick: [
    { title: "Profiles", href: "/audience" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],

  visit: [
    { title: "Fourgenix Partners LLC" },
    { title: "7901 4th St N, Ste 300" },
    { title: "St. Petersburg, FL 33702" },
    { title: "United States" },
  ],

  contact: [
    { title: "+91 8089916416", href: "tel:+918089916416" },
    { title: "+91 9496197367", href: "tel:+919496197367" },
    { title: "fourgenixp@gmail.com", href: "mailto:fourgenixp@gmail.com" },
  ],
};


// Framer motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const FooterLinkColumn = ({ title, links }) => (
  <motion.div
    variants={fadeUp}
    className="flex flex-col gap-3 sm:gap-4 text-left pl-5 sm:text-left"
  >
    <h3 className="text-lg sm:text-xl font-semibold font-worksans text-white">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          {link.href ? (
            <motion.div whileHover={{ y: -2, transition: { duration: 0.2 } }}>
              <Link
                href={link.href}
                className="text-base sm:text-lg text-gray-300 font-poppins hover:text-white transition-colors duration-200"
              >
                {link.title}
              </Link>
            </motion.div>
          ) : (
            <p className="text-base sm:text-lg font-poppins text-gray-300">
              {link.title}
            </p>
          )}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="relative bg-brand pt-10 sm:pt-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

        {/* Newsletter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <NewsletterForm size="footer" />
        </motion.div>

        {/* Links + Logo Section */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20 border-t border-white/20 pt-12"
        >
          {/* Logo */}
          <motion.div variants={fadeUp} className="flex justify-start pl-0 sm:justify-start">
            <Image
              src="/logo-dark.png"
              alt="Fourgenix Brand"
              width={180}
              height={180}
              className="rounded-2xl object-contain w-40 sm:w-48"
            />
          </motion.div>

          {/* Columns */}
          <FooterLinkColumn title="Quick links" links={footerLinks.quick} />
          <FooterLinkColumn title="Visit Us At" links={footerLinks.visit} />
          <FooterLinkColumn title="Contact us" links={footerLinks.contact} />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/20 py-6"
        >
          <p className="text-sm text-gray-300 text-center sm:text-left">
            © Fourgenix Partners LLC
          </p>

          <motion.p
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="text-sm text-gray-300 text-center sm:text-right hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Privacy Policy & Terms & Conditions
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
