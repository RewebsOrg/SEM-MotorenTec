'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Wrench } from 'lucide-react';

const stats = [
  { number: '20+', label: 'Jahre Erfahrung' },
  { number: '5000+', label: 'Reparierte Motoren' },
  { number: '24h', label: 'Schnelle Antwort' },
];

const values = [
  {
    icon: <Target size={24} />,
    title: 'Präzision',
    description: 'Jede Reparatur wird mit höchster Sorgfalt und Genauigkeit durchgeführt.',
  },
  {
    icon: <Users size={24} />,
    title: 'Kundennähe',
    description: 'Persönliche Beratung und transparente Kommunikation sind uns wichtig.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Qualität',
    description: 'Wir verwenden nur hochwertige Ersatzteile und geben Garantie auf unsere Arbeit.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Kompetenz',
    description: 'Unser Team besteht aus erfahrenen Motorspezialisten mit langjähriger Expertise.',
  },
];

const Promise = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-anthracite-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">Wer wir sind</h2>
          <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4">ÜBER UNS</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            SEM MotorenTec – Ihr Spezialist für Motoreninstandsetzung mit Leidenschaft und Fachkompetenz.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Unser Ziel: Maximale Lebensdauer, volle Leistung und absolute Zuverlässigkeit Ihres Motors.
              </h4>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Ein Motor ist das Herz jedes Fahrzeugs. Wenn Leistung nachlässt oder ein Motorschaden droht,
                sind wir Ihr zuverlässiger Partner für Motoreninstandsetzung, Motorüberholung und Reparatur.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Mit modernster Technik, hochwertigen Ersatzteilen und jahrelanger Erfahrung bringen wir
                Ihren Motor wieder in Bestform – fair, transparent und professionell. Unser bundesweiter
                Abholservice macht es Ihnen besonders einfach.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all animate-glow"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] glass-card rounded-2xl overflow-hidden relative">
                <img
                  src="/images/IMG_9186.JPG"
                  alt="SEM MotorenTec Werkstatt"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-black tracking-tighter mb-1">20+</p>
                <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Jahre Erfahrung</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-accent mb-2">{stat.number}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                {value.icon}
              </div>
              <h5 className="text-white font-bold mb-2">{value.title}</h5>
              <p className="text-white/50 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default Promise;
