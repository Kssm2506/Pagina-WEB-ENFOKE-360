"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade entrance
      gsap.fromTo(
        ".trusted-elem",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 85%" } }
      );
      
      // Parallax effect
      gsap.fromTo(
        ".trusted-elem",
        { y: 80 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full pb-20 px-6 mt-[-60px] md:mt-[-100px] z-20">
      <div 
        className="trusted-elem relative max-w-[1100px] mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/60 backdrop-blur-xl px-6 py-16 md:px-12 flex flex-col items-center"
      >
        {/* Subtle inner center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0b5cc5] rounded-full blur-[120px] opacity-15 pointer-events-none" />
        
        <h3 className="relative z-10 text-2xl md:text-[32px] font-bold text-white text-center leading-tight max-w-2xl mx-auto mb-14">
          Empresas y emprendedores confían en Enfoke 360 para crecer en internet
        </h3>

        {/* Logos container */}
        <div className="relative z-10 grid grid-cols-2 md:flex md:flex-wrap justify-center items-center place-items-center gap-12 md:gap-20 opacity-60">
          
          {/* Logo 1: Generic Company or Meta */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">Meta</span>
          </div>

          {/* Logo 2: Google */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">Google</span>
          </div>

          {/* Logo 3: Ecommerce / Hotmart */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">E-commerce</span>
          </div>

          {/* Logo 4: Analytics */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M3 3v18h18"/>
              <path d="m19 9-5 5-4-4-3 3"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">Analytics</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
