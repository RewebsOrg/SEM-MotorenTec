'use client';

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-anthracite-dark pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <img
              src="/images/logo.JPG"
              alt="SEM MotorenTec"
              className="h-16 md:h-24 w-auto -ml-6"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Ihr Partner für professionelle Motoreninstandsetzung und Motorüberholung. Qualität und Zuverlässigkeit bundesweit.
            </p>
            {/* Social icons moved to right column */}
          </div>

          {/* Leistungen column removed */}

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Kontakt & Standort</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-accent" />
                <span className="text-sm">+49 (0) 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-accent" />
                <span className="text-sm">info@sem-motorentec.de</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm">Werkstraße 42, 12345 Musterstadt</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white/60 text-xs uppercase tracking-wider mb-2">Öffnungszeiten</h5>
              <p className="text-white/80 text-sm">Mo - Fr: 08:00 - 18:00</p>
              <p className="text-white/80 text-sm">Sa: 09:00 - 14:00</p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Werkstraße+42+12345+Musterstadt"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 w-full rounded-xl overflow-hidden border border-white/10 group shadow-2xl"
              >
                {/* Map Placeholder / Iframe */}
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
          </div>
          {/* Duplicates removed */}

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Direkter Kontakt</h4>
            <a
              href="#anfrage"
              className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20 mb-4"
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
              className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/20 mt-4"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs tracking-wide">
            © 2026 SEM MotorenTec. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/30 text-xs hover:text-white transition-colors">Impressum</a>
            <a href="#" className="text-white/30 text-xs hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="text-white/30 text-xs hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
