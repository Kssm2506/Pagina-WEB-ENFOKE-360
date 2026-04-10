import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#eaeaea] py-12 md:py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block text-2xl font-bold tracking-tight text-[#0f0f0f] mb-6">
            enfoke <span className="text-[#0b5cc5]">360</span>
          </Link>
          <p className="text-gray-600 max-w-sm mb-6 leading-relaxed">
            Agencia de Diseño Web en Costa Rica. Profesionales en diseño de sitios web para empresas, diseñadores UX/UI y SEO.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#0f0f0f] mb-6 uppercase tracking-wider text-xs">Servicios</h4>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Diseño Web</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Tienda Online</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Posicionamiento SEO</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Publicidad Digital</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#0f0f0f] mb-6 uppercase tracking-wider text-xs">Compañía</h4>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Quiénes somos</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Contacto</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Términos y condiciones</Link></li>
            <li><Link href="#" className="hover:text-[#0b5cc5] transition-colors">Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#eaeaea] flex flex-col md:flex-row items-center justify-between text-gray-500">
        <p>© {new Date().getFullYear()} Enfoke 360. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con ♥ por Enfoke 360</p>
      </div>
    </footer>
  );
}
