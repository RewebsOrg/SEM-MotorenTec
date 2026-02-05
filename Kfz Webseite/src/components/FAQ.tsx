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
    answer: 'Ja, wir gewähren auf unsere Reparaturen und verbauten Ersatzteile eine Gewährleistung gemäß den gesetzlichen Bestimmungen.',
  },
  {
    question: 'Welche Dienstleistungen bieten Sie an?',
    answer: 'Wir bieten Motorinstandsetzungen sowie vorsorgliche Überholungen an. Steuerkettenwechsel, Fehlerdiagnose, Motorölwechsel sowie viele weitere Services rund ums Fahrzeug.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-anthracite relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">Häufige Fragen</h2>
          <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4">FAQ</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um Motorschäden und unsere Leistungen.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
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
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-accent" size={20} />
                  </div>
                  <span className="text-white font-bold text-lg pr-4 md:text-xl">{faq.question}</span>
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
                    <div className="px-6 pb-6 pt-0 ml-14">
                      <p className="text-white/70 leading-relaxed text-lg">{faq.answer}</p>
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default FAQ;
