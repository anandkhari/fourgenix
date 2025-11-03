// This must be a client component
"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";


export default function NewsletterForm() {
  return (
    <div className="relative z-10 max-w-lg">
      
      {/* 1. CHANGED: Re-applied the correct styling to the heading */}
      <h2 className="text-3xl font-light leading-tight text-gray-900 sm:text-5xl">
        Thinking in your mailbox
      </h2>

      {/* Form */}
      <form className="mt-8">
        {/* Input + Button */}
        <div className="flex items-center justify-between rounded-full bg-indigo-100 p-2">
          <Input
            type="email"
            // 2. CHANGED: Matched placeholder text to the image
            placeholder="Email adders"
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

