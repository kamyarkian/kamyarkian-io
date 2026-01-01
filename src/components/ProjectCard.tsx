import Link from "next/link";
import { ExternalLink, Code } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  status: string;
}

export default function ProjectCard({ title, description, tech, link, status }: ProjectProps) {
  return (
    <div className="group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300">
      
      {/* STATUS BADGE */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors">
        {status}
      </div>

      <div className="mb-4">
        <Code className="text-neutral-600 group-hover:text-white transition-colors" size={24} />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="text-xs text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-neutral-900">
            {t}
          </span>
        ))}
      </div>

      <Link 
        href={link}
        target="_blank"
        className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-amber-500 transition-colors"
      >
        View Source <ExternalLink size={14} />
      </Link>
    </div>
  );
}
