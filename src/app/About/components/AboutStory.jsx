"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, FileText, DollarSign } from "lucide-react";

// --- FIXED ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: "easeOut" } },
};

// --- DATA ---
const features = [
  { icon: MessageSquare, title: "Clear communication and client-first support" },
  { icon: Users, title: "Personalized profile consultations" },
  { icon: FileText, title: "Tailored link planning and filing" },
  { icon: DollarSign, title: "Affordable, value-based pricing" },
];

const AboutStory = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- TOP CARD --- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  // FIX: wait until visible
          variants={fadeIn}
          className="overflow-hidden rounded-3xl"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* IMAGE SECTION */}
            <motion.div
              variants={fadeUp}
              className="lg:w-1/2"
            >
              <img
                src="https://images.pexels.com/photos/6963038/pexels-photo-6963038.jpeg"
                alt="Our team collaborating"
                className="h-64 w-full rounded-2xl object-cover lg:h-full"
              />
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center p-2 lg:w-1/2 lg:p-14"
            >
              <h2 className="mb-4">Who We Are?</h2>

              <p className="mb-4 text-brand-gray body">
                Fourgenix Partners is a U.S.-based tax and advisory firm founded
                by a team of four experienced professionals. With over 15 years
                of expertise in U.S. taxation, expat tax matters, and international
                compliance, we bring world-class financial insight with a
                personal touch.
              </p>

              <p className="text-brand-gray body">
                We specialize in U.S. individual and expat tax filing, as well as
                cross-border advisory services. Our custom-made strategies are
                designed to minimize your tax liability while ensuring 100%
                compliance with all legal standards.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- BOTTOM GRID --- */}
        <motion.div
          className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  // FIX: visible only when fully viewed
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                {...hoverLift}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-light">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-orange" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-worksans font-medium text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStory;
