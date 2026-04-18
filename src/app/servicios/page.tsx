import { Navbar } from "@/components/Navbar";
import { ServiciosHero } from "@/components/ServiciosHero";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { TrustedBy } from "@/components/TrustedBy";
import { Stats } from "@/components/Stats";
import { Values } from "@/components/Values";
import { Footer } from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <>
      <Footer />

      <main
        className="relative flex-1 flex flex-col bg-[#0f0f0f]"
        style={{ zIndex: 1 }}
      >
        <Navbar />
        <ServiciosHero />

        <div className="relative z-10 bg-[#0f0f0f] -mt-10">
          <div className="h-24 md:h-32" />
          <ServicesAccordion />
        </div>

        <div className="relative z-10 bg-[#0f0f0f] py-24">
          <TrustedBy />
        </div>

        <Stats />
        <Values />
      </main>

      <div
        id="footer-spacer"
        style={{ height: 'var(--footer-h, 300px)', position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
}