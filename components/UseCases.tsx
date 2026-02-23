import React from 'react';
import { Briefcase, ShoppingBag, Stethoscope, Landmark } from 'lucide-react';

const cases = [
  {
    industry: "Legal",
    title: "Contract Analysis",
    description: "Review thousands of pages of legal documents in minutes to identify risks and clauses.",
    icon: Briefcase,
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    industry: "E-Commerce",
    title: "Inventory & Support",
    description: "Automate restocking based on predictive demand and handle returns without human intervention.",
    icon: ShoppingBag,
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    industry: "Healthcare",
    title: "Patient Intake",
    description: "Streamline patient scheduling and data entry, allowing doctors to spend more time on care.",
    icon: Stethoscope,
    image: "https://picsum.photos/600/400?random=12"
  },
  {
    industry: "Finance",
    title: "Fraud Detection",
    description: "Real-time transaction analysis to flag and block suspicious activity instantly.",
    icon: Landmark,
    image: "https://picsum.photos/600/400?random=13"
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-section">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Solving Real <span className="text-gradient">Problems</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Tailored solutions for industries that demand precision and speed.
            </p>
          </div>
          <a href="#contact" className="hidden md:block text-pathos-primary font-semibold hover:translate-x-1 transition-transform">
            View all industries &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer fade-in-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors z-10" />
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2 text-pathos-cyan font-medium text-sm tracking-wide uppercase">
                  <useCase.icon size={16} />
                  {useCase.industry}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;