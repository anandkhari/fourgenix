"use client";

import Image from "next/image";


export default function ServiceIntroSection({ imageSrc, title, description }) {
  return (
    <section className="w-full  bg-gray-50">
      {/* Full-width image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
        <Image
          src={imageSrc}
          alt={`${title} banner`}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Text section */}
      {description && (
        <div className="max-w-7xl mx-auto py-16 px-6 space-y-8 text-gray-700">
          <h2 className="text-4xl font-worksans" >{title}</h2>
          <p className="body max-w-4xl">{description}</p>
        </div>
      )}
    </section>
  );
}

