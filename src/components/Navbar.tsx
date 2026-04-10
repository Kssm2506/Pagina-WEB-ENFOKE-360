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
    <nav ref={navRef} className="fixed w-full top-0 z-50 py-4 px-6 md:px-12 bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0b5cc5] to-blue-400"></div>
          <span className="text-2xl font-bold tracking-tight text-white flex flex-col">
            Enfoke 360
            <span className="text-[10px] tracking-wide font-normal text-white">Marketing Agency</span>
          </span>
        </Link>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="#inicio" className="text-sm font-medium text-white hover:text-[#0b5cc5] transition-colors">Inicio</Link>
          <Link href="#nosotros" className="text-sm font-medium text-white hover:text-[#0b5cc5] transition-colors">Nosotros</Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="text-sm font-medium text-white hover:text-[#0b5cc5] transition-colors">Servicios</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          <Link href="#contacto" className="text-sm font-medium text-white hover:text-[#0b5cc5] transition-colors">Contacto</Link>
        </div>
        
        {/* Button */}
        <Link 
          href="#contacto" 
          className="bg-gradient-to-r from-[#0b5cc5] to-blue-500 text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Agendar consulta
        </Link>
      </div>
    </nav>
  );
}
