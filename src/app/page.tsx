// src/app/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import { signals } from "@/data/signals";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/20 p-4">
        <div className="text-xs uppercase tracking-[0.25em] text-white/70">
          SYSTEM STATUS: ONLINE
        </div>
        <h1 className="mt-2 text-3xl font-semibold">KAMYAR KIAN</h1>
        <p className="mt-4 max-w-xl text-sm text-white/80">
          Bridging the gap between Algorithm Design and Human Psychology.
          Architecting Agentic AI systems for the 2026 era.
        </p>
        <div className="mt-4">
          <Link
            href="/signals"
            className="inline-flex items-center rounded-sm border border-white px-3 py-1 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
          >
            Read Analysis
          </Link>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="border-b border-white/20 p-4">
        <h2 className="text-sm uppercase tracking-[0.3em] text-white/70">
          Selected Works
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug ?? project.id ?? index}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* LATEST SIGNALS */}
      <section className="border-b border-white/20 p-4">
        <h2 className="text-sm uppercase tracking-[0.3em] text-white/70">
          Latest Signals
        </h2>
        <div className="mt-4 space-y-3">
          {signals.map((signal, index) => (
            <div
              key={signal.slug ?? signal.id ?? index}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              <Link href={`/signals/${signal.slug}`}>{signal.title}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-4 text-xs text-white/60 border-t border-white/20">
        © 2026 Kamyar Kian. Engineered in Toronto.
      </footer>
    </main>
  );
}
