"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const benefits = [
  { title: "Estrategias claras", description: "Definimos una hoja de ruta digital enfocada en tus objetivos, tu audiencia y oportunidades reales de crecimiento." },
  { title: "Sitios que convierten", description: "Diseñamos experiencias rápidas y profesionales que guían a cada visitante hacia la acción." },
  { title: "Resultados medibles", description: "Conectamos diseño, campañas y análisis para que sepas qué funciona y cómo seguir escalando." },
];

function StrategyVisual() {
  return <div className="relative h-72 overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#edf5ff] to-white">
    <div className="absolute left-7 top-8 h-16 w-16 rounded-2xl border border-[#0b5cc5]/15 bg-white shadow-sm" />
    <div className="absolute left-12 top-[4.2rem] h-2 w-28 rounded-full bg-[#0b5cc5]/15" />
    <div className="absolute left-16 top-[5.4rem] h-2 w-20 rounded-full bg-slate-200" />
    <div className="absolute right-7 top-7 h-24 w-24 rounded-full border-[14px] border-[#0b5cc5]/15" />
    <div className="absolute right-[3.55rem] top-[4.55rem] text-sm font-semibold text-[#0b5cc5]">360°</div>
    <div className="absolute -bottom-9 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-[#0b5cc5]/10 blur-2xl" />
  </div>;
}

function PerformanceVisual() {
  return <div className="relative h-72 overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f5f9ff] to-white px-6 pt-7">
    <div className="absolute inset-x-6 top-7 bottom-7 rounded-xl border border-slate-100 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]" />
    <div className="absolute left-10 top-11 h-2 w-16 rounded-full bg-slate-200" />
    <div className="absolute left-10 top-[3.7rem] h-20 w-[calc(100%-5rem)]"><svg viewBox="0 0 320 90" className="h-full w-full" aria-hidden="true"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#0b5cc5" stopOpacity="0.2" /><stop offset="100%" stopColor="#0b5cc5" stopOpacity="0" /></linearGradient></defs><path d="M0 72 L38 56 L75 65 L111 30 L152 51 L190 39 L230 56 L273 19 L320 35 L320 90 L0 90 Z" fill="url(#area)" /><path d="M0 72 L38 56 L75 65 L111 30 L152 51 L190 39 L230 56 L273 19 L320 35" fill="none" stroke="#0b5cc5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="273" cy="19" r="5" fill="#0b5cc5" /></svg></div>
    <div className="absolute bottom-5 left-10 text-xs font-medium text-slate-400">+42% conversiones</div>
  </div>;
}

function ResultsVisual() {
  return <div className="relative h-72 overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#eef7ff] to-white">
    <div className="absolute left-8 top-9 rounded-lg border border-emerald-100 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 shadow-sm">Campaña activa</div>
    <div className="absolute right-8 top-14 rounded-lg border border-[#0b5cc5]/10 bg-white px-3 py-2 shadow-sm"><div className="mb-1 h-1.5 w-16 rounded-full bg-slate-200" /><div className="h-1.5 w-10 rounded-full bg-[#0b5cc5]/30" /></div>
    <div className="absolute bottom-6 left-1/2 flex w-48 -translate-x-1/2 items-end justify-center gap-2 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">{[35, 56, 45, 76, 67, 88].map((height, index) => <span key={index} className="w-4 rounded-t-sm bg-[#0b5cc5]" style={{ height }} />)}</div>
  </div>;
}

export function Values() {
  const containerRef = useRef<HTMLElement>(null);
  useEffect(() => { gsap.registerPlugin(ScrollTrigger); const ctx = gsap.context(() => { gsap.fromTo(".value-card", { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }); }, containerRef); return () => ctx.revert(); }, []);
  const visuals = [<StrategyVisual key="strategy" />, <PerformanceVisual key="performance" />, <ResultsVisual key="results" />];
  return <section ref={containerRef} className="sevora-benefits relative overflow-hidden py-20 md:py-[84px]">
    <div className="relative z-10 mx-auto max-w-[1152px] px-6"><div className="mx-auto mb-16 max-w-[760px] text-center"><div className="mb-4 inline-flex items-center rounded-full border border-[#dedfe2] bg-white/40 px-3 py-1"><span className="text-sm text-[#24242a]">Beneficios</span></div><h2 className="text-[32px] leading-[1.2] text-[#121218] md:text-[36px] md:leading-[48px]">Descubrí por qué hacemos la diferencia</h2><p className="mx-auto mt-3 max-w-[640px] text-base leading-6 text-[#5e5f68]">Combinamos estrategia, diseño y performance para transformar tu presencia digital en crecimiento real.</p></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">{benefits.map((benefit, index) => <article key={benefit.title} className="value-card group min-h-[432px] overflow-hidden rounded-[12px] border border-[#dedfe2] bg-white transition-transform duration-300 hover:-translate-y-1">{visuals[index]}<div className="p-8"><h3 className="text-[24px] leading-8 text-[#121218]">{benefit.title}</h3><p className="mt-2 text-base leading-6 text-[#5e5f68]">{benefit.description}</p></div></article>)}</div>
    </div>
  </section>;
}
