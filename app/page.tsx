import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
    </div>
  );
};
