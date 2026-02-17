'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const heroImages = [
  '/images/IMG_9191.JPG',
  '/images/IMG_9192.JPG',
  '/images/IMG_9193.JPG',
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

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
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt={`Motorinstandsetzung Werkstatt Bild ${index + 1}`}
                fill
                priority={true}
                className="object-cover"
                style={{
                  filter: index === 2 ? 'brightness(0.7)' : 'brightness(0.5)'
                }}
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Gradient Overlay - nur links für Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-12 md:pb-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-bold tracking-widest text-sm md:text-base lg:text-lg uppercase mb-2 md:mb-4">
              Motorinstandsetzung aller Marken
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6 leading-[1.1]">
              IHR MOTOR MACHT<br />
              PROBLEME?  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                WIR BRINGEN IHN IN BESTFORM.
              </span>
            </h1>

            {/* CTA Buttons - Proportional to text */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="/kontakt"
                className="group bg-accent hover:bg-accent-dark text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-accent/50 text-sm md:text-lg animate-glow"
              >
                <span>Jetzt Anfrage stellen</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-[22px] md:h-[22px]" />
              </a>
              <a
                href="#leistungen"
                className="glass-card text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2 text-sm md:text-base"
              >
                Unsere Leistungen
                <ChevronRight size={18} className="md:w-5 md:h-5" />
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
