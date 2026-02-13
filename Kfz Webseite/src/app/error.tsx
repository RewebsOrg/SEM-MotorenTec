'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-anthracite flex items-center justify-center px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full text-center"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8">
                    <AlertTriangle className="text-accent" size={40} />
                </div>

                <h1 className="text-3xl font-black text-white mb-4">Ups! Etwas ist schiefgelaufen.</h1>
                <p className="text-white/60 mb-10 leading-relaxed">
                    Es gab ein technisches Problem beim Laden dieser Seite. Unser Team wurde bereits informiert.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={reset}
                        className="flex-1 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                    >
                        <RefreshCw size={20} />
                        Erneut versuchen
                    </button>

                    <Link
                        href="/"
                        className="flex-1 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10"
                    >
                        <Home size={20} />
                        Zur Startseite
                    </Link>
                </div>

                {error.digest && (
                    <p className="mt-8 text-[10px] text-white/20 font-mono tracking-widest uppercase">
                        Error ID: {error.digest}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
