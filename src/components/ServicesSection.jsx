import React from 'react';
// Icons from lucide-react (as you had)
import { Landmark, BarChart3, TrendingUp, Building } from 'lucide-react';

// --- 1. Updated Data ---
// Added 'imageSrc' to each service. 
// You will need to replace these paths with your own images.
const servicesData = [
  {
    icon: Landmark,
    title: 'International Business & Ownership Reporting',
    description:
      'We prepare annual FBAR filings if your total foreign account balance exceeds $10,000 at any time during the year.',
    imageSrc: '/service-4.png', // <-- Added image path
  },
  {
    icon: BarChart3,
    title: 'FBAR',
    description:
      'We help U.S. citizens and green card holders stay compliant by:',
    imageSrc: '/service-1.png', // <-- Added image path
  },
  {
    icon: TrendingUp,
    title: 'Expat Tax Filing',
    description:
      'If you own or control a business outside the U.S., you may need to file special forms.',
    imageSrc: '/service-2.png', // <-- Added image path
  },
  {
    icon: Building, // This icon matches the screenshot
    title: 'U. S. Individual Tax Returns',
    description:
      'We prepare and file complete U.S. individual tax returns, covering:',
    imageSrc: '/service-3.png', // <-- Added image path (this one is from the screenshot)
  },
];

// --- 2. Rewritten ServiceCard Component ---
// This component is now rebuilt to match the new layered design.
const ServiceCard = ({
  imageSrc, // New prop for the top image
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    // 1. The Root Card:
    // - overflow-hidden is CRITICAL to clip the image corners
    // - shadow-xl matches the softer, larger shadow
    <div
      className={`max-w-sm flex flex-col rounded-2xl shadow-xl bg-white overflow-hidden transition-all duration-300 ${className}`}
    >
      
      {/* 2. The Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
      />

      {/* 3. The Content Wrapper (for padding) */}
      <div className="px-5 pb-12 relative">
        
        {/* 4. The Icon Wrapper (The Blue Box) */}
        {/* -mx-auto centers it
            -mt-16 (negative 4rem) pulls it UP over the image
        */}

       

        <div className="
          absolute top-0 left-5 
          -translate-y-1/2 
          w-20 h-20 
          mx-auto 
          rounded-3xl 
         bg-[#2a2d58]
          shadow-lg border-4 border-white
          flex items-center justify-center
        ">
          {/* 5. The actual Icon Component (white, smaller) */}
          <Icon className="h-12 w-12 text-white" strokeWidth={2} />
        </div>

        {/* 6. The Text Group: Centered */}
        <div className="text-start mt-16">
          
          {/* Heading: mt-8 creates space below the icon */}
          <h3 className="
            mt-8 
            mb-4 
            text-2xl  
            text-gray-900 
            font-worksans
          ">
            {title}
          </h3>
          
          {/* Description: Sized up to text-lg */}
          <p className="text-base text-gray-600 font-poppins">
            {description}
          </p>
        </div>
        
      </div>
    </div>
  );
};

// --- 3. Updated ServicesSection Component ---
// Now uses .map() for cleaner code.
export const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-24">
      <div className="mx-auto lg:mx-12 max-w-8xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 >
            Our Services
          </h2>
        </div>

        {/* Grid: 
            - Now maps over the data array.
            - justify-center ensures cards are centered if the row isn't full
        */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
          
          {/* Use .map() for clean, scalable code */}
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc} // Pass the new prop
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;