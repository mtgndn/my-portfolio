// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {currentYear} Metehan Günaydın. Tüm hakları saklıdır.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/mtgndn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/metehan-günaydın-361514241"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:metehan@example.com"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            E-posta
          </a>
        </div>
      </div>
    </footer>
  );
}
