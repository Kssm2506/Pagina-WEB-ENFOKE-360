"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Lightbulb, Search, Smartphone, ShoppingCart, BarChart } from "lucide-react";

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
    <section ref={containerRef} id="servicios" className="py-24 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h4 className="text-[#0b5cc5] font-semibold tracking-widest uppercase text-sm mb-4">Nuestros Servicios</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Estrategias digitales para hacer crecer tu negocio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="service-card bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-[#0b5cc5] transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-[#0b5cc5]/10 rounded-xl flex items-center justify-center text-[#0b5cc5] mb-6 group-hover:scale-110 transition-transform">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
