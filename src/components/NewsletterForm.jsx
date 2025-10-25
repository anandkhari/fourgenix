"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function NewsletterForm() {
  return (
    <div className="relative z-10 max-w-lg">
      {/* Heading */}
      <h2 className="px-2">
        Thinking in your mailbox
      </h2>

      {/* Form */}
      <form className="mt-8">
        {/* Input + Button */}
        <div className="flex items-center justify-between rounded-full bg-indigo-100 p-2">
          <Input
            type="email"
            placeholder="Email address"
            className="h-12 flex-1 rounded-full border-0 bg-transparent px-4 text-lg placeholder:text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            variant="ghost"
            className="h-12 w-12 shrink-0 rounded-full bg-white shadow-sm hover:bg-gray-50"
          >
          
          </Button>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center space-x-2">
          <Checkbox id="terms" className="border-gray-900" />
          <label htmlFor="terms" className="text-base font-medium text-gray-900">
            I agree to the privacy statement
          </label>
        </div>
      </form>
    </div>
  );
}
