import React from 'react';
import { Lightbulb, Layers, Rocket } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Auditoría & Diseño",
    description: "Definimos tu identidad visual y detectamos tus cuellos de botella operativos.",
    icon: Lightbulb
  },
  {
    number: "2",
    title: "Construcción Dual",
    description: "Diseñamos tu nueva web mientras programamos tus automatizaciones. Todo crece junto.",
    icon: Layers
  },
  {
    number: "3",
    title: "Lanzamiento",
    description: "Estrenas nueva imagen y nueva forma de trabajar. Te entregamos las llaves de un negocio renovado.",
    icon: Rocket
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-pathos-dark text-white relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20 fade-in-section">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            De la Idea a la Realidad en <span className="text-pathos-cyan">3 Pasos</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Un proceso claro para un resultado transformador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-700 -z-10 group-hover:bg-pathos-cyan/50 transition-colors" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg group-hover:border-pathos-cyan group-hover:bg-pathos-cyan/10 group-hover:scale-110 transition-all duration-300 z-10">
                  <step.icon className="w-10 h-10 text-white group-hover:text-pathos-cyan transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-pathos-cyan text-lg align-top">{step.number}.</span> {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;