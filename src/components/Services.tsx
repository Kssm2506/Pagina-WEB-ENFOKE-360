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
  SlEnvolopeLetter,
  SlScreenDesktop,
} from "react-icons/sl";
import Link from "next/link";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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
    { title: "Diseño Web Profesional", desc: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes. Tu negocio tendrá una presencia sólida.", icon: SlGlobe },
    { title: "Posicionamiento SEO", desc: "Tu negocio aparecerá en Google cuando tus clientes te están buscando. Tráfico orgánico, ventas y automatizaciones reales a tu favor.", icon: SlMagnifier },
    { title: "Publicidad en Meta y Google Ads", desc: "Campañas estratégicas en redes. Nos enfocamos en resultados medibles, escalamiento y retorno de inversión altamente positivo.", icon: SlRocket },
    { title: "Tienda Online E-commerce", desc: "Tiendas virtuales profesionales y automatizadas para vender en línea 24/7, con diseño premium y experiencia mejorada.", icon: SlDiamond },
    { title: "Gestión de Redes Sociales", desc: "Creamos contenido profesional y administramos tus redes sociales para aumentar interacción, visibilidad y confianza en tu marca.", icon: SlPeople },
    { title: "Branding y Diseño de Marca", desc: "Desarrollamos marcas con identidad visual profesional que conectan con tu público, generan reconocimiento en tu sector único.", icon: SlBadge }
  ];

  return (
    <section ref={containerRef} id="servicios" className="py-24 relative overflow-hidden bg-[#0f0f0f]">
      {/* Flujo lumínico desde la sección anterior */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] bg-[#0b5cc5] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto relative">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-4">
            <span className="text-xs font-light tracking-normal text-white">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Estrategias digitales para hacer crecer tu negocio</h2>
        </div>
        
        {/* 3 Column Layout (Strict CES match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="service-card group relative bg-[#131313] border border-white/5 rounded-[20px] p-8 md:p-10 flex flex-col hover:border-[#0b5cc5]/40 transition-all duration-300 overflow-hidden h-full"
            >
              {/* Grid Background Overlay with Faded Edges */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" 
                style={{ 
                  maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)", 
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)" 
                }}
              />
              
              {/* Subtle top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b5cc5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col items-start w-full">
                <div className="mb-5 flex items-center justify-start">
                  <s.icon className="w-10 h-10 text-[#0b5cc5] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">{s.title}</h3>
                
                <p className="text-gray-400 leading-relaxed text-sm drop-shadow-sm mb-6 flex-1 font-light pr-2">
                  {s.desc}
                </p>
                
                <div className="mt-auto inline-flex">
                  <Link 
                    href="#contacto" 
                    className="cta-anim inline-block text-[13px] font-light tracking-wide text-white px-5 py-2.5 rounded-full hover:opacity-90"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
