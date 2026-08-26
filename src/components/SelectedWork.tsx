"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  impact: string;
  image: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: "brandora",
    title: "Brandora",
    category: "Branding",
    tags: ["Visual System", "Web Design", "Branding"],
    description: "Rediseño de identidad visual y sitio web corporativo de alto impacto para potenciar el posicionamiento B2B.",
    impact: "+140% tiempo en sitio",
    image: "https://framerusercontent.com/images/ktcimUvwboXOgQi2AvOrS6Bj760.jpg",
  },
  {
    id: "nivora",
    title: "Nivora",
    category: "E-Commerce",
    tags: ["E-Commerce", "UX/UI", "Next.js"],
    description: "Plataforma de comercio electrónico con experiencia de usuario minimalista y checkout de alta conversión.",
    impact: "+85% ventas directas",
    image: "https://framerusercontent.com/images/vYf7Bp88A2oX0r0rBYroXDxsSI.jpg",
  },
  {
    id: "codify",
    title: "Codify",
    category: "SaaS & Apps",
    tags: ["Product Design", "SaaS", "Dashboard"],
    description: "Plataforma analítica para desarrollo de software con monitoreo de datos y métricas en tiempo real.",
    impact: "+210% usuarios activos",
    image: "https://framerusercontent.com/images/nLiypGqmKBGtEZ2OY7irFQiP5U.png",
  },
  {
    id: "neutra",
    title: "Neutra",
    category: "Diseño Web",
    tags: ["Diseño Web", "Arquitectura", "SEO"],
    description: "Experiencia digital editorial para estudio de arquitectura premium con catálogos interactivos 3D.",
    impact: "3x generación de leads",
    image: "https://framerusercontent.com/images/HyuPygjhzSYcqtCkgqgwlcI.jpg",
  },
  {
    id: "snapkit",
    title: "Snapkit",
    category: "SaaS & Apps",
    tags: ["App Móvil", "UI System", "iOS/Android"],
    description: "Sistema de diseño y aplicación móvil multiplataforma para creadores de contenido y estudios digitales.",
    impact: "50K+ descargas",
    image: "https://framerusercontent.com/images/hg1KCy1TvxmM2dGVwS3krViR44.png",
  },
  {
    id: "todofusion",
    title: "Todofusion",
    category: "Diseño Web",
    tags: ["Plataforma B2B", "Automation", "Branding"],
    description: "Ecosistema de automatización corporativa enfocado en reducir fricción en procesos de ventas complejos.",
    impact: "60% ahorro operativo",
    image: "https://framerusercontent.com/images/aqshn4kinOsmEgg1K88qujb0A5M.jpg",
  },
];

const categories = ["Todos", "Diseño Web", "E-Commerce", "Branding", "SaaS & Apps"];

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".selected-work-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".selected-work-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".selected-work-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="trabajos-destacados" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0b5cc5]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="selected-work-header mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0b5cc5] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white uppercase">Selected Work</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Proyectos con claridad y dirección
          </h2>

          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Una colección seleccionada de trabajos de marca, diseño web y producto creados para impulsar marcas modernas con alto impacto.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-lg shadow-white/10 font-semibold"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="selected-work-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="selected-work-card group relative bg-[#131313] border border-white/10 hover:border-[#0b5cc5]/50 rounded-[24px] overflow-hidden transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-black/20 opacity-80" />

                {/* Top Badge Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-gray-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact metric badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0b5cc5]/90 text-white backdrop-blur-md shadow-md">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#0b5cc5] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#0b5cc5] group-hover:border-[#0b5cc5] flex items-center justify-center transition-all duration-300">
                      <HiArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <span>Enfoke 360 / Portfolio</span>
                  <span className="group-hover:text-white transition-colors duration-300">Explorar caso →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/5 hover:scale-105"
          >
            <span>Iniciar un proyecto con nosotros</span>
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
