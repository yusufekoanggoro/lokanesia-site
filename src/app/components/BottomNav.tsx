"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaMapMarkedAlt, FaQuestion } from "react-icons/fa";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Halaman Utama", href: "/", icon: <FaHome size={20} /> },
    { name: "Event", href: "/event", icon: <FaCalendarAlt size={20} /> },
    { name: "Jelajah", href: "/jelajah", icon: <FaMapMarkedAlt size={20} /> },
    { name: "Quiz", href: "/quiz", icon: <FaQuestion size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-t border-gray-200 shadow-lg">
      <ul className="flex justify-around">
        {navItems.map(({ name, href, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center justify-center py-3 text-sm font-semibold transition-colors duration-300
                  ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {icon}
                <span className="mt-1">{name}</span>
                {isActive && (
                  <span className="block w-6 h-0.5 bg-blue-600 rounded mt-1 animate-pulse"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
