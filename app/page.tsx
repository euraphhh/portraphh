import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div id="top" className="absolute top-0" />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}