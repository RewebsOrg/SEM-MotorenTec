'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, RefreshCw, Link2, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'motorinstandsetzung',
    title: 'Motorinstandsetzung',
    subtitle: 'Professionelle Reparatur',
    description: 'Ihr Motor läuft nicht mehr rund? Wir analysieren den Schaden und setzen ihn fachgerecht instand. Mit modernster Technik und jahrelanger Erfahrung bringen wir Ihren Motor wieder auf Vordermann – egal ob Benziner oder Diesel.',
    features: ['Komplette Motoranalyse', 'Ersatz verschlissener Teile', 'Alle Marken & Modelle', 'Garantie auf Arbeit'],
    icon: <Wrench size={28} />,
    image: '/images/IMG_9191.JPG',
  },
  {
    id: 'motorueberholung',
    title: 'Motorüberholung',
    subtitle: 'Generalüberholung',
    description: 'Bei einer Motorüberholung wird Ihr Motor komplett zerlegt, gereinigt und alle Verschleißteile werden erneuert. Das Ergebnis: Ein Motor wie neu – mit maximaler Lebensdauer und voller Leistung.',
    features: ['Komplette Zerlegung', 'Neue Kolben & Lager', 'Zylinderkopfbearbeitung', 'Testlauf & Qualitätskontrolle'],
    icon: <RefreshCw size={28} />,
    image: '/images/IMG_9192.JPG',
  },
  {
    id: 'steuerkettenwechsel',
    title: 'Steuerkettenwechsel',
    subtitle: 'Präventive Wartung',
    description: 'Eine defekte oder gelängte Steuerkette kann zu schweren Motorschäden führen. Wir wechseln Ihre Steuerkette fachgerecht und verhindern so teure Folgeschäden. Vorbeugen ist besser als reparieren.',
    features: ['Kettenspanner-Prüfung', 'Kompletter Kettensatz', 'Zahnräder-Kontrolle', 'Ölwechsel inklusive'],
    icon: <Link2 size={28} />,
    image: '/images/IMG_9193.JPG',
  },
  {
    id: 'abholservice',
    title: 'Abholservice',
    subtitle: 'Bundesweiter Service',
    description: 'Sie können nicht zu uns kommen? Kein Problem! Unser Abholservice holt Ihr Fahrzeug bundesweit ab und bringt es nach der Reparatur wieder zu Ihnen zurück. Bequemer geht es nicht.',
    features: ['Bundesweite Abholung', 'Versicherter Transport', 'Flexible Termine', 'Faire Konditionen'],
    icon: <Truck size={28} />,
    image: '/images/IMG_9188.JPG',
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-24 bg-anthracite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">Was wir bieten</h2>
          <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4">UNSERE LEISTUNGEN</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
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
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                      {service.icon}
                      {service.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xl leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/60">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#anfrage"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold group animate-glow px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <span>Jetzt anfragen</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default Services;
