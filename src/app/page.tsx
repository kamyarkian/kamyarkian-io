import Link from "next/link";

// DATA: Projects with REAL Links
const projects = [
  {
    slug: "toronto-shelter",
    title: "Toronto Shelter Capacity Audit",
    description: "A quantitative analysis of Toronto's shelter system using Python & Open Data. Surfacing critical saturation points across wards.",
    tags: ["PYTHON", "PANDAS", "MATPLOTLIB", "OPEN DATA API"],
    link: "https://github.com/kamyarkian/toronto-shelter-hcds-analysis"
  },
  {
    slug: "cognitive-agent",
    title: "Agentic AI: Beyond Chatbots",
    description: "A human-centered blueprint for building AI teammates. Why we need to stop building chatbots and start designing cognitive state agents.",
    tags: ["LANGGRAPH", "AI STRATEGY", "HUMAN-CENTERED AI"],
    link: "https://medium.com/@kamyarkian/stop-building-chatbots-start-building-teammates-a-human-centered-blueprint-for-agentic-ai-d7a02a977a7d"
  },
  {
    slug: "wildfire-predictor",
    title: "The Price of Smoke",
    description: "Why climate algorithms need economic empathy. A predictive model connecting wildfire risk signals with real-estate market behaviour.",
    tags: ["PREDICTIVE MODELING", "DATA ETHICS", "ECONOMICS"],
    link: "https://medium.com/@kamyarkian/the-price-of-smoke-why-climate-algorithms-need-economic-empathy-fed33502fbb9"
  },
];

// DATA: Signals (Linked to your Medium Profile for now)
const signals = [
  { 
    slug: "ai-gov", 
    date: "2026-01-10", 
    title: "Toronto AI Governance – 2026", 
    desc: "Summary of emerging AI governance expectations in Toronto and Ontario.",
    link: "https://medium.com/@kamyarkian"
  },
  { 
    slug: "nyc-agentic", 
    date: "2026-01-05", 
    title: "NYC Agentic Workflows in Finance", 
    desc: "How New York trading desks are adopting agentic AI workflows.",
    link: "https://medium.com/@kamyarkian"
  },
  { 
    slug: "health-data", 
    date: "2026-01-02", 
    title: "Ontario Health Data Standards", 
    desc: "Evolving standards for privacy-preserving analytics on health data.",
    link: "https://medium.com/@kamyarkian"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-0 px-6 md:px-12 max-w-7xl mx-auto flex flex-col">
      
      {/* HERO SECTION (PERFECTLY BALANCED) */}
      <section className="py-24 space-y-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono uppercase tracking-widest text-brand">
          <span className="w-3 h-3 rounded-full bg-brand animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
          Human-Centered Data Science • 2026
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-5xl leading-tight text-white">
          Building <span className="text-firoozei">agentic</span>, <span className="text-firoozei">ethical</span>, and <span className="text-firoozei">market-ready</span> AI systems.
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
          Kamyar designs and ships production-grade data products that blend robust Python engineering, cognitive science, and North American market strategy.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <button className="px-8 py-4 bg-firoozei text-black font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,212,197,0.3)]">
            View Flagship Projects
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full hover:border-brand hover:text-brand transition-colors text-sm font-mono tracking-widest uppercase">
            Market & Policy Signals
          </button>
        </div>
      </section>

      {/* SELECTED WORKS (LINKED TO REAL PROJECTS) */}
      <section id="works" className="py-20 border-t border-white/5">
        <h3 className="text-xs font-mono text-gray-500 tracking-[0.2em] mb-12 uppercase">Selected Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <a 
              key={i} 
              href={p.link}
              target="_blank" // Opens in new tab
              className="group block border border-white/10 bg-surface p-8 rounded-2xl hover:border-firoozei/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,197,0.05)] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-brand uppercase tracking-widest border border-brand/20 px-2 py-1 rounded">
                  Project {i + 1}
                </span>
                <span className="text-gray-600 group-hover:text-firoozei transition transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-firoozei transition">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LATEST SIGNALS (LINKED) */}
      <section id="signals" className="py-20 border-t border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-xs font-mono text-gray-500 tracking-[0.2em] uppercase">Latest Signals</h3>
          <a href="https://medium.com/@kamyarkian" target="_blank" className="text-xs font-mono text-gray-500 hover:text-firoozei transition border-b border-transparent hover:border-firoozei pb-1">View all →</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map((s, i) => (
            <a 
              key={i} 
              href={s.link} 
              target="_blank" 
              className="block border border-white/5 bg-surface/50 p-6 rounded-xl hover:bg-surface transition cursor-pointer group hover:border-firoozei/30"
            >
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-4">
                <span>{s.date}</span>
                <span className="text-brand opacity-0 group-hover:opacity-100 transition translate-x-2 group-hover:translate-x-0">READ SIGNAL →</span>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-firoozei transition">{s.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION (REFINED) */}
      <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-surface/30">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-widest uppercase text-brand drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            Ready to Collaborate?
          </h2>
          
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Connect with me to discuss Data Strategy, AI Governance, or new opportunities.
          </p>
          
          {/* BUTTON GROUP */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://linkedin.com/in/kamyarkian" target="_blank" className="px-6 py-3 border border-firoozei text-firoozei rounded-full text-sm font-mono tracking-widest hover:bg-firoozei hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(0,212,197,0.1)] hover:shadow-[0_0_20px_rgba(0,212,197,0.4)]">LINKEDIN</a>
            <a href="https://github.com/kamyarkian" target="_blank" className="px-6 py-3 border border-firoozei text-firoozei rounded-full text-sm font-mono tracking-widest hover:bg-firoozei hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(0,212,197,0.1)] hover:shadow-[0_0_20px_rgba(0,212,197,0.4)]">GITHUB</a>
            <a href="https://medium.com/@kamyarkian" target="_blank" className="px-6 py-3 border border-firoozei text-firoozei rounded-full text-sm font-mono tracking-widest hover:bg-firoozei hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(0,212,197,0.1)] hover:shadow-[0_0_20px_rgba(0,212,197,0.4)]">MEDIUM</a>
            <a href="mailto:me@kamyarkian.ca" className="px-6 py-3 border border-firoozei text-firoozei rounded-full text-sm font-mono tracking-widest hover:bg-firoozei hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(0,212,197,0.1)] hover:shadow-[0_0_20px_rgba(0,212,197,0.4)]">EMAIL ME</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-xs text-gray-600 font-mono">
          © 2026 Kamyar Kian. Engineered in Toronto.
        </p>
      </footer>

    </main>
  );
}