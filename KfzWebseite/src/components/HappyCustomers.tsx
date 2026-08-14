'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageSlideshow from '@/components/ImageSlideshow';

/**
 * Kundenfotos für die Slideshow.
 * Neue Fotos einfach nach `public/images/` legen und hier unten anhängen –
 * die Slideshow zeigt sie dann automatisch mit.
 */
const customerPhotos = [
  '/images/kunde_vw_bus.jpg',
  '/images/kunde_mercedes.jpg',
];

const HappyCustomers = () => {
  return (
    <section id="kunden" className="py-10 md:py-20 bg-anthracite relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
          {/* Kundenfotos als Slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-[45%] md:w-[42%] flex-shrink-0"
          >
            <ImageSlideshow
              images={customerPhotos}
              alt="Zufriedene Kunden bei der Fahrzeugübergabe bei SEM MotorenTec"
              interval={4000}
              sizes="(max-width: 640px) 100vw, 420px"
              quality={85}
              pauseOnHover={false}
              className="w-full aspect-[4/5] rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
            />
          </motion.div>

          {/* Text daneben */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full sm:flex-1"
          >
            <p className="text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2 md:mb-3">
              Zufriedene Kunden
            </p>
            <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-3 md:mb-4">
              Abgeholt, zufrieden,<br className="hidden md:block" /> wieder unterwegs
            </h2>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              Der schönste Moment unserer Arbeit ist die Fahrzeugübergabe: Der Motor läuft wieder
              rund und unsere Kunden fahren mit einem guten Gefühl vom Hof – vom Familienbus über
              den Transporter bis zur Limousine, aus der Region und bundesweit.
            </p>
            <a
              href="/kontakt"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base shadow-lg shadow-accent/30 btn-hover btn-glow btn-shine"
            >
              <span>Jetzt Anfrage stellen</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hintergrund-Akzent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HappyCustomers;
