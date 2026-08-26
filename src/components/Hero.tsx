"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = ["NEXA", "orbital", "NORTH", "vertex", "LUMEN"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-elem", { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out", delay: 0.1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="leadup-hero relative overflow-hidden pt-24 md:pt-24">
        <div className="hero-radiance pointer-events-none absolute inset-x-0 bottom-0 h-[42%]" />
        <div className="relative z-10 mx-auto grid min-h-[640px] max-w-[1150px] grid-cols-1 items-center gap-12 px-[10px] pb-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div className="max-w-[650px] pt-8 lg:pt-0">
            <div className="hero-elem mb-9 flex items-center gap-4 text-sm font-medium text-white/90">
              <span>Para empresas</span>
              <span className="relative h-5 w-9 rounded-full bg-white/20"><span className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white" /></span>
              <span className="text-white/55">Para emprendedores</span>
            </div>
            <h1 className="leadup-heading hero-elem max-w-[680px] text-white">
              Impulsamos tu visión y estrategia digital
            </h1>
            <p className="hero-elem mt-6 max-w-[560px]">
              <span className="leadup-description">Convertimos objetivos de negocio en experiencias digitales claras, medibles y listas para crecer.</span>
            </p>
            <div className="hero-elem mt-10 flex flex-wrap items-center gap-6">
              <Link href="#contacto" className="leadup-primary"><p className="leadup-primary-label">Agendar una llamada</p></Link>
              <Link href="#servicios" className="leadup-secondary">Ver servicios <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="hero-elem relative mx-auto w-full max-w-[456px] lg:self-start">
            <div className="relative aspect-[.71] overflow-hidden rounded-[22px] bg-[#061d3b]">
              <Image src="/images/leadup-hero-portrait.png" alt="Especialista de Enfoke 360" fill priority sizes="(max-width: 1024px) 80vw, 456px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082425]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 left-6 right-6 rounded-[18px] border border-white/25 bg-[#061d3b]/80 p-6 text-white shadow-2xl backdrop-blur-md md:-bottom-3 md:left-7 md:right-7">
              <div className="mb-4 flex items-start justify-between gap-4 text-sm font-medium leading-5"><span>Resultados medibles en cada etapa de tu crecimiento.</span><span className="text-[#66c5ff]">↗</span></div>
              <svg viewBox="0 0 360 150" className="h-auto w-full" aria-label="Tendencia de crecimiento">
                <path d="M12 120 C47 115, 54 94, 88 88 S132 74, 166 79 S215 54, 242 48 S285 27, 338 14" fill="none" stroke="white" strokeWidth="2" />
                {[12, 88, 166, 242, 338].map((x, index) => <g key={x}><line x1={x} x2={x} y1={index === 4 ? 14 : [120, 88, 79, 48][index]} y2="140" stroke="white" strokeOpacity=".24" strokeDasharray="4 5" /><circle cx={x} cy={index === 4 ? 14 : [120, 88, 79, 48][index]} r="3.5" fill="white" /></g>)}
              </svg>
              <div className="mt-1 flex justify-between text-xs font-medium text-white/80"><span>Enero</span><span>Abril</span><span>Julio</span><span>Octubre</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-strip relative z-10">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-x-12 gap-y-7 px-6 py-12 text-[#59616b] md:justify-between">
          {brands.map((brand, index) => <span key={brand} className={`brand-mark brand-mark-${index}`}>{brand}</span>)}
        </div>
      </section>

      <section className="scaling-quote">
        <div className="mx-auto max-w-[620px] px-6 py-28 md:py-36">
          <Image src="/images/testimonial-checks.png" alt="" width={30} height={23} className="mb-7 h-[23px] w-[30px] opacity-90" />
          <h6 className="scaling-quote-text">
            Hacer crecer un negocio no se trata solo de trabajar más: se trata de construir los sistemas correctos para escalar con confianza.
          </h6>
          <div className="mt-8 flex items-center gap-3">
            <p className="scaling-quote-author">Enfoke 360</p>
            <span className="rounded-full bg-[#dffbf6] px-3 py-1 text-xs font-medium text-[#165d56]">Estrategia digital</span>
          </div>
        </div>
      </section>
    </>
  );
}
