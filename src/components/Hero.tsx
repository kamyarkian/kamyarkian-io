// src/components/Hero.tsx
import Link from "next/link";

const heroGradient =
  "from-amber-500/90 via-orange-500/80 to-rose-500/80";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 px-4 py-16 sm:px-8 sm:py-20">
      {/* Lantern glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12">
        {/* Badge + K lantern icon */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-[0_0_40px_rgba(251,191,36,0.65)]">
            <span className="text-lg font-black tracking-[0.2em] text-black">
              K
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-emerald-300/80">
            Human‑Centered Data Science • 2026
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            <span className="block text-sm font-medium uppercase tracking-[0.32em] text-emerald-300/80 mb-4">
              Human‑Centered Data Science · 2026
            </span>
            <span className="bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
              Building agentic, ethical,
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-white to-amber-200 bg-clip-text text-transparent">
              and market‑ready AI systems.
            </span>
          </h1>

          <p className="max-w-3xl text-sm text-zinc-200/85 sm:text-base">
            Kamyar designs and ships production‑grade data products that blend
            robust Python engineering, cognitive science, and North American
            market strategy — with a bias toward explainability, safety, and
            real‑world decision impact.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#selected-works"
            className="inline-flex items-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(16,185,129,0.55)] transition hover:bg-emerald-300"
          >
            View flagship projects
          </Link>

          <Link
            href="/signals"
            className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/80 transition hover:border-amber-300 hover:text-amber-200"
          >
            Market & policy signals
          </Link>

          <span className="text-xs text-zinc-400">
            Toronto‑NYC corridor • Agentic AI • Civic & climate tech
          </span>
        </div>
      </div>
    </section>
  );
}
