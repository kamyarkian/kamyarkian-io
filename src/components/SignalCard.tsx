// src/components/SignalCard.tsx

import type { Signal } from "@/types";

interface SignalCardProps {
  signal: Signal;
}

export default function SignalCard({ signal }: SignalCardProps) {
  return (
    <article className="rounded-md border border-white/20 p-4">
      <div className="text-xs uppercase tracking-[0.25em] text-white/60">
        {signal.category}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{signal.title}</h3>
      <p className="mt-2 text-sm text-white/80">{signal.summary}</p>
    </article>
  );
}
