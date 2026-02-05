'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we are on the homepage to decide scroll behavior or background
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-anthracite/95 backdrop-blur-md py-5 shadow-lg' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.JPG"
            alt="SEM MotorenTec"
            className="h-16 md:h-24 w-auto -ml-6"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Startseite
          </Link>

          {/* On homepage we can anchor scroll, on other pages we link to home anchor or service page. 
              Let's standardise on linking to sections if on home, or full path if elsewhere. 
              Actually, simpler: Link to /#section works from anywhere in Next.js but might cause scroll jump.
              However, since "Leistungen" is now a teaser on home, keeping it there is fine.
          */}

          <Link href="/leistungen" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Leistungen
          </Link>

          <Link href="/angebote" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Angebote
          </Link>


          <Link href="/ueber-uns" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Über uns
          </Link>

          <Link
            href="/kontakt"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Anfrage-Formular
          </Link>
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
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Startseite
          </Link>

          <Link href="/leistungen" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Leistungen
          </Link>

          <Link href="/angebote" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Angebote
          </Link>


          <Link href="/ueber-uns" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white py-2">
            Über uns
          </Link>

          <Link
            href="/kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-accent text-white px-6 py-3 rounded-lg text-center font-semibold mt-4"
          >
            Anfrage-Formular
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
