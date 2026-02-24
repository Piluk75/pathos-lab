import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-pathos-bg pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/images/logo-pathos.webp" 
                alt="Pathos Lab Logo" 
                className="h-16 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-500 max-w-sm">
              Combinamos inteligencia artificial con empatía humana para crear tecnología que sirve a las personas, no al revés.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="/#solutions" className="text-slate-500 hover:text-pathos-primary transition-colors">Diseño Web</a></li>
              <li><a href="/#solutions" className="text-slate-500 hover:text-pathos-primary transition-colors">Automatización</a></li>
              <li><a href="/#benefits" className="text-slate-500 hover:text-pathos-primary transition-colors">Consultoría AI</a></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-pathos-primary transition-colors">Soporte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="/#benefits" className="text-slate-500 hover:text-pathos-primary transition-colors">Nosotros</a></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-pathos-primary transition-colors">Blog</Link></li>
              <li><a href="/faq" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pathos-primary transition-colors">FAQ</a></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-pathos-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Pathos Lab. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs text-slate-400">
              <Link to="/aviso-legal" className="hover:text-pathos-primary transition-colors">Aviso Legal</Link>
              <Link to="/privacidad" className="hover:text-pathos-primary transition-colors">Política de Privacidad</Link>
              <Link to="/cookies" className="hover:text-pathos-primary transition-colors">Política de Cookies</Link>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="https://x.com/pathos_ia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pathos-primary transition-colors" aria-label="Síguenos en X">
              <XIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pathos-primary transition-colors" aria-label="Síguenos en LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/pathos.ia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pathos-primary transition-colors" aria-label="Síguenos en Instagram">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-400">
            Inteligencia 💙 Empatía
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
