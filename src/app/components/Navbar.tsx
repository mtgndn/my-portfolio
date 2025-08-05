// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Metehan Günaydın
        </Link>

        <div className="space-x-4 hidden md:block">
          <Link href="#projects" className="hover:underline text-sm">
            Projeler
          </Link>
          <Link href="#about" className="hover:underline text-sm">
            Hakkımda
          </Link>
          <Link href="#contact" className="hover:underline text-sm">
            İletişim
          </Link>
        </div>
      </nav>
    </header>
  );
}
