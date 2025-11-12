"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Who we serve", href: "/audience" },   // <-- added blog
  { name: "Contact", href: "/contact" },
];


  return (
    <header className="absolute left-0 top-0 z-100 w-full py-2 px-4 bg-[#DCDEFF] md:bg-transparent">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/">
          <img
            className="w-18 md:w-[100px] h-auto"
            src="/logo.png"
            alt="Fourgenix Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-[3.5rem] rounded-full bg-white px-[4.5rem] py-4 shadow-sm">
            {menuItems.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="text-lg body font-medium text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </a>
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
                  style={{ pointerEvents: "none" }}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-[88px] left-0 w-full bg-white shadow-md transform transition-transform duration-300 origin-top rounded-b-lg overflow-hidden z-50
    ${
      isOpen
        ? "translate-y-0 opacity-100"
        : "-translate-y-10 opacity-0 pointer-events-none"
    }
  `}
      >
        <ul className="flex flex-col">
          {menuItems.map((item, idx) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="body text-lg font-medium text-gray-700 hover:text-black hover:bg-white/10 transition-all duration-200 py-4 px-6 flex w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
              {/* Separator line except for last item */}
              {idx < menuItems.length - 1 && (
                <span className="block h-[1px] bg-gray-300 mx-4"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
