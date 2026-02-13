'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Was macht SEM MotorenTec besonders?',
    answer: 'SEM MotorenTec steht für höchste Qualität, Fachkompetenz und kundenorientierten Service. Wir sind auf Motoreninstandsetzung spezialisiert und bieten moderne Diagnoseverfahren sowie präzise Reparaturen an.',
  },
  {
    question: 'Wo ist SEM MotorenTec?',
    answer: 'Unser Betrieb befindet sich in der Windelsbleicherstr. 188a, 33659 Bielefeld.',
  },
  {
    question: 'Welche Fahrzeugmarken reparieren Sie?',
    answer: 'Wir arbeiten mit allen gängigen Automarken und Modellen, sowohl mit Benzin- als auch Dieselmotoren.',
  },
  {
    question: 'Bieten Sie einen Abholservice an?',
    answer: 'Auf Wunsch holen wir Ihr Fahrzeug bequem bei Ihnen ab und bringen es nach der Reparatur wieder zurück.',
  },
  {
    question: 'Wie lange dauert eine Motorinstandsetzung?',
    answer: 'Die Dauer einer Motorinstandsetzung hängt vom Schadensumfang und dem jeweiligen Fahrzeug ab. In der Regel erhalten Sie nach der Diagnose ein transparentes Zeitfenster.',
  },
  {
    question: 'Gibt es eine Gewährleistung?',
    answer: 'Ja, wir gewähren auf unsere Reparaturen und verbauten Ersatzteile eine Gewährleistung von 12 Monaten.',
  },
  {
    question: 'Welche Dienstleistungen bieten Sie an?',
    answer: 'Wir bieten Motorinstandsetzungen sowie vorsorgliche Überholungen an. Steuerkettenwechsel, Fehlerdiagnose, Motorölwechsel sowie viele weitere Services rund ums Fahrzeug.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-24 bg-anthracite relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4">Häufige Fragen</h2>
          <h3 className="text-white text-2xl md:text-5xl font-black tracking-tight mb-2 md:mb-4">FAQ</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um Motorschäden und unsere Leistungen.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 md:mt-6" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 py-3 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-accent" size={16} />
                  </div>
                  <span className="text-white font-bold text-sm md:text-lg pr-2 md:pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0 ml-10 md:px-6 md:pb-6 md:ml-14">
                      <p className="text-white/70 leading-relaxed text-sm md:text-lg">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">Ihre Frage ist nicht dabei?</p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FAQ;
