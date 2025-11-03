"use client";

export default function AboutHero() {
  return (

    <section
      className="relative bg-[url('/pages-hero.png')] bg-cover bg-center py-16 sm:py-16 lg:py-16 mt-12 sm:mt-12 lg:mt-30  rounded-b-3xl overflow-hidden"
    >
      {/* Content Container: Sets max-width, padding, and positioning */}
      <div className="relative max-w-7xl  mx-auto px-6 text-left">
        
        {/* Small text "Fourgenix" */}
        <p className="text-base font-medium text-gray-700 mb-2">
          Fourgenix
        </p>
        
        {/* Main Heading "About" with the underline */}
        <h1 className="text-5xl sm:text-6xl font-worksans text-gray-900">
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            About
          </span>
        </h1>
      </div>

    </section>
  );
}