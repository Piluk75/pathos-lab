import React from 'react';
import { Star, Clock, Users, TrendingUp, Globe, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const stats = [
  { icon: <Star className="w-6 h-6 text-cyan-400" />, value: '100%', label: 'Compromiso' },
  { icon: <Clock className="w-6 h-6 text-cyan-400" />, value: '24/7', label: 'Operatividad' },
  { icon: <Users className="w-6 h-6 text-cyan-400" />, value: '50+', label: 'Proyectos' },
  { icon: <TrendingUp className="w-6 h-6 text-cyan-400" />, value: '98%', label: 'Satisfacción' },
];

const projects = [
  {
    category: 'Consultoría',
    categoryIcon: <Globe className="w-4 h-4" />,
    details: [
      { label: 'El Reto', text: '"Sin presencia digital en un sector altamente competitivo."' },
      { label: 'La Solución', text: '"Diseño mobile-first, SEO avanzado y carga instantánea."' },
      { label: 'Los Resultados', text: '"Presencia digital sólida que aporta valor y seguridad."' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    link: 'https://gwm-ig.com/',
    color: 'cyan'
  },
  {
    category: 'E-commerce',
    categoryIcon: <ShoppingCart className="w-4 h-4" />,
    title: 'ModaStyle Boutique',
    description: 'E-commerce completo con pasarela de pagos y gestión de inventario. Diseño moderno optimizado para maximizar conversiones.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    stats: [
      { label: 'Ventas mensuales', value: '€25K+' },
      { label: 'Tasa conversión', value: '4.2%' },
      { label: 'Ticket medio', value: '€85' },
    ],
    color: 'emerald',
    reverse: true
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans selection:bg-pathos-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pathos-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-pathos-primary/20 bg-pathos-primary/5 text-pathos-primary text-xs font-bold uppercase tracking-widest mb-10"
          >
            Servicios de Desarrollo Web Profesional
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl lg:text-8xl font-bold mb-10 tracking-tight text-slate-900"
          >
            Nuestro <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            Transformamos ideas en experiencias digitales excepcionales. Cada proyecto es único, diseñado para potenciar tu negocio y conectar con tu audiencia.
          </motion.p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-6 h-6 text-pathos-primary' })}
                </div>
                <div className="font-display text-4xl font-bold mb-2 tracking-tight text-slate-900">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 flex justify-center"
          >
            <div className="w-7 h-12 rounded-full border-2 border-slate-200 flex justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-2.5 bg-pathos-primary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-32">
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-8 text-slate-900">
              Casos de <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Éxito</span>
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Cada proyecto cuenta una historia de transformación digital. Descubre cómo hemos ayudado a negocios como el tuyo a crecer.
            </p>
          </div>

          <div className="space-y-48">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-start`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: project.reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 relative group w-full"
                >
                  <div className={`absolute -inset-6 bg-gradient-to-r ${project.color === 'cyan' ? 'from-pathos-primary/10 to-blue-500/10' : 'from-emerald-500/10 to-teal-500/10'} rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title || project.category} 
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="750"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {project.details && project.link && (
                    <div className="flex justify-center">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-10 py-4 rounded-2xl border border-pathos-primary/30 bg-pathos-primary/5 text-pathos-primary font-bold hover:bg-pathos-primary/10 transition-all group text-xl cursor-pointer relative z-20 w-fit"
                      >
                        <span className="relative z-10">Ver proyecto</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                      </a>
                    </div>
                  )}
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: project.reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border ${project.color === 'cyan' ? 'border-pathos-primary/30 bg-pathos-primary/10 text-pathos-primary' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'} text-xs font-bold uppercase tracking-[0.2em] mb-8`}>
                    {project.categoryIcon}
                    {project.category}
                  </div>
                  
                  {project.details ? (
                    <ul className="space-y-8 mb-12">
                      {project.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex flex-col gap-2">
                          <span className="font-display text-slate-900 font-bold text-xl lg:text-2xl tracking-tight">{detail.label}:</span>
                          <span className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light">{detail.text}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <h3 className="font-display text-5xl lg:text-6xl font-bold mb-8 text-slate-900 tracking-tight">{project.title}</h3>
                      <p className="text-slate-600 text-xl mb-12 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </>
                  )}
                  
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-6 mb-12">
                      {project.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                          <div className={`font-display text-2xl font-bold mb-2 ${project.color === 'cyan' ? 'text-pathos-primary' : 'text-emerald-600'}`}>{stat.value}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-bold">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {!project.details && project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border ${project.color === 'cyan' ? 'border-pathos-primary/30 text-pathos-primary hover:bg-pathos-primary/10' : 'border-emerald-600 hover:bg-emerald-500/10'} font-bold transition-all group text-lg cursor-pointer relative z-20 w-fit`}
                    >
                      <span className="relative z-10">Ver proyecto</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
