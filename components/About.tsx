"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FileText, GraduationCap, MapPin, Code2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import profileImage from "../src/assets/profnew.jpg";


const facts = [
  {
    icon: GraduationCap,
    label: "Graduação",
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
    value: "IA Generativa, desenvolvimento fullstack",
  },
];

const experiences = [
  {
    title: "Desenvolvedor Gen AI",
    company: "Novale Soluções",
    period: "Nov/2025 - Presente",
    summary:
      "Atuação voltada a AI/GenAI, explorando automações, fluxos inteligentes e apoio a produtos com foco em produtividade.",
    tags: ["AI/GenAI", "Automação", "Integração", "Produtos digitais, React, PHP"],
  },
  {
    title: "Técnico em Informática",
    company: "Experiência prévia",
    period: "Base prática consolidada",
    summary:
      "Vivência com suporte, organização de ambientes, princípios de programação, manutenção e resolução de problemas no dia a dia técnico.",
    tags: ["Java", "C++", "Manutenção", "Resolução de problemas"],
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
    <section id="sobre" className="section-padding relative z-10">
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
          <p className="text-primary text-sm font-mono font-medium mb-2 uppercase tracking-widest">01. sobre</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Sobre Mim</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-4 translate-y-4 -z-10" />
              <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square border border-border/50">
                <Image
                  src={profileImage}
                  alt="Raphael Xavier"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
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
            <div className="grid gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 text-sm group/fact">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 border border-border/50 transition-colors group-hover/fact:border-primary/50">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider">{label}</span>
                    <span className="text-foreground font-medium text-base">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills e Botões resumidos para o card */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="outline" onClick={() => setExperienceOpen(true)} className="rounded-full border-white/10 hover:bg-white/5">
                <Sparkles className="w-4 h-4 mr-2" />
                Experiências
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
                <a href="/curricRapha.pdf" target="_blank" rel="noreferrer" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Currículo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

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
