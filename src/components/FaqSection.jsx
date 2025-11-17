"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// --- Animation Variant for Staggered Items ---
const itemVariants = {
  // Initial state (hidden)
  hidden: { opacity: 0, y: 30 },
  // Visible state (uses 'custom' index for staggered delay)
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1, // Stagger delay based on index (0.1s per item)
    },
  }),
};

// FAQ data
const faqData = [
  {
    id: "item-1",
    question: "What types of clients do you specialize in?",
    answer:
      "We specialize in U.S. tax and advisory for expatriates, multinational businesses, foreign nationals with U.S. investments, and high-net-worth individuals. Our expertise is ideal for anyone navigating complex cross-border tax situations.",
  },
  {
    id: "item-2",
    question: "What is FBAR and do I need to file it?",
    answer:
      'FBAR stands for "Report of Foreign Bank and Financial Accounts." You must file this report if you are a U.S. citizen or green card holder and the total value of your foreign financial accounts exceeded $10,000 at any point during the year. We can manage this filing for you to ensure compliance.',
  },
  {
    id: "item-3",
    question: "Why choose Fourgenix over a larger firm?",
    answer:
      "We combine world-class expertise with a personal, partner-led approach. Unlike at larger firms, you get direct access to our senior partners. We offer proactive, forward-thinking strategies tailored to your financial goals, not just seasonal tax preparation.",
  },
  {
    id: "item-4",
    question: "How do I get started with your services?",
    answer:
      "The first step is a complimentary consultation. You can contact us through our website to schedule a time to discuss your financial situation. This allows us to understand your needs and determine the best path forward together.",
  },
];

export const FaqSection = () => {
  const [openItem, setOpenItem] = useState("item-1");

  return (
    <section className="bg-gray-100 py-20 sm:py-20">
      <div className="mx-auto max-w-8xl px-6 lg:px-20">
        {/* Section Title - Animated Fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 >
            FAQ About The Individual Chapters.
          </h2>
        </motion.div>

        {/* --- Grid layout: FAQ 2/3 | Image 1/3 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: FAQ section (2/3) - Accordion List */}
          <div className="lg:col-span-2">
            <div className="mt-12">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={openItem}
                onValueChange={(val) => setOpenItem(val)}
              >
                {faqData.map((faq, index) => {
                  const isOpen = openItem === faq.id;
                  return (
                    // Individual Accordion Item Wrapper - Animated
                    <motion.div
                      key={faq.id}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={index} // Pass index for stagger delay
                      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
                    >
                      <AccordionItem
                        value={faq.id}
                        className={`mb-4 overflow-hidden rounded-3xl border transition-all duration-300 shadow-sm ${
                          isOpen
                            ? "bg-[#E8E9FF] border-transparent"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <AccordionTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-xl sm:text-2xl font-worksans text-gray-900 hover:no-underline">
                          <div className="flex items-center gap-4">
                            {/* Left blue strip */}
                            <div className="h-10 w-1.5 bg-primary-700 rounded-full"></div>
                            <span>{faq.question}</span>
                          </div>

                          {/* Rotating circular arrow */}
                          <div
                            className={`flex items-center justify-center aspect-square w-10 rounded-full border-2 border-[#2a2d58] transition-all duration-300 ${
                              isOpen
                                ? "rotate-90 bg-white"
                                : "rotate-0 bg-transparent"
                            }`}
                          >
                            <ChevronRightIcon className="h-6 w-6 text-primary-700" />
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-10 pb-6 text-gray-700 text-base font-poppins leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </div>
          </div>

          {/* Right: Image section (1/3) - Animated Slide-in */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:col-span-1 mt-12 hidden lg:block"
          >
            <img
              src="/FAQ.png"
              alt="Professional at work"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
            {/* Optional overlay gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};