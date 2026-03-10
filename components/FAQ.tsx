import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { HelpCircle, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface AccordionItemProps {
  question: string;
  answer: string;
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
  const { content } = useContent();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq) return null;

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
              {faq.header.title} <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">{faq.header.accent}</span>
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              {faq.header.description}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/30 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-8 lg:p-12 shadow-xl shadow-slate-200/50">
              {faq.list.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
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
