import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Anurag Mohapatra",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <RevealOnScroll>
        <span className="font-mono text-xs uppercase tracking-wider text-teal">Selected work</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ash mt-4 mb-4 text-balance">Projects</h1>
        <p className="text-ash-muted max-w-2xl leading-relaxed mb-14">
          Three projects spanning retrieval-augmented generation, multi-agent reasoning, and
          fine-tuned vision-language models — each built end to end, from data pipeline through
          deployment.
        </p>
      </RevealOnScroll>

      <div className="grid lg:grid-cols-2 gap-6 pb-20">
        {projects.map((p, i) => (
          <RevealOnScroll key={p.slug} delay={i * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard project={p} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
