import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans text-black grid grid-rows-[60px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Navbar */}
      <nav className="row-start-1 w-full flex justify-between items-center bg-white shadow-sm mb-8 px-4">
        {/* Left: Menu */}
        <ul className="flex gap-8 text-base font-semibold">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
          </li>
        </ul>
        {/* Right: Bar */}
        <div className="flex items-center gap-4">
          <a href="mailto:usepsofyan597@gmail.com" title="Email" className="hover:text-blue-600 transition-colors">
            <span className="sr-only">Email</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M4 4l8 8 8-8" />
            </svg>
          </a>
          <a href="https://github.com/usepsofyaan" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-blue-600 transition-colors">
            <span className="sr-only">GitHub</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/usepsofyan" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-blue-600 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
            </svg>
          </a>
          {/* Dark mode toggle */}
          <button title="Toggle dark mode" className="text-xl hover:text-blue-600 transition-colors">
            <span className="sr-only">Toggle dark mode</span>
            🌙
          </button>
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* ...existing code... */}
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        {/* ...existing code... */}
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">app/page.js</code>.
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>
        {/* ...existing code... */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">{/* ...existing code... */}</div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">{/* ...existing code... */}</footer>
    </div>
  );
}
