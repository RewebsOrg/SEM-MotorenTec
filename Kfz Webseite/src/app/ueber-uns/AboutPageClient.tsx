'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Promise from '@/components/Promise';

export default function AboutPageClient() {
    return (
        <main className="min-h-screen bg-anthracite">
            <Navbar />
            <div className="pt-20">
                <Promise />
            </div>
            <Footer />
        </main>
    );
}
