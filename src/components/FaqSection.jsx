'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// FAQ data
const faqData = [
  {
    id: 'item-1',
    question: "Let's create something remarkable together.",
    answer:
      'Fourgenix Partners is a U.S.-based tax and advisory firm headquartered in Florida, founded by a team of four passionate and highly experienced professionals. With over 15 years of expertise... we bring world-class financial insight with a personal touch.',
  },
  {
    id: 'item-2',
    question: "Let's create something remarkable together..",
    answer:
      'Fourgenix Partners is a U.S.-based tax and advisory firm headquartered in Florida, founded by a team of four passionate and highly experienced professionals. With over 15 years of expertise... we bring world-class financial insight with a personal touch.',
  },
  {
    id: 'item-3',
    question: "Let's create something remarkable together...",
    answer:
      'Fourgenix Partners is a U.S.-based tax and advisory firm headquartered in Florida, founded by a team of four passionate and highly experienced professionals. With over 15 years of expertise... we bring world-class financial insight with a personal touch.',
  },
  {
    id: 'item-4',
    question: "Let's create something remarkable together....",
    answer:
      'Fourgenix Partners is a U.S.-based tax and advisory firm headquartered in Florida, founded by a team of four passionate and highly experienced professionals. With over 15 years of expertise... we bring world-class financial insight with a personal touch.',
  },
];

export const FaqSection = () => {
  const [openItem, setOpenItem] = useState('');

  return (
    <section className="bg-white py-16 sm:py-24">
     <div className="mx-auto max-w-7xl px-2 lg:px-2">
        {/* Section Title */}
        <div className="max-w-2xl">
          <h2 className="text-3xl heading-font font-normal text-h1 sm:text-6xl">
            FAQ About The Individual Chapters.
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-16">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={openItem}
            onValueChange={(val) => setOpenItem(val)}
          >
            {faqData.map((faq) => {
              const isOpen = openItem === faq.id;
              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`mb-4 overflow-hidden rounded-3xl border transition-all duration-300 shadow-sm ${
                    isOpen
                      ? 'bg-[#E8E9FF] border-transparent'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <AccordionTrigger
                    className="flex items-center justify-between w-full px-6 py-4 text-left text-xl sm:text-2xl font-medium text-gray-900 hover:no-underline"
                  >
                    <div className="flex items-center gap-4">
                      {/* Left blue strip */}
                      <div className="h-10 w-1.5 bg-primary-700 rounded-full"></div>
                      <span>{faq.question}</span>
                    </div>

                    {/* Rotating circular arrow */}
                    <div
                      className={`flex items-center justify-center h-10 w-10 rounded-full border-2 border-primary-700 transition-all duration-300 ${
                        isOpen ? 'rotate-90 bg-white' : 'rotate-0 bg-transparent'
                      }`}
                    >
                      <ChevronRightIcon className="h-6 w-6 text-primary-700" />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-14 pb-6 text-lg text-gray-800 leading-relaxed transition-all duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
