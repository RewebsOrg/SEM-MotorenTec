'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ImageSlideshow from '@/components/ImageSlideshow';
import { services, getHomeGallery } from '@/data/services';

/**
 * Bilder für die Slideshow über der Überschrift – reiner Schönheitsfaktor.
 * Weitere Fotos einfach hier ergänzen.
 */
const showcaseImages = [
  '/images/slideshow-motor-haengen.jpeg',
  '/images/slideshow-motor-zylinder.jpeg',
  '/images/2-BMWs.jpeg',
  '/images/VW_Motoraustausch.jpeg',
];

const Services = () => {
  return (
    <section id="leistungen" className="py-16 bg-anthracite relative overflow-hidden">
      {/* Bilderstreifen aus der Werkstatt – randlos über die volle Breite */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full mb-12 md:mb-20"
      >
        <ImageSlideshow
          images={showcaseImages}
          alt="Einblicke aus unserer Motoreninstandsetzung"
          interval={2800}
          sizes="100vw"
          quality={90}
          pauseOnHover={false}
          className="w-full aspect-[3/2] sm:aspect-[2/1] lg:aspect-[2.6/1]"
        />
        {/* Weiche Kanten nach oben und unten */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-anthracite to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-anthracite to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">Von Steuerkettenwechsel bis Generalüberholung</h2>
          <h3 className="text-white text-[1.6rem] md:text-3xl lg:text-5xl font-black tracking-tight mb-2 md:mb-4">MOTORSCHADEN BEHEBEN - BUNDESWEITER SERVICE</h3>
          <p className="text-white/60 max-w-2xl mx-auto hidden md:block">
            Von der Diagnose bis zur kompletten Motorüberholung – wir bieten Ihnen das volle Programm für Ihren Motor.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Services with alternating layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ImageSlideshow
                    images={getHomeGallery(service)}
                    alt={`${service.title} - ${service.subtitle}`}
                    href={`/leistungen/${service.slug}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    className="w-full h-48 sm:h-64 md:h-80 rounded-2xl"
                  >
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 bg-accent/90 backdrop-blur-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-lg font-bold flex items-center gap-1 md:gap-2 text-xs md:text-base pointer-events-none">
                      {service.icon}
                      {service.subtitle}
                    </div>
                  </ImageSlideshow>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm md:text-lg lg:text-xl leading-relaxed mb-3 md:mb-6">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 md:gap-2 text-white/60">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-xs md:text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="inline-flex items-center gap-2 text-white bg-accent hover:bg-accent-dark font-semibold px-6 py-3 rounded-lg transition-all btn-hover btn-glow btn-shine"
                  >
                    <span>Details ansehen</span>
                  </Link>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold group px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-accent/40 btn-hover animate-glow"
                  >
                    <span>Jetzt anfragen</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Services;
