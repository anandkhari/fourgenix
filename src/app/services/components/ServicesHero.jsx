"use client";

import React from "react";
import { ChevronRight } from "lucide-react";


export default function ServicesHero({ title = "Services", subtitle }) {
  return (
    <section
      className="relative bg-[url('/pages-hero.png')] bg-cover bg-center py-16 sm:py-16 lg:py-16 mt-12 sm:mt-12 lg:mt-18 rounded-b-3xl overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center ">
        {/* Left side: Label + Title */}
        <div>
          <p className="text-base font-medium text-gray-700 mb-2">Fourgenix</p>

          <h1 className="text-4xl sm:text-6xl font-worksans text-gray-900 flex items-center">
            <span className="inline-block border-b-4 border-gray-900 pb-1">
              {title}
            </span>
          </h1>
        </div>

        {/* Middle: Chevron (visual separator) + Right: Optional subtitle */}
        {subtitle && (
          <div className="mt-6 sm:mt-15 font-worksans sm:ml-8 flex items-center">
            {/* Chevron — adjust size/spacing as needed */}
            <ChevronRight
              className="hidden sm:inline-block w-8 h-8 text-gray-700 mr-4"
              aria-hidden="true"
              strokeWidth={1.5}
            />

            <p className="text-lg sm:text-2xl text-gray-800 font-medium">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
