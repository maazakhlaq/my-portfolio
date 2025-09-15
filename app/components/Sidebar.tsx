"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "skills", label: "Skills", icon: <Code size={18} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  { id: "projects", label: "Projects", icon: <Home size={18} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeId = pathname?.split("/")[1] || "About";

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg 
        focus:outline-none focus:ring-2 focus:ring-indigo-300 active:scale-95 transition-transform duration-300"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={` h-full w-64
        bg-gradient-to-b from-indigo-700 via-purple-700 to-blue-600 
        dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900
        backdrop-blur-xl text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        transform transition-transform duration-300 ease-in-out z-40
        border-r border-white/10
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-white/10">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-200 bg-clip-text text-transparent 
              hover:scale-105 transition-transform duration-300 tracking-wide drop-shadow-lg">
              Maaz Akhlaq
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col space-y-2 px-4 pb-6">
          {navItems.map(({ id, label, icon }) => {
            const isActive = activeId === label;
            return (
              <Link
                key={id}
                href={`/${label}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-5 py-3 rounded-lg font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-white/30 to-white/10 text-yellow-300 shadow-lg shadow-yellow-200/30 scale-[1.03]"
                      : "hover:bg-white/10 hover:text-yellow-200 hover:scale-[1.02]"
                  }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
