import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code, Cpu, Activity, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pathos-dark text-white" aria-label="Introducción">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

      {/* Animated Glowing Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-pathos-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pathos-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pathos-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Text Content */}
        <div className="max-w-2xl fade-in-section">

          <h1 className="font-display text-4xl lg:text-7xl font-bold leading-[1.1] mb-8">
            {hero.title_part1} <span className="text-gradient-light">{hero.title_part2}</span> {hero.title_part3}<br />
            {hero.title_part4} <span className="text-gradient-light">{hero.title_part5}</span>.
          </h1>

          <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pathos-dark rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {hero.cta_primary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-colors backdrop-blur-sm"
            >
              {hero.cta_secondary}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display text-white">{hero.label1_value}</span>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{hero.label1_text}</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display text-white">{hero.label2_value}</span>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{hero.label2_text}</span>
            </div>
          </div>
        </div>

        {/* Visual Element - The "Digital Core" */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center fade-in-section">

          {/* Main Container */}
          <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

            {/* Rotating Rings */}
            <div className="absolute w-[80%] h-[80%] border border-pathos-cyan/30 rounded-full animate-spin-slow border-dashed"></div>
            <div className="absolute w-[60%] h-[60%] border border-pathos-purple/30 rounded-full animate-reverse-spin border-dotted"></div>

            {/* The Core */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-pathos-primary to-pathos-cyan rounded-full blur-[50px] animate-pulse-slow opacity-60"></div>
            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <Zap className="text-pathos-cyan w-10 h-10 fill-current" aria-hidden="true" focusable="false" />
            </div>

            {/* Floating Elements (Orbiting) */}

            {/* Element 1: Code/Web */}
            <div className="absolute top-[10%] left-[10%] p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                  <Code size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Rendimiento</div>
                  <div className="text-sm font-bold text-white">Carga Ultrarrápida</div>
                </div>
              </div>
            </div>

            {/* Element 2: AI/Automation */}
            <div className="absolute bottom-[20%] right-[0%] p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                  <Cpu size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Agente IA</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    Chatbot 24/7 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Element 3: Efficiency */}
            <div className="absolute bottom-[10%] left-[15%] p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-white/5 animate-float" style={{ animationDuration: '8s' }}>
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-green-400" aria-hidden="true" focusable="false" />
                <span className="text-xs font-mono text-green-400">+450% Eficiencia</span>
              </div>
            </div>

            {/* Element 4: Sparkle */}
            <div className="absolute top-[20%] right-[15%] animate-pulse">
              <Sparkles className="text-yellow-400 w-8 h-8 opacity-80" aria-hidden="true" focusable="false" />
            </div>

          </div>
        </div>
      </div>

      {/* Fade at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;