import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
      
      {/* 1. THE IMAGE (PANAHGAH) - Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/sanctuary.jpg" 
          alt="Panahgah Sanctuary" 
          fill 
          className="object-cover opacity-40" // opacity-40 makes it dark so text pops
          priority
        />
      </div>

      {/* 2. THE CONTENT - Text Layer (z-10 puts it on top of image) */}
      <div className="relative z-10 px-4 max-w-4xl">
        
        {/* Main Title (Assuming you want one, or just the quote) */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-widest uppercase font-serif">
          System Online
        </h1>

        <p className="mt-6 text-lg md:text-xl text-cyan-100 font-light leading-relaxed">
          The Lighthouse Theory: You don't need to chase people to be seen.
          <br />
          Stand where you are and shine.
        </p>

        {/* 3. DAILY SIGNAL (STATIC MVP) */}
        <div className="mt-12 border-l-2 border-amber-500 bg-black/50 p-6 backdrop-blur-md max-w-lg mx-auto rounded-r-lg">
          <p className="font-mono text-xs text-gray-400 mb-2 tracking-widest">
            :: DAILY SIGNAL ::
          </p>
          <p className="text-white italic text-lg">
            "Wisdom begins in wonder."
          </p>
          <p className="text-amber-400 text-sm mt-2 font-semibold">
            - Socrates
          </p>
        </div>

      </div>
    </section>
  );
}