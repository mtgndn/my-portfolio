// components/HeroSection.tsx
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Metehan Günaydın
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
        Merhaba! Ben bir yazılım geliştirici ve siber güvenlik tutkunu olarak modern web uygulamaları geliştiriyorum.
      </p>
      <Button size="lg">
        Projelerimi Gör
      </Button>
    </section>
  );
}
