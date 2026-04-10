"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-elem",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="nosotros" className="py-24 relative bg-[#0f0f0f] border-t border-white/5 mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="about-elem relative pb-8 md:pb-0">
          <div className="aspect-square md:aspect-[4/5] rounded-[24px] bg-[#1a1a1a] relative overflow-hidden border border-white/10 group">
            {/* Dark/Blue filter over placeholder */}
            <div className="absolute inset-0 bg-[#0b5cc5]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
              alt="Equipo trabajando" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h4 className="about-elem text-[#0b5cc5] font-bold tracking-[0.15em] uppercase text-xs mb-4">Acreditados y Certificados</h4>
          <h2 className="about-elem text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Somos la agencia que construye marcas y negocios digitales
          </h2>
          <p className="about-elem text-gray-400 mb-6 leading-relaxed font-light text-base md:text-lg">
            En Enfoke 360 ayudamos a empresas y emprendedores a construir una presencia digital sólida y rentable. 
            Diseñamos páginas web profesionales, posicionamos negocios en Google con SEO, gestionamos publicidad 
            en Meta y Google Ads y potenciamos redes sociales para atraer clientes reales y cerrar más ventas.
          </p>
          <p className="about-elem text-gray-400 mb-10 leading-relaxed font-light text-base md:text-lg">
            Nuestro enfoque se basa en resultados medibles, estrategias personalizadas y acompañamiento 
            continuo para que tu negocio crezca mes a mes.
          </p>
          <div className="about-elem">
            <Link 
              href="#contacto"
              className="inline-block bg-[#0b5cc5] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#094ca3] transition-colors shadow-[0_0_20px_rgba(11,92,197,0.5)]"
            >
              Agendar consulta gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
