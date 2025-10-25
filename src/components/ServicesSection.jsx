import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const servicesData = [
  {
    title: 'International Business & Ownership Reporting',
    description:
      'We prepare annual FBAR filings if your total foreign account balance exceeds $10,000 at any time during the year.',
  },
  {
    title: 'FBAR',
    description:
      'We help U.S. citizens and green card holders stay compliant by:',
  },
  {
    title: 'Expat Tax Filing',
    description:
      'If you own or control a business outside the U.S., you may need to file special forms.',
  },
  {
    title: 'U.S. Individual Tax Returns',
    description:
      'We prepare and file complete U.S. individual tax returns, covering:',
  },
];

const ServiceCard = ({
  title,
  description,
  className = '',
  desktopArrowColor = 'text-primary-700',
  alwaysActive = false,
}) => {
  return (
    <div
      className={`p-6 sm:p-8 md:p-10 pb-16 rounded-4xl shadow-sm border border-primary-100 transition-all duration-500 ${
        alwaysActive
          ? 'shadow-lg bg-[#e7e6ff]'
          : 'hover:shadow-lg hover:bg-[#e7e6ff]'
      } ${className}`}
    >
      {/* --- Mobile Layout --- */}
      <div className="flex flex-col md:hidden space-y-3">
        <div className="flex justify-end">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 transition-all duration-300 ${
              alwaysActive ? 'rotate-45' : 'group-hover:rotate-45'
            }`}
          >
            <ArrowUpRightIcon
              className={`h-6 w-6 ${desktopArrowColor} transform ${
                alwaysActive ? 'rotate-45' : 'group-hover:rotate-45'
              } transition-transform duration-500`}
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-[var(--font-work-sans)] font-normal text-h1">
            {title}
          </h3>
          <p className="mt-2 text-base body text-gray-700">{description}</p>
        </div>
      </div>

      {/* --- Desktop Layout --- */}
      <div className="hidden md:flex justify-between items-start group">
        <div className="flex-1 pb-12">
          <h3 className="text-2xl font-[var(--font-work-sans)] font-normal text-h1">
            {title}
          </h3>
          <p className="mt-3 text-base body text-gray-700">{description}</p>
        </div>

        <div className="flex-shrink-0 ml-4 w-14 h-14 bg-white rounded-lg flex items-center justify-center">
          <ArrowUpRightIcon
            className={`h-8 w-8 ${desktopArrowColor} transform transition-transform duration-500 ${
              alwaysActive ? 'rotate-45' : 'group-hover:rotate-45'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-8xl px-6 sm:px-6 lg:px-16">
        <div className="text-start">
          <h2 className="max-w-xl px-4">Our Services</h2>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-5">
          <ServiceCard
            title={servicesData[0].title}
            description={servicesData[0].description}
            className="md:col-span-3"
            alwaysActive 
          />
          <ServiceCard
            title={servicesData[1].title}
            description={servicesData[1].description}
            className="md:col-span-2"
           // 👈 This one stays in hover state
          />
          <ServiceCard
            title={servicesData[2].title}
            description={servicesData[2].description}
            className="md:col-span-2"
          />
          <ServiceCard
            title={servicesData[3].title}
            description={servicesData[3].description}
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
