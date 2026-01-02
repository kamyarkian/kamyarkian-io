import { Signal } from '@/types';
import { ArrowUpRight } from 'lucide-react';

// Notice: We are destructuring specific fields from the 'signal' object
export default function SignalCard({ signal }: { signal: Signal }) {
  return (
    <a
      href={signal.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:bg-neutral-800/50"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2 items-center">
          <span className="text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
            ::{signal.date}
          </span>
          {signal.readTime && (
            <span className="text-xs font-mono text-neutral-500">
              {signal.readTime}
            </span>
          )}
        </div>
        <ArrowUpRight className="text-neutral-600 group-hover:text-amber-500 transition-colors" size={20} />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
        {signal.title}
      </h3>
      
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
        {signal.description}
      </p>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {signal.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] uppercase tracking-wider font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded group-hover:border-neutral-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
