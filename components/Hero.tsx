"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >

        {/* Greeting */}
        <motion.p
          variants={item}
          className="text-muted-foreground text-lg mb-3 tracking-wide"
        >
          Olá, eu sou
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
            Raphael Xavier
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={item} className="mb-6">
          <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
            Desenvolvedor GenAI/Web
            <span className="ml-1 inline-block w-0.5 h-6 bg-primary align-middle animate-cursor-blink" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
        >
          Apaixonado por tecnologia e por criar experiências web modernas.
          Estudante de Ciência da Computação pela UNIP em São José dos Campos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            onClick={() =>
              document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto group"
          >
            Ver Projetos
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto"
          >
            Entre em Contato
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/euraphhh", label: "GitHub" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/oraphaelxavier/",
              label: "LinkedIn",
            },
            {
              icon: FaXTwitter,
              href: "https://x.com/euraphhh",
              label: "X",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease }}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
