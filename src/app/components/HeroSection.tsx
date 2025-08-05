"use client";

import { motion } from "framer-motion";
import CodeRain from "./CodeRain";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden text-white">
<CodeRain />
      <motion.h1
        className="text-black text-5xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Merhaba, ben Metehan Günaydın
      </motion.h1>

      <motion.p
        className="text-black text-xl max-w-xl mx-auto drop-shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Yazılım geliştirici, siber güvenlik tutkunu ve teknoloji meraklısı.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        İletişime Geç
      </motion.button>
    </section>
  );
}
