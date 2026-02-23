import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto bg-sky-600 rounded-[2.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl fade-in-section">
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            Que te vean increíble.<br/>
            Que trabajes tranquilo.
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            ¿Listo para transformar tu presencia digital y tu operativa interna?
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-white text-sky-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:scale-105 duration-200 flex items-center gap-2"
            >
              Empezar Ahora
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Sin compromisos. Solo soluciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;