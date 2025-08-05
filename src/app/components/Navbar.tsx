"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-gray-900">
          Metehan Günaydın
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold text-gray-800">
          {["Projeler", "Hakkımda", "İletişim"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger ikonu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mobil menüyü aç/kapat"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobil menü */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        {["Projeler", "Hakkımda", "İletişim"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}
