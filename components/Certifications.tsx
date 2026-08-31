"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { Award, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import awsBadge from "../src/assets/aws-agentic-ai.png";

interface Certification {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  badgeImage: StaticImageData | string;
  description: string;
  skills: string[];
  credlyUrl?: string;
  skillsBuilderUrl?: string;
  accentGradient: string;
  highlightColor: string;
}

const certifications: Certification[] = [
  {
    id: "aws-agentic-ai",
    title: "AWS Agentic AI Demonstrated",
    subtitle: "Microcredential Oficial",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    badgeImage: awsBadge,
    description:
      "Avaliação prática e cronometrada em ambiente AWS real comprovando proficiência em resolução de problemas, reparo, integração e aprimoramento de Agentes e Guardrails com Amazon Bedrock, Lambda e arquiteturas agênticas modernas.",
    skills: [
      "Agentic AI",
      "Amazon Bedrock",
      "AI Agents",
      "Bedrock Guardrails",
      "Generative AI",
      "AWS Cloud",
      "LLM Architectures",
    ],
    credlyUrl: "https://www.credly.com/badges/e77efea9-c21c-4d8b-953b-56433dbffb13",
    skillsBuilderUrl: "https://skillbuilder.aws/learn/GTGKXBWUGU/aws-agentic-ai-demonstrated/SJK9ZKVCYU",
    accentGradient: "from-purple-600/20 via-primary/10 to-transparent",
    highlightColor: "text-purple-400",
  },
];

export function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cert = certifications[currentIndex];
  const hasMultiple = certifications.length > 1;

  const nextSlide = () => {
    if (!hasMultiple) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    if (!hasMultiple) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="certificacoes" className="section-padding relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto bg-white/40 dark:bg-[#131313] backdrop-blur-md rounded-[2.5rem] border border-border/50 dark:border-white/5 p-8 sm:p-16 lg:p-20 shadow-xl dark:shadow-2xl relative overflow-hidden group"
      >
        {/* Sutil brilho interno no topo */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-primary text-sm font-mono font-medium mb-2 uppercase tracking-widest">
              03. certificações
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Certificações & Badges</h2>
            <div className="mt-4 h-px w-16 bg-primary" />
            <p className="mt-6 text-muted-foreground max-w-2xl text-base sm:text-lg">
              Credenciais práticas comprovadas na construção e otimização de soluções com IA Generativa, Cloud e Engenharia de Software.
            </p>
          </div>

          {/* Navigation controls if multiple */}
          {hasMultiple && (
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-10 h-10 border-border/60 hover:border-primary/50"
                aria-label="Certificação anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="text-sm font-mono text-muted-foreground px-2">
                {currentIndex + 1} / {certifications.length}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-10 h-10 border-border/60 hover:border-primary/50"
                aria-label="Próxima certificação"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Certification Display Carousel Area */}
        <div className="relative min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={cert.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Card className="overflow-hidden border-border/70 dark:border-white/10 bg-background/80 dark:bg-black/30 backdrop-blur-xl shadow-2xl rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
                  
                  {/* Left: Badge Visual & Glow */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                    {/* Glowing circular background backdrop */}
                    <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-purple-500/15 dark:bg-purple-600/20 blur-3xl -z-10 animate-pulse pointer-events-none" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center p-2"
                    >
                      <Image
                        src={cert.badgeImage}
                        alt={cert.title}
                        width={240}
                        height={240}
                        className="object-contain drop-shadow-[0_15px_30px_rgba(150,0,220,0.35)]"
                        priority
                      />
                    </motion.div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 inline-block" />
                      <span>Credencial Verificada Oficial</span>
                    </div>
                  </div>

                  {/* Right: Certification Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          <Award className="w-3.5 h-3.5" />
                          {cert.subtitle}
                        </span>
                        <span className="text-xs uppercase font-mono tracking-widest text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {cert.description}
                    </p>

                    {/* Competências / Tags */}
                    <div className="space-y-2.5">
                      <p className="text-xs uppercase font-mono tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        Habilidades Comprovadas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="tech"
                            className="bg-muted/40 hover:bg-muted/70 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      {cert.credlyUrl && (
                        <Button asChild className="rounded-full shadow-md group">
                          <a
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <span>Ver no Credly</span>
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </Button>
                      )}
                      {cert.skillsBuilderUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-border/80 hover:bg-accent"
                        >
                          <a
                            href={cert.skillsBuilderUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <span>Detalhes da Avaliação AWS</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots if multiple */}
        {hasMultiple && (
          <div className="mt-8 flex justify-center items-center gap-2">
            {certifications.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Ir para certificação ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
