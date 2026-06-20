import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import SkillsMatrix from "@/components/SkillsMatrix";
import RevealOnScroll from "@/components/RevealOnScroll";
import { profile, experience, projects, skills, education, achievements } from "@/lib/data";
import { links } from "@/lib/config";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center min-h-[78vh] py-10">
        <div className="animate-fade-up">
          <span className="font-mono text-xs uppercase tracking-wider text-teal">{profile.eyebrow}</span>
          <h1 className="font-display text-5xl sm:text-6xl text-ash mt-4 leading-[1.05] text-balance">
            {profile.name}
          </h1>
          <p className="font-display text-xl text-ash-muted mt-3">{profile.role}</p>
          <p className="text-ash-muted leading-relaxed mt-6 max-w-xl">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-teal text-ink font-medium text-sm px-5 py-3 rounded-xl hover:bg-teal/90 transition-colors"
            >
              View projects <ArrowRight size={15} />
            </Link>
            <a
              href={links.resumeUrl}
              className="inline-flex items-center gap-2 glass-panel glass-panel-hover text-ash font-medium text-sm px-5 py-3 rounded-xl"
            >
              <FileDown size={15} /> Resume
            </a>
          </div>
        </div>

        <div className="h-[360px] sm:h-[460px] lg:h-[520px]">
          <Hero3DCanvas />
        </div>
      </section>

      {/* Live coding stats */}
      <RevealOnScroll>
        <section className="py-12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint">Proof of work — live</h2>
            <Link href="/achievements" className="text-xs font-mono text-teal hover:underline">
              full breakdown →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard source="leetcode" />
            <StatCard source="codeforces" />
            <StatCard source="codechef" />
            <StatCard source="gfg" />
          </div>
        </section>
      </RevealOnScroll>

      {/* Highlight banner */}
      <RevealOnScroll>
        <section className="py-6">
          <div className="glass-panel rounded-2xl px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-amber/30">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber">{achievements[0].detail}</span>
              <h3 className="font-display text-lg text-ash mt-1">{achievements[0].title}</h3>
            </div>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-1.5 text-sm text-ash hover:text-amber transition-colors shrink-0"
            >
              Read more <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* Experience */}
      <RevealOnScroll>
        <section className="py-16">
          <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint mb-8">Experience</h2>
          <Timeline items={experience} />
        </section>
      </RevealOnScroll>

      {/* Education */}
      <RevealOnScroll>
        <section className="py-8">
          <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint mb-6">Education</h2>
          <div className="glass-panel rounded-2xl px-7 py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg text-ash">{education.institution}</h3>
              <span className="text-xs font-mono text-ash-faint">{education.period}</span>
            </div>
            <p className="text-sm text-ash-muted mt-1.5">{education.degree}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="text-xs font-mono text-ash-muted bg-white/5 border border-glass-border rounded-full px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Featured projects */}
      <RevealOnScroll>
        <section className="py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint">Featured work</h2>
            <Link href="/projects" className="text-xs font-mono text-teal hover:underline">
              all projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Skills */}
      <RevealOnScroll>
        <section className="py-16">
          <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint mb-8">Skills</h2>
          <SkillsMatrix skills={skills} />
        </section>
      </RevealOnScroll>
    </div>
  );
}
