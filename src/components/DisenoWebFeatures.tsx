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
      gsap.fromTo(".feature-elem", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const includesLeft = [
    "Diseño web moderno y profesional",
    "Optimización para celulares y tablets (responsive)",
    "Integración con WhatsApp, redes sociales y formularios",
    "Optimización SEO para aparecer en Google"
  ];

  const includesRight = [
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
    "Integración con métodos de pago y reservas (si aplica)"
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0b5cc5] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            ¿Qué incluye nuestro servicio de Diseño Web?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">
            Nuestro servicio de diseño web está enfocado en crear sitios visualmente impactantes, rápidos, seguros y optimizados para generar resultados. No solo diseñamos páginas bonitas; construimos sitios estratégicos pensados para aumentar la confianza del cliente y convertir visitantes en ventas, reservas o contactos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="feature-elem">
              <ul className="space-y-3">
                {includesLeft.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#0b5cc5] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="feature-elem">
              <ul className="space-y-3">
                {includesRight.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#0b5cc5] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Características del servicio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div key={i} className="feature-elem flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#0b5cc5] flex-shrink-0" />
                {item}
              </div>
            ))}
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