'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Instagram, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === '/';

  /** Aktiv ist der Menüpunkt, dessen Pfad exakt passt oder dessen Unterseite offen ist. */
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

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

  /** Leiste ist gefüllt, sobald gescrollt wurde, das Menü offen ist oder es keine Startseite ist. */
  const isSolid = isScrolled || !isHome || isMobileMenuOpen;

  const menuItems = [
    { href: '/', label: 'Startseite' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/motoren', label: 'Motoren' },
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
        className={`fixed w-full z-50 transition-all duration-500 ${isSolid
          ? 'py-4 bg-anthracite/85 backdrop-blur-xl shadow-lg shadow-black/40'
          : 'py-8 bg-transparent'
          }`}
      >
        {/* Blaue Lichtkante am unteren Rand */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-500 ${isSolid ? 'opacity-70' : 'opacity-0'
            }`}
        />
        {/* Weicher blauer Schimmer hinter der Leiste */}
        <div
          className={`absolute inset-x-0 -bottom-16 h-16 bg-accent/20 blur-2xl transition-opacity duration-500 pointer-events-none ${isSolid ? 'opacity-40' : 'opacity-0'
            }`}
        />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.JPG"
              alt="SEM MotorenTec"
              width={300}
              height={100}
              priority={true}
              className="h-16 md:h-24 w-auto -ml-6 transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-4 py-2.5 text-lg font-medium transition-colors duration-300 ${active ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {/* Mitwanderndes Hover-Feld */}
                  {hoveredItem === item.href && (
                    <motion.span
                      layoutId="navHover"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-accent/15 border border-accent/30 shadow-[0_0_25px_rgba(5,127,207,0.35)]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>

                  {/* Leuchtende Linie für die aktive Seite */}
                  {active && (
                    <motion.span
                      layoutId="navActive"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-light shadow-[0_0_12px_rgba(5,127,207,0.9)]"
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/kontakt"
              className="group relative overflow-hidden ml-4 bg-gradient-to-r from-accent to-accent-light text-white px-7 py-3 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/60 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Anfrage-Formular
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Glanz-Effekt beim Hovern */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              className={`text-white p-2.5 rounded-xl border transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-accent/20 border-accent/50 shadow-[0_0_20px_rgba(5,127,207,0.4)]'
                : 'bg-white/5 border-white/10 active:bg-accent/20'
                }`}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              className="lg:hidden overflow-hidden bg-anthracite/95 backdrop-blur-xl border-t border-accent/20"
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
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={`relative flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${isActive(item.href)
                        ? 'bg-accent/15 text-white border border-accent/30 shadow-[0_0_20px_rgba(5,127,207,0.25)]'
                        : 'text-white/80 border border-transparent hover:bg-white/5 hover:text-white hover:translate-x-1'
                        }`}
                    >
                      <span
                        className={`h-5 w-[3px] rounded-full transition-all duration-300 ${isActive(item.href)
                          ? 'bg-gradient-to-b from-accent to-accent-light shadow-[0_0_10px_rgba(5,127,207,0.9)]'
                          : 'bg-white/15'
                          }`}
                      />
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
                    className="block bg-accent hover:bg-accent-dark text-white px-4 py-3 rounded-lg text-center font-bold shadow-lg shadow-accent/30 text-lg btn-hover btn-glow btn-shine"
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
