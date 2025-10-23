import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export const AboutIntroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Column 1: Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/aboutintro.png"
            alt="Fourgenix team member"
            width={700}  // Reduced from 826
            height={500} // Adjust proportionally
            className="object-cover"
          />
        </div>

        {/* Column 2: Text Content */}
        <div className="flex flex-col py-16 px-8 lg:py-0 lg:px-0">
          <h2 className="text-5xl max-w-xl heading-font font-normal text-gray-900 sm:text-5xl tracking-tight">
            Fourgenix: Beyond returns, with you in finance.
          </h2>

          <p className="mt-8 text-lg max-w-xl leading-relaxed text-gray-700">
            Fourgenix Partners is a U.S.-based tax and advisory firm
            headquartered in Florida, founded by a team of four passionate and
            highly experienced professionals. With over 15 years of expertise in
            U.S. taxation, expat tax matters, and international compliance, we
            bring world-class financial insight with a personal touch.
          </p>

          <div className="mt-10">
            <Button variant="dark" size="hero">
              <span>Read More</span>
            
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
