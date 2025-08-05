"use client";

import { useEffect, useState } from "react";

const texts = [
  "Yazılım Geliştirici",
  "Siber Güvenlik Meraklısı",
  "Açık Kaynak Katılımcısı",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 2000); 
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <p className="text-lg mt-2 text-gray-700 dark:text-white min-h-[32px]">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
