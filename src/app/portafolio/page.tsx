"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects = [
  {
    name: "Chicken Frito",
    category: "Diseño Web & E-Commerce",
    description: "Plataforma de pedidos en línea y presencia digital para una franquicia gastronómica en crecimiento.",
    image: "/images/selected-work-chicken-frito-v2.webp",
    href: "https://chickenfritocr.com",
  },
  {
    name: "Fauna Costa Rica",
    category: "Desarrollo Web & Identidad",
    description: "Experiencia educativa digital e interactiva dedicada a la divulgación de la fauna de Costa Rica.",
    image: "/images/selected-work-fauna.webp",
    href: "https://faunacr.com",
  },
  {
    name: "El Dueño Vende",
    category: "Plataforma Inmobiliaria",
    description: "Portal de listados y clasificados de bienes raíces que conecta compradores y vendedores directamente.",
    image: "/images/selected-work-el-dueno-vende.webp",
    href: "https://elduenovende.com",
  },
  {
    name: "E&K Soluciones",
    category: "Diseño Corporativo & SEO",
    description: "Sitio web corporativo optimizado para motores de búsqueda para una firma líder en consultoría de negocios.",
    image: "/images/selected-work-eyk.webp",
    href: "https://eyksoluciones.com/",
  },
];

export default function PortafolioPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Hero section elements
      gsap.fromTo(
        ".portfolio-hero-elem",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );

      // Animate Grid cards on scroll
      gsap.fromTo(
        ".portfolio-card-large",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-grid-large",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Footer />

      <main
        ref={sectionRef}
        className="portfolio-page relative flex-1 flex flex-col bg-[#f7f7f8]"
        style={{ zIndex: 1 }}
      >
        <Navbar />

        {/* Hero Section (Dark theme to align the navbar properly at scroll 0) */}
        <section className="relative pt-[120px] pb-[40px] md:pt-[240px] md:pb-[40px] overflow-hidden bg-[#f7f7f8] rounded-b-[60px] md:rounded-b-[120px] z-20">
          <div className="max-w-[1100px] mx-auto px-6 py-10 z-10 text-center">
            <span className="portfolio-hero-elem portfolio-kicker why-kicker border border-[#dedfe2] bg-white text-[#24242a] rounded-full px-4 py-1.5 text-sm font-medium mb-6 inline-block">
              Portafolio
            </span>
            <h1 className="portfolio-hero-elem text-5xl md:text-7xl lg:text-[90px] font-bold mb-6 leading-none tracking-tighter text-[#121218]">
              Portafolio
            </h1>
            <p className="portfolio-hero-elem text-lg md:text-xl text-[#5e5f68] max-w-2xl mx-auto leading-relaxed font-light">
              Proyectos con claridad. Una colección de trabajos de identidad, diseño web y experiencias digitales.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="portfolio-section relative z-10 py-10 md:py-10">
          <div className="mx-auto max-w-[1360px] px-6 md:px-12">
            <div className="portfolio-grid-large">
              {projects.map((project) => (
                <a
                  key={project.name}
                  className="portfolio-card-large group"
                  href={project.href ?? "#contacto"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  aria-label={`Ver proyecto ${project.name}`}
                >
                  <div className="portfolio-image-wrap-large">
                    <img src={project.image} alt={project.name} />
                  </div>
                  
                  <div className="portfolio-card-large-content">
                    {/* Animating Sliding Title */}
                    <div className="portfolio-title-window-large" aria-hidden="true">
                      <div className="portfolio-title-track-large">
                        <h3>{project.name}</h3>
                        <h3>{project.name}</h3>
                      </div>
                    </div>

                    <span className="portfolio-arrow-large" aria-hidden="true">
                      <HiArrowUpRight />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div
        id="footer-spacer"
        style={{ height: 'var(--footer-h, 300px)', position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
}
