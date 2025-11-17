"use client";

import { motion } from "framer-motion";

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

export default function ContactHero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}   // 🔥 ensures animation triggers
      variants={parentStagger}
      className="relative bg-[url('/pages-hero.png')] bg-cover bg-center py-16 sm:py-16 lg:py-16 mt-12 sm:mt-12 lg:mt-16 rounded-b-3xl overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 text-left">
        
        {/* Fade small text */}
        <motion.p
          variants={fadeUp}
          className="text-base font-medium text-gray-700 mb-2"
        >
          Fourgenix
        </motion.p>

        {/* Fade + slight lift for title */}
        <motion.h2 variants={fadeUp}>
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            Contact Us
          </span>
        </motion.h2>

      </div>
    </motion.section>
  );
}
