'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Users, Shield, Wrench } from 'lucide-react';

const stats = [
  { number: '20+', label: 'Jahre Erfahrung' },
  { number: '2000+', label: 'Reparierte Motoren' },
  { number: '24h', label: 'Schnelle Antwort' },
];

const values = [
  {
    icon: <Target size={20} />,
    title: 'Präzision',
    description: 'Höchste Sorgfalt und Genauigkeit bei jeder Reparatur.',
  },
  {
    icon: <Users size={20} />,
    title: 'Kundennähe',
    description: 'Persönliche Beratung und transparente Kommunikation.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Qualität',
    description: 'Hochwertige Ersatzteile mit Gewährleistung.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Kompetenz',
    description: 'Erfahrene Motorspezialisten mit langjähriger Expertise.',
  },
];

const Promise = () => {
  return (
    <section id="ueber-uns" className="py-12 md:py-24 bg-anthracite-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4">Wer wir sind</h2>
          <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-2 md:mb-4">ÜBER UNS</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base hidden md:block">
            SEM MotorenTec – Ihr Spezialist für Motoreninstandsetzung mit Leidenschaft und Fachkompetenz.
          </p>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto mt-3 md:mt-6" />
        </div>

        {/* Main Content - Compact on Mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-16 mb-10 md:mb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-6">
                Maximale Lebensdauer, volle Leistung und absolute Zuverlässigkeit Ihres Motors.
              </h4>
              <p className="text-white/60 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                Ein Motor ist das Herz jedes Fahrzeugs. Bei Motorschaden sind wir Ihr zuverlässiger Partner
                für Motoreninstandsetzung und Reparatur.
              </p>
              <p className="text-white/60 text-sm md:text-lg mb-4 md:mb-8 leading-relaxed hidden md:block">
                Mit modernster Technik, hochwertigen Ersatzteilen und jahrelanger Erfahrung bringen wir
                Ihren Motor wieder in Bestform – fair, transparent und professionell. Unser bundesweiter
                Abholservice macht es Ihnen besonders einfach.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] glass-card rounded-xl md:rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/IMG_9186.JPG"
                  alt="SEM MotorenTec Werkstatt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 to-transparent" />
              </div>

              {/* Floating badge - smaller on mobile */}
              <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-accent text-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <p className="text-2xl md:text-4xl font-black tracking-tighter mb-0.5 md:mb-1">20+</p>
                <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-bold">Jahre Erfahrung</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats - 3 columns on mobile */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-3 md:p-6 rounded-lg md:rounded-xl text-center"
            >
              <p className="text-2xl md:text-4xl font-black text-accent mb-1 md:mb-2">{stat.number}</p>
              <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-3 md:p-6 rounded-lg md:rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 text-accent">
                {value.icon}
              </div>
              <h5 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">{value.title}</h5>
              <p className="text-white/50 text-xs md:text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Promise;
