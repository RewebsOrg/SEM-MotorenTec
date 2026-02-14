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
  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Check if all required fields are filled
  const isFormValid =
    formData.hersteller.trim() !== '' &&
    formData.modell.trim() !== '' &&
    formData.name.trim() !== '' &&
    formData.adresse.trim() !== '' &&
    formData.plz.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.schadenart !== '' &&
    consent;

  const [showErrors, setShowErrors] = useState(false);

  // Get list of missing required fields
  const getMissingFields = () => {
    const missing: string[] = [];
    if (formData.hersteller.trim() === '') missing.push('Hersteller');
    if (formData.modell.trim() === '') missing.push('Modell');
    if (formData.schadenart === '') missing.push('Art des Schadens');
    if (formData.name.trim() === '') missing.push('Name');
    if (formData.adresse.trim() === '') missing.push('Adresse');
    if (formData.plz.trim() === '') missing.push('PLZ');
    if (formData.email.trim() === '') missing.push('E-Mail');
    if (!consent) missing.push('Datenschutzerklärung');
    return missing;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowErrors(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success || response.ok) {
        setIsSubmitted(true);
        setShowErrors(false);
        // Optional: Reset form or scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitError(data.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (showErrors) setShowErrors(false);
  };

  return (
    <section id="anfrage" className="py-12 bg-anthracite-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="md:glass-card p-0 md:p-8 rounded-xl md:rounded-2xl md:shadow-2xl relative overflow-hidden">
              {/* Decorative background element inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block" />

              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-[bounce_1s_infinite]">
                    <CheckCircle className="text-green-500" size={48} />
                  </div>
                  <h4 className="text-white text-3xl font-bold mb-4">Anfrage erfolgreich gesendet!</h4>
                  <p className="text-white/60 text-lg">Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

                  {/* Section 1: Fahrzeugdaten */}
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs md:text-sm">1</div>
                      <h5 className="text-white font-bold text-sm md:text-lg tracking-tight">
                        Fahrzeugdaten
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-2 md:ml-3" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Hersteller *</label>
                        <input
                          type="text"
                          name="hersteller"
                          required
                          value={formData.hersteller}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. BMW, Mercedes, Audi..."
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Modell *</label>
                        <input
                          type="text"
                          name="modell"
                          required
                          value={formData.modell}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
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
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. 2018"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Motorleistung</label>
                        <input
                          type="text"
                          name="motorleistung"
                          value={formData.motorleistung}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                          placeholder="z.B. 140 kW / 190 PS"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Schaden-Informationen */}
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs md:text-sm">2</div>
                      <h5 className="text-white font-bold text-sm md:text-lg tracking-tight">
                        Schaden-Informationen
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-2 md:ml-3" />
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <div>
                        <label className="block text-white/80 font-medium text-sm mb-1 pl-1">Art des Schadens *</label>
                        <div className="relative">
                          <select
                            name="schadenart"
                            required
                            value={formData.schadenart}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors appearance-none cursor-pointer"
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
                          rows={4}
                          value={formData.schadeninfo}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none"
                          placeholder="Beschreiben Sie den Schaden..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Kontaktdaten */}
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs md:text-sm">3</div>
                      <h5 className="text-white font-bold text-sm md:text-lg tracking-tight">
                        Ihre Kontaktdaten
                      </h5>
                      <div className="h-px bg-white/10 flex-grow ml-2 md:ml-3" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
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

                  {/* Section 4: Datenschutz */}
                  <div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-6">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="w-4 h-4 md:w-5 md:h-5 bg-white/5 border border-white/10 rounded focus:ring-accent focus:ring-1 focus:ring-offset-0 text-accent cursor-pointer"
                        />
                      </div>
                      <div className="text-xs md:text-sm">
                        <label htmlFor="consent" className="font-medium text-white/80">
                          Ich habe die <a href="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</a> zur Kenntnis genommen.
                        </label>
                        <p className="text-white/50 text-xs mt-1">
                          Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 md:pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 md:px-8 md:py-5 rounded-lg md:rounded-xl font-bold transition-all flex items-center justify-center gap-2 md:gap-3 shadow-xl transform text-sm md:text-lg group ${isFormValid && !isSubmitting
                        ? 'bg-accent hover:bg-accent-dark text-white shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 animate-glow cursor-pointer'
                        : 'bg-white/10 text-white/50 hover:bg-white/20 cursor-not-allowed'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent"></div>
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} className={`transition-transform md:w-[22px] md:h-[22px] ${isFormValid ? 'group-hover:translate-x-1' : ''}`} />
                          <span>Anfrage absenden</span>
                        </>
                      )}
                    </button>

                    {/* API Error message */}
                    {submitError && (
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                        <p className="text-red-400 text-xs md:text-sm font-bold">{submitError}</p>
                      </div>
                    )}

                    {/* Error messages */}
                    {showErrors && !isFormValid && (
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-xs md:text-sm font-medium mb-1">Bitte füllen Sie folgende Felder aus:</p>
                        <ul className="text-red-400/80 text-xs list-disc list-inside">
                          {getMissingFields().map((field, i) => (
                            <li key={i}>{field}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-white/30 text-xs text-center mt-2 md:mt-4">
                      Ihre Daten werden sicher SSL-verschlüsselt übertragen.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                { icon: Phone, label: "Telefon", value: "0521 97795644", sub: "Mo-Fr, 09-18 Uhr" },
                { icon: Mail, label: "E-Mail", value: "info@sem-motorentec.de", sub: "Antwort binnen 24h" },
                { icon: MapPin, label: "Standort", value: "Windelsbleicherstr. 188a", sub: "33659 Bielefeld" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo - Fr: 09:00 - 18:00", sub: "Sa: 09:00 - 12:00" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-accent/10 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <h6 className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wider mb-1 md:mb-2">{item.label}</h6>
                  <p className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-1">{item.value}</p>
                  <p className="text-white/40 text-xs md:text-sm">{item.sub}</p>
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl hidden md:block" />
    </section>
  );
};

export default ContactForm;
