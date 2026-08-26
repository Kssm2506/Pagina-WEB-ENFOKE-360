"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertise = [
  {
    title: "Maximizá tus oportunidades de crecimiento",
    text: "Analizamos tus canales digitales para enfocar cada inversión donde puede generar mayor impacto.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Optimizá la experiencia de tu negocio",
    text: "Diseñamos recorridos claros que conectan tu propuesta de valor con las personas correctas.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Construí una marca que se recuerde",
    text: "Creamos sistemas visuales y contenidos que fortalecen la relación con tu audiencia.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
  },
];

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<boolean[]>([false, true, true]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expertise-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        ".expertise-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".expertise-cards", start: "top 88%", once: true },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="expertise-section">
      <div className="expertise-inner mx-auto max-w-[1200px] px-[25px] py-[75px]">
        <h2 className="expertise-heading mx-auto max-w-[620px] text-center text-[#080b10]">
          Nuestra experiencia esencial para escalar tu negocio
        </h2>
        <div className="expertise-cards mt-[65px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {expertise.map((item, index) => {
            const isExpanded = expanded[index];

            return (
              <article key={item.title} className="expertise-card group relative overflow-hidden rounded-[18px] bg-[#070807]">
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="expertise-card-copy absolute inset-x-0 bottom-0 flex min-h-[145px] items-end gap-4 p-[22px]">
                  <div className="min-w-0 flex-1">
                    {isExpanded ? <p>{item.text}</p> : <h3>{item.title}</h3>}
                  </div>
                  <button
                    type="button"
                    className={`expertise-toggle ${isExpanded ? "is-expanded" : ""}`}
                    onClick={() => setExpanded((cards) => cards.map((open, cardIndex) => cardIndex === index ? !open : open))}
                    aria-label={isExpanded ? `Ocultar detalle de ${item.title}` : `Ver detalle de ${item.title}`}
                    aria-expanded={isExpanded}
                  >
                    <span aria-hidden="true">{isExpanded ? "×" : "+"}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
