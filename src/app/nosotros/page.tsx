import { Navbar } from "@/components/Navbar";
import { NosotrosHero } from "@/components/NosotrosHero";
import { TrustedBy } from "@/components/TrustedBy";
import { Nosotros } from "@/components/Nosotros";
import { Comparison } from "@/components/Comparison";
import { Values } from "@/components/Values";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export default function NosotrosPage() {
  return (
    <>
      {/* Footer fixed detrás de todo (z-index 0) */}
      <Footer />

      {/* Main con fondo sólido ENCIMA del footer (z-index 1) */}
      <main
        className="relative flex-1 flex flex-col bg-[#0f0f0f]"
        style={{ zIndex: 1 }}
      >
        <Navbar />
        <NosotrosHero />

        <div className="relative z-10 bg-[#0f0f0f] -mt-20">
          <Nosotros showBadge={true} />
          <Comparison />
        </div>

        <div className="relative z-10 bg-[#0f0f0f] py-24">
          <TrustedBy />
        </div>

        <Stats />
        <Values />
      </main>

      {/* Gap transparente para el reveal */}
      <div
        id="footer-spacer"
        style={{ height: 'var(--footer-h, 300px)', position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
}
