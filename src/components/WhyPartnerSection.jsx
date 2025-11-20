"use client"; // Essential for Framer Motion client-side functionality
import Link from "next/link";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import motion
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Kept but unused

// --- Animation Variants ---

// 1. Variants for the Main Content Block (Text & Images)
const mainContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// 2. Variants for individual text elements (staggered inside the main block)
const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 3. Variants for the Stat Cards (staggered grid)
const statCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    // Use function for staggered delay based on index
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15, // Stagger delay by 0.15s per card
    },
  }),
};

// --- Component ---

const stats = [
  // Added stats
  { id: 4, name: "Years of Experience", value: "12+" },
  { id: 5, name: "Returns Filed Per Year", value: "500+" },
  { id: 6, name: "Specialist Professionals", value: "10+" },
];

export const WhyPartnerSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        {/* Top Grey Box - Main Content Block Animation */}
        <motion.div
          variants={mainContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animates when 30% visible
          className="rounded-3xl bg-gray-100 p-6 sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Column 1: Text - Sub-staggered */}
            <div className="flex flex-col lg:col-span-2">
              <motion.h2
                variants={textItemVariants}
                className=" max-w-full lg:max-w-lg"
              >
                Why Partner with Fourgenix?
              </motion.h2>
              <motion.p
                variants={textItemVariants}
                className="mt-4 sm:mt-6 body"
              >
                We specialize in U.S. individual and expat taxation, providing
                custom-made strategies to minimize your liability while ensuring
                100% compliance. We don't just file your returns; we build a
                custom-made strategy just for you.
              </motion.p>
           
              <motion.div variants={textItemVariants} className="mt-6 sm:mt-10">
                <Link href="#services" scroll={true}>
                  <Button
                    variant="dark"
                    size="hero"
                    className="
        transition-transform 
        duration-300 
        ease-out 
        hover:scale-105 
        hover:shadow-lg
      "
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Column 2: Images - Inherits animation from the parent motion.div */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/health1.png"
                  alt="Team collaborating at a table"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square w-full hidden sm:block">
                <Image
                  src="/health2.png"
                  alt="Professionals looking at a tablet"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Stat Cards - Independent Animation */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-8 sm:mt-12 md:grid-cols-3 px-4 sm:px-6 lg:px-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={statCardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // Pass index as custom prop for stagger
              viewport={{ once: true, amount: 0.8 }} // Animates when 80% visible (quick reveal)
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-lg"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-worksans font-medium text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-poppins text-gray-600">
                  {stat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
