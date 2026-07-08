"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Github, PenLine, PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FaBehance } from "react-icons/fa";
import verisImage from "../src/assets/veris.jpg";

interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  href?: string;
  behance?: string;
  badges: string[];
  accent: string;
  redButton?: string;
  outlineButton?: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    title: "VERIS Creative Studio",
    description:
      "Meu primeiro projeto voltado a design e UX/UI. A VERIS é um estúdio criativo que atende empresas locais.",
    image: verisImage,
    href: "https://veriscreative.vercel.app",
    behance: "https://www.behance.net/gallery/246451035/VERIS-Creative-Identidade-Visual",
    badges: ["Next.js", "Shadcn/UI", "UX/UI", "Projeto autoral", "Photoshop", "Figma", "Python"],
    accent: "from-primary/20 to-transparent",
    redButton: "Visite o site",
    outlineButton: "Behance"
  },

  {
    title: "Zylo",
    description: "Agente de IA que realiza análises jurídicas com base em documentos. ",
    image: "",
    badges: ["AI/GenAI", "LLM", "Integrações", "Gemini", "Python"],
    accent: "from-primary/20 to-transparent",
    inProgress: true
  },

  {
    title: "Archon",
    description: "Agente de IA que orienta e realiza processos para clientes de CRM. ",
    image: "",
    badges: ["AI/GenAI", "LLM", "RAG", "LangChain", "Gemini", "Python"],
    accent: "from-primary/20 to-transparent",
    inProgress: true
  },

    {
    title: "Lux",
    description: "Agente de IA que realiza auditorias de instalações para técnicos de telecom. ",
    image: "",
    badges: ["AI/GenAI", "LLM", "Visão Computacional", "OCR", "Gemini"],
    accent: "from-primary/20 to-transparent",
    inProgress: true
  },

  {
    title: "ArkitektAI",
    description: "Inspirado no Spring Initializr, o Arkitekt é uma plataforma onde os desenvolvedores de IA podem gerar seu projeto do zero.",
    image: "",
    href: "https://arkitektai.vercel.app",
    badges: ["AI/GenAI", "Next.js", "Design", "Arquitetura de Software"],
    accent: "from-primary/20 to-transparent",
    redButton: "Visite o site",
    outlineButton: "GitHub",
    inProgress: true
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const allBadges = Array.from(new Set(projects.flatMap((p) => p.badges)));

  const filteredProjects = filter
    ? projects.filter((p) => p.badges.includes(filter))
    : projects;

  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2">03. trabalho</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Projetos</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Alguns trabalhos que mostram a linha que eu venho seguindo: produto útil,
            interface limpa e implementação direta ao ponto.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge
              variant={filter === null ? "default" : "outline"}
              className="cursor-pointer transition-colors"
              onClick={() => setFilter(null)}
            >
              Todos
            </Badge>
            {allBadges.map((badge) => (
              <Badge
                key={badge}
                variant={filter === badge ? "default" : "outline"}
                className="cursor-pointer transition-colors"
                onClick={() => setFilter(filter === badge ? null : badge)}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
              <Card className="overflow-hidden border-border/80 bg-card/90 backdrop-blur-sm">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""}`}>
                  <div className="relative min-h-[280px] lg:min-h-[360px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                        <span className="text-muted-foreground/50 font-mono text-sm">Sem imagem</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex items-center">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        <span>Projeto</span>
                        <span className="h-px w-10 bg-border" />
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.badges.map((badge) => (
                          <Badge key={badge} variant="tech">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.inProgress ? (
                          <Button disabled variant="secondary" className="opacity-70 cursor-not-allowed">
                            Em andamento
                          </Button>
                        ) : (
                          <>
                            {project.href && (
                              <Button asChild>
                                <a href={project.href} target="_blank" rel="noreferrer" className="group">
                                  {project.redButton || "Ver repositório"}
                                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                              </Button>
                            )}
                            {(project.behance || project.href) && (
                              <Button variant="outline" asChild>
                                <a href={project.behance || project.href} target="_blank" rel="noreferrer">
                                  {project.behance ? <FaBehance className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                                  {project.outlineButton || "Código"}
                                </a>
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Card className="p-6 border-dashed bg-muted/20">
              <PenLine className="h-5 w-5 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Planejamento primeiro</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Os projetos seguem uma linha prática: definir o fluxo, simplificar o uso e depois
                polir a interface.
              </p>
            </Card>
            <Card className="p-6 border-dashed bg-muted/20">
              <PlaySquare className="h-5 w-5 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Entrega enxuta</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O foco está em resolver bem um problema específico sem inflar a implementação.
              </p>
            </Card>
            <Card className="p-6 border-dashed bg-muted/20 sm:col-span-2 lg:col-span-1">
              <Github className="h-5 w-5 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Mais no GitHub</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Os repositórios estão disponíveis para consulta e evolução contínua.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}