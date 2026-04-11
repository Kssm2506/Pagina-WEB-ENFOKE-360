"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade in containers
      gsap.fromTo(
        ".stat-item",
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

      // Counters animation
      const nums = gsap.utils.toArray(".stat-num");
      nums.forEach((num: any) => {
        const targetVal = parseFloat(num.getAttribute("data-val"));
        const isDecimal = targetVal % 1 !== 0;
        
        // Start at 0
        num.innerHTML = "0";

        gsap.to(num, {
          innerHTML: targetVal,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          onUpdate() {
            num.innerHTML = isDecimal 
              ? Number(num.innerHTML).toFixed(1) 
              : Math.round(Number(num.innerHTML));
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-16 md:py-20 bg-gradient-to-r from-[#0b5cc5] to-[#073c85] z-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 divide-x-0 md:divide-x md:divide-white/20">
          
          {/* Stat 1 */}
          <div className="stat-item flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2"><span className="stat-num" data-val="120">0</span>+</h3>
            <p className="text-white/90 text-[15px] font-light tracking-wide">
              Proyectos y páginas<br/>web diseñadas
            </p>
          </div>

          {/* Stat 2 */}
          <div className="stat-item flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2"><span className="stat-num" data-val="80">0</span>+</h3>
            <p className="text-white/90 text-[15px] font-light tracking-wide">
              Clientes satisfechos<br/>en Latam y EE.UU.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="stat-item flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2"><span className="stat-num" data-val="4.9">0.0</span></h3>
            <p className="text-white/90 text-[15px] font-light tracking-wide">
              Calificación promedio<br/>en satisfacción
            </p>
          </div>

          {/* Stat 4 */}
          <div className="stat-item flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2"><span className="stat-num" data-val="100">0</span>%</h3>
            <p className="text-white/90 text-[15px] font-light tracking-wide">
              Enfoque en resultados<br/>y crecimiento
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
