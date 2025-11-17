"use client"; // Added: Essential for Framer Motion client-side functionality

import React from 'react'; // Added: Good practice to explicitly import React
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'; // Added: Import motion

// Define animation variants for image (Column 1)
const imageVariants = {
  hidden: { opacity: 0, x: -50 }, // Start left and invisible
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Slide in from left
};

// Define animation variants for the text container (Column 2)
const textContainerVariants = {
  hidden: { opacity: 0, x: 50 }, // Start right and invisible
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.2, // Stagger text elements slightly
      staggerChildren: 0.1,
    },
  },
};

// Define animation variants for individual text items (Title, Paragraph, Button)
const textItemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Slide up and fade in
};


export const AboutIntroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Column 1: Image - Wrapped with motion.div for slide-in animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center lg:justify-start"
        >
          <Image
            src="/aboutintro.png"
            alt="Fourgenix team member"
            width={700}
            height={500}
            // Removed Image-specific motion to use the wrapper's motion.div
            className="object-cover shadow-lg" 
          />
        </motion.div>

        {/* Column 2: Text Content - Wrapped with motion.div for slide-in and stagger control */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col px-6 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-0"
        >
          <motion.h2
            variants={textItemVariants} // Applies individual item animation
            className=" max-w-full lg:max-w-lg"
          >
            Fourgenix: Beyond returns, with you in finance.
          </motion.h2>

          <motion.p
            variants={textItemVariants} // Applies individual item animation
            className="mt-6 sm:mt-8 max-w-full sm:max-w-xl body"
          >
            Fourgenix Partners is a U.S.-based tax and advisory firm
            headquartered in Florida, founded by a team of four passionate and
            highly experienced professionals. With over 15 years of expertise in
            U.S. taxation, expat tax matters, and international compliance, we
            bring world-class financial insight with a personal touch.
          </motion.p>

          <motion.div
            variants={textItemVariants} // Applies individual item animation
            className="mt-6 sm:mt-10"
          >
            <Button variant="dark" size="hero">
              <span>Read More</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};