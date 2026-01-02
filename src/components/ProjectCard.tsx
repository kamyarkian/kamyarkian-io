import { Project } from '@/types';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-zinc-700 transition-all duration-500">
      
      {/* Header: Stats & Link */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2">
          {project.stats?.map((stat, i) => (
             <span key={i} className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
               {stat.label}: {stat.value}
             </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      
      {/* Title & Description */}
      <h3 className="text-2xl font-bold mb-3 text-zinc-100">{project.title}</h3>
      <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
        {project.description}
      </p>
      
      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-800 rounded-full bg-zinc-900">
            {t}
          </span>
        ))}
      </div>

      {/* Footer: Github Link */}
      <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
         {project.github && (
           <a 
             href={project.github} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-wider"
           >
             <Github size={14} /> Source Code
           </a>
         )}
      </div>
    </div>
  );
}
