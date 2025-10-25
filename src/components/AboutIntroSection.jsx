import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export const AboutIntroSection = () => {
  return (
    <section className="bg-white">
  <div className="mx-auto grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
    {/* Column 1: Image */}
    <div className="flex justify-center lg:justify-start">
      <Image
        src="/aboutintro.png"
        alt="Fourgenix team member"
        width={700}
        height={500}
        className="object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Column 2: Text Content */}
    <div className="flex flex-col px-6 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-0">
      <h2 className=" max-w-full lg:max-w-lg">
        Fourgenix: Beyond returns, with you in finance.
      </h2>

      <p className="mt-6 sm:mt-8 max-w-full sm:max-w-xl body">
        Fourgenix Partners is a U.S.-based tax and advisory firm
        headquartered in Florida, founded by a team of four passionate and
        highly experienced professionals. With over 15 years of expertise in
        U.S. taxation, expat tax matters, and international compliance, we
        bring world-class financial insight with a personal touch.
      </p>

      <div className="mt-6 sm:mt-10">
        <Button variant="dark" size="hero">
          <span>Read More</span>
        </Button>
      </div>
    </div>
  </div>
</section>
  );
};
