// src/app/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import { signals } from "@/data/signals";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* DEBUG MARKER */}
      <h1 className="py-8 text-center text-4xl font-bold text-red-500">
        TEST KAMYAR 123
      </h1>

      {/* SIMPLE PROJECT LIST */}
      <section className="mx-auto mb-8 max-w-4xl px-4">
        <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/70">
          Projects
        </h2>
        <div className="mt-4 space-y-4">
          {projects.map((project) => (
            <article
              key={project.id ?? project.slug}
              className="rounded-lg border border-white/20 bg-white/5 p-4"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-white/80">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SIMPLE SIGNAL LIST */}
      <section className="mx-auto mb-8 max-w-4xl px-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/70">
            Latest Signals
          </h2>
          <Link
            href="/signals"
            className="text-xs text-white/60 underline underline-offset-4 hover:text-amber-300"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {signals.map((signal) => (
            <div key={signal.id ?? signal.slug}>
              <p className="text-[11px] text-white/60">
                {signal.date ?? "::2026-01-01"}
              </p>
              <p className="text-sm text-white">{signal.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
