'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!mounted) return null;

  const menuItems = [
    { href: '/', label: 'Startseite' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/kontakt-info', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Background Blur Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome || isMobileMenuOpen ? 'py-5 shadow-lg' : 'bg-transparent py-8'
          }`}
        style={{ backgroundColor: isScrolled || !isHome || isMobileMenuOpen ? '#1a1a1a' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.JPG"
              alt="SEM MotorenTec"
              width={300}
              height={100}
              priority={true}
              className="h-16 md:h-24 w-auto -ml-6"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-lg font-medium text-white/80 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              Anfrage-Formular
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Compact Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <div className="px-6 py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${pathname === item.href
                        ? 'bg-accent/20 text-accent'
                        : 'text-white hover:bg-white/5'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-3 flex flex-col gap-3"
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-accent hover:bg-accent-dark text-white px-4 py-3 rounded-lg text-center font-bold shadow-lg shadow-accent/30 transition-all text-lg"
                  >
                    Anfrage-Formular
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/491603872886"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col items-center justify-center gap-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] py-3 rounded-lg transition-colors border border-[#25D366]/20"
                    >
                      <MessageCircle size={24} />
                      <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
                    </a>
                    <a
                      href="https://www.instagram.com/sem_motorentec/?utm_source=ig_web_button_share_sheet"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 hover:from-[#833ab4]/20 hover:via-[#fd1d1d]/20 hover:to-[#fcb045]/20 text-white/90 py-3 rounded-lg transition-colors border border-white/10"
                    >
                      <Instagram size={24} className="text-[#fd1d1d]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
