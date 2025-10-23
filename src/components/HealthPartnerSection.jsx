import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const stats = [
  { id: 1, name: "User Satisfied", value: "17.8M" },
  { id: 2, name: "User Satisfied", value: "17.8M" },
  { id: 3, name: "User Satisfied", value: "17.8M" },
];

export const HealthPartnerSection = () => {
  return (
    <section className=" bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        {/* Top Grey Box */}
        <div className="rounded-3xl bg-gray-100 p-8 sm:p-16">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5">
            {/* Column 1: Text */}
            <div className="flex flex-col lg:col-span-2">
              <h2 className="text-5xl  heading-font  text-gray-900 leading-tight">
                Your Health Partner, Always By Your Side
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Fourgenix Partners is a U.S.-based tax and advisory firm
                headquartered in Florida, founded by a team of four passionate
                and highly experienced professionals. With over 15 years of
                expertise in U.S. taxation, expat tax matters, and international
                compliance, we bring world-class financial insight with a
                personal touch.
              </p>
              <div className="mt-10">
                <Button variant="dark" size="hero">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Column 2: Images */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image
                  src="/health1.png"
                  alt="Team collaborating at a table"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square">
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
        <div className=" grid grid-cols-1 gap-8 px-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-between rounded-2xl bg-white p-8 shadow-lg"
            >
              <div>
                <h3 className="text-4xl font-medium text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-1 text-base text-gray-600">{stat.name}</p>
              </div>
              <div className="rounded-full bg-gray-100 p-3">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
