'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const heroImages = [
  '/images/IMG_9191.JPG',
  '/images/IMG_9192.JPG',
  '/images/IMG_9193.JPG',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-anthracite">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        {heroImages.map((img, index) => (
          index === currentImage && (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${img}')`,
                filter: index === 2 ? 'brightness(0.7)' : 'brightness(0.5)'
              }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Gradient Overlay - nur links für Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">
              Motorinstandsetzung für alle Marken
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              IHR MOTOR MACHT<br />
              PROBLEME?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                WIR BRINGEN IHN IN BESTFORM.
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Ein Motor ist das Herz jedes Fahrzeugs. Wir sind Ihr zuverlässiger Partner für
              Motoreninstandsetzung, Motorüberholung und Reparatur – bundesweit.
            </p>

            {/* CTA Buttons - Prominent Anfrage Button */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#anfrage"
                className="group bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/30 hover:shadow-accent/50 text-lg animate-glow"
              >
                <span>Jetzt Anfrage stellen</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#leistungen"
                className="glass-card text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Unsere Leistungen
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage
              ? 'bg-accent w-8'
              : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Scrollen</span>
      </div>
    </section>
  );
};

export default Hero;
