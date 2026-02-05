import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Allgemeine Geschäftsbedingungen (AGB) - SEM MotorenTec',
    description: 'Unsere allgemeinen Geschäftsbedingungen.',
};

export default function AgbPage() {
    return (
        <main className="min-h-screen bg-anthracite text-white selection:bg-accent selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black mb-10 text-accent">Allgemeine Geschäftsbedingungen</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 1 Geltungsbereich</h2>
                        <p>
                            Für die Geschäftsbeziehung zwischen SEM MotorenTec (nachfolgend „Auftragnehmer“) und dem Kunden (nachfolgend „Auftraggeber“) gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Auftragserteilung gültigen Fassung.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 2 Vertragsabschluss</h2>
                        <p>
                            Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die Ausführung der Arbeiten zustande.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
                        <p>
                            Die Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer, sofern nicht anders ausgewiesen. Rechnungsbeträge sind sofort nach Erhalt der Rechnung ohne Abzug zur Zahlung fällig, sofern keine andere Vereinbarung getroffen wurde.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 4 Eigentumsvorbehalt</h2>
                        <p>
                            Eingebaute Teile und Zubehör bleiben bis zur vollständigen Bezahlung aller Forderungen aus dem Vertrag Eigentum des Auftragnehmers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 5 Gewährleistung</h2>
                        <p>
                            Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen. Für Motorinstandsetzungen und überholte Motoren gewähren wir eine Garantie von 12 Monaten ohne Kilometerbegrenzung, sofern im Einzelfall nichts anderes vereinbart wurde.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 6 Haftung</h2>
                        <p>
                            Der Auftragnehmer haftet für Schäden – gleich aus welchem Rechtsgrund – nur, wenn er, sein gesetzlicher Vertreter oder sein Erfüllungsgehilfe sie vorsätzlich oder grob fahrlässig verursacht hat. Für einfache Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 7 Gerichtsstand</h2>
                        <p>
                            Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist der Sitz des Auftragnehmers (Bielefeld), sofern der Auftraggeber Kaufmann oder eine juristische Person des öffentlichen Rechts ist.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
