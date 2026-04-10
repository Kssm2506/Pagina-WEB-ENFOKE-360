"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#0f0f0f]">
          enfoke <span className="text-[#0b5cc5]">360</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#inicio" className="hover:text-[#0b5cc5] transition-colors">Inicio</Link>
          <Link href="#nosotros" className="hover:text-[#0b5cc5] transition-colors">Nosotros</Link>
          <Link href="#servicios" className="hover:text-[#0b5cc5] transition-colors">Servicios</Link>
        </div>
        <Link 
          href="#contacto" 
          className="bg-[#0b5cc5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#094ca3] transition-colors shadow-lg shadow-[#0b5cc5]/20"
        >
          Hablemos
        </Link>
      </div>
    </nav>
  );
}
