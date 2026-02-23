import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { HelpCircle, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué es Pathos IA?",
    answer: "Pathos IA es un estudio de tecnología con enfoque humano que combina dos servicios: diseño web e identidad digital por un lado, y automatización de procesos por el otro. Nuestra filosofía es que la tecnología solo tiene sentido cuando mejora la calidad de vida real de las personas. El nombre viene de ahí: pathos, la capacidad de conectar emocionalmente. Somos Intelligence & Empathy."
  },
  {
    question: "¿Qué servicios ofrece Pathos IA?",
    answer: (
      <div className="space-y-4">
        <p>Ofrecemos dos pilares principales:</p>
        <div className="grid gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-1">1. Diseño Web & Identidad Digital (Tu Imagen)</h4>
            <p className="text-sm text-slate-600">Creamos webs que no son solo escaparates, sino herramientas de venta. Incluye diseño visual alineado con tu marca, estructura estratégica para convertir visitas en clientes, y optimización técnica para mejorar tu posicionamiento en Google.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-1">2. Automatización de Procesos (Tu Motor)</h4>
            <p className="text-sm text-slate-600">Conectamos tus herramientas digitales para que tu negocio funcione solo en las partes repetitivas: formularios web con CRM, flujos de trabajo personalizados, y eliminación de tareas manuales que frenan tu crecimiento.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "¿Puedo contratar sólo el diseño web o sólo la automatización?",
    answer: (
      <span>
        Sí, puedes contratar cada servicio por separado. Dicho eso, nuestro enfoque más potente es el integral: diseñar tu presencia digital y tus procesos internos al mismo tiempo, de manera que hablen el mismo idioma desde el primer día. Es lo que llamamos <strong className="text-slate-900 font-semibold">Arquitectura Digital: Estética + Operativa</strong>.
      </span>
    )
  },
  {
    question: "¿Para qué tipo de negocios trabajáis?",
    answer: "Trabajamos con negocios que sufren alguno de estos dos problemas: son invisibles digitalmente (su web no transmite confianza o directamente no existe) o están saturados operativamente (consiguen clientes, pero se ahogan en gestión manual). Si te identificas con alguno de los dos, o con ambos, Pathos está diseñado para ti."
  },
  {
    question: "¿Reemplazáis a mi equipo con inteligencia artificial?",
    answer: "No. Nuestra filosofía es la contraria: automatizamos lo aburrido y repetitivo precisamente para que tu equipo tenga libertad de hacer lo que ninguna IA puede hacer: conectar, sentir y crear. La automatización en Pathos no está diseñada para eliminar personas, sino para liberarlas."
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer: (
      <div className="space-y-4">
        <p>Trabajamos en tres pasos:</p>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pathos-primary/10 text-pathos-primary flex items-center justify-center text-xs font-bold">1</span>
            <p><strong className="text-slate-900 font-semibold">Auditoría & Diseño:</strong> Entendemos tu identidad visual y detectamos los cuellos de botella en tu operativa.</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pathos-primary/10 text-pathos-primary flex items-center justify-center text-xs font-bold">2</span>
            <p><strong className="text-slate-900 font-semibold">Construcción Dual:</strong> Diseñamos tu web y programamos tus automatizaciones en paralelo, para que todo crezca de forma coherente.</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pathos-primary/10 text-pathos-primary flex items-center justify-center text-xs font-bold">3</span>
            <p><strong className="text-slate-900 font-semibold">Lanzamiento:</strong> Te entregamos las llaves de un negocio con nueva imagen y nueva forma de trabajar.</p>
          </li>
        </ol>
      </div>
    )
  },
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer: "Depende del alcance, pero al trabajar diseño y automatización en paralelo, los tiempos son más eficientes que si los hicieras por separado con distintos proveedores. Durante la auditoría inicial te damos una estimación concreta."
  },
  {
    question: "¿Hacéis webs con SEO incluido?",
    answer: (
      <span>
        Sí. La optimización técnica está incluida en el servicio de diseño web, y va más allá del SEO tradicional. No sólo trabajamos para que Google te encuentre, sino también para que los modelos de lenguaje como ChatGPT te recomienden. A esto se le llama <strong className="text-slate-900 font-semibold">GEO (Generative Engine Optimization)</strong>, y es la nueva frontera de la visibilidad digital: estar presente no solo en los buscadores, sino en las respuestas de la IA que cada vez más personas usan para tomar decisiones.
      </span>
    )
  },
  {
    question: "¿Con qué herramientas de automatización trabajáis?",
    answer: "Integramos las herramientas que ya usas o las que mejor se adapten a tu flujo: CRMs, plataformas de email marketing, formularios web, calendarios, sistemas de facturación, etc. El objetivo es que la tecnología se adapte a tu negocio, no al revés."
  },
  {
    question: "¿Tengo que saber de tecnología para trabajar con Pathos?",
    answer: "No. Nos encargamos de toda la parte técnica. Al final del proyecto te damos acceso y te explicamos lo que necesitas saber para gestionar lo que es tuyo. La tecnología tiene que hacerte sentir más libre, no más dependiente."
  },
  {
    question: "¿Cómo sé si una solución que me proponéis es la correcta?",
    answer: "Tenemos una regla interna muy clara: si un proceso no te devuelve tiempo de calidad, no sirve. Si una automatización no reduce tu estrés, está mal diseñada. Si la tecnología no te hace sentir más libre, te está atrapando. Eso guía cada decisión que tomamos."
  },
  {
    question: "¿Cómo puedo empezar?",
    answer: (
      <span>
        Lo primero es una conversación. Puedes contactarnos a través de la web en <a href="https://pathos-lab.com" className="text-pathos-primary hover:underline font-medium">pathos-lab.com</a>. Sin compromisos: solo hablamos de tu situación y vemos si tiene sentido trabajar juntos.
      </span>
    )
  }
];

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group border-b border-slate-200 last:border-0 transition-all duration-300 ${isOpen ? 'bg-white/50' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left gap-6 focus:outline-none"
      >
        <span className={`font-display text-xl lg:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-pathos-primary' : 'text-slate-900 group-hover:text-pathos-primary'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-pathos-primary border-pathos-primary text-white rotate-180' : 'bg-white border-slate-200 text-slate-400 group-hover:border-pathos-primary group-hover:text-pathos-primary'}`}>
          {isOpen ? <Minus size={20} aria-hidden="true" focusable="false" /> : <Plus size={20} aria-hidden="true" focusable="false" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-slate-600 text-lg leading-relaxed font-light max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans selection:bg-pathos-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Effects matching Portfolio */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pathos-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pathos-primary/20 bg-pathos-primary/5 text-pathos-primary text-xs font-bold uppercase tracking-widest mb-8">
              <HelpCircle size={14} />
              Centro de Ayuda
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-bold mb-8 tracking-tight text-slate-900">
              Preguntas <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Frecuentes</span>
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Resolvemos tus dudas sobre cómo la Arquitectura Digital puede transformar tu negocio.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/30 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-8 lg:p-12 shadow-xl shadow-slate-200/50">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          {/* Still have questions CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-block p-12 rounded-[3rem] bg-pathos-dark text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pathos-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <MessageCircle className="w-12 h-12 text-pathos-cyan mx-auto mb-6" />
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">¿Aún tienes dudas?</h2>
                <p className="text-blue-100 mb-8 max-w-md mx-auto">Nuestro equipo está listo para analizar tu caso particular y ofrecerte la mejor solución.</p>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pathos-dark rounded-full font-bold hover:bg-pathos-cyan hover:text-slate-900 transition-all transform hover:-translate-y-1"
                >
                  Hablemos hoy
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
