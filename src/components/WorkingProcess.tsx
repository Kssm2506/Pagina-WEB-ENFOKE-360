"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SlBubble,
  SlScreenDesktop,
  SlLayers,
  SlChart
} from "react-icons/sl";
import Link from "next/link";

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
    { title: "Consulta gratuita", desc: "Hablamos sobre tu negocio, necesidades y objetivos para definir la mejor estrategia de crecimiento digital.", btn: "AGENDAR AHORA", icon: SlBubble },
    { title: "Estrategia y propuesta", desc: "Creamos un plan personalizado que incluye web, SEO, publicidad y redes sociales según lo que tu negocio necesita para atraer clientes.", btn: "VER SERVICIOS", icon: SlScreenDesktop },
    { title: "Implementación y resultados", desc: "Construimos y ejecutamos todo: diseño web, campañas publicitarias, SEO y contenido. Tú ves los resultados en ventas y clientes.", btn: "SOLICITAR COTIZACIÓN", icon: SlLayers },
    { title: "Optimización continua", desc: "Analizamos métricas mensuales y optimizamos para mejorar resultados, reducir costos y escalar tu negocio.", btn: "MÁS INFORMACIÓN", icon: SlChart }
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-[#0f0f0f]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h4 className="text-[#0b5cc5] font-bold tracking-[0.15em] uppercase text-xs mb-4">CÓMO TRABAJAMOS</h4>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Comienza a atraer clientes en internet en solo 4 pasos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className="process-step flex flex-col items-center text-center group h-full relative border-b border-white/10 md:border-b-0 pb-10 md:pb-0 mb-4 md:mb-0"
            >
              {/* Subtle line separator mimicking the screenshot (Desktop vertical) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-16px] md:right-[-12px] xl:right-[-16px] top-[10%] w-[1px] h-[80%] bg-white/30"></div>
              )}
              
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0b5cc5] to-[#08428c] flex items-center justify-center text-white mb-6 shadow-[0_4px_15px_rgba(11,92,197,0.4)] group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-7 h-7" strokeWidth={0.5} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 px-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-[13px] mb-8 flex-1 px-4">{s.desc}</p>
              
              {/* Individual Button */}
              <div className="mt-auto pb-4">
                <Link 
                  href={i === 1 ? "#servicios" : "#contacto"} 
                  className="inline-block text-[11px] font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#0b5cc5] to-[#08428c] hover:opacity-90 transition-opacity px-6 py-3 rounded-full shadow-[0_0_15px_rgba(11,92,197,0.3)]"
                >
                  {s.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
