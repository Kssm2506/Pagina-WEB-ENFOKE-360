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
      // Parallax effect on the image container for depth
      gsap.fromTo(
        ".about-image-wrapper",
        { y: 100 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );

      // Elements entrance
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
    <section ref={containerRef} id="nosotros" className="pt-12 pb-24 md:py-24 relative bg-[#0f0f0f] z-10">
      
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Image Content */}
        <div className="about-elem relative pb-8 md:pb-0">
          <div className="about-image-wrapper relative p-6 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
             {/* Glow back */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#0b5cc5] rounded-full blur-[100px] opacity-20 pointer-events-none" />
             
             <div className="relative aspect-[4/3] rounded-[1.5rem] bg-[#1a1a1a] overflow-hidden group border border-white/10">
              {/* Overlay tint */}
               <div className="absolute inset-0 bg-[#0b5cc5]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                 alt="Equipo trabajando" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
               />
             </div>
          </div>
        </div>
        
        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="about-elem w-fit inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-5">
            <span className="text-xs font-light tracking-normal text-white">Quiénes somos</span>
          </div>
          
          <h2 className="about-elem text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Somos la agencia que construye marcas y negocios digitales
          </h2>
          
          <p className="about-elem text-gray-400 mb-6 leading-relaxed font-light text-sm md:text-base pr-4">
            En Enfoke 360 ayudamos a empresas y emprendedores a construir una presencia digital sólida y rentable. 
            Diseñamos páginas web profesionales, posicionamos negocios en Google con SEO, gestionamos publicidad 
            en Meta y Google Ads y potenciamos redes sociales para atraer clientes reales y cerrar más ventas.
          </p>
          
          <p className="about-elem text-gray-400 mb-10 leading-relaxed font-light text-sm md:text-base pr-4">
            Nuestro enfoque se basa en resultados medibles, estrategias personalizadas y acompañamiento 
            continuo para que tu negocio crezca mes a mes.
          </p>
          
          <div className="about-elem mt-2">
            <Link 
              href="#contacto"
              className="cta-anim inline-block text-white px-8 py-3.5 rounded-full text-sm font-light tracking-wide hover:opacity-90 shadow-[0_0_20px_rgba(11,92,197,0.3)] hover:shadow-[0_0_30px_rgba(11,92,197,0.5)]"
            >
              Agendar consulta gratuita
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
