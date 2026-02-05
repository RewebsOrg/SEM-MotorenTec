'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Tag, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// --- TYPE DEFINITIONS ---
interface Offer {
    id: string;
    title: string;
    price: string;
    image: string;
    link: string;
}

// --- DUMMY DATA ---
const DUMMY_OFFERS: Offer[] = [
    {
        id: '1',
        title: 'BMW N47D20C Austauschmotor Generalüberholt',
        price: '2.499,00 EUR',
        image: '/images/engine-placeholder-1.jpg',
        link: '#',
    },
    {
        id: '2',
        title: 'Steuerkette Wechsel Service BMW 3er E90 E91 E92 E93',
        price: '899,00 EUR',
        image: '/images/engine-placeholder-2.jpg',
        link: '#',
    },
    {
        id: '3',
        title: 'Audi 3.0 TDI CDUD Motor Instandsetzung',
        price: '3.150,00 EUR',
        image: '/images/engine-placeholder-3.jpg',
        link: '#',
    },
    {
        id: '4',
        title: 'VW T5 2.0 TDI CXEB Rumpfmotor Neu',
        price: '1.950,00 EUR',
        image: '/images/engine-placeholder-4.jpg',
        link: '#',
    },
    {
        id: '5',
        title: 'Mercedes OM651 Zylinderkopf Überholt',
        price: '650,00 EUR',
        image: '/images/engine-placeholder-1.jpg',
        link: '#',
    },
    {
        id: '6',
        title: 'Kurbelwelle BMW N57D30A Original Poliert',
        price: '450,00 EUR',
        image: '/images/engine-placeholder-2.jpg',
        link: '#',
    },
];

export default function AngebotePageClient() {
    const [offers, setOffers] = useState<Offer[]>(DUMMY_OFFERS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchEbayOffers = async () => {
        console.log('Fetching eBay offers... (Currently using Dummy Data)');
    };

    useEffect(() => {
        fetchEbayOffers();
    }, []);

    return (
        <main className="min-h-screen bg-anthracite selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-40 pb-24 px-6 relative">
                {/* Background Decoration */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Unsere <span className="text-accent">eBay-Angebote</span>
                        </h1>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg">
                            Entdecken Sie unsere aktuellen Motoren, Ersatzteile und Service-Angebote direkt von unserem eBay-Shop.
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full" />
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center max-w-lg mx-auto mb-12">
                            <AlertCircle className="mx-auto text-red-500 mb-2" size={32} />
                            <p className="text-red-400">Es ist ein Fehler aufgetreten: {error}</p>
                        </div>
                    )}

                    {/* Product Grid */}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offers.map((offer, index) => (
                                <motion.div
                                    key={offer.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-anthracite-light/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] bg-anthracite-dark overflow-hidden">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/252525/FFF?text=Kein+Bild';
                                            }}
                                        />

                                        {/* Price Badge */}
                                        <div className="absolute top-4 right-4 bg-accent text-white font-bold py-1 px-3 rounded-lg shadow-lg text-sm">
                                            {offer.price}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-white font-bold text-lg mb-4 line-clamp-2 min-h-[3.5rem]" title={offer.title}>
                                            {offer.title}
                                        </h3>

                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider font-semibold">
                                                <Tag size={14} />
                                                eBay Angebot
                                            </span>

                                            <a
                                                href={offer.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 group-hover:border-accent/40 group-hover:text-accent"
                                            >
                                                Zu eBay
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && offers.length === 0 && (
                        <div className="text-center py-20 text-white/40">
                            <p>Aktuell sind keine Angebote geladen.</p>
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </main>
    );
}
