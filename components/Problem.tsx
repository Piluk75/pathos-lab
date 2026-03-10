import React from 'react';
import { EyeOff, ZapOff } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Problem: React.FC = () => {
  const { content } = useContent();
  const { problem } = content;
  const icons = [EyeOff, ZapOff];

  if (!problem) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-xs font-bold text-sky-600 tracking-widest uppercase">{problem.badge}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-[1.15] lg:leading-[1.2]">
            {problem.title_main} <span className="text-sky-600">{problem.title_accent1}</span> {problem.title_mid} <span className="text-sky-600">{problem.title_accent2}</span> {problem.title_end}
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            {problem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {problem.list.map((item: any, idx: number) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="relative p-10 rounded-[2rem] bg-white border border-slate-100 fade-in-section hover:shadow-xl transition-all duration-300 overflow-hidden group" style={{ transitionDelay: `${idx * 0.2}s` }}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Overlay for contrast */}
                  <div className="absolute inset-0 bg-white/70 z-[1]"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-800 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Problem;
