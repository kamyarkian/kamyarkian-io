import { signals } from '@/data/signals';
import SignalCard from '@/components/SignalCard';

export default function SignalsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Signals <span className="text-zinc-500">&</span> Noise.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Decoding the patterns hidden within complex systems. 
            A collection of thoughts on Agentic AI, Civic Tech, and Market Dynamics.
          </p>
        </div>

        {/* Grid Section - Connected to Real Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))}
        </div>

      </div>
    </div>
  );
}
