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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const getHref = (item: typeof navItems[0]) => {
    if (item.external) return item.href;
    if (isInternalPage) return item.href;
    return item.href === '/' ? '#' : item.href.replace('/', '');
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'
          }`}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Pathos Inicio">
            <img
              src="/images/logo-pathos.webp"
              alt="Pathos Lab Logo"
              className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
              width={200}
              height={80}
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
            className="md:hidden text-pathos-dark p-2 z-[1001] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" focusable="false" /> : <Menu size={24} aria-hidden="true" focusable="false" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - fuera del nav para evitar problemas de z-index */}
      {isOpen && (
        <div
          id="mobile-menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '100px',
            paddingLeft: '32px',
            paddingRight: '32px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={getHref(item)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#1e293b',
                borderBottom: '1px solid #f1f5f9',
                paddingBottom: '16px',
                marginBottom: '8px',
                textDecoration: 'none',
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/contact"
            style={{
              marginTop: '16px',
              textAlign: 'center',
              padding: '12px 24px',
              backgroundColor: '#1e293b',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
            onClick={() => setIsOpen(false)}
          >
            Empezar Ahora
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

