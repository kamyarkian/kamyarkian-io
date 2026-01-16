import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: The Gradient "K" */}
        <Link href="/" className="group flex items-center gap-2 cursor-pointer">
          {/* The Alchemy K: Gradient from Amber to Firoozei */}
          <span className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-tr from-brand to-firoozei drop-shadow-[0_0_15px_rgba(0,212,197,0.4)]">
            K
          </span>
          <span className="text-sm font-light tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity text-white">
            amyar.Kian
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
          <Link href="#works" className="hover:text-firoozei transition-colors">WORKS</Link>
          <Link href="#signals" className="hover:text-firoozei transition-colors">SIGNALS</Link>
          <Link href="#contact" className="hover:text-firoozei transition-colors">CONTACT</Link>
        </div>

      </div>
    </nav>
  );
}