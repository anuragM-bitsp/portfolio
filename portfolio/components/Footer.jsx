import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/lib/config";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-glass-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-ash-faint">
          {profile.name} — built with Next.js, deployed on Vercel
        </p>
        <div className="flex items-center gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="text-ash-muted hover:text-teal transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ash-muted hover:text-teal transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${links.email}`}
            className="text-ash-muted hover:text-teal transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
