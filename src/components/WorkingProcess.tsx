"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WorkingProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { title: "Definimos la Estrategia", desc: "Hablamos sobre tu negocio, necesidades y objetivos para definir la mejor estrategia de crecimiento digital." },
    { title: "Creamos un Plan Personalizado", desc: "Diseñamos un plan que incluye web, SEO, publicidad y redes sociales según lo que tu negocio necesita." },
    { title: "Ejecución y Construcción", desc: "Construimos y ejecutamos todo: diseño web, campañas publicitarias, SEO y contenido." },
    { title: "Análisis y Optimización", desc: "Analizamos métricas mensuales y optimizamos para mejorar resultados, reducir costos y escalar tu negocio." }
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h4 className="text-[#0b5cc5] font-bold tracking-[0.15em] uppercase text-xs mb-4">CÓMO TRABAJAMOS</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Comienza a atraer clientes en internet en solo 4 pasos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="process-step relative flex flex-col items-center md:items-start text-center md:text-left group">
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0b5cc5] to-blue-400 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(11,92,197,0.4)] group-hover:scale-110 transition-transform duration-300">
                {i + 1}
              </div>
              
              {/* Connector Line (hidden on small screens, only between items) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-[calc(100%-2rem)] h-[1px] bg-white/10"></div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-4 pr-0 md:pr-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm pr-0 md:pr-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
