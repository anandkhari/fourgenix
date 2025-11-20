"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const phone = "+918089916416";

  // Updated welcome message
  const message = encodeURIComponent(
    "Hello! Can I know more about Fourgenix and the services you provide?"
  );

  const pathname = usePathname();

  // Hide button on contact page (optional)
  if (pathname === "/contact") return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >

      {/* Hover Label */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="px-3 py-2 rounded-lg bg-white shadow text-gray-800 font-medium text-sm hidden sm:block"
      >
        Chat with us
      </motion.span>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.05 }}
        className="
          flex items-center justify-center
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full bg-[#25D366] text-white
          shadow-xl hover:bg-[#1ebe5d]
          cursor-pointer
          animate-[pulseGlow_2.5s_ease-out_infinite]
        "
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.a>
    </motion.div>
  );
}
