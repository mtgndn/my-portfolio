// components/ProjectsSection.tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Blog Platformu",
    description: "Kullanıcıların yazı yazabildiği, yorum yaptığı bir Next.js blog platformu.",
    techs: ["Next.js", "Tailwind", "MongoDB"],
    githubUrl: "https://github.com/mtgndn/blog-platform",
  },
  {
    title: "Görev Takip Uygulaması",
    description: "React ile yapılmış, drag-and-drop özellikli görev yönetim aracı.",
    techs: ["React", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/mtgndn/task-tracker",
  },
  {
    title: "Portföy Sitesi",
    description: "Bu gördüğünüz portföy sitesini ShadCN ve Next.js ile geliştirdim.",
    techs: ["Next.js", "ShadCN", "Tailwind"],
    githubUrl: "https://github.com/mtgndn/portfolio-site",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-background">
      <h2 className="text-3xl font-bold text-center mb-12">Projelerim</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
