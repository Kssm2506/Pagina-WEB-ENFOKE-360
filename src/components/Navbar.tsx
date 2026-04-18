"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import StaggeredMenu from "./StaggeredMenu";

export function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
    { label: 'Inicio', ariaLabel: 'Ir al inicio', link: '/' },
    { label: 'Nosotros', ariaLabel: 'Sobre nosotros', link: '/nosotros' },
    { label: 'Servicios', ariaLabel: 'Ver servicios', link: '/#servicios' },
    { label: 'Contacto', ariaLabel: 'Contáctanos', link: '/#contacto' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: '/#contacto' }
  ];

  return (
    <>
      <nav ref={navRef} className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg  border-white/5" : "bg-transparent"}`}>
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]">
            <img src="/logo.webp" alt="Enfoke 360 Logo" className="h-8 md:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className="relative text-base font-light text-white group overflow-hidden py-1"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b5cc5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <Link
            href="#contacto"
            className="cta-anim hidden sm:inline-flex text-white px-8 py-2.5 rounded-full text-[15px] font-light hover:opacity-90 ml-auto lg:ml-0 mr-12 lg:mr-0 relative z-[60] shadow-[0_0_20px_rgba(11,92,197,0.3)]"
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
