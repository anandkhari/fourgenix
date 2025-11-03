"use client";

import React from "react";

export default function Map() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7777317877553!2d76.29988437480495!3d9.981635973077226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5baf5f1ad1%3A0x42db2cf0305b6f94!2sMarine%20Drive%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1692521310314!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
}
