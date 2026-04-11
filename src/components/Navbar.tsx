"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav ref={navRef} className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg  border-white/10" : "bg-transparent"}`}>
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.webp" alt="Enfoke 360 Logo" className="h-8 md:h-9 w-auto object-contain" />
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="#inicio" className="text-lg font-medium text-white hover:text-[#0b5cc5] transition-colors">Inicio</Link>
          <Link href="#nosotros" className="text-lg font-medium text-white hover:text-[#0b5cc5] transition-colors">Nosotros</Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="text-lg font-medium text-white hover:text-[#0b5cc5] transition-colors">Servicios</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </div>
          <Link href="#contacto" className="text-lg font-medium text-white hover:text-[#0b5cc5] transition-colors">Contacto</Link>
        </div>

        {/* Button */}
        <Link
          href="#contacto"
          className="bg-gradient-to-r from-[#0b5cc5] to-[#0a4bb0] text-white px-8 py-3 rounded-full text-base font-bold hover:opacity-90 transition-opacity"
        >
          Agendar consulta
        </Link>
      </div>
    </nav>
  );
}
