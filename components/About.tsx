"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FileText, GraduationCap, MapPin, Code2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import profileImage from "../src/assets/profnew.jpg";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "AI/GenAI",
  "Git",
  "REST APIs",
  "SQL",
];

const facts = [
  {
    icon: GraduationCap,
    label: "Formação",
    value: "Ciência da Computação — UNIP",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São José dos Campos, SP",
  },
  {
    icon: Code2,
    label: "Experiência",
    value: "AI/GenAI e desenvolvimento web",
  },
];

const experiences = [
  {
    title: "Dev GenAI",
    company: "Novale Soluções",
    period: "Nov/2025 - Presente",
    summary:
      "Atuação voltada a AI/GenAI, explorando automações, fluxos inteligentes e apoio a produtos com foco em produtividade.",
    tags: ["AI/GenAI", "Automação", "Integração", "Produtos digitais"],
  },
  {
    title: "Técnico em Informática",
    company: "Experiência prévia",
    period: "Base prática consolidada",
    summary:
      "Vivência com suporte, organização de ambientes, manutenção e resolução de problemas no dia a dia técnico.",
    tags: ["Suporte", "Infra", "Manutenção", "Resolução de problemas"],
  },
];

export function About() {
  const [experienceOpen, setExperienceOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = experienceOpen ? "hidden" : "";

    if (!experienceOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExperienceOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [experienceOpen]);

  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2">01. sobre</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Sobre Mim</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease }}
                className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-4 translate-y-4"
              />
              <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square">
                <Image
                  src={profileImage}
                  alt="Raphael Xavier"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor em formação, apaixonado por tecnologia e sempre em busca
                de aprender mais. Sou técnico em informática e atualmente estou cursando
                <span className="text-foreground font-medium"> Ciência da Computação</span> pela
                Universidade Paulista (UNIP) de São José dos Campos.
              </p>
              <p>
                Estou sempre buscando novos desafios e oportunidades para aplicar meus
                conhecimentos e habilidades, desenvolvendo projetos que combinam boa
                experiência de usuário com código limpo e bem estruturado.
              </p>
            </div>

            {/* Facts */}
            <div className="grid gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-muted-foreground">{label}: </span>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Tecnologias que uso:</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="tech">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Resume button */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => setExperienceOpen(true)}>
                <Sparkles className="w-4 h-4" />
                Experiências
              </Button>
              <Button asChild variant="outline">
                <a
                  href="/curricRapha.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Ver Currículo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {experienceOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExperienceOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <Card className="overflow-hidden border-border/80 bg-background shadow-2xl">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      trajetória
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight">Experiências de trabalho</h3>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setExperienceOpen(false)} aria-label="Fechar modal">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-5 p-6 sm:p-8">
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Resumo das experiências que hoje sustentam minha atuação em desenvolvimento e AI/GenAI.
                  </p>

                  <div className="grid gap-4">
                    {experiences.map((experience) => (
                      <div
                        key={`${experience.title}-${experience.company}`}
                        className="rounded-2xl border border-border bg-muted/30 p-5"
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h4 className="text-lg font-semibold">{experience.title}</h4>
                            <p className="text-sm text-muted-foreground">{experience.company}</p>
                          </div>
                          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            {experience.period}
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {experience.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <Badge key={tag} variant="tech">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
