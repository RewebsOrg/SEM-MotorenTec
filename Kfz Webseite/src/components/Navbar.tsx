'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-anthracite/95 backdrop-blur-md py-5 shadow-lg' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.JPG"
            alt="SEM MotorenTec"
            className="h-16 md:h-24 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/#startseite" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Startseite
          </a>

          <a href="/#leistungen" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Leistungen
          </a>

          <a href="/angebote" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Angebote
          </a>

          <a href="/#faq" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            FAQ
          </a>

          <a href="/#ueber-uns" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Über uns
          </a>

          <a
            href="/#anfrage"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Anfrage-Formular
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-anthracite-light/98 backdrop-blur-md absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <a href="/#startseite" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Startseite
          </a>

          <a href="/#leistungen" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Leistungen
          </a>

          <a href="/angebote" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Angebote
          </a>

          <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2 border-t border-white/10 pt-4">
            FAQ
          </a>

          <a href="/#ueber-uns" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Über uns
          </a>

          <a
            href="/#anfrage"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-accent text-white px-6 py-3 rounded-lg text-center font-semibold mt-4"
          >
            Anfrage-Formular
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
