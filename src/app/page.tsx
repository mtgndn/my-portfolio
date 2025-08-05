import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection"; 
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import VisitorCounter from "./components/VisitorCounter";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="" style={{ scrollBehavior: "smooth" }}>
        <section id="hero" className="snap-start py-20">
          <HeroSection />
        </section>

        <hr className="border-t border-black border-opacity-30 mx-auto w-40 my-6" />

        <section id="projects" className="snap-start py-20">
          <ProjectsSection />
        </section>

        <hr className="border-t border-black border-opacity-30 mx-auto w-40 my-6" />

        <section id="about" className="snap-start py-20">
          <AboutSection />
        </section>
        

        <hr className="border-t border-black border-opacity-30 mx-auto w-40 my-6" />

        <section id="contact" className="snap-start py-20">
          <ContactSection />
        </section>

        <hr className="border-t border-black border-opacity-30 mx-auto w-40 my-6" />

        
        <section id="stats" className="snap-start py-20">
          <StatsSection />
        </section>

        <VisitorCounter />
        <Footer />
        
      </main>
    </>
  );
}
