"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const phone = "+918089916416";
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState("");

  // Hide on contact page
  if (pathname === "/contact") return null;

  // Auto popup for 3 seconds on first visit
  useEffect(() => {
    const alreadyShown = localStorage.getItem("whatsappPopupShown");
    if (!alreadyShown) {
      setHovered(true);
      localStorage.setItem("whatsappPopupShown", "true");

      const timer = setTimeout(() => setHovered(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Open WhatsApp with user input
  const openWhatsApp = () => {
    const encoded = encodeURIComponent(
      text || "Hello! I want to know more about Fourgenix and the services you provide."
    );
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-7 right-7 z-[999] flex flex-col items-end gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Popup Chat Box */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl shadow-xl w-64 p-3 text-gray-800"
        >
          <p className="font-semibold text-center text-sm">Let’s Chat</p>

          <div className="mt-2 border rounded-lg p-2 text-sm bg-gray-50">
            How can I help?
          </div>

          <div className="mt-2 flex items-center gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Send your message…"
              className="w-full border rounded-md px-2 py-1 text-sm bg-white"
            />
            <button
              onClick={openWhatsApp}
              className="p-2 rounded-md bg-emerald-500 text-white"
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{
          rotate: [0, -6, 6, -6, 6, 0],
        }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
        onClick={openWhatsApp}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl cursor-pointer"
      >
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          1
        </div>

        {/* Pulse Animation ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative" />
      </motion.div>
    </motion.div>
  );
}
