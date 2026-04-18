"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function DisenoWebFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".feature-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const includes = [
    "Diseño web moderno y profesional",
    "Optimización para celulares y tablets (responsive)",
    "Integración con WhatsApp, redes sociales y formularios",
    "Optimización SEO para aparecer en Google",
    "Alta velocidad de carga y seguridad SSL",
    "Copywriting persuasivo orientado a ventas",
    "Configuración de Google Analytics y Pixel de Meta",
    "Soporte y actualizaciones disponibles"
  ];

  const features = [
    "Sitios 100% personalizados a cada negocio",
    "Diseños premium y visualmente atractivos",
    "Arquitectura web enfocada en conversión",
    "Experiencia de usuario (UX) que aumenta ventas",
    "Integración con métodos de pago y reservas"
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0b5cc5] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            ¿Qué incluye nuestro servicio de Diseño Web?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nuestro servicio de diseño web está enfocado en crear sitios visualmente impactantes, rápidos, seguros y optimizados para generar resultados. No solo diseñamos páginas bonitas; construimos sitios estratégicos pensados para aumentar la confianza del cliente y convertir visitantes en ventas, reservas o contactos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="feature-card bg-[#141414]/60 border border-white/5 rounded-[1.5rem] p-8">
            <h3 className="text-xl font-bold text-white mb-6">Incluye:</h3>
            <ul className="space-y-4">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-[#0b5cc5]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="feature-card bg-[#141414]/60 border border-white/5 rounded-[1.5rem] p-8">
            <h3 className="text-xl font-bold text-white mb-6">Características del servicio:</h3>
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-[#0b5cc5]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="#contacto"
            className="cta-anim inline-block text-white px-8 py-4 rounded-full text-base font-light bg-gradient-to-r from-[#0b5cc5] to-[#3b82f6] hover:opacity-90 shadow-[0_0_30px_rgba(11,92,197,0.3)]"
          >
            Agendar consulta gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}