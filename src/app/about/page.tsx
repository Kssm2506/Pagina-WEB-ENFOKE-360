import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#0f0f0f]">
      <Navbar />
      
      {/* Header padding compensator since Navbar is fixed */}
      <div className="pt-[100px] md:pt-[140px]">
        {/* We can re-use the About component which looks spectacular */}
        <About />
        <Values />
        <TrustedBy />
      </div>

      <Footer />
    </main>
  );
}
