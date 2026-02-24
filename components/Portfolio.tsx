import React from 'react';
import { Star, Clock, Users, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const stats = [
  { icon: <Star className="w-6 h-6" />, value: '100%', label: 'Compromiso' },
  { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Operatividad' },
  { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Proyectos' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '98%', label: 'Satisfacción' },
];

// Esto lee automáticamente todos los archivos .md de la carpeta _portfolio
const projectFiles = import.meta.glob('/_portfolio/*.md', { eager: true, as: 'raw' });

// Función para parsear el frontmatter de los archivos markdown
function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });
  return fm;
}

const projects = Object.values(projectFiles).map((raw) => parseFrontmatter(raw as string));

const Portfolio: React.FC = () => {
  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans selection:bg-pathos-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
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
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 text-pathos-primary">
                  {stat.icon}
                </div>
                <div className="font-display text-4xl font-bold mb-2 tracking-tight text-slate-900">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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

          {projects.length === 0 ? (
            <div className="text-center py-24 text-slate-400 text-xl">
              Próximamente — estamos preparando nuestros casos de éxito.
            </div>
          ) : (
            <div className="space-y-48">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-start`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 !== 0 ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 relative group w-full"
                  >
                    {project.featured_image && (
                      <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white mb-8">
                        <img
                          src={project.featured_image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    )}
                    {project.url && (
                      <div className="flex justify-center">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-10 py-4 rounded-2xl border border-pathos-primary/30 bg-pathos-primary/5 text-pathos-primary font-bold hover:bg-pathos-primary/10 transition-all group text-xl"
                        >
                          Ver proyecto
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 !== 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    {project.category && (
                      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pathos-primary/30 bg-pathos-primary/10 text-pathos-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        <Globe className="w-4 h-4" />
                        {project.category}
                      </div>
                    )}

                    <ul className="space-y-8 mb-12">
                      {project.challenge && (
                        <li className="flex flex-col gap-2">
                          <span className="font-display text-slate-900 font-bold text-xl lg:text-2xl tracking-tight">El Reto:</span>
                          <span className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light">{project.challenge}</span>
                        </li>
                      )}
                      {project.solution && (
                        <li className="flex flex-col gap-2">
                          <span className="font-display text-slate-900 font-bold text-xl lg:text-2xl tracking-tight">La Solución:</span>
                          <span className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light">{project.solution}</span>
                        </li>
                      )}
                      {project.results && (
                        <li className="flex flex-col gap-2">
                          <span className="font-display text-slate-900 font-bold text-xl lg:text-2xl tracking-tight">Los Resultados:</span>
                          <span className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light">{project.results}</span>
                        </li>
                      )}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
