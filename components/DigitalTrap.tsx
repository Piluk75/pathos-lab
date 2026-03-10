import React, { useEffect, useRef, useState } from 'react';
import { useContent } from '../context/ContentContext';

const DigitalTrap: React.FC = () => {
  const { content } = useContent();
  const { digital_trap } = content;
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffset(window.scrollY * 0.15);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!digital_trap) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-pathos-dark text-white flex items-center justify-center"
      aria-label="La Trampa Digital"
    >
      {/* Parallax Background Layers */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translateY(${offset}px)`
        }}
      ></div>

      {/* Floating Blobs (Parallax Reverse) */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-pathos-cyan rounded-full mix-blend-overlay blur-[120px] opacity-20 pointer-events-none"
        style={{ transform: `translateY(-${offset * 0.5}px)` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pathos-purple rounded-full mix-blend-overlay blur-[100px] opacity-20 pointer-events-none"
        style={{ transform: `translateY(-${offset * 0.2}px)` }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-blur">

        <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          {digital_trap.title_part1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{digital_trap.title_accent}</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 lg:p-12 rounded-3xl relative overflow-hidden group hover:border-pathos-cyan/30 transition-colors duration-500">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
            {digital_trap.main_text_part1}<strong className="text-white font-semibold">{digital_trap.main_text_highlight1}</strong>{digital_trap.main_text_part2}<strong className="text-white font-semibold">{digital_trap.main_text_highlight2}</strong>{digital_trap.main_text_part3}
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-lg">
              {digital_trap.bottom_text}
            </p>
          </div>
        </div>

      </div>

      {/* Gradient fade at bottom to blend with next white section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default DigitalTrap;