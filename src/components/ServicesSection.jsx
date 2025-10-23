import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

// Data for the services based on the PDF
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

// Reusable inner component for the service card
const ServiceCard = ({ title, description }) => (
  <div className="group rounded-4xl bg-white pt-6 pb-16 px-6 shadow-ss border border-primary-100 transition-all hover:shadow-lg hover:bg-[#e7e6ff]">
    {/* Title Row: Heading + Arrow */}
    <div className="flex items-center justify-between">
      <h3 className="text-3xl heading-font font-normal text-h1">{title}</h3>

      {/* Arrow container */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
        <ArrowUpRightIcon className="h-16 w-16 text-primary-700 transition-transform duration-300" />
      </div>
    </div>

    {/* Description */}
    <p className="mt-4 text-lg leading-7 text-gray-700">{description}</p>
  </div>
);


// Main Section Component
export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        
        {/* Section Title */}
        <div className="text-start">
          <h2 className="text-4xl font-normal heading-font text-h1 sm:text-6xl">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};