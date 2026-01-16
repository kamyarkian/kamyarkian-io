// src/components/ProjectCard.tsx
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/6 bg-surface/95 px-6 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-md transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-firoozei/45 hover:shadow-[0_26px_80px_rgba(0,212,197,0.5)]">
      {/* Meta row */}
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-muted">
        <span>{project.category ?? "Agentic Systems"}</span>
        {project.stats?.[0]?.label && (
          <span className="text-amber-300/85">
            {project.stats[0].label}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted">
        {project.description}
      </p>

      {/* Tech tags */}
      {project.tech && project.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-firoozei hover:text-amber-300"
          >
            View details
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
