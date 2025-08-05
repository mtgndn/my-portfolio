"use client";

import { motion } from "framer-motion";
import CodeRain from "./CodeRain";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden text-white">

      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <CodeRain />
      </div>

      <motion.h1
        className="text-black text-5xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Merhaba, ben Metehan Günaydın
      </motion.h1>

      {/* Typewriter efekti */}
      <TypewriterText />

      <motion.p
        className="text-black text-xl max-w-xl mx-auto drop-shadow-md mt-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Yazılım geliştirici, siber güvenlik tutkunu ve teknoloji meraklısı.
      </motion.p>

      <motion.a
        href="https://www.instagram.com/mtgndn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        İletişime Geç
      </motion.a>
    </section>
  );
}
