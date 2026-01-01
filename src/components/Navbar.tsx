import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "ABOUT", href: "/" },
    { name: "SIGNALS", href: "/signals" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="text-white font-bold tracking-[0.2em] text-sm md:text-base hover:text-amber-500 transition-colors"
        >
          KAMYAR.KIAN
        </Link>

        {/* DESKTOP MENU */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
