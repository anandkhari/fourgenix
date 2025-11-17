"use client";

import React from "react";
import { motion } from "framer-motion";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const parentStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactDetails() {
  return (
    <motion.div
      variants={parentStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Top Card */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl bg-[#E9E8FD] p-8 md:p-10"
      >
        <h3 className="text-4xl font-worksans text-gray-900">Let's Talk</h3>
        <h2 className="mt-2 font-worksans text-gray-900">We're Here to Help</h2>
        <p className="mt-4 text-base font-poppins text-gray-700">
          We'd love to hear from you. Whether you need expert tax advice, want
          to discuss your expat situation, or simply have a question, the
          Fourgenix team is ready to assist.
        </p>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div
        variants={parentStagger}
        className="mt-12 ml-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
      >
        {/* Address */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Address
          </h3>
          <p className="mt-2 text-base font-poppins text-gray-700">
            Fourgenix Partners LLC <br />
            7901 4th St N, Ste 300 <br />
            St. Petersburg, FL 33702 <br />
            United States
          </p>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Email
          </h3>
          <a
            href="mailto:info@fourgenixpartners.com"
            className="mt-2 block text-base font-poppins text-gray-700 hover:text-gray-900 hover:underline"
          >
            Fourgenixp@gmail.com
          </a>
        </motion.div>

        {/* Global */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Global
          </h3>
          <p className="mt-2 text-base font-poppins text-gray-700">
            Serving clients across the U.S, Canada, UK, Germany, and UAE.
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Phone
          </h3>

          {/* Primary Contact */}
          <a
            href="tel:+918089916416"
            className="mt-2 block text-base font-poppins text-gray-700 hover:text-gray-900 hover:underline"
          >
            +91 80899 16416
          </a>

          {/* Secondary Contact */}
          <a
            href="tel:+919496197367"
            className="mt-1 block text-base font-poppins text-gray-700 hover:text-gray-900 hover:underline"
          >
           +91 94961 97367
          </a>

          <p className="mt-1 text-base font-poppins text-gray-500">
            (Mon–Fri, 9 AM to 6 PM EST)
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
