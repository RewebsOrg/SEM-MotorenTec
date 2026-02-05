import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum - SEM MotorenTec',
    description: 'Impressum von SEM MotorenTec. Angaben gemäß § 5 TMG.',
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-anthracite text-white selection:bg-accent selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black mb-10 text-accent">Impressum</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            <strong>SEM MotorenTec</strong><br />
                            Windelsbleicherstr. 188a<br />
                            33659 Bielefeld
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <p>
                            Telefon: 0160 3872886<br />
                            E-Mail: info@sem-motorentec.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            <span className="text-white/40">[Bitte USt-ID ergänzen, z.B. DE 123 456 789]</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                        <p>
                            SEM MotorenTec<br />
                            Windelsbleicherstr. 188a<br />
                            33659 Bielefeld
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                                https://ec.europa.eu/consumers/odr/
                            </a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
