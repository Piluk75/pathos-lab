import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Services: React.FC = () => {
  const { content } = useContent();
  const { services } = content;

  if (!services) return null;

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
          className="w-full h-full object-cover opacity-50 blur-[2px] scale-105 saturate-50"
        />
        <div className="absolute inset-0 bg-white/50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="mb-20 text-center fade-in-section">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6 relative">
            {services.header.title_main} <span className="text-sky-600">{services.header.title_accent1}</span> + <span className="text-sky-600">{services.header.title_accent2}</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium mb-4">
            {services.header.subtitle}
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {services.header.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Column 1: EL ESCAPARATE */}
          <div className="relative group p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-white/50 overflow-hidden fade-in-section shadow-lg hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
              <Monitor size={180} aria-hidden="true" focusable="false" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-sky-600 font-bold rounded-full text-sm mb-6 w-fit uppercase tracking-wider">{services.escaparate.badge}</div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">{services.escaparate.title}</h3>
              <p className="text-slate-600 mb-8 text-lg italic">
                "{services.escaparate.quote}"
              </p>

              <ul className="space-y-6 mb-8">
                {services.escaparate.features.map((item: any, idx: number) => (
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
                <p className="font-bold text-pathos-dark mb-6">{services.escaparate.result_label} <span className="font-normal text-slate-600">{services.escaparate.result_text}</span></p>

                <Link to="/portfolio" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold hover:bg-slate-50 hover:border-sky-200 hover:text-sky-600 transition-all duration-300 group/btn shadow-sm">
                  {services.escaparate.cta_text}
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
              <div className="inline-block px-4 py-1.5 bg-pathos-cyan/20 text-pathos-cyan font-bold rounded-full text-sm mb-6 w-fit uppercase tracking-wider">{services.motor.badge}</div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">{services.motor.title}</h3>
              <p className="text-blue-100 mb-8 text-lg italic">
                "{services.motor.quote}"
              </p>

              <ul className="space-y-6 mb-8">
                {services.motor.features.map((item: any, idx: number) => (
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
                <p className="font-bold text-pathos-cyan mb-6">{services.motor.result_label} <span className="font-normal text-blue-100">{services.motor.result_text}</span></p>

                <Link to="/demo" target="_blank" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-pathos-cyan/10 border border-pathos-cyan/50 text-pathos-cyan font-semibold hover:bg-pathos-cyan hover:text-slate-900 transition-all duration-300 group/btn">
                  {services.motor.cta_text}
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