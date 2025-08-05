"use client";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  techs,
  githubUrl,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-48 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Ön yüz */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center text-xl font-semibold text-gray-900 backface-hidden p-4">
          {title}
        </div>

        {/* Arka yüz */}
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-lg shadow-md p-6 rotate-y-180 backface-hidden flex flex-col justify-between">
          <p className="text-sm">{description}</p>

          <ul className="flex flex-wrap gap-2 mt-3 text-xs">
            {techs.map((tech) => (
              <li
                key={tech}
                className="bg-indigo-300 bg-opacity-30 rounded px-2 py-1"
              >
                {tech}
              </li>
            ))}
          </ul>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-200 hover:text-white underline text-sm"
            >
              GitHub Reposu
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
