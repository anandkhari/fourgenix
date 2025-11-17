"use client";

import { motion } from "framer-motion";
import { EyeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

// --- Improved Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
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

// A reusable card component for Mission and Vision
const InfoCard = ({ icon: Icon, title, text }) => {
  return (
    <motion.div
      variants={fadeUp}
      {...hoverLift}
      className="rounded-2xl bg-indigo-50 p-6 sm:p-8 md:p-12 h-full transition-all"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column: Icon + Title */}
        <div className="md:col-span-1 flex flex-col gap-4 md:pr-6 md:border-r md:border-gray-300">
          <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-brand text-white">
            <Icon className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-worksans font-light text-gray-900 leading-tight">
            {title}
          </h3>
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-2 flex flex-col gap-4 body text-base sm:text-lg md:text-base lg:text-lg text-gray-700 md:pl-6">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

// The main section component
const MissionVision = () => {

  const missionText = [
    "At Fourgenix, we provide trusted, client-focused tech and business solutions that simplify processes and create tangible value for companies and individuals. Our ethical, data-driven approach helps clients reduce risks and maximize opportunities globally."
  ];

  const visionText = [
    "Fourgenix strives to be a global leader in innovative business and technology solutions, empowering organizations and individuals worldwide with simple, ethical, and future-ready strategies."
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  // 👈 start ONLY when scrolled into view
          className="text-left max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-worksans font-light text-gray-900 leading-snug">
            Our Vision and Mission
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  // 👈 same here
          className="mt-12 sm:mt-16 grid grid-cols-1 gap-8"
        >
          <InfoCard icon={EyeIcon} title="Our Mission" text={missionText} />
          <InfoCard icon={RocketLaunchIcon} title="Our Vision" text={visionText} />
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;
