'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-anthracite">
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-white/5 border-t-accent rounded-full"
                />
                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-4 border-white/5 border-b-accent-light rounded-full"
                />
                {/* Logo Text (Optional) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}
