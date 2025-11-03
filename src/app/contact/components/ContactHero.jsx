"use client";

export default function ContactHero() {
  return (

    <section
       className="relative bg-[url('/pages-hero.png')] bg-cover bg-center py-16 sm:py-16 lg:py-16 mt-12 sm:mt-12 lg:mt-16  rounded-b-3xl overflow-hidden"
    
    >
      {/* Content Container: Sets max-width, padding, and positioning */}
      <div className="relative max-w-7xl  mx-auto px-6 text-left">
        
        {/* Small text "Fourgenix" */}
        <p className="text-base font-medium text-gray-700 mb-2">
          Fourgenix
        </p>
        
        {/* Main Heading "About" with the underline */}
        <h2 >
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            Contact Us
          </span>
        </h2>
      </div>

    </section>
  );
}