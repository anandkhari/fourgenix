"use client";

import React from "react";
import { Button } from "../../../components/ui/button";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    // 1. Main form container
    <div className="p-8 md:p-12 rounded-3xl h-full">
      {/* 2. Intro text removed */}

      {/* 3. Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="full-name"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Full Name :
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full rounded-xl border-transparent bg-white py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Email Address :
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-xl border-transparent bg-white py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Subject :
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full rounded-xl border-transparent bg-white py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Enter Your Message :
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows="5"
              className="block w-full rounded-xl border-transparent bg-white py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
        <Button>
          Send Your Message
        </Button>
        </div>
      </form>
    </div>
  );
}
