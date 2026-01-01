import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SignalProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export default function SignalCard({ title, excerpt, date, category, slug }: SignalProps) {
  return (
    <Link 
      href={`/signals/${slug}`}
      className="group block p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:bg-neutral-900/80"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
          ::{category.toUpperCase()}
        </span>
        <ArrowUpRight className="text-neutral-600 group-hover:text-amber-500 transition-colors" size={20} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
        {title}
      </h3>
      
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
        {excerpt}
      </p>
      
      <div className="text-xs text-neutral-600 font-mono">
        PUBLISHED: {date}
      </div>
    </Link>
  );
}
