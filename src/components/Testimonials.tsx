"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: '"Contratar a Enfoke 360 para manejar nuestra publicidad fue un antes y un después. Redujimos costos por lead y aumentamos las ventas significativamente. Definitivamente una inversión que vale la pena."',
    name: "Sofía Hernández",
    company: "FIT & GLOW BEAUTY"
  },
  {
    id: 2,
    text: '"Gracias al trabajo con Enfoke 360, nuestra empresa comenzó a aparecer en Google cuando antes no existíamos. Pasamos de cero contactos orgánicos a recibir cotizaciones todas las semanas."',
    name: "Carlos Méndez",
    company: "JURADO INSURANCE AGENCY"
  },
  {
    id: 3,
    text: '"Enfoke 360 elevó por completo nuestra imagen en internet. La página web quedó moderna, rápida y enfocada en conversión. Desde el primer mes comenzamos a recibir más solicitudes de clientes."',
    name: "Laura Gómez",
    company: "BELLA SKIN STUDIO"
  }
];

export function Testimonials() {
  const [indices, setIndices] = useState([0, 1, 2]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const rotateIndicesRight = () => {
    setIndices((prev) => {
      const copy = [...prev];
      const last = copy.pop()!;
      copy.unshift(last);
      return copy;
    });
  };

  const rotateIndicesLeft = () => {
    setIndices((prev) => {
      const copy = [...prev];
      const first = copy.shift()!;
      copy.push(first);
      return copy;
    });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Tweak offsets so wide cards don't overlap too much
    const xOffset = isMobile ? 220 : 400; 
    const sideScale = isMobile ? 0.75 : 0.8;
    const activeScale = 1;
    const sideRotation = isMobile ? 10 : 25;

    indices.forEach((originalIdx, currentPos) => {
      const card = cardsRef.current[originalIdx];
      if (!card) return;

      let x = 0;
      let scale = 0.5;
      let opacity = 0;
      let rotateY = 0;
      let zIndex = 0;
      let blur = 10;
      let grayscale = 100;

      if (currentPos === 0) {
        x = -xOffset;
        scale = sideScale;
        opacity = 0.3;
        rotateY = sideRotation;
        zIndex = 5;
        blur = isMobile ? 3 : 5;
      } else if (currentPos === 1) {
        x = 0;
        scale = activeScale;
        opacity = 1;
        rotateY = 0;
        zIndex = 10;
        blur = 0;
        grayscale = 0;
      } else if (currentPos === 2) {
        x = xOffset;
        scale = sideScale;
        opacity = 0.3;
        rotateY = -sideRotation;
        zIndex = 5;
        blur = isMobile ? 3 : 5;
      }

      gsap.to(card, {
        x,
        scale,
        opacity,
        rotateY,
        zIndex,
        filter: `blur(${blur}px) grayscale(${grayscale}%)`,
        duration: 0.8,
        ease: "expo.out",
        perspective: 1000,
      });
    });
  }, [indices]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) rotateIndicesLeft();
      else rotateIndicesRight();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center bg-[#0f0f0f]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0b5cc5]/15 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto text-center mb-16 md:mb-20 px-6">
        <h4 className="text-[#0b5cc5] font-bold tracking-[0.2em] uppercase text-xs mb-4">REPUTACIÓN</h4>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Lo que dicen nuestros clientes
        </h2>
      </div>

      <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center perspective-[1200px]">
        {testimonials.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => { cardsRef.current[i] = el }}
            className="absolute w-[300px] md:w-[460px] h-[340px] md:h-[360px] rounded-[24px] border border-white/10 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-transparent flex flex-col p-8 md:p-10 text-left items-start justify-between overflow-hidden group"
          >
             {/* Decorative Huge Quote Mark */}
             <div className="absolute -top-4 -left-2 text-[140px] leading-none text-white/5 font-serif pointer-events-none select-none">
               "
             </div>
             
             {/* 5 Stars */}
             <div className="flex gap-1.5 mb-6 z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-[#f59e0b] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
             </div>

             {/* Quote Text */}
             <p className="text-gray-200 leading-relaxed text-[15px] md:text-[17px] font-medium z-10">
                {item.text}
             </p>
             
             {/* Bottom Profile Area */}
             <div className="mt-8 flex items-center gap-4 w-full z-10 relative">
               <div className="w-12 h-12 rounded-full border border-[#0b5cc5]/50 bg-gradient-to-tr from-[#08428c] to-[#0b5cc5] flex items-center justify-center text-white font-bold text-lg">
                 {item.name.charAt(0)}
               </div>
               <div>
                 <h4 className="text-white font-bold text-sm md:text-base">{item.name}</h4>
                 <p className="text-[#0b5cc5] text-[10px] md:text-xs font-bold tracking-widest uppercase mt-0.5">{item.company}</p>
               </div>
             </div>
          </div>
        ))}
      </div>

      {/* Elegant Nav Controls */}
      <div className="flex gap-4 mt-16 relative z-10 items-center justify-center">
        <button
          onClick={rotateIndicesRight}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-transparent hover:bg-white flex-shrink-0 transition-colors group"
        >
          <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={rotateIndicesLeft}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-transparent hover:bg-white flex-shrink-0 transition-colors group"
        >
          <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
