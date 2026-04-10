"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Lightbulb, Search, Smartphone, ShoppingCart, BarChart } from "lucide-react";
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
    { title: "Diseño Web Profesional", desc: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes.", icon: Globe },
    { title: "Posicionamiento SEO", desc: "Tu negocio aparecerá en Google cuando tus clientes te están buscando. Tráfico orgánico y ventas.", icon: Search },
    { title: "Publicidad Digital", desc: "Campañas estratégicas en Meta y Google Ads. Nos enfocamos en resultados medibles.", icon: BarChart },
    { title: "Tienda Online", desc: "Tiendas virtuales profesionales y automatizadas para vender en línea 24/7.", icon: ShoppingCart },
    { title: "Gestión de Redes", desc: "Creamos contenido profesional y administramos tus redes sociales para aumentar interacción.", icon: Smartphone },
    { title: "Identidad Visual", desc: "Desarrollamos marcas con identidad visual profesional que conectan con tu público.", icon: Lightbulb }
  ];

  return (
    <section ref={containerRef} id="servicios" className="py-24 relative overflow-hidden bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h4 className="text-[#0b5cc5] font-bold tracking-[0.15em] uppercase text-xs mb-4">Nuestros Servicios</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Estrategias digitales para hacer crecer tu negocio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="service-card relative bg-[#151515] border border-white/5 p-8 rounded-[24px] hover:border-[#0b5cc5]/50 group overflow-hidden transition-all duration-300"
            >
              {/* Subtle grid pattern background */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
              ></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <s.icon size={32} className="text-[#0b5cc5] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-8 font-light min-h-[60px]">{s.desc}</p>
                <Link href="#contacto" className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-[#0b5cc5]/10 border border-[#0b5cc5]/20 px-6 py-2.5 rounded-full hover:bg-[#0b5cc5] transition-colors">
                  VER MÁS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
