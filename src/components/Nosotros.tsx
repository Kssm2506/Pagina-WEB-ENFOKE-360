"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface NosotrosProps {
  showBadge?: boolean;
}

export function Nosotros({ showBadge = false }: NosotrosProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Elements entrance
      gsap.fromTo(
        ".nosotros-elem",
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
    <section ref={containerRef} id="nosotros" className="pt-12 pb-24 md:py-32 relative bg-[#0f0f0f] z-10">
      
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Image Content */}
        <div className="nosotros-elem relative pb-8 md:pb-0">
          <div className="relative p-6 rounded-[2.5rem] border border-white/5 bg-transparent">
             {/* Glow back */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#0b5cc5] rounded-full blur-[100px] opacity-20 pointer-events-none" />
             
             {/* Circular Badge - Premium Style */}
             {showBadge && (
               <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-32 h-32 md:w-36 md:h-36 z-30 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
                   <defs>
                     <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                   </defs>
                   <circle cx="50" cy="50" r="38" className="fill-[#0b5cc5]/80" />
                   <text className="text-[8px] font-extralight uppercase tracking-[0.25em] fill-white/80">
<textPath xlinkHref="#circlePath">
                        Sobre Nosotros • Premium Services • 
                      </textPath>
                   </text>
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                   </div>
                 </div>
               </div>
             )}

             <div className="relative aspect-[4/3] rounded-[1.5rem] bg-transparent overflow-hidden group border border-white/10">
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
          <div className="nosotros-elem w-fit inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-5">
            <span className="text-xs font-light tracking-normal text-white">Nosotros</span>
          </div>
          
          <h2 className="nosotros-elem text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Somos la agencia que construye marcas y negocios digitales
          </h2>
          
          <p className="nosotros-elem text-gray-400 mb-6 leading-relaxed font-light text-sm md:text-base pr-4">
            En Enfoke 360 ayudamos a empresas y emprendedores a construir una presencia digital sólida y rentable. 
            Diseñamos páginas web profesionales, posicionamos negocios en Google con SEO, gestionamos publicidad 
            en Meta y Google Ads y potenciamos redes sociales para atraer clientes reales y cerrar más ventas.
          </p>
          
          <p className="nosotros-elem text-gray-400 mb-10 leading-relaxed font-light text-sm md:text-base pr-4">
            Nuestro enfoque se basa en resultados medibles, estrategias personalizadas y acompañamiento 
            continuo para que tu negocio crezca mes a mes.
          </p>
          
          <div className="nosotros-elem mt-2">
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
