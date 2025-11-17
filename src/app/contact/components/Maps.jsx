"use client";

import React from "react";

export default function Map() {
  return (
   <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="Office Location (St. Petersburg, FL)"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2097.6848964352453!2d-82.63971216257639!3d27.84448979690962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6a2b7eab4db%3A0x251ced89c2d75cc7!2s7901%204th%20St%20N%20Suite%20300%2C%20St.%20Petersburg%2C%20FL%2033702%2C%20USA!5e0!3m2!1sen!2sin!4v1763389752521!5m2!1sen!2sin"
  ></iframe>
</div>

  );
}
