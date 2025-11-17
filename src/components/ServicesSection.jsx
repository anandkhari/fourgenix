"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, BarChart3, TrendingUp, Building } from "lucide-react";

// --- 1. Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const hoverLift = {
  whileHover: {
    y: -5,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// --- 2. Updated Data ---
const servicesData = [
  {
    icon: Landmark,
    title: "International Business & Ownership Reporting",
    description:
      "We prepare annual FBAR filings if your total foreign account balance exceeds $10,000 at any time during the year.",
    imageSrc: "/service-4.png",
  },
  {
    icon: BarChart3,
    title: "FBAR",
    description: "We help U.S. citizens and green card holders stay compliant by:",
    imageSrc: "/service-1.png",
  },
  {
    icon: TrendingUp,
    title: "Expat Tax Filing",
    description:
      "If you own or control a business outside the U.S., you may need to file special forms.",
    imageSrc: "/service-2.png",
  },
  {
    icon: Building,
    title: "U. S. Individual Tax Returns",
    description:
      "We prepare and file complete U.S. individual tax returns, covering:",
    imageSrc: "/service-3.png",
  },
];

// --- 3. Service Card Component with Framer Motion ---
const ServiceCard = ({ imageSrc, icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={fadeUp}
      {...hoverLift}
      className="
        max-w-sm flex flex-col rounded-2xl shadow-xl bg-white 
        overflow-hidden transition-all duration-300
      "
    >
      {/* Image */}
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />

      {/* Content Wrapper */}
      <div className="px-5 pb-12 relative">
        {/* Floating Icon */}
        <div
          className="
            absolute top-0 left-5 -translate-y-1/2 
            w-20 h-20 rounded-3xl 
            bg-[#2a2d58] border-4 border-white shadow-lg
            flex items-center justify-center
          "
        >
          <Icon className="h-12 w-12 text-white" strokeWidth={2} />
        </div>

        {/* Text Content */}
        <div className="text-start mt-16">
          <h3 className="mt-8 mb-4 text-2xl text-gray-900 font-worksans">
            {title}
          </h3>

          <p className="text-base text-gray-600 font-poppins">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. Services Section ---
export const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-24">
      <div className="mx-auto lg:mx-12 max-w-8xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <h2>Our Services</h2>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
