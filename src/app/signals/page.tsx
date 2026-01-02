// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { signals } from '@/data/signals';
// Temporarily using inline cards to avoid Component import errors
// until we stabilize the build.

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto py-20">
        <h1 className="text-5xl font-bold mb-4">Kamyar Kian</h1>
        <p className="text-xl text-zinc-400 mb-8">
          HCDS Architect. Agentic AI & Civic Tech.
        </p>
        <div className="flex gap-4">
          <Link href="/signals" className="bg-white text-black px-4 py-2 rounded font-bold">
            Read Signals
          </Link>
          <a href="https://github.com/kamyarkian" className="border border-white px-4 py-2 rounded">
            GitHub
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-2">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 border border-zinc-800 rounded bg-zinc-900/50">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-zinc-400 my-2">{project.description}</p>
              <div className="flex gap-2 mt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNALS SECTION */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-2">Recent Signals</h2>
        <div className="grid gap-6">
          {signals.map((signal) => (
            <div key={signal.id} className="p-6 border border-zinc-800 rounded bg-zinc-900/50">
              <h3 className="text-xl font-bold">{signal.title}</h3>
              <p className="text-xs text-zinc-500 mb-2">{signal.date}</p>
              <p className="text-zinc-400">{signal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
