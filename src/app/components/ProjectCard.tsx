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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-80 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col p-6"
    >
      
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      
      <p className="text-gray-700 dark:text-gray-300 flex-grow">
        {description}
      </p>

      
      <div className="mt-4 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 px-3 py-1 rounded-full text-xs font-medium select-none"
          >
            {tech}
          </span>
        ))}
      </div>

      
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-block text-center rounded-md px-4 py-2 font-semibold transition-colors ${
            hovered
              ? "bg-indigo-700 text-white"
              : "bg-indigo-500 text-indigo-100 hover:bg-indigo-600"
          }`}
        >
          GitHub Reposu
        </a>
      )}
    </div>
  );
}
