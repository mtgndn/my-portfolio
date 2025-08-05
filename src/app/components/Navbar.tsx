"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Metehan Günaydın
        </Link>

        {/* Masaüstü menü */}
        <div className="space-x-4 hidden md:flex">
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

        {/* Hamburger ikonu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mobil menüyü aç/kapat"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3">
          <Link
            href="#projects"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="#about"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Hakkımda
          </Link>
          <Link
            href="#contact"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </Link>
        </div>
      )}
    </header>
  );
}
