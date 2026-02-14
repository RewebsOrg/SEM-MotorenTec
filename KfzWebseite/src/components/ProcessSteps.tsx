'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Truck, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: <MessageSquare size={28} />,
        title: 'Erstberatung & Angebot',
        description: 'Individuelle Beratung und ein auf Ihr Fahrzeug angepasstes Angebot',
    },
    {
        number: '02',
        icon: <Truck size={28} />,
        title: 'Fahrzeug-Abholung',
        description: 'Kostenlose Abholung Ihres Fahrzeugs bundesweit',
    },
    {
        number: '03',
        icon: <Wrench size={28} />,
        title: 'Instandsetzung in unserem Meisterbetrieb',
        description: 'Motorinstandsetzung durch Erstausrüster Qualität für besten Motorlauf',
    },
    {
        number: '04',
        icon: <CheckCircle2 size={28} />,
        title: 'Fertigstellung',
        description: 'Nach dem Einbau werden alle Flüssigkeiten aufgefüllt, der Motor geprüft und es gilt eine 12-monatige Gewährleistung ohne Kilometerbegrenzung',
    },
];

const ProcessSteps = () => {
    return (
        <section className="py-16 bg-anthracite relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4">Unser Prozess</h2>
                    <h3 className="text-white text-[1.6rem] md:text-5xl font-black tracking-tight mb-2 md:mb-4 px-4 md:px-0">
                        IN 4 SCHRITTEN ZUR<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">MOTORINSTANDSETZUNG</span>
                    </h3>
                    <div className="w-16 md:w-20 h-1 bg-accent mx-auto mt-3 md:mt-6" />
                </motion.div>

                {/* Steps Grid - 2x2 on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 relative">
                    {/* Connecting line on large screens */}
                    <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-white/[0.03] border border-white/10 p-3 md:p-8 rounded-xl md:rounded-2xl h-full transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1">
                                {/* Step number badge */}
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-accent rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-6 shadow-lg shadow-accent/20 transition-all duration-300 ease-out group-hover:shadow-accent/40 group-hover:scale-105">
                                    <span className="text-white font-black text-xs md:text-lg">{step.number}</span>
                                </div>

                                {/* Icon - hidden on mobile for space */}
                                <div className="hidden md:flex w-11 h-11 bg-white/5 rounded-lg items-center justify-center text-accent mb-5 transition-all duration-300 ease-out group-hover:bg-accent/10">
                                    {step.icon}
                                </div>

                                <h4 className="text-white text-xs md:text-lg font-bold mb-1 md:mb-3 transition-colors duration-300 ease-out group-hover:text-accent leading-tight">
                                    {step.title}
                                </h4>
                                <p className="text-white/50 leading-snug text-[10px] md:text-sm hidden sm:block">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/kontakt"
                        className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 ease-out shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 text-lg group"
                    >
                        <span>Jetzt Anfrage starten</span>
                        <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSteps;
