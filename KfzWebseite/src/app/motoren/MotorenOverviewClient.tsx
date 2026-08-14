'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Wrench } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EngineVisual from '@/components/EngineVisual';
import { brands } from '@/data/engines';

export default function MotorenOverviewClient() {
  return (
    <main className="min-h-screen bg-anthracite">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Hintergrundbild: komplett sichtbar, rechts angesetzt.
            Der dunkle linke Bildrand geht per Verlauf ins Anthrazit über. */}
        <div className="absolute inset-0">
          <Image
            src="/images/motoren/hero-motorenwelt.webp"
            alt="Motoren aus unserer Werkstatt"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-contain object-right"
          />
        </div>

        {/* Kaum abgedunkelt – nur links so viel, dass die Schrift steht */}
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-anthracite/20 to-transparent" />

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-40 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h2 className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 md:mb-6 shadow-lg shadow-accent/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Motorenwelt
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.02] mb-5 md:mb-7">
              Motoren und Baureihen,
              <br className="hidden sm:block" />{' '}
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(5,127,207,0.45)]">
                die wir instand setzen
              </span>
            </h1>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8">
              Ob Pkw, Transporter oder Nutzfahrzeug: Wir arbeiten täglich an modernen Diesel- und
              Benzinmotoren – von der Steuerkette bis zur kompletten Generalüberholung. Die
              folgenden Markenbereiche geben einen Einblick in die Aggregate, die uns am häufigsten
              erreichen.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#marken"
                className="bg-accent hover:bg-accent-dark text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-accent/30 text-sm md:text-base btn-hover btn-glow btn-shine"
              >
                <span>Marken ansehen</span>
                <ChevronRight size={18} />
              </a>
              <Link
                href="/kontakt"
                className="glass-card text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white/10 hover:border-accent/40 flex items-center gap-2 text-sm md:text-base btn-hover"
              >
                <span>Anfrage senden</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marken */}
      <section id="marken" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4">
              Nach Marke sortiert
            </h2>
            <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">
              UNSERE{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(5,127,207,0.4)]">
                MOTORENBEREICHE
              </span>
            </h3>
            <div className="w-16 md:w-20 h-1 bg-accent mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_20px_rgba(5,127,207,0.8)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
            {brands.map((brand, index) => (
              <motion.article
                key={brand.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className="group card-hover relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 min-h-[420px] md:min-h-[460px] flex cursor-pointer"
              >
                <EngineVisual
                  src={brand.image}
                  alt={`${brand.name} Motoren`}
                  label={brand.name}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/85 to-anthracite/30" />

                {/* Herstellerlogo dezent oben rechts in der Kachel */}
                {brand.logo && (
                  <Image
                    src={brand.logo}
                    alt=""
                    aria-hidden
                    width={300}
                    height={300}
                    className="pointer-events-none absolute top-5 right-5 md:top-7 md:right-7 z-20 h-20 md:h-32 lg:h-36 w-auto object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                    style={{
                      maskImage:
                        'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, #000 70%)',
                      WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, #000 70%)',
                    }}
                  />
                )}

                <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end w-full">
                  <p className="text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2">
                    {brand.name}
                  </p>
                  <h4 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4">
                    {brand.shortName} Motoren
                  </h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-xl">
                    {brand.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5 md:mb-7">
                    {brand.engines.slice(0, 6).map((engine) => (
                      <span
                        key={engine.slug}
                        className="glass-card text-white/90 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full"
                      >
                        {engine.code}
                      </span>
                    ))}
                    {brand.engines.length > 6 && (
                      <span className="text-accent text-xs md:text-sm font-bold px-2 py-1.5">
                        +{brand.engines.length - 6} weitere
                      </span>
                    )}
                  </div>

                  {/* Kein Button mehr – die ganze Kachel ist klickbar */}
                  <span className="inline-flex items-center gap-2 self-start text-accent font-bold text-sm md:text-base">
                    <span className="link-underline">Zur {brand.shortName}-Seite</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>

                {/* Klickfläche über der gesamten Kachel */}
                <Link
                  href={`/motoren/${brand.slug}`}
                  aria-label={`${brand.name} Motoren ansehen`}
                  className="absolute inset-0 z-30 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="sr-only">{brand.name} Motoren ansehen</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis: alle Marken */}
      <section className="py-12 md:py-20 bg-anthracite-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 text-accent grid place-items-center mx-auto mb-4 md:mb-6">
            <Wrench size={26} />
          </div>
          <h3 className="text-white text-xl md:text-3xl font-black tracking-tight mb-3 md:mb-4">
            IHR MOTOR IST NICHT DABEI?
          </h3>
          <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Die Übersicht zeigt nur die häufigsten Baureihen. Wir setzen Motoren aller Marken und
            Modelle instand – vom Kleinwagen bis zum Wohnmobil. Schicken Sie uns einfach Ihre
            Fahrzeugdaten, wir melden uns mit einer ehrlichen Einschätzung zurück.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold shadow-lg shadow-accent/30 text-sm md:text-base btn-hover btn-glow btn-shine"
          >
            <span>Motor prüfen lassen</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
