"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="contato" className="section-padding">
      <div className="max-w-6xl mx-auto">
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

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/90 to-red-500 text-primary-foreground shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-10 lg:p-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <div className="space-y-5 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/80">
                Vamos conversar
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Entre em contato comigo!
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed max-w-xl">
                Estou aberto a oportunidades, projetos e parcerias. Vamos conversar?
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="secondary" size="lg">
                  <a href="mailto:raphaelxavier.code@gmail.com" className="group">
                    Envie uma mensagem
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-foreground">
                  <a href="#top">Voltar ao topo</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}