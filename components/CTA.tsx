import React from 'react';
import { useContent } from '../context/ContentContext';

const CTA: React.FC = () => {
  const { content } = useContent();
  const { cta } = content;

  if (!cta) return null;

  return (
    <section className="py-32 bg-pathos-cyan relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center text-white relative z-10">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          {cta.title}
        </h2>
        <p className="text-xl mb-12 opacity-90 mx-auto max-w-2xl">
          {cta.description_part1}<span className="font-black italic underline decoration-white/30 decoration-offset-4">{cta.description_highlight}</span>{cta.description_part2}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-white text-pathos-cyan font-bold rounded-2xl hover:scale-105 transition-all text-xl shadow-xl hover:shadow-2xl">
            {cta.button_text}
          </button>
          <p className="text-sm opacity-70">{cta.bottom_text}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;