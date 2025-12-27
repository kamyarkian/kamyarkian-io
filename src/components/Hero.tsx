// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/sanctuary.webp" // <--- updated filename
        alt="Concrete sanctuary overlooking a sea of data"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#181c22]/95" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-mono text-3xl md:text-5xl tracking-[0.25em] text-gray-100">
          SYSTEM ONLINE
        </h1>
        <p className="mt-6 max-w-xl font-sans text-sm md:text-base text-gray-300">
          The Lighthouse Theory: You don't need to chase people to be seen. Stand
          where you are and shine.
        </p>
      </div>
    </section>
  );
}
