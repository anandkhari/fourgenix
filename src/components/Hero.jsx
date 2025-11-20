"use client"; // Essential for Framer Motion client-side functionality
import Link from "next/link";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import motion from framer-motion

// Define animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each child will animate with a 0.1s delay
      delayChildren: 0.3, // Start animation after a small initial delay
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const HeroSection = () => {
  return (
    <section
      className="relative max-h-screen md:min-h-screen w-full mt-15 md:mt-0 bg-[length:200%_auto] mb-20 md:mb-0 sm:bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(hero.jpg)" }}
    >
      {/* 🔆 Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/5 backdrop-blur-[1px]"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mr-10 ">
        <div className="relative z-50 pt-70 sm:pt-56 md:pt-64">
          {/* Glass box with asymmetric rounded corners */}
          {/* Apply motion to the container to control stagger and overall visibility */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              max-w-3xl 
              bg-white/60 
              backdrop-blur-md 
              border border-white/30 
              
              /* Mobile defaults */
              px-6 py-4 rounded-xl 

              /* Larger screens (desktop) */
              md:px-16 md:py-12 
              md:rounded-r-[6rem] md:rounded-l-none
            "
          >
            {/* Title - Each part can be an animated item */}
            <motion.h1
              variants={itemVariants} // Apply item variant for fade-up effect
              className="mt-4 text-3xl sm:text-4xl md:text-6xl tracking-wide text-[#1a1a1a] leading-tight"
            >
              Fourgenix Partners is a U.S.-based tax and advisory.
            </motion.h1>

            {/* Button - Also an animated item */}
            <motion.div
              variants={itemVariants}
              className="mt-6 -mb-10 md:mt-10"
            >
              <Link href="/contact">
                <Button
                  variant="dark"
                  className="
  transition-transform 
  duration-300 
  ease-out 
  hover:scale-105 
  hover:-translate-y-1
"
                >
                  Read More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
