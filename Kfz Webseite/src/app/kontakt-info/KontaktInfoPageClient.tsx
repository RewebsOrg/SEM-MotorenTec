'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock, ExternalLink } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function KontaktInfoPageClient() {
    const { isMapAllowed, allowMap } = useCookieConsent();

    const contactMethods = [
        {
            icon: Phone,
            label: 'Telefon',
            value: '0521 97795644',
            description: 'Rufen Sie uns direkt an',
            href: 'tel:+4952197795644',
            color: 'accent',
            bgColor: 'bg-accent/10',
            hoverBg: 'hover:bg-accent/20',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '0160 3872886',
            description: 'Schreiben Sie uns per WhatsApp',
            href: 'https://wa.me/491603872886',
            color: '[#25D366]',
            bgColor: 'bg-[#25D366]/10',
            hoverBg: 'hover:bg-[#25D366]/20',
            external: true,
        },
        {
            icon: Mail,
            label: 'E-Mail',
            value: 'info@sem-motorentec.de',
            description: 'Antwort binnen 24 Stunden',
            href: 'mailto:info@sem-motorentec.de',
            color: 'accent',
            bgColor: 'bg-accent/10',
            hoverBg: 'hover:bg-accent/20',
        },
        {
            icon: Instagram,
            label: 'Instagram',
            value: '@sem_motorentec',
            description: 'Folgen Sie uns auf Instagram',
            href: 'https://www.instagram.com/sem_motorentec/',
            color: 'pink-500',
            bgColor: 'bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10',
            hoverBg: 'hover:bg-pink-500/20',
            external: true,
        },
    ];

    return (
        <main className="min-h-screen bg-anthracite">
            <Navbar />
            <div className="pt-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-6 md:pb-10 text-center"
                >
                    <h2 className="text-accent font-bold tracking-widest text-xs md:text-base uppercase mb-2 md:mb-4">So erreichen Sie uns</h2>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 md:mb-6">KONTAKT</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg hidden md:block">
                        Wählen Sie Ihren bevorzugten Kontaktweg – wir freuen uns auf Ihre Nachricht.
                    </p>
                    <div className="w-16 md:w-20 h-1 bg-accent mx-auto mt-3 md:mt-6" />
                </motion.div>

                {/* Contact Methods Grid */}
                <section className="py-8 md:py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.href}
                                    target={method.external ? '_blank' : undefined}
                                    rel={method.external ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`glass-card p-4 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center text-center group ${method.hoverBg} transition-all`}
                                >
                                    <div className={`w-12 h-12 md:w-16 md:h-16 ${method.bgColor} rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                                        <method.icon className={`text-${method.color}`} size={24} />
                                    </div>
                                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">{method.label}</h3>
                                    <p className="text-white/80 text-xs md:text-sm font-medium mb-1">{method.value}</p>
                                    <p className="text-white/40 text-[10px] md:text-xs hidden md:block">{method.description}</p>
                                    {method.external && (
                                        <ExternalLink size={12} className="text-white/30 mt-2" />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Action Buttons */}
                <section className="py-8 md:py-12">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="space-y-3 md:space-y-4">
                            <a
                                href="/kontakt"
                                className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-accent/20 text-sm md:text-lg"
                            >
                                <Mail size={20} />
                                Anfrage-Formular öffnen
                            </a>
                            <a
                                href="https://wa.me/491603872886"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 text-sm md:text-lg"
                            >
                                <MessageCircle size={20} />
                                Direkt per WhatsApp schreiben
                            </a>
                            <a
                                href="tel:+4952197795644"
                                className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all text-sm md:text-lg border border-white/10"
                            >
                                <Phone size={20} />
                                Jetzt anrufen: 0521 97795644
                            </a>
                        </div>
                    </div>
                </section>

                {/* Address & Opening Hours */}
                <section className="py-8 md:py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Address Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 md:p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <MapPin className="text-accent" size={20} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg">Standort</h3>
                                </div>
                                <div className="space-y-2 mb-6">
                                    <p className="text-white text-lg font-medium">SEM MotorenTec</p>
                                    <p className="text-white/60">Windelsbleicherstr. 188a</p>
                                    <p className="text-white/60">33659 Bielefeld</p>
                                    <p className="text-white/60">Deutschland</p>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Windelsbleicherstr+188a+33659+Bielefeld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <MapPin size={16} />
                                    Route planen
                                    <ExternalLink size={14} />
                                </a>
                            </motion.div>

                            {/* Opening Hours Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass-card p-6 md:p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <Clock className="text-accent" size={20} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg">Öffnungszeiten</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                                        <span className="text-white/60">Montag - Freitag</span>
                                        <span className="text-white font-medium">09:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                                        <span className="text-white/60">Samstag</span>
                                        <span className="text-white font-medium">09:00 - 12:00</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-white/60">Sonntag</span>
                                        <span className="text-white/40">Geschlossen</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-8 md:py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="glass-card rounded-2xl overflow-hidden h-64 md:h-96 relative">
                            {isMapAllowed ? (
                                <>
                                    <iframe
                                        src="https://maps.google.com/maps?q=Windelsbleicherstr.%20188a,+33659+Bielefeld&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Windelsbleicherstr+188a+33659+Bielefeld"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 right-4 bg-white text-anthracite text-sm font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
                                    >
                                        <MapPin size={16} className="text-accent" />
                                        Größere Karte öffnen
                                    </a>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-anthracite-light">
                                    <MapPin size={48} className="text-white/20 mb-4" />
                                    <p className="text-white/60 text-sm mb-4 max-w-md">
                                        Google Maps benötigt Ihre Zustimmung. Bitte akzeptieren Sie externe Medien in den Cookie-Einstellungen.
                                    </p>
                                    <button
                                        onClick={allowMap}
                                        className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
                                    >
                                        Google Maps aktivieren
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
