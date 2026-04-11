import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WorkingProcess } from "@/components/WorkingProcess";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-[#0f0f0f]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Values />
      <Stats />
      <Services />
      <WorkingProcess />
      <Footer />
    </main>
  );
}
