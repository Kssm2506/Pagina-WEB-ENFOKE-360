"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import StaggeredMenu from "./StaggeredMenu";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: 'Servicios', ariaLabel: 'Ver servicios', link: '/servicios', hasDropdown: true },
    { label: 'Contacto', ariaLabel: 'Contáctanos', link: '/#contacto' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: '/#contacto' }
  ];

  return (
    <>
      <nav ref={navRef} className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg border-white/5" : "bg-transparent"}`}>
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]">
            <img src="/logo.webp" alt="Enfoke 360 Logo" className="h-8 md:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative text-base font-light text-white group cursor-pointer py-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b5cc5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    
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
                    className="relative text-base font-light text-white group overflow-hidden py-1"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b5cc5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                )}
              </div>
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