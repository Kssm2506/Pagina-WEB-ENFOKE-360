import { Navbar } from "@/components/Navbar";
import { DisenoWebHero } from "@/components/DisenoWebHero";
import { DisenoWebFeatures } from "@/components/DisenoWebFeatures";
import { TrustedBy } from "@/components/TrustedBy";
import { Stats } from "@/components/Stats";
import { WorkingProcess } from "@/components/WorkingProcess";
import { Comparison } from "@/components/Comparison";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function DisenoWebPage() {
  return (
    <>
      <Footer />

      <main
        className="relative flex-1 flex flex-col bg-[#0f0f0f]"
        style={{ zIndex: 1 }}
      >
        <Navbar />
        <DisenoWebHero />

        <div className="relative z-10 bg-[#0f0f0f]">
          <DisenoWebFeatures />
        </div>

        <Comparison />
        
        <WorkingProcess />

        <div className="relative z-10 bg-[#0f0f0f] py-12">
          <TrustedBy />
        </div>

        <Stats />
        
        <Contact />
      </main>

      <div
        id="footer-spacer"
        style={{ height: 'var(--footer-h, 300px)', position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
}