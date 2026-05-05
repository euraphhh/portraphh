import { FaXTwitter } from "react-icons/fa6";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/euraphhh", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/oraphaelxavier/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/euraphhh", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-[#131313] border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">
          &copy; 2026 Raphael Xavier. All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}