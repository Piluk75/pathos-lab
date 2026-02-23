import React from 'react';
import { EyeOff, ZapOff } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-xs font-bold text-sky-600 tracking-widest uppercase">Imagen + Eficiencia</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-[1.15] lg:leading-[1.2]">
            ¿De qué sirve ser el mejor si <span className="text-sky-600">nadie te ve</span> o si <span className="text-sky-600">no tienes tiempo</span>?
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Muchos negocios sufren de dos males silenciosos:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem 1 */}
          <div className="relative p-10 rounded-[2rem] bg-white border border-slate-100 fade-in-section hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=60&w=800" 
                alt="Invisible" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Overlay for contrast */}
              <div className="absolute inset-0 bg-white/70 z-[1]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <EyeOff className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Invisibilidad</h3>
              <p className="text-lg text-slate-800 leading-relaxed font-medium">
                Su web parece de 2010, no transmite confianza y pierden clientes antes de empezar.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="relative p-10 rounded-[2rem] bg-white border border-slate-100 fade-in-section hover:shadow-xl transition-all duration-300 overflow-hidden group" style={{ transitionDelay: '0.2s' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=60&w=800" 
                alt="Saturated" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Overlay for contrast */}
              <div className="absolute inset-0 bg-white/70 z-[1]"></div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ZapOff className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Saturación</h3>
              <p className="text-lg text-slate-800 leading-relaxed font-medium">
                Cuando consiguen clientes, se ahogan en tareas administrativas manuales.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
