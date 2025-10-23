'use client'

import { usePathname } from "next/navigation";
import Link from "next/link"; // <-- 1. Import the Link component

export const Header = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full p-4">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img className="w-[100px] h-auto" src="logo.png" alt="Fourgenix Logo" />

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-[3.5rem] rounded-full bg-white px-[4.5rem] py-4 shadow-sm">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative group">
                  {/* 2. Replace <a> tag with <Link> component */}
                  <Link
                    href={item.href}
                    className={`
                      text-lg font-medium transition-colors duration-300
                      ${isActive ? 'text-primary' : 'text-gray-600 hover:text-black'}
                    `}
                  >
                    {item.name}
                  </Link>

                  {/* Animated underline */}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300
                      group-hover:w-full ${isActive ? 'w-full' : ''}
                    `}
                    style={{ pointerEvents: 'none' }}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};