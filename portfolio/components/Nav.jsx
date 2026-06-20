"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 mt-5">
        <div className="glass-panel rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-glass">
          <Link
            href="/"
            className="font-display text-sm tracking-wide text-ash hover:text-teal transition-colors flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="w-7 h-7 rounded-full bg-teal-dim border border-teal-line flex items-center justify-center text-[11px] font-mono text-teal">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-body transition-colors ${
                    active ? "text-ink" : "text-ash-muted hover:text-ash"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-teal rounded-lg -z-10" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden text-ash p-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="glass-panel mt-2 rounded-2xl px-3 py-3 md:hidden shadow-glass animate-fade-up">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-body ${
                    active ? "bg-teal text-ink" : "text-ash-muted hover:text-ash"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
