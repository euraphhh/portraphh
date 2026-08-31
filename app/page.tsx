"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);

  useEffect(() => {
    // Bloquear scroll enquanto a intro estiver ativa
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showIntro]);

  return (
    <>
      <InteractiveBackground />
      <AnimatePresence>
        {showIntro && (
          <Intro 
            key="intro" 
            onExiting={() => setIntroExiting(true)}
            onComplete={() => setShowIntro(false)} 
          />
        )}
      </AnimatePresence>

      <Navbar showLogo={introExiting || !showIntro} />

      <motion.main 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ 
          opacity: introExiting ? 1 : (showIntro ? 0 : 1), 
          y: introExiting ? 0 : (showIntro ? 20 : 0),
          scale: introExiting ? 1 : (showIntro ? 0.98 : 1) 
        }}
        transition={{ 
          duration: 1.5, 
          ease: [0.65, 0, 0.35, 1],
          delay: 0.2
        }}
        className="relative min-h-screen overflow-x-hidden"
      >
        <div id="top" className="absolute top-0" />
        <Hero />
        <About />
        <Technologies />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
