"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background gradient entrance effect (fades in and scales slightly down)
      gsap.fromTo(
        ".hero-glow",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );
      
      // Elements entrance
      gsap.fromTo(
        ".hero-elem",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center pt-40 pb-20 overflow-hidden bg-[#0f0f0f]">
      {/* Gradient Entrance Effect Background */}
      <div className="hero-glow absolute inset-0 bg-[linear-gradient(160deg,#0b5cc5_0%,#0f0f0f_50%)] pointer-events-none z-0" />
      
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center mt-10 md:mt-16">
        {/* Pill */}
        <div className="hero-elem mb-6 inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
          <span className="text-white text-sm font-bold tracking-wide">
            Impulsamos el crecimiento de tu negocio
          </span>
        </div>

        {/* Heading */}
        <h1 className="hero-elem text-4xl md:text-5xl lg:text-[64px] leading-[1.05] font-bold text-white mb-6 tracking-tight">
          Impulsa tu negocio con<br />diseño web y marketing<br />digital
        </h1>

        {/* Subheading */}
        <p className="hero-elem text-base md:text-[20px] text-gray-300 max-w-3xl mb-12 leading-relaxed font-normal">
          Construimos presencia digital profesional para empresas y emprendedores.<br className="hidden md:block" />
          Diseñamos páginas web optimizadas, gestionamos publicidad en Meta y Google Ads,<br className="hidden md:block" />
          SEO y redes sociales para atraer clientes reales y escalar tu negocio.
        </p>

        {/* Buttons */}
        <div className="hero-elem flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="#contacto"
            className="bg-gradient-to-r from-[#0b5cc5] to-[#0a4bb0] text-white px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(11,92,197,0.3)] hover:shadow-[0_0_40px_rgba(11,92,197,0.5)]"
          >
            Agendar consulta gratuita
          </Link>
          <Link 
            href="#servicios"
            className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-white hover:text-black transition-all"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
