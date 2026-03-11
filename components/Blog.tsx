import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export const blogPosts = [
  {
    id: 'seo-geo-ia-2026',
    title: 'SEO vs GEO: Cómo dominar la visibilidad en la era de la IA',
    excerpt: 'Descubre por qué ya no basta con aparecer en Google y cómo preparar tu web para que ChatGPT y Perplexity te recomienden.',
    date: '24 Feb 2026',
    author: 'Pathos Team',
    category: 'Estrategia',
    image: '/images/logo-pathos.webp',
    content: `
      <p>El panorama digital está cambiando a una velocidad vertiginosa. Durante décadas, el SEO (Search Engine Optimization) ha sido el rey indiscutible para captar tráfico. Sin embargo, estamos entrando en la era del GEO (Generative Engine Optimization).</p>
      
      <h3>¿Qué es el GEO?</h3>
      <p>A diferencia del SEO tradicional, que se centra en escalar posiciones en una lista de enlaces, el GEO se enfoca en que tu contenido sea la fuente de verdad para los modelos de lenguaje (LLMs) como ChatGPT, Claude o Gemini.</p>
      
      <h3>Claves para dominar el GEO</h3>
      <ul>
        <li><strong>Autoridad Semántica:</strong> No se trata de palabras clave, sino de conceptos y relaciones.</li>
        <li><strong>Datos Estructurados:</strong> Facilitar a la IA la comprensión de quién eres y qué haces.</li>
        <li><strong>Citas y Referencias:</strong> Ser mencionado en sitios de alta confianza.</li>
      </ul>
      
      <p>En Pathos Lab, integramos estas estrategias desde la arquitectura misma de tu sitio web.</p>
    `
  },
  {
    id: 'automatizacion-pymes-ahorro',
    title: 'Automatización para PYMES: Ahorra 10 horas a la semana',
    excerpt: 'Implementar flujos de trabajo inteligentes no es solo para grandes corporaciones. Te enseñamos cómo empezar hoy mismo.',
    date: '20 Feb 2026',
    author: 'Pathos Team',
    category: 'Automatización',
    image: '/images/logo-pathos.webp',
    content: `
      <p>El tiempo es el recurso más valioso de cualquier empresario. A menudo, las tareas administrativas consumen la mayor parte de la jornada, dejando poco espacio para la estrategia y el crecimiento.</p>
      
      <h3>El poder de los Agentes de IA</h3>
      <p>Imagina un asistente que nunca duerme, que clasifica tus emails, agenda tus citas y actualiza tu CRM al instante. Eso es lo que logramos con la automatización de procesos.</p>
      
      <h3>3 Pasos para empezar</h3>
      <ol>
        <li>Identifica tareas repetitivas.</li>
        <li>Conecta tus herramientas (Zapier, Make, APIs).</li>
        <li>Implementa un Agente de IA para la toma de decisiones simple.</li>
      </ol>
    `
  },
  {
    id: 'diseno-web-ia-conversion',
    title: 'Diseño Web IA: Estética que convierte en 2026',
    excerpt: 'Las tendencias de diseño para este año se centran en la personalización en tiempo real mediante inteligencia artificial.',
    date: '15 Feb 2026',
    author: 'Pathos Team',
    category: 'Diseño',
    image: '/images/logo-pathos.webp',
    content: `
      <p>Ya no es suficiente con tener una web "bonita". En 2026, el diseño debe ser dinámico. La IA nos permite adaptar la interfaz según el comportamiento del usuario en tiempo real.</p>
      
      <h3>Personalización Hiper-Local</h3>
      <p>Gracias al GEO y a la IA, podemos mostrar contenido específico según la ubicación y las necesidades detectadas del visitante, aumentando la tasa de conversión hasta en un 40%.</p>
    `
  }
];

const Blog: React.FC = () => {
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
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-pathos-primary/20 bg-pathos-primary/5 text-pathos-primary text-xs font-bold uppercase tracking-widest mb-10"
          >
            Insights, Estrategia y Tecnología
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl lg:text-8xl font-bold mb-10 tracking-tight text-slate-900"
          >
            Nuestro <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            Explora las últimas tendencias en Diseño Web IA, Automatización y cómo dominar el nuevo ecosistema digital.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="750"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-pathos-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-4 group-hover:text-pathos-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-pathos-primary font-bold group/link"
                    >
                      Leer más
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
