import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Impact from "@/components/sections/Impact";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      
      {/* Sections Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-32 pt-16 pb-16">
        <Hero />
        <About />
        <Impact />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
