// src/components/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          Human-Centered Data Science · 2026
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Building agentic, ethical, and market-ready AI systems.
        </h1>

        <p className="mt-6 text-base text-slate-300 sm:text-lg">
          Kamyar designs and ships production-grade data products that blend robust Python
          engineering, cognitive science, and North American market strategy.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
          >
            View flagship projects
          </Link>

          <Link
            href="#signals"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Market & policy signals
          </Link>
        </div>
      </div>
    </section>
  );
}
