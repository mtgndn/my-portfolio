'use client';

import { useEffect, useState } from 'react';
import { Code2, CheckCircle2, Clock3, GitCommit } from 'lucide-react';

type StatProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

function StatCard({ label, value, icon }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">{icon}</div>
      <div className="text-4xl font-bold text-black dark:text-white">{count}+</div>
      <div className="text-muted-foreground mt-2 text-sm">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">İstatistikler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <StatCard
          label="Tamamlanan Proje"
          value={12}
          icon={<CheckCircle2 size={32} />}
        />
        <StatCard
          label="Yıl Deneyim"
          value={2}
          icon={<Clock3 size={32} />}
        />
        <StatCard
          label="GitHub Commit"
          value={350}
          icon={<GitCommit size={32} />}
        />
        <StatCard
          label="Kodlama Saati / Hafta"
          value={40}
          icon={<Code2 size={32} />}
        />
      </div>
    </section>
  );
}
