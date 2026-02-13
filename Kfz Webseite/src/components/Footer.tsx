'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Settings } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const Footer = () => {
  const { isMapAllowed, allowMap, showSettings } = useCookieConsent();

  return (
    <footer className="bg-anthracite-dark pt-16 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo - Full Width */}
        <div className="mb-12">
          <Image
            src="/images/logo.JPG"
            alt="SEM MotorenTec Logo"
            width={300}
            height={100}
            className="h-20 md:h-28 w-auto -ml-6"
          />
        </div>

        {/* Three Columns - Same Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Kontakt */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">Kontakt</h4>
            <div className="space-y-4">
              <a href="tel:+4952197795644" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">0521 97795644</span>
              </a>
              <a href="https://wa.me/491603872886" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle size={16} className="text-[#25D366]" />
                </div>
                <div className="flex items-center">
                  <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden text-[#25D366] font-bold whitespace-nowrap">
                    WhatsApp&nbsp;
                  </span>
                  <span className="text-sm transition-transform duration-300">0160 3872886</span>
                </div>
              </a>
              <a href="mailto:info@sem-motorentec.de" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">info@sem-motorentec.de</span>
              </a>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm">Windelsbleicherstr. 188a, 33659 Bielefeld</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-white/60 text-xs uppercase tracking-wider mb-2">Öffnungszeiten</h5>
              <p className="text-white/80 text-sm">Mo - Fr: 09:00 - 18:00</p>
              <p className="text-white/80 text-sm">Sa: 09:00 - 12:00</p>
            </div>
          </div>

          {/* Column 2: Google Maps */}
          <div>
            <div className="block relative h-52 w-full rounded-xl overflow-hidden border border-white/10 group shadow-2xl bg-anthracite-light">
              {isMapAllowed ? (
                <iframe
                  src="https://maps.google.com/maps?q=Windelsbleicherstr.%20188a,+33659+Bielefeld&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <MapPin size={32} className="text-white/20 mb-3" />
                  <p className="text-white/60 text-xs mb-3">
                    Google Maps benötigt Ihre Zustimmung. Bitte akzeptieren Sie externe Medien in den Cookie-Einstellungen.
                  </p>
                  <button
                    onClick={allowMap}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-white/10"
                  >
                    Google Maps aktivieren
                  </button>
                </div>
              )}

              {isMapAllowed && (
                <>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Windelsbleicherstr+188a+33659+Bielefeld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white text-anthracite text-xs font-bold px-3 py-1.5 rounded shadow-lg flex items-center gap-1.5 z-20"
                  >
                    <MapPin size={14} className="text-accent" />
                    <span>Auf Karte zeigen</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Column 3: Direkter Kontakt */}
          <div>
            <div className="space-y-4">
              <a
                href="/kontakt"
                className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
              >
                Anfrage stellen
              </a>
              <a
                href="https://wa.me/491603872886"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/sem_motorentec/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/20"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs tracking-wide">
            © 2026 SEM MotorenTec. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1 -mx-2">
            <Link href="/impressum" className="text-white/30 text-sm hover:text-white transition-colors px-4 py-3 min-h-[44px] flex items-center">Impressum</Link>
            <Link href="/datenschutz" className="text-white/30 text-sm hover:text-white transition-colors px-4 py-3 min-h-[44px] flex items-center">Datenschutz</Link>
            <Link href="/agb" className="text-white/30 text-sm hover:text-white transition-colors px-4 py-3 min-h-[44px] flex items-center">AGB</Link>
            <button
              onClick={showSettings}
              className="text-white/30 text-sm hover:text-white transition-colors flex items-center gap-1 px-4 py-3 min-h-[44px]"
            >
              <Settings size={14} />
              <span>Cookie-Einstellungen</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
