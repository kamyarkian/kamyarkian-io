import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { signals } from '@/data/signals';
import ProjectCard from '@/components/ProjectCard';
import SignalCard from '@/components/SignalCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 overflow-hidden">
      
      {/* 1. ATMOSPHERE LAYER (Visual Effects) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Warm Amber Glow (Top-Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[120px]" />
        {/* Cool Blue Glow (Bottom-Right) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Minimal Navbar */}
        <nav className="flex justify-between items-center px-6 py-8 container mx-auto max-w-6xl">
             <span className="text-xl font-bold tracking-tighter text-zinc-100">KAMYAR.KIAN</span>
             <Link href="/signals" className="text-sm font-mono text-zinc-400 hover:text-amber-500 transition-colors">
                :: SIGNALS_CHANNEL
             </Link>
        </nav>

        {/* 2. HERO SECTION */}
        <section className="pt-20 pb-32 px-6">
          <div className="container mx-auto max-w-5xl">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-amber-500 text-xs font-mono mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              SYSTEM STATUS: ONLINE
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
              Decoding <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-600">
                Hidden Signals.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
              Bridging the gap between 
              <span className="text-zinc-200"> Algorithm Design</span> and 
              <span className="text-zinc-200"> Human Psychology</span>.
              <br/>
              Architecting Agentic AI systems for the 2026 era.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <a href="https://github.com/kamyarkian" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2">
                <Github size={20} /> GitHub Profile
              </a>
              <Link href="/signals" className="bg-zinc-900/50 border border-zinc-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800/80 transition-all flex items-center gap-2 backdrop-blur-md">
                Read Analysis <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section className="py-24 border-t border-white/5 bg-zinc-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              Selected Works
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SIGNALS SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
             <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-blue-500"></span>
                  Latest Signals
                </h2>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {signals.slice(0, 2).map((signal) => (
                <SignalCard key={signal.id} signal={signal} />
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-sm">
          <p>© 2026 Kamyar Kian. Engineered in Toronto.</p>
        </footer>
      </div>
    </div>
  );
}
