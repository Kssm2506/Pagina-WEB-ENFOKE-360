"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SlGlobe,
  SlMagnifier,
  SlRocket,
  SlDiamond,
  SlPeople,
  SlBadge,
} from "react-icons/sl";
import Link from "next/link";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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

  const services = [
    { title: "Diseño Web Profesional", desc: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes.", icon: SlGlobe },
    { title: "Posicionamiento SEO", desc: "Tu negocio aparecerá en Google cuando tus clientes te están buscando. Tráfico orgánico y ventas.", icon: SlMagnifier },
    { title: "Publicidad Digital", desc: "Campañas estratégicas en Meta y Google Ads. Nos enfocamos en resultados medibles.", icon: SlRocket },
    { title: "Tienda Online", desc: "Tiendas virtuales profesionales y automatizadas para vender en línea 24/7.", icon: SlDiamond },
    { title: "Gestión de Redes", desc: "Creamos contenido profesional y administramos tus redes sociales para aumentar interacción.", icon: SlPeople },
    { title: "Identidad Visual", desc: "Desarrollamos marcas con identidad visual profesional que conectan con tu público.", icon: SlBadge }
  ];

  return (
    <section ref={containerRef} id="servicios" className="py-24 relative overflow-hidden bg-[#0f0f0f]">
      {/* Ambient Top Glow / Flujo lumínico desde la sección anterior */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] bg-[#0b5cc5] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto relative">
          <h4 className="text-[#0b5cc5] font-bold tracking-[0.15em] uppercase text-xs mb-5 drop-shadow-[0_0_10px_rgba(11,92,197,0.8)]">Nuestros Servicios</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Estrategias digitales para hacer crecer tu negocio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="service-card group p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-[#0b5cc5]/30 transition-colors duration-300 flex flex-col items-start"
            >
              <div className="mb-6">
                <s.icon className="w-8 h-8 text-[#0b5cc5]" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#0b5cc5] transition-colors">{s.title}</h3>
              
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8 pr-4">
                {s.desc}
              </p>
              
              <div className="mt-auto">
                <Link 
                  href="#contacto" 
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors"
                >
                  VER MÁS
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0b5cc5] group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
