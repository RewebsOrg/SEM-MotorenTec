'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Wie erkenne ich einen Motorschaden?',
    answer: 'Typische Anzeichen für einen Motorschaden sind: ungewöhnliche Geräusche (Klopfen, Klappern), Leistungsverlust, erhöhter Ölverbrauch, weißer oder blauer Rauch aus dem Auspuff, Motorwarnleuchte leuchtet auf, oder der Motor springt nicht mehr an. Bei diesen Symptomen sollten Sie umgehend eine Werkstatt aufsuchen.',
  },
  {
    question: 'Was kostet eine Motorinstandsetzung?',
    answer: 'Die Kosten variieren stark je nach Fahrzeugtyp, Schadensumfang und benötigten Ersatzteilen. Eine einfache Reparatur kann bei wenigen hundert Euro beginnen, während eine komplette Motorüberholung mehrere tausend Euro kosten kann. Wir erstellen Ihnen nach einer gründlichen Diagnose ein transparentes Angebot ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert eine Motorreparatur?',
    answer: 'Die Reparaturdauer hängt vom Umfang des Schadens ab. Kleinere Reparaturen können in 1-3 Tagen erledigt sein. Eine komplette Motorüberholung dauert in der Regel 1-2 Wochen. Wir informieren Sie nach der Diagnose über die voraussichtliche Dauer und halten Sie während der Reparatur auf dem Laufenden.',
  },
  {
    question: 'Bieten Sie einen Abholservice an?',
    answer: 'Ja, wir bieten einen bundesweiten Abholservice an. Wir holen Ihr Fahrzeug direkt bei Ihnen ab und bringen es nach der Reparatur wieder zurück. Der Transport erfolgt mit einem versicherten Fahrzeugtransporter. Die Kosten hierfür teilen wir Ihnen vorab mit.',
  },
  {
    question: 'Welche Fahrzeugmarken reparieren Sie?',
    answer: 'Wir sind auf Motoreninstandsetzung für alle gängigen Fahrzeugmarken spezialisiert – egal ob BMW, Mercedes, Audi, VW, Opel, Ford oder andere Hersteller. Sowohl Benzin- als auch Dieselmotoren werden von uns fachgerecht repariert.',
  },
  {
    question: 'Gibt es eine Garantie auf die Reparatur?',
    answer: 'Ja, wir geben auf alle durchgeführten Arbeiten eine Garantie. Die genaue Garantiedauer hängt von der Art der Reparatur ab und wird Ihnen im Angebot mitgeteilt. Wir arbeiten ausschließlich mit hochwertigen Ersatzteilen, um eine langlebige Reparatur zu gewährleisten.',
  },
  {
    question: 'Wann sollte die Steuerkette gewechselt werden?',
    answer: 'Anders als der Zahnriemen hat die Steuerkette keine festgelegten Wechselintervalle. Sie sollte jedoch gewechselt werden, wenn Rasseln oder Klappern beim Kaltstart auftritt, die Motorleuchte angeht, oder bei einer Inspektion eine Längung festgestellt wird. Präventiver Wechsel bei hoher Laufleistung kann teure Folgeschäden vermeiden.',
  },
  {
    question: 'Kann ich während der Reparatur ein Ersatzfahrzeug bekommen?',
    answer: 'Wir selbst bieten keine Ersatzfahrzeuge an, können Ihnen aber gerne Partnerwerkstätten empfehlen, die Mietwagen vermitteln. Sprechen Sie uns bei der Auftragserteilung darauf an.',
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
            href="#anfrage"
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
