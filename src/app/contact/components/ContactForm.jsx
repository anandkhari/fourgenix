"use client";

import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const hoverLift = {
  whileHover: {
    y: -3,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xeovwnpb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="p-8 md:p-12 rounded-3xl h-full bg-brand-light"
    >
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Full Name */}
        <motion.div variants={fadeUp}>
          <label
            htmlFor="full-name"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Full Name :
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            autoComplete="name"
            className="block w-full rounded-xl border-0 bg-white py-3 px-4 shadow-sm placeholder:text-lg placeholder:text-gray-400"
            placeholder="Enter your full name"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp}>
          <label
            htmlFor="email"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Email Address :
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-xl border-0 bg-white py-3 px-4 shadow-sm placeholder:text-lg placeholder:text-gray-400"
            placeholder="Enter your email address"
            required
          />
        </motion.div>

        {/* Subject */}
        <motion.div variants={fadeUp}>
          <label
            htmlFor="subject"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Subject :
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full rounded-xl border-0 bg-white py-3 px-4 shadow-sm placeholder:text-lg placeholder:text-gray-400"
            placeholder="Enter the subject"
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp}>
          <label
            htmlFor="message"
            className="block text-base font-poppins font-medium text-gray-900"
          >
            Enter Your Message :
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="block w-full rounded-xl border-0 bg-white py-3 px-4 shadow-sm placeholder:text-lg placeholder:text-gray-400"
            placeholder="Your message here..."
            required
          />
        </motion.div>

        {/* Submit */}
        <motion.div variants={fadeUp} {...hoverLift}>
          <Button
            type="submit"
            variant="dark"
            size="hero"
            disabled={loading}
            className="w-60"
          >
            {loading ? "Sending..." : "Send Your Message"}
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
