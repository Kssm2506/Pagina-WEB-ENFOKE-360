"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import GlassmorphismCta from "@/components/ui/glassmorphism-cta";

const mailmanHeroImages = [
  "https://framerusercontent.com/images/f5cZMGLCdGVRQu1DGkbvXmCaYKI.png",
  "https://framerusercontent.com/images/Cb9RyL259ebvh6DF3aSj2OIg.png",
  "https://framerusercontent.com/images/7uPLAyR8yfAvhUgTSkN9mjAIKNE.png",
  "https://framerusercontent.com/images/cTEAZEfpkQZEdW4AHQAwZiJVVQ.png",
  "https://framerusercontent.com/images/uhJcNt8zADTnu37HdGXoXkpA5QU.png",
  "https://framerusercontent.com/images/8HvcovYXKLiNsaZQqncN3miqyQ.png",
  "https://framerusercontent.com/images/nijbjG6KAMOUJpCkBraHa8FUU.png",
  "https://framerusercontent.com/images/fOuRgG7JQPt3IoCpVBSyIIOz2XY.png",
  "https://framerusercontent.com/images/YeqIGkNvrwvvMwkJdzaCkDiBs.png",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marqueeOffsets = [-420, -300, -460, -340, -400];
      gsap.fromTo(
        ".hero-mailman-column",
        {
          y: (index: number) => marqueeOffsets[index] + (index % 2 === 0 ? -280 : 280),
        },
        {
          y: (index: number) => marqueeOffsets[index],
          duration: 1.7,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.05,
        }
      );
      gsap.fromTo(".hero-elem", { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out", delay: 0.1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="leadup-hero relative min-h-screen overflow-hidden pt-24 md:pt-24">
        <div className="hero-mailman-grid" aria-hidden="true">
          {Array.from({ length: 5 }, (_, columnIndex) => (
            <div key={columnIndex} className="hero-mailman-column">
              {Array.from({ length: 5 }, (_, rowIndex) => {
                const imageIndex = columnIndex + rowIndex * 5;
                return (
                  <div key={rowIndex} className="hero-mailman-cell">
                    <div className="hero-mailman-tile">
                      <img src={mailmanHeroImages[imageIndex % mailmanHeroImages.length]} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="hero-top-fade pointer-events-none absolute inset-x-0 top-0 h-[55%] z-[1]" />
        <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-[55%] z-[1]" />
        <div className="hero-dark-overlay pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1150px] items-center justify-center px-[10px] pb-8 text-center">
          <div className="max-w-[1200px] pt-8 lg:pt-0">
            <h1 className="leadup-heading hero-elem max-w-[1100px] text-white">
              Impulsamos tu visión y estrategia digital
            </h1>
            <p className="hero-elem mx-auto mt-6 max-w-[650px]">
              <span className="leadup-description">Convertimos objetivos de negocio en experiencias digitales claras, medibles y listas para crecer.</span>
            </p>
            <div className="hero-elem mt-10 flex flex-wrap items-center justify-center gap-4">
              <GlassmorphismCta href="#contacto" label="Agendar una llamada" />
              <GlassmorphismCta href="#servicios" label="Ver servicios" speed="5s" shimmerColor="rgba(147,197,253,0.72)" />
            </div>
          </div>

        </div>
      </section>

      <section className="scaling-quote">
        <div className="mx-auto max-w-[620px] px-6 py-28 md:py-36">
          <Image src="/images/testimonial-checks.png" alt="" width={30} height={23} className="mb-7 h-[23px] w-[30px] opacity-90" />
          <h6 className="scaling-quote-text">
            Hacer crecer un negocio no se trata solo de trabajar más: se trata de construir los sistemas correctos para escalar con confianza.
          </h6>
          <div className="mt-8 flex items-center gap-3">
            <p className="scaling-quote-author">Enfoke 360</p>
            <span className="rounded-full bg-[#dffbf6] px-3 py-1 text-xs font-medium text-[#165d56]">Estrategia digital</span>
          </div>
        </div>
      </section>
    </>
  );
}
