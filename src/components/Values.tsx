"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function Values() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".value-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  return (
    <section ref={containerRef} className="py-20 bg-[#0f0f0f] relative z-20">
      {/* Grid line background overlay with smooth top/bottom fade mask */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" 
        style={{ 
          maskImage: "linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)", 
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)" 
        }}
      />
      
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 w-full">
        
        {/* Left Big Card (Our Value) */}
        <div className="value-card lg:col-span-2 relative rounded-[2rem] overflow-hidden group border border-white/10 min-h-[400px] md:min-h-[500px] flex flex-col justify-center p-8 md:p-12">
          {/* Background Image with animated parallax subtle zoom */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
              alt="Valor de equipo" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-lg">
            <h4 className="text-[#0b5cc5] font-bold tracking-[0.1em] uppercase text-xs mb-4">NUESTRO VALOR</h4>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Estrategias que convierten. Resultados que hacen crecer tu negocio.
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed font-light text-sm md:text-base">
              En Enfoke 360 diseñamos y ejecutamos estrategias digitales enfocadas en resultados reales. Desde diseño web profesional y SEO hasta publicidad en Meta y Google Ads, cada acción está pensada para atraer clientes, impulsar ventas y escalar tu negocio de forma sostenible.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-gradient-to-r from-[#0b5cc5] to-[#0a4bb0] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase hover:opacity-90 transition-all shadow-lg"
            >
              Conoce cómo trabajamos
            </Link>
          </div>
        </div>

        {/* Right Cards Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Vision Card */}
          <div className="value-card flex-1 rounded-[2rem] bg-[#0b5cc5] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
            <h4 className="text-blue-200 font-bold tracking-[0.1em] uppercase text-xs mb-4 relative z-10">NUESTRA VISIÓN</h4>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight relative z-10">
              Liderar la transformación digital de negocios en Estados Unidos y Latinoamérica.
            </h3>
            <p className="text-blue-100/90 text-sm md:text-base leading-relaxed relative z-10">
              Queremos que más empresas aprovechen el poder del marketing digital para crecer, posicionarse y competir con confianza en un mercado cada vez más conectado.
            </p>
          </div>

          {/* Mission Card */}
          <div className="value-card flex-1 rounded-[2rem] bg-[#1a1a1a] border border-white/10 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-[#0b5cc5]/10 transition-colors duration-300"></div>
            <h4 className="text-[#0b5cc5] font-bold tracking-[0.1em] uppercase text-xs mb-4 relative z-10">NUESTRA MISIÓN</h4>
            <h3 className="text-2xl md:text-[28px] font-bold text-white mb-4 leading-tight relative z-10">
              Impulsar el crecimiento de empresas con estrategias digitales efectivas y medibles.
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10">
              Acompañamos a cada cliente con soluciones personalizadas, soporte constante y campañas centradas en resultados: más clientes, más ventas y una presencia digital sólida.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
