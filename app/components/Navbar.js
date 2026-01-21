"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-4 z-50
        w-[95%] mx-auto
        bg-white text-black
        shadow-md
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
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
          </li>
        </ul>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <SocialLinks />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-label="Toggle Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block">
            Projects
          </Link>

          <div className="pt-4 border-t">
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
      <a href="mailto:usepsofyan597@gmail.com" title="Email">
        📧
      </a>
      <a href="https://github.com/usepsofyaan" target="_blank">
        🐙
      </a>
      <a href="https://linkedin.com/in/usepsofyan" target="_blank">
        💼
      </a>
    </div>
  );
}
