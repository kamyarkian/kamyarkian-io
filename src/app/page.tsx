import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION (Includes the Daily Signal inside it) */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />
      
      {/* Future sections like Contact or Projects will go here */}
    </main>
  );
}