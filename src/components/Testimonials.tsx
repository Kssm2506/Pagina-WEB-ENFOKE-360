"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    id: 1,
    text: '"Contratar a Enfoke 360 para manejar nuestra publicidad fue un antes y un después. Redujimos costos por lead y aumentamos las ventas significativamente. Definitivamente una inversión que vale la pena."',
    name: "Sofía Hernández",
    company: "Fit & Glow Beauty"
  },
  {
    id: 2,
    text: '"Gracias al trabajo con Enfoke 360, nuestra empresa comenzó a aparecer en Google cuando antes no existíamos. Pasamos de cero contactos orgánicos a recibir cotizaciones todas las semanas."',
    name: "Carlos Méndez",
    company: "Jurado Insurance Agency"
  },
  {
    id: 3,
    text: '"Enfoke 360 elevó por completo nuestra imagen en internet. La página web quedó moderna, rápida y enfocada en conversión. Desde el primer mes comenzamos a recibir más solicitudes de clientes."',
    name: "Laura Gómez",
    company: "Bella Skin Studio"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative bg-[#0f0f0f]">
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-4">
            <span className="text-xs font-light tracking-normal text-white">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {testimonials.map((t, i) => (
            <div 
              key={t.id} 
              className="testimonial-card flex flex-col items-center text-center group h-full relative px-8 md:px-10 pb-12 md:pb-0"
            >
              {/* Vertical line separator (Desktop) */}
              {i < testimonials.length - 1 && (
                <div className="hidden md:block absolute right-0 top-[10%] w-[1px] h-[80%] bg-white/10"></div>
              )}
              
              {/* Bottom line separator (Mobile) */}
              {i < testimonials.length - 1 && (
                <div className="md:hidden absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-white/10"></div>
              )}

              {/* Initial Circle - Icon Style */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0b5cc5] to-[#08428c] flex items-center justify-center text-white mb-8 shadow-[0_4px_15px_rgba(11,92,197,0.3)] group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-bold">{t.name.charAt(0)}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#f59e0b] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 leading-relaxed font-light text-[15px] mb-8 flex-1 italic">
                {t.text}
              </p>

              {/* Attribution */}
              <div className="mt-auto">
                <h4 className="text-white font-bold text-base mb-1">{t.name}</h4>
                <p className="text-[#0b5cc5] text-xs font-light tracking-wide">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
