"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaMapMarkedAlt, FaQuestion } from "react-icons/fa";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "", href: "/", icon: <FaHome size={20} /> },
    { name: "", href: "/event", icon: <FaCalendarAlt size={20} /> },
    { name: "", href: "/jelajah", icon: <FaMapMarkedAlt size={20} /> },
    { name: "", href: "/quiz", icon: <FaQuestion size={20} /> },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50"
    >
      <ul className="flex justify-around max-w-lg mx-auto">
        {navItems.map(({ name, href, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center justify-center py-3 text-sm font-semibold transition-colors duration-300
                  ${
                    isActive
                      ? "text-yellow-600"
                      : "text-gray-600 hover:text-yellow-500 focus:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                  }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={name}
              >
                {icon}
                <span className="mt-1">{name}</span>
                {isActive && (
                  <span className="block w-6 h-0.5 bg-yellow-600 rounded mt-1 animate-pulse" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
