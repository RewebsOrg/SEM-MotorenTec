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

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <h4 className="text-white font-bold text-xl mb-6">Kontaktdaten</h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-accent" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1">Telefon</p>
                                        <p className="text-white font-semibold">+49 (0) 123 456 789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-accent" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1">E-Mail</p>
                                        <p className="text-white font-semibold">info@sem-motorentec.de</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-accent" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1">Adresse</p>
                                        <p className="text-white font-semibold">Werkstraße 42</p>
                                        <p className="text-white/60">12345 Musterstadt</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-accent" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1">Öffnungszeiten</p>
                                        <p className="text-white font-semibold">Mo - Fr: 08:00 - 18:00</p>
                                        <p className="text-white/60">Sa: 09:00 - 14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Box */}
                        <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl">
                            <p className="text-accent font-bold mb-2">Schnelle Antwort garantiert!</p>
                            <p className="text-white/60 text-sm">
                                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-8 rounded-2xl">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="text-green-500" size={40} />
                                    </div>
                                    <h4 className="text-white text-2xl font-bold mb-2">Anfrage gesendet!</h4>
                                    <p className="text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Section 1: Kundeninformationen */}
                                    <div className="space-y-6 mb-8">
                                        <h5 className="text-white font-bold text-lg border-b border-white/10 pb-2 mb-4">
                                            Kundeninformationen
                                        </h5>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="Ihr vollständiger Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">E-Mail *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="ihre@email.de"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Telefon</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="+49 123 456789"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Straße & Hausnummer</label>
                                                <input
                                                    type="text"
                                                    name="strasse"
                                                    value={formData.strasse}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="Musterstraße 123"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Postleitzahl</label>
                                                <input
                                                    type="text"
                                                    name="plz"
                                                    value={formData.plz}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="12345"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Ort</label>
                                                <input
                                                    type="text"
                                                    name="ort"
                                                    value={formData.ort}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="Musterstadt"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2: Fahrzeuginformationen */}
                                    <div className="space-y-6">
                                        <h5 className="text-white font-bold text-lg border-b border-white/10 pb-2 mb-4">
                                            Fahrzeuginformationen
                                        </h5>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Fahrzeug</label>
                                                <input
                                                    type="text"
                                                    name="fahrzeug"
                                                    value={formData.fahrzeug}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="z.B. BMW 320d E90"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">Kennzeichen</label>
                                                <input
                                                    type="text"
                                                    name="kennzeichen"
                                                    value={formData.kennzeichen}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                                                    placeholder="z.B. B-XX 1234"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">Art des Schadens *</label>
                                            <select
                                                name="schadenart"
                                                required
                                                value={formData.schadenart}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                            >
                                                <option value="" className="bg-anthracite">Bitte wählen</option>
                                                <option value="motorschaden" className="bg-anthracite">Motorschaden</option>
                                                <option value="steuerkette" className="bg-anthracite">Steuerkette</option>
                                                <option value="ueberholung" className="bg-anthracite">Motorüberholung</option>
                                                <option value="diagnose" className="bg-anthracite">Diagnose</option>
                                                <option value="sonstiges" className="bg-anthracite">Sonstiges</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/60 text-sm mb-2">Ihre Nachricht *</label>
                                        <textarea
                                            name="nachricht"
                                            required
                                            rows={5}
                                            value={formData.nachricht}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
                                            placeholder="Beschreiben Sie Ihr Anliegen so detailliert wie möglich..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/30 hover:shadow-accent/50"
                                    >
                                        <Send size={20} />
                                        <span>Anfrage absenden</span>
                                    </button>

                                    <p className="text-white/40 text-xs text-center">
                                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        </section>
    );
};

export default ContactForm;
