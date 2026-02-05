'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

import { motion } from 'framer-motion';

export default function ContactPageClient() {
    return (
        <main className="min-h-screen bg-anthracite">
            <Navbar />
            <div className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center"
                >
                    <h2 className="text-accent font-bold tracking-widest text-base uppercase mb-4">Kontakt aufnehmen</h2>
                    <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6">ANFRAGE-FORMULAR</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Beschreiben Sie uns Ihr Anliegen und wir melden uns schnellstmöglich bei Ihnen zurück.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto mt-6" />
                </motion.div>
                <ContactForm />
            </div>
            <Footer />
        </main>
    );
}
