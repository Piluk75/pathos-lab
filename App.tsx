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
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import Demo from './components/Demo';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Admin from './components/Admin';
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
      </Router>
    </ContentProvider>
  );
}

export default App;
