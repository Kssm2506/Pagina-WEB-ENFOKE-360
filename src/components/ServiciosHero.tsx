"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ServiciosHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".servicios-elem", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-[120px] pb-[80px] md:pt-[240px] md:pb-[140px] overflow-hidden bg-[#0b0b0d] rounded-b-[60px] md:rounded-b-[120px] z-20 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,92,197,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-6 py-20 z-10">
        <h1 className="servicios-elem text-5xl md:text-7xl lg:text-[90px] font-bold mb-6 leading-tight tracking-tighter">Nuestros Servicios</h1>
        <p className="servicios-elem text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          Creamos soluciones digitales integrales para impulsar tu negocio: diseño web, SEO, publicidad y branding.
        </p>
      </div>
    </section>
  );
}
