"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import StaggeredMenu from "./StaggeredMenu";

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

  const menuItems = [
    { label: 'Inicio', ariaLabel: 'Ir al inicio', link: '#inicio' },
    { label: 'Nosotros', ariaLabel: 'Sobre nosotros', link: '#nosotros' },
    { label: 'Servicios', ariaLabel: 'Ver servicios', link: '#servicios' },
    { label: 'Contacto', ariaLabel: 'Contáctanos', link: '#contacto' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: '#contacto' }
  ];

  return (
    <>
      <nav ref={navRef} className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"}`}>
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]">
            <img src="/logo.webp" alt="Enfoke 360 Logo" className="h-8 md:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="#inicio" className="text-[15px] font-medium text-white hover:text-[#0b5cc5] transition-colors">Inicio</Link>
            <Link href="#nosotros" className="text-[15px] font-medium text-white hover:text-[#0b5cc5] transition-colors">Nosotros</Link>
            <div className="relative group flex items-center gap-1 cursor-pointer">
              <span className="text-[15px] font-medium text-white hover:text-[#0b5cc5] transition-colors">Servicios</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </div>
            <Link href="#contacto" className="text-[15px] font-medium text-white hover:text-[#0b5cc5] transition-colors">Contacto</Link>
          </div>

          {/* Desktop Button - Also keep it visible on mobile next to menu? Nope, hide on very small to give space to toggle */}
          <Link
            href="#contacto"
            className="hidden sm:inline-flex bg-gradient-to-r from-[#0b5cc5] to-[#0a4bb0] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity ml-auto lg:ml-0 mr-12 lg:mr-0 relative z-[60]"
          >
            Agendar consulta
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={['#08428c', '#0b5cc5']}
        accentColor="#0b5cc5"
        isFixed={true}
      />
    </>
  );
}
