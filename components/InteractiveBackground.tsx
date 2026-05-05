"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suaviza o movimento do mouse para o spotlight
  const springConfig = { damping: 30, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
      {/* Grid com animação ultra-lenta e suave */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] animate-grid-pan"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          willChange: "background-position"
        }}
      />

      {/* Spotlight Interativo mais difuso e adaptável */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, hsl(var(--primary) / 0.05), transparent 100%)`
          ),
        }}
      />

      {/* Blobs Animados de Fundo (Restaurados e Melhorados) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.15, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* CSS para a animação do grid - Agora com oscilação orgânica */}
      <style jsx global>{`
        @keyframes grid-oscillate {
          0% { background-position: 0px 0px; }
          50% { background-position: 30px 30px; }
          100% { background-position: 0px 0px; }
        }
        .animate-grid-pan {
          animation: grid-oscillate 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
