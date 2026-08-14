'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EngineVisual from '@/components/EngineVisual';
import { brands, type Brand } from '@/data/engines';

export default function BrandPageClient({ brand }: { brand: Brand }) {
  return (
    <main className="min-h-screen bg-anthracite">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <EngineVisual
          src={brand.image}
          alt={`${brand.name} Motoren – Instandsetzung bei SEM MotorenTec`}
          label={brand.name}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/75 to-anthracite/40" />

        {/* Blaue Lichtstimmung */}
        <motion.div
          aria-hidden
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-accent-light/15 rounded-full blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        {/* Herstellerlogo füllt die rechte Hälfte des Heros */}
        {brand.logo && (
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden lg:flex w-1/2 items-center justify-center px-10 xl:px-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full max-w-2xl"
            >
              {/* Blauer Schimmer hinter dem Logo */}
              <div className="absolute inset-0 -m-20 rounded-full bg-accent/15 blur-[110px]" />
              <Image
                src={brand.logo}
                alt={`${brand.name} Logo`}
                width={1000}
                height={1000}
                priority
                sizes="50vw"
                className="relative w-full h-auto max-h-[58vh] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
                style={{
                  // Blendet von links nach rechts ein, damit das Logo zum Text hin ausläuft
                  maskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 22%, rgba(0,0,0,0.75) 48%, #000 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 22%, rgba(0,0,0,0.75) 48%, #000 75%)',
                }}
              />
            </motion.div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-40 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl lg:max-w-[48%]"
          >
            {/* Auf kleinen Bildschirmen steht das Logo über der Überschrift */}
            {brand.logo && (
              <Image
                src={brand.logo}
                alt={`${brand.name} Logo`}
                width={400}
                height={400}
                priority
                className="lg:hidden h-16 sm:h-20 w-auto object-contain mb-5 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              />
            )}
            <h2 className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 md:mb-6 shadow-lg shadow-accent/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {brand.country}
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-4 md:mb-6">
              {brand.shortName}{' '}
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(5,127,207,0.45)]">
                Motoren
              </span>
            </h1>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8">
              {brand.description}
            </p>

            {/* Marken-Umschalter */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {brands.map((item) => (
                <Link
                  key={item.slug}
                  href={`/motoren/${item.slug}`}
                  aria-current={item.slug === brand.slug ? 'page' : undefined}
                  className={`btn-hover px-4 py-2 rounded-full text-xs md:text-sm font-bold ${
                    item.slug === brand.slug
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'glass-card text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.shortName}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/kontakt"
                className="bg-accent hover:bg-accent-dark text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-accent/30 text-sm md:text-base btn-hover btn-glow btn-shine"
              >
                <span>Anfrage senden</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/motoren"
                className="glass-card text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white/10 hover:border-accent/40 flex items-center gap-2 text-sm md:text-base btn-hover"
              >
                <ArrowLeft size={18} />
                <span>Zur Motorenübersicht</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motoren-Kacheln */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 md:mb-14 max-w-3xl">
            <h2 className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4">
              Baureihen im Detail
            </h2>
            <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight mb-3">
              DIESE{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(5,127,207,0.4)]">
                {brand.shortName.toUpperCase()}-MOTOREN
              </span>{' '}
              SETZEN WIR INSTAND
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Für jede Baureihe finden Sie die typischen Schadensbilder und die Arbeiten, die wir
              dafür ausführen. Ihr Motor ist nicht dabei? Fragen Sie ihn einfach an.
            </p>
            <div className="w-16 md:w-20 h-1 bg-accent mt-4 md:mt-6 rounded-full shadow-[0_0_20px_rgba(5,127,207,0.8)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {brand.engines.map((engine, index) => (
              <motion.article
                key={engine.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className="group card-hover relative rounded-2xl overflow-hidden border border-white/10"
              >
                <Link href={`/motoren/${brand.slug}/${engine.slug}`} className="block">
                  <div className="relative h-52 md:h-64">
                    <EngineVisual
                      src={engine.images?.[0] ?? engine.image}
                      alt={`${brand.name} ${engine.code} – ${engine.eyebrow}`}
                      label={engine.code}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite-light via-anthracite-light/40 to-transparent" />
                  </div>

                  <div className="bg-anthracite-light p-5 md:p-8">
                    <p className="text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2">
                      {engine.eyebrow}
                    </p>
                    <h4 className="text-white text-2xl md:text-4xl font-black tracking-tight mb-3">
                      {engine.code}
                    </h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                      {engine.short}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-bold text-sm md:text-base">
                      <span>Details ansehen</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 bg-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-6">
            {brand.shortName.toUpperCase()}-MOTORSCHADEN? WIR SCHAUEN UNS DAS AN.
          </h2>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto mb-4 md:mb-8">
            Schicken Sie uns Fahrzeugdaten und Schadensbild – Sie bekommen eine ehrliche
            Einschätzung, ob sich eine Instandsetzung lohnt oder ein Austauschmotor sinnvoller ist.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-accent hover:bg-gray-100 px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg shadow-xl btn-hover btn-shine"
          >
            Zum Anfrage-Formular
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>

      <Footer />
    </main>
  );
}
