"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".floating-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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
    <section id="contacto" ref={containerRef} className="pt-24 pb-48 relative bg-[#0f0f0f]">
      <div className="max-w-[1300px] mx-auto px-6 relative">
        
        {/* Background Image Banner */}
        <div className="relative w-full h-[450px] md:h-[550px] rounded-[30px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80" 
            alt="Reunión de estrategia digital" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          {/* Gradient Overlay to ensure dark text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Floating Form Card */}
        <div className="floating-form relative md:absolute top-[-80px] md:top-auto md:bottom-[-100px] left-0 md:left-16 w-full md:max-w-[500px] bg-[#131313]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            ¿Listo para llevar tu marca al siguiente nivel?
          </h2>
          <p className="text-gray-400 text-[14px] leading-relaxed font-light mb-8">
            Diseñamos páginas súper optimizadas y gestionamos pauta en Meta y Google Ads. Déjanos tus datos y armaremos un plan.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[13px] font-light text-gray-400 tracking-wide">Nombre y apellido</label>
              <input 
                type="text" 
                placeholder="Ej. Juan Pérez" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0b5cc5] focus:bg-white/[0.05] transition-colors"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[13px] font-light text-gray-400 tracking-wide">Correo electrónico</label>
              <input 
                type="email" 
                placeholder="hola@empresa.com" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0b5cc5] focus:bg-white/[0.05] transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-light text-gray-400 tracking-wide">¿Cómo podemos ayudarte?</label>
              <textarea 
                rows={3}
                placeholder="Cuéntanos un poco sobre tu negocio..." 
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0b5cc5] focus:bg-white/[0.05] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="cta-anim w-full mt-4 text-white py-4 rounded-xl shadow-[0_0_20px_rgba(11,92,197,0.4)]"
            >
              Contactar a un experto
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
