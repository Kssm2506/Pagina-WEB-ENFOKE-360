"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function NosotrosHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative pt-[120px] pb-[80px] md:pt-[240px] md:pb-[140px] overflow-hidden bg-[#0b0b0d] rounded-b-[60px] md:rounded-b-[120px] z-20 shadow-2xl"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(11,92,197,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 hero-content text-center">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold mb-8 leading-[1] tracking-tighter">
          Enfoke 360 Agency
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          <span className="highlight-main !text-white !font-medium">Empresas y emprendedores</span> confían en Enfoke 360 para construir su presencia digital, escalar sus ventas y posicionar su marca en el mercado actual.
        </p>
      </div>
    </section>
  );
}
