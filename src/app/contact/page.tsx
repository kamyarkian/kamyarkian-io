import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
      
      <div className="bg-neutral-900/50 p-12 rounded-3xl border border-neutral-800 max-w-2xl w-full relative overflow-hidden group">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full group-hover:bg-amber-500/30 transition-all duration-700"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Open a Channel.
        </h1>
        
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed relative z-10">
          Whether you have a project in mind, a question about data ethics, or just want to debate the future of AI — I am listening.
        </p>

        <Link 
          href="mailto:contact@kamyarkian.com"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 relative z-10"
        >
          <Mail size={20} />
          Initialize Protocol
          <ArrowRight size={20} />
        </Link>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-600 font-mono relative z-10">
          TORONTO, ON • EST TIMEZONE
        </div>

      </div>

    </main>
  );
}
