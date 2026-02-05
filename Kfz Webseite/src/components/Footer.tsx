'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-anthracite-dark pt-16 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo - Full Width */}
        <div className="mb-12">
          <img
            src="/images/logo.JPG"
            alt="SEM MotorenTec"
            className="h-20 md:h-28 w-auto -ml-6"
          />
        </div>

        {/* Three Columns - Same Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Kontakt */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">Kontakt</h4>
            <div className="space-y-4">
              <a href="tel:+491603872886" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">0160 3872886</span>
              </a>
              <a href="mailto:info@sem-motorentec.com" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">info@sem-motorentec.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm">Windelsbleicherstr. 188a, 33659 Bielefeld</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-white/60 text-xs uppercase tracking-wider mb-2">Öffnungszeiten</h5>
              <p className="text-white/80 text-sm">Mo - Fr: 08:00 - 18:00</p>
              <p className="text-white/80 text-sm">Sa: 09:00 - 14:00</p>
            </div>
          </div>

          {/* Column 2: Google Maps */}
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Windelsbleicherstr+188a+33659+Bielefeld"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-52 w-full rounded-xl overflow-hidden border border-white/10 group shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7086887552554!2d13.4009696!3d52.5204485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzA0LjQiTiAxM8KwMjQnMDMuNSJF!5e0!3m2!1sde!2sde!4v1614782345678!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                className="group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 right-3 bg-white text-anthracite text-xs font-bold px-3 py-1.5 rounded shadow-lg flex items-center gap-1.5 pointer-events-none">
                <MapPin size={14} className="text-accent" />
                <span>Auf Karte zeigen</span>
              </div>
            </a>
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
          <div className="flex space-x-8">
            <Link href="/impressum" className="text-white/30 text-xs hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-white/30 text-xs hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="text-white/30 text-xs hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
