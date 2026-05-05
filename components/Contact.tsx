"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaXTwitter } from "react-icons/fa6";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/euraphhh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oraphaelxavier/" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/euraphhh" },
  { icon: Mail, label: "E-mail", href: "mailto:raphaelxavier.code@gmail.com" },
];

export function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contato" className="section-padding relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2">04. contato</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Contato</h2>
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="perspective-1000"
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/90 to-red-500 text-primary-foreground shadow-2xl transition-all duration-200 ease-out">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="relative grid gap-10 p-8 sm:p-12 lg:p-16 lg:grid-cols-[1.3fr_0.7fr] items-center"
            >
              <div className="space-y-6 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/80">
                  Vamos conversar
                </p>
                <h3 className="text-3xl sm:text-5xl font-bold leading-tight">
                  Entre em contato comigo!
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed max-w-xl text-lg">
                  Estou aberto a oportunidades, projetos e parcerias. Vamos conversar?
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="secondary" size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                    <a href="mailto:raphaelxavier.code@gmail.com" className="group">
                      Envie uma mensagem
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-foreground">
                    <a href="#top">Voltar ao topo</a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {links.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-6 py-5 text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
                  >
                    <span className="flex items-center gap-3 font-medium">
                      <Icon className="h-5 w-5" />
                      {label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}