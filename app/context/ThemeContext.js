"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme dari localStorage atau system preference
  useEffect(() => {
    setMounted(true);

    // Cek localStorage dulu
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      // Jika tidak ada di localStorage, gunakan system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  // Sinkronisasi ke <html> dan localStorage
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  const toggleTheme = () => setDark(!dark);

  return <ThemeContext.Provider value={{ dark, setDark, toggleTheme, mounted }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
