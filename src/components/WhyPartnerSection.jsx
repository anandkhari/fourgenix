import Image from "next/image";
import { Button } from './ui/button';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const stats = [
  { id: 1, name: "User Satisfied", value: "17.8M" },
  { id: 2, name: "User Satisfied", value: "17.8M" },
  { id: 3, name: "User Satisfied", value: "17.8M" },
];

export const WhyPartnerSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        {/* Top Grey Box */}
        <div className="rounded-3xl bg-gray-100 p-6 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-16">
            
            {/* Column 1: Text */}
            <div className="flex flex-col lg:col-span-2">
              <h2 className=" max-w-full lg:max-w-lg">
                Why Partner with Fourgenix?
              </h2>
              <p className="mt-4 sm:mt-6 body">
                We specialize in U.S. individual and expat taxation, providing custom-made strategies
                to minimize your liability while ensuring 100% compliance. We don't just file your returns; we build a custom-made strategy just for you.
              </p>
              <div className="mt-6 sm:mt-10">
                <Button variant="dark" size="hero">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Column 2: Images */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/health1.png"
                  alt="Team collaborating at a table"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square w-full hidden sm:block">
                <Image
                  src="/health2.png"
                  alt="Professionals looking at a tablet"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stat Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-8 sm:mt-12 md:grid-cols-3 px-4 sm:px-6 lg:px-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-lg"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-medium text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{stat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
