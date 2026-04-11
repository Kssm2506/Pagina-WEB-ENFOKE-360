"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  // Calcula la altura real del footer y la expone como CSS var al spacer
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const measure = () => {
      const h = footer.offsetHeight;
      document.documentElement.style.setProperty("--footer-h", `${h}px`);
      const spacer = document.getElementById("footer-spacer");
      if (spacer) spacer.style.height = `${h}px`;
      
      // Crucial: Refrescar ScrollTrigger cuando cambia la altura del layout
      ScrollTrigger.refresh();
    };

    // Medida inicial y tras carga de imágenes
    measure();
    
    // ResizeObserver para cambios dinámicos (responsive, etc)
    const resizeObserver = new ResizeObserver(() => {
      // Usamos requestAnimationFrame para evitar errores de loop en ResizeObserver
      requestAnimationFrame(measure);
    });
    resizeObserver.observe(footer);

    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <footer
      id="site-footer"
      className="fixed bottom-0 left-0 w-full bg-[#0b5cc5] overflow-hidden"
      style={{ zIndex: 0 }}
      aria-label="Footer"
    >
      {/* Logo grande centrado — el punto focal del reveal */}
      <div className="w-full flex flex-col items-center justify-center px-6 pt-14 pb-12">
        <Image
          src="/logo.webp"
          alt="Enfoke 360"
          width={600}
          height={180}
          priority
          className="w-[55vw] max-w-[400px] md:w-[35vw] h-auto object-contain select-none"
          onLoad={() => {
            const footer = document.getElementById("site-footer");
            if (footer) {
              const h = footer.offsetHeight;
              document.documentElement.style.setProperty("--footer-h", `${h}px`);
              const spacer = document.getElementById("footer-spacer");
              if (spacer) spacer.style.height = `${h}px`;
              ScrollTrigger.refresh();
            }
          }}
        />
      </div>

      {/* Separador */}
      <div className="w-full h-px bg-white/20" />

      {/* Links y Sociales */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-6 text-sm text-white/70 font-light" aria-label="Footer navigation">
          <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="#nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
        </nav>
        <div className="flex items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm font-light">Instagram</a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm font-light">WhatsApp</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-white/40 text-xs font-light">
        © {new Date().getFullYear()} Enfoke 360. Todos los derechos reservados.
      </div>
    </footer>
  );
}
