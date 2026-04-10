"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-elem",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#0b5cc5] blur-[150px]"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <p className="hero-elem text-sm md:text-base font-semibold tracking-wider text-[#0b5cc5] uppercase mb-4">
          Impulsamos el crecimiento de tu negocio
        </p>
        <h1 className="hero-elem text-5xl md:text-7xl font-bold tracking-tight text-[#0f0f0f] leading-[1.1] mb-8 max-w-4xl">
          Agencia de Diseño y Desarrollo Web en <span className="text-[#0b5cc5]">Costa Rica</span>
        </h1>
        <p className="hero-elem text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Profesionales en diseño de sitios web para empresas, diseñadores UX/UI y SEO. Somos la agencia que construye marcas y negocios digitales.
        </p>
        <div className="hero-elem flex flex-col sm:flex-row gap-4">
          <Link 
            href="#contacto"
            className="bg-[#0b5cc5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#094ca3] transition-colors shadow-xl shadow-[#0b5cc5]/30 flex items-center justify-center gap-2 group"
          >
            Agendar consulta gratuita
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
            href="#servicios"
            className="bg-white text-[#0f0f0f] border border-[#eaeaea] px-8 py-4 rounded-full font-semibold hover:border-[#0f0f0f] hover:bg-neutral-50 transition-colors flex items-center justify-center"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
