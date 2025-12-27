import Hero from "../components/Hero";
import DailySignal from "../components/DailySignal";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#181c22] text-gray-100">
      <Hero />
      <DailySignal />
    </main>
  );
}
