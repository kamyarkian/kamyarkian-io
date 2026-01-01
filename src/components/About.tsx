import SocialDock from "./SocialDock";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function About() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-16 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Beyond the <span className="text-amber-500">Binary.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Data is not just numbers; it is the footprint of human behavior.
        </p>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 space-y-8">
        <div>
          <p className="font-mono text-sm text-amber-500 mb-4">:: MISSION_LOG_2026</p>
          <p className="text-gray-300 leading-7 text-lg">
            I am an independent researcher bridging the gap between <strong className="text-white">Economics</strong>, <strong className="text-white">Technology</strong>, and <strong className="text-white">Depth Psychology</strong>. My mission is to build systems that understand not just <em>what</em> happened, but <em>why</em> it matters.
          </p>
        </div>
        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-neutral-500 text-sm font-mono">ESTABLISH UPLINK_</span>
          <SocialDock />
        </div>
      </section>

      {/* 3. STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center hover:border-amber-500/50 transition-colors cursor-crosshair">
          <div className="text-3xl font-bold text-white mb-1">3+</div>
          <div className="text-xs text-neutral-500 font-mono">CORE DISCIPLINES</div>
        </div>
        <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center hover:border-amber-500/50 transition-colors cursor-crosshair">
          <div className="text-3xl font-bold text-white mb-1">∞</div>
          <div className="text-xs text-neutral-500 font-mono">CURIOSITY</div>
        </div>
      </div>

      {/* 4. SELECTED WORKS (PROJECTS) */}
      <section>
        <div className="flex items-end gap-4 mb-8">
          <h2 className="text-2xl font-bold text-white">Selected Works</h2>
          <div className="h-[1px] bg-neutral-800 flex-grow mb-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
