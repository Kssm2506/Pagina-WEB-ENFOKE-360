"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import StaggeredMenu from "./StaggeredMenu";
import { motion, AnimatePresence } from "framer-motion";
import GlassmorphismCta from "@/components/ui/glassmorphism-cta";

const serviciosItems = [
  { label: "Diseño Web", link: "/diseno-web" },
  { label: "Tienda Online", link: "/tienda-online" },
  { label: "Posicionamiento SEO", link: "/posicionamiento-seo" },
  { label: "Redes Sociales", link: "/redes-sociales" },
  { label: "Publicidad Digital", link: "/publicidad-digital" },
  { label: "Branding", link: "/branding" },
];

export function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navRef = useRef<HTMLElement>(null);
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
    { label: 'Servicios', ariaLabel: 'Ver servicios', link: '/servicios', hasDropdown: true },
    { label: 'Portafolio', ariaLabel: 'Ver portafolio', link: '/portafolio' },
    { label: 'Contacto', ariaLabel: 'Contáctanos', link: '/contacto' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: '/contacto' }
  ];

  return (
    <>
      <nav ref={navRef} className={`fixed inset-x-0 z-50 px-[10px] transition-all duration-300 ${scrolled ? "top-3" : "top-4"}`}>
        <div className={`sevora-navbar mx-auto flex w-full max-w-[1150px] items-center justify-between transition-all duration-300 ${scrolled ? "sevora-navbar-scrolled" : ""}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]">
            <img src="/logo.webp" alt="Enfoke 360 Logo" className={`h-6 w-auto object-contain ${scrolled ? "invert" : ""}`} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 rounded-full">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className={`relative flex items-center rounded-full px-3 py-2 text-sm transition-colors group cursor-pointer ${scrolled ? "text-[#121218] hover:bg-black/5" : "text-white hover:bg-white/10"}`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-xl"
                        >
                          {serviciosItems.map((subItem, i) => (
                            <Link
                              key={subItem.label}
                              href={subItem.link}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={`relative rounded-full px-3 py-2 text-sm transition-colors group overflow-hidden ${scrolled ? "text-[#121218] hover:bg-black/5" : "text-white hover:bg-white/10"}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Button */}
          <GlassmorphismCta
            href="/contacto"
            label="Agendar consulta"
            className="hidden sm:inline-flex ml-auto lg:ml-0 mr-12 lg:mr-0 relative z-[60]"
          />
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
        colors={['#18181b', '#09090b']}
        accentColor="#ffffff"
        isFixed={true}
      />
    </>
  );
}
