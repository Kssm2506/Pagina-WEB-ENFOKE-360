"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    name: "Chicken Frito",
    image: "/images/selected-work-chicken-frito-v2.webp",
    href: "https://chickenfritocr.com",
  },
  {
    name: "Fauna Costa Rica",
    image: "/images/selected-work-fauna.webp",
    href: "https://faunacr.com",
  },
  {
    name: "El Dueño Vende",
    image: "/images/selected-work-el-dueno-vende.webp",
    href: "https://elduenovende.com",
  },
  {
    name: "E&K Soluciones",
    image: "/images/selected-work-eyk.webp",
    href: "https://eyksoluciones.com/",
  },
];

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(".selected-work-intro", { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.fromTo(".selected-work-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".selected-work-grid", start: "top 82%", once: true },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="trabajos-destacados" className="selected-work-section">
      <div className="selected-work-inner mx-auto max-w-[1200px] px-4 py-24 md:px-8 md:py-[120px]">
        <header className="selected-work-intro mx-auto flex max-w-[560px] flex-col items-center text-center">
          <span className="why-kicker">Selected work</span>
          <h2>Proyectos con claridad</h2>
          <p className="leadup-centered-copy">Una colección seleccionada de trabajos de identidad, diseño web y experiencias digitales.</p>
        </header>

        <div className="selected-work-grid mt-[60px] grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              className="selected-work-card"
              href={project.href ?? "#contacto"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
              aria-label={`Ver proyecto ${project.name}`}
            >
              <div className="selected-work-image-wrap"><img src={project.image} alt="" /></div>
              <div className="selected-work-card-content">
                <div className="selected-work-title-window" aria-hidden="true">
                  <div className="selected-work-title-track"><h3>{project.name}</h3><h3>{project.name}</h3></div>
                </div>
                <span className="selected-work-arrow" aria-hidden="true"><HiArrowUpRight /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
