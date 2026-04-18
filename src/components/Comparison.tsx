"use client";
import { motion } from "framer-motion";
import { SlCheck, SlClose } from "react-icons/sl";

export function Comparison() {
  const features = [
    { title: "Diseño Web", others: "Plantillas genéricas y lentas", enfoke: "Diseño único, rápido y premium" },
    { title: "Enfoque principal", others: "Solo que se vea 'bonito'", enfoke: "Estrategia técnica para vender más" },
    { title: "Soporte", others: "Días de espera o bots", enfoke: "Comunicación directa y constante" },
    { title: "SEO y Google", others: "Te cobran extra o no lo hacen", enfoke: "Optimización SEO incluida de serie" },
    { title: "Campañas ADS", others: "Prender anuncios y esperar", enfoke: "Optimización diaria de tu inversión" },
    { title: "Resultados", others: "Inciertos y sin métricas claras", enfoke: "Reportes reales de ventas y ROI" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0b5cc5] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/10 mb-4">
            <span className="text-xs font-light tracking-normal text-white">¿Por qué nosotros?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Diferencia entre una web común<br className="hidden md:block" /> y una estrategia Enfoke 360
          </h2>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="comparison-card overflow-hidden rounded-[2rem] border border-white/5 bg-[#141414]/40 backdrop-blur-xl shadow-2xl"
          >
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-6 md:p-8 bg-black/20 flex items-center justify-center">
              <span className="text-white/40 text-sm font-light">Características</span>
            </div>
            <div className="p-6 md:p-8 border-l border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-gray-500 text-sm font-medium mb-1">Otras Agencias</span>
              <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
            </div>
            <div className="p-6 md:p-8 border-l border-white/5 bg-[#0b5cc5]/10 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-bold mb-1 bg-gradient-to-r from-[#0b5cc5] to-[#3b82f6] bg-clip-text text-transparent">Enfoke 360</span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#0b5cc5] to-[#3b82f6] rounded-full shadow-[0_0_10px_rgba(11,92,197,0.5)]"></div>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((f, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group`}>
              {/* Feature Title */}
              <div className="p-6 md:p-8 flex items-center justify-center md:justify-start bg-black/5 md:bg-transparent">
                <h3 className="text-white font-medium text-base">{f.title}</h3>
              </div>
              
              {/* Others */}
              <div className="p-6 md:p-8 border-l border-white/5 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <SlClose className="w-4 h-4 text-red-500/50" />
                  <span className="text-[13px] font-light leading-relaxed">{f.others}</span>
                </div>
              </div>

              {/* Enfoke 360 */}
              <div className="p-6 md:p-8 border-l border-white/5 bg-[#0b5cc5]/5 md:group-hover:bg-[#0b5cc5]/10 transition-colors flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 text-white mb-2">
                  <SlCheck className="w-4 h-4 text-[#0b5cc5] stroke-[4]" />
                  <span className="text-[14px] font-medium leading-relaxed">{f.enfoke}</span>
                </div>
              </div>
            </div>
          ))}

        </motion.div>

        {/* Bottom CTA hint */}
        <p className="text-center mt-12 text-gray-500 font-light text-sm italic">
          No solo hacemos webs, construimos activos rentables para tu negocio.
        </p>

      </div>
    </section>
  );
}
