import React from 'react';
import { Eye, Clock, CheckSquare } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
               El efecto Pathos en <span className="text-sky-600">tu día a día</span>
            </h2>
            <p className="text-slate-600 text-lg">
                La transformación no es abstracta. Se nota en los números y en la tranquilidad con la que operas.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sky-600 fade-in-section group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                    <Eye className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visibilidad Premium</h3>
                <p className="text-slate-600">
                    Tu web trabajará por ti 24/7, dando una imagen profesional incluso cuando duermes.
                </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sky-600 fade-in-section group hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                    <Clock className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tiempo Recuperado</h3>
                <p className="text-slate-600">
                    Al automatizar la gestión de esos clientes nuevos, recuperas horas para liderar y tomar decisiones.
                </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sky-600 fade-in-section group hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                    <CheckSquare className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Coherencia Total</h3>
                <p className="text-slate-600">
                    Tu presencia digital y tus procesos internos hablarán el mismo idioma. Sin fricción.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;