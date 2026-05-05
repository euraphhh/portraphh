"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Seja bem-vindo(a)!", "eu sou..."];

export function Intro({ 
  onComplete, 
  onExiting 
}: { 
  onComplete: () => void; 
  onExiting: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "logoCenter" | "logoColor" | "exiting">("words");

  useEffect(() => {
    if (phase === "words") {
      if (index === 0) {
        const timer = setTimeout(() => setIndex(1), 2000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("logoCenter"), 1800);
        return () => clearTimeout(timer);
      }
    } else if (phase === "logoCenter") {
      const timer = setTimeout(() => setPhase("logoColor"), 1200);
      return () => clearTimeout(timer);
    } else if (phase === "logoColor") {
      const timer = setTimeout(() => {
        setPhase("exiting");
        onExiting(); 
      }, 1200);
      return () => clearTimeout(timer);
    } else if (phase === "exiting") {
      const timer = setTimeout(() => onComplete(), 1500);
      return () => clearTimeout(timer);
    }
  }, [index, phase, onComplete]);

  const isExiting = phase === "exiting";
  const hasColor = phase === "logoColor" || phase === "exiting";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Overlay de Fundo - Agora como uma camada única que desaparece */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-background z-[-1]"
      />

      <AnimatePresence mode="wait">
        {phase === "words" ? (
          <div 
            key={index} 
            className="overflow-hidden pb-4 px-4"
            style={{ 
              maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
            }}
          >
            <motion.h1
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="text-foreground text-4xl sm:text-7xl font-bold tracking-tight"
            >
              {words[index]}
            </motion.h1>
          </div>
        ) : !isExiting ? (
          <motion.div
            key="logo-intro"
            layoutId="logo"
            initial={{ scale: 0.9, opacity: 0, filter: "blur(5px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
            className="text-4xl sm:text-6xl font-bold tracking-tight fixed z-[101] flex items-center pointer-events-none"
          >
            <motion.span 
              layoutId="logo-r"
              animate={{ 
                color: hasColor ? "hsl(var(--primary))" : "currentColor",
                textShadow: hasColor ? "0 0 20px hsl(var(--primary) / 0.3)" : "none"
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative inline-block"
            >R</motion.span><motion.span layoutId="logo-text" className="text-foreground inline-block overflow-visible">{"aphael".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >{letter}</motion.span>
              ))}</motion.span><motion.span 
              layoutId="logo-dot" 
              initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
              animate={{ 
                opacity: hasColor ? 1 : 0, 
                scale: hasColor ? 1 : 0,
                filter: hasColor ? "blur(0px)" : "blur(10px)"
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-primary inline-block"
            >.</motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}




