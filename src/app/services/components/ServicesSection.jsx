"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "FBAR Filings – Annual reporting for foreign accounts exceeding $10,000",
    image: "/service-1.png",
    highlight: true,
  },
  {
    id: 2,
    title: "Expat Tax Filing – Compliance support for U.S. citizens and green card holders abroad",
    image: "/service-2.png",
    highlight: false,
  },
  {
    id: 3,
    title: "U.S. Individual Tax Returns – Complete preparation and filing for individuals",
    image: "/service-3.png",
    highlight: false,
  },
  {
    id: 4,
    title: "Foreign Business Ownership Reporting – Filing guidance for businesses outside the U.S.",
    image: "/service-4.png",
    highlight: false,
  },
];


export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2>
            Our Tax Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Comprehensive U.S. tax solutions designed for individuals and
            businesses worldwide.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                service.highlight ? "bg-indigo-50" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-56 md:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:w-1/2">
                <p className="text-lg font-semibold font-poppins text-gray-900 mb-6">
                  {service.title}
                </p>

                <button className="group inline-flex items-center text-indigo-900 font-medium hover:underline underline-offset-4">
                  Read More
                  <ArrowRight
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
