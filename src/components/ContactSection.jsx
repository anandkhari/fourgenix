"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

/* -------------------------------------- */
/* ANIMATION VARIANTS                     */
/* -------------------------------------- */
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

/* -------------------------------------- */
/* CONTACT FORM (FORMSPREE + TOAST)       */
/* -------------------------------------- */
export const ContactForm = () => {
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
      toast.success("Message sent successfully! 🎉");
      e.target.reset();
    } else {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 bg-brand-light p-6 sm:p-8 rounded-xl"
    >
      {/* Full Name */}
      <motion.div variants={fadeUp}>
        <label htmlFor="name" className="mb-2 block body">
          Full Name :
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          className="h-14 rounded-xl border-0 bg-white shadow-sm placeholder:text-lg placeholder:text-gray-400"
          required
        />
      </motion.div>

      {/* Email */}
      <motion.div variants={fadeUp}>
        <label htmlFor="email" className="mb-2 block body">
          Email Address :
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="h-14 rounded-xl border-0 bg-white shadow-sm placeholder:text-lg placeholder:text-gray-400"
          required
        />
      </motion.div>

      {/* Message */}
      <motion.div variants={fadeUp}>
        <label htmlFor="message" className="mb-2 block body">
          Enter Your Message :
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="min-h-[140px] rounded-xl border-0 bg-white shadow-sm placeholder:text-lg placeholder:text-gray-400"
          required
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeUp} {...hoverLift}>
        <Button
          variant="dark"
          size="hero"
          type="submit"
          disabled={loading}
          className="flex w-60 items-center justify-between"
        >
          {loading ? "Sending..." : "Send Your Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

/* -------------------------------------- */
/* CONTACT INFO ITEM                      */
/* -------------------------------------- */
const ContactInfoItem = ({ icon: Icon, title, content }) => (
  <motion.div
    variants={fadeUp}
    {...hoverLift}
    className="flex items-center gap-4"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2a2d58] text-white">
      <Icon className="h-7 w-7" />
    </div>

    <div>
      <h3 className="text-xl font-[var(--font-work-sans)] text-gray-900">
        {title}
      </h3>
      <p className="text-base body text-gray-600">{content}</p>
    </div>
  </motion.div>
);

/* -------------------------------------- */
/* CONTACT SECTION WRAPPER                */
/* -------------------------------------- */
export const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 sm:px-6 lg:grid-cols-2 lg:px-20"
      >
        {/* Info Section */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-center gap-12"
        >
          <h2 className="px-2">
            We are always ready to help you and answer your questions
          </h2>

          <div className="flex flex-col gap-6">
            <ContactInfoItem
              icon={PhoneIcon}
              title="Call us"
              content="+60-998930645"
            />
            <ContactInfoItem
              icon={EnvelopeIcon}
              title="Email us"
              content="Fourgenix@gmail.com"
            />
            <ContactInfoItem
              icon={MapPinIcon}
              title="Head office"
              content="Sanfranciso,USA, Tower 24, Church Street"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeUp}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
};
