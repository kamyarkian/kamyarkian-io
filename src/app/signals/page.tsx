import { signals } from "@/data/signals";
import SignalCard from "@/components/SignalCard";

export default function SignalsPage() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto pb-20">
      
      {/* HEADER */}
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Signals <span className="text-amber-500">&</span> Noise.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Decoding the patterns hidden within complex systems. A collection of thoughts on technology, psychology, and market dynamics.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal) => (
          <SignalCard 
            key={signal.id}
            title={signal.title}
            excerpt={signal.excerpt}
            date={signal.date}
            category={signal.category}
            slug={signal.slug}
          />
        ))}
      </div>

    </main>
  );
}
