// components/ContactSection.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">İletişim</h2>

      <p className="mb-6 text-muted-foreground">
        Bana aşağıdaki yollarla ulaşabilirsiniz. Projelerim hakkında konuşmak ya da iş birliği yapmak için çekinmeyin!
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:mtgndn@gmail.com"
          aria-label="E-posta"
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
        >
          <Mail size={20} />
          E-posta
        </a>

        <a
          href="https://github.com/mtgndn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
        >
          <Github size={20} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/metehan-günaydın-361514241"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
