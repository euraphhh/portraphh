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
    <section id="tecnologias" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2">02. habilidades</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Tecnologias</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
          <p className="mt-6 text-muted-foreground max-w-xl">
            Ferramentas e tecnologias que uso para construir produtos digitais de qualidade.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2, ease }}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-colors duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-lg ${tech.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
