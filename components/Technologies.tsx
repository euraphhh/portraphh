"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Layers,
  Code2,
  FileCode,
  Server,
  Terminal,
  Globe,
  GitBranch,
  Database,
  Smartphone,
} from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const technologies = [
  {
    icon: Atom,
    name: "React",
    description: "Interfaces dinâmicas e reativas",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Layers,
    name: "Next.js",
    description: "Framework React full-stack",
    color: "text-foreground",
    bg: "bg-foreground/5",
  },
  {
    icon: Code2,
    name: "TypeScript",
    description: "JavaScript com tipagem estática",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: FileCode,
    name: "JavaScript",
    description: "Linguagem da web moderna",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Back-end em JavaScript",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Terminal,
    name: "Python",
    description: "Scripting e automação",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Globe,
    name: "Web Design",
    description: "UX/UI e design responsivo",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description: "Controle de versão",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Database,
    name: "SQL",
    description: "Banco de dados relacional",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    icon: Smartphone,
    name: "Responsivo",
    description: "Design mobile-first",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

export function Technologies() {
  return (
    <section id="tecnologias" className="section-padding relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto bg-white/40 dark:bg-[#131313] backdrop-blur-md rounded-[2.5rem] border border-border/50 dark:border-white/5 p-8 sm:p-20 shadow-xl dark:shadow-2xl relative overflow-hidden group"
      >
        {/* Sutil brilho interno no topo */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-mono font-medium mb-2 uppercase tracking-widest">02. habilidades</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Tecnologias</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
          <p className="mt-6 text-muted-foreground max-w-xl text-lg">
            Ferramentas e tecnologias que uso para construir produtos digitais de qualidade.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2, ease }}
              className="group/tech flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 dark:border-white/5 bg-background/50 dark:bg-white/[0.02] hover:border-primary/30 hover:bg-background transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
            >
              <div
                className={`w-14 h-14 rounded-xl ${tech.bg} flex items-center justify-center transition-transform duration-300 group-hover/tech:scale-110 shadow-lg`}
              >
                <tech.icon className={`w-7 h-7 ${tech.color}`} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-base">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
