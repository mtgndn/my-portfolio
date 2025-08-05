// components/ProjectCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
};

export default function ProjectCard({ title, description, techs, githubUrl }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm dark:bg-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center gap-2">
            <Github size={16} />
            GitHub
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
