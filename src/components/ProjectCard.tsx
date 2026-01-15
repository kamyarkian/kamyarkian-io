// src/components/ProjectCard.tsx

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-md border border-white/20 p-4">
      <div className="text-xs uppercase tracking-[0.25em] text-white/60">
        {project.category}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-white/80">{project.description}</p>
    </article>
  );
}
