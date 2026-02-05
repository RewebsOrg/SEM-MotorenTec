'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function ServicesOverviewClient() {
    return (
        <main className="min-h-screen bg-anthracite">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-anthracite-light/20 to-transparent pointer-events-none" />
                {/* Background decoration */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        Unsere <span className="text-accent">Dienstleistungen</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Wir bieten Ihnen professionelle Lösungen rund um Ihren Motor.
                        Von der Instandsetzung bis zur Generalüberholung – alles aus einer Hand.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full" />
                </motion.div>
            </div>

            {/* Services List - Expanded Version */}
            <div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6 pb-24 space-y-32">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}
                    >
                        {/* Image Side */}
                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Link href={`/leistungen/${service.slug}`} className="block h-full relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full min-h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-transparent to-transparent opacity-60" />

                                {/* Badge */}
                                <div className="absolute bottom-6 left-6 bg-accent text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-3 shadow-lg backdrop-blur-sm border border-white/20">
                                    {service.icon}
                                    <span>{service.subtitle}</span>
                                </div>
                            </Link>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                {service.title}
                            </h2>

                            {/* Use detailed description but truncate or show full? User said "ausführlich". Let's show full detailed text but formatted nicely. */}
                            <div className="prose prose-invert prose-lg max-w-none mb-10 text-white/70 leading-relaxed whitespace-pre-line">
                                {service.detailedDescription}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                        <div className="w-6 h-1 bg-accent rounded-full" />
                                        Ihre Vorteile
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                                <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                                                <span className="text-white/90 text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a
                                        href="/kontakt"
                                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 animate-glow"
                                    >
                                        <span>Jetzt anfragen</span>
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
