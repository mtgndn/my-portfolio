import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Navbar yüksekliği kadar padding ekliyoruz */}
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}
