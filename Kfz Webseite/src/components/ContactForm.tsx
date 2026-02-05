'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    // Fahrzeugdaten
    hersteller: '',
    modell: '',
    baujahr: '',
    motorleistung: '',
    // Kundendaten
    name: '',
    adresse: '',
    plz: '',
    email: '',
    telefon: '',
    // Schaden
    schadenart: '',
    schadeninfo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="anfrage" className="py-12 bg-anthracite-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative background element inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-[bounce_1s_infinite]">
                    <CheckCircle className="text-green-500" size={48} />
                  </div>
                  <h4 className="text-white text-3xl font-bold mb-4">Anfrage erfolgreich gesendet!</h4>
                  <p className="text-white/60 text-lg">Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Section 1: Fahrzeugdaten */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">1</div>
                      <h5 className="text-white font-bold text-lg tracking-tight">
                        Fahrzeugdaten
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-3" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Hersteller</label>
                        <input
                          type="text"
                          name="hersteller"
                          value={formData.hersteller}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. BMW, Mercedes, Audi..."
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Modell</label>
                        <input
                          type="text"
                          name="modell"
                          value={formData.modell}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. 320d, C-Klasse, A4..."
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Baujahr</label>
                        <input
                          type="text"
                          name="baujahr"
                          value={formData.baujahr}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. 2018"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Motorleistung (kW oder PS)</label>
                        <input
                          type="text"
                          name="motorleistung"
                          value={formData.motorleistung}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. 140 kW / 190 PS"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Schaden-Informationen */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">2</div>
                      <h5 className="text-white font-bold text-lg tracking-tight">
                        Schaden-Informationen
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-3" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Art des Schadens *</label>
                        <div className="relative">
                          <select
                            name="schadenart"
                            required
                            value={formData.schadenart}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors appearance-none"
                          >
                            <option value="" className="bg-anthracite-light text-white/50">Bitte wählen...</option>
                            <option value="motorinstandsetzung" className="bg-anthracite-light">Motorinstandsetzung</option>
                            <option value="motorueberholung" className="bg-anthracite-light">Motorüberholung</option>
                            <option value="steuerkette" className="bg-anthracite-light">Steuerkettenwechsel</option>
                            <option value="diagnose" className="bg-anthracite-light">Fehlerdiagnose</option>
                            <option value="oelwechsel" className="bg-anthracite-light">Motorölwechsel</option>
                            <option value="sonstiges" className="bg-anthracite-light">Sonstiges</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Weitere Informationen</label>
                        <textarea
                          name="schadeninfo"
                          rows={3}
                          value={formData.schadeninfo}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none"
                          placeholder="Beschreiben Sie den Schaden..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Kontaktdaten */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">3</div>
                      <h5 className="text-white font-bold text-lg tracking-tight">
                        Ihre Kontaktdaten
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-3" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="Max Mustermann"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Adresse *</label>
                        <input
                          type="text"
                          name="adresse"
                          required
                          value={formData.adresse}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="Musterstraße 123"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">PLZ *</label>
                        <input
                          type="text"
                          name="plz"
                          required
                          value={formData.plz}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">E-Mail *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Telefonnummer</label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1 text-lg group animate-glow"
                    >
                      <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                      <span>Anfrage absenden</span>
                    </button>
                    <p className="text-white/30 text-xs text-center mt-4">
                      Ihre Daten werden sicher SSL-verschlüsselt übertragen.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, label: "Telefon", value: "0160 3872886", sub: "Mo-Fr, 08-18 Uhr" },
                { icon: Mail, label: "E-Mail", value: "info@sem-motorentec.com", sub: "Antwort binnen 24h" },
                { icon: MapPin, label: "Standort", value: "Windelsbleicherstr. 188a", sub: "33659 Bielefeld" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo - Fr: 08:00 - 18:00", sub: "Sa: 09:00 - 14:00" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h6 className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2">{item.label}</h6>
                  <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                  <p className="text-white/40 text-sm">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Guarantee Badge */}
            <div className="text-center mt-12">
              <p className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20">
                <CheckCircle size={16} />
                Schnelle Antwort garantiert: Wir melden uns in der Regel innerhalb von 2 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default ContactForm;
