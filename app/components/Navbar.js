"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null; // Hindari hydration mismatch
  }

  return (
    <nav
      className="
        sticky top-4 z-50
        w-[95%] mx-auto
        bg-white text-black dark:bg-gray-800 dark:text-white
        shadow-md dark:shadow-xl
        rounded-2xl
        transition-all
      "
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <h1 className="font-bold text-lg md:hidden">Usep</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
        </ul>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle Dark Mode" title={dark ? "Light Mode" : "Dark Mode"}>
            {dark ? "☀️" : "🌙"}
          </button>
          <SocialLinks />
        </div>

        {/* Hamburger & Dark Mode Toggle (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle Dark Mode">
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-2xl" aria-label="Toggle Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 border-t dark:border-gray-700">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>

          <div className="pt-4 border-t dark:border-gray-700">
            <SocialLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------- Social Icons Component ---------- */
function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="mailto:usepsofyan597@gmail.com" title="Email" className="hover:opacity-70 transition-opacity">
        📧
      </a>
      <a href="https://github.com/usepsofyaan" target="_blank" className="hover:opacity-70 transition-opacity">
        🐙
      </a>
      <a href="https://linkedin.com/in/usepsofyan" target="_blank" className="hover:opacity-70 transition-opacity">
        💼
      </a>
    </div>
  );
}
