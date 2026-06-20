"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Phone, Check, Copy } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { links } from "@/lib/config";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available — the email is still selectable as text
    }
  };

  const contactRows = [
    {
      icon: Mail,
      label: "Email",
      value: links.email,
      action: copyEmail,
      actionIcon: copied ? Check : Copy,
      actionLabel: copied ? "Copied" : "Copy",
      href: `mailto:${links.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: links.phone,
      href: `tel:${links.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: links.github.replace("https://", ""),
      href: links.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: links.linkedin.replace("https://", ""),
      href: links.linkedin,
      external: true,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <RevealOnScroll>
        <span className="font-mono text-xs uppercase tracking-wider text-teal">Get in touch</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ash mt-4 mb-4 text-balance">Contact</h1>
        <p className="text-ash-muted max-w-xl leading-relaxed mb-14">
          Open to internships, collaborations on agentic and retrieval systems, and competitive
          programming teams. The fastest way to reach me is email.
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="glass-panel rounded-2xl overflow-hidden">
          {contactRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center gap-4 px-6 py-5 ${i !== 0 ? "border-t border-glass-border" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-dim border border-teal-line/40 flex items-center justify-center shrink-0">
                <row.icon size={16} className="text-teal" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono uppercase tracking-wider text-ash-faint">{row.label}</div>
                <a
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  rel={row.external ? "noreferrer" : undefined}
                  className="text-sm text-ash hover:text-teal transition-colors break-all"
                >
                  {row.value}
                </a>
              </div>
              {row.action && (
                <button
                  onClick={row.action}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ash-muted hover:text-teal transition-colors shrink-0 px-3 py-1.5 rounded-lg border border-glass-border"
                >
                  <row.actionIcon size={13} /> {row.actionLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
