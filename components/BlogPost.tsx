import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogPosts } from './Blog';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans selection:bg-pathos-primary/30">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="pt-32 max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          <Link to="/" className="hover:text-pathos-primary transition-colors">Inicio</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-pathos-primary transition-colors">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-slate-900 truncate max-w-[200px]">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-pathos-primary/10 text-pathos-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
              <span className="font-bold text-slate-900">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-slate-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-slate-400" />
              <span>5 min lectura</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-12">
            <div 
              className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-xl prose-p:font-light
                prose-a:text-pathos-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6
                prose-li:text-slate-600 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-16 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-8">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-pathos-primary transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Volver al Blog
              </Link>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Compartir:</span>
                <button 
                  aria-label="Compartir esta entrada"
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-pathos-primary hover:border-pathos-primary transition-all"
                >
                  <Share2 size={18} aria-hidden="true" focusable="false" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
