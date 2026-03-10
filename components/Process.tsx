import React from 'react';
import { Lightbulb, Layers, Rocket } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Process: React.FC = () => {
  const { content } = useContent();
  const { process } = content;
  const icons = [Lightbulb, Layers, Rocket];

  if (!process) return null;

  return (
    <section id="process" className="py-32 bg-pathos-dark text-white relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center mb-20 fade-in-section">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            {process.header.title_main}<span className="text-pathos-cyan">{process.header.title_accent}</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            {process.header.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {process.list.map((step: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="relative group fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Connector Line (Desktop) */}
                {index < process.list.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-700 -z-10 group-hover:bg-pathos-cyan/50 transition-colors" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg group-hover:border-pathos-cyan group-hover:bg-pathos-cyan/10 group-hover:scale-110 transition-all duration-300 z-10">
                    <Icon className="w-10 h-10 text-white group-hover:text-pathos-cyan transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-pathos-cyan text-lg align-top">{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed px-4">
                    {step.description}
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

export default Process;