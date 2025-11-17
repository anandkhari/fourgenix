"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { 
  Globe, Clock, Building, Laptop, Briefcase, Map, 
  Banknote, Plane, Key, Home, DollarSign, Shield, 
  GraduationCap, Tent 
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: "easeOut" } },
};

/* ---------------- Card Component ---------------- */

const LayeredAudienceCard = ({ icon: Icon, title, description, image: imageSrc }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}  // 👉 PER-CARD VIEWPORT FIX
      {...hoverLift}
      className="
        max-w-sm flex flex-col rounded-2xl shadow-xl bg-white 
        overflow-hidden transition-all duration-300 transform-gpu 
        hover:shadow-2xl
      "
    >
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="px-5 pb-12 relative">
        <div className="
          absolute top-0 left-5 -translate-y-1/2 
          w-20 h-20 rounded-3xl bg-[#2a2d58] 
          shadow-lg border-4 border-white 
          flex items-center justify-center
        ">
          <Icon className="h-12 w-12 text-white" strokeWidth={2} />
        </div>

        <div className="text-start mt-16">
          <h3 className="mt-8 mb-3 text-2xl text-gray-900 font-worksans">
            {title}
          </h3>
          <p className="text-base text-gray-600 font-poppins">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- Hero Section ---------------- */

function AudienceHero() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="
        relative bg-[url('/pages-hero.png')] 
        bg-cover bg-center bg-no-repeat 
        rounded-b-3xl overflow-hidden
        py-12 sm:py-16 lg:py-16 mt-14 sm:mt-14 lg:mt-18
        min-h-[300px]
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-left">
        <motion.p variants={fadeUp} className="text-sm font-medium text-gray-700 mb-2">
          Fourgenix
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-worksans text-gray-900 leading-tight"
        >
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            Profiles
          </span>
        </motion.h1>
      </div>
    </motion.section>
  );
}

/* ---------------- Main Page ---------------- */

export default function WhoWeHelpPage() {
  const audienceData = [
    { icon: Globe, title: "American Expatriates Overseas", description: "Comprehensive tax services for U.S. citizens and green card holders residing in foreign countries.", imageSrc: "/audiences/us-citizens-abroad.jpg" },
    { icon: Clock, title: "Individuals with Overdue Tax Filings", description: "Specialized assistance for clients needing to catch up on past-due U.S. tax returns and compliance obligations.", imageSrc: "/audiences/late-tax-filers.jpg" },
    { icon: Building, title: "Entrepreneurs with International Companies", description: "Guidance and compliance for U.S. individuals who own or control foreign business entities.", imageSrc: "/audiences/foreign-business-owners.jpg" },
    { icon: Laptop, title: "Location-Independent Professionals", description: "Solutions for global remote workers navigating residency and tax treaties.", imageSrc: "/audiences/digital-nomads.jpg" },
    { icon: Briefcase, title: "Freelance or Independent Contractors Living Abroad", description: "Filing help for self-employed individuals abroad.", imageSrc: "/audiences/self-employed-expats.jpg" },
    { icon: Map, title: "Global US Citizen Community", description: "Tax preparation for U.S. citizens living worldwide.", imageSrc: "/audiences/us-expats-world.jpg" },
    { icon: Banknote, title: "Clients with Non-US Financial Accounts", description: "FBAR & FATCA compliance for foreign bank accounts.", imageSrc: "/audiences/foreign-bank-holders.jpg" },
    { icon: Plane, title: "Americans Planning an International Move", description: "Pre-move tax planning before relocating abroad.", imageSrc: "/audiences/moving-abroad.jpg" },
    { icon: Key, title: "Citizens with Multiple Nationalities", description: "Support for dual or multi-national citizenship filings.", imageSrc: "/audiences/dual-citizens.jpg" },
    { icon: Home, title: "US Retirees Living Abroad", description: "Tax planning for pensions, Social Security & investments.", imageSrc: "/audiences/retirees-abroad.jpg" },
    { icon: DollarSign, title: "Real Estate Investors with Non-US Property", description: "Reporting rental income, deductions, and ownership.", imageSrc: "/audiences/foreign-property-owners.jpg" },
    { icon: Shield, title: "Undocumented US Citizens", description: "Support for ‘accidental Americans’ entering compliance.", imageSrc: "/audiences/accidental-americans.jpg" },
    { icon: GraduationCap, title: "US Educators Overseas", description: "Foreign Earned Income Exclusion guidance for teachers.", imageSrc: "/audiences/teachers-abroad.jpg" },
    { icon: Tent, title: "Repatriating Expats", description: "Support for Americans moving back and closing foreign accounts.", imageSrc: "/audiences/moving-back.jpg" },
  ];

  return (
    <main className="bg-white">
      <AudienceHero />

      <section className="py-16 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left max-w-5xl mb-12"
          >
            <p className="mt-4 font-worksans text-xl text-gray-700">
              We provide specialized, high-touch advisory services for a diverse range of clients.
              Select your profile to learn how we can help you build a smarter financial future.
            </p>
          </motion.div>

          {/* Grid — content loads immediately, animation is per-card */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
            {audienceData.map((audience) => (
              <LayeredAudienceCard
                key={audience.title}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                image={audience.imageSrc}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
