import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 md:py-20 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-[#0b5cc5] relative overflow-hidden flex items-center justify-center">
              <div className="absolute w-full h-full bg-gradient-to-tr from-[#0b5cc5] to-blue-300 opacity-80"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white leading-none">enfoke 360</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-light">
            Agencia de Diseño Web en Costa Rica. Profesionales en diseño de sitios web para empresas, diseñadores UX/UI y SEO. Impulsamos tu crecimiento.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-[0.1em] text-[11px]">Servicios</h4>
          <ul className="flex flex-col gap-4 text-gray-500 font-light">
            <li><Link href="#" className="hover:text-white transition-colors">Diseño Web</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Tienda Online</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Posicionamiento SEO</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Publicidad Digital</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-[0.1em] text-[11px]">Compañía</h4>
          <ul className="flex flex-col gap-4 text-gray-500 font-light">
            <li><Link href="#" className="hover:text-white transition-colors">Quiénes somos</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contacto</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Términos y condiciones</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-600 font-light text-xs">
        <p>© {new Date().getFullYear()} Enfoke 360. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con ♥ por Enfoke 360</p>
      </div>
    </footer>
  );
}
