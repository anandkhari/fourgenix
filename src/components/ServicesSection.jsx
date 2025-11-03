import React from 'react';
// Removed ArrowUpRightIcon, added professional icons from lucide-react
import { Landmark, BarChart3, TrendingUp, Building } from 'lucide-react';

// Added an 'icon' component to the data array to match the new design
const servicesData = [
  {
    icon: Landmark,
    title: 'International Business & Ownership Reporting',
    description:
      'We prepare annual FBAR filings if your total foreign account balance exceeds $10,000 at any time during the year.',
  },
  {
    icon: BarChart3, // Changed icon for FBAR
    title: 'FBAR',
    description:
      'We help U.S. citizens and green card holders stay compliant by:',
  },
  {
    icon: TrendingUp, // Changed icon for Expat
    title: 'Expat Tax Filing',
    description:
      'If you own or control a business outside the U.S., you may need to file special forms.',
  },
  {
    icon: Building,
    title: 'U.S. Individual Tax Returns',
    description:
      'We prepare and file complete U.S. individual tax returns, covering:',
  },
];

/**
 * ServiceCard Component - Redesigned to match the new UI.
 * This is now a simple, vertical card.
 */
const ServiceCard = ({
  icon: Icon, // Destructure the icon component
  title,
  description,
  className = '',
  alwaysActive = false,
}) => {
  return (
    <div
      className={`group relative py-8 px-4 rounded-2xl shadow-sm border border-gray-100 bg-white transition-all duration-300 ${
        alwaysActive
          ? 'bg-[#e7e6ff]' // Active state from your old code, matches new UI
          : 'hover:shadow-lg hover:bg-[#e7e6ff]' // Hover state
      } ${className}`}
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon className="h-12 w-12 text-indigo-800" strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-2xl  font-worksans text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-medium text-gray-600 font-poppins">{description}</p>
    </div>
  );
};

/**
 * ServicesSection - Updated to use the new simple grid.
 */
export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 >
            Our Services
          </h2>
        </div>

        {/* New Grid: 
          - 1 column on mobile
          - 2 columns on tablet (md)
          - 4 columns on desktop (lg)
          This matches the layout from the image.
        */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={servicesData[0].icon}
            title={servicesData[0].title}
            description={servicesData[0].description}
            alwaysActive // First card is active, just like in the image
          />
          <ServiceCard
            icon={servicesData[1].icon}
            title={servicesData[1].title}
            description={servicesData[1].description}
          />
          <ServiceCard
            icon={servicesData[2].icon}
            title={servicesData[2].title}
            description={servicesData[2].description}
          IA-N-A-N-D-H-A-R-I-2024
          />
          <ServiceCard
            icon={servicesData[3].icon}
            title={servicesData[3].title}
            description={servicesData[3].description}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

