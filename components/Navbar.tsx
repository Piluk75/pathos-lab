import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'Soluciones', href: '/#solutions' },
  { label: 'Beneficios', href: '/#benefits' },
  { label: 'Proceso', href: '/#process' },
  { label: 'Portfolio', href: '/portfolio' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isInternalPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (item: typeof navItems[0]) => {
    if (item.external) return item.href;
    if (isInternalPage) return item.href;
    return item.href === '/' ? '#' : item.href.replace('/', '');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group" aria-label="Pathos Inicio">
          <img 
            src="/images/logo-pathos.webp" 
            alt="Pathos Lab Logo" 
            className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={getHref(item)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-slate-600 hover:text-pathos-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pathos-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link 
            to="/contact"
            className="px-6 py-2.5 bg-pathos-dark text-white rounded-full text-sm font-semibold hover:bg-pathos-primary transition-colors shadow-lg hover:shadow-pathos-primary/25 transform hover:-translate-y-0.5 duration-200"
          >
            Empezar Ahora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-pathos-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" focusable="false" /> : <Menu size={24} aria-hidden="true" focusable="false" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-8 gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={getHref(item)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-lg font-medium text-slate-800 border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link 
            to="/contact"
            className="mt-4 w-full text-center px-6 py-3 bg-pathos-dark text-white rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Empezar Ahora
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
