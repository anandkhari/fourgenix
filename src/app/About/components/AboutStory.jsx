import React from "react";
import { MessageSquare, Users, FileText, DollarSign } from "lucide-react";

// Data for the feature cards
const features = [
  {
    icon: MessageSquare,
    title: "Clear communication and client-first support",
  },
  {
    icon: Users,
    title: "Personalized profile consultations",
  },
  {
    icon: FileText,
    title: "Tailored link planning and filing",
  },
  {
    icon: DollarSign,
    title: "Affordable, value-based pricing",
  },
];

const AboutStory = () => {
  return (
    // Using brand-light for the section background
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Top Card --- */}
        <div className="overflow-hidden rounded-3xl bg-white ">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2">
              {/* Using a placeholder image */}
              <img
                src="https://images.pexels.com/photos/6963038/pexels-photo-6963038.jpeg"
                alt="Our team collaborating"
                className="h-64 w-full rounded-2xl object-cover lg:h-full"
              />
            </div>

            {/* Text Section */}
         <div className="flex flex-col justify-center p-2 lg:w-1/2 lg:p-16">
  <h2 className="mb-4 ">Who We Are?</h2>
  <p className="mb-4 text-brand-gray body">
    Fourgenix Partners is a U.S.-based tax and advisory firm founded by a
    team of four experienced professionals. With over 15 years of expertise
    in U.S. taxation, expat tax matters, and international compliance, we
    bring world-class financial insight with a personal touch.
  </p>
  <p className="text-brand-gray body">
    We specialize in U.S. individual and expat tax filing, as well as
    cross-border advisory services. Our custom-made strategies are designed
    to minimize your tax liability while ensuring 100% compliance with all
    legal standards.
  </p>
</div>

          </div>
        </div>

     {/* --- Bottom 2x2 Grid --- */}
<div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
      >
        {/* Icon Section */}
        <div className="flex-shrink-0">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-light">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-orange" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-worksans font-medium text-gray-900">
            {feature.title}
          </h3>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default AboutStory;
