import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import DigitalTrap from './components/DigitalTrap';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
const Admin = React.lazy(() => import('./components/Admin'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Contact = React.lazy(() => import('./components/Contact'));
const LegalNotice = React.lazy(() => import('./components/LegalNotice'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('./components/CookiePolicy'));
const Demo = React.lazy(() => import('./components/Demo'));
const Blog = React.lazy(() => import('./components/Blog'));
const BlogPost = React.lazy(() => import('./components/BlogPost'));

import { ContentProvider } from './context/ContentContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => {
  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section, .fade-in-blur');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased text-slate-900 bg-pathos-bg">
      <a href="#main" className="skip-link">Saltar al contenido principal</a>
      <Navbar />

      <main id="main">
        <Hero />
        <Problem />
        <DigitalTrap />
        <Services />
        <Benefits />
        <Process />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <React.Suspense fallback={<div className="min-h-screen bg-pathos-bg" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </React.Suspense>
      </Router>
    </ContentProvider>
  );
}

export default App;
