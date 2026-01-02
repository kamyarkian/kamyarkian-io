<<<<<<< HEAD
export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-6">
      <h1 className="text-5xl font-bold">Kamyar Kian</h1>
    </div>
=======
import Image from "next/image";
import { dailySignal } from "@/app/data/signal-data";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-start text-left overflow-hidden bg-black px-8 md:px-24">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/sanctuary.webp" 
          alt="Panahgah Sanctuary" 
          fill 
          className="object-cover opacity-60" 
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* 2. TEXT CONTENT (Aligned Left) */}
      <div className="relative z-10 max-w-2xl mt-20">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-widest uppercase font-serif">
          System <br /> Online
        </h1>

        <div className="h-1 w-24 bg-amber-500 mb-8"></div>

        <p className="text-lg md:text-2xl text-cyan-100 font-light leading-relaxed mb-10 opacity-90">
          The Lighthouse Theory: <br />
          You don't need to chase people to be seen.
          <br />
          <span className="text-white font-medium">Stand where you are and shine.</span>
        </p>

        {/* 3. DAILY SIGNAL (Dynamic from Data) */}
        <div className="border-l-2 border-amber-500 bg-black/40 p-6 backdrop-blur-sm rounded-r-lg max-w-md">
          <p className="font-mono text-xs text-amber-300 mb-2 tracking-widest">
            :: DAILY SIGNAL ::
          </p>
          <p className="text-white italic text-lg">
            "{dailySignal.wisdom}"
          </p>
        </div>

      </div>
    </section>
>>>>>>> 0500c07 (feat(branding): add Lighthouse K favicon and layout updates)
  );
}