"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch("/api/views");
        const data = await res.json();
        setViews(data.views);
      } catch (err) {
        console.error("Ziyaretçi verisi alınamadı:", err);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="text-center text-sm text-gray-500 mt-4">
      👀 Ziyaret Sayısı:{" "}
      <span className="font-semibold text-gray-800">{views ?? "..."}</span>
    </div>
  );
}
