import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { SelectedWork } from "@/components/SelectedWork";
import { WhyChoose } from "@/components/WhyChoose";

import { Values } from "@/components/Values";
import { Footer } from "@/components/Footer";

export default function Home() {
  /**
   * EFECTO REVEAL FOOTER (igual a gp-webstudio.com):
   *
   * El footer es position:fixed; bottom:0; z-index:0  → siempre al fondo del viewport
   * El main es position:relative; z-index:1; bg sólido → tapa el footer mientras scrolleas
   * Al terminar el main, hay un gap transparente abajo
   * que tiene exactamente la altura del footer → eso crea el scroll adicional
   * que revela el footer completo al llegar al final.
   *
   * El gap transparente está FUERA del main para que
   * el main no lo cubra con su fondo oscuro.
   */
  return (
    <>
      {/* Footer fixed detrás de todo (z-index 0) */}
      <Footer />

      {/* Main con fondo sólido ENCIMA del footer (z-index 1) */}
      <main
        className="site-grid relative flex-1 flex flex-col bg-[#0f0f0f]"
        style={{ zIndex: 1 }}
      >
        <Navbar />
        <Hero />
        <Expertise />
        <SelectedWork />
        <WhyChoose />
        <Values />
      </main>

      {/*
        Gap transparente FUERA del main — tiene la altura del footer.
        Al estar fuera del main (que tiene bg sólido), este div no tiene
        ningún fondo, por lo que el footer azul de abajo se ve a través.
        
        Esto crea el scroll extra para que el usuario revele el footer completo.
        El z-index: 1 asegura que esté en la misma capa que el main.
      */}
      <div
        id="footer-spacer"
        style={{ height: 'var(--footer-h, 300px)', position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
}
