import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-white">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="" 
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
            // Reduced blur to make it "present", increased opacity for visibility
            className="w-full h-full object-cover opacity-50 blur-[2px] scale-105 saturate-50"
        />
        {/* Lighter overlay to let the image show through */}
        <div className="absolute inset-0 bg-white/50 mix-blend-overlay"></div>
        {/* Second overlay for text readability without washing out the image completely */}
        <div className="absolute inset-0 bg-white/40"></div>
        
        {/* Gradiente inferior para suavizar el final de la sección */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20 text-center fade-in-section">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6 relative">
            Arquitectura Digital: <span className="text-sky-600">Estética</span> + <span className="text-sky-600">Operativa</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium mb-4">
            En Pathos no elegimos entre diseño y rentabilidad. Construimos ambos.
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Tener una web bonita que nadie visita no sirve de nada. Tener muchas visitas pero ahogarte en tareas manuales para atenderlas, tampoco. Diseñamos el escaparate perfecto para atraer a tus clientes y el motor interno para que no pierdas ni un minuto en gestionarlos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Column 1: EL ESCAPARATE */}
          <div className="relative group p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-white/50 overflow-hidden fade-in-section shadow-lg hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                <Monitor size={180} aria-hidden="true" focusable="false" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-sky-600 font-bold rounded-full text-sm mb-6 w-fit uppercase tracking-wider">Solución 1: El Escaparate</div>
                <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Diseño Web IA & Identidad Digital</h3>
                <p className="text-slate-600 mb-8 text-lg italic">
                    "Creamos plataformas ultrarrápidas optimizadas para SEO y GEO que no son solo un folleto digital, son tu mejor comercial trabajando 24/7."
                </p>

                <ul className="space-y-6 mb-8">
                    {[
                        { title: "Diseño Web de Alta Gama", desc: "Proyectamos la autoridad y confianza de tu negocio desde el primer segundo. Sin plantillas genéricas, solo diseño estratégico alineado con tu identidad y optimizado para LLMs." },
                        { title: "Dominio Local (SEO/GEO)", desc: "Logramos que los nuevos buscadores de IA y mapas te pongan en el mapa. Preparamos tu web para que ChatGPT y Google te encuentren y te recomienden a tus clientes locales antes que a la competencia." },
                        { title: "Rendimiento y Seguridad IA", desc: "Construimos con código limpio (sin gestores pesados). El resultado es una web que carga al instante, que los algoritmos de IA premian y que es virtualmente imposible de hackear." }
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" aria-hidden="true" focusable="false" />
                            <div>
                                <span className="text-slate-900 font-bold block">{item.title}:</span>
                                <span className="text-slate-600 text-sm leading-relaxed">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-slate-200">
                    <p className="font-bold text-pathos-dark mb-6">El Resultado: <span className="font-normal text-slate-600">Una marca que transmite autoridad, capta tráfico local y convierte visitas en clientes.</span></p>
                    
                    <Link to="/portfolio" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold hover:bg-slate-50 hover:border-sky-200 hover:text-sky-600 transition-all duration-300 group/btn shadow-sm">
                        Ver Casos de Éxito / Portfolio
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </div>
          </div>

          {/* Column 2: EL MOTOR */}
          <div className="relative group p-10 rounded-[2.5rem] bg-pathos-dark/95 backdrop-blur-sm text-white border border-slate-800 overflow-hidden fade-in-section shadow-2xl" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                <Cpu size={180} aria-hidden="true" focusable="false" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="inline-block px-4 py-1.5 bg-pathos-cyan/20 text-pathos-cyan font-bold rounded-full text-sm mb-6 w-fit uppercase tracking-wider">Solución 2: El Motor</div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">Automatización de Procesos con IA</h3>
                <p className="text-blue-100 mb-8 text-lg italic">
                    "Una vez que te encuentran, implementamos agentes de IA para que no pierdas ni un segundo en tareas manuales."
                </p>

                <ul className="space-y-6 mb-8">
                    {[
                        { title: "Sincronización Inteligente", desc: "Conectamos tu web con tu CRM y herramientas de gestión mediante flujos de trabajo automatizados que eliminan el error humano." },
                        { title: "Agentes de IA Autónomos", desc: "Diseñamos sistemas que responden, agendan y clasifican leads por ti, permitiéndote escalar tu negocio local sin aumentar costes fijos." },
                        { title: "Eficiencia Operativa 2.0", desc: "Erradicamos la carga manual repetitiva. Transformamos procesos lentos en sistemas ágiles que liberan tu tiempo y mejoran la rentabilidad." }
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-pathos-cyan flex-shrink-0 mt-1" aria-hidden="true" focusable="false" />
                            <div>
                                <span className="text-white font-bold block">{item.title}:</span>
                                <span className="text-blue-100 text-sm leading-relaxed">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-slate-700">
                    <p className="font-bold text-pathos-cyan mb-6">El Resultado: <span className="font-normal text-blue-100">Un negocio que escala de forma automática y eficiente.</span></p>
                    
                    <Link to="/demo" target="_blank" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-pathos-cyan/10 border border-pathos-cyan/50 text-pathos-cyan font-semibold hover:bg-pathos-cyan hover:text-slate-900 transition-all duration-300 group/btn">
                        Ver cómo funciona
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;