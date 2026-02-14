'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { services } from '@/data/services';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServicePageClientProps {
    slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
    const [mounted, setMounted] = React.useState(false);
    const service = services.find((s) => s.slug === slug);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (!service) {
        return (
            <div className="min-h-screen bg-anthracite text-white flex flex-col items-center justify-center">
                <Navbar />
                <h1 className="text-4xl font-bold mb-4">Service nicht gefunden</h1>
                <Link href="/" className="text-accent underline">
                    Zurück zur Startseite
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-anthracite">
            <Navbar />

            {/* Hero Header */}
            <div className="relative pt-32 pb-6 lg:pt-48 lg:pb-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={`${service.title} Hintergrundbild`}
                        fill
                        className="object-cover opacity-20 blur-sm"
                        quality={60}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-anthracite/90 via-anthracite/95 to-anthracite" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/leistungen" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={20} />
                            <span>Zurück zur Übersicht</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-accent font-medium">
                            {service.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-4 pb-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="text-white/80 leading-relaxed text-lg mb-8 whitespace-pre-line">
                            {(service.detailedDescription || service.description).trim()}
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6">Ihre Vorteile</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                                        <span className="text-white/90 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar / Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 relative h-[400px]">
                            <Image
                                src={service.image}
                                alt={`${service.title} - Detail Ansicht`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                quality={90}
                            />
                        </div>

                        <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
                            <h3 className="text-xl font-bold text-white mb-4">Haben Sie Fragen?</h3>
                            <p className="text-white/70 mb-6">
                                Wir beraten Sie gerne unverbindlich zu dieser Leistung. Kontaktieren Sie uns noch heute!
                            </p>
                            <a href="#anfrage" className="block w-full bg-accent hover:bg-accent-dark text-center text-white font-bold py-4 rounded-xl transition-all">
                                Jetzt Termin anfragen
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="anfrage">
                <ContactForm />
            </div>

            <Footer />
        </main>
    );
}
