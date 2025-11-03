"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedTaxSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-worksans text-gray-900 leading-tight">
            Trusted Tax Services
            <br />
            <span className="text-gray-800 font-worksans">For U.S. Citizens Worldwide</span>
          </h1>

          <p className="text-base sm:text-lg body text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Fourgenix</span>, we
            provide comprehensive U.S. tax services — including individual tax
            returns (Form 1040), expat tax filing, international business and
            ownership reporting, and FBAR compliance. We specialize in helping
            U.S. citizens and green card holders worldwide stay compliant
            through expert guidance, Big-4 experience, and complete peace of
            mind.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/services.png" // Replace with your actual image path
            alt="Fourgenix abstract gradient"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </div>

     
    </section>
  );
}
