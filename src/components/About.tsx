import SocialDock from "./SocialDock"; // <--- اضافه کردن SocialDock

export default function About() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-12 pb-20">
      
      {/* HEADER SECTION */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Beyond the <span className="text-amber-500">Binary.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Data is not just numbers; it is the footprint of human behavior.
        </p>
      </section>

      {/* MISSION STATEMENT + SOCIAL DOCK */}
      <section className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 space-y-8">
        <div>
          <p className="font-mono text-sm text-amber-500 mb-4">:: MISSION_LOG_2026</p>
          <p className="text-gray-300 leading-7 text-lg">
            I am an independent researcher bridging the gap between <strong className="text-white">Economics</strong>, <strong className="text-white">Technology</strong>, and <strong className="text-white">Depth Psychology</strong>. My mission is to build systems that understand not just <em>what</em> happened, but <em>why</em> it matters.
          </p>
        </div>

        {/* The Social Gateway */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-neutral-500 text-sm font-mono">ESTABLISH UPLINK_</span>
          <SocialDock />
        </div>
      </section>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center hover:border-amber-500/50 transition-colors cursor-crosshair">
          <div className="text-3xl font-bold text-white mb-1">3+</div>
          <div className="text-xs text-neutral-500 font-mono">CORE DISCIPLINES</div>
        </div>
        <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center hover:border-amber-500/50 transition-colors cursor-crosshair">
          <div className="text-3xl font-bold text-white mb-1">∞</div>
          <div className="text-xs text-neutral-500 font-mono">CURIOSITY</div>
        </div>
      </div>

    </main>
  );
}
