import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-teal">{project.category}</span>
          <h3 className="font-display text-xl text-ash mt-1.5">{project.name}</h3>
        </div>
        <span className="text-xs font-mono text-ash-faint whitespace-nowrap mt-1">{project.period}</span>
      </div>

      <p className="text-sm text-ash-muted leading-relaxed">{project.summary}</p>

      <ul className="flex flex-col gap-2">
        {project.points.map((point, i) => (
          <li
            key={i}
            className="text-sm text-ash-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ash-faint"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono text-teal bg-teal-dim border border-teal-line/40 rounded-full px-2.5 py-1"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-2 pt-4 border-t border-glass-border">
        <a
          href={project.links?.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ash hover:text-teal transition-colors"
        >
          <ExternalLink size={14} /> Live demo
        </a>
        <a
          href={project.links?.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ash hover:text-teal transition-colors"
        >
          <Github size={14} /> Source
        </a>
      </div>
    </div>
  );
}
