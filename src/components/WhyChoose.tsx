"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const satisfactionRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(".why-choose-intro", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.fromTo(".why-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".why-grid", start: "top 84%", once: true },
      });
      const satisfaction = { value: 0 };
      const projects = { value: 0 };
      ScrollTrigger.create({
        trigger: ".why-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(satisfaction, { value: 92, duration: 1.35, ease: "power2.out", onUpdate: () => { if (satisfactionRef.current) satisfactionRef.current.textContent = String(Math.round(satisfaction.value)); } });
          gsap.to(projects, { value: 56, duration: 1.35, ease: "power2.out", onUpdate: () => { if (projectsRef.current) projectsRef.current.textContent = String(Math.round(projects.value)); } });
        },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-choose-section">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-8 md:py-[120px]">
        <header className="why-choose-intro grid gap-10 md:grid-cols-[420px_1fr] md:items-end md:gap-20">
          <div><span className="why-kicker">Por qué elegirnos</span><h2>Diseño pensado para crecer con claridad</h2></div>
          <p>Unimos estrategia, dirección visual y ejecución digital para crear experiencias claras, sólidas y orientadas a resultados.</p>
        </header>

        <div className="why-grid mt-14 grid gap-4 md:grid-cols-[1fr_1fr_1.36fr]">
          <div className="why-column flex flex-col gap-4">
            <article className="why-card why-client-card">
              <div className="why-brand-stack" aria-label="Marcas con las que trabajamos">
                {["/brands/1.png", "/brands/2.png", "/brands/3.png", "/brands/4.png"].map((logo, index) => <span key={logo} className="why-brand-logo"><img src={logo} alt={`Marca ${index + 1}`} /></span>)}
              </div>
              <h3>+20 clientes</h3>
            </article>
            <article className="why-card why-stat-card"><p>Dirección clara para que cada proyecto comunique valor.</p><strong><span ref={satisfactionRef}>0</span></strong><small>Satisfacción de clientes</small></article>
          </div>
          <div className="why-column flex flex-col gap-4">
            <article className="why-card why-statement-card"><p>Identidad, sitios web y sistemas digitales creados con claridad y propósito.</p><strong><span ref={projectsRef}>0</span></strong><small>Proyectos completados</small></article>
            <article className="why-card why-available-card"><span className="why-dot" /> Disponible para proyectos</article>
          </div>
          <article className="why-card why-detail-card"><p>Ayudamos a equipos y negocios a convertir sus ideas en experiencias digitales sólidas, memorables y fáciles de recorrer.</p><div className="why-rating"><strong>4.9</strong><span><b>★★★★★</b>Clientes que confían en nosotros</span></div></article>
        </div>
      </div>
    </section>
  );
}
