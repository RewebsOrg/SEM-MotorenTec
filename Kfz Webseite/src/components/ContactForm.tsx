'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    strasse: '',
    plz: '',
    ort: '',
    fahrzeug: '',
    kennzeichen: '',
    schadenart: '',
    nachricht: '',
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
    <section id="anfrage" className="py-24 bg-anthracite-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">Kontakt aufnehmen</h2>
          <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4">ANFRAGE-FORMULAR</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Beschreiben Sie uns Ihr Anliegen und wir melden uns schnellstmöglich bei Ihnen zurück.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="flex flex-col gap-16">
          {/* Main Form - NOW FULL WIDTH/CENTERED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
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
                <form onSubmit={handleSubmit} className="space-y-12">

                  {/* Section 1: Kundeninformationen */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">1</div>
                      <h5 className="text-white font-bold text-2xl tracking-tight">
                        Kundeninformationen
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-4" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="Max Mustermann"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">E-Mail *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Straße & Nr.</label>
                        <input
                          type="text"
                          name="strasse"
                          value={formData.strasse}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                          placeholder="Musterstraße 123"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">PLZ</label>
                        <input
                          type="text"
                          name="plz"
                          value={formData.plz}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                          placeholder="12345"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Ort</label>
                        <input
                          type="text"
                          name="ort"
                          value={formData.ort}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                          placeholder="Musterstadt"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Fahrzeuginformationen */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">2</div>
                      <h5 className="text-white font-bold text-2xl tracking-tight">
                        Fahrzeuginformationen
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-4" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Fahrzeug / Modell</label>
                        <input
                          type="text"
                          name="fahrzeug"
                          value={formData.fahrzeug}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                          placeholder="z.B. BMW 320d E90"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Kennzeichen</label>
                        <input
                          type="text"
                          name="kennzeichen"
                          value={formData.kennzeichen}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                          placeholder="z.B. B-XX 1234"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Art des Schadens *</label>
                        <div className="relative">
                          <select
                            name="schadenart"
                            required
                            value={formData.schadenart}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors appearance-none"
                          >
                            <option value="" className="bg-anthracite-light text-white/50">Bitte wählen...</option>
                            <option value="motorschaden" className="bg-anthracite-light">Motorschaden</option>
                            <option value="steuerkette" className="bg-anthracite-light">Steuerkette</option>
                            <option value="ueberholung" className="bg-anthracite-light">Motorüberholung</option>
                            <option value="diagnose" className="bg-anthracite-light">Diagnose</option>
                            <option value="sonstiges" className="bg-anthracite-light">Sonstiges</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium text-lg mb-2 pl-1">Ihre Nachricht / Problembeschreibung *</label>
                    <textarea
                      name="nachricht"
                      required
                      rows={6}
                      value={formData.nachricht}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-lg text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none leading-relaxed"
                      placeholder="Bitte beschreiben Sie das Problem so genau wie möglich..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto md:min-w-[300px] mx-auto block bg-accent hover:bg-accent-dark text-white px-8 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1 text-lg group animate-glow"
                    >
                      <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                      <span>Kostenloses Angebot anfordern</span>
                    </button>
                    <p className="text-white/30 text-xs text-center mt-4">
                      Ihre Daten werden sicher SSL-verschlüsselt übertragen.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info - MOVED TO BOTTOM */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, label: "Telefon", value: "+49 (0) 123 456 789", sub: "Mo-Fr, 08-18 Uhr" },
                { icon: Mail, label: "E-Mail", value: "info@sem-motorentec.de", sub: "Antwort binnen 24h" },
                { icon: MapPin, label: "Standort", value: "Werkstraße 42", sub: "12345 Musterstadt" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo - Fr: 08:00 - 18:00", sub: "Sa: 09:00 - 14:00" },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h6 className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2">{item.label}</h6>
                  <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                  <p className="text-white/40 text-sm">{item.sub}</p>
                </div>
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
