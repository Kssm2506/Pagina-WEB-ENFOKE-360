"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlGlobe, SlMagnifier, SlRocket, SlDiamond, SlPeople, SlBadge, SlArrowDown } from "react-icons/sl";
import Link from "next/link";

interface IconType {
  [key: string]: React.ComponentType<any>;
}

const icons: IconType = {
  "diseno-web": SlGlobe,
  "tienda-online": SlDiamond,
  "seo": SlMagnifier,
  "redes-sociales": SlPeople,
  "publicidad": SlRocket,
  "branding": SlBadge,
};

const services = [
  {
    id: "diseno-web",
    title: "Diseño Web Profesional",
    shortDesc: "Diseño web optimizado para atraer clientes y aumentar tus ventas.",
    fullDesc: "Agencia de diseño web profesional adaptado a tu marca y a los objetivos de tu negocio. Cada página está optimizada para posicionamiento SEO, velocidad, dispositivos móviles y conversión, garantizando una experiencia visual impactante y orientada a resultados.",
    features: [
      "Optimización para móviles (Responsive)",
      "Arquitectura orientada a conversión",
      "Integración con WhatsApp y redes",
      "Alta velocidad de carga y SSL",
      "Copywriting persuasivo y SEO",
      "Google Analytics y Pixel de Meta"
    ],
    price: "Solicitar cotización"
  },
  {
    id: "tienda-online",
    title: "Tienda Online",
    shortDesc: "Tiendas virtuales profesionales para vender en línea 24/7.",
    fullDesc: "Creamos tiendas virtuales profesionales y automatizadas para vender en línea 24/7, con diseño premium y experiencia de compra optimizada para maximizar ventas.",
    features: [
      "Diseño premium y único",
      "Pasarelas de pago configuradas",
      "Catálogo de productos ilimitado",
      "Optimización para móvil",
      "Panel de administración fácil",
      "Soporte técnico incluido"
    ],
    price: "Desde $1,199"
  },
  {
    id: "seo",
    title: "Posicionamiento SEO",
    shortDesc: "Tu negocio aparecerá en Google cuando tus clientes te buscan.",
    fullDesc: "Tu negocio aparecerá en Google cuando tus clientes te están buscando. Generamos tráfico orgánico, ventas y visibilidad duradera sin pagar por anuncios.",
    features: [
      "Auditoría SEO completa",
      "Optimización técnica",
      "Contenido optimizado",
      "Backlinks de autoridad",
      "Reporte mensual",
      "Google Business Profile"
    ],
    price: "Desde $449/mes"
  },
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    shortDesc: "Contenido profesional para aumentar tu visibilidad y engagement.",
    fullDesc: "Creamos contenido profesional y administramos tus redes sociales para aumentar visibilidad, interacción y confianza en tu marca.",
    features: [
      "Calendario de contenido",
      "Creación de posts",
      "Responder comentarios",
      "Historias y reels",
      "Reporte mensual",
      "Configuración de ads"
    ],
    price: "Desde $299/mes"
  },
  {
    id: "publicidad",
    title: "Publicidad Digital",
    shortDesc: "Campañas en Meta y Google Ads para atraer clientes reales.",
    fullDesc: "Creamos campañas estratégicas en Meta (Facebook/Instagram) y Google Ads para atraer clientes reales y aumentar tus ventas de forma inmediata.",
    features: [
      "Creación de campañas",
      "Audiencias segmentadas",
      "Copy y creatividad",
      "Remarketing",
      "Optimización diaria",
      "Reporte de resultados"
    ],
    price: "Desde $200/mes"
  },
  {
    id: "branding",
    title: "Branding y Diseño de Marca",
    shortDesc: "Identidad visual profesional que conecta con tu público.",
    fullDesc: "Desarrollamos marcas con identidad visual profesional que conectan con tu público y generan reconocimiento único en tu sector.",
    features: [
      "Logotipo personalizado",
      "Paleta de colores",
      "Tipografía de marca",
      "Manual de marca",
      "Assets para redes",
      "Brand board"
    ],
    price: "Desde $399"
  }
];

export function ServicesAccordion() {
  const [openId, setOpenId] = useState("diseno-web");

  return (
    <section className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0b5cc5] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-4">
            <span className="text-xs font-light tracking-normal text-white">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Elige el servicio que necesitas
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            const isOpen = openId === service.id;
            const Icon = icons[service.id];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-white/10 rounded-[1.5rem] bg-[#141414]/60 backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#0b5cc5]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0b5cc5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#0b5cc5] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{service.shortDesc}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                  >
                    <SlArrowDown className="w-4 h-4 text-white" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-white/5">
                        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                              {service.fullDesc}
                            </p>
                            <Link
                              href="#contacto"
                              className="inline-block text-white px-6 py-3 rounded-full text-sm font-light bg-gradient-to-r from-[#0b5cc5] to-[#3b82f6] hover:opacity-90"
                            >
                              Solicitar cotización
                            </Link>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-4">Incluye:</h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b5cc5]" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6 pt-4 border-t border-white/5">
                              <span className="text-white font-medium">{service.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}