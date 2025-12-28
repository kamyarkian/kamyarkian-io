// src/components/DailySignal.tsx
"use client";

import { dailySignal } from "@/app/data/signal-data";

export default function DailySignal() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <div className="border-l-4 border-amber-400 bg-black/40 p-8 backdrop-blur-sm">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300">
          :: DAILY SIGNAL ::
        </h2>

        <div className="mt-6 space-y-4">
          <p className="font-sans text-sm md:text-base text-gray-100 leading-relaxed">
            <span className="font-mono text-amber-300">The Data:</span>{" "}
            {dailySignal.data}
          </p>

          <p className="font-sans text-sm md:text-base text-cyan-200/80 leading-relaxed">
            <span className="font-mono text-amber-300">The Wisdom:</span>{" "}
            {dailySignal.wisdom}
          </p>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Last Updated · {dailySignal.date}
        </p>
      </div>
    </section>
  );
}
