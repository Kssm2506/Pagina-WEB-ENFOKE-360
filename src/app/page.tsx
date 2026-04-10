import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-[#0f0f0f]">
      <Navbar />
      <Hero />
    </main>
  );
}
