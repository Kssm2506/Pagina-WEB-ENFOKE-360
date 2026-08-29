"use client";

import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import Ferrofluid from "@/components/Ferrofluid";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ContactoPage() {
  return (
    <>
      <Footer />
      <main className="contact-page relative z-[1] min-h-screen bg-[#f7f7f8] pb-20 pt-48 text-[#17171b] sm:pt-52">
      <Navbar />
      <section className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="contact-intro max-w-[740px]"><p className="text-[13px] font-normal uppercase tracking-[.05em] text-[#17171b]">Contacto</p><h1 className="mt-4 text-balance text-[54px] font-medium leading-[1.1] tracking-[-.05em] sm:text-[85px]">¿Listo para empezar?</h1><p className="mt-6 max-w-[650px] text-[18px] font-normal leading-[1.5] text-[#565661]">¿Querés mejorar el rendimiento de tu marca o necesitás un equipo que lleve adelante tu sitio y campañas? Estamos listos cuando vos lo estés — hablemos.</p></div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <form onSubmit={(event) => event.preventDefault()} className="rounded-[26px] border border-[#dedee2] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,.045)] sm:p-10">
            <div className="grid gap-5"><Field label="Nombre" placeholder="Tu nombre" /><Field label="Apellido" placeholder="Tu apellido" /><Field label="Correo electrónico" placeholder="nombre@empresa.com" type="email" /><Field label="Empresa" placeholder="Tu empresa" /><label className="contact-label">Mensaje<textarea required rows={4} placeholder="Contanos sobre tu proyecto..." /></label></div>
            <button className="contact-submit mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#17171b] px-5 py-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#303038]">Enviar consulta <ArrowUpRight size={17} /></button>
          </form>
          <aside className="relative min-h-[545px] overflow-hidden rounded-[26px] bg-[#101015] p-7 text-white shadow-[0_18px_38px_rgba(0,0,0,.18)] sm:p-10">
            <Ferrofluid colors={["#052b63", "#0b5cc5", "#8bc4ff"]} speed={0.5} scale={1.6} turbulence={1} fluidity={0.1} rimWidth={0.2} sharpness={2.5} shimmer={1.5} glow={2} flowDirection="down" opacity={1} mouseInteraction mouseStrength={1} mouseRadius={0.35} className="absolute inset-0 z-0" />
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(10,10,14,.14),rgba(10,10,14,.32))]" />
            <div className="relative z-[2] flex h-full min-h-[465px] flex-col"><span className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-[#202027]/85 shadow-lg"><ArrowUpRight size={23} strokeWidth={1.7} /></span><div className="mt-8"><h2 className="text-2xl font-medium tracking-[-.055em]">Disponible para proyectos seleccionados</h2><p className="mt-2 text-sm text-white/55">Actualmente aceptando nuevos proyectos</p></div><div className="mt-auto divide-y divide-white/10"><ContactDetail icon={<Mail size={19} />} label="Email" value="hola@enfoke360.com" href="mailto:hola@enfoke360.com" /><ContactDetail icon={<MapPin size={19} />} label="Ubicación" value="Buenos Aires, Argentina / Remoto" /><ContactDetail icon={<Clock3 size={19} />} label="Tiempo de respuesta" value="Dentro de 24 horas" /></div></div>
          </aside>
        </div>
      </section>
      </main>
      <div id="footer-spacer" className="relative z-[1]" style={{ height: "var(--footer-h, 300px)" }} aria-hidden="true" />
    </>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) { return <label className="contact-label">{label}<input required type={type} placeholder={placeholder} /></label>; }
function ContactDetail({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) { const content = <><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.08] text-white/90">{icon}</span><span><span className="block text-xs text-white/45">{label}</span><span className="mt-0.5 block text-sm font-medium text-white/90">{value}</span></span></>; return href ? <a href={href} className="flex items-center gap-4 py-5 transition-opacity hover:opacity-70">{content}</a> : <div className="flex items-center gap-4 py-5">{content}</div>; }
