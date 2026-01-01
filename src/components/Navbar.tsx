import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/30 border-b border-white/10">
      
      {/* LOGO / BRAND */}
      <div className="text-xl font-bold tracking-[0.2em] text-white uppercase">
        Kamyar<span className="text-amber-500">.</span>Kian
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex space-x-8">
        <NavLink href="/" label="Home" />
        <NavLink href="#about" label="About" />
        <NavLink href="#signals" label="Signals" />
        <NavLink href="#contact" label="Contact" />
      </div>

      {/* MOBILE MENU ICON (Placeholder) */}
      <div className="md:hidden text-white cursor-pointer">
        <span className="text-2xl">☰</span>
      </div>

    </nav>
  );
}

// Helper Component for Links
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-gray-300 hover:text-white hover:text-amber-400 transition-colors tracking-wide uppercase"
    >
      {label}
    </Link>
  );
}