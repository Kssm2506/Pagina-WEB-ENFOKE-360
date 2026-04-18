"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function DisenoWebHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".diseno-hero-elem", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-[80px] pb-[20px] md:pt-[140px] md:pb-[60px] overflow-hidden bg-[#0b0b0d] rounded-b-[60px] md:rounded-b-[120px] z-20 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,92,197,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="diseno-hero-elem inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-5">
              <span className="text-xs font-light tracking-normal text-white">Agencia de diseño web profesional</span>
            </div>
            
            <h1 className="diseno-hero-elem text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Diseño web profesional optimizado para atraer clientes y aumentar tus ventas
            </h1>
            
            <p className="diseno-hero-elem text-gray-400 mb-8 leading-relaxed text-base md:text-lg">
              Diseño web profesional adaptado a tu marca y a los objetivos de tu negocio. 
              Cada página está optimizada para posicionamiento SEO, velocidad, dispositivos móviles 
              y conversión, garantizando una experiencia visual impactante y orientada a resultados.
            </p>
            
            <div className="diseno-hero-elem">
              <Link 
                href="#contacto"
                className="cta-anim inline-block text-white px-8 py-4 rounded-full text-base font-light bg-gradient-to-r from-[#0b5cc5] to-[#3b82f6] hover:opacity-90 shadow-[0_0_30px_rgba(11,92,197,0.3)]"
              >
                Agendar consulta gratuita
              </Link>
            </div>
          </div>

{/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="diseno-hero-elem relative -mt-10 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#0b5cc5] rounded-full blur-[100px] opacity-30 pointer-events-none" />
              <img 
                src="/diseno.png" 
                alt="Diseño Web Profissional" 
                className="relative w-full max-w-[120%] -ml-[10%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}