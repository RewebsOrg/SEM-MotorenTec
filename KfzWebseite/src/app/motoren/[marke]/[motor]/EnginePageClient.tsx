'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Car } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import EngineVisual from '@/components/EngineVisual';
import ImageSlideshow from '@/components/ImageSlideshow';
import type { Brand, Engine } from '@/data/engines';
import { getEngineText } from '@/data/engine-texts';

interface EnginePageClientProps {
  brand: Brand;
  engine: Engine;
}

/** Text mit Leerzeilen in einzelne Absätze zerlegen. */
const toParagraphs = (text: string) => text.split('\n\n').filter(Boolean);

export default function EnginePageClient({ brand, engine }: EnginePageClientProps) {
  const otherEngines = brand.engines.filter((item) => item.slug !== engine.slug);
  const engineText = getEngineText(brand.slug, engine.slug);
  const photos = engine.images ?? (engine.image ? [engine.image] : []);

  return (
    <main className="min-h-screen bg-anthracite">
      <Navbar />

      {/* Kopfbereich */}
      <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <EngineVisual
            src={photos[0]}
            alt=""
            label={engine.code}
            sizes="100vw"
            imageClassName="blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/90 via-anthracite/95 to-anthracite" />

        {/* Blaue Lichtstimmung */}
        <motion.div
          aria-hidden
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 left-1/4 w-[32rem] h-[32rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Herstellerlogo oben rechts */}
        {brand.logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-24 right-5 md:top-36 md:right-10 z-20 glass-card rounded-2xl p-3 md:p-4 shadow-2xl shadow-black/40"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} Logo`}
              width={160}
              height={160}
              className="h-10 w-auto md:h-14 object-contain"
            />
          </motion.div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/motoren/${brand.slug}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-6 md:mb-8 transition-colors text-sm md:text-base"
            >
              <ArrowLeft size={20} />
              <span>Zurück zu {brand.shortName} Motoren</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 shadow-lg shadow-accent/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {brand.name} · {engine.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-accent-light to-accent bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(5,127,207,0.4)]">
              {engine.code}
            </h1>
            <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed">
              {engine.short}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inhalt */}
      <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Textspalte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="mb-10 md:mb-14 space-y-4">
              {toParagraphs(engineText ? engineText.intro : engine.intro).map((absatz) => (
                <p key={absatz} className="text-white/80 text-base md:text-lg leading-relaxed">
                  {absatz}
                </p>
              ))}
            </div>

            {engineText ? (
              /* Ausführlicher Text aus der Werkstatt */
              engineText.sections.map((section) => (
                <div key={section.title} className="mb-10 md:mb-14">
                  <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-5 md:mb-7 flex items-start gap-3">
                    <span className="w-8 h-1 bg-accent rounded-full mt-3 md:mt-4 flex-shrink-0" />
                    <span>{section.title}</span>
                  </h2>
                  <div className="space-y-4">
                    {toParagraphs(section.body).map((absatz) => (
                      <p
                        key={absatz}
                        className="text-white/70 text-base md:text-lg leading-relaxed"
                      >
                        {absatz}
                      </p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Kurzfassung, solange kein ausführlicher Text hinterlegt ist */
              <>
                <div className="mb-10 md:mb-14">
                  <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-5 md:mb-7 flex items-center gap-3">
                    <span className="w-8 h-1 bg-accent rounded-full" />
                    Typische Schadensbilder
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {engine.symptoms.map((symptom) => (
                      <div
                        key={symptom}
                        className="flex items-start gap-3 glass-card p-4 rounded-xl transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                      >
                        <AlertTriangle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-white/80 text-sm md:text-base">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10 md:mb-14">
                  <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-5 md:mb-7 flex items-center gap-3">
                    <span className="w-8 h-1 bg-accent rounded-full" />
                    Was wir am {engine.code} machen
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {engine.works.map((work) => (
                      <div
                        key={work}
                        className="flex items-start gap-3 glass-card p-4 rounded-xl transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                      >
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-white/80 text-sm md:text-base">{work}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-5 md:mb-7 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Typische Fahrzeuge
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {engine.models.map((model) => (
                  <span
                    key={model}
                    className="inline-flex items-center gap-2 glass-card text-white/90 text-xs md:text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    <Car size={15} className="text-accent" />
                    {model}
                  </span>
                ))}
              </div>
              <p className="text-white/40 text-xs md:text-sm mt-4">
                Die Aufstellung ist eine Auswahl – der Motor wurde in weiteren Modellen und
                Baujahren verbaut.
              </p>
            </div>
          </motion.div>

          {/* Seitenspalte */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            {photos.length > 0 ? (
              <ImageSlideshow
                images={photos}
                alt={`${brand.name} ${engine.code} – Instandsetzung bei SEM MotorenTec`}
                interval={4000}
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={85}
                className="w-full aspect-[4/3] rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
              />
            ) : (
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <EngineVisual
                  src={undefined}
                  alt={`${brand.name} ${engine.code}`}
                  label={engine.code}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            )}

            <div className="bg-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                Schaden am {engine.code}?
              </h3>
              <p className="text-white/70 text-sm md:text-base mb-5">
                Schicken Sie uns Fahrzeugdaten und Schadensbild. Sie bekommen eine ehrliche
                Einschätzung – inklusive der Frage, ob Instandsetzung oder Austauschmotor
                wirtschaftlicher ist.
              </p>
              <a
                href="#anfrage"
                className="block w-full bg-accent hover:bg-accent-dark text-center text-white font-bold py-3 md:py-4 rounded-xl btn-hover btn-glow btn-shine"
              >
                Jetzt anfragen
              </a>
            </div>

            {otherEngines.length > 0 && (
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-bold text-base md:text-lg mb-4">
                  Weitere {brand.shortName} Motoren
                </h3>
                <ul className="space-y-1">
                  {otherEngines.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/motoren/${brand.slug}/${item.slug}`}
                        className="group flex items-center justify-between gap-3 py-2.5 text-white/70 hover:text-white transition-colors"
                      >
                        <span className="text-sm md:text-base">
                          <span className="font-bold text-white/90">{item.code}</span>
                          <span className="text-white/40"> · {item.eyebrow}</span>
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-accent flex-shrink-0 transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.aside>
        </div>
      </div>

      {/* Anfrage */}
      <div id="anfrage">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
